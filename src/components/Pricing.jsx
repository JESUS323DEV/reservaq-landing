const WA_FEATURES = [
  "Notificaciones instantáneas",
  "Responde desde tu móvil",
  "Ideal para negocios que buscan rapidez",
  "Sin necesidad de iniciar sesión",
  "Perfecto para equipos pequeños",
];

const EMAIL_FEATURES = [
  "Resumen detallado en tu email",
  "Ideal si prefieres gestionar desde tu PC",
  "Historial organizado de reservas",
  "Compatible con cualquier dispositivo",
  "Mayor control desde tu bandeja de entrada",
];

const TRUST = [
  { icon: <ShieldIcon />, title: "Sin compromiso", desc: "Te contamos todo sin compromiso." },
  { icon: <ClockIcon />, title: "Respuestas rápidas", desc: "Te respondemos en menos de 24h." },
  { icon: <UsersIcon />, title: "Para todo tipo de negocios", desc: "Desde pequeños negocios hasta grandes equipos." },
];

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.669 4.8 1.832 6.795L2 30l7.42-1.81A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.4a11.34 11.34 0 0 1-5.77-1.573l-.413-.246-4.406 1.074 1.11-4.284-.27-.44A11.36 11.36 0 0 1 4.6 16c0-6.29 5.11-11.4 11.4-11.4S27.4 9.71 27.4 16 22.29 27.4 16 27.4zm6.26-8.532c-.343-.172-2.03-1.002-2.344-1.116-.315-.115-.544-.172-.773.172-.229.343-.888 1.116-1.088 1.345-.2.229-.4.258-.743.086-.343-.172-1.449-.534-2.76-1.703-1.02-.91-1.708-2.034-1.908-2.377-.2-.343-.021-.528.15-.7.155-.153.343-.4.515-.6.172-.2.229-.343.343-.572.115-.229.057-.43-.029-.6-.086-.172-.773-1.864-1.059-2.551-.279-.67-.562-.579-.773-.59l-.658-.011a1.263 1.263 0 0 0-.915.43c-.315.343-1.202 1.174-1.202 2.865s1.23 3.324 1.401 3.553c.172.229 2.42 3.695 5.863 5.18.82.354 1.46.565 1.958.723.823.261 1.572.224 2.163.136.66-.099 2.03-.829 2.316-1.63.286-.8.286-1.487.2-1.63-.085-.143-.314-.229-.657-.4z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="reception" id="precios">
      <div className="container">

        <div className="reception-head">
          <span className="reception-tag">💬 ¿Cómo te enviamos las reservas?</span>
          <h2 className="section-title">
            <span className="gradient-text">Tú eliges</span> cómo recibir tus reservas
          </h2>
          <p className="section-sub">WhatsApp o Email. Tú decides lo que mejor se adapta a tu negocio.</p>
        </div>

        <div className="reception-grid">

          {/* WhatsApp */}
          <div className="rc-card">
            <div className="rc-card-top">
              <div className="rc-icon rc-icon--wa"><WaIcon /></div>
              <span className="rc-recommended">Opción recomendada</span>
            </div>
            <h3 className="rc-title">Recepción por WhatsApp</h3>
            <p className="rc-desc">Recibe todas tus reservas directamente en tu WhatsApp en tiempo real.</p>
            <hr className="rc-sep" />
            <ul className="rc-features">
              {WA_FEATURES.map(f => (
                <li key={f} className="rc-feature">
                  <span className="rc-check rc-check--wa">✓</span>{f}
                </li>
              ))}
            </ul>
            <button type="button" className="rc-btn rc-btn--wa">
              <WaIcon />Solicitar más información por WhatsApp →
            </button>
          </div>

          {/* Email */}
          <div className="rc-card">
            <div className="rc-card-top">
              <div className="rc-icon rc-icon--email"><EmailIcon /></div>
            </div>
            <h3 className="rc-title">Recepción por Email</h3>
            <p className="rc-desc">Recibe todas las reservas en tu correo electrónico de forma organizada.</p>
            <hr className="rc-sep" />
            <ul className="rc-features">
              {EMAIL_FEATURES.map(f => (
                <li key={f} className="rc-feature">
                  <span className="rc-check rc-check--email">✓</span>{f}
                </li>
              ))}
            </ul>
            <button type="button" className="rc-btn rc-btn--email">
              <EmailIcon />Solicitar más información por Email →
            </button>
          </div>

        </div>

        <div className="reception-trust">
          {TRUST.map(({ icon, title, desc }) => (
            <div key={title} className="rt-item">
              <span className="rt-icon">{icon}</span>
              <div>
                <p className="rt-title">{title}</p>
                <p className="rt-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
}
