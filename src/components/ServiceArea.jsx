const cities = [
  "Frisco",
  "Prosper",
  "McKinney",
  "Plano",
  "Celina",
  "Little Elm",
  "The Colony",
  "Aubrey",
  "Denton",
  "Dallas",
  "Fort Worth",
  "Throughout Texas",
];

function ServiceArea() {
  return (
    <section className="service-section" id="service-area">

      <div className="service-copy">

        <p className="eyebrow">
          North Texas Roots. Statewide Reach.
        </p>

        <h2>
          Local Guidance.
          <br />
          Serving Homebuyers Across Texas.
        </h2>

        <p>
          I'm proud to call North Texas home and to help buyers,
          homeowners, veterans, and real estate investors throughout
          the state. Whether you're purchasing your first home or your
          fifth, you'll receive the same personal guidance and clear
          communication every step of the way.
        </p>

        <a
          className="text-link"
          href="#contact"
        >
          Let's Talk About Your Mortgage Game Plan™
          <span aria-hidden="true"> →</span>
        </a>

      </div>

      <div
        className="city-grid"
        aria-label="Texas service areas"
      >
        {cities.map((city) => (
          <span key={city}>{city}</span>
        ))}
      </div>

    </section>
  );
}

export default ServiceArea;