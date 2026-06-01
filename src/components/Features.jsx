import { Link2, MessageCircle, Calendar, HelpCircle, BarChart2, Smartphone, Sparkles } from "lucide-react";

const FEATURES = [
  { icon: <Link2 size={22} />, bg: "bg-[#69b4ff]/10", color: "text-[#3a8fe8]", title: "Widget embebible", desc: "Copia un snippet de código y el formulario aparece en tu web en segundos. Sin instalaciones ni cuentas adicionales." },
  { icon: <MessageCircle size={22} />, bg: "bg-green-100", color: "text-green-600", title: "WhatsApp o Email", desc: "Elige cómo recibes cada reserva. Mensaje de WhatsApp listo para responder o email directo a tu bandeja." },
  { icon: <Calendar size={22} />, bg: "bg-[#69b4ff]/10", color: "text-[#3a8fe8]", title: "Horarios inteligentes", desc: "Define tus días de apertura, turnos, intervalos y fechas bloqueadas. Solo se ofrecen huecos disponibles." },
  { icon: <HelpCircle size={22} />, bg: "bg-orange-100", color: "text-orange-500", title: "Preguntas personalizadas", desc: "Añade campos extra al formulario: texto libre, selección de opciones o campos obligatorios según tu negocio." },
  { icon: <BarChart2 size={22} />, bg: "bg-blue-100", color: "text-blue-500", title: "Panel de gestión", desc: "Consulta, filtra y gestiona todas las reservas desde un panel privado protegido por PIN." },
  { icon: <Smartphone size={22} />, bg: "bg-teal-100", color: "text-teal-500", title: "QR para imprimir", desc: "Genera un código QR descargable al instante. Ponlo en tu mostrador y los clientes reservan directamente." },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#f0f7ff]" id="caracteristicas">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3a8fe8] bg-[#69b4ff]/10 px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={13} /> Características
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0A1E] mb-3">Todo lo que necesita tu negocio</h2>
          <p className="text-lg text-[#6B7280] max-w-lg mx-auto">Sin suscripciones, sin plugins, sin complicaciones. Funciona desde el primer día.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-[#daeeff] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${f.bg} ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-[#0F0A1E] mb-2">{f.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
