import HeroMock from "./HeroMock";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">

          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Plataforma todo en uno
            </div>

            <h1>
              La forma más inteligente de gestionar{" "}
              <span className="gradient-text">tus reservas</span>
            </h1>

            <p className="hero-sub">
              Reserva, organiza y haz crecer tu negocio desde una sola plataforma.
              Sin instalaciones, sin complicaciones.
            </p>

            <div className="hero-actions">
              <a href="https://app.reservaq.com/reservaq" className="btn btn-primary">Probar gratis →</a>
              <a href="#como-funciona" className="btn btn-outline">Ver cómo funciona</a>
            </div>


          </div>

          <div className="hero-mock-wrap">
            <HeroMock />
          </div>

        </div>
      </div>
    </section>
  );
}
