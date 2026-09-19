"use client";

import { useState } from "react";
import Image from "next/image";

export default function AppFooter() {
  const [isMobileSocialOpen, setIsMobileSocialOpen] = useState(false);

  return (
    <footer className="app-footer" aria-label="KuduPray credits">
      <div className="footer-brand-mark brand-logo-mark" aria-hidden="true">
        <img src="/brand/kudupray-emblem.png" alt="" />
      </div>
      <div className="footer-copy">
        <div className="footer-kudu-credit">
          <span className="footer-kicker">{"KuduPray Premium"}</span>
          <p className="footer-primary">
            {"© 2026. Made for Islam and Muslims by "}
            <strong>{"Mufasa Khan."}</strong>
          </p>
        </div>
        <div className="footer-social-credit" aria-label="KuduPray social platforms">
          <span className="footer-social-label">{"Connect"}</span>
          <div className="footer-social-icons" role="list">
            <a role="listitem" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
            <a role="listitem" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
            <a role="listitem" href="https://x.com/" target="_blank" rel="noreferrer" className="footer-x-button" aria-label="X / Twitter" title="X / Twitter"><b aria-hidden="true">X</b></a>
            <a role="listitem" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
            <a role="listitem" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><i className="fa-brands fa-github" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="footer-signature">
          <div className="footer-partner-wrap">
            <div className="footer-partner-credit">
              <span className="footer-pukka-emblem" aria-hidden="true">
                <Image
                  src="/brand/pukka-gen-emblem.png"
                  alt=""
                  width={1254}
                  height={1254}
                  sizes="26px"
                />
              </span>
              <span className="footer-pukka-copy">
                <span className="footer-motto">{"Pukka Gen ~ No Duff."}</span>
                <span className="footer-company">{"An Intellisoft Company."}</span>
              </span>
            </div>
            <button
              type="button"
              className="footer-mobile-social-trigger"
              aria-label={isMobileSocialOpen ? "Hide social platforms" : "Show social platforms"}
              aria-controls="footer-mobile-social-icons"
              aria-expanded={isMobileSocialOpen}
              onClick={() => setIsMobileSocialOpen((isOpen) => !isOpen)}
            >
              <span aria-hidden="true">{"⟩⟩⟩"}</span>
            </button>
            <div id="footer-mobile-social-icons" className="footer-social-popover" role="dialog" aria-label="Choose a social platform" hidden={!isMobileSocialOpen}>
              <span className="footer-social-popover-title">{"Choose a platform"}</span>
              <div className="footer-social-popover-options">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook" onClick={() => setIsMobileSocialOpen(false)}><i className="fa-brands fa-facebook-f" aria-hidden="true"></i><span>{"Facebook"}</span></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram" onClick={() => setIsMobileSocialOpen(false)}><i className="fa-brands fa-instagram" aria-hidden="true"></i><span>{"Instagram"}</span></a>
                <a href="https://x.com/" target="_blank" rel="noreferrer" className="footer-x-button" aria-label="X / Twitter" title="X / Twitter" onClick={() => setIsMobileSocialOpen(false)}><b aria-hidden="true">X</b><span>{"X / Twitter"}</span></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" onClick={() => setIsMobileSocialOpen(false)}><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i><span>{"LinkedIn"}</span></a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" onClick={() => setIsMobileSocialOpen(false)}><i className="fa-brands fa-github" aria-hidden="true"></i><span>{"GitHub"}</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
