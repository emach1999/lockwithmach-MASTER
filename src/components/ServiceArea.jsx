const cities = ["Frisco", "Prosper", "McKinney", "Plano", "Celina", "Little Elm", "The Colony", "Aubrey", "Denton", "Dallas", "Fort Worth", "Throughout Texas"];

function ServiceArea() {
  return (
    <section className="service-section" id="service-area">
      <div className="service-copy">
        <p className="eyebrow">North Texas Roots. Statewide Reach.</p>
        <h2>Local Guidance for Borrowers Across Texas.</h2>
        <p>Based in North Texas and serving homebuyers, homeowners, veterans, and investors throughout the state.</p>
        <a className="text-link" href="#contact">Talk through your scenario <span aria-hidden="true">→</span></a>
      </div>
      <div className="city-grid" aria-label="Texas service areas">
        {cities.map((city) => <span key={city}>{city}</span>)}
      </div>
    </section>
  );
}

export default ServiceArea;
