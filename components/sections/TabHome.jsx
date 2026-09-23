"use client";

import { dispatch } from "../runtime-events";

export default function TabHome() {
  return (
    <div id="tab-home" className="page active">
      <div className="hero-dashboard">
        <section className="qibla-card" aria-labelledby="qibla-title">
          <div className="qibla-copy">
            <div className="qibla-kicker">
              <i className="fa-solid fa-location-arrow" aria-hidden="true"></i>
              {" Qibla finder"}
            </div>
            <h2 id="qibla-title">{"Face the Kaaba"}</h2>
            <p className="qibla-summary">
              {
                "Find the bearing from your current location. On supported phones, live compass mode adjusts as you turn."
              }
            </p>
            <div className="qibla-reading" aria-live="polite">
              <span className="qibla-bearing" id="qibla-bearing">
                {"—°"}
              </span>
              <span className="qibla-direction" id="qibla-direction">
                {"from north"}
              </span>
            </div>
            <div className="qibla-actions">
              <button
                type="button"
                className="qibla-action"
                onClick={(event) => dispatch(8, event)}
              >
                <i
                  className="fa-solid fa-location-crosshairs"
                  aria-hidden="true"
                ></i>
                {" Locate me\n                    "}
              </button>
              <button
                type="button"
                className="qibla-action secondary"
                id="qibla-compass-button"
                onClick={(event) => dispatch(9, event)}
              >
                <i className="fa-regular fa-compass" aria-hidden="true"></i>
                {" Live compass\n                    "}
              </button>
            </div>
            <p className="qibla-status" id="qibla-status" role="status">
              {"Waiting for location…"}
            </p>
          </div>
          <div className="qibla-compass-wrap" aria-hidden="true">
            <div className="qibla-compass">
              <span className="compass-mark compass-n">{"N"}</span>
              <span className="compass-mark compass-e">{"E"}</span>
              <span className="compass-mark compass-s">{"S"}</span>
              <span className="compass-mark compass-w">{"W"}</span>
              <div className="qibla-needle" id="qibla-needle">
                <i className="fa-solid fa-kaaba qibla-kaaba"></i>
              </div>
            </div>
          </div>
        </section>

        <article
          className="mini-card celestial-card moon-card"
          aria-labelledby="moon-card-title"
        >
          <div className="celestial-card-top">
            <span className="celestial-kicker">
              <i
                className="fa-solid fa-star-and-crescent"
                aria-hidden="true"
              ></i>
              {" Lunar cycle"}
            </span>
            <span className="celestial-chip" id="moon-age">
              {"Day —"}
            </span>
          </div>
          <div className="celestial-visual moon-visual" aria-hidden="true">
            <span className="celestial-orbit"></span>
            <span id="moon-icon">{"🌑"}</span>
          </div>
          <div className="celestial-copy">
            <div className="mini-label" id="moon-card-title">
              {"Moon phase"}
            </div>
            <div className="mini-value" id="moon-text" aria-live="polite">
              {"New Moon"}
            </div>
            <div className="celestial-detail" id="moon-detail">
              {"Calculating illumination…"}
            </div>
          </div>
          <div className="celestial-meter-meta">
            <span>{"Illumination level"}</span>
            <strong id="moon-meter-value">{"0%"}</strong>
          </div>
          <div
            className="celestial-meter"
            id="moon-meter"
            role="progressbar"
            aria-label="Moon illumination level"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="0"
            title="Moon illumination level"
          >
            <span id="moon-progress"></span>
          </div>
        </article>

        <article
          className="mini-card celestial-card ramadan-card"
          aria-labelledby="ramadan-card-title"
        >
          <div className="celestial-card-top">
            <span className="celestial-kicker">
              <i className="fa-solid fa-mosque" aria-hidden="true"></i>
              {" Sacred season"}
            </span>
            <span className="celestial-chip" id="ramadan-year">
              {"1448 AH"}
            </span>
          </div>
          <div className="celestial-visual ramadan-visual" aria-hidden="true">
            <i className="fa-solid fa-moon ramadan-crescent"></i>
            <i className="fa-solid fa-mosque ramadan-mosque"></i>
          </div>
          <div className="celestial-copy">
            <div className="mini-label" id="ramadan-card-title">
              {"Ramadan"}
            </div>
            <div className="mini-value" id="ramadan-text" aria-live="polite">
              {"Preparing countdown…"}
            </div>
            <div className="celestial-detail" id="ramadan-detail">
              {"Based on the current Hijri date"}
            </div>
          </div>
          <div className="celestial-meter-meta">
            <span id="ramadan-meter-label">{"Journey to Ramadan"}</span>
            <strong id="ramadan-meter-value">{"0%"}</strong>
          </div>
          <div
            className="celestial-meter"
            id="ramadan-meter"
            role="progressbar"
            aria-label="Journey to Ramadan"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="0"
            title="Journey to Ramadan"
          >
            <span id="ramadan-progress"></span>
          </div>
        </article>
      </div>

      <section
        className="daily-companion-grid"
        aria-label="Daily Qur'an, Hadith and Dhikr"
      >
        <div className="daily-companion-heading desktop-page-heading">
          <div className="daily-companion-heading-copy">
            <div
              className="daily-companion-heading-icon desktop-heading-icon tile-icon icon-emerald"
              aria-hidden="true"
            >
              <i className="fa-solid fa-star-and-crescent"></i>
            </div>
            <div>
              <h2>{"Daily Companion"}</h2>
              <p>
                {
                  "Pause for revelation, Prophetic guidance and a moment of remembrance."
                }
              </p>
            </div>
          </div>
          <div className="daily-companion-heading-meta">
            <span className="daily-companion-date" id="daily-companion-date">
              <i className="fa-regular fa-calendar" aria-hidden="true"></i>
              {"Today"}
            </span>
            <span className="daily-companion-local">
              <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
              {"Counter saved on this device"}
            </span>
          </div>
        </div>
        <div
          className="companion-menu"
          aria-label="Open a daily companion tool"
        >
          <div className="companion-menu-intro">
            <div>
              <span>{"Choose a practice"}</span>
              <small>
                {"Open one focused tool and continue at your own pace."}
              </small>
            </div>
            <strong>
              <i className="fa-solid fa-star" aria-hidden="true"></i>
              {" 4 daily tools"}
            </strong>
          </div>
          <button
            type="button"
            className="companion-menu-tile"
            data-companion="verse"
            aria-controls="view-companion-verse"
            aria-haspopup="dialog"
            onClick={(event) => dispatch(10, event)}
          >
            <span className="companion-menu-icon" aria-hidden="true">
              <i className="fa-solid fa-book-quran"></i>
            </span>
            <span className="companion-menu-label">
              <strong>{"Qur’an Verse"}</strong>
              <small>{"A moment of revelation"}</small>
            </span>
            <i
              className="fa-solid fa-arrow-right companion-menu-arrow"
              aria-hidden="true"
            ></i>
          </button>
          <button
            type="button"
            className="companion-menu-tile"
            data-companion="hadith"
            aria-controls="view-companion-hadith"
            aria-haspopup="dialog"
            onClick={(event) => dispatch(11, event)}
          >
            <span className="companion-menu-icon" aria-hidden="true">
              <i className="fa-solid fa-scroll"></i>
            </span>
            <span className="companion-menu-label">
              <strong>{"Hadith"}</strong>
              <small>{"Prophetic guidance"}</small>
            </span>
            <i
              className="fa-solid fa-arrow-right companion-menu-arrow"
              aria-hidden="true"
            ></i>
          </button>
          <button
            type="button"
            className="companion-menu-tile"
            data-companion="tasbih"
            aria-controls="view-companion-tasbih"
            aria-haspopup="dialog"
            onClick={(event) => dispatch(12, event)}
          >
            <span className="companion-menu-icon" aria-hidden="true">
              <i className="fa-solid fa-fingerprint"></i>
            </span>
            <span className="companion-menu-label">
              <strong>{"Tasbih"}</strong>
              <small>{"Keep your dhikr count"}</small>
            </span>
            <i
              className="fa-solid fa-arrow-right companion-menu-arrow"
              aria-hidden="true"
            ></i>
          </button>
          <button
            type="button"
            className="companion-menu-tile"
            data-companion="quiz"
            aria-controls="view-companion-quiz"
            aria-haspopup="dialog"
            onClick={(event) => dispatch(13, event)}
          >
            <span className="companion-menu-icon" aria-hidden="true">
              <i className="fa-solid fa-circle-question"></i>
            </span>
            <span className="companion-menu-label">
              <strong>{"Deen Quiz"}</strong>
              <small>{"Test your Islamic knowledge"}</small>
            </span>
            <i
              className="fa-solid fa-arrow-right companion-menu-arrow"
              aria-hidden="true"
            ></i>
          </button>
        </div>
        <div
          id="view-companion-verse"
          className="guide-modal companion-modal"
          aria-hidden="true"
          aria-labelledby="daily-verse-title"
          onClick={(event) => dispatch(14, event)}
        >
          <article
            id="companion-verse"
            className="modal-card card companion-card verse-companion"
            aria-labelledby="daily-verse-title"
          >
            <div className="companion-header">
              <div className="companion-heading">
                <div
                  className="companion-icon tile-icon icon-emerald"
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-book-quran"></i>
                </div>
                <span>
                  <small>{"Daily reflection"}</small>
                  <strong id="daily-verse-title">{"Qur’an Verse"}</strong>
                </span>
              </div>
              <div className="companion-header-actions">
                <button
                  type="button"
                  className="companion-refresh"
                  id="refresh-quran-button"
                  onClick={(event) => dispatch(15, event)}
                  aria-label="Show another Qur'an verse"
                  title="Show another verse"
                >
                  <i className="fa-solid fa-rotate" aria-hidden="true"></i>
                  <span>{"New"}</span>
                </button>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={(event) => dispatch(16, event)}
                  aria-label="Close Qur’an Verse"
                >
                  <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div
              className="reflection-content"
              id="daily-verse-content"
              aria-live="polite"
            >
              <p
                className="reflection-arabic"
                id="daily-verse-arabic"
                lang="ar"
                dir="rtl"
              ></p>
              <p
                className="reflection-transliteration"
                id="daily-verse-transliteration"
                hidden={true}
              ></p>
              <p className="reflection-text" id="daily-verse-text"></p>
              <div className="reflection-footer">
                <a
                  className="reflection-source"
                  id="daily-verse-source"
                  href="https://quran.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span id="daily-verse-reference">{"Qur’an"}</span>
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  ></i>
                </a>
                <div className="reflection-tools">
                  <span className="reflection-index" id="daily-verse-index">
                    {"1 of 8"}
                  </span>
                  <button
                    type="button"
                    className="reflection-copy"
                    onClick={(event) => dispatch(17, event)}
                    aria-label="Copy the current Qur'an verse"
                    title="Copy verse"
                  >
                    <i className="fa-regular fa-copy" aria-hidden="true"></i>
                    <span className="reflection-copy-label">{"Copy"}</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div
          id="view-companion-hadith"
          className="guide-modal companion-modal"
          aria-hidden="true"
          aria-labelledby="daily-hadith-title"
          onClick={(event) => dispatch(18, event)}
        >
          <article
            id="companion-hadith"
            className="modal-card card companion-card hadith-companion"
            aria-labelledby="daily-hadith-title"
          >
            <div className="companion-header">
              <div className="companion-heading">
                <div
                  className="companion-icon tile-icon icon-indigo"
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-scroll"></i>
                </div>
                <span>
                  <small>{"Prophetic guidance"}</small>
                  <strong id="daily-hadith-title">{"Hadith"}</strong>
                </span>
              </div>
              <div className="companion-header-actions">
                <button
                  type="button"
                  className="companion-refresh"
                  id="refresh-hadith-button"
                  onClick={(event) => dispatch(19, event)}
                  aria-label="Show another Hadith"
                  title="Show another Hadith"
                >
                  <i className="fa-solid fa-rotate" aria-hidden="true"></i>
                  <span>{"New"}</span>
                </button>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={(event) => dispatch(20, event)}
                  aria-label="Close Hadith"
                >
                  <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div
              className="reflection-content"
              id="daily-hadith-content"
              aria-live="polite"
            >
              <p className="reflection-text" id="daily-hadith-text"></p>
              <div className="reflection-footer">
                <a
                  className="reflection-source"
                  id="daily-hadith-source"
                  href="https://sunnah.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span id="daily-hadith-reference">{"Hadith"}</span>
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  ></i>
                </a>
                <div className="reflection-tools">
                  <span className="reflection-index" id="daily-hadith-index">
                    {"1 of 8"}
                  </span>
                  <button
                    type="button"
                    className="reflection-copy"
                    onClick={(event) => dispatch(21, event)}
                    aria-label="Copy the current Hadith"
                    title="Copy Hadith"
                  >
                    <i className="fa-regular fa-copy" aria-hidden="true"></i>
                    <span className="reflection-copy-label">{"Copy"}</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div
          id="view-companion-tasbih"
          className="guide-modal companion-modal"
          aria-hidden="true"
          aria-labelledby="tasbih-counter-title"
          onClick={(event) => dispatch(22, event)}
        >
          <article
            id="companion-tasbih"
            className="modal-card card companion-card tasbih-companion"
            aria-labelledby="tasbih-counter-title"
          >
            <div className="companion-header">
              <div className="companion-heading">
                <div
                  className="companion-icon tile-icon icon-amber"
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-fingerprint"></i>
                </div>
                <span>
                  <small>{"Remember Allah"}</small>
                  <strong id="tasbih-counter-title">{"Tasbih & Dhikr"}</strong>
                </span>
              </div>
              <div className="companion-header-actions">
                <button
                  type="button"
                  className="tasbih-reset"
                  onClick={(event) => dispatch(23, event)}
                  aria-label="Reset Tasbih counter"
                  title="Reset counter"
                >
                  <i
                    className="fa-solid fa-arrow-rotate-left"
                    aria-hidden="true"
                  ></i>
                  <span>{"Reset"}</span>
                </button>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={(event) => dispatch(24, event)}
                  aria-label="Close Tasbih"
                >
                  <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="tasbih-select-wrap">
              <select
                className="tasbih-select"
                id="tasbih-phrase"
                aria-label="Choose a dhikr"
                onChange={(event) => dispatch(25, event)}
              >
                <option value="SubḥānAllāh">
                  {"SubḥānAllāh · Glory be to Allah"}
                </option>
                <option value="Alḥamdulillāh">
                  {"Alḥamdulillāh · All praise is for Allah"}
                </option>
                <option value="Allāhu Akbar">
                  {"Allāhu Akbar · Allah is the Greatest"}
                </option>
                <option value="Lā ilāha illā Allāh">
                  {"Lā ilāha illā Allāh · None is worthy of worship but Allah"}
                </option>
                <option value="Astaghfirullāh">
                  {"Astaghfirullāh · I seek Allah’s forgiveness"}
                </option>
                <option value="SubḥānAllāhi wa biḥamdih">
                  {
                    "SubḥānAllāhi wa biḥamdih · Glory be to Allah and praise is His"
                  }
                </option>
                <option value="SubḥānAllāhil-ʿAẓīm">
                  {"SubḥānAllāhil-ʿAẓīm · Glory be to Allah, the Magnificent"}
                </option>
                <option value="SubḥānAllāhi wa biḥamdih, SubḥānAllāhil-ʿAẓīm">
                  {
                    "SubḥānAllāhi wa biḥamdih, SubḥānAllāhil-ʿAẓīm · Glory and praise are His"
                  }
                </option>
                <option value="Lā ḥawla wa lā quwwata illā billāh">
                  {
                    "Lā ḥawla wa lā quwwata illā billāh · No power or strength except through Allah"
                  }
                </option>
                <option value="Lā ilāha illallāhu waḥdahu lā sharīka lah">
                  {
                    "Lā ilāha illallāhu waḥdahu lā sharīka lah · Allah is One, without partner"
                  }
                </option>
                <option value="Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamd">
                  {
                    "Lā ilāha illallāhu waḥdahu lā sharīka lah · His is the kingdom and praise"
                  }
                </option>
                <option value="Astaghfirullāha wa atūbu ilayh">
                  {
                    "Astaghfirullāha wa atūbu ilayh · I seek forgiveness and repent to Him"
                  }
                </option>
                <option value="Ḥasbiyallāhu wa niʿmal-wakīl">
                  {"Ḥasbiyallāhu wa niʿmal-wakīl · Allah is sufficient for me"}
                </option>
                <option value="Ḥasbunallāhu wa niʿmal-wakīl">
                  {"Ḥasbunallāhu wa niʿmal-wakīl · Allah is sufficient for us"}
                </option>
                <option value="Yā Ḥayyu yā Qayyūm, biraḥmatika astaghīth">
                  {"Yā Ḥayyu yā Qayyūm · In Your mercy I seek relief"}
                </option>
                <option value="Rabbighfir lī">
                  {"Rabbighfir lī · My Lord, forgive me"}
                </option>
                <option value="Rabbī innī massaniyad-ḍurru wa anta arḥamur-rāḥimīn">
                  {"Rabbī innī massaniyad-ḍurru · My Lord, harm has touched me"}
                </option>
                <option value="Allāhumma innaka ʿafuwwun tuḥibbul-ʿafwa faʿfu ʿannī">
                  {"Allāhumma innaka ʿafuwwun · O Allah, You are Pardoning"}
                </option>
                <option value="Allāhumma ṣalli wa sallim ʿalā Muḥammad">
                  {
                    "Allāhumma ṣalli wa sallim ʿalā Muḥammad · Send blessings upon Muhammad"
                  }
                </option>
                <option value="Allāhumma aʿinnī ʿalā dhikrika wa shukrika wa ḥusni ʿibādatik">
                  {
                    "Allāhumma aʿinnī ʿalā dhikrik · Help me remember and worship You well"
                  }
                </option>
                <option value="Subḥānallāh walḥamdulillāh wallāhu akbar">
                  {
                    "Subḥānallāh walḥamdulillāh wallāhu akbar · Glory, praise, and greatness belong to Allah"
                  }
                </option>
                <option value="Rabbi zidnī ʿilmā">
                  {"Rabbi zidnī ʿilmā · My Lord, increase me in knowledge"}
                </option>
              </select>
              <span className="tasbih-select-arrow" aria-hidden="true">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <div className="tasbih-phrase-display" aria-live="polite">
              <strong id="tasbih-phrase-arabic" lang="ar" dir="rtl">
                {"سُبْحَانَ ٱللَّٰهِ"}
              </strong>
              <span
                className="tasbih-transliteration"
                id="tasbih-phrase-transliteration"
              >
                {"SubḥānAllāh"}
              </span>
              <span id="tasbih-phrase-meaning">{"Glory be to Allah"}</span>
            </div>
            <div className="tasbih-count-wrap">
              <button
                type="button"
                className="tasbih-count-button"
                onClick={(event) => dispatch(26, event)}
                aria-label="Add one to Tasbih count"
              >
                <span>
                  <strong id="tasbih-count" aria-live="polite">
                    {"0"}
                  </strong>
                  <small>{"Tap to count"}</small>
                </span>
              </button>
            </div>
            <div className="tasbih-progress-track" aria-hidden="true">
              <span id="tasbih-progress"></span>
            </div>
            <div className="tasbih-meta">
              <span id="tasbih-cycle">{"0 of 33"}</span>
              <span id="tasbih-sets">{"0 sets complete"}</span>
            </div>
            <div className="tasbih-secondary-actions">
              <button
                type="button"
                className="tasbih-undo"
                onClick={(event) => dispatch(27, event)}
                id="tasbih-undo-button"
              >
                <i className="fa-solid fa-rotate-left" aria-hidden="true"></i>
                {"Undo last tap"}
              </button>
              <span className="tasbih-target">
                <i className="fa-solid fa-bullseye" aria-hidden="true"></i>
                {"Target 33"}
              </span>
            </div>
            <p className="tasbih-save-note">
              <i className="fa-solid fa-floppy-disk" aria-hidden="true"></i>
              {" Each dhikr keeps its own count automatically."}
            </p>
          </article>
        </div>
        <div
          id="view-companion-quiz"
          className="guide-modal companion-modal"
          aria-hidden="true"
          aria-labelledby="deen-quiz-title"
          onClick={(event) => dispatch(28, event)}
        >
          <article
            id="companion-quiz"
            className="modal-card card companion-card quiz-companion"
            aria-labelledby="deen-quiz-title"
          >
            <div className="companion-header">
              <div className="companion-heading">
                <div
                  className="companion-icon tile-icon icon-cyan"
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-circle-question"></i>
                </div>
                <span>
                  <small>{"Learn & reflect"}</small>
                  <strong id="deen-quiz-title">{"Deen Quiz"}</strong>
                </span>
              </div>
              <div className="companion-header-actions">
                <button
                  type="button"
                  className="companion-refresh"
                  id="quiz-new-button"
                  onClick={(event) => dispatch(29, event)}
                  aria-label="Load a different random Deen Quiz question"
                  title="New random question"
                >
                  <i className="fa-solid fa-rotate" aria-hidden="true"></i>
                  <span>{"New"}</span>
                </button>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={(event) => dispatch(30, event)}
                  aria-label="Close Deen Quiz"
                >
                  <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <section
              className="deen-quiz-content"
              aria-labelledby="deen-quiz-title"
            >
              <div
                className="quiz-learning-bar"
                aria-label="Deen Quiz learning path"
              >
                <span className="quiz-topic" id="quiz-topic">
                  {"Foundations"}
                </span>
                <span className="quiz-progress" id="quiz-progress">
                  {"Random questions · 40 in library"}
                </span>
              </div>
              <p className="quiz-status" id="quiz-status" role="status">
                {"Choose the best answer, then read the learning note."}
              </p>
              <div
                className="quiz-verse-card"
                id="quiz-verse-card"
                hidden={true}
              >
                <p className="quiz-verse-kicker" id="quiz-verse-kicker">
                  {"Read, then identify the surah"}
                </p>
                <p
                  className="quiz-arabic"
                  id="quiz-arabic"
                  lang="ar"
                  dir="rtl"
                ></p>
                <p
                  className="quiz-transliteration"
                  id="quiz-transliteration"
                ></p>
                <p className="quiz-translation" id="quiz-translation"></p>
              </div>
              <p className="quiz-question" id="quiz-question">
                {"Press Next to begin a guided learning question."}
              </p>
              <div
                className="quiz-options"
                id="quiz-options"
                role="group"
                aria-label="Quiz answers"
              ></div>
              <div
                className="quiz-feedback is-hidden"
                id="quiz-feedback"
                aria-live="polite"
              >
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                <div>
                  <strong id="quiz-feedback-title">{"Reflection"}</strong>
                  <span id="quiz-feedback-text"></span>
                </div>
              </div>
              <button
                type="button"
                className="quiz-next-button"
                id="quiz-next-button"
                onClick={(event) => dispatch(31, event)}
                hidden={true}
              >
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                <span>{"Next learning question"}</span>
              </button>
              <div className="quiz-footer">
                <span id="quiz-score">{"0 correct · 0 answered"}</span>
                <a
                  className="quiz-source"
                  id="quiz-source"
                  href="https://alquran.cloud/api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Qur’an source "}
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </section>
          </article>
        </div>
      </section>

      <div className="card" id="schedule-card">
        <div
          className="section-header"
          style={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            borderBottom: "none",
            paddingBottom: "0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="section-icon">
              <i className="fa-solid fa-calendar-day"></i>
            </div>
            <h3 className="section-title">{"Today's Schedule"}</h3>
          </div>

          <div className="location-selector-wrap">
            <div
              id="loc-display"
              className="location-selector"
              onClick={(event) => dispatch(32, event)}
            >
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span id="loc-name">{"Detecting..."}</span>
              <i className="fa-solid fa-pen-to-square" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div
          id="loc-input-container"
          className="location-editor"
          style={{ display: "none" }}
        >
          <input
            type="text"
            id="manual-loc"
            className="location-city-input"
            placeholder="City, Country"
            aria-label="City and country"
            autoComplete="address-level2"
          />
          <button
            type="button"
            onClick={(event) => dispatch(33, event)}
            className="icon-btn location-action location-apply"
            aria-label="Use entered location"
            title="Use entered location"
          >
            <i className="fa-solid fa-check"></i>
          </button>
          <button
            type="button"
            onClick={(event) => dispatch(34, event)}
            className="icon-btn location-action location-detect"
            title="Use GPS"
          >
            <i className="fa-solid fa-location-crosshairs" aria-hidden="true"></i>
          </button>
        </div>
        <div
          id="loader"
          style={{
            textAlign: "center",
            padding: "30px",
            color: "var(--text-sub)",
          }}
        >
          <i className="fa-solid fa-circle-notch fa-spin"></i>
          {" Fetching accurate times...\n        "}
        </div>
        <div
          id="timetable"
          role="region"
          aria-live="polite"
          aria-label="Today's prayer times"
        ></div>
        <div className="schedule-guidance" aria-label="Prayer-time information">
          <details className="info-disclosure">
            <summary>
              <i className="fa-solid fa-clock" aria-hidden="true"></i>
              {"How are these prayer times calculated?"}
            </summary>
            <div className="disclosure-body">
              <ul className="knowledge-list">
                <li>
                  <strong>{"Fajr"}</strong>
                  {" begins at true dawn; "}
                  <strong>{"sunrise"}</strong>
                  {
                    " marks the end of the Fajr window and is not itself an obligatory prayer time."
                  }
                </li>
                <li>
                  <strong>{"Dhuhr"}</strong>
                  {" begins after the sun passes its highest point. "}
                  <strong>{"Asr"}</strong>
                  {
                    " calculations can differ because recognized schools use different shadow-length criteria."
                  }
                </li>
                <li>
                  <strong>{"Maghrib"}</strong>
                  {" begins immediately after sunset. "}
                  <strong>{"Isha"}</strong>
                  {
                    " begins after twilight disappears; high-latitude regions may need special estimation."
                  }
                </li>
                <li>
                  {
                    "Displayed midnight is the midpoint of the Islamic night, not necessarily 12:00 a.m. The last third is calculated from sunset to the following dawn."
                  }
                </li>
                <li>
                  {
                    "Weather, elevation, calculation method, safety offsets, daylight-saving changes, and mosque policy can create small differences."
                  }
                </li>
                <li>
                  {
                    "App alarms are reminders while the page is available; they do not replace the adhan, personal responsibility, or official mosque schedules."
                  }
                </li>
              </ul>
              <div className="reference-line">
                {
                  "For fasting, congregation, and Jumu’ah, prioritize an announced local timetable when it differs from a general calculation."
                }
              </div>
            </div>
          </details>
          <details className="info-disclosure compact prayer-guidance-disclosure">
            <summary>
              <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
              {"More prayer-time guidance"}
            </summary>
            <div className="disclosure-body">
              <p className="prayer-guidance-intro">
                {
                  "Use calculated times as a dependable daily guide, then follow trusted local announcements where they apply."
                }
              </p>
              <div
                className="info-grid prayer-guidance-grid"
                aria-label="Prayer time guidance"
              >
                <div className="info-stat prayer-guidance-item">
                  <span className="prayer-guidance-icon" aria-hidden="true">
                    <i className="fa-solid fa-calculator"></i>
                  </span>
                  <div>
                    <strong>{"Calculation"}</strong>
                    <p>
                      {
                        "Times use your selected location and a standard calculation method."
                      }
                    </p>
                  </div>
                </div>
                <div className="info-stat prayer-guidance-item">
                  <span className="prayer-guidance-icon" aria-hidden="true">
                    <i className="fa-solid fa-mosque"></i>
                  </span>
                  <div>
                    <strong>{"Local practice"}</strong>
                    <p>
                      {
                        "Nearby mosques may apply different methods or safety offsets."
                      }
                    </p>
                  </div>
                </div>
                <div className="info-stat prayer-guidance-item">
                  <span className="prayer-guidance-icon" aria-hidden="true">
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  <div>
                    <strong>{"Best check"}</strong>
                    <p>
                      {
                        "Confirm congregational and Jumu’ah times with your local mosque."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className="card" id="sunnah-card">
        <div className="section-header">
          <div className="section-icon">
            <i className="fa-solid fa-moon"></i>
          </div>
          <h3 className="section-title">{"Sunnah & Night"}</h3>
          <details className="sunnah-note">
            <summary aria-label="Open night-time guidance">
              <span className="sunnah-note-icon" aria-hidden="true">
                <i className="fa-solid fa-moon sunnah-note-moon"></i>
                <i className="fa-solid fa-circle-info sunnah-note-info"></i>
              </span>
              <span className="sunnah-note-label">{"Night-time guidance"}</span>
            </summary>
            <div className="sunnah-note-panel" role="note">
              <strong>{"Understanding the night"}</strong>
              <span>
                <em>{"Midnight"}</em>
                {" is halfway between sunset and the following dawn. The "}
                <em>{"Last Third"}</em>
                {
                  " is especially virtuous for voluntary prayer and dua. Exact limits may vary by school and circumstance."
                }
              </span>
            </div>
          </details>
        </div>
        <div className="sunnah-orbit">
          <div className="sunnah-grid" id="extra-times"></div>
        </div>
      </div>
    </div>
  );
}
