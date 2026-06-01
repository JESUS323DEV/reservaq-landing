import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  { q: "¿Necesito instalar algo?", a: "No. Solo necesitas pegar dos líneas de código en tu web (o usar el enlace directo). No hay plugins, no hay cuentas de terceros y no necesitas saber programar." },
  { q: "¿Cómo recibo las reservas?", a: "Por WhatsApp (te llega un mensaje ya formateado con todos los datos) o por Email. Tú eliges el modo en la configuración y puedes cambiarlo cuando quieras." },
  { q: "¿Puedo usar Reservaq en varias webs o negocios?", a: "Sí. Puedes crear una configuración distinta para cada negocio o sucursal. Con el plan Pro puedes gestionar múltiples desde el mismo panel." },
  { q: "¿Los clientes necesitan crear una cuenta?", a: "No. El cliente rellena el formulario directamente, sin registro ni contraseñas. Es tan sencillo como rellenar un formulario de papel." },
  { q: "¿Qué pasa si quiero cancelar el plan Pro?", a: "Puedes cancelar en cualquier momento desde tu panel, sin permanencia. Al cancelar pasas al plan gratuito sin perder tu configuración." },
  { q: "¿Mis datos y los de mis clientes están seguros?", a: "Sí. Las reservas se almacenan de forma segura y no compartimos datos con terceros. Puedes exportarlos o eliminarlos cuando quieras." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3a8fe8] bg-[#69b4ff]/10 px-4 py-1.5 rounded-full mb-4">
            <HelpCircle size={13} /> Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0A1E] mb-3">Resolvemos tus dudas</h2>
          <p className="text-lg text-[#6B7280] max-w-lg mx-auto">Si no encuentras lo que buscas, escríbenos y te respondemos en minutos.</p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <div key={i} className="border border-[#daeeff] rounded-2xl overflow-hidden bg-white">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-[#0F0A1E] hover:bg-[#f0f7ff] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <span className={`ml-4 flex-shrink-0 transition-colors ${open === i ? "text-[#69b4ff]" : "text-[#6B7280]"}`}>
                  {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-[#6B7280] leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
