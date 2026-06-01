import { Zap } from "lucide-react";

const STEPS = [
  { num: "1", title: "Configura tu negocio", desc: "Añade tu nombre, horarios, colores y cómo quieres recibir las reservas. Tarda menos de 5 minutos." },
  { num: "2", title: "Comparte o incrusta", desc: "Copia el enlace y compártelo por WhatsApp, redes o email. O pega el snippet en tu web en dos líneas." },
  { num: "3", title: "Recibe y gestiona", desc: "Cada reserva llega a tu WhatsApp o email al instante. Consúltalas en el panel siempre que quieras." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="como-funciona">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3a8fe8] bg-[#69b4ff]/10 px-4 py-1.5 rounded-full mb-4">
            <Zap size={13} /> Cómo funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0A1E] mb-3">En marcha en 3 pasos</h2>
          <p className="text-lg text-[#6B7280] max-w-lg mx-auto">No necesitas saber programar ni tener experiencia técnica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#69b4ff] to-[#3a8fe8] text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-5">
                {s.num}
              </div>
              <h3 className="text-lg font-bold text-[#0F0A1E] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
