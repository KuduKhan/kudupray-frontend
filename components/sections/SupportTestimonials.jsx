"use client";

const testimonials = [
  {
    name: "Faiza Mohamed",
    quote: "KuduPray gives me a calm, simple place to return to prayer, remembrance, and reflection each day.",
  },
  {
    name: "Issa Mush",
    quote: "The prayer tools are clear and thoughtful. It feels made for everyday use, without distractions.",
  },
  {
    name: "Yunus Namb",
    quote: "I appreciate having the Qur'an reader, duas, and prayer guidance together in one peaceful companion.",
  },
  {
    name: "Karim Omar",
    quote: "KuduPray makes it easier to keep small moments of worship present throughout a busy day.",
  },
  {
    name: "Abdikhafar Isaack",
    quote: "A clean and useful companion for prayer times, learning, and staying connected to what matters.",
  },
];

export default function SupportTestimonials() {
  return (
    <section className="support-testimonials" aria-label="Testimonials preview">
      <div className="support-testimonials-heading">
        <span>Community voices</span>
      </div>
      <div className="support-testimonials-window" tabIndex={0} aria-label="Preview quotes; focus to pause scrolling">
        <div className="support-testimonials-track">
          {[0, 1].map(copy => <div className="support-testimonials-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {testimonials.map(({ name, quote }) => <p className="support-testimonial" key={name}>
              <i className="fa-solid fa-quote-left" aria-hidden="true" />
              <span><q>{quote}</q><strong>{name}</strong></span>
            </p>)}
          </div>)}
        </div>
      </div>
    </section>
  );
}
