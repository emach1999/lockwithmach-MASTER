import {
  GraduationCap,
  Lightbulb,
  Landmark,
  Handshake,
} from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "26+ Years",
    text: "Teaching, coaching, and helping people make confident financial decisions.",
  },
  {
    icon: Lightbulb,
    title: "Strategy First",
    text: "Every mortgage starts with a personalized Mortgage Game Plan™ designed around your goals.",
  },
  {
    icon: Landmark,
    title: "Mortgage Solutions",
    text: "From first homes to VA loans, refinancing, and investment properties—we'll find the right fit.",
  },
  {
    icon: Handshake,
    title: "Serving Texas",
    text: "Honest advice, responsive communication, and guidance from application to closing.",
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