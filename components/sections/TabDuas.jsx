"use client";

import { dispatch } from "../runtime-events";

export default function TabDuas() {
  return (
    <div id="tab-duas" className="page">
      <div className="desktop-page-heading">
        <div className="dua-heading-copy">
          <div className="desktop-heading-icon">
            <i className="fa-solid fa-hands-praying" aria-hidden="true"></i>
          </div>
          <div>
            <h2>{"Duas & Ruqyah"}</h2>
            <p>
              {
                "Browse everyday supplications or open a dedicated collection of sourced Ruqyah recitations."
              }
            </p>
          </div>
        </div>
        <details className="info-disclosure dua-heading-help">
          <summary>
            <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
            <span>{"How to use the dua library"}</span>
          </summary>
          <div className="disclosure-body">
            <div className="guide-intro">
              <i className="fa-solid fa-hands-praying" aria-hidden="true"></i>
              <strong>{"Recite with presence and understanding."}</strong>
              {
                " Use the Arabic, transliteration, and meaning together—then ask Allah sincerely in the words you know."
              }
            </div>
            <ul className="knowledge-list">
              <li>
                {
                  "Begin with praise of Allah and blessings upon the Prophet when appropriate, then ask sincerely and with humility."
                }
              </li>
              <li>
                {
                  "Understand what you recite. Transliteration supports reading, but it cannot fully represent Arabic pronunciation."
                }
              </li>
              <li>
                {
                  "Qur’anic and prophetic duas may be recited as transmitted. You may also ask Allah in your own language for lawful needs."
                }
              </li>
              <li>
                {
                  "Avoid treating a recommended time, number, or wording as obligatory unless there is clear evidence."
                }
              </li>
              <li>
                {
                  "Combine dua with practical action: seek treatment, repay debts, repair relationships, study, and work while asking Allah for help."
                }
              </li>
              <li>
                {
                  "Acceptance is not limited to receiving the exact outcome immediately; continue with trust, patience, and good expectations of Allah."
                }
              </li>
            </ul>
            <div className="reference-line">
              {
                "For memorization, compare Arabic text with a recognized Qur’an or authenticated collection and learn pronunciation from a qualified teacher."
              }
            </div>
          </div>
        </details>
      </div>
      <div
        className="dua-library-switcher"
        role="tablist"
        aria-label="Choose a supplication library"
      >
        <button
          type="button"
          className="dua-mode-button"
          data-dua-mode="duas"
          role="tab"
          aria-selected="true"
          aria-controls="dua-container"
          onClick={(event) => dispatch(130, event)}
        >
          <i className="fa-solid fa-hands-praying" aria-hidden="true"></i>
          <span className="dua-mode-copy">
            <strong>{"Duas"}</strong>
            <small>{"Daily supplications"}</small>
          </span>
        </button>
        <button
          type="button"
          className="dua-mode-button"
          data-dua-mode="ruqyah"
          role="tab"
          aria-selected="false"
          aria-controls="dua-container"
          onClick={(event) => dispatch(131, event)}
        >
          <i className="fa-solid fa-shield-heart" aria-hidden="true"></i>
          <span className="dua-mode-copy">
            <strong>{"Ruqyah"}</strong>
            <small>{"Protection & healing"}</small>
          </span>
        </button>
      </div>
      <div
        className="ruqyah-library-intro"
        id="ruqyah-library-intro"
        hidden={true}
      >
        <span className="ruqyah-intro-icon" aria-hidden="true">
          <i className="fa-solid fa-book-quran"></i>
        </span>
        <div>
          <strong>{"Qur’anic and prophetic Ruqyah"}</strong>
          <p>
            {
              "Recite with sincere reliance upon Allah. Ruqyah is spiritual care and does not replace appropriate medical assessment or treatment."
            }
          </p>
        </div>
      </div>
      <div className="search-row">
        <div className="search-wrapper">
          <i className="fa-solid fa-magnifying-glass search-icon-inside"></i>
          <input
            type="text"
            id="search-input"
            className="search-box"
            placeholder="Search Duas..."
          />
          <button
            type="button"
            id="clear-search"
            className="search-clear"
            aria-label="Clear dua search"
            title="Clear search"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            id="dua-favourites-toggle"
            className="dua-favourites-toggle"
            aria-label="View favourite duas"
            title="View favourite duas"
            onClick={(event) => dispatch(132, event)}
          >
            <i className="fa-regular fa-star" aria-hidden="true"></i>
            <span>{"Favourites"}</span>
            <span id="dua-favourites-count">{"0"}</span>
          </button>
          <div id="dua-result-summary" role="status" aria-live="polite">
            {"Search Duas…"}
          </div>

          <div className="filter-inside-wrapper">
            <select
              id="dua-category-select"
              className="glass-select"
              onChange={(event) => dispatch(133, event)}
            >
              <option value="All">{"All Categories"}</option>
              <option value="Rabbana">{"Rabbana (40)"}</option>
              <option value="Morning">{"Morning"}</option>
              <option value="Evening">{"Evening"}</option>
              <option value="Daily">{"Daily Life"}</option>
              <option value="Prayer">{"Prayer"}</option>
              <option value="Protection">{"Protection"}</option>
              <option value="Health">{"Health & Sick"}</option>
              <option value="Emotion">{"Emotion/Debt"}</option>
              <option value="Travel">{"Travel"}</option>
              <option value="Family">{"Family"}</option>
              <option value="Knowledge">{"Knowledge"}</option>
              <option value="Nature">{"Nature"}</option>
              <option value="Social">{"Social"}</option>
              <option value="Fasting">{"Fasting"}</option>
              <option value="Forgiveness">{"Forgiveness"}</option>
            </select>
            <i className="fa-solid fa-chevron-down select-arrow"></i>
          </div>
        </div>
      </div>
      <div id="dua-container"></div>
      <nav
        id="dua-pagination"
        className="dua-pagination"
        aria-label="Dua library pages"
        hidden={true}
      ></nav>
    </div>
  );
}
