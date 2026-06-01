import { Shield, Clock, Users, Mail } from "lucide-react";

const WA_FEATURES = [
  "Las reservas llegan al instante",
  "Gestiona todo desde WhatsApp",
  "Sin aplicaciones adicionales",
  "Ideal para el día a día",
  "Rápido y fácil de usar",
];

const EMAIL_FEATURES = [
  "Recibe las reservas en tu bandeja de entrada",
  "Consulta el historial cuando lo necesites",
  "Gestiona todo desde tu panel privado",
  "Información organizada y fácil de localizar",
  "Mayor control sobre cada reserva",
];

const TRUST = [
  { icon: <Shield size={20} />, title: "Sin compromiso", desc: "Te contamos todo sin compromiso." },
  { icon: <Clock size={20} />, title: "Respuestas rápidas", desc: "Te respondemos en menos de 24h." },
  { icon: <Users size={20} />, title: "Para todo tipo de negocios", desc: "Desde pequeños negocios hasta grandes equipos." },
];

function WaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="white">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.669 4.8 1.832 6.795L2 30l7.42-1.81A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.4a11.34 11.34 0 0 1-5.77-1.573l-.413-.246-4.406 1.074 1.11-4.284-.27-.44A11.36 11.36 0 0 1 4.6 16c0-6.29 5.11-11.4 11.4-11.4S27.4 9.71 27.4 16 22.29 27.4 16 27.4zm6.26-8.532c-.343-.172-2.03-1.002-2.344-1.116-.315-.115-.544-.172-.773.172-.229.343-.888 1.116-1.088 1.345-.2.229-.4.258-.743.086-.343-.172-1.449-.534-2.76-1.703-1.02-.91-1.708-2.034-1.908-2.377-.2-.343-.021-.528.15-.7.155-.153.343-.4.515-.6.172-.2.229-.343.343-.572.115-.229.057-.43-.029-.6-.086-.172-.773-1.864-1.059-2.551-.279-.67-.562-.579-.773-.59l-.658-.011a1.263 1.263 0 0 0-.915.43c-.315.343-1.202 1.174-1.202 2.865s1.23 3.324 1.401 3.553c.172.229 2.42 3.695 5.863 5.18.82.354 1.46.565 1.958.723.823.261 1.572.224 2.163.136.66-.099 2.03-.829 2.316-1.63.286-.8.286-1.487.2-1.63-.085-.143-.314-.229-.657-.4z" />
    </svg>
  );
}

