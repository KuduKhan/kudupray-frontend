"use client";

import { dispatch } from "../runtime-events";

export default function TabQuranReader() {
  return (
    <div
      id="tab-quran-reader"
      className="page quran-reader-page"
      aria-hidden="true"
      hidden={true}
      aria-labelledby="quran-reader-title"
    >
      <article
        className="card quran-reader-card"
        aria-labelledby="quran-reader-title"
      >
        <div className="modal-header-row quran-reader-header">
          <div className="quran-reader-heading">
            <div className="quran-reader-heading-icon" aria-hidden="true">
              <i className="fa-solid fa-book-quran"></i>
            </div>
            <div className="quran-reader-heading-copy">
              <div className="quran-reader-title-stack">
                <small>{"Read · listen · reflect"}</small>
                <h3 id="quran-reader-title">{"Qur’an Reader"}</h3>
              </div>
            </div>
          </div>
          <div
            className="search-row quran-reader-toolbar"
            aria-label="Qur’an reading controls"
          >
            <div className="search-wrapper quran-reader-toolbar-shell">
              <div className="quran-reader-toolbar-segment quran-reader-player-surah">
                <select
                  id="quran-reader-surah"
                  onChange={(event) => dispatch(3, event)}
                  aria-label="Select a surah"
                  hidden={true}
                ></select>
                <button
                  type="button"
                  id="quran-surah-trigger"
                  className="quran-reciter-trigger"
                  aria-label="Select a surah"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="quran-surah-picker"
                >
                  <span
                    className="quran-surah-badge"
                    id="quran-surah-selected-number"
                    aria-hidden="true"
                  >
                    {"1"}
                  </span>
                  <span
                    className="quran-reciter-name"
                    id="quran-surah-selected-name"
                  >
                    {"Al-Faatiha"}
                  </span>
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <div className="quran-reader-toolbar-segment quran-reader-player-reciter">
                <select
                  id="quran-reader-reciter"
                  onChange={(event) => dispatch(4, event)}
                  aria-label="Select a reciter"
                  hidden={true}
                ></select>
                <button
                  type="button"
                  id="quran-reciter-trigger"
                  className="quran-reciter-trigger"
                  aria-label="Select a reciter"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  aria-controls="quran-reciter-list"
                >
                  <span
                    id="quran-reciter-selected-avatar"
                    className="quran-reciter-avatar"
                    aria-hidden="true"
                  >
                    {"MR"}
                  </span>
                  <span
                    id="quran-reciter-selected-name"
                    className="quran-reciter-name"
                  >
                    {"Mishary Rashid Alafasy"}
                  </span>
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <details className="quran-reader-more quran-reader-toolbar-segment">
                <summary aria-label="More Qur’an reading options">
                  <i className="fa-solid fa-sliders" aria-hidden="true"></i>
                  <span>{"More"}</span>
                </summary>
                <div className="quran-reader-more-panel">
                  <div
                    className="quran-reader-preferences"
                    role="group"
                    aria-label="Qur’an Reader display preferences"
                  >
                    <span>{"Reading layers"}</span>
                    <label>
                      <input
                        id="quran-reader-show-transliteration"
                        type="checkbox"
                        onChange={(event) => dispatch(5, event)}
                      />
                      {" Transliteration"}
                    </label>
                    <label>
                      <input
                        id="quran-reader-show-translation"
                        type="checkbox"
                        onChange={(event) => dispatch(6, event)}
                      />
                      {" Translation"}
                    </label>
                    <span className="quran-reader-numbering-heading">{"Ayah numbering"}</span>
                    <label>
                      <input
                        id="quran-reader-arabic-numbering"
                        type="checkbox"
                        defaultChecked={true}
                        onChange={(event) => window.setQuranReaderNumbering?.(event.target.checked)}
                      />
                      {" Arabic numerals"}
                    </label>
                  </div>
                </div>
              </details>
            </div>
          </div>
          <div className="quran-reader-current-surah" aria-live="polite">
            <h4 id="quran-reader-surah-title">{"Al-Fātiḥah"}</h4>
            <p id="quran-reader-surah-meta">{"The Opening"}</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={(event) => dispatch(7, event)}
            aria-label="Return to Prayer Times"
            title="Return to Prayer Times"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <div className="quran-reader-body" id="quran-reader-body">
          <div className="quran-reader-scroll" id="quran-reader-scroll">
            <div
              className="quran-reader-verses"
              id="quran-reader-verses"
              aria-live="polite"
            >
              <p className="quran-reader-empty">
                {
                  "Open a surah to load the Arabic text, transliteration, and translation."
                }
              </p>
            </div>
          </div>
          <div className="quran-reader-audio-wrap">
            <p
              className="quran-reader-player-guidance"
              id="quran-reader-status"
              role="status"
              aria-live="polite"
            >
            </p>
            <div
              className="quran-player"
              id="quran-player"
              role="group"
              aria-label="Qur’an audio player"
              hidden={true}
            >
              <div className="quran-player-transport" role="group" aria-label="Surah and ayah navigation">
                <button type="button" id="quran-player-previous" aria-label="Previous surah" title="Previous surah" disabled={true}>
                  <i className="fa-solid fa-backward-step" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  className="quran-player-play"
                  id="quran-player-play"
                  aria-label="Play recitation"
                  title="Play recitation"
                  disabled={true}
                >
                  <i className="fa-solid fa-play" aria-hidden="true"></i>
                </button>
                <button type="button" id="quran-player-next" aria-label="Next surah" title="Next surah" disabled={true}>
                  <i className="fa-solid fa-forward-step" aria-hidden="true"></i>
                </button>
              </div>
              <div className="quran-player-timeline">
                <input
                  id="quran-player-seek"
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  defaultValue="0"
                  aria-label="Seek within this ayah"
                  aria-valuetext="Audio loading"
                  disabled={true}
                />
                <div className="quran-player-times" aria-hidden="true">
                  <span id="quran-player-elapsed">{"0:00"}</span>
                  <span id="quran-player-duration">{"—:—"}</span>
                </div>
              </div>
              <div className="quran-player-options" role="group" aria-label="Playback options">
                <button type="button" id="quran-player-mute" aria-label="Mute recitation" title="Mute recitation" aria-pressed="false">
                  <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
                </button>
                <button type="button" id="quran-player-repeat" aria-label="Repeat surah off" title="Repeat surah" aria-pressed="false">
                  <i className="fa-solid fa-repeat" aria-hidden="true"></i>
                </button>
                <button type="button" id="quran-player-autoplay" aria-label="Autoplay next surah off" title="Autoplay next surah" aria-pressed="false">
                  <i className="fa-solid fa-forward" aria-hidden="true"></i>
                </button>
              <select
                id="quran-player-speed"
                aria-label="Playback speed"
                title="Playback speed"
                hidden={true}
                defaultValue="1"
              >
                <option value="0.75">{"0.75×"}</option>
                <option value="1">{"1×"}</option>
                <option value="1.25">{"1.25×"}</option>
                <option value="1.5">{"1.5×"}</option>
                <option value="2">{"2×"}</option>
              </select>
              <button
                type="button"
                id="quran-speed-trigger"
                className="quran-speed-trigger"
                aria-label="Playback speed: 1×"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="quran-speed-list"
                title="Playback speed"
              >
                <i className="fa-solid fa-gauge-high" aria-hidden="true"></i>
                <span id="quran-speed-label">{"1×"}</span>
                <i className="fa-solid fa-chevron-up" aria-hidden="true"></i>
              </button>
              </div>
            </div>
            <audio
              className="quran-reader-audio"
              id="quran-reader-audio"
              controls={true}
              preload="auto"
              aria-label="Qur’an verse recitation audio"
            ></audio>
            <audio
              className="quran-reader-audio"
              id="quran-reader-audio-standby"
              preload="auto"
              hidden={true}
              aria-hidden="true"
              tabIndex="-1"
            ></audio>
          </div>
        </div>
      </article>
    </div>
  );
}
