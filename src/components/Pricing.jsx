import { Shield, Clock, Users, Mail, MessageCircle } from "lucide-react";

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
  { icon: <Shield size={20} />, title: "Sin compromiso", desc: "Te contamos todo sin compromiso." },
  { icon: <Clock size={20} />, title: "Respuestas rápidas", desc: "Te respondemos en menos de 24h." },
  { icon: <Users size={20} />, title: "Para todo tipo de negocios", desc: "Desde pequeños negocios hasta grandes equipos." },
];

function WaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="white">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.669 4.8 1.832 6.795L2 30l7.42-1.81A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.4a11.34 11.34 0 0 1-5.77-1.573l-.413-.246-4.406 1.074 1.11-4.284-.27-.44A11.36 11.36 0 0 1 4.6 16c0-6.29 5.11-11.4 11.4-11.4S27.4 9.71 27.4 16 22.29 27.4 16 27.4zm6.26-8.532c-.343-.172-2.03-1.002-2.344-1.116-.315-.115-.544-.172-.773.172-.229.343-.888 1.116-1.088 1.345-.2.229-.4.258-.743.086-.343-.172-1.449-.534-2.76-1.703-1.02-.91-1.708-2.034-1.908-2.377-.2-.343-.021-.528.15-.7.155-.153.343-.4.515-.6.172-.2.229-.343.343-.572.115-.229.057-.43-.029-.6-.086-.172-.773-1.864-1.059-2.551-.279-.67-.562-.579-.773-.59l-.658-.011a1.263 1.263 0 0 0-.915.43c-.315.343-1.202 1.174-1.202 2.865s1.23 3.324 1.401 3.553c.172.229 2.42 3.695 5.863 5.18.82.354 1.46.565 1.958.723.823.261 1.572.224 2.163.136.66-.099 2.03-.829 2.316-1.63.286-.8.286-1.487.2-1.63-.085-.143-.314-.229-.657-.4z" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f0f7ff] to-white" id="precios">
      <div className="max-w-[1100px] mx-auto px-6">

        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3a8fe8] bg-[#69b4ff]/10 px-4 py-1.5 rounded-full mb-4">
            <MessageCircle size={13} /> ¿Cómo te enviamos las reservas?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0A1E] mb-3">
            <span className="gradient-text">Tú eliges</span> cómo recibir tus reservas
          </h2>
          <p className="text-lg text-[#6B7280] max-w-lg mx-auto">WhatsApp o Email. Tú decides lo que mejor se adapta a tu negocio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* WhatsApp */}
          <div className="bg-white rounded-3xl border border-[#daeeff] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center">
                <WaIcon />
              </div>
              <span className="text-xs font-bold bg-green-100 text-green-600 px-3 py-1 rounded-full">Opción recomendada</span>
            </div>
            <h3 className="text-xl font-bold text-[#0F0A1E] mb-2">Recepción por WhatsApp</h3>
            <p className="text-sm text-[#6B7280] mb-5">Recibe todas tus reservas directamente en tu WhatsApp en tiempo real.</p>
            <hr className="border-[#daeeff] mb-5" />
            <ul className="flex flex-col gap-2 mb-7">
              {WA_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-[#0F0A1E]">
                  <span className="text-green-500 font-bold">✓</span>{f}
                </li>
              ))}
            </ul>
            <a href="https://app.reservaq.com/reservaq" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">
              <WaIcon />Solicitar más información por WhatsApp →
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl border border-[#daeeff] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#69b4ff] flex items-center justify-center">
                <Mail size={24} color="white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F0A1E] mb-2">Recepción por Email</h3>
            <p className="text-sm text-[#6B7280] mb-5">Recibe todas las reservas en tu correo electrónico de forma organizada.</p>
            <hr className="border-[#daeeff] mb-5" />
            <ul className="flex flex-col gap-2 mb-7">
              {EMAIL_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-[#0F0A1E]">
                  <span className="text-[#69b4ff] font-bold">✓</span>{f}
                </li>
              ))}
            </ul>
            <a href="https://app.reservaq.com/reservaq" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[#69b4ff] text-[#3a8fe8] font-semibold hover:bg-[#69b4ff] hover:text-white transition-colors">
              <Mail size={18} />Solicitar más información por Email →
            </a>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRUST.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 bg-[#f0f7ff] rounded-2xl px-5 py-4">
              <span className="text-[#69b4ff] mt-0.5">{icon}</span>
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
