"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Faiza Mohamed",
    title: "Community member",
    quote: "KuduPray gives me a calm, simple place to return to prayer, remembrance, and reflection each day.",
  },
  {
    name: "Issa Mush",
    title: "Community member",
    quote: "The prayer tools are clear and thoughtful. It feels made for everyday use, without distractions.",
  },
  {
    name: "Yunus Namb",
    title: "Community member",
    quote: "I appreciate having the Qur'an reader, duas, and prayer guidance together in one peaceful companion.",
  },
  {
    name: "Karim Omar",
    title: "Community member",
    quote: "KuduPray makes it easier to keep small moments of worship present throughout a busy day.",
  },
  {
    name: "Abdikhafar Isaack",
    title: "CEO, Nocturnals Intellisoft",
    quote: "A clean and useful companion for prayer times, learning, and staying connected to what matters.",
  },
];

export default function SupportTestimonials() {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <section className="support-testimonials" aria-label="Testimonials preview">
      <div className="support-testimonials-heading">
        <span>Community voices</span>
      </div>
      <div
        className="support-testimonials-window"
        tabIndex={0}
        aria-label="Testimonials; hover or touch to pause scrolling"
        onPointerEnter={() => setIsInteracting(true)}
        onPointerLeave={() => setIsInteracting(false)}
        onPointerDown={() => setIsInteracting(true)}
        onPointerUp={() => setIsInteracting(false)}
        onPointerCancel={() => setIsInteracting(false)}
      >
        <div className="support-testimonials-track" data-paused={isInteracting}>
          {[0, 1].map(copy => <div className="support-testimonials-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {testimonials.map(({ name, title, quote }) => <article className="support-testimonial" key={name}>
              <div className="support-testimonial-copy"><q>{quote}</q></div>
              <footer className="support-testimonial-person">
                <span className="support-testimonial-title">{title}</span>
                <strong>{name}</strong>
                <i className="fa-solid fa-quote-left" aria-hidden="true" />
              </footer>
            </article>)}
          </div>)}
        </div>
      </div>
    </section>
  );
}
