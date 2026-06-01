import logo from "../assets/logo-reservaq.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#daeeff] py-10 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-lg font-extrabold text-[#0F0A1E]">
          <img src={logo} alt="Reservaq" className="w-7 h-7 object-contain" />
          Reservaq
        </div>
        <p className="text-sm text-[#6B7280]">© 2026 Reservaq. Todos los derechos reservados.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="text-sm text-[#6B7280] hover:text-[#0F0A1E] transition-colors">Privacidad</a>
          <a href="#" className="text-sm text-[#6B7280] hover:text-[#0F0A1E] transition-colors">Términos</a>
          <a href="#" className="text-sm text-[#6B7280] hover:text-[#0F0A1E] transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
