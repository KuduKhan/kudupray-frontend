"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function AppFooter() {
  const [isMobileSocialOpen, setIsMobileSocialOpen] = useState(false);
  const [socialMenuPosition, setSocialMenuPosition] = useState({ left: 8, bottom: 8 });
  const socialTriggerRef = useRef(null);
  const socialMenuRef = useRef(null);

  useEffect(() => {
    if (!isMobileSocialOpen) return undefined;

    const positionSocialMenu = () => {
      const trigger = socialTriggerRef.current;
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      const menuWidth = Math.min(228, window.innerWidth - 28);
      setSocialMenuPosition({
        left: Math.max(14, Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 14)),
        bottom: Math.max(12, window.innerHeight - rect.top + 10),
      });
    };

    positionSocialMenu();
    window.addEventListener("resize", positionSocialMenu);
    window.addEventListener("scroll", positionSocialMenu, true);
    return () => {
      window.removeEventListener("resize", positionSocialMenu);
      window.removeEventListener("scroll", positionSocialMenu, true);
    };
  }, [isMobileSocialOpen]);

  useEffect(() => {
    if (!isMobileSocialOpen) return undefined;

    const closeOnOutsideInteraction = (event) => {
      if (socialTriggerRef.current?.contains(event.target) || socialMenuRef.current?.contains(event.target)) return;
      setIsMobileSocialOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMobileSocialOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideInteraction);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideInteraction);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileSocialOpen]);

  return (
    <>
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
                  sizes="(max-width: 599px) 33px, 45px"
                />
              </span>
              <span className="footer-pukka-copy">
                <span className="footer-motto">{"Pukka Gen ~ No Duff."}</span>
                <span className="footer-company">{"An Intellisoft Company."}</span>
              </span>
              <a
                className="footer-partner-link"
                href="https://pukkagennoduff.vercel.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the official Pukka Gen website"
                title="Visit Pukka Gen"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              </a>
            </div>
            <button
              ref={socialTriggerRef}
              type="button"
              className="footer-mobile-social-trigger"
              aria-label={isMobileSocialOpen ? "Hide social platforms" : "Show social platforms"}
              aria-controls="footer-mobile-social-icons"
              aria-expanded={isMobileSocialOpen}
              onClick={() => setIsMobileSocialOpen((isOpen) => !isOpen)}
            >
              <span aria-hidden="true">{"⟩⟩⟩"}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
    {isMobileSocialOpen && typeof document !== "undefined" && createPortal(
      <div
        ref={socialMenuRef}
        id="footer-mobile-social-icons"
        className="footer-social-popover quran-reciter-picker"
        role="dialog"
        aria-label="Choose a social platform"
        style={{ left: `${socialMenuPosition.left}px`, bottom: `${socialMenuPosition.bottom}px` }}
      >
        <span className="footer-social-popover-title quran-reciter-picker-heading">{"Choose a platform"}</span>
        <div className="footer-social-popover-options quran-reciter-list">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook" className="quran-reciter-option" onClick={() => setIsMobileSocialOpen(false)}><i className="fa-brands fa-facebook-f" aria-hidden="true"></i><span>{"Facebook"}</span></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram" className="quran-reciter-option" onClick={() => setIsMobileSocialOpen(false)}><i className="fa-brands fa-instagram" aria-hidden="true"></i><span>{"Instagram"}</span></a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" className="footer-x-button quran-reciter-option" aria-label="X / Twitter" title="X / Twitter" onClick={() => setIsMobileSocialOpen(false)}><b aria-hidden="true">X</b><span>{"X / Twitter"}</span></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="quran-reciter-option" onClick={() => setIsMobileSocialOpen(false)}><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i><span>{"LinkedIn"}</span></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="quran-reciter-option" onClick={() => setIsMobileSocialOpen(false)}><i className="fa-brands fa-github" aria-hidden="true"></i><span>{"GitHub"}</span></a>
        </div>
      </div>,
      document.body,
    )}
  </>
  );
}
