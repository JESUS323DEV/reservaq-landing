import { Zap, Copy, Calendar, Bell } from "lucide-react";

function Step1Mock() {
  const nav = ["General", "Horarios", "Servicios", "Formulario", "Notificaciones", "Apariencia"];
  return (
    <div className="mt-5 rounded-xl border border-[#daeeff] overflow-hidden">
      <div className="flex">
        <div className="bg-[#f8fafd] border-r border-[#daeeff] py-3 px-2 space-y-0.5 shrink-0">
          {nav.map((item, i) => (
            <div
              key={item}
              className={`text-[9px] px-2 py-1.5 rounded-md flex items-center gap-1.5 whitespace-nowrap ${
                i === 0 ? "bg-[#3a8fe8]/10 text-[#3a8fe8] font-semibold" : "text-[#9ca3af]"
              }`}
            >
              <span className={`w-2 h-2 rounded-sm shrink-0 ${i === 0 ? "bg-[#3a8fe8]" : "bg-[#d1d5db]"}`} />
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 p-3 space-y-2 bg-white">
          <div>
            <p className="text-[9px] text-[#9ca3af] mb-1">Nombre del negocio</p>
            <div className="border border-[#daeeff] rounded px-2 py-1 text-[10px] text-[#0F0A1E]">Estudio Bella</div>
          </div>
          <div>
            <p className="text-[9px] text-[#9ca3af] mb-1">Horario</p>
            <div className="border border-[#daeeff] rounded px-2 py-1 text-[10px] text-[#0F0A1E] mb-1">Lunes – Viernes</div>
            <div className="border border-[#daeeff] rounded px-2 py-1 text-[10px] text-[#0F0A1E]">09:00 – 20:00</div>
          </div>
          <div>
            <p className="text-[9px] text-[#9ca3af] mb-1">Color principal</p>
            <div className="border border-[#daeeff] rounded px-2 py-1 flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#2563EB] shrink-0" />
              <span className="text-[10px] text-[#0F0A1E]">#2563EB</span>
            </div>
          </div>
          <button className="w-full bg-[#3a8fe8] text-white text-[9px] font-semibold py-1.5 rounded">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}

function Step2Mock() {
  const socials = [
    { bg: "bg-green-500", label: "W" },
    { bg: "bg-[#E1306C]", label: "In" },
    { bg: "bg-[#1877F2]", label: "f" },
    { bg: "bg-[#6B7280]", label: "✉" },
    { bg: "bg-[#9ca3af]", label: "⚲" },
  ];
  return (
    <div className="mt-5 rounded-xl border border-[#daeeff] p-4 bg-white space-y-3">
      <div>
        <p className="text-[9px] text-[#9ca3af] mb-1">Enlace de reservas</p>
        <div className="flex items-center border border-[#daeeff] rounded-lg px-2 py-1.5 gap-1">
          <span className="flex-1 text-[9px] text-[#6B7280] truncate">https://reservaq.com/tu-negocio</span>
          <Copy size={10} className="text-[#3a8fe8] shrink-0" />
        </div>
      </div>
      <div>
        <p className="text-[9px] text-[#9ca3af] mb-1.5">Compartir por</p>
        <div className="flex gap-1.5">
          {socials.map(({ bg, label }) => (
            <div key={label} className={`w-7 h-7 rounded-full ${bg} flex items-center justify-center text-white text-[9px] font-bold shrink-0`}>
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 border-t border-[#e5eaf3]" />
        <span className="text-[9px] text-[#9ca3af]">o</span>
        <div className="flex-1 border-t border-[#e5eaf3]" />
      </div>
      <div>
        <p className="text-[9px] text-[#9ca3af] mb-1">Incrustar en tu web</p>
        <div className="bg-[#f8fafd] border border-[#daeeff] rounded-lg p-2">
          <code className="text-[8px] text-[#6B7280] break-all leading-relaxed">
            {'<script src="https://reservaq.com/widget.js"'}
            <br />
            {'  data-id="tu-negocio"></script>'}
          </code>
        </div>
      </div>
    </div>
  );
}

function Step3Mock() {
  const reservations = [
    { name: "María López", date: "24/05/2025 · 17:00", confirmed: true },
    { name: "Carlos García", date: "24/05/2025 · 18:30", confirmed: false },
    { name: "Laura Martínez", date: "25/05/2025 · 10:00", confirmed: true },
    { name: "David Ruiz", date: "25/05/2025 · 12:30", confirmed: false },
  ];
  return (
    <div className="mt-5 relative   md:w-100 md:mx-auto lg:w-auto ">
      <div className="rounded-xl border border-[#daeeff] bg-white overflow-hidden">
        <div className="px-4 py-2.5 border-b border-[#daeeff] flex items-center gap-2">
          <Calendar size={13} className="text-[#3a8fe8]" />
          <span className="text-xs font-bold text-[#0F0A1E]">Reservas</span>
        </div>
        <div className="divide-y divide-[#f0f7ff]">
          {reservations.map((r) => (
            <div key={r.name} className="flex items-center justify-between px-4 py-2">
              <div>
                <p className="text-[10px] font-semibold text-[#0F0A1E]">{r.name}</p>
                <p className="text-[9px] text-[#9ca3af]">{r.date}</p>
              </div>
              <span className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${r.confirmed ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"}`}>
                {r.confirmed ? "Confirmada" : "Pendiente"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -top-3 -right-3 bg-[#dbeafe] rounded-full p-2.5 shadow-sm">
        <div className="relative">
          <Bell size={16} className="text-[#3a8fe8]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
        </div>
      </div>
    </div>
  );
}

function StepArrow() {
  return (
    <div className="hidden lg:flex items-start self-start pt-20 shrink-0 px-2">
      <svg width="52" height="28" viewBox="0 0 52 28" fill="none">
        <path d="M4 18 Q26 3 48 18" stroke="#3a8fe8" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
        <path d="M43 12 L48 18 L42 20" stroke="#3a8fe8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="como-funciona">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0A1E] mb-3">En marcha en 3 pasos</h2>
          <p className="text-lg text-[#6B7280] max-w-lg mx-auto">No necesitas saber programar ni tener experiencia técnica.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-6 lg:gap-0 mb-8">
          <div className="lg:flex-1 bg-white rounded-2xl border border-[#daeeff] p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3a8fe8] text-white text-base font-extrabold flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="text-base font-bold text-[#0F0A1E]">Configura tu negocio</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mt-1">Añade tu nombre, horarios, colores y cómo quieres recibir las reservas. Tarda menos de 5 minutos.</p>
              </div>
            </div>
            <Step1Mock />
          </div>

          <StepArrow />

          <div className="lg:flex-1 bg-white rounded-2xl border border-[#daeeff] p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3a8fe8] text-white text-base font-extrabold flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="text-base font-bold text-[#0F0A1E]">Comparte o incrusta</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mt-1">Obtén tu propio enlace de reservas para compartirlo o integra el formulario directamente en tu web.
</p>
              </div>
            </div>
            <Step2Mock />
          </div>

          <StepArrow />

          <div className="sm:col-span-2 lg:col-auto lg:flex-1 bg-white rounded-2xl border border-[#daeeff] p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3a8fe8] text-white text-base font-extrabold flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="text-base font-bold text-[#0F0A1E]">Recibe y gestiona</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mt-1">Cada reserva llega a tu WhatsApp o email al instante. Consúltalas en el panel siempre que quieras.</p>
              </div>
            </div>
            <Step3Mock />
          </div>
        </div>

        <div className="bg-[#f0f7ff] rounded-2xl border border-[#daeeff] p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#69b4ff]/20 text-[#3a8fe8] flex items-center justify-center shrink-0">
            <Zap size={22} />
          </div>
          <div>
            <p className="font-bold text-[#0F0A1E]">Así de fácil.</p>
            <p className="text-sm text-[#6B7280]">Sin complicaciones. Sin tecnicismos. Empieza a recibir reservas hoy mismo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
