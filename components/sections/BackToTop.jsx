"use client";

export default function BackToTop() {
  return (
    <button
      type="button"
      id="back-to-top"
      aria-label="Back to top"
      title="Back to top"
      tabIndex={-1}
    >
      <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
