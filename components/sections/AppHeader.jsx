"use client";

import { dispatch } from "../runtime-events";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function AppHeader() {
  const [islamuslimOpen, setIslamuslimOpen] = useState(false);
  const appDialog = useRef(null);
  const appTrigger = useRef(null);
  const appFrame = useRef(null);
  useEffect(() => {
    if (!islamuslimOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    appDialog.current?.showModal();
    const handleBack = (event) => {
      if (event.origin === window.location.origin && event.source === appFrame.current?.contentWindow
        && event.data?.type === "islamuslim:close") setIslamuslimOpen(false);
    };
    window.addEventListener("message", handleBack);
    return () => {
      window.removeEventListener("message", handleBack);
      document.body.style.overflow = previousOverflow;
      appTrigger.current?.focus();
    };
  }, [islamuslimOpen]);
  return (
    <>
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
        <div className="kudupray-header-actions" role="group" aria-label="App shortcuts">
        <button
          ref={appTrigger}
          type="button"
          className="mobile-support-button islamuslim-launch-button"
          onClick={() => setIslamuslimOpen(true)}
          aria-label="Open IslaMuslim"
          aria-haspopup="dialog"
          title="IslaMuslim · open app"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
            <path d="M20 3v4M22 5h-4" />
          </svg>
        </button>
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
          <div className="header-clock-row">
            <div className="header-countdown-time" id="countdown" aria-live="off">
              {"--:--:--"}
            </div>
            <div className="header-current-time">
              <span>{"Current time"}</span>
              <time id="header-current-time" lang="ar" dir="ltr" aria-live="off">
                {"--:--:--"}
              </time>
            </div>
          </div>
          <div className="header-progress-track" aria-hidden="true">
            <div className="progress-fill" id="time-progress"></div>
          </div>
        </section>
      </div>
    </header>
    {islamuslimOpen && createPortal(
      <dialog
        ref={appDialog}
        className="islamuslim-app-dialog"
        aria-label="IslaMuslim app"
        onCancel={(event) => { event.preventDefault(); setIslamuslimOpen(false); }}
      >
        <iframe ref={appFrame} src="/islamuslim.html" title="IslaMuslim learning app" className="islamuslim-app-frame" />
      </dialog>, document.body
    )}
    </>
  );
}
