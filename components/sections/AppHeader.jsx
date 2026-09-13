"use client";

import { dispatch } from "../runtime-events";

export default function AppHeader() {
  return (
    <header>
      <div className="mobile-header-row">
        <div className="brand-lockup">
          <div className="brand-symbol brand-logo-mark" aria-hidden="true">
            <img src="/brand/kudupray-emblem.png" alt="" />
          </div>
          <div className="brand-copy">
            <img className="brand-wordmark" src="/brand/kudupray-wordmark.png" alt="KuduPray" />
            <span className="brand-kicker">
              {"Your daily worship companion"}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="mobile-support-button"
          id="mobile-support-button"
          onClick={(event) => dispatch(0, event)}
          aria-label="Open Support"
          title="Support"
        >
          <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          className="mobile-settings-button"
          id="mobile-settings-button"
          onClick={(event) => dispatch(1, event)}
          aria-label="Open Settings"
          title="Settings"
        >
          <i className="fa-solid fa-gear" aria-hidden="true"></i>
        </button>
      </div>
      <p className="brand-tagline">
        {
          "Prayer times, remembrance, and practical guidance—thoughtfully gathered in one peaceful place."
        }
      </p>
      <div className="header-meta">
        <button
          type="button"
          className="hijri-pill hijri-calendar-trigger"
          id="hijri-disp"
          onClick={(event) => dispatch(2, event)}
          aria-haspopup="dialog"
          aria-controls="islamic-calendar-layer"
          title="Open Islamic calendar"
        >
          <i className="fa-regular fa-calendar-alt" aria-hidden="true"></i>
          <span id="hijri-text">{"Islamic Date Loading..."}</span>
          <i
            className="fa-solid fa-chevron-right hijri-trigger-arrow"
            aria-hidden="true"
          ></i>
        </button>
        <span className="gregorian-date" id="greg-disp">
          {"Gregorian Date"}
        </span>
        <section
          className="header-prayer-countdown"
          aria-label="Next prayer countdown"
        >
          <div className="header-countdown-head">
            <div className="next-prayer-tag" id="next-label">
              <i
                className="fa-regular fa-clock"
                style={{ marginRight: "4px" }}
                aria-hidden="true"
              ></i>
              {" NEXT PRAYER"}
            </div>
            <span className="header-start-time">
              {"at "}
              <strong id="next-time">{"--:--"}</strong>
            </span>
          </div>
          <div className="header-countdown-time" id="countdown" aria-live="off">
            {"--:--:--"}
          </div>
          <div className="header-progress-track" aria-hidden="true">
            <div className="progress-fill" id="time-progress"></div>
          </div>
        </section>
      </div>
    </header>
  );
}
