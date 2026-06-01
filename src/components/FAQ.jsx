import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  { q: "¿Necesito instalar algo?", a: "No. Solo necesitas pegar dos líneas de código en tu web (o usar el enlace directo). No hay plugins, no hay cuentas de terceros y no necesitas saber programar." },

  { q: "¿Cómo recibo las reservas por WhatsApp?", a: "Por WhatsApp te llega un mensaje listo para leer con todos los datos del cliente y la reserva." },

  { q: "¿Cómo gestiono las reservas por Email?", a: "Recibe cada reserva en tu bandeja de entrada y accede a un panel privado donde podrás consultar el historial y gestionar todas tus reservas." },

  { q: "¿Puedo usar Reservaq en varias webs o negocios?", a: "Sí. Puedes crear una configuración diferente para cada negocio, adaptando horarios, servicios y ajustes según tus necesidades." },

  { q: "¿Los clientes necesitan crear una cuenta?", a: "No. El cliente solo tiene que rellenar el formulario de reserva, sin registros, contraseñas ni pasos adicionales." },


  { q: "¿Mis datos y los de mis clientes están seguros?", a: "Sí. Reservaq almacena la información de forma segura y el acceso al panel está protegido para que solo tú puedas gestionar tus reservas." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
         
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
