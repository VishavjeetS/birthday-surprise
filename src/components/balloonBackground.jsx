import { useState } from "react";

const DEFAULT_COLORS = [
  "#FF6384", // Pink
  "#36A2EB", // Blue
  "#FFCE56", // Yellow
  "#4BC0C0", // Teal
  "#9966FF", // Purple
  "#FF9F40", // Orange
];

export default function BalloonBackground({
  count = 12,
  flakesCount = 50,
  colors = DEFAULT_COLORS,
}) {
  const [balloons] = useState(() =>
    Array.from({ length: count }, (_, index) => {
      const color = colors[index % colors.length];
      const left = Math.floor(Math.random() * 90) + 5; // 5% to 95% width
      const scale = (Math.random() * 0.5 + 0.7).toFixed(2); // Scale between 0.7 and 1.2
      const duration = Math.floor(Math.random() * 6) + 10; // 10s to 16s float speed
      const delay = (Math.random() * 8).toFixed(1); // Delay up to 8s

      return {
        id: index,
        color,
        left: `${left}%`,
        scale,
        duration: `${duration}s`,
        delay: `${delay}s`,
      };
    }),
  );

  const [flakes] = useState(() =>
    Array.from({ length: flakesCount }, (_, index) => {
      const color = colors[index % colors.length];
      const left = Math.floor(Math.random() * 90) + 5; // 5% to 95% width
      const scale = (Math.random() * 0.5 + 0.7).toFixed(2); // Scale between 0.7 and 1.2
      const duration = Math.floor(Math.random() * 0.4) + 10; // 10s to 16s float speed
      const delay = (Math.random() * 8).toFixed(1); // Delay up to 8s
      const rotate = Math.floor(Math.random() * 360);

      return {
        id: index,
        color,
        left: `${left}%`,
        scale,
        duration: `${duration}s`,
        delay: `${delay}s`,
        rotate: `${rotate}deg`,
      };
    }),
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[linear-gradient(to_right,#ff77a5,#ff9cb8,#ff77a5)]">
      {flakes.map((flake) => (
        <div
          key={flake.id + "flakes"}
          className="absolute -top-36 animate-float-flakes"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
            transform: `scale(${flake.scale})`,
          }}
        >
          <span
            className={`absolute h-2 w-4 rounded-full  rotate-[${flake.rotate}]`}
            style={{
              backgroundColor: flake.color,
              opacity: 0.5,
              transform: `rotate(${flake.rotate})`,
            }}
          />
        </div>
      ))}

      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute -bottom-36 animate-float-balloon"
          style={{
            left: balloon.left,
            animationDuration: balloon.duration,
            animationDelay: balloon.delay,
            transform: `scale(${balloon.scale})`,
          }}
        >
          {/* Main Balloon Body */}
          <div
            className="w-16 h-20 rounded-t-full rounded-b-[45%] relative shadow-inner"
            style={{ backgroundColor: balloon.color, opacity: 0.8 }}
          >
            {/* Glossy Highlight Effect */}
            <div className="absolute top-2 left-3 w-3 h-5 bg-white/40 rounded-full rotate-[-20deg]" />

            {/* Balloon Knot */}
            <div
              className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 
                         border-l-[6px] border-l-transparent 
                         border-r-[6px] border-r-transparent 
                         border-b-8"
              style={{ borderBottomColor: balloon.color }}
            />

            {/* String */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-400/50" />
          </div>
        </div>
      ))}
    </div>
  );
}
