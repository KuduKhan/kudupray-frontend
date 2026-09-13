"use client";

import { dispatch } from "../runtime-events";

export default function Toast() {
  return (
    <div id="toast" role="status" aria-live="polite" aria-atomic="true">
      <i className="fa-solid fa-check"></i>
      {" Copied to Clipboard!"}
    </div>
  );
}
