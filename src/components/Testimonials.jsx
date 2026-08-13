import { MessageCircleMore, BrainCircuit, House } from "lucide-react";

const experiences = [
  {
    icon: MessageCircleMore,
    title: "You'll Never Wonder What's Next",
    text:
      "Buying a home can feel overwhelming when you're left guessing. I'll keep you informed with proactive updates and clear communication from application to closing.",
  },
  {
    icon: BrainCircuit,
    title: "You'll Understand Every Decision",
    text:
      "You don't need to become a mortgage expert. My job is to explain your options in plain English so you can make confident decisions without unnecessary stress.",
  },
  {
    icon: House,
    title: "You'll Have a Mortgage Partner for Life",
    text:
      "Closing isn't the end of our relationship. Whether you're refinancing, purchasing another home, investing, or simply have questions years from now, I'll still be here to help.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-heading section-heading-centered">
        <p className="eyebrow">
          The Lock With Mach Experience
        </p>

        <h2>
          You Deserve More Than
          <br />
          Just a Loan Officer.
        </h2>

        <p>
          My goal isn't simply to get you to closing. It's to give you the
          confidence that comes from understanding your options, having a
          strategy, and knowing someone is looking out for your best interests
          every step of the way.
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