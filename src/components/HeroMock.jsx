const RESERVAS = [
  { time: "09:30", name: "Ana García", meta: "2 personas", status: "ok" },
  { time: "11:00", name: "Pedro Martín", meta: "1 persona · Mesa int.", status: "ok" },
  { time: "12:30", name: "María López", meta: "3 personas", status: "pending" },
  { time: "15:00", name: "Juan Rodríguez", meta: "4 personas · Terraza", status: "ok" },
];

export default function HeroMock() {
  return (
    <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-2xl overflow-hidden flex"
      style={{ transform: "perspective(900px) rotateY(-6deg) rotateX(2deg)" }}>

      {/* Sidebar */}
      <div className="w-13 bg-[#08132d] flex flex-col items-center py-5 gap-4 flex-shrink-0 px-3">
        <div className="w-8 h-8 rounded-lg bg-[#69b4ff] flex items-center justify-center text-white text-xs font-extrabold">R</div>
        <div className="w-7 h-1.5 rounded bg-[#69b4ff] opacity-90" />
        <div className="w-7 h-1.5 rounded bg-white/15" />
        <div className="w-5 h-1.5 rounded bg-white/15" />
        <div className="w-5 h-1.5 rounded bg-white/15" />
        <div className="w-7 h-1.5 rounded bg-white/15" />
        <div className="w-5 h-1.5 rounded bg-white/15" />
      </div>

      {/* Main */}
      <div className="flex-1 p-5 min-w-0">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-xs font-bold text-[#0F0A1E]">La Barbería de Carlos</div>
            <div className="text-[10px] text-[#6B7280] mt-0.5">Martes, 14 de mayo</div>
          </div>
          <div className="inline-flex items-center gap-1 bg-[#daeeff] text-[#3a8fe8] text-[10px] font-bold px-2.5 py-1 rounded-full">
            📅 4 hoy
          </div>
        </div>

        <hr className="border-[#daeeff] mb-3" />

        <div className="flex flex-col gap-2">
          {RESERVAS.map((r) => (
            <div key={r.time}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border-l-[3px] bg-[#f8faff] ${r.status === "pending" ? "border-amber-400" : "border-[#69b4ff]"}`}>
              <div className="text-[11px] font-bold text-[#0F0A1E] w-9 flex-shrink-0">{r.time}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-[#0F0A1E] truncate">{r.name}</div>
                <div className="text-[10px] text-[#6B7280] mt-0.5">{r.meta}</div>
              </div>
              <div className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${r.status === "ok" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"}`}>
                {r.status === "ok" ? "Confirmada" : "Pendiente"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
