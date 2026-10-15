import type { PointerEvent, ReactNode } from "react";
import "./SpotlightCard.css";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

// A 1px wrapper whose background shows a glow following the pointer, so the
// card's border lights up near the cursor. Position is passed as CSS vars.
const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div className={`spotlight-card ${className}`} onPointerMove={handlePointerMove}>
      {children}
    </div>
  );
};

export default SpotlightCard;
