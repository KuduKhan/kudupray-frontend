"use client";

import { dispatch } from "../runtime-events";

export default function AppNavigation() {
  return (
    <nav id="primary-navigation" className="floating-nav" aria-label="Primary navigation">
      <button
        type="button"
        className="nav-item active"
        onClick={(event) => dispatch(194, event)}
        aria-label="Prayer times"
        aria-current="page"
      >
        <div className="nav-tile icon-emerald">
          <i className="fa-regular fa-clock"></i>
        </div>
        <span>{"Times"}</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={(event) => dispatch(195, event)}
        aria-label="Prayer guides"
      >
        <div className="nav-tile icon-indigo">
          <i className="fa-regular fa-compass"></i>
        </div>
        <span>{"Guides"}</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={(event) => dispatch(196, event)}
        aria-label="Daily Companion"
      >
        <div className="nav-tile icon-cyan">
          <i className="fa-solid fa-star-and-crescent"></i>
        </div>
        <span>{"Companion"}</span>
      </button>
      <button
        type="button"
        className="nav-item quran-nav-item"
        id="desktop-quran-reader-nav"
        onClick={(event) => dispatch(197, event)}
        aria-label="Open Qur’an Reader"
        aria-controls="tab-quran-reader"
      >
        <div className="nav-tile icon-cyan">
          <i className="fa-solid fa-book-quran" aria-hidden="true"></i>
        </div>
        <span>{"Qur’an"}</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={(event) => dispatch(198, event)}
        aria-label="Duas library"
      >
        <div className="nav-tile icon-amber">
          <i className="fa-solid fa-hands-praying"></i>
        </div>
        <span>{"Duas"}</span>
      </button>

      <button
        type="button"
        className="nav-item support-nav-item"
        onClick={(event) => dispatch(199, event)}
        aria-label="Support KuduPray"
      >
        <div className="nav-tile icon-rose">
          <i className="fa-solid fa-hand-holding-heart"></i>
        </div>
        <span>{"Support"}</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={(event) => dispatch(200, event)}
        aria-label="Settings"
      >
        <div className="nav-tile icon-purple">
          <i className="fa-solid fa-gear"></i>
        </div>
        <span>{"Settings"}</span>
      </button>
    </nav>
  );
}
