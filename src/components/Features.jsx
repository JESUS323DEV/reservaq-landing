import { Code2, MessageCircle, BarChart2, QrCode, HelpCircle, Shield, Plug, Zap, Lock } from "lucide-react";

const SECONDARY_FEATURES = [
  {
    icon: <MessageCircle size={22} />,
    bg: "bg-green-100",
    color: "text-green-600",
    title: "WhatsApp & Email",
    desc: "Envía y recibe confirmaciones automáticas por WhatsApp o email. Menos no-shows, más clientes contentos.",
  },
  {
    icon: <BarChart2 size={22} />,
    bg: "bg-blue-100",
    color: "text-blue-500",
    title: "Panel de gestión",
    desc: "Controla todas las reservas, clientes y servicios desde un panel privado y protegido.",
  },
  {
    icon: <QrCode size={22} />,
    bg: "bg-amber-100",
    color: "text-amber-500",
    title: "QR para imprimir",
    desc: "Genera un código QR escaneable para que tus clientes reserven directamente desde su móvil.",
  },
  {
    icon: <HelpCircle size={22} />,
    bg: "bg-orange-100",
    color: "text-orange-500",
    title: "Preguntas personalizadas",
    desc: "Añade campos extra al formulario de reserva para conocer mejor a tus clientes antes de cada cita.",
  },
];

const MINI_ITEMS = [
  { icon: <Shield size={18} />, title: "Sin suscripciones", desc: "Paga solo una vez. Sin cuotas mensuales." },
  { icon: <Plug size={18} />, title: "Sin plugins", desc: "No necesitas WordPress ni nada adicional." },
  { icon: <Zap size={18} />, title: "Funciona desde el día 1", desc: "Crea tu sistema de reservas y empieza a recibir citas." },
  { icon: <Lock size={18} />, title: "Seguro y privado", desc: "Tus datos y los de tus clientes siempre protegidos." },
];

function BrowserMock() {
  return (
    <div className="bg-white rounded-xl border border-[#daeeff] shadow-sm">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#daeeff] bg-[#f8fafd] rounded-t-xl">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 bg-[#eef3fb] rounded text-[11px] text-[#9ca3af] px-2 py-0.5 text-center">
          tudominio.com
        </div>
      </div>
      <div className="relative p-4 bg-[#f8fafd] rounded-b-xl min-h-[220px]">
        <div className="pr-[46%] space-y-2 mb-4">
          <div className="h-2.5 bg-[#e5eaf3] rounded w-full" />
          <div className="h-2.5 bg-[#e5eaf3] rounded w-4/5" />
          <div className="h-2.5 bg-[#e5eaf3] rounded w-3/5" />
        </div>
        <div className="pr-[46%] h-24 bg-[#e8eef8] rounded-lg overflow-hidden">
          <svg viewBox="0 0 200 80" className="w-full h-full opacity-30" preserveAspectRatio="xMidYMid slice" fill="#b8c8e8">
            <circle cx="100" cy="28" r="14" />
            <polygon points="0,80 65,30 125,58 168,14 200,80" />
          </svg>
        </div>
        <div className="absolute bottom-8 left-[25%] lg:left-[36%] text-[#3a8fe8] text-[11px] font-semibold leading-snug">
          Se integra<br />en tu web<br />en segundos
          <svg className="mt-1" width="36" height="16" viewBox="0 0 36 16" fill="none">
            <path d="M2 8 Q18 3 34 8" stroke="#3a8fe8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M29 4 L34 8 L29 12" stroke="#3a8fe8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-xl border border-[#daeeff] shadow-lg p-3 w-[42%]">
          <p className="text-xs font-bold text-[#0F0A1E] mb-2">Reserva tu cita</p>
          <div className="space-y-1.5">
            {[
              { label: "Fecha", val: "24/05/2025" },
              { label: "Hora", val: "17:00" },
              { label: "Personas", val: "2 personas" },
            ].map(({ label, val }) => (
              <div key={label} className="border border-[#daeeff] rounded-md px-2 py-1">
                <p className="text-[9px] text-[#9ca3af]">{label}</p>
                <p className="text-[10px] font-semibold text-[#0F0A1E]">{val}</p>
              </div>
            ))}
          </div>
          <button className="mt-2 w-full bg-[#3a8fe8] text-white text-[9px] font-semibold py-1.5 rounded-md">
            Reservar ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-24 bg-[#f0f7ff]" id="caracteristicas">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0A1E] mb-3">
            Todo lo que necesita tu negocio
          </h2>
          <p className="text-lg text-[#6B7280] max-w-lg mx-auto">
            Reservaq incluye todas las herramientas que necesitas para gestionar reservas sin complicaciones.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#daeeff] p-8 mb-6 flex flex-col sm:flex-row gap-12 sm:gap-8 items-center">
          <div className="order-1 sm:order-2 w-full sm:w-[58%]">
            <BrowserMock />
          </div>
          <div className="order-2 sm:order-1 sm:w-[42%] shrink-0">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#69b4ff]/10 text-[#3a8fe8]">
              <Code2 size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#0F0A1E] mb-2">Widget embebible</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Añade el formulario de reservas en tu web en segundos. Sin instalaciones ni cuentas adicionales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {SECONDARY_FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl border border-[#daeeff] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${f.bg} ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-[#0F0A1E] mb-2">{f.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {MINI_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 bg-white rounded-xl border border-[#daeeff] p-4"
            >
              <span className="text-[#3a8fe8] mt-0.5 shrink-0">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-[#0F0A1E]">{item.title}</p>
                <p className="text-xs text-[#6B7280] mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
