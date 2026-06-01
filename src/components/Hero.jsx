import HeroMock from "./HeroMock";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#f0f7ff] via-[#daeeff] to-[#f0f7ff] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-[660px] py-20">

          <div>
         

            <h1 className="text-5xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#0F0A1E] mb-5">
              La forma más inteligente de gestionar{" "}
              <span className="gradient-text">tus reservas</span>
            </h1>

            <p className="text-lg text-[#6B7280] leading-relaxed mb-9 max-w-md">
              Reserva, organiza y haz crecer tu negocio desde una sola plataforma.
              Sin instalaciones, sin complicaciones.
            </p>

            <div className="flex flex-col lg:flex-row  items-center gap-3">
              <a href="https://app.reservaq.com/reservaq" target="_blank" rel="noreferrer"
                className="px-7 py-3 rounded-full bg-[#69b4ff] text-white font-semibold hover:bg-[#3a8fe8] transition-colors shadow-lg shadow-[#69b4ff]/30">
                Probar gratis →
              </a>
              <a href="#como-funciona"
                className="px-7 py-3 rounded-full border border-[#0F0A1E] text-[#0F0A1E] font-semibold hover:border-[#69b4ff] hover:text-[#69b4ff] transition-colors">
                Ver cómo funciona
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <HeroMock />
          </div>

        </div>
      </div>
    </section>
  );
}
