const frontend = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "Shadcn UI", "Framer Motion", "HTML", "CSS",
];

const backend = [
  "Node.js", "Express", "MongoDB", "PostgreSQL",
  "Drizzle ORM", "JWT Auth", "REST APIs",
];

const tooling = [
  "Git", "Vercel", "RTK Query", "Redux Toolkit",
  "Kinde Auth", "Sentry", "TanStack Table", "next-safe-action",
];

type Category = {
  label: string;
  items: string[];
  tagClass: string;
};

const categories: Category[] = [
  { label: "Frontend", items: frontend, tagClass: "tag-frontend" },
  { label: "Backend", items: backend, tagClass: "tag-backend" },
  { label: "Tooling & Libraries", items: tooling, tagClass: "tag-tooling" },
];

const SkillTags = () => {
  return (
    <div className="py-6 w-full">
      {categories.map((cat) => (
        <div key={cat.label} className="mb-6">
          {/* Category label with trailing line */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-green-400">
              {cat.label}
            </span>
            <div className="flex-1 h-px bg-green-400/20" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className={`
                  px-3 py-1.5 rounded-md text-[13px] font-medium border
                  transition-all duration-150 cursor-default select-none
                  hover:-translate-y-0.5
                  ${
                    cat.tagClass === "tag-frontend"
                      ? "bg-green-400/10 text-green-400 border-green-400/25 hover:border-green-400/60"
                      : cat.tagClass === "tag-backend"
                      ? "bg-green-300/10 text-green-300 border-green-300/20 hover:border-green-300/50"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white/85"
                  }
                `}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillTags;
