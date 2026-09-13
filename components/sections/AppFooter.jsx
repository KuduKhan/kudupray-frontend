"use client";

import { dispatch } from "../runtime-events";

export default function AppFooter() {
  return (
    <footer className="app-footer" aria-label="KuduPray credits">
      <div className="footer-brand-mark" aria-hidden="true">
        <img src="/brand/kudupray-emblem.png" alt="" />
      </div>
      <div className="footer-copy">
        <span className="footer-kicker">{"KuduPray Premium"}</span>
        <p className="footer-primary">
          {"© 2026. Made for Islam and Muslims by "}
          <strong>{"Mufasa Khan."}</strong>
        </p>
        <div className="footer-signature">
          <span className="footer-motto">
            <i className="fa-solid fa-shield-heart" aria-hidden="true"></i>
            {"Pukka Gen ~ No Duff."}
          </span>
          <span className="footer-divider" aria-hidden="true"></span>
          <span className="footer-company">
            <i className="fa-solid fa-building" aria-hidden="true"></i>
            {"An Intellisoft Company."}
          </span>
        </div>
      </div>
    </footer>
  );
}
