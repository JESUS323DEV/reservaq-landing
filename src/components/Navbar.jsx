import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-reservaq.png";

const links = [
  { href: "#caracteristicas", label: "Características" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={`top-0 z-50 bg-white lg:p-2 border-b border-[#daeeff] ${open ? "fixed inset-0 flex flex-col" : "sticky"}`}>
        <div className="w-full max-w-[1100px] mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-[#0F0A1E]">
            <img src={logo} alt="Reservaq" className="w-8 h-8 object-contain" />
            Reservaq
          </a>

          {/* Links desktop */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-medium text-[#6B7280] hover:text-[#0F0A1E] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTAs desktop */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="#precios" className="px-5 py-2 text-sm font-semibold rounded-full border border-[#daeeff] text-[#0F0A1E] hover:border-[#69b4ff] hover:text-[#69b4ff] transition-colors">
              Ver planes
            </a>
            <a href="https://app.reservaq.com/reservaq" target="_blank" rel="noreferrer"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-[#69b4ff] text-white hover:bg-[#3a8fe8] transition-colors shadow-md">
              Comenzar gratis
            </a>
          </div>

          {/* Burger */}
          <button className="lg:hidden p-2 text-[#0F0A1E]" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu  */}
        {open && (
          <div className="lg:hidden flex-1 px-6 py-8 flex flex-col gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-lg font-semibold text-[#0F0A1E] hover:text-[#69b4ff] transition-colors">
                {l.label}
              </a>
            ))}
            <hr className="border-[#daeeff]" />
            <a href="#precios" onClick={() => setOpen(false)}
              className="text-center py-3 rounded-full border border-[#daeeff] text-sm font-semibold text-[#0F0A1E]">
              Ver planes
            </a>
            <a href="https://app.reservaq.com/reservaq" target="_blank" rel="noreferrer"
              className="text-center py-3 rounded-full bg-[#69b4ff] text-white text-sm font-semibold">
              Comenzar gratis
            </a>
          </div>
        )}
      </nav>

    </>
  );
}
