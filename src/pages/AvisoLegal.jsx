import { Link } from "react-router-dom";
import logo from "../assets/logo-reservaq.png";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[760px] mx-auto px-6 py-16">
        <Link to="/" className="flex items-center gap-2 mb-12 text-[#3a8fe8] text-sm font-semibold hover:underline">
          ← Volver al inicio
        </Link>

        <div className="flex items-center gap-3 mb-10">
          <img src={logo} alt="Reservaq" className="w-8 h-8 object-contain" />
          <span className="text-xl font-extrabold text-[#0F0A1E]">Reservaq</span>
        </div>

        <h1 className="text-3xl font-extrabold text-[#0F0A1E] mb-2">Aviso legal</h1>
        <p className="text-sm text-[#9ca3af] mb-10">Última actualización: junio 2026</p>

        <div className="space-y-8 text-[#374151] leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">1. Titular del sitio web</h2>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se informa de los datos del titular de este sitio web:</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><strong>Titular:</strong> [Nombre completo o razón social]</li>
              <li><strong>NIF/CIF:</strong> [Número de identificación fiscal]</li>
              <li><strong>Domicilio:</strong> [Dirección completa], España</li>
              <li><strong>Email de contacto:</strong> hola@reservaq.com</li>
              <li><strong>Sitio web:</strong> www.reservaq.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">2. Objeto y condiciones de uso</h2>
            <p>Reservaq es una plataforma de gestión de reservas online dirigida a pequeños y medianos negocios. El acceso y uso de este sitio web implica la aceptación de las presentes condiciones legales.</p>
            <p className="mt-2">El usuario se compromete a hacer un uso lícito del sitio, sin vulnerar derechos de terceros ni infringir la normativa vigente.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">3. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos de este sitio web (textos, imágenes, logotipos, código fuente, diseño) son propiedad de Reservaq o de sus licenciantes y están protegidos por las leyes de propiedad intelectual e industrial vigentes en España y la Unión Europea.</p>
            <p className="mt-2">Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito del titular.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">4. Exclusión de responsabilidad</h2>
            <p>Reservaq no se hace responsable de los daños o perjuicios derivados del uso incorrecto de la plataforma, de la interrupción del servicio por causas ajenas a su control, ni del contenido de sitios web de terceros enlazados desde este sitio.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">5. Legislación aplicable</h2>
            <p>El presente aviso legal se rige por la legislación española vigente. Para cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la normativa aplicable establezca otro fuero.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">6. Contacto</h2>
            <p>Para cualquier consulta relacionada con este aviso legal puedes escribirnos a <a href="mailto:hola@reservaq.com" className="text-[#3a8fe8] hover:underline">hola@reservaq.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
