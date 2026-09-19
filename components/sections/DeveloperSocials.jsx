"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const platforms = [
  ["Facebook", "https://www.facebook.com/", "fa-facebook-f"],
  ["Instagram", "https://www.instagram.com/", "fa-instagram"],
  ["X / Twitter", "https://x.com/", null],
  ["LinkedIn", "https://www.linkedin.com/", "fa-linkedin-in"],
  ["GitHub", "https://github.com/", "fa-github"],
];

export default function DeveloperSocials() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ left: 12, top: 12 });
  const trigger = useRef(null);
  const menu = useRef(null);

  useEffect(() => {
    if (!open) return;
    const place = () => {
      const rect = trigger.current.getBoundingClientRect();
      if (!rect.width) { setOpen(false); return; }
      const width = menu.current?.offsetWidth || 228;
      const height = menu.current?.offsetHeight || 260;
      const top = rect.top >= height + 20 ? rect.top - height - 8 : rect.bottom + 8;
      setPosition({
        left: Math.max(12, Math.min(rect.right - width, window.innerWidth - width - 12)),
        top: Math.max(12, Math.min(top, window.innerHeight - height - 12)),
      });
    };
    const outside = (event) => {
      if (!trigger.current.contains(event.target) && !menu.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === "Escape") { setOpen(false); trigger.current.focus(); }
    };
    place();
    menu.current?.querySelector("a")?.focus({ preventScroll: true });
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return <>
    <button ref={trigger} type="button" className="developer-social-trigger"
      aria-label={open ? "Hide social platforms" : "Show social platforms"}
      aria-expanded={open} aria-haspopup="dialog" aria-controls="developer-social-menu"
      onClick={() => setOpen(value => !value)}>
      <i className="fa-solid fa-share-nodes developer-connect-icon" aria-hidden="true" />
      <span className="developer-connect-label">Connect</span>
    </button>
    {open && createPortal(
      <div ref={menu} id="developer-social-menu" role="dialog" aria-label="Choose a social platform"
        className="footer-social-popover quran-reciter-picker developer-social-menu" style={position}>
        <span className="quran-reciter-picker-heading">Choose a platform</span>
        <div className="footer-social-popover-options quran-reciter-list">
          {platforms.map(([name, href, icon]) => <a key={name} href={href} target="_blank" rel="noreferrer"
            className="quran-reciter-option" onClick={() => { setOpen(false); trigger.current.focus(); }}>
            {icon ? <i className={`fa-brands ${icon}`} aria-hidden="true" /> : <b aria-hidden="true">X</b>}
            <span>{name}</span>
          </a>)}
        </div>
      </div>, document.body)}
  </>;
}
