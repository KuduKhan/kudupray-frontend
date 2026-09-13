"use client";

import { dispatch } from "../runtime-events";

export default function TabSupport() {
  return (
    <div id="tab-support" className="page">
      <div className="desktop-page-heading">
        <div className="desktop-heading-icon">
          <i className="fa-solid fa-heart" aria-hidden="true"></i>
        </div>
        <div>
          <h2>{"Support KuduPray"}</h2>
          <p>
            {
              "Help keep this worship companion free, thoughtful, and accessible to everyone."
            }
          </p>
        </div>
      </div>
      <div className="card support-shell">
        <div className="section-header">
          <div className="section-icon">
            <i className="fa-solid fa-hand-holding-heart"></i>
          </div>
          <h3 className="section-title">{"Every kind of support matters"}</h3>
        </div>
        <div className="support-content">
          <div className="support-three-column">
            <div className="info-glass-card support-hero">
              <div className="premium-badge">
                <i className="fa-solid fa-circle-check"></i>
                {" Free · Ad-free · Privacy-minded"}
              </div>
              <div className="heart-icon-container">
                <i className="fa-solid fa-heart"></i>
              </div>
              <p className="support-hero-lead">
                <strong>{"KuduPray"}</strong>
                {
                  " is built to make dependable worship tools easier to reach—without ads, paywalls, or attention tracking.\n                "
                }
              </p>
              <p className="support-hero-copy">
                {
                  "\n                    If KuduPray has been useful to you, you can help through a contribution, an honest review, a thoughtful share, or clear feedback. Each one helps the app improve.\n                "
                }
              </p>
              <div className="support-assurance">
                <i className="fa-solid fa-shield-heart" aria-hidden="true"></i>
                <span>
                  <strong>{"Support is always optional."}</strong>
                  {
                    " Core prayer, guide, and dua features will remain free to use."
                  }
                </span>
              </div>
              <details className="info-disclosure compact support-impact">
                <summary>
                  <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                  {"Where support helps"}
                </summary>
                <div className="disclosure-body">
                  <p className="support-impact-intro">
                    {
                      "Your support strengthens the essentials behind a dependable worship companion."
                    }
                  </p>
                  <div className="info-grid">
                    <div className="info-stat support-impact-item">
                      <span className="support-impact-icon" aria-hidden="true">
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                      </span>
                      <div>
                        <strong>{"Reliable upkeep"}</strong>
                        <span>
                          {
                            "Maintain prayer tools, location services, and compatibility."
                          }
                        </span>
                      </div>
                    </div>
                    <div className="info-stat support-impact-item">
                      <span className="support-impact-icon" aria-hidden="true">
                        <i className="fa-solid fa-book-quran"></i>
                      </span>
                      <div>
                        <strong>{"Content quality"}</strong>
                        <span>
                          {
                            "Review guides, references, translations, and corrections carefully."
                          }
                        </span>
                      </div>
                    </div>
                    <div className="info-stat support-impact-item">
                      <span className="support-impact-icon" aria-hidden="true">
                        <i className="fa-solid fa-universal-access"></i>
                      </span>
                      <div>
                        <strong>{"Inclusive access"}</strong>
                        <span>
                          {
                            "Improve readability, accessibility, privacy, and low-bandwidth use."
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            <section
              className="support-choice-column"
              aria-labelledby="support-choice-title"
            >
              <p className="support-choice-intro" id="support-choice-title">
                {
                  "Choose the option that feels right for you—there is no preferred or required way to help."
                }
              </p>
              <div className="support-orbit">
                <div className="support-action-grid">
                  <button
                    type="button"
                    onClick={(event) => dispatch(183, event)}
                    className="support-tile support-contribute"
                    aria-label="Ask how to support KuduPray"
                  >
                    <span className="tile-icon icon-amber">
                      <i className="fa-solid fa-mug-hot"></i>
                    </span>
                    <span className="tile-title">{"Contribute"}</span>
                    <span className="tile-sub">{"Ask how to help"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(event) => dispatch(184, event)}
                    className="support-tile support-share"
                    aria-label="Share KuduPray"
                  >
                    <span className="tile-icon icon-blue">
                      <i className="fa-solid fa-share-nodes"></i>
                    </span>
                    <span className="tile-title">{"Share KuduPray"}</span>
                    <span className="tile-sub">{"Recommend thoughtfully"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(event) => dispatch(185, event)}
                    className="support-tile support-review"
                    aria-label="Send an honest KuduPray review"
                  >
                    <span className="tile-icon icon-purple">
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="tile-title">{"Review"}</span>
                    <span className="tile-sub">{"Share an honest rating"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(event) => dispatch(186, event)}
                    className="support-tile support-feedback"
                    aria-label="Send feedback or suggest a feature"
                  >
                    <span className="tile-icon icon-emerald">
                      <i className="fa-regular fa-lightbulb"></i>
                    </span>
                    <span className="tile-title">{"Send Feedback"}</span>
                    <span className="tile-sub">{"Report or suggest"}</span>
                  </button>
                </div>
                <p
                  className="support-action-status"
                  id="support-action-status"
                  role="status"
                  aria-live="polite"
                  hidden={true}
                >
                  <i
                    className="fa-solid fa-circle-check"
                    aria-hidden="true"
                  ></i>
                  <span></span>
                </p>
                <details className="info-disclosure support-more">
                  <summary>
                    <i
                      className="fa-solid fa-circle-question"
                      aria-hidden="true"
                    ></i>
                    {"Other meaningful ways to help"}
                  </summary>
                  <div className="disclosure-body">
                    <ul className="knowledge-list">
                      <li>
                        <strong>{"Report a correction:"}</strong>
                        {
                          " Name the page, quote the wording, and include a reliable reference when possible."
                        }
                      </li>
                      <li>
                        <strong>{"Improve accessibility:"}</strong>
                        {
                          " Tell us about issues with screen readers, text size, contrast, keyboard use, or slower connections."
                        }
                      </li>
                      <li>
                        <strong>{"Help with language:"}</strong>
                        {
                          " Suggest clearer translations while preserving the original meaning and context."
                        }
                      </li>
                      <li>
                        <strong>{"Share with care:"}</strong>
                        {
                          " Recommend KuduPray personally and without spam, pressure, or exaggerated claims."
                        }
                      </li>
                      <li>
                        <strong>{"Make dua:"}</strong>
                        {
                          " Pray that the work remains sincere, accurate, beneficial, and protected from error."
                        }
                      </li>
                    </ul>
                    <div className="reference-line">
                      {
                        "For fiqh differences or local prayer practice, please mention the school, scholar, or mosque guidance your feedback follows."
                      }
                    </div>
                  </div>
                </details>
              </div>
            </section>

            <aside className="support-developer-note">
              <i
                className="fa-solid fa-quote-right support-note-quote"
                aria-hidden="true"
              ></i>
              <div className="support-note-heading">
                <span className="support-note-emblem" aria-hidden="true">
                  <i className="fa-solid fa-code"></i>
                </span>
                <div>
                  <span className="support-note-kicker">
                    {"From the developer"}
                  </span>
                  <h4>{"Built with care, kept for everyone"}</h4>
                </div>
              </div>
              <blockquote>
                {
                  "\n                    “Jazakumullahu khayran for trusting KuduPray with a small part of your daily worship. Every careful correction, sincere dua, and thoughtful share helps me build it with greater care. May Allah accept it, keep it beneficial, and forgive its shortcomings.”\n                "
                }
              </blockquote>
              <div className="support-note-footer">
                <p className="support-note-principle">
                  <i
                    className="fa-solid fa-shield-heart"
                    aria-hidden="true"
                  ></i>
                  <span>
                    {
                      "Core worship tools remain free, ad-free, and privacy-minded."
                    }
                  </span>
                </p>
                <div className="support-note-signature">
                  <div className="support-note-signature-copy">
                    <strong>{"Mufasa Khan"}</strong>
                    <span>{"Founder & Lead Developer"}</span>
                  </div>
                  <span className="support-note-avatar" aria-hidden="true">
                    <span className="support-note-monogram">{"MK"}</span>
                    <i className="fa-solid fa-star support-note-avatar-star"></i>
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
