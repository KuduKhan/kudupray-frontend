"use client";

import { dispatch } from "../runtime-events";

export default function IslamicCalendarLayer() {
  return (
    <div
      id="islamic-calendar-layer"
      className="islamic-calendar-layer"
      role="dialog"
      aria-modal="true"
      aria-hidden="true"
      aria-labelledby="islamic-calendar-title"
    >
      <button
        type="button"
        className="islamic-calendar-backdrop"
        onClick={(event) => dispatch(201, event)}
        aria-label="Close Islamic calendar"
      ></button>
      <section className="islamic-calendar-card" role="document">
        <div className="islamic-calendar-header">
          <span className="islamic-calendar-title-icon" aria-hidden="true">
            <i className="fa-solid fa-moon"></i>
          </span>
          <div className="islamic-calendar-heading">
            <span className="islamic-calendar-kicker">
              {"Hijri & Gregorian"}
            </span>
            <h2 id="islamic-calendar-title">{"Islamic Calendar"}</h2>
          </div>
          <button
            type="button"
            className="islamic-calendar-close"
            onClick={(event) => dispatch(202, event)}
            aria-label="Close Islamic calendar"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
        <div className="islamic-calendar-toolbar">
          <button
            type="button"
            className="calendar-nav-button"
            onClick={(event) => dispatch(203, event)}
            aria-label="Previous month"
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <div className="calendar-month-heading">
            <strong id="calendar-gregorian-month">{"Month"}</strong>
            <span id="calendar-hijri-range">{"Hijri month"}</span>
          </div>
          <button
            type="button"
            className="calendar-nav-button"
            onClick={(event) => dispatch(204, event)}
            aria-label="Next month"
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="calendar-today-button"
            onClick={(event) => dispatch(205, event)}
            aria-label="Jump to today"
            title="Jump to today"
          >
            <i
              className="fa-solid fa-location-crosshairs"
              aria-hidden="true"
            ></i>
            {"Today"}
          </button>
        </div>
        <div
          id="calendar-data-status"
          className="calendar-data-status"
          role="status"
          aria-live="polite"
        >
          <i
            className="fa-solid fa-circle-notch fa-spin"
            aria-hidden="true"
          ></i>
          <span>{"Loading verified Hijri dates…"}</span>
        </div>
        <div className="islamic-calendar-layout">
          <div className="calendar-grid-panel">
            <div className="calendar-weekdays" aria-hidden="true">
              <span>{"Sun"}</span>
              <span>{"Mon"}</span>
              <span>{"Tue"}</span>
              <span>{"Wed"}</span>
              <span>{"Thu"}</span>
              <span>{"Fri"}</span>
              <span>{"Sat"}</span>
            </div>
            <div
              id="islamic-calendar-grid"
              className="islamic-calendar-grid"
              aria-label="Calendar dates"
            ></div>
            <div className="calendar-legend">
              <span>
                <i className="calendar-event-dot"></i>
                {"Islamic occasion"}
              </span>
              <span>
                <i className="calendar-today-ring"></i>
                {"Today"}
              </span>
            </div>
          </div>
          <aside className="calendar-details-panel" aria-live="polite">
            <div
              id="calendar-selected-date"
              className="calendar-selected-date"
            ></div>
            <div
              id="calendar-selected-events"
              className="calendar-selected-events"
            ></div>
            <div className="calendar-month-events-wrap">
              <h3>{"Events this month"}</h3>
              <div
                id="calendar-month-events"
                className="calendar-month-events"
              ></div>
            </div>
            <p className="calendar-observance-note">
              <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
              <span>
                {
                  "Hijri dates can vary by one day according to local moon sighting and religious authority. Confirm worship dates with your local mosque."
                }
              </span>
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
