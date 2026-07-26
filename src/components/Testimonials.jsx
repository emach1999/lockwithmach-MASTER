import { MessageCircleMore, BrainCircuit, House } from "lucide-react";

const experiences = [
  {
    icon: MessageCircleMore,
    title: "You'll Always Know What's Happening",
    text: "You'll never wonder where your loan stands. I'll keep you informed with proactive, clear communication from application through closing."
  },
  {
    icon: BrainCircuit,
    title: "You'll Understand Every Decision",
    text: "You don't have to become a mortgage expert. I'll explain your options in plain English so you can make informed, confident decisions."
  },
  {
    icon: House,
    title: "You'll Have a Mortgage Partner",
    text: "Closing isn't the end of our relationship. Whether you're buying again, refinancing, or simply have questions years from now, I'll still be here to help."
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">

      <div className="section-heading section-heading-centered">

        <p className="eyebrow">
          The Lock With Mach Experience
        </p>

        <h2>
          This Is How Buying a Home
          <br />
          Should Feel.
        </h2>

        <p>
          Getting a mortgage shouldn't feel confusing or stressful.
          My goal is to make sure you feel informed, confident, and
          supported from our first conversation through closing day.
        </p>

      </div>

      <div className="testimonials-grid">

        {experiences.map((item) => {
          const Icon = item.icon;

          return (
            <article className="testimonial-card" key={item.title}>

              <div className="testimonial-icon">
                <Icon size={34} strokeWidth={2.2} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </article>
          );
        })}

      </div>

    </section>
  );
}

export default Testimonials;