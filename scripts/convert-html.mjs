import fs from "node:fs";
import path from "node:path";
import { parse } from "parse5";
import styleToObject from "style-to-object";

// Run only when intentionally re-importing the original design; generated components are editable.
const source = process.argv[2];
if (!source)
  throw new Error(
    "Usage: node scripts/convert-html.mjs path/to/kudupray-premium.html",
  );
const html = fs.readFileSync(source, "utf8");
const doc = parse(html);
const root = doc.childNodes.find((n) => n.tagName === "html");
const head = root.childNodes.find((n) => n.tagName === "head");
const body = root.childNodes.find((n) => n.tagName === "body");
const write = (file, text) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
};
const scripts = body.childNodes
  .filter((n) => n.tagName === "script")
  .map((n) => n.childNodes.map((c) => c.value).join(""))
  .join("\n");
const css = head.childNodes
  .filter((n) => n.tagName === "style")
  .map((n) => n.childNodes.map((c) => c.value).join(""))
  .join("\n");
const handlers = [];
const aliases = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  colspan: "colSpan",
  rowspan: "rowSpan",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  spellcheck: "spellCheck",
  crossorigin: "crossOrigin",
  playsinline: "playsInline",
  srcset: "srcSet",
  "accept-charset": "acceptCharset",
  "http-equiv": "httpEquiv",
  contenteditable: "contentEditable",
  viewbox: "viewBox",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
};
const booleans = new Set([
  "hidden",
  "disabled",
  "multiple",
  "required",
  "readOnly",
  "autoFocus",
  "controls",
  "loop",
  "muted",
  "playsInline",
  "open",
  "reversed",
]);
const voids = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
const events = {
  onclick: "onClick",
  onchange: "onChange",
  oninput: "onInput",
  onkeydown: "onKeyDown",
  onkeyup: "onKeyUp",
  onsubmit: "onSubmit",
  onfocus: "onFocus",
  onblur: "onBlur",
  onerror: "onError",
  onload: "onLoad",
  onpointerdown: "onPointerDown",
};
function jsx(node) {
  if (node.nodeName === "#text")
    return node.value.trim() ? `{${JSON.stringify(node.value)}}` : "\n";
  if (!node.tagName) return "";
  const tag = node.tagName;
  if (tag === "script") return "";
  let attrs = node.attrs
    .map((a) => {
      if (a.name.startsWith("on")) {
        if (!events[a.name]) throw new Error("Unknown event: " + a.name);
        const id = handlers.push(a.value) - 1;
        return `${events[a.name]}={(event) => dispatch(${id}, event)}`;
      }
      if (a.name === "selected") return "";
      if (a.name === "style") {
        const style = {};
        styleToObject(a.value, (k, v) => {
          style[
            k.startsWith("--")
              ? k
              : k
                  .replace(/^-ms-/, "ms-")
                  .replace(/-([a-z])/g, (_, c) => c.toUpperCase())
          ] = v;
        });
        return `style={${JSON.stringify(style)}}`;
      }
      let key = aliases[a.name] || a.name;
      if (key === "value" && ["input", "select", "textarea"].includes(tag))
        key = "defaultValue";
      if (key === "checked") return "defaultChecked";
      return booleans.has(key)
        ? `${key}={true}`
        : `${key}=${JSON.stringify(a.value)}`;
    })
    .filter(Boolean);
  if (tag === "select" && !attrs.some((a) => a.startsWith("defaultValue"))) {
    const option = node.childNodes.find(
      (c) =>
        c.tagName === "option" && c.attrs.some((a) => a.name === "selected"),
    );
    if (option)
      attrs.push(
        `defaultValue=${JSON.stringify(option.attrs.find((a) => a.name === "value")?.value ?? option.childNodes.map((c) => c.value || "").join(""))}`,
      );
  }
  return `<${tag}${attrs.length ? " " + attrs.join(" ") : ""}${voids.has(tag) ? " />" : ">" + node.childNodes.map(jsx).join("") + `</${tag}>`}`;
}
const parts = [];
body.childNodes
  .filter((n) => n.tagName && n.tagName !== "script")
  .forEach((node, index) => {
    const id =
      node.attrs.find((a) => a.name === "id")?.value ||
      {
        a: "SkipLink",
        header: "AppHeader",
        nav: "AppNavigation",
        footer: "AppFooter",
      }[node.tagName] ||
      node.tagName + "-" + index;
    const name = id
      .split(/[^a-zA-Z0-9]+/)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join("");
    const markup = jsx(node);
    write(
      `components/sections/${name}.jsx`,
      `'use client';\n\nimport { dispatch } from '../runtime-events';\n\nexport default function ${name}() {\n  return (${markup});\n}\n`,
    );
    parts.push(name);
  });
write(
  "components/KuduPray.jsx",
  `'use client';\n\nimport Script from 'next/script';\n${parts.map((n) => `import ${n} from './sections/${n}';`).join("\n")}\n\n// Keep this shell stable: the preserved runtime owns dynamic lists, audio, and dialogs.\nexport default function KuduPray() {\n  return <>\n${parts.map((n) => `    <${n} />`).join("\n")}\n    <Script id="kudupray-runtime" src="/kudupray-runtime.js" strategy="afterInteractive" />\n  </>;\n}\n`,
);
write(
  "components/runtime-events.js",
  `// React handlers preserve the original handler's native event and DOM element.\nexport function dispatch(id, event) {\n  const handler = window.kuduprayHandlers?.[id];\n  if (!handler) return;\n  const result = handler.call(event.currentTarget, event);\n  if (result === false) { event.preventDefault(); event.stopPropagation(); }\n  return result;\n}\n`,
);
write(
  "public/kudupray-runtime.js",
  "// Preserved browser runtime. Loaded by next/script after React hydration.\n" +
    scripts.replace(
      /\/\/ Start App\s+init\(\);/,
      `// React event bridge; compiled functions preserve classic-script lexical scope.\n    window.kuduprayHandlers = [\n${handlers.map((s) => `function(event) { ${s} }`).join(",\n")}\n    ];\n    // Start once per document, after all React sections have hydrated.\n    init();\n    window.kuduprayReady = true;`,
    ),
);
write("app/globals.css", css);
const links = head.childNodes
  .filter((n) => n.tagName === "link")
  .map(jsx)
  .join("\n        ");
write(
  "app/layout.jsx",
  `import './globals.css';\n\nexport const metadata = {\n  title: 'KuduPray | Premium Islamic Companion',\n  description: 'Prayer times, Qur’an reading and audio, duas, daily remembrance, and practical Islamic guides.',\n};\nexport const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#047857' };\n\nexport default function RootLayout({ children }) {\n  return <html lang="en">\n    <head>\n        ${links}\n    </head>\n    <body>{children}</body>\n  </html>;\n}\n`,
);
write(
  "app/page.jsx",
  `import KuduPray from '../components/KuduPray';\n\nexport default function Home() {\n  return <KuduPray />;\n}\n`,
);
console.log(
  `Converted ${parts.length} React sections, ${handlers.length} event handlers, ${css.length} CSS characters, and ${scripts.length} JavaScript characters.`,
);
