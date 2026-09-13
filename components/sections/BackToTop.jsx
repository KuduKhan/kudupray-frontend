"use client";

import { dispatch } from "../runtime-events";

export default function BackToTop() {
  return (
    <button
      type="button"
      id="back-to-top"
      aria-label="Back to top"
      title="Back to top"
    >
      <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
