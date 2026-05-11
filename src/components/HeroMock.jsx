const RESERVAS = [
  { time: "09:30", name: "Ana García", meta: "2 personas", status: "ok" },
  { time: "11:00", name: "Pedro Martín", meta: "1 persona · Mesa int.", status: "ok" },
  { time: "12:30", name: "María López", meta: "3 personas", status: "pending" },
  { time: "15:00", name: "Juan Rodríguez", meta: "4 personas · Terraza", status: "ok" },
];

export default function HeroMock() {
  return (
    <div className="hmock">
      <div className="hmock-sidebar">
        <div className="hmock-logo">R</div>
        <div className="hmock-nav-item hmock-nav-item--active" />
        <div className="hmock-nav-item" />
        <div className="hmock-nav-item hmock-nav-item--sm" />
        <div className="hmock-nav-item hmock-nav-item--sm" />
        <div className="hmock-nav-item" />
        <div className="hmock-nav-item hmock-nav-item--sm" />
      </div>

      <div className="hmock-main">
        <div className="hmock-topbar">
          <div>
            <div className="hmock-business">La Barbería de Carlos</div>
            <div className="hmock-date-text">Martes, 14 de mayo</div>
          </div>
          <div className="hmock-today-badge">📅 4 hoy</div>
        </div>

        <div className="hmock-sep" />

        <div className="hmock-list">
          {RESERVAS.map((r) => (
            <div key={r.time} className={`hmock-item${r.status === "pending" ? " hmock-item--pending" : ""}`}>
              <div className="hmock-item-time">{r.time}</div>
              <div className="hmock-item-info">
                <div className="hmock-item-name">{r.name}</div>
                <div className="hmock-item-meta">{r.meta}</div>
              </div>
              <div className={`hmock-status hmock-status--${r.status === "ok" ? "ok" : "pending"}`}>
                {r.status === "ok" ? "Confirmada" : "Pendiente"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
