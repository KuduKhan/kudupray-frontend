"use client";

import { dispatch } from "../runtime-events";

export default function TabArabic() {
  return (
    <div id="tab-arabic" className="page">
      <div className="arabic-dashboard">
        <div className="desktop-page-heading arabic-page-heading">
          <div className="desktop-heading-icon">
            <i className="fa-solid fa-language" aria-hidden="true"></i>
          </div>
          <div>
            <h2>{"Learn Arabic"}</h2>
            <p>
              {
                "A thoughtful pathway from your first letter to confident understanding, conversation, and worship."
              }
            </p>
          </div>
        </div>
        <section
          className="arabic-learning-hero arabic-studio-hero"
          aria-labelledby="arabic-start-title"
        >
          <span className="arabic-hero-mark" aria-hidden="true">
            {"ع"}
          </span>
          <div>
            <span className="arabic-kicker">
              <i className="fa-solid fa-compass" aria-hidden="true"></i>
              {" Your Arabic learning studio"}
            </span>
            <h3 id="arabic-start-title">
              {"From first letter to fluent conversation."}
            </h3>
            <p>
              {
                "Build Arabic as a connected system: script, vocabulary, grammar, listening, reading, writing, and meaningful speech—at a pace that stays with you."
              }
            </p>
          </div>
          <div className="arabic-hero-note arabic-focus-card">
            <span className="arabic-focus-label">{"Your current focus"}</span>
            <strong id="arabic-focus-title">{"A0 · Arabic foundations"}</strong>
            <span id="arabic-focus-copy">
              {"Letters, sounds, joining rules, and short vowels."}
            </span>
            <div
              className="arabic-progress-track"
              aria-label="Arabic pathway begins at A0"
            >
              <span id="arabic-progress-value"></span>
            </div>
          </div>
        </section>
        <section
          className="arabic-learning-command"
          aria-label="Arabic study dashboard"
        >
          <article className="arabic-today-card">
            <div className="arabic-today-card-head">
              <div>
                <span className="arabic-card-kicker">
                  {"Your next best step"}
                </span>
                <h3 id="arabic-today-title">
                  {"Build your Arabic foundation"}
                </h3>
                <p id="arabic-today-copy">
                  {
                    "Start with the script, then use a short daily loop to make new words stay."
                  }
                </p>
              </div>
              <span className="arabic-today-badge" id="arabic-today-badge">
                {"12 min"}
              </span>
            </div>
            <div className="arabic-today-actions">
              <button
                type="button"
                className="arabic-primary-action"
                onClick={(event) => dispatch(134, event)}
              >
                <i className="fa-solid fa-play" aria-hidden="true"></i>
                <span id="arabic-study-action-label">
                  {"Start today’s study"}
                </span>
              </button>
              <button
                type="button"
                className="arabic-secondary-action"
                onClick={(event) => dispatch(135, event)}
              >
                <i className="fa-solid fa-brain" aria-hidden="true"></i>
                <span>{"Quick review"}</span>
              </button>
            </div>
            <div
              className="arabic-duration-control"
              role="group"
              aria-label="Choose daily Arabic study length"
            >
              <span>{"Session length"}</span>
              <button
                type="button"
                data-arabic-duration="10"
                onClick={(event) => dispatch(136, event)}
              >
                {"10 min"}
              </button>
              <button
                type="button"
                className="active"
                data-arabic-duration="15"
                onClick={(event) => dispatch(137, event)}
              >
                {"15 min"}
              </button>
              <button
                type="button"
                data-arabic-duration="25"
                onClick={(event) => dispatch(138, event)}
              >
                {"25 min"}
              </button>
            </div>
          </article>
          <article className="arabic-momentum-card">
            <div className="arabic-momentum-top">
              <div>
                <span className="arabic-card-kicker">{"Your consistency"}</span>
                <h3 id="arabic-momentum-title">{"Start a gentle streak"}</h3>
                <p id="arabic-momentum-copy">
                  {
                    "Complete one focused loop a day. Short daily study compounds."
                  }
                </p>
              </div>
              <span className="arabic-streak" aria-label="Study streak">
                <strong id="arabic-streak-count">{"0"}</strong>
                <small>{"days"}</small>
              </span>
            </div>
            <div
              className="arabic-week"
              id="arabic-week-progress"
              aria-label="Last seven days of Arabic study"
            ></div>
            <div
              className="arabic-learning-insights"
              aria-label="Learning insights"
            >
              <span>
                <b id="arabic-insight-sessions">{"0"}</b>
                {"study days"}
              </span>
              <span>
                <b id="arabic-insight-words">{"0"}</b>
                {"saved words"}
              </span>
              <span>
                <b id="arabic-insight-recall">{"—"}</b>
                {"latest recall"}
              </span>
            </div>
            <div className="arabic-today-actions">
              <button
                type="button"
                className="arabic-secondary-action"
                onClick={(event) => dispatch(139, event)}
              >
                <i
                  className="fa-solid fa-file-arrow-down"
                  aria-hidden="true"
                ></i>
                <span>{"Back up learning data"}</span>
              </button>
            </div>
          </article>
        </section>
        <section
          className="arabic-pathway"
          id="arabic-pathway"
          aria-labelledby="arabic-pathway-title"
          hidden={true}
        >
          <div className="arabic-section-heading">
            <div>
              <span className="arabic-card-kicker">
                {"Structured progression"}
              </span>
              <h3 id="arabic-pathway-title">{"One clear path, A0 to C2"}</h3>
            </div>
            <p>
              {
                "Each stage builds usable literacy and communication—not disconnected phrasebook drills."
              }
            </p>
          </div>
          <div
            className="arabic-level-rail"
            aria-label="Choose an Arabic learning level"
          >
            <button
              type="button"
              className="arabic-level active"
              data-arabic-level="A0"
              aria-pressed="true"
              onClick={(event) => dispatch(140, event)}
            >
              <span>{"A0"}</span>
              <strong>{"Foundations"}</strong>
              <small>{"Read, write & pronounce"}</small>
            </button>
            <button
              type="button"
              className="arabic-level"
              data-arabic-level="A1"
              aria-pressed="false"
              onClick={(event) => dispatch(141, event)}
            >
              <span>{"A1"}</span>
              <strong>{"Beginner"}</strong>
              <small>{"Words & simple sentences"}</small>
            </button>
            <button
              type="button"
              className="arabic-level"
              data-arabic-level="A2"
              aria-pressed="false"
              onClick={(event) => dispatch(142, event)}
            >
              <span>{"A2"}</span>
              <strong>{"Elementary"}</strong>
              <small>{"Everyday exchanges"}</small>
            </button>
            <button
              type="button"
              className="arabic-level"
              data-arabic-level="B1"
              aria-pressed="false"
              onClick={(event) => dispatch(143, event)}
            >
              <span>{"B1"}</span>
              <strong>{"Independent"}</strong>
              <small>{"Real conversation"}</small>
            </button>
            <button
              type="button"
              className="arabic-level"
              data-arabic-level="B2–C2"
              aria-pressed="false"
              onClick={(event) => dispatch(144, event)}
            >
              <span>{"B2–C2"}</span>
              <strong>{"Fluent & advanced"}</strong>
              <small>{"Nuance, media & expression"}</small>
            </button>
          </div>
        </section>
        <section
          className="arabic-daily-plan"
          id="arabic-daily-plan"
          aria-labelledby="arabic-daily-plan-title"
          hidden={true}
        >
          <div className="arabic-daily-plan-heading">
            <div>
              <span className="arabic-card-kicker">
                {"A realistic first week"}
              </span>
              <h3 id="arabic-daily-plan-title">
                {"A focused 12-minute study loop"}
              </h3>
              <p>
                {
                  "Do one small cycle daily. Do not add new material until you can recognise yesterday’s letters and words without looking."
                }
              </p>
            </div>
            <button
              type="button"
              id="arabic-daily-complete"
              onClick={(event) => dispatch(145, event)}
            >
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              <span>{"Mark today complete"}</span>
            </button>
          </div>
          <div className="arabic-daily-steps">
            <article>
              <span>{"01"}</span>
              <i className="fa-solid fa-font" aria-hidden="true"></i>
              <div>
                <strong>{"Script · 3 min"}</strong>
                <small>
                  {"Trace 2–4 letters. Say each name and sound slowly."}
                </small>
              </div>
            </article>
            <article>
              <span>{"02"}</span>
              <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
              <div>
                <strong>{"Words · 3 min"}</strong>
                <small>
                  {"Review five useful words aloud, Arabic first then meaning."}
                </small>
              </div>
            </article>
            <article>
              <span>{"03"}</span>
              <i className="fa-solid fa-comment-dots" aria-hidden="true"></i>
              <div>
                <strong>{"Sentence · 3 min"}</strong>
                <small>
                  {
                    "Read one short, vowelled sentence and identify a word you know."
                  }
                </small>
              </div>
            </article>
            <article>
              <span>{"04"}</span>
              <i className="fa-solid fa-rotate-left" aria-hidden="true"></i>
              <div>
                <strong>{"Recall · 3 min"}</strong>
                <small>
                  {"Cover the answer; write or say what you can remember."}
                </small>
              </div>
            </article>
          </div>
          <div className="arabic-focus-timer" aria-label="Arabic focus timer">
            <div className="arabic-focus-timer-copy">
              <i className="fa-solid fa-hourglass-half" aria-hidden="true"></i>
              <div>
                <strong>{"Focus timer"}</strong>
                <small>{"Stay with one activity until the timer ends."}</small>
              </div>
            </div>
            <div className="arabic-focus-timer-controls">
              <span id="arabic-focus-time" aria-live="polite">
                {"15:00"}
              </span>
              <button
                type="button"
                id="arabic-focus-toggle"
                onClick={(event) => dispatch(146, event)}
                aria-label="Start focus timer"
                title="Start focus timer"
              >
                <i className="fa-solid fa-play" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                onClick={(event) => dispatch(147, event)}
                aria-label="Reset focus timer"
                title="Reset focus timer"
              >
                <i className="fa-solid fa-rotate-left" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <p
            className="arabic-daily-status"
            id="arabic-daily-status"
            role="status"
          >
            {"No study session recorded for today yet."}
          </p>
        </section>
        <div className="arabic-studio-layout" hidden={true}>
          <section
            className="arabic-curriculum-card"
            id="arabic-letter-lab"
            aria-labelledby="arabic-foundations-title"
          >
            <div className="arabic-card-head">
              <span className="arabic-card-icon">
                <i className="fa-solid fa-pen-nib" aria-hidden="true"></i>
              </span>
              <div>
                <span className="arabic-card-kicker">
                  {"First lesson focus"}
                </span>
                <h3 id="arabic-foundations-title">{"Arabic foundations"}</h3>
              </div>
            </div>
            <p>
              {
                "Start with the script—the first major threshold—and make it familiar before adding speed."
              }
            </p>
            <div
              className="arabic-letter-picker"
              aria-label="Choose a letter to explore"
            >
              <button
                type="button"
                className="active"
                aria-pressed="true"
                onClick={(event) => dispatch(148, event)}
              >
                {"ب"}
              </button>
              <button
                type="button"
                aria-pressed="false"
                onClick={(event) => dispatch(149, event)}
              >
                {"ت"}
              </button>
              <button
                type="button"
                aria-pressed="false"
                onClick={(event) => dispatch(150, event)}
              >
                {"ح"}
              </button>
              <button
                type="button"
                aria-pressed="false"
                onClick={(event) => dispatch(151, event)}
              >
                {"ر"}
              </button>
              <button
                type="button"
                aria-pressed="false"
                onClick={(event) => dispatch(152, event)}
              >
                {"س"}
              </button>
              <button
                type="button"
                aria-pressed="false"
                onClick={(event) => dispatch(153, event)}
              >
                {"ع"}
              </button>
              <button
                type="button"
                aria-pressed="false"
                onClick={(event) => dispatch(154, event)}
              >
                {"ق"}
              </button>
              <button
                type="button"
                aria-pressed="false"
                onClick={(event) => dispatch(155, event)}
              >
                {"م"}
              </button>
            </div>
            <div className="arabic-letter-lesson">
              <span id="arabic-letter-symbol" lang="ar" dir="rtl">
                {"ب"}
              </span>
              <div>
                <strong id="arabic-letter-name">{"باء · Bāʾ"}</strong>
                <small id="arabic-letter-sound">{"Sound: /b/"}</small>
                <em id="arabic-letter-word" lang="ar" dir="rtl">
                  {"بَيْت "}
                  <b>{"bayt"}</b>
                  {" · house"}
                </em>
              </div>
            </div>
            <div
              className="arabic-form-flow"
              id="arabic-letter-forms"
              aria-label="The connected forms of the letter ba"
            >
              <span lang="ar">{"ب"}</span>
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span lang="ar">{"بـ"}</span>
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span lang="ar">{"ـبـ"}</span>
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span lang="ar">{"ـب"}</span>
            </div>
            <p className="arabic-card-tip">
              <i className="fa-solid fa-check" aria-hidden="true"></i>
              {
                " Letters, joining rules, vowels, sukūn, shadda, tanwīn, and handwriting belong together."
              }
            </p>
          </section>
          <section
            className="arabic-word-explorer"
            id="arabic-root-explorer"
            aria-labelledby="word-explorer-title"
          >
            <div className="arabic-card-head">
              <span className="arabic-card-icon">
                <i
                  className="fa-solid fa-diagram-project"
                  aria-hidden="true"
                ></i>
              </span>
              <div>
                <span className="arabic-card-kicker">
                  {"Signature learning tool"}
                </span>
                <h3 id="word-explorer-title">
                  {"Explore words by their root"}
                </h3>
              </div>
            </div>
            <p>
              {
                "Arabic becomes easier to remember when connected words reveal their shared pattern and meaning."
              }
            </p>
            <div className="arabic-root-display">
              <span lang="ar" dir="rtl">
                {"ك ت ب"}
              </span>
              <small>{"the root of writing"}</small>
            </div>
            <div className="arabic-root-words">
              <span>
                <b lang="ar" dir="rtl">
                  {"كَتَبَ"}
                </b>
                <small>{"he wrote"}</small>
              </span>
              <span>
                <b lang="ar" dir="rtl">
                  {"كِتَاب"}
                </b>
                <small>{"book"}</small>
              </span>
              <span>
                <b lang="ar" dir="rtl">
                  {"كَاتِب"}
                </b>
                <small>{"writer"}</small>
              </span>
              <span>
                <b lang="ar" dir="rtl">
                  {"مَكْتَبَة"}
                </b>
                <small>{"library"}</small>
              </span>
            </div>
            <div className="arabic-word-notebook">
              <div className="arabic-word-notebook-head">
                <h4>{"My word notebook"}</h4>
                <div className="arabic-notebook-actions">
                  <button
                    type="button"
                    onClick={(event) => dispatch(156, event)}
                  >
                    <i className="fa-solid fa-plus" aria-hidden="true"></i>
                    {" Add book"}
                  </button>
                  <button
                    type="button"
                    onClick={(event) => dispatch(157, event)}
                  >
                    {"Clear"}
                  </button>
                </div>
              </div>
              <div
                className="arabic-notebook-list"
                id="arabic-notebook-list"
                aria-live="polite"
              ></div>
            </div>
          </section>
        </div>
        <section
          className="arabic-core-knowledge"
          aria-labelledby="arabic-core-title"
          hidden={true}
        >
          <div className="arabic-section-heading">
            <div>
              <span className="arabic-card-kicker">
                {"Core knowledge, made concrete"}
              </span>
              <h3 id="arabic-core-title">
                {"Reference, vocabulary, and your first grammar pattern"}
              </h3>
            </div>
            <p>
              {
                "Use these as small repeatable lessons. Accuracy matters more than how much you cover in one sitting."
              }
            </p>
          </div>
          <div className="arabic-core-grid">
            <article className="arabic-alphabet-reference">
              <div className="arabic-card-head">
                <span className="arabic-card-icon">
                  <i
                    className="fa-solid fa-table-cells-large"
                    aria-hidden="true"
                  ></i>
                </span>
                <div>
                  <span className="arabic-card-kicker">
                    {"Full script reference"}
                  </span>
                  <h3>{"The 28 letters"}</h3>
                </div>
              </div>
              <p>
                {
                  "Learn letter names with a teacher, then use this chart for quick visual revision. Arabic reads right to left."
                }
              </p>
              <div
                className="arabic-alphabet-grid"
                aria-label="Arabic alphabet reference"
              >
                <span>
                  <b>{"ا"}</b>
                  <small>{"alif"}</small>
                </span>
                <span>
                  <b>{"ب"}</b>
                  <small>{"bāʾ"}</small>
                </span>
                <span>
                  <b>{"ت"}</b>
                  <small>{"tāʾ"}</small>
                </span>
                <span>
                  <b>{"ث"}</b>
                  <small>{"thāʾ"}</small>
                </span>
                <span>
                  <b>{"ج"}</b>
                  <small>{"jīm"}</small>
                </span>
                <span>
                  <b>{"ح"}</b>
                  <small>{"ḥāʾ"}</small>
                </span>
                <span>
                  <b>{"خ"}</b>
                  <small>{"khāʾ"}</small>
                </span>
                <span>
                  <b>{"د"}</b>
                  <small>{"dāl"}</small>
                </span>
                <span>
                  <b>{"ذ"}</b>
                  <small>{"dhāl"}</small>
                </span>
                <span>
                  <b>{"ر"}</b>
                  <small>{"rāʾ"}</small>
                </span>
                <span>
                  <b>{"ز"}</b>
                  <small>{"zāy"}</small>
                </span>
                <span>
                  <b>{"س"}</b>
                  <small>{"sīn"}</small>
                </span>
                <span>
                  <b>{"ش"}</b>
                  <small>{"shīn"}</small>
                </span>
                <span>
                  <b>{"ص"}</b>
                  <small>{"ṣād"}</small>
                </span>
                <span>
                  <b>{"ض"}</b>
                  <small>{"ḍād"}</small>
                </span>
                <span>
                  <b>{"ط"}</b>
                  <small>{"ṭāʾ"}</small>
                </span>
                <span>
                  <b>{"ظ"}</b>
                  <small>{"ẓāʾ"}</small>
                </span>
                <span>
                  <b>{"ع"}</b>
                  <small>{"ʿayn"}</small>
                </span>
                <span>
                  <b>{"غ"}</b>
                  <small>{"ghayn"}</small>
                </span>
                <span>
                  <b>{"ف"}</b>
                  <small>{"fāʾ"}</small>
                </span>
                <span>
                  <b>{"ق"}</b>
                  <small>{"qāf"}</small>
                </span>
                <span>
                  <b>{"ك"}</b>
                  <small>{"kāf"}</small>
                </span>
                <span>
                  <b>{"ل"}</b>
                  <small>{"lām"}</small>
                </span>
                <span>
                  <b>{"م"}</b>
                  <small>{"mīm"}</small>
                </span>
                <span>
                  <b>{"ن"}</b>
                  <small>{"nūn"}</small>
                </span>
                <span>
                  <b>{"ه"}</b>
                  <small>{"hāʾ"}</small>
                </span>
                <span>
                  <b>{"و"}</b>
                  <small>{"wāw"}</small>
                </span>
                <span>
                  <b>{"ي"}</b>
                  <small>{"yāʾ"}</small>
                </span>
              </div>
              <p className="arabic-card-tip">
                <i className="fa-solid fa-pencil" aria-hidden="true"></i>
                {
                  " Note the six non-connectors on the left: ا د ذ ر ز و. They do not join to the following letter."
                }
              </p>
            </article>
            <article className="arabic-grammar-card" id="arabic-grammar-lab">
              <div className="arabic-card-head">
                <span className="arabic-card-icon">
                  <i
                    className="fa-solid fa-puzzle-piece"
                    aria-hidden="true"
                  ></i>
                </span>
                <div>
                  <span className="arabic-card-kicker">
                    {"Grammar, gently"}
                  </span>
                  <h3>{"This: masculine and feminine"}</h3>
                </div>
              </div>
              <p>
                {
                  "Arabic marks grammatical gender. Start by noticing it; do not try to memorise every rule at once."
                }
              </p>
              <div className="arabic-grammar-pairs">
                <div>
                  <span lang="ar" dir="rtl">
                    {"هٰذَا"}
                  </span>
                  <strong>{"hādhā"}</strong>
                  <small>{"this · masculine"}</small>
                </div>
                <div>
                  <span lang="ar" dir="rtl">
                    {"هٰذِهِ"}
                  </span>
                  <strong>{"hādhihi"}</strong>
                  <small>{"this · feminine"}</small>
                </div>
              </div>
              <div className="arabic-sentence-example">
                <span className="arabic-example-label">{"Pattern"}</span>
                <p lang="ar" dir="rtl">
                  {"هٰذَا كِتَابٌ"}
                </p>
                <strong>{"hādhā kitābun"}</strong>
                <small>{"This is a book."}</small>
              </div>
              <div className="arabic-sentence-example">
                <span className="arabic-example-label">{"Pattern"}</span>
                <p lang="ar" dir="rtl">
                  {"هٰذِهِ سَيَّارَةٌ"}
                </p>
                <strong>{"hādhihi sayyāratun"}</strong>
                <small>{"This is a car."}</small>
              </div>
              <div className="arabic-sentence-builder">
                <strong>{"Build the sentence"}</strong>
                <small>
                  {"Tap the words in the order that means “This is a book.”"}
                </small>
                <div
                  className="arabic-builder-output"
                  id="arabic-builder-output"
                  lang="ar"
                  dir="rtl"
                  aria-live="polite"
                ></div>
                <div className="arabic-builder-chips" id="arabic-builder-chips">
                  <button
                    type="button"
                    onClick={(event) => dispatch(158, event)}
                  >
                    {"كِتَابٌ"}
                  </button>
                  <button
                    type="button"
                    onClick={(event) => dispatch(159, event)}
                  >
                    {"هٰذَا"}
                  </button>
                  <button
                    type="button"
                    onClick={(event) => dispatch(160, event)}
                  >
                    {"مَاء"}
                  </button>
                </div>
                <div className="arabic-builder-actions">
                  <button
                    type="button"
                    onClick={(event) => dispatch(161, event)}
                  >
                    {"Check sentence"}
                  </button>
                  <button
                    type="button"
                    onClick={(event) => dispatch(162, event)}
                  >
                    {"Clear"}
                  </button>
                </div>
                <span
                  className="arabic-builder-status"
                  id="arabic-builder-status"
                  role="status"
                >
                  {
                    "Arabic reads right to left, but build this thought in its normal word order."
                  }
                </span>
              </div>
              <p className="arabic-card-tip">
                <i className="fa-solid fa-lightbulb" aria-hidden="true"></i>
                {
                  " Read the Arabic first, then check the transliteration and meaning."
                }
              </p>
            </article>
            <article
              className="arabic-vocabulary-card"
              id="arabic-vocabulary-lab"
            >
              <div className="arabic-card-head">
                <span className="arabic-card-icon">
                  <i
                    className="fa-solid fa-book-bookmark"
                    aria-hidden="true"
                  ></i>
                </span>
                <div>
                  <span className="arabic-card-kicker">
                    {"First useful words"}
                  </span>
                  <h3>{"A small starter set"}</h3>
                </div>
              </div>
              <p>
                {
                  "Learn a few words deeply: see them, say them, write them, and use them in a short phrase."
                }
              </p>
              <div className="arabic-vocabulary-grid">
                <div>
                  <b lang="ar" dir="rtl">
                    {"بَيْت"}
                  </b>
                  <span>{"bayt"}</span>
                  <small>{"house"}</small>
                </div>
                <div>
                  <b lang="ar" dir="rtl">
                    {"كِتَاب"}
                  </b>
                  <span>{"kitāb"}</span>
                  <small>{"book"}</small>
                </div>
                <div>
                  <b lang="ar" dir="rtl">
                    {"مَاء"}
                  </b>
                  <span>{"māʾ"}</span>
                  <small>{"water"}</small>
                </div>
                <div>
                  <b lang="ar" dir="rtl">
                    {"طَعَام"}
                  </b>
                  <span>{"ṭaʿām"}</span>
                  <small>{"food"}</small>
                </div>
                <div>
                  <b lang="ar" dir="rtl">
                    {"يَوْم"}
                  </b>
                  <span>{"yawm"}</span>
                  <small>{"day"}</small>
                </div>
                <div>
                  <b lang="ar" dir="rtl">
                    {"خَيْر"}
                  </b>
                  <span>{"khayr"}</span>
                  <small>{"good"}</small>
                </div>
                <div>
                  <b lang="ar" dir="rtl">
                    {"أَنَا"}
                  </b>
                  <span>{"anā"}</span>
                  <small>{"I"}</small>
                </div>
                <div>
                  <b lang="ar" dir="rtl">
                    {"أَنْتَ"}
                  </b>
                  <span>{"anta"}</span>
                  <small>{"you · m."}</small>
                </div>
              </div>
              <div className="arabic-reading-practice">
                <span className="arabic-example-label">{"Read aloud"}</span>
                <p lang="ar" dir="rtl">
                  {"أَنَا أُحِبُّ الْكِتَابَ"}
                </p>
                <strong>{"anā uḥibbu al-kitāba"}</strong>
                <small>{"I love the book."}</small>
              </div>
            </article>
          </div>
        </section>
        <section
          className="arabic-skills"
          aria-labelledby="arabic-skills-title"
        >
          <div className="arabic-section-heading">
            <div>
              <span className="arabic-card-kicker">
                {"A complete ecosystem"}
              </span>
              <h3 id="arabic-skills-title">
                {"Eight connected ways to learn"}
              </h3>
            </div>
            <p>
              {
                "Move between skills without losing sight of your level, goals, and revision needs."
              }
            </p>
          </div>
          <div
            className="arabic-skills-grid"
            aria-label="Choose a learning area"
          >
            <button
              type="button"
              className="arabic-skill-card"
              onClick={(event) => dispatch(163, event)}
              aria-label="Open Learn: levels and lesson order"
            >
              <i className="fa-solid fa-route" aria-hidden="true"></i>
              <strong>{"Learn"}</strong>
              <span>{"Start here"}</span>
            </button>
            <button
              type="button"
              className="arabic-skill-card"
              onClick={(event) => dispatch(164, event)}
              aria-label="Open Practice: recall and review"
            >
              <i className="fa-solid fa-brain" aria-hidden="true"></i>
              <strong>{"Practice"}</strong>
              <span>{"Recall & review"}</span>
            </button>
            <button
              type="button"
              className="arabic-skill-card"
              onClick={(event) => dispatch(165, event)}
              aria-label="Open Speak: sounds and useful phrases"
            >
              <i
                className="fa-solid fa-microphone-lines"
                aria-hidden="true"
              ></i>
              <strong>{"Speak"}</strong>
              <span>{"Build confidence"}</span>
            </button>
            <button
              type="button"
              className="arabic-skill-card"
              onClick={(event) => dispatch(166, event)}
              aria-label="Open Read: vowelled Arabic practice"
            >
              <i className="fa-solid fa-book-open" aria-hidden="true"></i>
              <strong>{"Read"}</strong>
              <span>{"Decode with ease"}</span>
            </button>
            <button
              type="button"
              className="arabic-skill-card"
              onClick={(event) => dispatch(167, event)}
              aria-label="Open Listen: guided listening practice"
            >
              <i className="fa-solid fa-headphones" aria-hidden="true"></i>
              <strong>{"Listen"}</strong>
              <span>{"Hear & repeat"}</span>
            </button>
            <button
              type="button"
              className="arabic-skill-card"
              onClick={(event) => dispatch(168, event)}
              aria-label="Open Write: Arabic letter forms"
            >
              <i className="fa-solid fa-pen" aria-hidden="true"></i>
              <strong>{"Write"}</strong>
              <span>{"Make forms stick"}</span>
            </button>
            <button
              type="button"
              className="arabic-skill-card"
              onClick={(event) => dispatch(169, event)}
              aria-label="Open Explore: roots and word families"
            >
              <i
                className="fa-solid fa-magnifying-glass"
                aria-hidden="true"
              ></i>
              <strong>{"Explore"}</strong>
              <span>{"See word families"}</span>
            </button>
            <button
              type="button"
              className="arabic-skill-card"
              onClick={(event) => dispatch(170, event)}
              aria-label="Open guided Arabic study questions"
            >
              <i className="fa-solid fa-user-graduate" aria-hidden="true"></i>
              <strong>{"Study guide"}</strong>
              <span>{"Clarify & apply"}</span>
            </button>
          </div>
        </section>
        <section
          className="arabic-context-lab"
          id="arabic-context-lab"
          aria-labelledby="arabic-context-title"
          hidden={true}
        >
          <div className="arabic-context-heading">
            <div>
              <span className="arabic-card-kicker">{"Arabic in context"}</span>
              <h3 id="arabic-context-title">
                {"Read a short Qur’anic phrase with care"}
              </h3>
              <p>
                {
                  "Use familiar text to notice vocabulary and structure. This is a learning aid—not a substitute for tafsīr or learning recitation from a qualified teacher."
                }
              </p>
            </div>
            <button
              type="button"
              id="arabic-context-load"
              onClick={(event) => dispatch(171, event)}
            >
              <i className="fa-solid fa-shuffle" aria-hidden="true"></i>
              <span>{"Load another phrase"}</span>
            </button>
          </div>
          <div className="arabic-context-content">
            <span
              className="arabic-context-number"
              id="arabic-context-reference"
            >
              {"1:1"}
            </span>
            <div>
              <p
                className="arabic-context-arabic"
                id="arabic-context-arabic"
                lang="ar"
                dir="rtl"
              >
                {"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"}
              </p>
              <p
                className="arabic-context-translation"
                id="arabic-context-translation"
              >
                {
                  "In the name of God, The Most Gracious, The Dispenser of Grace."
                }
              </p>
            </div>
            <p
              className="arabic-context-status"
              id="arabic-context-status"
              role="status"
            >
              {"Ready to load a short phrase from the public Quran API."}
            </p>
          </div>
        </section>
        <section
          className="arabic-language-note"
          id="arabic-language-note"
          aria-label="Arabic varieties"
          hidden={true}
        >
          <i className="fa-solid fa-globe" aria-hidden="true"></i>
          <div>
            <strong>{"Fuṣḥā first, local speech when you are ready."}</strong>
            <span>
              {
                "Modern Standard Arabic is the core. Later, compare how everyday phrases change across Gulf, Egyptian, Levantine, and Maghrebi speech."
              }
            </span>
          </div>
          <div className="arabic-variant">
            <b>{"MSA"}</b>
            <span lang="ar" dir="rtl">
              {"مَاذَا تُرِيدُ؟"}
            </span>
            <small>{"What do you want?"}</small>
          </div>
        </section>
        <aside
          className="arabic-learning-note"
          id="arabic-learning-note"
          hidden={true}
        >
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          <div>
            <strong>{"Learn carefully and consistently"}</strong>
            <span>
              {
                "Use guided lessons to build familiarity. For Qur’an recitation and precise pronunciation, learn directly with a qualified teacher or reciter. The pathway is informed by CEFR-style progression and structured Arabic-learning practice."
              }
            </span>
            <div
              className="arabic-resource-links"
              aria-label="Learn Arabic references"
            >
              <a
                href="https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-companion-volume-and-its-language-versions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                ></i>
                {" CEFR framework"}
              </a>
              <a
                href="https://alquran.cloud/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                ></i>
                {" Quran API reference"}
              </a>
              <a
                href="https://www.arabiclanguageinstitute.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                ></i>
                {" Structured Arabic study"}
              </a>
            </div>
          </div>
        </aside>
        <section
          className="arabic-active-lab arabic-practice-lab"
          id="arabic-practice-lab"
          hidden={true}
          aria-labelledby="arabic-practice-lab-title"
        >
          <div className="arabic-card-head">
            <span className="arabic-card-icon">
              <i className="fa-solid fa-brain" aria-hidden="true"></i>
            </span>
            <div>
              <span className="arabic-card-kicker">
                {"Active recall drill"}
              </span>
              <h3 id="arabic-practice-lab-title">
                {"Answer before you reveal"}
              </h3>
            </div>
          </div>
          <p>
            {
              "Look at Arabic first, retrieve the meaning, then check it. Short, repeated retrieval is one of the fastest ways to turn recognition into recall."
            }
          </p>
          <div className="arabic-recall-card">
            <span id="arabic-review-word" lang="ar" dir="rtl">
              {"كِتَاب"}
            </span>
            <small id="arabic-review-prompt">
              {"What does this word mean?"}
            </small>
            <button
              type="button"
              id="arabic-review-reveal"
              onClick={(event) => dispatch(172, event)}
              aria-expanded="false"
            >
              <i className="fa-solid fa-eye" aria-hidden="true"></i>
              <span>{"Reveal answer"}</span>
            </button>
            <strong
              className="arabic-recall-answer"
              id="arabic-review-answer"
              hidden={true}
            >
              {"kitāb · book"}
            </strong>
            <div
              className="arabic-review-actions"
              id="arabic-review-actions"
              hidden={true}
            >
              <button
                type="button"
                className="arabic-review-rate hard"
                onClick={(event) => dispatch(173, event)}
              >
                <i className="fa-solid fa-rotate-left" aria-hidden="true"></i>
                {" Again"}
              </button>
              <button
                type="button"
                className="arabic-review-rate easy"
                onClick={(event) => dispatch(174, event)}
              >
                <i className="fa-solid fa-check" aria-hidden="true"></i>
                {" I knew it"}
              </button>
            </div>
          </div>
          <p
            className="arabic-lab-status"
            id="arabic-review-status"
            role="status"
          >
            {"Card 1 of 5 · Say the answer aloud before revealing it."}
          </p>
          <button
            type="button"
            className="arabic-review-restart"
            id="arabic-review-restart"
            onClick={(event) => dispatch(175, event)}
            hidden={true}
          >
            <i className="fa-solid fa-rotate-right" aria-hidden="true"></i>
            {" Start another round"}
          </button>
          <div className="arabic-practice-suite">
            <article className="arabic-practice-tool">
              <h4>{"Meaning check"}</h4>
              <p>{"Choose the meaning before looking at any help."}</p>
              <div
                className="arabic-quiz-prompt"
                id="arabic-quiz-word"
                lang="ar"
                dir="rtl"
              >
                {"بَيْت"}
              </div>
              <div
                className="arabic-quiz-options"
                id="arabic-quiz-options"
                aria-label="Meaning quiz answers"
              ></div>
              <span
                className="arabic-tool-status"
                id="arabic-quiz-status"
                role="status"
              >
                {"One small question at a time."}
              </span>
            </article>
            <article className="arabic-practice-tool">
              <h4>{"Write from memory"}</h4>
              <p>
                {
                  "Type the Arabic word. Diacritics are optional for this check."
                }
              </p>
              <div className="arabic-write-prompt">
                <span>{"Write the Arabic for:"}</span>
                <b id="arabic-write-meaning">{"water"}</b>
              </div>
              <div className="arabic-write-entry">
                <input
                  id="arabic-write-input"
                  lang="ar"
                  dir="rtl"
                  inputmode="text"
                  autoComplete="off"
                  aria-label="Write the Arabic word for water"
                />
                <button type="button" onClick={(event) => dispatch(176, event)}>
                  {"Check"}
                </button>
              </div>
              <span
                className="arabic-tool-status"
                id="arabic-write-status"
                role="status"
              >
                {"Use your keyboard, then compare carefully."}
              </span>
            </article>
          </div>
          <ol className="arabic-mini-checklist">
            <li>{"Recall the meaning without looking."}</li>
            <li>{"Say the word twice with the vowel marks."}</li>
            <li>
              {
                "Rate it honestly; missed cards return once in this short round."
              }
            </li>
          </ol>
        </section>
        <section
          className="arabic-active-lab arabic-speak-lab"
          id="arabic-speak-lab"
          hidden={true}
          aria-labelledby="arabic-speak-lab-title"
        >
          <div className="arabic-card-head">
            <span className="arabic-card-icon">
              <i
                className="fa-solid fa-microphone-lines"
                aria-hidden="true"
              ></i>
            </span>
            <div>
              <span className="arabic-card-kicker">{"Guided speaking"}</span>
              <h3 id="arabic-speak-lab-title">
                {"One useful phrase, three repetitions"}
              </h3>
            </div>
          </div>
          <p>
            {
              "Listen to a qualified teacher where possible. Use this gentle drill to practise pacing, then ask for pronunciation feedback."
            }
          </p>
          <div className="arabic-speak-phrase">
            <p lang="ar" dir="rtl">
              {"أُرِيدُ مَاءً، مِنْ فَضْلِكَ"}
            </p>
            <strong>{"urīdu māʾan, min faḍlik"}</strong>
            <small>{"I would like water, please."}</small>
            <button type="button" onClick={(event) => dispatch(177, event)}>
              <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
              <span>{"Hear a practice prompt"}</span>
            </button>
          </div>
          <p
            className="arabic-lab-status"
            id="arabic-speak-status"
            role="status"
          >
            {"Repeat slowly, then naturally. Browser voice support may vary."}
          </p>
        </section>
        <section
          className="arabic-active-lab arabic-listen-lab"
          id="arabic-listen-lab"
          hidden={true}
          aria-labelledby="arabic-listen-lab-title"
        >
          <div className="arabic-card-head">
            <span className="arabic-card-icon">
              <i className="fa-solid fa-headphones" aria-hidden="true"></i>
            </span>
            <div>
              <span className="arabic-card-kicker">{"Listening ladder"}</span>
              <h3 id="arabic-listen-lab-title">
                {"Hear, follow, pause, repeat"}
              </h3>
            </div>
          </div>
          <p>
            {
              "Do not chase speed. A short phrase you can hear clearly is more useful than a long passage you cannot yet follow."
            }
          </p>
          <div className="arabic-listen-steps">
            <span>
              <b>{"1"}</b>
              {" Listen without reading."}
            </span>
            <span>
              <b>{"2"}</b>
              {" Follow the Arabic text."}
            </span>
            <span>
              <b>{"3"}</b>
              {" Pause and repeat."}
            </span>
            <span>
              <b>{"4"}</b>
              {" Cover the text and recall."}
            </span>
          </div>
          <div className="arabic-speak-phrase">
            <p lang="ar" dir="rtl">
              {"هٰذَا كِتَابٌ"}
            </p>
            <strong>{"hādhā kitābun"}</strong>
            <small>{"This is a book."}</small>
            <button type="button" onClick={(event) => dispatch(178, event)}>
              <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
              <span>{"Play a slow practice prompt"}</span>
            </button>
          </div>
          <p
            className="arabic-lab-status"
            id="arabic-listen-status"
            role="status"
          >
            {
              "For accurate recitation and pronunciation, use a qualified teacher or trusted reciter."
            }
          </p>
        </section>
        <section
          className="arabic-active-lab arabic-tutor-lab"
          id="arabic-tutor-lab"
          hidden={true}
          aria-labelledby="arabic-tutor-lab-title"
        >
          <div className="arabic-card-head">
            <span className="arabic-card-icon">
              <i className="fa-solid fa-user-graduate" aria-hidden="true"></i>
            </span>
            <div>
              <span className="arabic-card-kicker">
                {"Guided question practice"}
              </span>
              <h3 id="arabic-tutor-lab-title">
                {"Ask a small, testable question"}
              </h3>
            </div>
          </div>
          <p>
            {
              "Good questions lead to a short answer you can use immediately. Choose one prompt, read the guidance, then test it in the grammar lesson."
            }
          </p>
          <div className="arabic-tutor-prompts">
            <button type="button" onClick={(event) => dispatch(179, event)}>
              {"When do I use هٰذَا?"}
            </button>
            <button type="button" onClick={(event) => dispatch(180, event)}>
              {"Why does a letter change shape?"}
            </button>
            <button type="button" onClick={(event) => dispatch(181, event)}>
              {"What does a root tell me?"}
            </button>
          </div>
          <div
            className="arabic-tutor-answer"
            id="arabic-tutor-answer"
            role="status"
          >
            <strong>{"Choose a question above."}</strong>
            <span>
              {
                "Keep your next question specific enough to test in one word or sentence."
              }
            </span>
          </div>
        </section>
        <section
          className="arabic-active-lab arabic-sound-lab"
          id="arabic-sound-lab"
          hidden={true}
          aria-labelledby="arabic-sound-lab-title"
        >
          <div className="arabic-card-head">
            <span className="arabic-card-icon">
              <i className="fa-solid fa-wave-square" aria-hidden="true"></i>
            </span>
            <div>
              <span className="arabic-card-kicker">{"Pronunciation map"}</span>
              <h3 id="arabic-sound-lab-title">
                {"Notice the sounds that need extra care"}
              </h3>
            </div>
          </div>
          <p>
            {
              "Do not rely on English spelling for these sounds. Listen to a qualified teacher, then practise one contrast at a time."
            }
          </p>
          <div className="arabic-sound-grid">
            <span>
              <b>{"ح"}</b>
              <small>{"breathy ḥ"}</small>
            </span>
            <span>
              <b>{"خ"}</b>
              <small>{"kh"}</small>
            </span>
            <span>
              <b>{"ع"}</b>
              <small>{"ʿayn"}</small>
            </span>
            <span>
              <b>{"غ"}</b>
              <small>{"gh"}</small>
            </span>
            <span>
              <b>{"ق"}</b>
              <small>{"qāf"}</small>
            </span>
            <span>
              <b>{"ص ض ط ظ"}</b>
              <small>{"emphatic set"}</small>
            </span>
          </div>
          <p className="arabic-card-tip">
            <i className="fa-solid fa-ear-listen" aria-hidden="true"></i>
            {
              " Aim for accurate listening first; a teacher can correct the mouth position safely and precisely."
            }
          </p>
        </section>
        <section
          className="arabic-active-lab arabic-reading-lab"
          id="arabic-reading-lab"
          hidden={true}
          aria-labelledby="arabic-reading-lab-title"
        >
          <div className="arabic-card-head">
            <span className="arabic-card-icon">
              <i className="fa-solid fa-lines-leaning" aria-hidden="true"></i>
            </span>
            <div>
              <span className="arabic-card-kicker">{"Reading decode"}</span>
              <h3 id="arabic-reading-lab-title">
                {"Read in small meaning groups"}
              </h3>
            </div>
          </div>
          <p>
            {
              "Use vowel marks to sound out each word, then join words into a thought. Read the Arabic before checking the support text."
            }
          </p>
          <div className="arabic-reading-strip">
            <p lang="ar" dir="rtl">
              {"مَنْ هٰذَا؟   هٰذَا طَالِبٌ"}
            </p>
            <strong>{"man hādhā? · hādhā ṭālibun"}</strong>
            <small>{"Who is this? This is a student."}</small>
          </div>
          <div className="arabic-compact-lab-grid">
            <span>
              <b>{"مَنْ"}</b>
              <small>{"who?"}</small>
            </span>
            <span>
              <b>{"هٰذَا"}</b>
              <small>{"this · m."}</small>
            </span>
            <span>
              <b>{"طَالِب"}</b>
              <small>{"student"}</small>
            </span>
          </div>
          <p className="arabic-card-tip">
            <i className="fa-solid fa-book-open" aria-hidden="true"></i>
            {
              " Cover the translation after the first reading and see which word you can still recognise."
            }
          </p>
        </section>
        <section
          className="arabic-active-lab arabic-writing-lab"
          id="arabic-writing-lab"
          hidden={true}
          aria-labelledby="arabic-writing-lab-title"
        >
          <div className="arabic-card-head">
            <span className="arabic-card-icon">
              <i className="fa-solid fa-pen-ruler" aria-hidden="true"></i>
            </span>
            <div>
              <span className="arabic-card-kicker">{"Writing routine"}</span>
              <h3 id="arabic-writing-lab-title">
                {"From shape to connected word"}
              </h3>
            </div>
          </div>
          <div className="arabic-writing-steps">
            <span>
              <b>{"1"}</b>
              <strong>{"Trace"}</strong>
              <small>{"Follow one letter’s direction."}</small>
            </span>
            <span>
              <b>{"2"}</b>
              <strong>{"Copy"}</strong>
              <small>{"Write its available forms."}</small>
            </span>
            <span>
              <b>{"3"}</b>
              <strong>{"Recall"}</strong>
              <small>{"Write the word without a model."}</small>
            </span>
          </div>
          <div className="arabic-writing-line" lang="ar" dir="rtl">
            {"بـ   ـبـ   ـب   |   بَيْت"}
          </div>
          <p className="arabic-card-tip">
            <i className="fa-solid fa-hand" aria-hidden="true"></i>
            {
              " Keep a short writing notebook; accurate, repeated forms matter more than filling a page quickly."
            }
          </p>
        </section>
        <section
          className="arabic-active-lab arabic-script-marks-lab"
          id="arabic-script-marks-lab"
          hidden={true}
          aria-labelledby="arabic-script-marks-lab-title"
        >
          <div className="arabic-card-head">
            <span className="arabic-card-icon">
              <i className="fa-solid fa-quote-right" aria-hidden="true"></i>
            </span>
            <div>
              <span className="arabic-card-kicker">{"Script essentials"}</span>
              <h3 id="arabic-script-marks-lab-title">
                {"Marks that change how Arabic is read"}
              </h3>
            </div>
          </div>
          <div className="arabic-script-marks">
            <span>
              <b>{"َ"}</b>
              <strong>{"fatḥah"}</strong>
              <small>{"short a"}</small>
            </span>
            <span>
              <b>{"ِ"}</b>
              <strong>{"kasrah"}</strong>
              <small>{"short i"}</small>
            </span>
            <span>
              <b>{"ُ"}</b>
              <strong>{"ḍammah"}</strong>
              <small>{"short u"}</small>
            </span>
            <span>
              <b>{"ْ"}</b>
              <strong>{"sukūn"}</strong>
              <small>{"no vowel"}</small>
            </span>
            <span>
              <b>{"ّ"}</b>
              <strong>{"shaddah"}</strong>
              <small>{"doubled sound"}</small>
            </span>
            <span>
              <b>{"ً ٍ ٌ"}</b>
              <strong>{"tanwīn"}</strong>
              <small>{"final n sound"}</small>
            </span>
          </div>
          <p className="arabic-card-tip">
            <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
            {
              " Vowel marks are especially useful for beginners and precise reading; learn their sound with a teacher."
            }
          </p>
        </section>
        <section
          className="arabic-active-lab arabic-pattern-lab"
          id="arabic-pattern-lab"
          hidden={true}
          aria-labelledby="arabic-pattern-lab-title"
        >
          <div className="arabic-card-head">
            <span className="arabic-card-icon">
              <i className="fa-solid fa-code-branch" aria-hidden="true"></i>
            </span>
            <div>
              <span className="arabic-card-kicker">
                {"Root pattern practice"}
              </span>
              <h3 id="arabic-pattern-lab-title">
                {"A second word family: ع ل م"}
              </h3>
            </div>
          </div>
          <p>
            {
              "Roots can help you see related meanings. Use them as a memory aid, then learn each word in its own sentence."
            }
          </p>
          <div className="arabic-root-display">
            <span lang="ar" dir="rtl">
              {"ع ل م"}
            </span>
            <small>{"knowledge and learning"}</small>
          </div>
          <div className="arabic-root-words">
            <span>
              <b lang="ar" dir="rtl">
                {"عِلْم"}
              </b>
              <small>{"knowledge"}</small>
            </span>
            <span>
              <b lang="ar" dir="rtl">
                {"مُعَلِّم"}
              </b>
              <small>{"teacher"}</small>
            </span>
            <span>
              <b lang="ar" dir="rtl">
                {"تَعَلُّم"}
              </b>
              <small>{"learning"}</small>
            </span>
            <span>
              <b lang="ar" dir="rtl">
                {"مَعْلُوم"}
              </b>
              <small>{"known"}</small>
            </span>
          </div>
        </section>
      </div>
      <section
        className="arabic-studio-page"
        id="arabic-studio-page"
        aria-labelledby="arabic-studio-page-title"
        aria-hidden="true"
        hidden={true}
      >
        <button
          type="button"
          className="arabic-studio-back"
          onClick={(event) => dispatch(182, event)}
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
          <span>{"Back to Learn Arabic"}</span>
        </button>
        <header className="arabic-studio-page-hero">
          <span className="arabic-studio-page-icon">
            <i
              id="arabic-studio-page-icon"
              className="fa-solid fa-route"
              aria-hidden="true"
            ></i>
          </span>
          <div>
            <span className="arabic-card-kicker" id="arabic-studio-page-kicker">
              {"A connected course, not a phrasebook"}
            </span>
            <h2 id="arabic-studio-page-title">
              {"Learn · levels and lesson order"}
            </h2>
            <p id="arabic-studio-page-copy">
              {"Use the A0–C2 pathway to decide what comes next."}
            </p>
          </div>
        </header>
        <div className="arabic-studio-page-grid">
          <section className="arabic-studio-page-card">
            <span className="arabic-detail-label">{"What you will cover"}</span>
            <ul id="arabic-studio-page-outcomes"></ul>
          </section>
          <section className="arabic-studio-page-card arabic-studio-practice-card">
            <span className="arabic-detail-label">{"Your practice now"}</span>
            <p id="arabic-studio-page-practice"></p>
            <span className="arabic-studio-inline-note">
              <i className="fa-solid fa-book-open" aria-hidden="true"></i>
              {" The relevant lesson is included below."}
            </span>
          </section>
        </div>
        <section
          className="arabic-studio-page-lesson"
          id="arabic-studio-page-lesson"
          aria-labelledby="arabic-studio-page-lesson-title"
        >
          <div className="arabic-studio-lesson-heading">
            <span className="arabic-card-kicker">{"Your lesson"}</span>
            <h3 id="arabic-studio-page-lesson-title">{"Start here"}</h3>
          </div>
        </section>
        <aside className="arabic-studio-page-note">
          <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
          <div>
            <strong>{"Study one idea, then test it."}</strong>
            <span>
              {
                "Say it, read it, write it, and recall it before moving on. Small consistent sessions are more reliable than long, unfocused study."
              }
            </span>
          </div>
        </aside>
      </section>
    </div>
  );
}
