import { MessageCircleMore, BrainCircuit, House } from "lucide-react";

const experiences = [
  {
    icon: MessageCircleMore,
    title: "Clear Communication",
    text:
      "You shouldn't have to wonder what's happening with your loan. I'll provide proactive updates and help you understand what comes next from application through closing.",
  },
  {
    icon: BrainCircuit,
    title: "Answers You Can Understand",
    text:
      "Mortgage terminology can get complicated quickly. I'll explain your options in plain English so you understand the decisions you're making and why they matter.",
  },
  {
    icon: House,
    title: "A Long-Term Mortgage Resource",
    text:
      "My job doesn't end at closing. Whether you're considering a refinance, buying another home, investing, or simply have a mortgage question in the future, I want to be the person you call.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-heading section-heading-centered">
        <p className="eyebrow">The Lock With Mach Experience</p>

        <h2>
          More Than a Transaction.
          <br />
          A Better Mortgage Experience.
        </h2>

        <p>
          My goal is to make the mortgage process easier to understand and
          easier to navigate—with clear communication, thoughtful guidance,
          and a strategy built around your goals.
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