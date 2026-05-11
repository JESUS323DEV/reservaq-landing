const FREE_FEATURES = [
  "Widget embebible en tu web",
  "Formulario personalizable",
  "Horarios y turnos configurables",
  "Recepción por WhatsApp",
  "Panel de gestión de reservas",
  "Código QR descargable",
  "Hasta 3 preguntas extra",
];

const PRO_FEATURES = [
  "Todo lo del plan Gratuito",
  "Recepción por Email",
  "Preguntas extra ilimitadas",
  "Múltiples empleados / recursos",
  "Google Calendar sync",
  "Recordatorios automáticos",
  "Soporte prioritario",
];

export default function Pricing() {
  return (
    <section className="pricing" id="precios">
      <div className="container">
        <div className="pricing-head">
          <span className="section-label">💎 Precios</span>
          <h2 className="section-title">Simple y sin sorpresas</h2>
          <p className="section-sub">
            Empieza gratis hoy. Sube cuando necesites más.
          </p>
        </div>
        <div className="pricing-grid">
          {/* Free */}
          <div className="pricing-card">
            <div className="pricing-plan">Gratuito</div>
            <div className="pricing-price">0€ <span>/ mes</span></div>
            <div className="pricing-desc">Para empezar sin riesgos. Sin tarjeta.</div>
            <ul className="pricing-features">
              {FREE_FEATURES.map((f) => (
                <li key={f}><span className="pricing-check">✓</span>{f}</li>
              ))}
            </ul>
            <a href="#" className="btn btn-outline">Empezar gratis</a>
          </div>

          {/* Pro */}
          <div className="pricing-card pricing-card--popular">
            <div className="pricing-badge">Más popular</div>
            <div className="pricing-plan">Pro</div>
            <div className="pricing-price gradient-text">9€ <span style={{ WebkitTextFillColor: "var(--text-muted)" }}>/ mes</span></div>
            <div className="pricing-desc">Para negocios que quieren escalar.</div>
            <ul className="pricing-features">
              {PRO_FEATURES.map((f) => (
                <li key={f}><span className="pricing-check">✓</span>{f}</li>
              ))}
            </ul>
            <a href="#" className="btn btn-primary">Probar 14 días gratis</a>
          </div>
        </div>
      </div>
    </section>
  );
}
