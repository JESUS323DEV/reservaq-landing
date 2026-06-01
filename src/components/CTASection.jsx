export default function CTASection() {
  return (
    <section className="py-24 bg-[#f0f7ff]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="bg-[#08132d] rounded-3xl px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Empieza a recibir reservas hoy</h2>
          <p className="text-[#69b4ff] text-lg mb-8">Sin tarjeta, sin contrato. Configura tu negocio en menos de 5 minutos.</p>
          <a href="https://app.reservaq.com/reservaq" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#69b4ff] text-white font-semibold text-lg hover:bg-[#3a8fe8] transition-colors shadow-lg shadow-[#69b4ff]/30">
            Crear mi cuenta gratis →
          </a>
          <p className="text-sm text-[#6B7280] mt-4">Gratis para siempre en el plan básico</p>
        </div>
      </div>
    </section>
  );
}
