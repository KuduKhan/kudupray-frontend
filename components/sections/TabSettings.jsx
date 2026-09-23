"use client";

import { dispatch } from "../runtime-events";

export default function TabSettings() {
  return (
    <div id="tab-settings" className="page">
      <div className="desktop-page-heading">
        <div className="desktop-heading-icon">
          <i className="fa-solid fa-sliders" aria-hidden="true"></i>
        </div>
        <div>
          <h2>{"Personalise your experience"}</h2>
          <p>
            {
              "Adjust language, reading comfort, prayer settings, appearance, and location."
            }
          </p>
        </div>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <div className="section-header settings-preferences-header">
          <div className="section-icon">
            <i className="fa-solid fa-sliders"></i>
          </div>
          <h3 className="section-title" data-i18n="prefTitle">
            {"Preferences"}
          </h3>
          <details className="info-disclosure preferences-info">
            <summary>
              <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
              {"About saved preferences"}
            </summary>
            <div className="disclosure-body">
              <div className="guide-intro">
                <strong>{"Your preferences:"}</strong>
                {
                  " Theme, reading size, visible text layers, language choice, alarm state, and saved location stay on this device through browser storage. Clearing site data or using a different browser can reset them."
                }
              </div>
            </div>
          </details>
        </div>
        <div className="settings-menu-grid">
          <div className="settings-menu-group">
            <div className="group-title" style={{ marginTop: "0" }}>
              {"General"}
            </div>
            <section
              className="settings-focus-panel general-settings-panel"
              aria-label="General settings"
            >
              <div className="settings-panel-note">
                <i className="fa-solid fa-globe" aria-hidden="true"></i>
                <div>
                  <strong>{"Language & appearance"}</strong>
                  <small>
                    {
                      "Set the translation language and a comfortable visual theme."
                    }
                  </small>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <i
                    className="fa-solid fa-globe"
                    style={{
                      width: "24px",
                      color: "var(--primary)",
                      textAlign: "center",
                    }}
                  ></i>
                  <span data-i18n="transLang">{"Language"}</span>
                  <small className="setting-help" id="language-setting-help">
                    {
                      "Changes the available dua translations; Arabic remains visible."
                    }
                  </small>
                </div>
                <div style={{ position: "relative" }}>
                  <select
                    id="lang-select"
                    className="lang-select"
                    aria-label="Dua translation language"
                    aria-describedby="language-setting-help"
                    onChange={(event) => dispatch(187, event)}
                  >
                    <option value="en">{"English"}</option>
                    <option value="sw">{"Swahili"}</option>
                    <option value="fr">{"French"}</option>
                    <option value="id">{"Indonesian"}</option>
                  </select>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <i
                    className="fa-solid fa-moon"
                    style={{
                      width: "24px",
                      color: "var(--primary)",
                      textAlign: "center",
                    }}
                  ></i>
                  <span data-i18n="darkMode">{"Dark Mode"}</span>
                  <small className="setting-help" id="theme-setting-help">
                    {"Uses a low-glare palette for evening reading."}
                  </small>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    id="toggle-theme"
                    aria-label="Dark mode"
                    aria-describedby="theme-setting-help"
                    onChange={(event) => dispatch(188, event)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </section>
          </div>

          <div className="settings-menu-group">
            <div className="group-title" style={{ marginTop: "20px" }}>
              {"Reading"}
            </div>
            <section
              className="settings-focus-panel reading-settings-panel"
              aria-label="Reading settings"
            >
              <div className="settings-panel-note">
                <i className="fa-solid fa-book-open" aria-hidden="true"></i>
                <div>
                  <strong>{"Reading comfort"}</strong>
                  <small>
                    {
                      "Fine-tune text size, transliteration, and translations for every study view."
                    }
                  </small>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <i
                    className="fa-solid fa-text-height"
                    style={{
                      width: "24px",
                      color: "var(--primary)",
                      textAlign: "center",
                    }}
                  ></i>
                  <span data-i18n="textSize">{"Text Size"}</span>
                  <small className="setting-help" id="text-size-setting-help">
                    {
                      "Adjusts reading size across guides, duas, and prayer cards."
                    }
                  </small>
                </div>
                <div
                  className="size-controls"
                  role="group"
                  aria-label="Text size controls"
                  aria-describedby="text-size-setting-help"
                >
                  <button
                    type="button"
                    className="size-btn"
                    aria-label="Decrease text size"
                    onClick={(event) => dispatch(189, event)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span
                    id="text-size-display"
                    aria-live="polite"
                    style={{
                      fontWeight: "600",
                      minWidth: "50px",
                      textAlign: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    {"100%"}
                  </span>
                  <button
                    type="button"
                    className="size-btn"
                    aria-label="Increase text size"
                    onClick={(event) => dispatch(190, event)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <i
                    className="fa-solid fa-font"
                    style={{
                      width: "24px",
                      color: "var(--primary)",
                      textAlign: "center",
                    }}
                  ></i>
                  <span data-i18n="showTranslit">{"Transliteration"}</span>
                  <small
                    className="setting-help"
                    id="transliteration-setting-help"
                  >
                    {
                      "Applies across duas, guide recitations, and reference passages."
                    }
                  </small>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    id="toggle-trans"
                    aria-label="Show transliteration"
                    aria-describedby="transliteration-setting-help"
                    defaultChecked
                    onChange={(event) => dispatch(191, event)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <i
                    className="fa-solid fa-language"
                    style={{
                      width: "24px",
                      color: "var(--primary)",
                      textAlign: "center",
                    }}
                  ></i>
                  <span data-i18n="showTrans">{"Translation"}</span>
                  <small className="setting-help" id="translation-setting-help">
                    {
                      "Controls meanings throughout duas, guides, Adhan, and reference passages."
                    }
                  </small>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    id="toggle-trans-en"
                    aria-label="Show translation"
                    aria-describedby="translation-setting-help"
                    defaultChecked
                    onChange={(event) => dispatch(192, event)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </section>
          </div>

          <div className="settings-menu-group">
            <div className="group-title" style={{ marginTop: "20px" }}>
              {"System"}
            </div>
            <section
              className="settings-focus-panel system-settings-panel"
              aria-label="System settings"
            >
              <div className="settings-panel-note">
                <i className="fa-solid fa-gear" aria-hidden="true"></i>
                <div>
                  <strong>{"Location & privacy"}</strong>
                  <small>
                    {
                      "Manage the saved location and review how this device keeps your preferences."
                    }
                  </small>
                </div>
              </div>
              <button
                type="button"
                onClick={(event) => dispatch(193, event)}
                className="setting-action-btn system-reset-action"
              >
                <i
                  className="fa-solid fa-location-crosshairs"
                  aria-hidden="true"
                ></i>
                <span className="system-action-copy">
                  <strong>{"Reset saved location"}</strong>
                  <small>
                    {"Choose or detect your prayer-time location again."}
                  </small>
                </span>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
              </button>
              <details className="info-disclosure system-guide">
                <summary>
                  <i
                    className="fa-solid fa-shield-halved"
                    aria-hidden="true"
                  ></i>
                  {"Settings and privacy guide"}
                </summary>
                <div className="disclosure-body">
                  <ul className="knowledge-list">
                    <li>
                      <strong>{"Location:"}</strong>
                      {
                        " GPS coordinates or a manually entered city are used to request prayer times. Choose manual location if precise GPS access is unnecessary."
                      }
                    </li>
                    <li>
                      <strong>{"Notifications:"}</strong>
                      {
                        " Browser permission is required. Delivery may stop when the page, browser, or device is asleep."
                      }
                    </li>
                    <li>
                      <strong>{"Language:"}</strong>
                      {
                        " Some entries fall back to English when a selected translation has not yet been reviewed."
                      }
                    </li>
                    <li>
                      <strong>{"Reading layers:"}</strong>
                      {
                        " Arabic remains the primary text; transliteration and translation can be shown or hidden independently."
                      }
                    </li>
                    <li>
                      <strong>{"Reset location:"}</strong>
                      {
                        " Removes the saved place and asks the app to detect or select a location again."
                      }
                    </li>
                    <li>
                      <strong>{"Troubleshooting:"}</strong>
                      {
                        " If times look wrong, verify the city, timezone, device clock, calculation method, and local mosque timetable."
                      }
                    </li>
                  </ul>
                </div>
              </details>
            </section>
          </div>
        </div>
        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            opacity: "0.6",
            fontSize: "0.75rem",
          }}
        >
          {"\n            KuduPray Premium\n        "}
        </div>
      </div>
    </div>
  );
}
