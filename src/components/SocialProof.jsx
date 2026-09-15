import useReveal from "../hooks/useReveal";

const TEAMS = [
  {
    name: "Recruitment Agencies",
    abbr: "RA",
    desc: "Agency hiring",
    accent: "#6478C8",
  },
  {
    name: "Staffing Teams",
    abbr: "ST",
    desc: "Workforce delivery",
    accent: "#73808F",
  },
  {
    name: "Talent Partners",
    abbr: "TP",
    desc: "Talent strategy",
    accent: "#7565B5",
  },
  {
    name: "Executive Search",
    abbr: "ES",
    desc: "Leadership hiring",
    accent: "#8967B8",
  },
  {
    name: "Hiring Teams",
    abbr: "HT",
    desc: "Internal hiring",
    accent: "#557FAE",
  },
  {
    name: "Recruitment Ops",
    abbr: "RO",
    desc: "Hiring operations",
    accent: "#5F76B8",
  },
  {
    name: "Talent Advisory",
    abbr: "TA",
    desc: "Hiring intelligence",
    accent: "#7663A7",
  },
  {
    name: "People Teams",
    abbr: "PT",
    desc: "People operations",
    accent: "#7D858F",
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
        relative
        flex h-[54px] w-[54px]
        shrink-0
        items-center justify-center
        overflow-hidden
        rounded-[17px]

        border border-[#20202A]/[0.07]
        bg-white

        shadow-[0_7px_22px_rgba(28,28,40,.055)]

        transition-all duration-500
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:-translate-y-[1px]
        group-hover:border-[#20202A]/[0.11]
        group-hover:shadow-[0_12px_30px_rgba(28,28,40,.09)]
      "
    >
      {/* Permanent soft brand tint */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.09]
          transition-opacity duration-500
          group-hover:opacity-[0.16]
        "
        style={{
          background: `radial-gradient(
            circle at 28% 22%,
            ${item.accent},
            transparent 72%
          )`,
        }}
      />

      {/* Inner premium surface */}
      <div
        className="
          pointer-events-none
          absolute inset-[5px]
          rounded-[13px]
          bg-white/55
          opacity-80
          backdrop-blur-sm
        "
      />

      {/* Soft colored halo behind icon */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-8 w-8
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          opacity-[0.08]
          blur-[11px]
          transition-all duration-500
          group-hover:scale-125
          group-hover:opacity-[0.18]
        "
        style={{ backgroundColor: item.accent }}
      />

      <svg
        className="
          relative
          h-[22px] w-[22px]
          drop-shadow-[0_2px_5px_rgba(20,20,30,.06)]
        "
        viewBox="0 0 24 24"
        fill="none"
        stroke={item.accent}
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {icons[item.abbr]}
      </svg>
    </div>
  );
}

function TeamCard({ item }) {
  return (
    <div
      className="
        group
        relative

        flex min-w-[260px]
        items-center gap-4

        overflow-hidden
        rounded-[21px]

        border border-[#20202A]/[0.065]

        bg-white

        px-[18px] py-[17px]

        shadow-[0_8px_28px_rgba(24,24,35,.045)]

        transition-all duration-500
        ease-[cubic-bezier(.22,1,.36,1)]

        hover:-translate-y-[5px]
        hover:border-[#37303F]/[0.13]
        hover:shadow-[0_24px_58px_rgba(39,34,54,.12)]
      "
    >
      {/* Permanent soft color wash */}
      <div
        className="
          pointer-events-none
          absolute inset-0

          opacity-[0.035]

          transition-opacity duration-500

          group-hover:opacity-[0.085]
        "
        style={{
          background: `radial-gradient(
            circle at 10% 50%,
            ${item.accent},
            transparent 58%
          )`,
        }}
      />

      {/* Secondary color depth */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20 -top-20

          h-[170px] w-[170px]
          rounded-full

          opacity-[0.018]
          blur-[50px]

          transition-all duration-700

          group-hover:scale-110
          group-hover:opacity-[0.07]
        "
        style={{
          backgroundColor: item.accent,
        }}
      />

      {/* Larger atmospheric glow */}
      <div
        className="
          pointer-events-none
          absolute

          -left-20 top-1/2

          h-[190px] w-[190px]

          -translate-y-1/2
          scale-75

          rounded-full

          opacity-0
          blur-[65px]

          transition-all duration-700

          group-hover:scale-110
          group-hover:opacity-[0.11]
        "
        style={{
          backgroundColor: item.accent,
        }}
      />

      {/* Clean glass-like surface */}
      <div
        className="
          pointer-events-none
          absolute inset-0

          bg-gradient-to-br
          from-white/60
          via-transparent
          to-white/20

          opacity-40

          transition-opacity duration-500

          group-hover:opacity-70
        "
      />

      {/* Soft moving reflection — no line */}
      <div
        className="
          pointer-events-none

          absolute
          -left-[70%]
          top-[-70%]

          h-[240%]
          w-[35%]

          rotate-[16deg]

          bg-white/45
          blur-[16px]

          opacity-0

          transition-all
          duration-[900ms]
          ease-out

          group-hover:left-[135%]
          group-hover:opacity-60
        "
      />

      <TeamIcon item={item} />

      <div className="relative min-w-0 flex-1">
        <p
          className="
            truncate

            text-[13px]
            font-bold
            tracking-[-0.015em]

            text-[#232329]

            transition-colors duration-300

            group-hover:text-[#141418]
          "
        >
          {item.name}
        </p>

        <p
          className="
            mt-1.5

            whitespace-nowrap

            text-[9.5px]
            font-medium
            tracking-[0.015em]

            text-[#7C7C86]

            transition-colors duration-300

            group-hover:text-[#575761]
          "
        >
          {item.desc}
        </p>
      </div>
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

          bg-white

          py-11
          sm:py-12
          lg:py-12
        "
      >
        {/* section transition */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 top-0
            h-px

            bg-gradient-to-r
            from-transparent
            via-[#25252D]/[0.08]
            to-transparent
          "
        />

        {/* background depth */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              left-[4%] top-[-170px]

              h-[360px] w-[360px]
              rounded-full

              bg-[#765AB9]/[0.035]
              blur-[145px]
            "
          />

          <div
            className="
              absolute
              bottom-[-180px] right-[4%]

              h-[370px] w-[370px]
              rounded-full

              bg-[#5579CB]/[0.03]
              blur-[150px]
            "
          />

          <div
            className="
              absolute
              left-1/2 top-[62%]

              h-[220px] w-[720px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-[#846DB9]/[0.018]
              blur-[125px]
            "
          />

          {/* very restrained texture */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(38,38,48,0.08) 1px, transparent 0)",
              backgroundSize: "34px 34px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 22%, black 78%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 22%, black 78%, transparent)",
            }}
          />
        </div>

        <div className="relative">
          {/* Header — no eyebrow label */}
          <div
            className="
              mx-auto mb-9
              max-w-7xl
              px-4
              text-center

              sm:px-6
              lg:px-8
            "
          >
            <h2 className="section-title">
              Designed for the teams managing hiring every day.
            </h2>

            <p
              className="section-description mt-4"
            >
              Built to support recruiters across sourcing, screening,
              candidate management and everyday hiring work.
            </p>
          </div>

          {/* Premium single-row marquee */}
          <div className="relative py-3">
            {/* soft base */}
            <div
              className="
                pointer-events-none
                absolute inset-x-[12%] top-1/2

                h-28
                -translate-y-1/2

                rounded-full

                bg-[#7661A7]/[0.018]
                blur-[75px]
              "
            />

            {/* Left fade */}
            <div
              className="
                pointer-events-none
                absolute bottom-0 left-0 top-0
                z-20

                w-20

                bg-gradient-to-r
                from-white
                via-white/95
                to-transparent

                sm:w-36
                lg:w-52
              "
            />

            {/* Right fade */}
            <div
              className="
                pointer-events-none
                absolute bottom-0 right-0 top-0
                z-20

                w-20

                bg-gradient-to-l
                from-white
                via-white/95
                to-transparent

                sm:w-36
                lg:w-52
              "
            />

            <MovingRow items={TEAMS} speed="52s" />
          </div>

         {/* Bottom statement */}
<div
  className="
    mx-auto mt-9
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
    <p
      className="
        text-[10px]
        font-medium
        tracking-[0.025em]
        text-[#73737D]

        sm:text-[11px]
      "
    >
      Everything your recruitment team needs to manage hiring in one
      place.
    </p>
  </div>
</div>
        </div>

        {/* bottom transition */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-px

            bg-gradient-to-r
            from-transparent
            via-[#25252D]/[0.065]
            to-transparent
          "
        />
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