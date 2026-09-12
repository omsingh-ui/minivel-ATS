import useReveal from "../hooks/useReveal";

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
  const icons = {
    RA: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M3.5 18c.7-3 2.4-4.5 4.5-4.5s3.8 1.5 4.5 4.5" />
        <path d="M11.5 18c.6-2.6 2.1-4 4.5-4 2.1 0 3.6 1.4 4.2 4" />
      </>
    ),

    ST: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2.5" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M8 17h3" />
      </>
    ),

    TP: (
      <>
        <path d="M12 3 15 8l5 2-5 2-3 5-3-5-5-2 5-2z" />
        <circle cx="12" cy="12" r="2.1" />
      </>
    ),

    ES: (
      <>
        <circle cx="10" cy="9" r="3.5" />
        <path d="M4 19c.7-3.2 2.7-5 6-5s5.3 1.8 6 5" />
        <path d="M17 4h3v3" />
        <path d="m20 4-4 4" />
      </>
    ),

    HT: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2.5" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <circle cx="17.5" cy="16.5" r="1.7" />
      </>
    ),

    RO: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M4.9 4.9 7 7" />
        <path d="m17 17 2.1 2.1" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.9 19.1 2.1-2.1" />
        <path d="M17 7 19.1 4.9" />
      </>
    ),

    TA: (
      <>
        <path d="M4 18V10" />
        <path d="M10 18V6" />
        <path d="M16 18v-5" />
        <path d="M3 18h18" />
        <path d="m5 9 4-3 4 3 6-6" />
      </>
    ),

    PT: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16.5" cy="9" r="2.5" />
        <path d="M4 19c.7-3.4 2.6-5 5-5s4.3 1.6 5 5" />
        <path d="M14 19c.5-2.6 1.8-4 4-4 1.7 0 3 1.2 3.5 3.5" />
      </>
    ),
  };

  return (
    <div
      className="
        relative flex h-11 w-11 shrink-0
        items-center justify-center
        overflow-hidden rounded-[13px]
        border border-white/[0.07]
        bg-[#151519]
        transition-all duration-500 ease-out

        group-hover:scale-[1.08]
        group-hover:border-white/[0.15]
        group-hover:bg-[#19191E]
        group-hover:shadow-[0_10px_30px_rgba(0,0,0,.35)]
      "
    >
      {/* Accent atmosphere */}
      <div
        className="
          absolute inset-0
          opacity-[0.07]
          transition-all duration-500
          group-hover:scale-125
          group-hover:opacity-[0.20]
        "
        style={{
          background: `radial-gradient(
            circle at 30% 20%,
            ${item.accent},
            transparent 68%
          )`,
        }}
      />

      {/* Icon */}
      <svg
        className="
          relative h-[19px] w-[19px]
          transition-all duration-500
          group-hover:-translate-y-[1px]
          group-hover:scale-[1.10]
        "
        viewBox="0 0 24 24"
        fill="none"
        stroke={item.accent}
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[item.abbr]}
      </svg>

      {/* Bottom icon accent */}
      <div
        className="
          absolute bottom-0 left-1/2
          h-px w-5
          -translate-x-1/2
          opacity-45
          blur-[1px]
          transition-all duration-500
          group-hover:w-7
          group-hover:opacity-90
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
        group relative
        flex min-w-[235px]
        items-center gap-3.5
        overflow-hidden
        rounded-[18px]
        border border-white/[0.065]
        bg-[#0E0E11]/94
        px-4 py-3.5
        shadow-[0_14px_40px_rgba(0,0,0,0.28)]
        backdrop-blur-xl

        transition-all duration-500 ease-out

        hover:-translate-y-[4px]
        hover:scale-[1.015]
        hover:border-white/[0.15]
        hover:bg-[#141419]
        hover:shadow-[0_28px_70px_rgba(0,0,0,0.56)]
      "
    >
      {/* Accent glow */}
      <div
        className="
          pointer-events-none
          absolute -left-10 top-1/2
          h-28 w-28
          -translate-y-1/2
          scale-75
          rounded-full
          opacity-0
          blur-[40px]
          transition-all duration-700

          group-hover:scale-110
          group-hover:opacity-[0.14]
        "
        style={{ backgroundColor: item.accent }}
      />

      {/* Secondary depth glow */}
      <div
        className="
          pointer-events-none
          absolute -right-12 bottom-[-45px]
          h-24 w-24
          rounded-full
          opacity-0
          blur-[44px]
          transition-all duration-700
          group-hover:opacity-[0.06]
        "
        style={{ backgroundColor: item.accent }}
      />

      {/* Glass sweep */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          translate-x-[-135%]
          skew-x-[-18deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.04]
          to-transparent
          transition-transform duration-700
          group-hover:translate-x-[135%]
        "
      />

      {/* Top reflection */}
      <div
        className="
          pointer-events-none
          absolute left-[16%] right-[16%] top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.18]
          to-transparent
          opacity-55
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <TeamIcon item={item} />

      <div
        className="
          relative min-w-0 flex-1
          transition-transform duration-500
          group-hover:translate-x-[2px]
        "
      >
        <p
          className="
            truncate
            text-[12.5px]
            font-bold
            tracking-[-0.012em]
            text-[#E8E8EC]
            transition-colors duration-300
            group-hover:text-white
          "
        >
          {item.name}
        </p>

        <div className="mt-1.5 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="
                absolute inline-flex
                h-full w-full
                rounded-full
                opacity-0
                group-hover:animate-ping
                group-hover:opacity-20
              "
              style={{ backgroundColor: item.accent }}
            />

            <span
              className="
                relative h-1.5 w-1.5
                rounded-full
                transition-all duration-300
                group-hover:scale-110
              "
              style={{
                backgroundColor: item.accent,
                boxShadow: `0 0 8px ${item.accent}`,
              }}
            />
          </span>

          <span
            className="
              whitespace-nowrap
              text-[9px]
              font-medium
              tracking-[0.025em]
              text-[#686872]
              transition-colors duration-300
              group-hover:text-[#90909A]
            "
          >
            {item.desc}
          </span>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-1/2
          h-px w-0
          -translate-x-1/2
          opacity-0
          blur-[0.5px]
          transition-all duration-700
          group-hover:w-[54%]
          group-hover:opacity-80
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

function MovingRow({ items, speed = "52s" }) {
  const repeated = [...items, ...items];

  return (
    <div className="relative">
      <div
        className="social-row flex w-max gap-3.5"
        style={{
          animationDuration: speed,
          willChange: "transform",
        }}
      >
        {repeated.map((item, index) => (
          <TeamCard
            key={`${item.name}-${index}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default function SocialProof() {
  const sectionRef = useReveal();

  return (
    <>
      <section
        ref={sectionRef}
        className="
          reveal-section
          relative overflow-hidden
          bg-[#050505]
          py-9
          sm:py-10
          lg:py-11
        "
      >
        {/* =====================================================
            TOP TRANSITION
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute inset-x-0 top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/[0.07]
            to-transparent
          "
        />

        {/* =====================================================
            BACKGROUND DEPTH
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* Left violet atmosphere */}
          <div
            className="
              absolute
              left-[5%] top-[-140px]
              h-[330px] w-[330px]
              rounded-full
              bg-[#765AB9]/[0.048]
              blur-[130px]
            "
          />

          {/* Right blue atmosphere */}
          <div
            className="
              absolute
              bottom-[-150px] right-[5%]
              h-[350px] w-[350px]
              rounded-full
              bg-[#5579CB]/[0.04]
              blur-[140px]
            "
          />

          {/* Center depth */}
          <div
            className="
              absolute
              left-1/2 top-[62%]
              h-[220px] w-[720px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#846DB9]/[0.022]
              blur-[125px]
            "
          />

          {/* Texture */}
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
              backgroundSize: "32px 32px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />
        </div>

        <div className="relative">
          {/* =====================================================
              HEADING
          ===================================================== */}

          <div
            className="
              mx-auto mb-8
              max-w-7xl
              px-4
              text-center
              sm:px-6
              lg:px-8
            "
          >
            <p className="section-label text-[#9186B3]">
              Built for Recruitment Teams
            </p>

            <h2
              className="
                section-title
                mx-auto mt-2.5
                max-w-4xl
                text-[#F3F3F5]
              "
            >
              Designed for the teams managing hiring every day.
            </h2>

            <p
              className="
                section-description
                mx-auto mt-4
                max-w-2xl
                text-[#74747E]
              "
            >
              Built to support recruiters across sourcing, screening,
              candidate management and everyday hiring work.
            </p>
          </div>

          {/* =====================================================
              SINGLE PREMIUM MARQUEE
          ===================================================== */}

          <div className="relative py-2">
            {/* Very subtle marquee base */}
            <div
              className="
                pointer-events-none
                absolute inset-x-[12%] top-1/2
                h-24
                -translate-y-1/2
                rounded-full
                bg-[#8873C0]/[0.018]
                blur-[70px]
              "
            />

            {/* Left cinematic fade */}
            <div
              className="
                pointer-events-none
                absolute bottom-0 left-0 top-0
                z-20
                w-20
                bg-gradient-to-r
                from-[#050505]
                via-[#050505]/98
                to-transparent
                sm:w-36
                lg:w-52
              "
            />

            {/* Right cinematic fade */}
            <div
              className="
                pointer-events-none
                absolute bottom-0 right-0 top-0
                z-20
                w-20
                bg-gradient-to-l
                from-[#050505]
                via-[#050505]/98
                to-transparent
                sm:w-36
                lg:w-52
              "
            />

            <MovingRow
              items={TEAMS}
              speed="52s"
            />
          </div>

          {/* =====================================================
              BOTTOM STATEMENT
          ===================================================== */}

          <div
            className="
              mx-auto mt-8
              max-w-7xl
              px-4
              text-center
              sm:px-6
              lg:px-8
            "
          >
            <div
              className="
                mx-auto flex
                max-w-2xl
                items-center
                justify-center
                gap-4
              "
            >
              <span
                className="
                  hidden h-px w-12
                  bg-gradient-to-r
                  from-transparent
                  to-white/[0.10]
                  sm:block
                "
              />

              <p
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.025em]
                  text-[#74747E]
                  sm:text-[11px]
                "
              >
                Everything your recruitment team needs to manage hiring in one
                place.
              </p>

              <span
                className="
                  hidden h-px w-12
                  bg-gradient-to-l
                  from-transparent
                  to-white/[0.10]
                  sm:block
                "
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM TRANSITION
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/[0.045]
            to-transparent
          "
        />
      </section>

      {/* =======================================================
          MOTION
      ======================================================= */}

      <style>{`
        @keyframes socialMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .social-row {
          animation-name: socialMove;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .social-row:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .social-row {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}