import { useEffect, useRef } from "react";

const outerIcons = [
  { label: "React", bg: "#61DAFB", color: "#0c3547" },
  { label: "Node.js", bg: "#68A063", color: "#fff" },
  { label: "Next.js", bg: "#000000", color: "#fff" },
  { label: "TypeScript", bg: "#3178C6", color: "#fff" },
  { label: "MongoDB", bg: "#4DB33D", color: "#fff" },
  { label: "PostgreSQL", bg: "#336791", color: "#fff" },
  { label: "Express", bg: "#353535", color: "#fff" },
  { label: "Shadcn", bg: "#18181b", color: "#fff" },
];

const innerIcons = [
  { label: "Drizzle", bg: "#C5F74F", color: "#1a2e00" },
  { label: "Kinde", bg: "#7C3AED", color: "#fff" },
  { label: "Redux", bg: "#764ABC", color: "#fff" },
  { label: "Tailwind", bg: "#38BDF8", color: "#0c2a3d" },
];

type IconItem = { label: string; bg: string; color: string };

interface OrbitRingProps {
  icons: IconItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
  iconSize: number;
}

const OrbitRing = ({
  icons,
  radius,
  duration,
  reverse = false,
  iconSize,
}: OrbitRingProps) => {
  return (
    <div
      style={{
        position: "absolute",
        width: radius * 2,
        height: radius * 2,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: `${reverse ? "spinReverse" : "spin"} ${duration}s linear infinite`,
      }}
    >
      {icons.map((icon, i) => {
        const angle = (i / icons.length) * 2 * Math.PI - Math.PI / 2;
        const x = radius + Math.cos(angle) * radius;
        const y = radius + Math.sin(angle) * radius;
        return (
          <div
            key={icon.label}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: iconSize,
              height: iconSize,
              transform: "translate(-50%, -50%)",
              animation: `${reverse ? "counterReverse" : "counter"} ${duration}s linear infinite`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                background: icon.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: icon.label.length > 6 ? 10 : 11,
                fontWeight: 600,
                color: icon.color,
                boxShadow: `0 2px 12px ${icon.bg}55`,
                border: `1px solid ${icon.bg}99`,
                letterSpacing: "0.02em",
                userSelect: "none",
              }}
            >
              {icon.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const TechOrbit = () => {
  const outerRadius = 150;
  const innerRadius = 86;
  const size = (outerRadius + 50) * 2;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 0",
      }}
    >
      <style>{`
        @keyframes spin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes spinReverse { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(-360deg); } }
        @keyframes counter { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(-360deg); } }
        @keyframes counterReverse { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
        .tech-icon-wrapper:hover > div { transform: scale(1.15); transition: transform 0.2s ease; border-color: #4ade80 !important; }
      `}</style>

      <div style={{ position: "relative", width: size, height: size }}>
        {/* Outer ring track */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: outerRadius * 2,
            height: outerRadius * 2,
            borderRadius: "50%",
            border: "0.5px dashed rgba(74,222,128,0.2)",
            transform: "translate(-50%,-50%)",
          }}
        />

        {/* Inner ring track */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: innerRadius * 2,
            height: innerRadius * 2,
            borderRadius: "50%",
            border: "0.5px dashed rgba(74,222,128,0.15)",
            transform: "translate(-50%,-50%)",
          }}
        />

        {/* Subtle glow behind center */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)",
            transform: "translate(-50%,-50%)",
          }}
        />

        {/* Center node */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 58,
            height: 58,
            borderRadius: "50%",
            background: "#4ade80",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 9,
            fontWeight: 700,
            color: "#14532d",
            letterSpacing: "0.08em",
            boxShadow: "0 0 24px rgba(74,222,128,0.4)",
            zIndex: 10,
          }}
        >
          STACK
        </div>

        <OrbitRing
          icons={outerIcons}
          radius={outerRadius}
          duration={22}
          iconSize={52}
        />
        <OrbitRing
          icons={innerIcons}
          radius={innerRadius}
          duration={14}
          reverse
          iconSize={48}
        />
      </div>
    </div>
  );
};

export default TechOrbit;
