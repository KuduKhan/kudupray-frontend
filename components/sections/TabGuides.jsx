"use client";

import { dispatch } from "../runtime-events";

export default function TabGuides() {
  return (
    <div id="tab-guides" className="page">
      <div className="desktop-page-heading">
        <div className="desktop-heading-icon">
          <i className="fa-solid fa-compass" aria-hidden="true"></i>
        </div>
        <div>
          <h2>{"Worship library"}</h2>
          <p>
            {
              "Practical, easy-to-follow guidance for daily and special acts of worship."
            }
          </p>
        </div>
      </div>

      <div id="guides-menu" className="guides-grid">
        <div className="guide-tile" onClick={(event) => dispatch(35, event)}>
          <div className="tile-icon icon-blue">
            <i className="fa-solid fa-droplet"></i>
          </div>
          <div className="tile-title">
            {"Purification"}
            <br />
            <span
              style={{ fontSize: "0.8rem", fontWeight: "400", opacity: "0.8" }}
            >
              {"Taharah"}
            </span>
          </div>
        </div>
        <div className="guide-tile" onClick={(event) => dispatch(36, event)}>
          <div className="tile-icon icon-indigo">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <div className="tile-title">
            {"Structure"}
            <br />
            <span
              style={{ fontSize: "0.8rem", fontWeight: "400", opacity: "0.8" }}
            >
              {"Of Salah"}
            </span>
          </div>
        </div>
        <div className="guide-tile" onClick={(event) => dispatch(37, event)}>
          <div className="tile-icon icon-emerald">
            <i className="fa-solid fa-person-praying"></i>
          </div>
          <div className="tile-title">
            {"Daily Guide"}
            <br />
            <span
              style={{ fontSize: "0.8rem", fontWeight: "400", opacity: "0.8" }}
            >
              {"Steps & Etiquettes"}
            </span>
          </div>
        </div>
        <div className="guide-tile" onClick={(event) => dispatch(38, event)}>
          <div className="tile-icon icon-amber">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="tile-title">
            {"Special"}
            <br />
            <span
              style={{ fontSize: "0.8rem", fontWeight: "400", opacity: "0.8" }}
            >
              {"Prayers"}
            </span>
          </div>
        </div>

        <div className="guide-tile" onClick={(event) => dispatch(39, event)}>
          <div
            className="tile-icon"
            style={{
              background: "linear-gradient(135deg, #f3e8ff, #ffffff)",
              color: "#7e22ce",
            }}
          >
            <i className="fa-solid fa-fingerprint"></i>
          </div>
          <div className="tile-title">
            {"Adhkar"}
            <br />
            <span
              style={{ fontSize: "0.8rem", fontWeight: "400", opacity: "0.8" }}
            >
              {"Daily Remembrance"}
            </span>
          </div>
        </div>
        <div className="guide-tile" onClick={(event) => dispatch(40, event)}>
          <div className="tile-icon icon-rose">
            <i className="fa-solid fa-book-open"></i>
          </div>
          <div className="tile-title">
            {"Recitations"}
            <br />
            <span
              style={{ fontSize: "0.8rem", fontWeight: "400", opacity: "0.8" }}
            >
              {"Surahs & Dhikr"}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="guide-tile newborn-guide-tile"
          onClick={(event) => dispatch(41, event)}
          aria-label="Open Islamic newborn care guide, birth to 40 days"
        >
          <div className="tile-icon">
            <i className="fa-solid fa-baby" aria-hidden="true"></i>
          </div>
          <div className="tile-title">
            {"Newborn Care"}
            <br />
            <span
              style={{ fontSize: "0.8rem", fontWeight: "400", opacity: "0.8" }}
            >
              {"Birth to 40 days"}
            </span>
          </div>
        </button>
      </div>
      <section
        className="knowledge-hub"
        aria-labelledby="knowledge-hub-title"
        hidden={true}
        aria-hidden="true"
      >
        <div className="knowledge-hero">
          <div className="knowledge-hero-media"></div>
          <div className="knowledge-hero-copy">
            <span className="knowledge-kicker">
              <i className="fa-solid fa-book-quran" aria-hidden="true"></i>
              {" Sourced learning"}
            </span>
            <h3 id="knowledge-hub-title">
              {"Build worship on knowledge, sincerity, and steady practice."}
            </h3>
            <p>
              {
                "Explore short foundations drawn from the Qur’an and authenticated hadith. Each topic explains the principle, gives a practical next step, and links to its source for further study."
              }
            </p>
          </div>
        </div>
        <div className="knowledge-intro">
          <div>
            <h3>{"Knowledge essentials"}</h3>
            <p>
              {
                "These foundations complement the practical guides without repeating their step-by-step instructions."
              }
            </p>
          </div>
          <span className="knowledge-verified">
            <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
            {" References included"}
          </span>
        </div>
        <div className="knowledge-topic-grid">
          <details className="info-disclosure knowledge-topic">
            <summary>
              <i className="fa-solid fa-bullseye" aria-hidden="true"></i>
              <span className="knowledge-topic-copy">
                <strong>{"Intention and sincerity"}</strong>
                <small>{"Know why you worship before beginning."}</small>
              </span>
            </summary>
            <div className="disclosure-body">
              <div className="knowledge-card">
                <h4>{"Begin with a clear intention"}</h4>
                <ul className="knowledge-list">
                  <li>
                    {
                      "Intention is the purpose held in the heart; it gives an act of worship its direction and meaning."
                    }
                  </li>
                  <li>
                    {
                      "Before prayer, fasting, charity, or study, pause briefly and remember that the act is for Allah."
                    }
                  </li>
                  <li>
                    {
                      "Avoid turning worship into performance for people. If distraction appears, quietly renew your purpose and continue."
                    }
                  </li>
                </ul>
                <div className="reference-line">
                  {
                    "Sahih al-Bukhari 1 establishes the central principle that deeds are evaluated according to intentions."
                  }
                </div>
                <div className="source-links">
                  <a
                    className="source-link"
                    href="https://sunnah.com/bukhari:1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    {"Sahih al-Bukhari 1"}
                  </a>
                </div>
              </div>
            </div>
          </details>
          <details className="info-disclosure knowledge-topic">
            <summary>
              <i className="fa-solid fa-droplet" aria-hidden="true"></i>
              <span className="knowledge-topic-copy">
                <strong>{"Purification with ease"}</strong>
                <small>
                  {"Prepare carefully without unnecessary hardship."}
                </small>
              </span>
            </summary>
            <div className="disclosure-body">
              <div className="knowledge-card">
                <h4>{"Purity prepares a person for prayer"}</h4>
                <ul className="knowledge-list">
                  <li>
                    {
                      "Use clean water and make sure the required areas are reached without waste or harmful excess."
                    }
                  </li>
                  <li>
                    {
                      "Islamic law recognizes alternatives such as tayammum when valid conditions are met and water cannot be used."
                    }
                  </li>
                  <li>
                    {
                      "Persistent doubts should not overturn established certainty; seek guidance when a recurring condition causes hardship."
                    }
                  </li>
                </ul>
                <div className="reference-line">
                  {
                    "Qur’an 5:6 describes wudu, ghusl, tayammum, and Allah’s intention of purification rather than burden."
                  }
                </div>
                <div className="source-links">
                  <a
                    className="source-link"
                    href="https://quran.com/al-maidah/6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    {"Qur’an 5:6"}
                  </a>
                </div>
              </div>
            </div>
          </details>
          <details className="info-disclosure knowledge-topic">
            <summary>
              <i className="fa-solid fa-clock" aria-hidden="true"></i>
              <span className="knowledge-topic-copy">
                <strong>{"Prayer at appointed times"}</strong>
                <small>{"Plan the day around the five prayers."}</small>
              </span>
            </summary>
            <div className="disclosure-body">
              <div className="knowledge-card">
                <h4>{"Protect the prayer window"}</h4>
                <ul className="knowledge-list">
                  <li>
                    {
                      "Use the timetable as an early reminder, then confirm congregational and Jumu’ah times with the local mosque."
                    }
                  </li>
                  <li>
                    {
                      "Prepare before the time becomes tight: make wudu, choose a clean place, and remove avoidable distractions."
                    }
                  </li>
                  <li>
                    {
                      "Calculation methods, high latitudes, travel, illness, and local policy can affect practical timing."
                    }
                  </li>
                </ul>
                <div className="reference-line">
                  {
                    "Qur’an 4:103 describes prayer as an obligation at appointed times."
                  }
                </div>
                <div className="source-links">
                  <a
                    className="source-link"
                    href="https://quran.com/an-nisa/103"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    {"Qur’an 4:103"}
                  </a>
                </div>
              </div>
            </div>
          </details>
          <details className="info-disclosure knowledge-topic">
            <summary>
              <i className="fa-solid fa-seedling" aria-hidden="true"></i>
              <span className="knowledge-topic-copy">
                <strong>{"Consistency over overload"}</strong>
                <small>{"Build small practices that can last."}</small>
              </span>
            </summary>
            <div className="disclosure-body">
              <div className="knowledge-card">
                <h4>{"Choose a sustainable rhythm"}</h4>
                <ul className="knowledge-list">
                  <li>
                    {
                      "Establish the obligatory acts first, then add voluntary worship gradually."
                    }
                  </li>
                  <li>
                    {
                      "A short daily portion of Qur’an, dhikr, or charity is often easier to maintain than an intense routine that quickly stops."
                    }
                  </li>
                  <li>
                    {
                      "When life becomes difficult, preserve the essentials and restart gently rather than abandoning the routine."
                    }
                  </li>
                </ul>
                <div className="reference-line">
                  {
                    "Sahih al-Bukhari 6464 emphasizes sincere moderation and regular deeds, even when they are small."
                  }
                </div>
                <div className="source-links">
                  <a
                    className="source-link"
                    href="https://sunnah.com/bukhari:6464"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    {"Sahih al-Bukhari 6464"}
                  </a>
                </div>
              </div>
            </div>
          </details>
          <details className="info-disclosure knowledge-topic">
            <summary>
              <i className="fa-solid fa-heart" aria-hidden="true"></i>
              <span className="knowledge-topic-copy">
                <strong>{"Remembrance with presence"}</strong>
                <small>{"Connect words, meaning, and attention."}</small>
              </span>
            </summary>
            <div className="disclosure-body">
              <div className="knowledge-card">
                <h4>{"Let remembrance shape the heart"}</h4>
                <ul className="knowledge-list">
                  <li>
                    {
                      "Learn authentic adhkar in small groups and understand their meanings instead of rushing through long lists."
                    }
                  </li>
                  <li>
                    {
                      "Use recurring moments—after prayer, morning, evening, sleep, and waking—as natural anchors."
                    }
                  </li>
                  <li>
                    {
                      "Dhikr supports spiritual wellbeing but does not replace professional medical or mental-health care when it is needed."
                    }
                  </li>
                </ul>
                <div className="reference-line">
                  {
                    "Qur’an 13:28 connects remembrance of Allah with reassurance of the heart."
                  }
                </div>
                <div className="source-links">
                  <a
                    className="source-link"
                    href="https://quran.com/ar-rad/28"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    {"Qur’an 13:28"}
                  </a>
                </div>
              </div>
            </div>
          </details>
          <details className="info-disclosure knowledge-topic">
            <summary>
              <i className="fa-solid fa-people-group" aria-hidden="true"></i>
              <span className="knowledge-topic-copy">
                <strong>{"When rulings differ"}</strong>
                <small>{"Learn respectfully and ask qualified people."}</small>
              </span>
            </summary>
            <div className="disclosure-body">
              <div className="knowledge-card">
                <h4>{"Recognize valid scholarly differences"}</h4>
                <ul className="knowledge-list">
                  <li>
                    {
                      "Some details of purification, prayer posture, recitation, travel, and timing differ among recognized schools of law."
                    }
                  </li>
                  <li>
                    {
                      "Do not treat every unfamiliar practice as an error. Learn the evidence and context before judging others."
                    }
                  </li>
                  <li>
                    {
                      "For personal rulings, unusual circumstances, family matters, illness, or financial questions, consult a qualified and trustworthy local scholar."
                    }
                  </li>
                </ul>
                <div className="reference-line">
                  {
                    "Qur’an 16:43 directs people who do not know to ask those who possess knowledge."
                  }
                </div>
                <div className="source-links">
                  <a
                    className="source-link"
                    href="https://quran.com/an-nahl/43"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    {"Qur’an 16:43"}
                  </a>
                </div>
              </div>
            </div>
          </details>
        </div>
        <div className="knowledge-trust-note">
          <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
          <div>
            <strong>{"How to use KuduPray reliably"}</strong>
            <p>
              {
                "KuduPray is an educational and organizational aid, not a substitute for a local mosque timetable, a qualified scholar’s ruling, emergency services, or professional medical advice. Sources are linked, recognized differences are noted, and corrections should be welcomed when stronger evidence is provided."
              }
            </p>
          </div>
        </div>
      </section>

      <div
        id="view-purification"
        className="guide-modal"
        data-guide-page=""
        aria-hidden="true"
      >
        <div className="modal-card">
          <div className="modal-handle-bar"></div>
          <div className="modal-header-row">
            <h3 className="modal-title">
              <i
                className="fa-solid fa-droplet"
                style={{ color: "#2563eb" }}
              ></i>
              <span data-i18n="gPurification">{"Purification"}</span>
            </h3>
            <button
              type="button"
              className="modal-close-btn guide-back-btn"
              onClick={(event) => dispatch(42, event)}
              aria-label="Back to guides"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span>{"Guides"}</span>
            </button>
          </div>
          <div className="modal-body">
            <details className="info-disclosure">
              <summary>
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                {"About purification"}
              </summary>
              <div className="disclosure-body">
                <div className="guide-intro">
                  <strong>{"Start here:"}</strong>
                  {
                    " Purification prepares the body, clothing, and place for worship. Open a topic for practical steps, common invalidators, and alternatives when water cannot be used. Details can vary by school of law."
                  }
                </div>
              </div>
            </details>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(43, event)}
              >
                <span>{"Types of Water (Tahur)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Pure Water (Tahur):"}</strong>
                    {
                      " Water that is natural and has not been altered by impurities. Only this can be used for Wudu/Ghusl."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>{"Rain water, sea water, river water."}</li>
                    <li>{"Well water, spring water, melted snow/hail."}</li>
                  </ul>
                  <p>
                    <strong>{"Impure Water (Najis):"}</strong>
                    {
                      " Water whose color, taste, or smell has changed due to filth (urine, blood, etc.). Cannot be used for purification."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(44, event)}
              >
                <span>{"Wudu (Ablution)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-step">
                    <strong>{"1. Niyyah (Intention):"}</strong>
                    {" Say "}
                    <em>{'"Bismillah"'}</em>
                    {"."}
                  </div>
                  <div className="guide-step">
                    <strong>{"2. Hands:"}</strong>
                    {" Wash hands to wrists (3x), interlacing fingers."}
                  </div>
                  <div className="guide-step">
                    <strong>{"3. Mouth & Nose:"}</strong>
                    {
                      " Rinse mouth (3x). Sniff water into nose & blow out (3x)."
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"4. Face:"}</strong>
                    {" Wash face from hairline to chin & ear to ear (3x)."}
                  </div>
                  <div className="guide-step">
                    <strong>{"5. Arms:"}</strong>
                    {" Wash arms including elbows (3x). Right then Left."}
                  </div>
                  <div className="guide-step">
                    <strong>{"6. Head:"}</strong>
                    {
                      " Wipe head once (front to back to front). Clean ears with index fingers and thumbs."
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"7. Feet:"}</strong>
                    {
                      " Wash feet including ankles (3x). Right then Left. Ensure heels are wet."
                    }
                  </div>
                  <div
                    className="guide-callout guide-callout-emerald"
                    style={{
                      marginTop: "15px",
                      padding: "10px",
                      background: "#f0fdf4",
                      borderRadius: "8px",
                    }}
                  >
                    <strong>{"Dua after Wudu:"}</strong>
                    <em>
                      {
                        '"Ash-hadu an la ilaha illallah wahdahu la sharika lah, wa ash-hadu anna Muhammadan \'abduhu wa rasuluh."'
                      }
                    </em>
                  </div>
                  <div className="guide-h4">{"Nullifiers (Breaks Wudu)"}</div>
                  <ul style={{ paddingLeft: "20px", marginBottom: "0" }}>
                    <li>{"Passing urine, stool, or wind."}</li>
                    <li>{"Deep sleep (loss of consciousness)."}</li>
                    <li>
                      {"Touching private parts with bare skin (sexual organ)."}
                    </li>
                    <li>{"Eating camel meat (Hanbali opinion)."}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(45, event)}
              >
                <span>{"Sunnahs of Wudu"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"Siwak:"}</strong>
                      {" Using a tooth-stick before rinsing mouth."}
                    </li>
                    <li>
                      <strong>{"Washing 3 times:"}</strong>
                      {" Washing limbs thrice is Sunnah (once is Fard)."}
                    </li>
                    <li>
                      <strong>{"Beard:"}</strong>
                      {" Running wet fingers through a thick beard (Khilal)."}
                    </li>
                    <li>
                      <strong>{"Toes:"}</strong>
                      {" Washing between toes using the pinky finger."}
                    </li>
                    <li>
                      <strong>{"Right side first:"}</strong>
                      {" Always starting with the right limb."}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(46, event)}
              >
                <span>{"Wiping Over Socks (Khuff)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Instead of washing feet, you may wipe over socks if conditions are met."
                    }
                  </p>
                  <div className="guide-h4">{"Conditions"}</div>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>{"Put them on while in a state of Wudu."}</li>
                    <li>{"They must cover the ankles completely."}</li>
                    <li>
                      {
                        "They must be thick enough not to show skin (traditional view)."
                      }
                    </li>
                  </ul>
                  <div className="guide-h4">{"Duration & Method"}</div>
                  <p>
                    <strong>{"Resident:"}</strong>
                    {" 1 Day & Night (24 hours)."}
                    <br />
                    <strong>{"Traveler:"}</strong>
                    {" 3 Days & Nights (72 hours)."}
                  </p>
                  <p>
                    <strong>{"Method:"}</strong>
                    {" Wipe the "}
                    <em>{"top"}</em>
                    {
                      " of the foot with wet hands, from toes towards the shin. Do not wipe the bottom."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(47, event)}
              >
                <span>{"Ghusl (Ritual Bath)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Required for:"}</strong>
                    {
                      " Post-marital relations (Janaabah), wet dreams, cessation of menstruation (Hayd) or post-natal bleeding (Nifas), entering Islam."
                    }
                  </p>
                  <div className="guide-h4">{"Obligatory Acts (Fard)"}</div>
                  <ul style={{ paddingLeft: "20px", marginBottom: "10px" }}>
                    <li>{"Rinsing the mouth thoroughly."}</li>
                    <li>{"Rinsing the nose thoroughly."}</li>
                    <li>
                      {
                        "Water reaching every part of the body (including scalp and roots of hair)."
                      }
                    </li>
                  </ul>
                  <div className="guide-h4">{"Sunnah Method"}</div>
                  <p>
                    {"1. Intention & Bismillah."}
                    <br />
                    {"2. Wash hands."}
                    <br />
                    {"3. Wash private parts."}
                    <br />
                    {"4. Perform complete Wudu."}
                    <br />
                    {"5. Pour water over head (3x) rubbing hair roots."}
                    <br />
                    {"6. Wash right side of body."}
                    <br />
                    {"7. Wash left side of body."}
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(48, event)}
              >
                <span>{"Tayammum (Dry Ablution)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Use when:"}</strong>
                    {
                      " Water is unavailable, unreachable, or harmful to use (due to severe illness or extreme cold) within the prayer time."
                    }
                  </p>
                  <div className="guide-step">
                    <strong>{"1. Intention:"}</strong>
                    {" Niyyah to purify for Salah."}
                  </div>
                  <div className="guide-step">
                    <strong>{"2. Strike:"}</strong>
                    {" Strike clean earth/dust gently with palms once."}
                  </div>
                  <div className="guide-step">
                    <strong>{"3. Face:"}</strong>
                    {" Blow off excess dust and wipe the face once."}
                  </div>
                  <div className="guide-step">
                    <strong>{"4. Hands:"}</strong>
                    {
                      " Wipe the back of the right hand with the left palm, and vice versa (up to wrists)."
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(49, event)}
              >
                <span>{"Menstruation (Hayd) Rules"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Prohibited Acts:"}</strong>
                    {
                      " Salah (Prayer), Fasting (Sawm), Tawaf, Intercourse, Touching the Mushaf (Quran)."
                    }
                  </p>
                  <p>
                    <strong>{"Missed Worship:"}</strong>
                    <br />
                    {"• Salah: Do "}
                    <strong>{"not"}</strong>
                    {" make up missed prayers.\n                        "}
                    <br />
                    {"• Fasting: "}
                    <strong>{"Must"}</strong>
                    {" make up missed Ramadan fasts later."}
                  </p>
                  <p>
                    <strong>{"End of Cycle:"}</strong>
                    {
                      " When bleeding stops (white discharge appears or complete dryness), Ghusl becomes obligatory before praying."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(50, event)}
              >
                <span>{"Purity, Cleanliness & Common Doubts"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Ritual purity"}</strong>
                    {
                      " (wudu or ghusl) and removal of physical impurity are related but different. A person may have wudu while needing to clean impurity from clothing, or may be physically clean while needing wudu."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "Certainty is not removed by a passing doubt. Do not repeat wudu merely because you are unsure whether it broke."
                      }
                    </li>
                    <li>
                      {
                        "Wash visible impurity until its substance is removed; unavoidable traces may have detailed rulings."
                      }
                    </li>
                    <li>
                      {
                        "Excessive checking can feed waswasah. Use reasonable certainty and continue worship."
                      }
                    </li>
                    <li>
                      {
                        "Continuous medical conditions have concession rules that differ in detail; ask a qualified local scholar."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(51, event)}
              >
                <span>{"Wiping, Bandages & Medical Needs"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Islamic law includes concessions when ordinary washing causes harm or is not reasonably possible."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"Footwear:"}</strong>
                      {
                        " Wiping over qualifying socks or leather footwear has conditions, including putting them on after purification. Duration and material details vary by school."
                      }
                    </li>
                    <li>
                      <strong>{"Bandages or casts:"}</strong>
                      {
                        " Wash what can safely be washed. Wiping over a necessary dressing, or using tayammum when required, should follow medical advice and reliable fiqh guidance."
                      }
                    </li>
                    <li>
                      <strong>{"Water conservation:"}</strong>
                      {
                        " Use enough water to wash properly without waste; large quantities are not required."
                      }
                    </li>
                    <li>
                      <strong>{"Safety:"}</strong>
                      {
                        " Do not remove a medically necessary dressing or delay urgent treatment to perform ordinary washing."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(52, event)}
              >
                <span>{"Purification Quick Checklist"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-step">
                    <strong>{"1. Identify:"}</strong>
                    {
                      " Do you need ordinary wudu, full ghusl, or a valid alternative?"
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"2. Remove:"}</strong>
                    {
                      " Clean any known physical impurity from body, clothes, and prayer place."
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"3. Complete:"}</strong>
                    {
                      " Ensure water reaches each required area without harmful excess."
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"4. Continue:"}</strong>
                    {" Ignore unsupported doubts after finishing."}
                  </div>
                  <div className="reference-line">
                    {
                      "Foundation: Qur’an 5:6 describes wudu, ghusl, tayammum, and Allah’s intention of purification rather than hardship."
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="view-structure"
        className="guide-modal"
        data-guide-page=""
        aria-hidden="true"
      >
        <div className="modal-card">
          <div className="modal-handle-bar"></div>
          <div className="modal-header-row">
            <h3 className="modal-title">
              <i
                className="fa-solid fa-layer-group"
                style={{ color: "#4f46e5" }}
              ></i>
              <span data-i18n="gStructure">{"Structure"}</span>
            </h3>
            <button
              type="button"
              className="modal-close-btn guide-back-btn"
              onClick={(event) => dispatch(53, event)}
              aria-label="Back to guides"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span>{"Guides"}</span>
            </button>
          </div>
          <div className="modal-body">
            <details className="info-disclosure">
              <summary>
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                {"Prayer structure overview"}
              </summary>
              <div className="disclosure-body">
                <div className="guide-intro">
                  <strong>{"Prayer at a glance:"}</strong>
                  {
                    " Check the conditions before starting, keep the intention in your heart, follow each posture calmly, and preserve the required order. Use this as a learning aid alongside instruction from a trusted teacher."
                  }
                </div>
              </div>
            </details>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(54, event)}
              >
                <span>
                  <i className="fa-solid fa-list-check"></i>
                  {" Prerequisites (Shuroot)"}
                </span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {"Conditions that must be met "}
                    <strong>{"before"}</strong>
                    {" starting the prayer. If missing, the prayer is invalid."}
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"Islam:"}</strong>
                      {" Being Muslim."}
                    </li>
                    <li>
                      <strong>{"Sanity:"}</strong>
                      {" Being of sound mind."}
                    </li>
                    <li>
                      <strong>{"Age:"}</strong>
                      {" Age of discernment (approx 7+)."}
                    </li>
                    <li>
                      <strong>{"Taharah:"}</strong>
                      {
                        " Purity from minor (Wudu) and major (Ghusl) impurities."
                      }
                    </li>
                    <li>
                      <strong>{"Cleanliness:"}</strong>
                      {
                        " Body, clothes, and place must be free of filth (Najasah)."
                      }
                    </li>
                    <li>
                      <strong>{"Awrah:"}</strong>
                      {
                        " Covering the nakedness (Men: Navel to knee; Women: All except face and hands)."
                      }
                    </li>
                    <li>
                      <strong>{"Time:"}</strong>
                      {" The prayer time must have entered."}
                    </li>
                    <li>
                      <strong>{"Qibla:"}</strong>
                      {" Facing the Kaaba."}
                    </li>
                    <li>
                      <strong>{"Intention (Niyyah):"}</strong>
                      {" To pray the specific prayer for the sake of Allah."}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(55, event)}
              >
                <span>
                  <i className="fa-solid fa-scale-balanced"></i>
                  {" Pillars vs. Wajibat"}
                </span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Arkan (Pillars):"}</strong>
                    {
                      " Essential parts. If missed intentionally or unintentionally, the Raka'at is invalid and must be redone."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px", color: "var(--primary)" }}>
                    <li>{"Standing (if able)."}</li>
                    <li>{"Takbiratul Ihram (Opening Takbir)."}</li>
                    <li>{"Reciting Al-Fatiha."}</li>
                    <li>{"Ruku (Bowing) & Rising from it."}</li>
                    <li>{"Sujood (on 7 bones) & Sitting between them."}</li>
                    <li>{"Final Tashahhud & Tasleem."}</li>
                    <li>{"Calmness (Tuma'ninah) in all positions."}</li>
                  </ul>
                  <hr
                    style={{
                      border: "0",
                      borderTop: "1px dashed #ccc",
                      margin: "15px 0",
                    }}
                  />
                  <p>
                    <strong>{"Wajibat (Obligatory Acts):"}</strong>
                    {
                      " If missed unintentionally, fix with Sujood Sahw. If missed intentionally, prayer is invalid."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>{"All Takbirs other than the first one."}</li>
                    <li>
                      {'Saying "Sami Allahu..." and "Rabbana walakal hamd".'}
                    </li>
                    <li>{'Saying "Subhana Rabbiyal..." in Ruku/Sujood.'}</li>
                    <li>{"First Tashahhud & Sitting for it."}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(56, event)}
              >
                <span>
                  <i className="fa-solid fa-sun"></i>
                  {" Sunnah Acts of Prayer"}
                </span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Acts that increase reward but do not invalidate prayer if missed."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {"Raising hands for Takbir (shoulders/ears level)."}
                    </li>
                    <li>{"Placing right hand over left on chest."}</li>
                    <li>{"Looking at the place of Sujood."}</li>
                    <li>{"Reciting Opening Dua (Istiftah)."}</li>
                    <li>{'Saying "Ameen" aloud (in loud prayers).'}</li>
                    <li>{"Pointing index finger during Tashahhud."}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(57, event)}
              >
                <span>
                  <i className="fa-solid fa-table-list"></i>
                  {" Raka'ats Table"}
                </span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="table-wrapper">
                    <table
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr style={{ borderBottom: "1px solid #eee" }}>
                          <th
                            style={{
                              textAlign: "left",
                              padding: "8px",
                              color: "var(--primary)",
                            }}
                          >
                            {"Prayer"}
                          </th>
                          <th style={{ textAlign: "center" }}>{"Sunnah"}</th>
                          <th style={{ textAlign: "center" }}>{"Fard"}</th>
                          <th style={{ textAlign: "center" }}>{"Sunnah"}</th>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #f9f9f9" }}>
                          <td style={{ padding: "8px" }}>{"Fajr"}</td>
                          <td style={{ textAlign: "center" }}>{"2"}</td>
                          <td
                            style={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            {"2"}
                          </td>
                          <td style={{ textAlign: "center" }}>{"-"}</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #f9f9f9" }}>
                          <td style={{ padding: "8px" }}>{"Dhuhr"}</td>
                          <td style={{ textAlign: "center" }}>{"2+2"}</td>
                          <td
                            style={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            {"4"}
                          </td>
                          <td style={{ textAlign: "center" }}>{"2"}</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #f9f9f9" }}>
                          <td style={{ padding: "8px" }}>{"Asr"}</td>
                          <td style={{ textAlign: "center" }}>{"4"}</td>
                          <td
                            style={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            {"4"}
                          </td>
                          <td style={{ textAlign: "center" }}>{"-"}</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #f9f9f9" }}>
                          <td style={{ padding: "8px" }}>{"Maghrib"}</td>
                          <td style={{ textAlign: "center" }}>{"-"}</td>
                          <td
                            style={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            {"3"}
                          </td>
                          <td style={{ textAlign: "center" }}>{"2"}</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "8px" }}>{"Isha"}</td>
                          <td style={{ textAlign: "center" }}>{"-"}</td>
                          <td
                            style={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            {"4"}
                          </td>
                          <td style={{ textAlign: "center" }}>{"2 + Witr"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        marginTop: "10px",
                        color: "var(--text-sub)",
                      }}
                    >
                      {
                        "\n                                *Sunnah Before: Prayed before Fard."
                      }
                      <br />
                      {
                        "\n                                *Sunnah After: Prayed after Fard.\n                            "
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(58, event)}
              >
                <span>
                  <i className="fa-solid fa-users"></i>
                  {" Congregation & Rows"}
                </span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "Follow the imam: move after the imam begins the movement and do not deliberately race ahead."
                      }
                    </li>
                    <li>
                      {
                        "Stand in orderly rows without causing harm or arguments over minor spacing details."
                      }
                    </li>
                    <li>
                      {
                        "If joining late, enter the prayer calmly and complete missed raka’ats after the imam’s final salam."
                      }
                    </li>
                    <li>
                      {
                        "The person praying behind an imam follows the congregation’s prayer, including the imam’s correction of mistakes."
                      }
                    </li>
                    <li>
                      {
                        "Rules for where individuals stand differ with group composition; follow established local practice."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(59, event)}
              >
                <span>
                  <i className="fa-solid fa-volume-high"></i>
                  {" Audible & Quiet Recitation"}
                </span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Normally audible for the imam:"}</strong>
                    {
                      " Fajr, the first two raka’ats of Maghrib, and the first two raka’ats of Isha."
                    }
                  </p>
                  <p>
                    <strong>{"Normally quiet:"}</strong>
                    {
                      " Dhuhr, Asr, the final raka’ah of Maghrib, and the final two raka’ats of Isha."
                    }
                  </p>
                  <p>
                    {
                      "A person praying alone may recite at a level appropriate to the prayer without disturbing others. Details about a follower’s recitation behind the imam differ among schools."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(60, event)}
              >
                <span>
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {" Mistake Decision Guide"}
                </span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"Missed essential pillar:"}</strong>
                      {
                        " Return to it when possible and complete the prayer correctly; details depend on when it is remembered."
                      }
                    </li>
                    <li>
                      <strong>{"Missed non-pillar act:"}</strong>
                      {
                        " The prayer may remain valid, sometimes with sujood as-sahw."
                      }
                    </li>
                    <li>
                      <strong>{"Unsure of count:"}</strong>
                      {
                        " Apply the method taught by your school—often building on certainty or the stronger estimate—then perform the prescribed prostrations."
                      }
                    </li>
                    <li>
                      <strong>{"Imam makes an error:"}</strong>
                      {
                        " Men generally alert with “SubhanAllah”; women use the method taught in their school."
                      }
                    </li>
                  </ul>
                  <p>
                    {
                      "Because sujood as-sahw timing and mistake categories vary, learn one consistent method from a trusted teacher."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="view-daily"
        className="guide-modal"
        data-guide-page=""
        aria-hidden="true"
      >
        <div className="modal-card">
          <div className="modal-handle-bar"></div>
          <div className="modal-header-row">
            <h3 className="modal-title">
              <i
                className="fa-solid fa-person-praying"
                style={{ color: "#059669" }}
              ></i>
              <span data-i18n="gDaily">{"Daily Guide"}</span>
            </h3>
            <button
              type="button"
              className="modal-close-btn guide-back-btn"
              onClick={(event) => dispatch(61, event)}
              aria-label="Back to guides"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span>{"Guides"}</span>
            </button>
          </div>
          <div className="modal-body">
            <details className="info-disclosure">
              <summary>
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                {"Building a daily routine"}
              </summary>
              <div className="disclosure-body">
                <div className="guide-intro">
                  <strong>{"Build a steady rhythm:"}</strong>
                  {
                    " Prioritize the five obligatory prayers within their times, prepare a few minutes early, and add Sunnah prayers gradually. Consistency is more sustainable than trying to change everything at once."
                  }
                </div>
              </div>
            </details>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(62, event)}
              >
                <span>{"Prayer Time Definitions"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px", fontSize: "0.9rem" }}>
                    <li>
                      <strong>{"Fajr:"}</strong>
                      {
                        " From true dawn (horizontal white light on horizon) until sunrise."
                      }
                    </li>
                    <li>
                      <strong>{"Dhuhr:"}</strong>
                      {
                        " From when the sun passes its zenith until Asr begins. The Asr boundary is calculated differently in recognized schools."
                      }
                    </li>
                    <li>
                      <strong>{"Asr:"}</strong>
                      {
                        " Begins according to the applicable shadow-length method and continues until sunset; delaying until the sun is very low without reason is discouraged."
                      }
                    </li>
                    <li>
                      <strong>{"Maghrib:"}</strong>
                      {" From sunset until the red twilight disappears."}
                    </li>
                    <li>
                      <strong>{"Isha:"}</strong>
                      {
                        " Begins when twilight disappears. Scholars discuss its preferred and final limits differently; many timetables use Islamic midnight as an important boundary while necessity rulings can extend later."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(63, event)}
              >
                <span>{"Jama'ah (Congregation)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Reward:"}</strong>
                    {" 27 times more than praying alone."}
                  </p>
                  <p>
                    <strong>{"Rows:"}</strong>
                    {
                      " Must be straight and gaps filled (shoulder to shoulder, foot to foot)."
                    }
                  </p>
                  <p>
                    <strong>{"Following Imam:"}</strong>
                    {
                      " Do not move before the Imam. Move only after he has moved and said the Takbir."
                    }
                  </p>
                  <p>
                    <strong>{"Recitation:"}</strong>
                    {
                      " Listen silently when Imam recites aloud (Fajr, Maghrib, Isha). Recite Fatiha silently in quiet prayers (Dhuhr, Asr)."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(64, event)}
              >
                <span>{"Traveler's Prayer (Qasr)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Rule:"}</strong>
                    {" If traveling approximately "}
                    <strong>{"80km (48 miles)"}</strong>
                    {
                      " or more, it is permitted (and preferred) to shorten the 4-Raka'at prayers to 2 Raka'ats."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px", fontSize: "0.9rem" }}>
                    <li>
                      <strong>{"Dhuhr:"}</strong>
                      {" 2 Raka'ats"}
                    </li>
                    <li>
                      <strong>{"Asr:"}</strong>
                      {" 2 Raka'ats"}
                    </li>
                    <li>
                      <strong>{"Isha:"}</strong>
                      {" 2 Raka'ats"}
                    </li>
                    <li>
                      <strong>{"Fajr & Maghrib:"}</strong>
                      {" Remain the same (2 & 3)."}
                    </li>
                  </ul>
                  <p>
                    <strong>{"Combining (Jam'):"}</strong>
                    {
                      " You may also combine Dhuhr with Asr (at either time) and Maghrib with Isha (at either time)."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(65, event)}
              >
                <span>{"Forbidden Prayer Times"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Do not perform voluntary (Nafl) prayers during these three times:"
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"Sunrise:"}</strong>
                      {
                        " From after Fajr until sunrise is fully complete (approx 15 mins after)."
                      }
                    </li>
                    <li>
                      <strong>{"Zenith (Zawal):"}</strong>
                      {
                        " When the sun is at its absolute zenith (center of sky)."
                      }
                    </li>
                    <li>
                      <strong>{"Sunset:"}</strong>
                      {" From after Asr until Maghrib."}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(66, event)}
              >
                <span>{"Missed Prayers (Qada)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>{"If you miss a prayer due to sleep or forgetfulness:"}</p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"When:"}</strong>
                      {
                        " Pray it as soon as you remember/wake up. Do not delay it further."
                      }
                    </li>
                    <li>
                      <strong>{"Order:"}</strong>
                      {
                        " Try to maintain the correct order (e.g., if you missed Dhuhr and remember at Asr time, pray Dhuhr first, then Asr)."
                      }
                    </li>
                    <li>
                      <strong>{"No Sin:"}</strong>
                      {
                        " There is no sin for unintentional missing due to sleep/forgetting, provided it is made up immediately."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(67, event)}
              >
                <span>{"The Latecomer (Masbuq)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-h4">{"Golden Rule"}</div>
                  <p>
                    {"If you catch the Imam in "}
                    <strong>{"Ruku"}</strong>
                    {
                      " (bowing), you have caught that Raka'at. If he has risen, you missed it."
                    }
                  </p>
                  <div className="guide-h4">{"How to Complete"}</div>
                  <p>
                    {"When Imam says Salam: "}
                    <strong>{"Do not say Salam"}</strong>
                    {
                      ". Stand up immediately. Pray the missing Raka'ats. Finish with Tashahhud/Salam."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(68, event)}
              >
                <span>{"Nullifiers (Breaks Salah)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul
                    style={{
                      paddingLeft: "20px",
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                    }}
                  >
                    <li>{"Loss of Wudu."}</li>
                    <li>{"Eating or Drinking intentionally."}</li>
                    <li>{"Speaking intentionally (non-prayer words)."}</li>
                    <li>
                      {
                        "Excessive, continuous movement that makes the action no longer resemble prayer; exact definitions differ."
                      }
                    </li>
                    <li>{"Laughing aloud."}</li>
                    <li>{"Intentionally uncovering the Awrah."}</li>
                    <li>{"Turning the chest away from the Qibla."}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(69, event)}
              >
                <span>{"Sujood Sahw (Forgetfulness)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Performed for unintentional errors (e.g., forgetting a Wajib act like the first Tashahhud)."
                    }
                  </p>
                  <p>
                    <strong>{"Method:"}</strong>
                    {
                      ' In the final sitting, recite Attahiyat and Durood. Then, perform two normal prostrations (saying "Subhana Rabbiyal A\'la"). Sit back up and perform the Tasleem.'
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(70, event)}
              >
                <span>{"Etiquettes: Sutrah & Khushu"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-h4">{"Sutrah (Barrier)"}</div>
                  <p>
                    {
                      "It is Sunnah for the one praying alone or as an Imam to place a barrier (Sutrah) in front of them (e.g., wall, chair, bag). It should be placed just beyond the place of prostration."
                    }
                  </p>
                  <div className="guide-h4">{"Khushu (Focus)"}</div>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"Eyes:"}</strong>
                      {
                        " Look at the place of Sujood while standing. Look at your feet while bowing."
                      }
                    </li>
                    <li>
                      <strong>{"Mind:"}</strong>
                      {
                        " Understand what you are reciting. Reflect on the meanings."
                      }
                    </li>
                    <li>
                      <strong>{"Stillness:"}</strong>
                      {
                        " Avoid fidgeting, scratching, or adjusting clothes unnecessarily."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(71, event)}
              >
                <span>{"Travel: Shortening & Combining"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Travel concessions are meant to remove hardship, but the qualifying distance, intended stay, and preferred practice differ among schools."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "Four-raka’ah prayers may be shortened to two when the conditions of travel are met; Fajr and Maghrib are not shortened."
                      }
                    </li>
                    <li>
                      {
                        "Dhuhr with Asr, and Maghrib with Isha, may be combined in circumstances recognized by one’s school."
                      }
                    </li>
                    <li>
                      {
                        "When praying behind a resident imam, a traveler completes the prayer with the imam."
                      }
                    </li>
                    <li>
                      {
                        "Plan using the location and time where you actually pray, especially across time zones."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(72, event)}
              >
                <span>{"Illness, Disability & Accessibility"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Pray according to genuine ability. Standing is used when able; otherwise pray seated, and if necessary with further adaptations."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "Use a chair or stable support when standing, bowing, or prostrating is unsafe."
                      }
                    </li>
                    <li>
                      {
                        "Indicate bowing and prostration when full movement is impossible, making prostration lower than bowing where feasible."
                      }
                    </li>
                    <li>
                      {
                        "Medical devices, continence needs, and treatment schedules may require special purity rulings."
                      }
                    </li>
                    <li>
                      {
                        "Caregivers should prioritize dignity, safety, privacy, and enough time for worship."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(73, event)}
              >
                <span>{"Missed Prayer & Joining Late"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "If a prayer is missed through sleep or genuine forgetfulness, perform it when remembered."
                      }
                    </li>
                    <li>
                      {
                        "Deliberately missed prayers require sincere repentance; make-up details should follow reliable scholarly guidance."
                      }
                    </li>
                    <li>
                      {
                        "When arriving late to congregation, join the imam in the current position without rushing."
                      }
                    </li>
                    <li>
                      {
                        "After the imam ends, stand to complete what you missed according to the method taught in your school."
                      }
                    </li>
                  </ul>
                  <div className="reference-line">
                    {
                      "Foundation: Qur’an 4:103 establishes prayer at appointed times. This app’s calculated schedule should be checked against local mosque practice."
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(74, event)}
              >
                <span>{"Family Prayer Routine"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "Teach by calm example: preparation, punctuality, and kindness matter as much as verbal reminders."
                      }
                    </li>
                    <li>
                      {
                        "Give children age-appropriate roles such as laying prayer mats or checking the time."
                      }
                    </li>
                    <li>
                      {
                        "Keep instruction short and repeat one skill until it becomes familiar."
                      }
                    </li>
                    <li>
                      {
                        "Avoid turning minor differences into conflict; ask a teacher when the family follows different schools."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="view-special"
        className="guide-modal"
        data-guide-page=""
        aria-hidden="true"
      >
        <div className="modal-card">
          <div className="modal-handle-bar"></div>
          <div className="modal-header-row">
            <h3 className="modal-title">
              <i className="fa-solid fa-star" style={{ color: "#d97706" }}></i>
              <span data-i18n="gSpecial">{"Special"}</span>
            </h3>
            <button
              type="button"
              className="modal-close-btn guide-back-btn"
              onClick={(event) => dispatch(75, event)}
              aria-label="Back to guides"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span>{"Guides"}</span>
            </button>
          </div>
          <div className="modal-body">
            <details className="info-disclosure">
              <summary>
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                {"About special prayers"}
              </summary>
              <div className="disclosure-body">
                <div className="guide-intro">
                  <strong>{"Occasional prayers:"}</strong>
                  {
                    " This section covers Friday, night, Ramadan, Eid, funeral, eclipse, and other special acts of worship. Congregational procedures and some details differ, so follow the imam and local scholarly guidance."
                  }
                </div>
              </div>
            </details>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(76, event)}
              >
                <span>{"Salatul Jumu'ah (Friday)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Obligatory for every adult Muslim male. It replaces the Dhuhr prayer on Fridays."
                    }
                  </p>
                  <div className="guide-h4">{"Sunnahs of Friday"}</div>
                  <ul style={{ paddingLeft: "20px", fontSize: "0.9rem" }}>
                    <li>
                      <strong>{"Ghusl:"}</strong>
                      {" Highly emphasized to take a full bath."}
                    </li>
                    <li>
                      <strong>{"Siwak & Perfume:"}</strong>
                      {" Cleaning teeth and applying scent (for men)."}
                    </li>
                    <li>
                      <strong>{"Best Clothes:"}</strong>
                      {" Wearing clean, preferably white clothes."}
                    </li>
                    <li>
                      <strong>{"Surah Al-Kahf:"}</strong>
                      {" Reading it brings light between two Fridays."}
                    </li>
                    <li>
                      <strong>{"Early Arrival:"}</strong>
                      {" Going early to the Masjid."}
                    </li>
                    <li>
                      <strong>{"Salawat:"}</strong>
                      {" Sending abundant blessings on Prophet Muhammad (SAW)."}
                    </li>
                  </ul>
                  <div className="guide-h4">{"The Khutbah (Sermon)"}</div>
                  <p>
                    <strong>{"Important:"}</strong>
                    {
                      " When the khutbah begins, remain silent and listen attentively. Even telling someone “be quiet” is described as idle speech and can seriously diminish the reward of Jumu’ah."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(77, event)}
              >
                <span>{"Tahajjud (Night Prayer)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Status:"}</strong>
                    {" The most virtuous prayer after the obligatory ones."}
                  </p>
                  <p>
                    <strong>{"Time:"}</strong>
                    {
                      " After Isha, specifically after sleeping and waking up in the last third of the night."
                    }
                  </p>
                  <p>
                    <strong>{"Raka'ats:"}</strong>
                    {
                      " Minimum 2. The Prophet (SAW) typically prayed 8 + 3 Witr. Pray in sets of 2."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(78, event)}
              >
                <span>{"Salatul Witr"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      'Witr (meaning "Odd") is the final prayer of the night. It is highly emphasized Sunnah (Sunnah Mu\'akkadah). It is prayed in odd numbers: 1, 3, 5, etc.'
                    }
                  </p>
                  <div className="guide-h4">{"3 Raka'ats Method (Common)"}</div>
                  <p>
                    <strong>{"Option A (Two + One):"}</strong>
                    {
                      " Pray 2 Raka'ats like Fajr and say Salam. Then stand up and pray 1 separate Raka'at with Tashahhud and Salam."
                    }
                  </p>
                  <p>
                    <strong>{"Option B (Continuous):"}</strong>
                    {" Pray 3 Raka'ats continuously. Do "}
                    <strong>{"not"}</strong>
                    {
                      " sit after the 2nd Raka'at. Sit only at the end of the 3rd Raka'at for Tashahhud and Salam."
                    }
                  </p>
                  <div className="guide-h4">{"Dua Qunut"}</div>
                  <p>
                    {
                      "In the final Raka'at, either before going to Ruku (after finishing recitation) or after rising from Ruku, raise hands and recite Dua Qunut asking for guidance, forgiveness, and protection."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(79, event)}
              >
                <span>{"Salatul Taraweeh (Ramadan)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Time:"}</strong>
                    {" During Ramadan, after the Isha prayer and before Witr."}
                  </p>
                  <p>
                    <strong>{"Method:"}</strong>
                    {
                      " Prayed in sets of 2 Raka'ats. The number of Raka'ats varies (commonly 8 or 20) followed by 3 Witr."
                    }
                  </p>
                  <p>
                    {
                      "It is strongly recommended to pray this in congregation (Jama'ah) at the mosque."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(80, event)}
              >
                <span>{"Salatul Dhuha (Forenoon)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      'Also known as the "Prayer of the Awwabeen" (the oft-returning). It fulfills the charity due on every joint of the body.'
                    }
                  </p>
                  <p>
                    <strong>{"Time:"}</strong>
                    {
                      " Begins approximately 15 minutes after sunrise and ends about 10-15 minutes before Dhuhr time starts."
                    }
                  </p>
                  <p>
                    <strong>{"Raka'ats:"}</strong>
                    {
                      " Minimum 2. You can pray 4, 8, or up to 12. Pray them in sets of 2, saying Salam after every 2 Raka'ats."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(81, event)}
              >
                <span>{"Salatul Istikhara (Guidance)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Performed when undecided about a permissible matter (e.g., marriage, job, travel) to seek Allah's guidance."
                    }
                  </p>
                  <div className="guide-step">
                    <strong>{"1. Pray:"}</strong>
                    {
                      " Perform 2 Raka'ats of voluntary prayer (not a Fard prayer). Recite any Surahs you like."
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"2. Dua:"}</strong>
                    {
                      " After the Tasleem (or in Sujood/before Salam), raise your hands, praise Allah, send Salawat on the Prophet (SAW), and recite the Istikhara Dua."
                    }
                  </div>
                  <div
                    className="guide-callout guide-callout-emerald"
                    style={{
                      background: "rgba(6, 78, 59, 0.05)",
                      padding: "10px",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <strong style={{ color: "var(--primary)" }}>
                      {"The Dua Transliteration:"}
                    </strong>
                    <br />
                    <em
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        display: "block",
                      }}
                    >
                      {
                        "\"Allahumma innee astakheeruka bi-'ilmik, wa astaqdiruka bi-qudratik, wa as-aluka min fadlikal-'azeem. Fa-innaka taqdiru wa la aqdir, wa ta'lamu wa la a'lam, wa anta 'allamul-ghuyoob...\""
                      }
                    </em>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(82, event)}
              >
                <span>{"Salatul Tasbih (Forgiveness)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {"A special prayer of 4 Raka'ats containing 300 Tasbihs: "}
                    <em>
                      {
                        '"SubhanAllahi wal-Hamdulillahi wa la ilaha illAllahu wAllahu Akbar"'
                      }
                    </em>
                    {"."}
                  </p>
                  <p>
                    <strong>{"Method:"}</strong>
                  </p>
                  <ul style={{ paddingLeft: "20px", fontSize: "0.9rem" }}>
                    <li>{"After Recitation: 15 times"}</li>
                    <li>{"In Ruku: 10 times"}</li>
                    <li>{"Rising from Ruku: 10 times"}</li>
                    <li>{"First Sujood: 10 times"}</li>
                    <li>{"Sitting between Sujoods: 10 times"}</li>
                    <li>{"Second Sujood: 10 times"}</li>
                    <li>{"Sitting before rising (Istirahah): 10 times"}</li>
                  </ul>
                  <p>{"Total = 75 per Raka'at × 4 = 300."}</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(83, event)}
              >
                <span>{"Salatul Eid"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>{"2 Raka'ats. No Adhan/Iqamah."}</p>
                  <div className="guide-h4">{"First Raka'at"}</div>
                  <p>
                    {"Opening Takbir + "}
                    <strong>{"7 Extra Takbirs"}</strong>
                    {". Recite Fatiha + Surah A'la (recite aloud)."}
                  </p>
                  <div className="guide-h4">{"Second Raka'at"}</div>
                  <p>
                    {"Rise + "}
                    <strong>{"5 Extra Takbirs"}</strong>
                    {". Recite Fatiha + Surah Ghashiyah."}
                  </p>
                  <p>
                    <em>{"Listen to the Khutbah after the prayer."}</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(84, event)}
              >
                <span>{"Janazah (Funeral) Prayer"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>{"Standing only. 4 Takbirs."}</p>
                  <div className="guide-step">
                    <strong>{"1st Takbir:"}</strong>
                    {" Recite Al-Fatiha silently."}
                  </div>
                  <div className="guide-step">
                    <strong>{"2nd Takbir:"}</strong>
                    {" Recite Durood Ibrahim."}
                  </div>
                  <div className="guide-step">
                    <strong>{"3rd Takbir:"}</strong>
                    {" Dua for the deceased. "}
                    <br />
                    <em>
                      {
                        '"Allahummaghfir lihayyina wa mayyitina, wa shahidina wa gha-ibina, wa sagheerina wa kabeerina, wa dhakarina wa unthana..."'
                      }
                    </em>
                  </div>
                  <div className="guide-step">
                    <strong>{"4th Takbir:"}</strong>
                    {" Pause, then Tasleem to the right."}
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(85, event)}
              >
                <span>{"Salatul Kusuf (Eclipse)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Structure:"}</strong>
                    {
                      " 2 Raka'ats. In each Raka'at: 2 standings (Qiyam), 2 recitations, 2 bowings (Ruku), and 2 prostrations (Sujood)."
                    }
                  </p>
                  <p>
                    {"Prayed in congregation during a solar or lunar eclipse."}
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(86, event)}
              >
                <span>{"Sujood Tilawah (Recitation)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "When you read or hear a verse of Sajdah in the Quran (marked with a symbol ۩):"
                    }
                  </p>
                  <div className="guide-step">
                    <strong>{"1. Takbir:"}</strong>
                    {' Say "Allahu Akbar".'}
                  </div>
                  <div className="guide-step">
                    <strong>{"2. Prostrate:"}</strong>
                    {" Go directly into a single Sujood."}
                  </div>
                  <div className="guide-step">
                    <strong>{"3. Dua:"}</strong>
                    {" Say "}
                    <em>
                      {
                        '"Sajada wajhiya lilladhee khalaqahu wa sawwarahu wa shaqqa sam\'ahu wa basarahu bi hawlihi wa quwwatihi."'
                      }
                    </em>
                  </div>
                  <div className="guide-step">
                    <strong>{"4. Rise:"}</strong>
                    {' Say "Allahu Akbar". No Tasleem required.'}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(87, event)}
              >
                <span>{"Ramadan Worship Planner"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"Fard first:"}</strong>
                      {
                        " Protect the five prayers and the fast before adding optional goals."
                      }
                    </li>
                    <li>
                      <strong>{"Qur’an:"}</strong>
                      {
                        " Choose a sustainable daily portion for recitation and reflection."
                      }
                    </li>
                    <li>
                      <strong>{"Night worship:"}</strong>
                      {
                        " Taraweeh and qiyam may be prayed in congregation or individually."
                      }
                    </li>
                    <li>
                      <strong>{"Last ten nights:"}</strong>
                      {
                        " Increase worship and seek Laylat al-Qadr throughout the odd nights without treating one forecast as certain."
                      }
                    </li>
                    <li>
                      <strong>{"Charity and character:"}</strong>
                      {
                        " Include generosity, reconciliation, and guarding speech."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(88, event)}
              >
                <span>{"Rain Prayer & Community Need"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Salat al-Istisqa"}</strong>
                    {
                      " is a communal prayer seeking rain during drought. Its public arrangement, sermon, and details should be led by recognized community leadership."
                    }
                  </p>
                  <p>
                    {
                      "Individuals may also make sincere dua, repent, give charity, conserve water, and support those harmed by drought. Spiritual response should accompany responsible practical action."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(89, event)}
              >
                <span>{"When Local Guidance Is Essential"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "Jumu’ah eligibility, multiple congregations, workplace constraints, and travel exemptions."
                      }
                    </li>
                    <li>
                      {
                        "Eid moon-sighting announcements, prayer location, and community takbir practice."
                      }
                    </li>
                    <li>
                      {
                        "Funeral preparation, janazah leadership, burial law, and family rights."
                      }
                    </li>
                    <li>
                      {
                        "Eclipse or drought prayer announcements and congregation arrangements."
                      }
                    </li>
                  </ul>
                  <p>
                    {
                      "KuduPray provides learning notes, not a substitute for an imam, scholar, or official community announcement."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="view-adhkar"
        className="guide-modal"
        data-guide-page=""
        aria-hidden="true"
      >
        <div className="modal-card">
          <div className="modal-handle-bar"></div>
          <div className="modal-header-row">
            <h3 className="modal-title">
              <i
                className="fa-solid fa-fingerprint"
                style={{ color: "#7e22ce" }}
              ></i>
              <span data-i18n="gAdhkar">{"Adhkar"}</span>
            </h3>
            <button
              type="button"
              className="modal-close-btn guide-back-btn"
              onClick={(event) => dispatch(90, event)}
              aria-label="Back to guides"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span>{"Guides"}</span>
            </button>
          </div>
          <div className="modal-body">
            <details className="info-disclosure">
              <summary>
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                {"About adhkar"}
              </summary>
              <div className="disclosure-body">
                <div className="guide-intro">
                  <strong>{"Remember with presence:"}</strong>
                  {
                    " Adhkar are short remembrances for recurring moments—after prayer, morning and evening, sleep, and waking. Learn a small set accurately, understand the meaning, and make it part of a consistent routine."
                  }
                </div>
              </div>
            </details>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(91, event)}
              >
                <span>{"Post-Prayer Dhikr"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>{"Recommended to say after every Fard prayer:"}</p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
                    <li>
                      <strong>{"Astaghfirullah"}</strong>
                      {" (3 times)."}
                    </li>
                    <li>
                      <strong>
                        {
                          "Allahumma antas-Salam wa minkas-Salam, tabarakta ya Dhal-Jalali wal-Ikram"
                        }
                      </strong>
                      {" (1 time)."}
                    </li>
                    <li>
                      <strong>{"Ayatul Kursi"}</strong>
                      {" (Surah Al-Baqarah 2:255)."}
                    </li>
                  </ul>
                  <div className="guide-h4">{"Tasbih (33-33-33)"}</div>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"SubhanAllah"}</strong>
                      {" (33 times) - "}
                      <span style={{ fontSize: "0.8em", opacity: "0.7" }}>
                        {"Glory be to Allah"}
                      </span>
                    </li>
                    <li>
                      <strong>{"Alhamdulillah"}</strong>
                      {" (33 times) - "}
                      <span style={{ fontSize: "0.8em", opacity: "0.7" }}>
                        {"Praise be to Allah"}
                      </span>
                    </li>
                    <li>
                      <strong>{"Allahu Akbar"}</strong>
                      {" (33 times) - "}
                      <span style={{ fontSize: "0.8em", opacity: "0.7" }}>
                        {"Allah is the Greatest"}
                      </span>
                    </li>
                  </ul>
                  <div className="guide-h4">{"Completing the 100"}</div>
                  <div
                    className="guide-callout guide-callout-purple"
                    style={{
                      background: "rgba(126, 34, 206, 0.05)",
                      padding: "10px",
                      borderRadius: "10px",
                      borderLeft: "3px solid #7e22ce",
                    }}
                  >
                    <p
                      style={{
                        margin: "0",
                        fontFamily: "'Amiri', serif",
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        color: "var(--primary-dark)",
                      }}
                    >
                      {
                        "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
                      }
                    </p>
                    <p
                      style={{
                        margin: "5px 0 0 0",
                        fontSize: "0.85rem",
                        fontStyle: "italic",
                      }}
                    >
                      {
                        '"La ilaha illallah wahdahu la sharika lah, lahul mulku wa lahul hamdu, wa huwa \'ala kulli shayin qadir."'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(92, event)}
              >
                <span>{"Morning & Evening Adhkar"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Times:"}</strong>
                    {
                      " Morning (after Fajr until sunrise) and Evening (after Asr until Maghrib)."
                    }
                  </p>
                  <div className="guide-h4">{"1. Protection (3 times)"}</div>
                  <p
                    style={{
                      fontFamily: "'Amiri', serif",
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                      textAlign: "right",
                    }}
                  >
                    {
                      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ"
                    }
                  </p>
                  <p style={{ fontSize: "0.85rem", marginTop: "5px" }}>
                    <em>
                      {
                        "\"Bismillahi-lladhi la yadurru ma'as-mihi shay-un fil-ardi wa la fis-sama'i wa huwas-samee'ul-'aleem.\""
                      }
                    </em>
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#666" }}>
                    {
                      "(In the name of Allah, with Whose name nothing can cause harm...)"
                    }
                  </p>
                  <div className="guide-h4">{"2. Forgiveness (100 times)"}</div>
                  <p
                    style={{
                      fontFamily: "'Amiri', serif",
                      fontSize: "1.1rem",
                      textAlign: "right",
                    }}
                  >
                    {"سُبْحَانَ اللهِ وَبِحَمْدِهِ"}
                  </p>
                  <p style={{ fontSize: "0.85rem", marginTop: "5px" }}>
                    <em>{'"SubhanAllahi wa bihamdihi."'}</em>
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#666" }}>
                    {"(Glory is to Allah and to Him is praise.)"}
                  </p>
                  <div className="guide-h4">
                    {"3. Sayyidul Istighfar (Once)"}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Amiri', serif",
                      fontSize: "1rem",
                      lineHeight: "1.8",
                      textAlign: "right",
                    }}
                  >
                    {
                      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ"
                    }
                  </p>
                  <p style={{ fontSize: "0.85rem", marginTop: "5px" }}>
                    <em>
                      {
                        "\"Allahumma anta Rabbee la ilaha illa anta, khalaqtanee wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu...\""
                      }
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(93, event)}
              >
                <span>{"Home & Travel Adhkar"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-h4">{"Leaving Home"}</div>
                  <p
                    style={{
                      fontFamily: "'Amiri', serif",
                      fontSize: "1.1rem",
                      textAlign: "right",
                    }}
                  >
                    {
                      "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ"
                    }
                  </p>
                  <p>
                    <em>
                      {
                        '"Bismillahi tawakkaltu \'ala Allahi, la hawla wa la quwwata illa billah."'
                      }
                    </em>
                  </p>
                  <div className="guide-h4">{"Entering Home"}</div>
                  <p>
                    <em>
                      {
                        '"Bismillahi walajna, wa bismillahi kharajna, wa \'ala Rabbina tawakkalna."'
                      }
                    </em>
                    {" Then say Salam to family."}
                  </p>
                  <div className="guide-h4">{"Entering Mosque"}</div>
                  <p>
                    {"Step with "}
                    <strong>{"Right"}</strong>
                    {" foot: "}
                    <em>
                      {'"Bismillah... Allahumma-ftah lee abwaba rahmatik."'}
                    </em>
                  </p>
                  <div className="guide-h4">{"Leaving Mosque"}</div>
                  <p>
                    {"Step with "}
                    <strong>{"Left"}</strong>
                    {" foot: "}
                    <em>
                      {'"Bismillah... Allahumma innee as-aluka min fadlik."'}
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(94, event)}
              >
                <span>{"Before Sleeping"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
                    <li>
                      <strong>{"Wudu:"}</strong>
                      {" Sleep in a state of purity."}
                    </li>
                    <li>
                      <strong>{"Dust Bed:"}</strong>
                      {" Dust off the bed three times."}
                    </li>
                    <li>
                      <strong>{"Ayatul Kursi"}</strong>
                      {" (1x): Protection from Shaytan all night."}
                    </li>
                    <li>
                      <strong>{"3 Quls:"}</strong>
                      {
                        " Cup hands, recite Ikhlas, Falaq, Nas. Blow into hands. Wipe over body. (Repeat 3x)."
                      }
                    </li>
                    <li>
                      <strong>{"Surah Al-Mulk:"}</strong>
                      {" Protection from punishment of the grave."}
                    </li>
                  </ul>
                  <div className="guide-h4">{"Tasbih Fatimah"}</div>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"SubhanAllah"}</strong>
                      {" (33x)"}
                    </li>
                    <li>
                      <strong>{"Alhamdulillah"}</strong>
                      {" (33x)"}
                    </li>
                    <li>
                      <strong>{"Allahu Akbar"}</strong>
                      {" (34x)"}
                    </li>
                  </ul>
                  <div className="guide-h4">{"Main Dua"}</div>
                  <p
                    style={{
                      fontFamily: "'Amiri', serif",
                      fontSize: "1.1rem",
                      textAlign: "right",
                    }}
                  >
                    {"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا"}
                  </p>
                  <p>
                    <em>{'"Bismika Allahumma amootu wa ahya"'}</em>
                    {" (In Your Name, O Allah, I die and I live)."}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(95, event)}
              >
                <span>{"Morning & Evening Routine"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-step">
                    <strong>{"Choose a window:"}</strong>
                    {
                      " Connect morning adhkar to Fajr and evening adhkar to late afternoon or evening."
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"Begin small:"}</strong>
                    {
                      " Learn three authentic remembrances with their meanings before adding more."
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"Count reliably:"}</strong>
                    {
                      " Fingers or a simple counter can help without making speed the goal."
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"Make up gently:"}</strong>
                    {
                      " If the routine is missed, resume at the next opportunity rather than abandoning it."
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(96, event)}
              >
                <span>{"Meaning, Presence & Pronunciation"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "Understand the central meaning so remembrance engages both tongue and heart."
                      }
                    </li>
                    <li>
                      {
                        "Learn Arabic gradually from a qualified reciter; transliteration cannot represent every sound."
                      }
                    </li>
                    <li>
                      {
                        "Avoid racing only to finish a number. Calm repetition supports attention and gratitude."
                      }
                    </li>
                    <li>
                      {
                        "Authentic wording and reported counts should be distinguished from unrestricted personal dua."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(97, event)}
              >
                <span>{"Building a Sustainable Habit"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "Attach adhkar to existing cues: after salam, after waking, before sleep, and when leaving home."
                      }
                    </li>
                    <li>
                      {
                        "Keep a short “minimum routine” for busy or difficult days."
                      }
                    </li>
                    <li>
                      {
                        "Review one phrase each week: Arabic, meaning, source, time, and count."
                      }
                    </li>
                    <li>
                      {
                        "Do not turn optional remembrance into a source of guilt or harshness."
                      }
                    </li>
                  </ul>
                  <div className="reference-line">
                    {
                      "The prophetic principle of moderation encourages steady worship without unsustainable excess."
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="view-special-legacy"
        className="guide-modal"
        onClick={(event) => dispatch(98, event)}
        aria-hidden="true"
      >
        <div className="modal-card">
          <div className="modal-handle-bar"></div>
          <div className="modal-header-row">
            <h3 className="modal-title">
              <i className="fa-solid fa-star" style={{ color: "#d97706" }}></i>
              <span data-i18n="gSpecial">{"Special"}</span>
            </h3>
            <button
              type="button"
              className="modal-close-btn"
              onClick={(event) => dispatch(99, event)}
              aria-label="Close guide"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(100, event)}
              >
                <span>{"Salatul Jumu'ah (Friday)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Obligatory for every adult Muslim male. It replaces the Dhuhr prayer on Fridays."
                    }
                  </p>
                  <div className="guide-h4">{"Sunnahs of Friday"}</div>
                  <ul style={{ paddingLeft: "20px", fontSize: "0.9rem" }}>
                    <li>
                      <strong>{"Ghusl:"}</strong>
                      {" Highly emphasized to take a full bath."}
                    </li>
                    <li>
                      <strong>{"Siwak & Perfume:"}</strong>
                      {" Cleaning teeth and applying scent (for men)."}
                    </li>
                    <li>
                      <strong>{"Best Clothes:"}</strong>
                      {" Wearing clean, preferably white clothes."}
                    </li>
                    <li>
                      <strong>{"Surah Al-Kahf:"}</strong>
                      {" Reading it brings light between two Fridays."}
                    </li>
                    <li>
                      <strong>{"Early Arrival:"}</strong>
                      {" Going early to the Masjid."}
                    </li>
                    <li>
                      <strong>{"Salawat:"}</strong>
                      {" Sending abundant blessings on Prophet Muhammad (SAW)."}
                    </li>
                  </ul>
                  <div className="guide-h4">{"The Khutbah (Sermon)"}</div>
                  <p>
                    <strong>{"Strict Rule:"}</strong>
                    {
                      ' When the Imam ascends the minbar or starts the Khutbah, you must remain silent and listen attentively. Even telling someone "be quiet" is considered idle talk and invalidates the reward of Jumu\'ah.'
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(101, event)}
              >
                <span>{"Tahajjud (Night Prayer)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Status:"}</strong>
                    {" The most virtuous prayer after the obligatory ones."}
                  </p>
                  <p>
                    <strong>{"Time:"}</strong>
                    {
                      " After Isha, specifically after sleeping and waking up in the last third of the night."
                    }
                  </p>
                  <p>
                    <strong>{"Raka'ats:"}</strong>
                    {
                      " Minimum 2. The Prophet (SAW) typically prayed 8 + 3 Witr. Pray in sets of 2."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(102, event)}
              >
                <span>{"Salatul Witr"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      'Witr (meaning "Odd") is the final prayer of the night. It is highly emphasized Sunnah (Sunnah Mu\'akkadah). It is prayed in odd numbers: 1, 3, 5, etc.'
                    }
                  </p>
                  <div className="guide-h4">{"3 Raka'ats Method (Common)"}</div>
                  <p>
                    <strong>{"Option A (Two + One):"}</strong>
                    {
                      " Pray 2 Raka'ats like Fajr and say Salam. Then stand up and pray 1 separate Raka'at with Tashahhud and Salam."
                    }
                  </p>
                  <p>
                    <strong>{"Option B (Continuous):"}</strong>
                    {" Pray 3 Raka'ats continuously. Do "}
                    <strong>{"not"}</strong>
                    {
                      " sit after the 2nd Raka'at. Sit only at the end of the 3rd Raka'at for Tashahhud and Salam."
                    }
                  </p>
                  <div className="guide-h4">{"Dua Qunut"}</div>
                  <p>
                    {
                      "In the final Raka'at, either before going to Ruku (after finishing recitation) or after rising from Ruku, raise hands and recite Dua Qunut asking for guidance, forgiveness, and protection."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(103, event)}
              >
                <span>{"Salatul Dhuha (Forenoon)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      'Also known as the "Prayer of the Awwabeen" (the oft-returning). It fulfills the charity due on every joint of the body.'
                    }
                  </p>
                  <p>
                    <strong>{"Time:"}</strong>
                    {
                      " Begins approximately 15 minutes after sunrise and ends about 10-15 minutes before Dhuhr time starts."
                    }
                  </p>
                  <p>
                    <strong>{"Raka'ats:"}</strong>
                    {
                      " Minimum 2. You can pray 4, 8, or up to 12. Pray them in sets of 2, saying Salam after every 2 Raka'ats."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(104, event)}
              >
                <span>{"Salatul Istikhara (Guidance)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Performed when undecided about a permissible matter (e.g., marriage, job, travel) to seek Allah's guidance."
                    }
                  </p>
                  <div className="guide-step">
                    <strong>{"1. Pray:"}</strong>
                    {
                      " Perform 2 Raka'ats of voluntary prayer (not a Fard prayer). Recite any Surahs you like."
                    }
                  </div>
                  <div className="guide-step">
                    <strong>{"2. Dua:"}</strong>
                    {
                      " After the Tasleem (or in Sujood/before Salam), raise your hands, praise Allah, send Salawat on the Prophet (SAW), and recite the Istikhara Dua."
                    }
                  </div>
                  <div
                    className="guide-callout guide-callout-emerald"
                    style={{
                      background: "rgba(6, 78, 59, 0.05)",
                      padding: "10px",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <strong style={{ color: "var(--primary)" }}>
                      {"The Dua Transliteration:"}
                    </strong>
                    <br />
                    <em
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        display: "block",
                      }}
                    >
                      {
                        "\"Allahumma innee astakheeruka bi-'ilmik, wa astaqdiruka bi-qudratik, wa as-aluka min fadlikal-'azeem. Fa-innaka taqdiru wa la aqdir, wa ta'lamu wa la a'lam, wa anta 'allamul-ghuyoob...\""
                      }
                    </em>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(105, event)}
              >
                <span>{"Salatul Eid"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>{"2 Raka'ats. No Adhan/Iqamah."}</p>
                  <div className="guide-h4">{"First Raka'at"}</div>
                  <p>
                    {"Opening Takbir + "}
                    <strong>{"7 Extra Takbirs"}</strong>
                    {". Recite Fatiha + Surah A'la (recite aloud)."}
                  </p>
                  <div className="guide-h4">{"Second Raka'at"}</div>
                  <p>
                    {"Rise + "}
                    <strong>{"5 Extra Takbirs"}</strong>
                    {". Recite Fatiha + Surah Ghashiyah."}
                  </p>
                  <p>
                    <em>{"Listen to the Khutbah after the prayer."}</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(106, event)}
              >
                <span>{"Janazah (Funeral) Prayer"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>{"Standing only. 4 Takbirs."}</p>
                  <div className="guide-step">
                    <strong>{"1st Takbir:"}</strong>
                    {" Recite Al-Fatiha silently."}
                  </div>
                  <div className="guide-step">
                    <strong>{"2nd Takbir:"}</strong>
                    {" Recite Durood Ibrahim."}
                  </div>
                  <div className="guide-step">
                    <strong>{"3rd Takbir:"}</strong>
                    {" Dua for the deceased. "}
                    <br />
                    <em>
                      {
                        '"Allahummaghfir lihayyina wa mayyitina, wa shahidina wa gha-ibina, wa sagheerina wa kabeerina, wa dhakarina wa unthana..."'
                      }
                    </em>
                  </div>
                  <div className="guide-step">
                    <strong>{"4th Takbir:"}</strong>
                    {" Pause, then Tasleem to the right."}
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(107, event)}
              >
                <span>{"Salatul Kusuf (Eclipse)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Structure:"}</strong>
                    {
                      " 2 Raka'ats. In each Raka'at: 2 standings (Qiyam), 2 recitations, 2 bowings (Ruku), and 2 prostrations (Sujood)."
                    }
                  </p>
                  <p>
                    {"Prayed in congregation during a solar or lunar eclipse."}
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(108, event)}
              >
                <span>{"Sujood Tilawah (Recitation)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "When you read or hear a verse of Sajdah in the Quran (marked with a symbol ۩):"
                    }
                  </p>
                  <div className="guide-step">
                    <strong>{"1. Takbir:"}</strong>
                    {' Say "Allahu Akbar".'}
                  </div>
                  <div className="guide-step">
                    <strong>{"2. Prostrate:"}</strong>
                    {" Go directly into a single Sujood."}
                  </div>
                  <div className="guide-step">
                    <strong>{"3. Dua:"}</strong>
                    {" Say "}
                    <em>
                      {
                        '"Sajada wajhiya lilladhee khalaqahu wa sawwarahu wa shaqqa sam\'ahu wa basarahu bi hawlihi wa quwwatihi."'
                      }
                    </em>
                  </div>
                  <div className="guide-step">
                    <strong>{"4. Rise:"}</strong>
                    {' Say "Allahu Akbar". No Tasleem required.'}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(109, event)}
              >
                <span>{"Tajwid Starter Guide"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"Makharij:"}</strong>
                      {
                        " Learn where letters originate in the mouth and throat."
                      }
                    </li>
                    <li>
                      <strong>{"Long vowels:"}</strong>
                      {" Distinguish short vowels from stretched sounds."}
                    </li>
                    <li>
                      <strong>{"Ghunnah:"}</strong>
                      {" Practice measured nasalization where required."}
                    </li>
                    <li>
                      <strong>{"Stops:"}</strong>
                      {
                        " Learn common Qur’anic pause signs before joining phrases."
                      }
                    </li>
                    <li>
                      <strong>{"Method:"}</strong>
                      {
                        " Listen, repeat in short phrases, record yourself, and receive correction from a teacher."
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(110, event)}
              >
                <span>{"Essential Prayer Vocabulary"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      <strong>{"Qiyam:"}</strong>
                      {" standing; "}
                      <strong>{"Ruku:"}</strong>
                      {" bowing; "}
                      <strong>{"Sujood:"}</strong>
                      {" prostration."}
                    </li>
                    <li>
                      <strong>{"Raka’ah:"}</strong>
                      {" one complete unit of prayer."}
                    </li>
                    <li>
                      <strong>{"Tashahhud:"}</strong>
                      {" testimony recited while sitting."}
                    </li>
                    <li>
                      <strong>{"Tasleem:"}</strong>
                      {" concluding greeting of peace."}
                    </li>
                    <li>
                      <strong>{"Khushu:"}</strong>
                      {" humble attentiveness and stillness."}
                    </li>
                    <li>
                      <strong>{"Qibla:"}</strong>
                      {" direction of the Ka’bah in Makkah."}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(111, event)}
              >
                <span>{"Sources, Differences & Safe Use"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Use the app as a structured reference, then verify memorization and detailed rulings with qualified teachers."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      {
                        "Qur’anic wording should be checked against a recognized mushaf."
                      }
                    </li>
                    <li>
                      {
                        "Hadith-based adhkar should be learned with their context, count, and reported time."
                      }
                    </li>
                    <li>
                      {
                        "Valid schools can differ on prayer details while sharing the same foundations."
                      }
                    </li>
                    <li>
                      {
                        "Medical, travel, family-law, and community-leadership questions deserve personalized guidance."
                      }
                    </li>
                  </ul>
                  <div className="reference-line">
                    {
                      "Key references used in this guide include Qur’an 5:6 and 4:103, Sahih al-Bukhari 631 on learning the prayer, and Sahih al-Bukhari 39 on moderation."
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="view-reference"
        className="guide-modal"
        data-guide-page=""
        aria-hidden="true"
      >
        <div className="modal-card">
          <div className="modal-handle-bar"></div>
          <div className="modal-header-row">
            <h3 className="modal-title">
              <i
                className="fa-solid fa-book-open"
                style={{ color: "#be123c" }}
              ></i>
              <span data-i18n="gRecitations">{"Recitations"}</span>
            </h3>
            <button
              type="button"
              className="modal-close-btn guide-back-btn"
              onClick={(event) => dispatch(112, event)}
              aria-label="Back to guides"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span>{"Guides"}</span>
            </button>
          </div>
          <div className="modal-body">
            <details className="info-disclosure">
              <summary>
                <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                {"Using recitation references"}
              </summary>
              <div className="disclosure-body">
                <div className="guide-intro">
                  <strong>{"Recitation reference:"}</strong>
                  {
                    " Arabic text, transliteration, and meaning are provided together to support learning. Transliteration is only an aid; listen to a qualified reciter or teacher for pronunciation and tajwid."
                  }
                </div>
              </div>
            </details>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(113, event)}
              >
                <span>{"Ayatul Kursi (2:255)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p
                    className="dua-arabic"
                    style={{
                      textAlign: "justify",
                      marginBottom: "15px",
                      background: "rgba(0,0,0,0.03)",
                      border: "none",
                      boxShadow: "none",
                    }}
                  >
                    {
                      "\n                            ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ\n                        "
                    }
                  </p>
                  <p>
                    <strong>{"Transliteration:"}</strong>
                    <br />
                    <em>
                      {
                        "Allahu la ilaha illa huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydeehim wa ma khalfahum. Wa la yuheetoona bi shay-im-min 'ilmihi illa bima sha'. Wasi'a Kursiyyuhus-samawati wal-ard. Wa la ya-ooduhu hifzu-huma. Wa huwal-'Aliyyul-'Azeem."
                      }
                    </em>
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    <strong>{"Translation:"}</strong>
                    <br />
                    {
                      "\n                        Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(114, event)}
              >
                <span>{"Essential Short Surahs"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"Note:"}</strong>
                    {
                      " Al-Fatiha is mandatory in every Raka'at. Other Surahs are recited in the first two Raka'ats."
                    }
                  </p>
                  <div className="guide-h4">{"1. Al-Fatiha (The Opening)"}</div>
                  <p>
                    <em>
                      {
                        "\"Bismillaahir Rahmaanir Raheem. Alhamdu lillaahi Rabbil 'aalameen. Ar-Rahmaanir-Raheem. Maaliki Yawmid-Deen. Iyyaaka na'budu wa lyyaaka nasta'een. Ihdinas-Siraatal-Mustaqeem. Siraatal-lazeena an'amta 'alayhim ghayril-maghdoobi 'alayhim wa lad-daalleen.\""
                      }
                    </em>
                  </p>
                  <div className="guide-h4">{"103. Al-Asr (The Time)"}</div>
                  <p>
                    <em>
                      {
                        "\"Wal 'asr. Innal insana lafee khusr. Illallatheena amanoo wa 'amilus-salihati wa tawasaw bil-haqqi wa tawasaw bis-sabr.\""
                      }
                    </em>
                  </p>
                  <div className="guide-h4">
                    {"108. Al-Kawthar (Abundance)"}
                  </div>
                  <p>
                    <em>
                      {
                        '"Inna a\'taynakal kawthar. Fa salli li rabbika wanhar. Inna shani-aka huwal abtar."'
                      }
                    </em>
                  </p>
                  <div className="guide-h4">
                    {"109. Al-Kafirun (Disbelievers)"}
                  </div>
                  <p>
                    <em>
                      {
                        "\"Qul ya ayyuhal kafiroon. La a'budu ma ta'budoon. Wa la antum 'abidoona ma a'bud. Wa la ana 'abidum ma 'abadtum. Wa la antum 'abidoona ma a'bud. Lakum deenukum waliya deen.\""
                      }
                    </em>
                  </p>
                  <div className="guide-h4">{"110. An-Nasr (Victory)"}</div>
                  <p>
                    <em>
                      {
                        '"Iza ja-a nasrullahi wal fath. Wa ra-aytan nasa yadkhuloona fee deenillahi afwaja. Fa sabbih bihamdi rabbika wastaghfirhu innahu kana tawwaba."'
                      }
                    </em>
                  </p>
                  <div className="guide-h4">{"112. Al-Ikhlas (Sincerity)"}</div>
                  <p>
                    <em>
                      {
                        '"Qul huwal lahu ahad. Allahus samad. Lam yalid wa lam yoolad. Wa lam yakul lahoo kufuwan ahad."'
                      }
                    </em>
                  </p>
                  <div className="guide-h4">{"113. Al-Falaq (Daybreak)"}</div>
                  <p>
                    <em>
                      {
                        "\"Qul a'uzu bi rabbil falaq. Min sharri ma khalaq. Wa min sharri ghasiqin iza waqab. Wa min sharrin naffathati fil 'uqad. Wa min sharri hasidin iza hasad.\""
                      }
                    </em>
                  </p>
                  <div className="guide-h4">{"114. An-Nas (Mankind)"}</div>
                  <p>
                    <em>
                      {
                        '"Qul a\'uzu bi rabbin nas. Malikin nas. Ilahin nas. Min sharril waswasil khannas. Allazee yuwaswisu fee sudoorin nas. Minal jinnati wannas."'
                      }
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(115, event)}
              >
                <span>{"Opening Dua (Istiftah)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Recited silently after the first Takbir and before Al-Fatiha."
                    }
                  </p>
                  <div className="guide-h4">{"Option 1 (Common)"}</div>
                  <p>
                    <em>
                      {
                        '"Subhanaka Allahumma wa bihamdika, wa tabarakasmuka, wa ta\'ala jadduka, wa la ilaha ghayruk."'
                      }
                    </em>
                  </p>
                  <div className="guide-h4">{"Option 2"}</div>
                  <p>
                    <em>
                      {
                        "\"Allahumma baa'id baynee wa bayna khatayaya kama ba'adta baynal-mashriqi wal-maghrib. Allahumma naqqinee min khatayaya kama yunaqqath-thawbul-abyadu minad-danas...\""
                      }
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(116, event)}
              >
                <span>{"Ruku, Sujood & Sitting"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    <strong>{"In Ruku (Bowing):"}</strong>
                    <br />
                    <em>{'"Subhana Rabbiyal Azeem"'}</em>
                    {" (3x)."}
                  </p>
                  <p>
                    <strong>{"Rising from Ruku:"}</strong>
                    <br />
                    <em>{'"Sami Allahu liman hamidah"'}</em>
                    {"."}
                    <br />
                    <em>{'"Rabbana walakal hamd"'}</em>
                    {"."}
                  </p>
                  <p>
                    <strong>{"In Sujood (Prostration):"}</strong>
                    <br />
                    <em>{'"Subhana Rabbiyal A\'la"'}</em>
                    {" (3x)."}
                  </p>
                  <p>
                    <strong>{"Sitting Between Sujood:"}</strong>
                    <br />
                    <em>
                      {
                        '"Rabbighfir lee, warhamnee, wajburnee, warfa\'nee, warzuqnee, wahdinee."'
                      }
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(117, event)}
              >
                <span>{"Tashahhud & Durood"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-h4">
                    {"At-Tahiyyat (First & Last Sitting)"}
                  </div>
                  <p>
                    <em>
                      {
                        "\"Attahiyyatu lillahi was-salawatu wat-tayyibat. Assalamu 'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh. Assalamu 'alayna wa 'ala 'ibadillahis-saliheen. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.\""
                      }
                    </em>
                  </p>
                  <div className="guide-h4">
                    {"Durood Ibrahim (Last Sitting)"}
                  </div>
                  <p>
                    <em>
                      {
                        "\"Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid.\""
                      }
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(118, event)}
              >
                <span>{"Dua Qunut (Witr)"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>{"Recited in the last Raka'at of Witr prayer."}</p>
                  <p>
                    <em>
                      {
                        "\"Allahummahdini fiman hadait, wa a'fini fiman afait, wa tawallani fiman tawallait, wa barik li fima a'tait, wa qini sharra ma qadait, fa innaka taqdi wa la yuqda alaik, wa innahu la yadhillu man walait, [wa la ya'izzu man adait], tabarakta Rabbana wa ta'alait.\""
                      }
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(119, event)}
              >
                <span>{"Adhan & Iqama"}</span>
                <div className="accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-h4">{"1. Standard Adhan"}</div>
                  <p>{"Recited for Dhuhr, Asr, Maghrib, and Isha."}</p>
                  <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
                    <li>
                      <strong>{"Allahu Akbar"}</strong>
                      {" (4x)"}
                      <br />
                      <span style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                        {"Allah is the Greatest."}
                      </span>
                    </li>
                    <li>
                      <strong>{"Ash-hadu an la ilaha illallah"}</strong>
                      {" (2x)"}
                      <br />
                      <span style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                        {"I bear witness that there is no god but Allah."}
                      </span>
                    </li>
                    <li>
                      <strong>{"Ash-hadu anna Muhammadar-Rasulullah"}</strong>
                      {" (2x)"}
                      <br />
                      <span style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                        {
                          "I bear witness that Muhammad is the Messenger of Allah."
                        }
                      </span>
                    </li>
                    <li>
                      <strong>{"Hayya 'alas-salah"}</strong>
                      {" (2x)"}
                      <br />
                      <span style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                        {"Come to prayer."}
                      </span>
                    </li>
                    <li>
                      <strong>{"Hayya 'alal-falah"}</strong>
                      {" (2x)"}
                      <br />
                      <span style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                        {"Come to success."}
                      </span>
                    </li>
                    <li>
                      <strong>{"Allahu Akbar"}</strong>
                      {" (2x)"}
                      <br />
                      <span style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                        {"Allah is the Greatest."}
                      </span>
                    </li>
                    <li>
                      <strong>{"La ilaha illallah"}</strong>
                      {" (1x)"}
                      <br />
                      <span style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                        {"There is no god but Allah."}
                      </span>
                    </li>
                  </ul>
                  <div className="guide-h4">{"2. Fajr Adhan (Morning)"}</div>
                  <p>
                    {"Same as above, but after saying "}
                    <em>{'"Hayya \'alal-falah"'}</em>
                    {", the Muazzin adds:"}
                  </p>
                  <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
                    <li>
                      <strong>{"As-salatu khayrun minan-nawm"}</strong>
                      {" (2x)"}
                      <br />
                      <span style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                        {"Prayer is better than sleep."}
                      </span>
                    </li>
                  </ul>
                  <div className="guide-h4">{"3. The Iqama"}</div>
                  <p>
                    {
                      "Recited immediately before the prayer starts to signal the congregation to stand."
                    }
                  </p>
                  <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
                    <li>
                      <strong>{"Allahu Akbar"}</strong>
                      {" (2x)"}
                    </li>
                    <li>
                      <strong>{"Ash-hadu an la ilaha illallah"}</strong>
                      {" (1x)"}
                    </li>
                    <li>
                      <strong>{"Ash-hadu anna Muhammadar-Rasulullah"}</strong>
                      {" (1x)"}
                    </li>
                    <li>
                      <strong>{"Hayya 'alas-salah"}</strong>
                      {" (1x)"}
                    </li>
                    <li>
                      <strong>{"Hayya 'alal-falah"}</strong>
                      {" (1x)"}
                    </li>
                    <li>
                      <strong>{"Qad qamatis-salah"}</strong>
                      {" (2x)"}
                      <br />
                      <span style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                        {"The prayer has begun."}
                      </span>
                    </li>
                    <li>
                      <strong>{"Allahu Akbar"}</strong>
                      {" (2x)"}
                    </li>
                    <li>
                      <strong>{"La ilaha illallah"}</strong>
                      {" (1x)"}
                    </li>
                  </ul>
                  <div className="guide-h4">{"Responses & Dua"}</div>
                  <p>
                    <strong>{"Response:"}</strong>
                    {" Repeat what the Muazzin says, except for "}
                    <em>{'"Hayya \'ala..."'}</em>
                    {", say "}
                    <strong>{'"La hawla wa la quwwata illa billah"'}</strong>
                    {"."}
                  </p>
                  <p>
                    <strong>{"Fajr phrase:"}</strong>
                    {" For "}
                    <em>{"“As-salatu khayrun minan-nawm”"}</em>
                    {
                      ", many teachers advise repeating the mu’adhdhin’s words. Follow the response taught by your local scholar."
                    }
                  </p>
                  <p>
                    <strong>{"Dua After Adhan:"}</strong>
                    <br />
                    <em>
                      {
                        "\"Allahumma Rabba hadhihid-da'watit-tammah, was-salatil-qa'imah, ati Muhammadanil-wasilata wal-fadilah, wab'ath-hu maqaman mahmoodanil-ladhee wa'adtah.\""
                      }
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="view-newborn"
        className="guide-modal"
        data-guide-page=""
        aria-hidden="true"
        aria-labelledby="newborn-guide-title"
      >
        <div className="modal-card">
          <div className="modal-handle-bar"></div>
          <div className="modal-header-row">
            <h3 className="modal-title" id="newborn-guide-title">
              <i
                className="fa-solid fa-baby"
                style={{ color: "#0f766e" }}
                aria-hidden="true"
              ></i>
              {" Newborn Care"}
            </h3>
            <button
              type="button"
              className="modal-close-btn guide-back-btn"
              onClick={(event) => dispatch(120, event)}
              aria-label="Back to guides"
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
              <span>{"Guides"}</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="guide-intro">
              <strong>{"Birth to 40 days:"}</strong>
              {
                " Islam does not prescribe an elaborate 40-day programme for the baby. The established newborn practices are concentrated around birth and the seventh day. “Forty days” mainly relates to the mother’s postpartum bleeding ("
              }
              <em>{"nifās"}</em>
              {
                "), not a special ritual period for the child.\n                "
              }
            </div>
            <div
              className="newborn-summary"
              aria-label="Newborn care guide at a glance"
            >
              <div className="newborn-summary-card">
                <i className="fa-solid fa-shield-heart" aria-hidden="true"></i>
                <strong>{"Safety first"}</strong>
                <small>{"Health, warmth, feeding and medical care"}</small>
              </div>
              <div className="newborn-summary-card">
                <i className="fa-solid fa-calendar-day" aria-hidden="true"></i>
                <strong>{"Day seven"}</strong>
                <small>{"ʿAqīqah, naming, shaving and charity"}</small>
              </div>
              <div className="newborn-summary-card">
                <i
                  className="fa-solid fa-scale-balanced"
                  aria-hidden="true"
                ></i>
                <strong>{"Know the difference"}</strong>
                <small>{"Sunnah, scholarly difference and custom"}</small>
              </div>
            </div>
            <div className="newborn-callout warning">
              <strong>{"Scope:"}</strong>
              {
                " This is a mainstream Sunni overview. Some details differ among madhhabs. Medical concerns should be taken to a qualified health professional, and personal rulings to a trusted scholar familiar with the family’s school and circumstances."
              }
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(121, event)}
              >
                <span>{"Practical timeline at a glance"}</span>
                <div className="accordion-icon">
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="newborn-timeline">
                    <div className="newborn-timeline-row">
                      <strong>{"Before birth"}</strong>
                      <span>
                        {
                          "Make duʿā’, prepare good names, arrange safe delivery and postnatal care, and plan maintenance and an affordable ʿaqīqah."
                        }
                      </span>
                    </div>
                    <div className="newborn-timeline-row">
                      <strong>{"At birth"}</strong>
                      <span>
                        {
                          "Protect the baby’s health, thank Allah, make duʿā’, and name the child now if desired. Taḥnīk is optional."
                        }
                      </span>
                    </div>
                    <div className="newborn-timeline-row">
                      <strong>{"First days"}</strong>
                      <span>
                        {
                          "Prioritize feeding, affection, medical assessment, protection and correct legal registration."
                        }
                      </span>
                    </div>
                    <div className="newborn-timeline-row">
                      <strong>{"Day 7"}</strong>
                      <span>
                        {
                          "Name the child if not already named; offer ʿaqīqah if able; shave the head where followed; give the silver-value charity."
                        }
                      </span>
                    </div>
                    <div className="newborn-timeline-row">
                      <strong>{"Days 8–40"}</strong>
                      <span>
                        {
                          "Continue normal care. A postponed ʿaqīqah may be completed later. No new ceremony becomes compulsory."
                        }
                      </span>
                    </div>
                    <div className="newborn-timeline-row">
                      <strong>{"When nifās ends"}</strong>
                      <span>
                        {
                          "The mother performs ghusl and resumes prayer and fasting immediately; she does not wait for day 40."
                        }
                      </span>
                    </div>
                    <div className="newborn-timeline-row">
                      <strong>{"Day 40"}</strong>
                      <span>
                        {"No special ritual is required for the baby."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(122, event)}
              >
                <span>{"Before birth: prepare with care"}</span>
                <div className="accordion-icon">
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <ul className="newborn-checklist">
                    <li>{"Make duʿā’ for a righteous and healthy child."}</li>
                    <li>{"Select several lawful names with good meanings."}</li>
                    <li>
                      {
                        "Prepare financially for the child’s maintenance and a possible ʿaqīqah without harmful debt."
                      }
                    </li>
                    <li>
                      {"Arrange safe medical delivery and postnatal care."}
                    </li>
                    <li>
                      {
                        "Avoid fortune-tellers, charms, superstition and rituals with no Islamic foundation."
                      }
                    </li>
                  </ul>
                  <div className="newborn-callout">
                    {
                      "There is no prescribed Islamic baby shower, pregnancy ceremony or mandatory ritual immediately before delivery."
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(123, event)}
              >
                <span>{"Immediately after birth"}</span>
                <div className="accordion-icon">
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-h4">
                    {"Protect, thank Allah and make duʿā’"}
                  </div>
                  <p>
                    {
                      "The baby’s breathing, warmth, feeding and medical assessment come first. Family may congratulate the parents and ask Allah to bless and protect the child; there is no single compulsory wording."
                    }
                  </p>
                  <p>
                    <strong>{"Traditional supplication:"}</strong>
                    <br />
                    <em>
                      {
                        "Bārakallāhu laka fil-mawhūbi laka, wa shakarta al-Wāhib, wa balagha ashuddahu, wa ruziqta birrahu."
                      }
                    </em>
                  </p>
                  <p>
                    <small>
                      {
                        "Meaning: May Allah bless you in the child granted to you, enable you to thank the Giver, let the child reach maturity, and grant you the child’s righteousness. This wording is traditional, not obligatory."
                      }
                    </small>
                  </p>
                  <div className="guide-h4">{"Naming and lineage"}</div>
                  <p>
                    {
                      "The child may be named on the day of birth or the seventh day. Choose a good meaning; avoid names implying servitude to anyone besides Allah, shameful or arrogant meanings, or a false lineage. Correct registration protects lineage, nationality, inheritance and legal rights."
                    }
                  </p>
                  <div className="guide-h4">{"Taḥnīk"}</div>
                  <p>
                    {
                      "Taḥnīk—rubbing a tiny trace of softened date on the upper palate—is recommended rather than obligatory. It must be hygienic and safe: never place a piece in the baby’s mouth, force it, or create a choking risk."
                    }
                  </p>
                  <div className="guide-h4">{"Adhān in the ear"}</div>
                  <p>
                    {
                      "Many families quietly recite the adhān in the right ear. Scholars differ over the strength of its report, so it is not obligatory. The report for iqāmah in the left ear is considerably weaker. There is no need to shout into the baby’s ear."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(124, event)}
              >
                <span>{"The first seven days: the child’s rights"}</span>
                <div className="accordion-icon">
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "Breastfeeding should be supported where possible and medically appropriate. The child’s care is a shared family responsibility, and the father must support the mother and child financially according to his means."
                    }
                  </p>
                  <ul className="newborn-checklist">
                    <li>{"Adequate feeding and safe accommodation."}</li>
                    <li>
                      {"Clothing, hygiene and appropriate medical treatment."}
                    </li>
                    <li>
                      {
                        "Protection from neglect, crowds, illness and unsafe handling."
                      }
                    </li>
                    <li>
                      {
                        "Emotional affection, gentle handling and equal dignity for sons and daughters."
                      }
                    </li>
                    <li>{"Accurate birth registration and documentation."}</li>
                  </ul>
                  <div className="newborn-source-links">
                    <a
                      href="https://quran.com/2/233"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-solid fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      ></i>
                      {"Qur’an 2:233"}
                    </a>
                    <a
                      href="https://quran.com/33/5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-solid fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      ></i>
                      {"Qur’an 33:5"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(125, event)}
              >
                <span>{"Day seven: ʿAqīqah, shaving and charity"}</span>
                <div className="accordion-icon">
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <div className="guide-h4">{"ʿAqīqah"}</div>
                  <p>
                    {
                      "The commonly recommended offering is two comparable sheep or goats for a boy and one for a girl. According to the majority it is a strongly recommended Sunnah, not an obligation upon a family that cannot afford it. Do not enter harmful debt. A number of scholars accept one animal for a boy where two are difficult."
                    }
                  </p>
                  <p>
                    {
                      "If day seven is missed, many scholars allow it later; some recommend the fourteenth or twenty-first day. The meat may be eaten by the family, gifted to relatives and neighbours, and given to the poor."
                    }
                  </p>
                  <div className="guide-h4">
                    {"Shaving and silver-value charity"}
                  </div>
                  <p>
                    {
                      "Shaving a male newborn’s head on the seventh day is established among the newborn Sunnahs. Scholars differ about girls, so follow a trusted scholar or madhhab. Use a clean instrument and protect the scalp; the hair carries no bad luck or spiritual impurity."
                    }
                  </p>
                  <p>
                    {
                      "It is recommended—not mandatory—to weigh the shaved hair and give the equivalent value of its weight in silver as charity. If exact weighing is impractical, estimate generously."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(126, event)}
              >
                <span>{"Male circumcision"}</span>
                <div className="accordion-icon">
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {"Male circumcision ("}
                    <em>{"khitān"}</em>
                    {
                      ") is among the practices of fiṭrah. Some madhhabs regard it as obligatory and others as an emphasized Sunnah."
                    }
                  </p>
                  <div className="newborn-callout warning">
                    {
                      "There is no universally established requirement that it take place on day seven or within the first 40 days. Timing should account for the child’s health, the family’s madhhab and medical advice."
                    }
                  </div>
                  <p>
                    {
                      "It must be performed by a properly trained medical professional using sterile equipment, safe pain management and suitable follow-up care."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(127, event)}
              >
                <span>{"Days 8–40: steady care, no new ritual"}</span>
                <div className="accordion-icon">
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {
                      "No additional ceremony becomes compulsory during these days. Continue:"
                    }
                  </p>
                  <ul className="newborn-checklist">
                    <li>
                      {
                        "Breastfeeding or appropriate lawful nourishment, cleanliness and affection."
                      }
                    </li>
                    <li>
                      {
                        "Medical check-ups and vaccinations advised by qualified professionals."
                      }
                    </li>
                    <li>
                      {
                        "Duʿā’ and normal Qur’an recitation without inventing a fixed ritual."
                      }
                    </li>
                    <li>
                      {"Protection from illness, crowds and unsafe handling."}
                    </li>
                    <li>
                      {
                        "Registration, legal documentation and preparation for an Islamic upbringing."
                      }
                    </li>
                    <li>
                      {
                        "A postponed ʿaqīqah, if the family chooses and is able."
                      }
                    </li>
                  </ul>
                  <p>
                    {
                      "The child has independent rights, including inheritance whether male or female."
                    }
                  </p>
                  <div className="newborn-source-links">
                    <a
                      href="https://quran.com/4/7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-solid fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      ></i>
                      {"Qur’an 4:7"}
                    </a>
                    <a
                      href="https://quran.com/66/6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-solid fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      ></i>
                      {"Qur’an 66:6"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(128, event)}
              >
                <span>{"What 40 days means for the mother"}</span>
                <div className="accordion-icon">
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>
                    {"The 40-day discussion usually concerns "}
                    <strong>{"nifās"}</strong>
                    {
                      "—postpartum bleeding. While genuine nifās continues, the mother does not perform ṣalāh or fast and does not engage in vaginal intercourse. She may make dhikr and duʿā’, listen to Qur’an and care for her baby."
                    }
                  </p>
                  <div className="newborn-callout">
                    <strong>{"If bleeding stops before day 40"}</strong>
                    {
                      " and she sees the sign of purity, she performs ghusl immediately and resumes prayer and fasting. She does not wait simply because 40 days have not passed."
                    }
                  </div>
                  <p>
                    {
                      "Missed Ramadan fasts are made up later; prayers missed during valid nifās are not made up. Schools differ over the maximum period—some generally use 40 days, while others recognize up to 60. Irregular, interrupted or prolonged bleeding should be discussed with a knowledgeable scholar familiar with her madhhab and a medical professional where needed."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-btn"
                onClick={(event) => dispatch(129, event)}
              >
                <span>{"Customs that are not compulsory"}</span>
                <div className="accordion-icon">
                  <i
                    className="fa-solid fa-chevron-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="panel">
                <div className="panel-content">
                  <p>{"Islam does not require:"}</p>
                  <ul className="newborn-checklist">
                    <li>
                      {"Keeping mother and baby indoors for exactly 40 days."}
                    </li>
                    <li>
                      {
                        "A compulsory fortieth-day feast, bath, haircut or special clothing."
                      }
                    </li>
                    <li>
                      {
                        "Beads, charms, strings or religious ceremonies for the hair or umbilical cord."
                      }
                    </li>
                    <li>
                      {
                        "Refusing all visitors solely because the baby has not reached 40 days."
                      }
                    </li>
                    <li>
                      {
                        "Waiting until day 40 for ghusl after nifās has already ended."
                      }
                    </li>
                  </ul>
                  <div className="newborn-callout warning">
                    {
                      "A sensible temporary limit on visitors for recovery or infection control is a health decision—not a fixed religious ritual."
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="reference-line">
              {
                "Educational guide only. Follow qualified medical advice for the health of mother and baby, and consult a trusted scholar for individual rulings or differences between schools."
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