function PhoneMock() {
  return (
    <div className="mx-auto w-[152px] shrink-0">
      <div className="bg-[#111] rounded-[2rem] p-[5px] shadow-xl">
        <div className="bg-white rounded-[1.6rem] overflow-hidden">
          <div className="bg-[#111] h-5 flex items-center justify-center">
            <div className="w-12 h-3 bg-[#111] rounded-full" />
          </div>
          <div className="bg-[#128C7E] px-2.5 py-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <WaIcon />
            </div>
            <div>
              <p className="text-[9px] font-bold text-white leading-none">Reservaq</p>
              <p className="text-[7px] text-white/70 mt-0.5">en línea</p>
            </div>
          </div>
          <div className="bg-[#ECE5DD] px-2 py-2.5">
            <div className="text-center text-[7px] text-[#6B7280] mb-2">Hoy</div>
            <div className="bg-white rounded-lg rounded-tl-none px-2 py-1.5 shadow-sm mb-2">
              <p className="text-[8px] font-bold text-[#0F0A1E] mb-1">Nueva reserva 🎉</p>
              <div className="space-y-0.5">
                <p className="text-[7px] text-[#0F0A1E]">👤 Cliente: María López</p>
                <p className="text-[7px] text-[#0F0A1E]">📅 Fecha: 24/05/2025</p>
                <p className="text-[7px] text-[#0F0A1E]">🕐 Hora: 17:00</p>
                <p className="text-[7px] text-[#0F0A1E]">✂️ Servicio: Corte de pelo</p>
                <p className="text-[7px] text-[#0F0A1E]">👥 Personas: 2</p>
              </div>
              <p className="text-right text-[6px] text-[#9ca3af] mt-1">17:00</p>
            </div>
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-2 py-1.5 shadow-sm max-w-[80%]">
                <p className="text-[7px] text-[#0F0A1E]">¡Reserva confirmada! ✅</p>
                <p className="text-right text-[6px] text-[#9ca3af] mt-0.5">17:01</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f0f2f5] px-2 py-1.5 flex items-center gap-1 border-t border-[#ddd]">
            <div className="flex-1 bg-white rounded-full px-2 py-1">
              <p className="text-[7px] text-[#9ca3af]">Mensaje</p>
            </div>
            <div className="w-5 h-5 rounded-full bg-[#128C7E] flex items-center justify-center shrink-0">
              <span className="text-[7px] text-white">➤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GmailMock() {
  return (
    <div className="bg-white rounded-xl border border-[#daeeff] shadow-sm overflow-hidden w-full">
      <div className="bg-[#f8fafd] border-b border-[#daeeff] px-3 py-2 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
        <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
        <span className="text-[10px] font-bold text-[#EA4335] ml-1.5">M</span>
        <span className="text-[10px] font-bold text-[#6B7280]">Gmail</span>
        <div className="flex-1" />
        <span className="w-3.5 h-3.5 bg-[#e5eaf3] rounded-full" />
        <span className="w-3.5 h-3.5 bg-[#e5eaf3] rounded-full" />
        <span className="w-3.5 h-3.5 bg-[#e5eaf3] rounded-full" />
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] font-bold text-[#0F0A1E]">Nueva reserva recibida</span>
          <span className="text-[7px] bg-[#f0f7ff] text-[#3a8fe8] px-1.5 py-0.5 rounded font-semibold shrink-0">Recibidos</span>
        </div>
        <p className="text-[7.5px] text-[#9ca3af] mb-2">Reservaq &lt;noreply@reservaq.com&gt; · 17:00 · para mí</p>
        <div className="bg-[#f8fafd] rounded-lg p-2 space-y-1 border border-[#daeeff]">
          <p className="text-[7.5px] text-[#0F0A1E]">👤 <strong>Cliente:</strong> María López</p>
          <p className="text-[7.5px] text-[#0F0A1E]">📅 <strong>Fecha:</strong> 24/05/2025</p>
          <p className="text-[7.5px] text-[#0F0A1E]">🕐 <strong>Hora:</strong> 17:00</p>
          <p className="text-[7.5px] text-[#0F0A1E]">✂️ <strong>Servicio:</strong> Corte de pelo</p>
          <p className="text-[7.5px] text-[#0F0A1E]">👥 <strong>Personas:</strong> 2</p>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f0f7ff] to-white" id="planes">
      <div className="max-w-[1100px] mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0A1E] mb-3">
            <span className="gradient-text">Tú eliges</span> cómo recibir tus reservas
          </h2>
          <p className="text-lg text-[#6B7280] max-w-lg mx-auto">WhatsApp o Email. Tú decides lo que mejor se adapta a tu negocio.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">

          {/* WhatsApp */}
          <div className="bg-white rounded-3xl border border-[#daeeff] p-8 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center shrink-0">
                <WaIcon />
              </div>
              <h3 className="text-xl font-bold text-[#0F0A1E]">Recepción por WhatsApp</h3>
            </div>
            <p className="text-sm text-[#6B7280] mb-6">Recibe todas tus reservas directamente en tu WhatsApp en tiempo real.</p>

            <div className="flex flex-col md:flex-row gap-5 mb-7">
              <PhoneMock />
              <ul className="flex flex-col gap-2.5">
                {WA_FEATURES.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#0F0A1E]">
                    <span className="text-green-500 font-bold shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            <a href="https://app.reservaq.com/reservaq" target="_blank" rel="noreferrer"
              className="mt-auto flex items-center justify-center gap-2 w-full p-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">
              Más información
            </a>
          </div>

          {/* Email */}
          <div className="relative bg-white rounded-3xl border border-[#daeeff] p-8 shadow-sm flex flex-col">

            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-[#69b4ff] flex items-center justify-center shrink-0">
                <Mail size={22} color="white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F0A1E]">Recepción por Email</h3>
            </div>
            <p className="text-sm text-[#6B7280] mb-6">Recibe todas las reservas en tu correo electrónico de forma organizada.</p>

            <div className="flex flex-col md:flex-row gap-5 mb-7">
              <div className="sm:w-[55%] shrink-0">
                <GmailMock />
              </div>
              <ul className="flex flex-col gap-2.5">
                {EMAIL_FEATURES.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#0F0A1E]">
                    <span className="text-[#69b4ff] font-bold shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            <a href="https://app.reservaq.com/reservaq" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-auto py-3 rounded-full border border-[#69b4ff] text-[#3a8fe8] font-semibold hover:bg-[#69b4ff] hover:text-white transition-colors">
              Más información
            </a>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRUST.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 bg-[#f0f7ff] rounded-2xl px-5 py-4">
              <span className="text-[#69b4ff] mt-0.5 shrink-0">{icon}</span>
              <div>
                <p className="text-sm font-bold text-[#0F0A1E]">{title}</p>
                <p className="text-xs text-[#6B7280] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
