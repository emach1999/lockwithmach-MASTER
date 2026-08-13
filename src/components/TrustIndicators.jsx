import {
  GraduationCap,
  Lightbulb,
  Landmark,
  Handshake,
} from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "26 Years Educating",
    text: "A career built around simplifying complex concepts and helping people succeed.",
  },
  {
    icon: Lightbulb,
    title: "Strategy First",
    text: "Every mortgage starts with a personalized Mortgage Game Plan™ built around your goals.",
  },
  {
    icon: Landmark,
    title: "More Loan Options",
    text: "Conventional, FHA, VA, USDA, investment, refinance, and specialized mortgage solutions.",
  },
  {
    icon: Handshake,
    title: "Serving Texas",
    text: "Personal guidance, clear communication, and support from our first conversation through closing.",
  },
];

function TrustIndicators() {
  return (
    <section className="trust-strip">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article
            className="trust-item"
            key={item.title}
          >
            <div className="trust-icon">
              <Icon size={34} strokeWidth={2.2} />
            </div>

            <strong>{item.title}</strong>

            <span>{item.text}</span>
          </article>
        );
      })}
    </section>
  );
}

export default TrustIndicators;