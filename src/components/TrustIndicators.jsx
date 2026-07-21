const indicators = [
  ["Teacher", "Clear explanations"],
  ["Coach", "Strategic preparation"],
  ["Mortgage Pro", "Broad loan options"],
  ["Texas", "Local, personal guidance"],
];

function TrustIndicators() {
  return (
    <section className="trust-strip" aria-label="Why work with Eric Mach">
      {indicators.map(([title, text]) => (
        <div className="trust-item" key={title}>
          <strong>{title}</strong>
          <span>{text}</span>
        </div>
      ))}
    </section>
  );
}

export default TrustIndicators;
