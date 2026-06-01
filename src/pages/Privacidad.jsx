import { Link } from "react-router-dom";
import logo from "../assets/logo-reservaq.png";

export default function Privacidad() {
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

        <h1 className="text-3xl font-extrabold text-[#0F0A1E] mb-2">Política de privacidad</h1>
        <p className="text-sm text-[#9ca3af] mb-10">Última actualización: junio 2026</p>

        <div className="space-y-8 text-[#374151] leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">1. Responsable del tratamiento</h2>
            <ul className="space-y-1 text-sm">
              <li><strong>Titular:</strong> [Nombre completo o razón social]</li>
              <li><strong>NIF/CIF:</strong> [Número de identificación fiscal]</li>
              <li><strong>Domicilio:</strong> [Dirección completa], España</li>
              <li><strong>Email:</strong> hola@reservaq.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">2. Datos que recogemos</h2>
            <p>Reservaq puede recoger los siguientes datos personales:</p>
            <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
              <li>Datos de contacto del negocio (nombre, email, teléfono) al registrarse en la plataforma.</li>
              <li>Datos de los clientes finales que realizan reservas a través de los formularios configurados por cada negocio (nombre, teléfono, email, fecha y hora de la reserva).</li>
              <li>Datos técnicos de navegación (dirección IP, tipo de navegador) recogidos de forma anónima mediante cookies técnicas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">3. Finalidad del tratamiento</h2>
            <ul className="space-y-1 text-sm list-disc list-inside">
              <li>Gestionar el alta y uso de la plataforma Reservaq por parte de los negocios.</li>
              <li>Enviar notificaciones de reserva al negocio y al cliente final según la configuración elegida.</li>
              <li>Mejorar el servicio y la experiencia de usuario.</li>
              <li>Cumplir con obligaciones legales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">4. Base legal</h2>
            <p>El tratamiento de datos se basa en:</p>
            <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
              <li><strong>Ejecución de un contrato:</strong> para prestar el servicio de gestión de reservas.</li>
              <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales, cuando aplique.</li>
              <li><strong>Interés legítimo:</strong> para la mejora del servicio y análisis estadístico anónimo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">5. Conservación de los datos</h2>
            <p>Los datos se conservarán mientras sea necesario para la prestación del servicio o mientras el negocio mantenga su cuenta activa. Una vez cancelada la cuenta, los datos se eliminarán en un plazo máximo de 30 días, salvo obligación legal de conservación.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">6. Destinatarios</h2>
            <p>No se cederán datos a terceros salvo obligación legal. Reservaq utiliza los siguientes proveedores de servicio como encargados del tratamiento:</p>
            <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
              <li><strong>Supabase</strong> (almacenamiento de datos y base de datos).</li>
              <li><strong>Netlify</strong> (alojamiento web).</li>
              <li><strong>Resend</strong> (envío de emails transaccionales).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">7. Derechos del usuario</h2>
            <p>Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición al tratamiento escribiendo a <a href="mailto:hola@reservaq.com" className="text-[#3a8fe8] hover:underline">hola@reservaq.com</a>, adjuntando copia de tu documento de identidad.</p>
            <p className="mt-2">También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0F0A1E] mb-3">8. Cookies</h2>
            <p>Este sitio web utiliza únicamente cookies técnicas necesarias para el funcionamiento básico. No se utilizan cookies de seguimiento ni publicidad de terceros. Puedes configurar tu navegador para bloquear o eliminar cookies, aunque esto podría afectar al funcionamiento del sitio.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
