const STEPS = [
  {
    num: "1",
    title: "Configura tu negocio",
    desc: "Añade tu nombre, horarios, colores y cómo quieres recibir las reservas. Tarda menos de 5 minutos.",
  },
  {
    num: "2",
    title: "Comparte o incrusta",
    desc: "Copia el enlace y compártelo por WhatsApp, redes o email. O pega el snippet en tu web en dos líneas.",
  },
  {
    num: "3",
    title: "Recibe y gestiona",
    desc: "Cada reserva llega a tu WhatsApp o email al instante. Consúltalas en el panel siempre que quieras.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="como-funciona">
      <div className="container">
        <div className="how-head">
          <span className="section-label">⚡ Cómo funciona</span>
          <h2 className="section-title">En marcha en 3 pasos</h2>
          <p className="section-sub">
            No necesitas saber programar ni tener experiencia técnica.
          </p>
        </div>
        <div className="how-steps">
          {STEPS.map((s) => (
            <div key={s.num} className="how-step">
              <div className="how-step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
