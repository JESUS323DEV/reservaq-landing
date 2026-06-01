export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <div className="navbar-logo-icon">R</div>
          Reservaq
        </a>

        <ul className="navbar-links">
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#como-funciona">Cómo funciona</a></li>
          <li><a href="#precios">Precios</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <div className="navbar-cta">
          <a href="#precios" className="btn btn-outline" style={{ padding: "9px 20px", fontSize: "14px" }}>
            Ver planes
          </a>
          <a href="https://app.reservaq.com/reservaq" className="btn btn-primary" target="_blank" rel="noreferrer" style={{ padding: "9px 20px", fontSize: "14px" }}>
            Comenzar gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
