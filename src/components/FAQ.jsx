import { useState } from "react";

const FAQS = [
  {
    q: "¿Necesito instalar algo?",
    a: "No. Solo necesitas pegar dos líneas de código en tu web (o usar el enlace directo). No hay plugins, no hay cuentas de terceros y no necesitas saber programar.",
  },
  {
    q: "¿Cómo recibo las reservas?",
    a: "Por WhatsApp (te llega un mensaje ya formateado con todos los datos) o por Email. Tú eliges el modo en la configuración y puedes cambiarlo cuando quieras.",
  },
  {
    q: "¿Puedo usar TurnoYa en varias webs o negocios?",
    a: "Sí. Puedes crear una configuración distinta para cada negocio o sucursal. Con el plan Pro puedes gestionar múltiples desde el mismo panel.",
  },
  {
    q: "¿Los clientes necesitan crear una cuenta?",
    a: "No. El cliente rellena el formulario directamente, sin registro ni contraseñas. Es tan sencillo como rellenar un formulario de papel.",
  },
  {
    q: "¿Qué pasa si quiero cancelar el plan Pro?",
    a: "Puedes cancelar en cualquier momento desde tu panel, sin permanencia. Al cancelar pasas al plan gratuito sin perder tu configuración.",
  },
  {
    q: "¿Mis datos y los de mis clientes están seguros?",
    a: "Sí. Las reservas se almacenan de forma segura y no compartimos datos con terceros. Puedes exportarlos o eliminarlos cuando quieras.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-head">
          <span className="section-label">❓ Preguntas frecuentes</span>
          <h2 className="section-title">Resolvemos tus dudas</h2>
          <p className="section-sub">
            Si no encuentras lo que buscas, escríbenos y te respondemos en minutos.
          </p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <span className="faq-chevron">⌄</span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
