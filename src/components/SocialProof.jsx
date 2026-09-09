const TEAMS = [
  {
    name: "Recruitment Agencies",
    abbr: "RA",
    desc: "Agency hiring",
    accent: "#7EA2FF",
  },
  {
    name: "Staffing Teams",
    abbr: "ST",
    desc: "Workforce delivery",
    accent: "#A8B2C7",
  },
  {
    name: "Talent Partners",
    abbr: "TP",
    desc: "Talent strategy",
    accent: "#9184FF",
  },
  {
    name: "Executive Search",
    abbr: "ES",
    desc: "Leadership hiring",
    accent: "#B58BFF",
  },
  {
    name: "Hiring Teams",
    abbr: "HT",
    desc: "Internal hiring",
    accent: "#69B8F5",
  },
  {
    name: "Recruitment Ops",
    abbr: "RO",
    desc: "Hiring operations",
    accent: "#789BFF",
  },
  {
    name: "Talent Advisory",
    abbr: "TA",
    desc: "Hiring intelligence",
    accent: "#A28BEE",
  },
  {
    name: "People Teams",
    abbr: "PT",
    desc: "People operations",
    accent: "#B0B7C5",
  },
];

function TeamIcon({ item }) {
  return (
    <div
      className="
        relative flex h-10 w-10 shrink-0 items-center justify-center
        overflow-hidden rounded-[12px]
        border border-white/[0.07]
        bg-[#151519]
        transition-all duration-500
        group-hover:scale-[1.07]
        group-hover:border-white/[0.12]
      "
    >
      <div
        className="
          absolute inset-0 opacity-[0.08]
          transition-opacity duration-500
          group-hover:opacity-[0.16]
        "
        style={{
          background: `radial-gradient(circle at 30% 20%, ${item.accent}, transparent 68%)`,
        }}
      />

      <svg
        className="relative h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke={item.accent}
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6" />
        <path d="M22 11h-6" />
      </svg>

      <div
        className="
          absolute bottom-0 left-1/2 h-px w-5
          -translate-x-1/2 opacity-50 blur-[1px]
        "
        style={{ backgroundColor: item.accent }}
      />
    </div>
  );
}

function TeamCard({ item }) {
  return (
    <div
      className="
        group relative flex min-w-[205px] items-center gap-3
        overflow-hidden rounded-[16px]
        border border-white/[0.065]
        bg-[#0E0E11]/90
        px-3.5 py-3
        shadow-[0_12px_35px_rgba(0,0,0,0.26)]
        backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:-translate-y-[3px]
        hover:border-white/[0.13]
        hover:bg-[#131318]
        hover:shadow-[0_22px_55px_rgba(0,0,0,0.48)]
      "
    >
      {/* Dynamic glow */}
      <div
        className="
          pointer-events-none absolute -left-8 top-1/2
          h-24 w-24 -translate-y-1/2
          rounded-full opacity-0 blur-[35px]
          transition-opacity duration-500
          group-hover:opacity-[0.12]
        "
        style={{ backgroundColor: item.accent }}
      />

      {/* Glass reflection */}
      <div
        className="
          pointer-events-none absolute inset-0
          translate-x-[-120%]
          bg-gradient-to-r
          from-transparent via-white/[0.025] to-transparent
          transition-transform duration-700
          group-hover:translate-x-[120%]
        "
      />

      {/* Top light */}
      <div className="pointer-events-none absolute left-[18%] right-[18%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.16] to-transparent" />

      <TeamIcon item={item} />

      <div className="relative min-w-0 flex-1">
        <p className="truncate text-[12px] font-bold tracking-[-0.01em] text-[#E8E8EC]">
          {item.name}
        </p>

        <div className="mt-1.5 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-20 group-hover:animate-ping"
              style={{ backgroundColor: item.accent }}
            />

            <span
              className="relative h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: item.accent }}
            />
          </span>

          <span className="whitespace-nowrap text-[9px] font-medium tracking-[0.025em] text-[#686872]">
            {item.desc}
          </span>
        </div>
      </div>

      {/* Hover arrow */}
      <div
        className="
          relative flex h-7 w-7 translate-x-2 items-center justify-center
          rounded-full border border-white/[0.06]
          bg-white/[0.025]
          opacity-0
          transition-all duration-400
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        <svg
          className="h-3 w-3 text-[#92929D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h8m-3-3 3 3-3 3"
          />
        </svg>
      </div>

      {/* Bottom accent */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-1/2
          h-px w-0 -translate-x-1/2
          opacity-0 blur-[0.5px]
          transition-all duration-500
          group-hover:w-[42%]
          group-hover:opacity-70
        "
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${item.accent},
            transparent
          )`,
        }}
      />
    </div>
  );
}

function MovingRow({ items, reverse = false, speed = "30s" }) {
  const repeated = [...items, ...items];

  return (
    <div className="relative">
      <div
        className={`
          flex w-max gap-3
          ${reverse ? "social-row-reverse" : "social-row"}
        `}
        style={{
          animationDuration: speed,
          willChange: "transform",
        }}
      >
        {repeated.map((item, index) => (
          <TeamCard key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function SocialProof() {
  const firstRow = TEAMS;
  const secondRow = [...TEAMS].reverse();

  return (
    <>
      <section className="relative overflow-hidden bg-[#050505] py-7 sm:py-8 lg:py-9">
        {/* Seamless connection with Hero */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* Atmospheric lighting */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#765AB9]/[0.055] blur-[120px]" />

          <div className="absolute bottom-[-130px] right-[6%] h-[320px] w-[320px] rounded-full bg-[#5579CB]/[0.045] blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
              backgroundSize: "32px 32px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            }}
          />
        </div>

        <div className="relative">
          {/* Heading */}
          <div className="mx-auto mb-6 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-2.5 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-gradient-to-r from-transparent to-white/[0.18]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#73737E]">
                Built for modern recruitment
              </span>

              <span className="h-px w-7 bg-gradient-to-l from-transparent to-white/[0.18]" />
            </div>

            <p className="mx-auto max-w-xl text-[12px] leading-6 text-[#5F5F69]">
              One connected intelligence layer for the teams shaping modern
              hiring.
            </p>
          </div>

          {/* Moving ecosystem */}
          <div className="relative space-y-3">
            {/* Strong cinematic fades */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-20 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-transparent sm:w-32 lg:w-44" />

            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-20 bg-gradient-to-l from-[#050505] via-[#050505]/95 to-transparent sm:w-32 lg:w-44" />

            <MovingRow items={firstRow} speed="34s" />

            <div className="-ml-24">
              <MovingRow
                items={secondRow}
                reverse
                speed="38s"
              />
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mx-auto mt-6 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div
              className="
                group inline-flex items-center gap-2.5
                rounded-full
                border border-white/[0.065]
                bg-[#0C0C0F]/80
                px-4 py-2
                shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
                transition-all duration-300
                hover:border-white/[0.11]
                hover:bg-[#111115]
              "
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#9B83DA]/15 bg-[#9B83DA]/[0.07]">
                <svg
                  className="h-2.5 w-2.5 text-[#A68DDF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l4 4L19 6"
                  />
                </svg>
              </div>

              <span className="text-[10px] font-medium text-[#73737D]">
                Sourcing, screening, collaboration and hiring intelligence in
                one workflow
              </span>
            </div>
          </div>
        </div>

        {/* Transition into next black section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />
      </section>

      <style>{`
        @keyframes socialMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes socialMoveReverse {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .social-row {
          animation-name: socialMove;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .social-row-reverse {
          animation-name: socialMoveReverse;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .social-row:hover,
        .social-row-reverse:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .social-row,
          .social-row-reverse {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}