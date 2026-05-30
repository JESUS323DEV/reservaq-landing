import { Link2, MessageCircle, Calendar, HelpCircle, BarChart2, Smartphone, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: <Link2 size={22} />,
    color: "violet",
    title: "Widget embebible",
    desc: "Copia un snippet de código y el formulario aparece en tu web en segundos. Sin instalaciones ni cuentas adicionales.",
  },
  {
    icon: <MessageCircle size={22} />,
    color: "green",
    title: "WhatsApp o Email",
    desc: "Elige cómo recibes cada reserva. Mensaje de WhatsApp listo para responder o email directo a tu bandeja.",
  },
  {
    icon: <Calendar size={22} />,
    color: "violet",
    title: "Horarios inteligentes",
    desc: "Define tus días de apertura, turnos, intervalos y fechas bloqueadas. Solo se ofrecen huecos disponibles.",
  },
  {
    icon: <HelpCircle size={22} />,
    color: "orange",
    title: "Preguntas personalizadas",
    desc: "Añade campos extra al formulario: texto libre, selección de opciones o campos obligatorios según tu negocio.",
  },
  {
    icon: <BarChart2 size={22} />,
    color: "blue",
    title: "Panel de gestión",
    desc: "Consulta, filtra y gestiona todas las reservas desde un panel privado protegido por PIN.",
  },
  {
    icon: <Smartphone size={22} />,
    color: "teal",
    title: "QR para imprimir",
    desc: "Genera un código QR descargable al instante. Ponlo en tu mostrador y los clientes reservan directamente.",
  },
];

export default function Features() {
  return (
    <section className="features" id="caracteristicas">
      <div className="container">
        <div className="features-head">
          <span className="section-label"><Sparkles size={13} /> Características</span>
          <h2 className="section-title">Todo lo que necesita tu negocio</h2>
          <p className="section-sub">
            Sin suscripciones, sin plugins, sin complicaciones. Funciona desde el primer día.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className={`feature-icon feature-icon--${f.color}`}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
