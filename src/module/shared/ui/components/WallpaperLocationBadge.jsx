import { MapPin } from "lucide-react";
import { OWNER_COUNTRY } from "@constants";

const WallpaperLocationBadge = ({ className = "" }) => (
  <div
    className={`inline-flex items-center gap-1.5 rounded-full bg-white/55 backdrop-blur-md border border-white/35 shadow-[0_4px_18px_rgba(0,0,0,0.12)] px-3 py-[5px] text-[13px] font-medium text-zinc-800 tracking-tight select-none pointer-events-none ${className}`}
  >
    <MapPin size={12} className="text-red-500 fill-red-500 shrink-0" strokeWidth={2.4} />
    <span>{OWNER_COUNTRY}</span>
  </div>
);

export default WallpaperLocationBadge;
