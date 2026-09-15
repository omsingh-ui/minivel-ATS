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
        flex h-[58px] w-[58px]
        shrink-0
        items-center justify-center

        transition-transform
        duration-500
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:-translate-y-[2px]
        group-hover:scale-[1.04]
      "
    >
      {/* OUTER ACCENT HALO */}
      <div
        className="
          pointer-events-none
          absolute

          h-[54px] w-[54px]
          rounded-[19px]

          opacity-[0.09]
          blur-[13px]

          transition-all duration-500

          group-hover:scale-110
          group-hover:opacity-[0.18]
        "
        style={{
          backgroundColor: item.accent,
        }}
      />

      {/* MAIN ICON MODULE */}
      <div
        className="
          relative
          flex h-[52px] w-[52px]
          items-center justify-center

          overflow-hidden
          rounded-[17px]

          border border-[#25232D]/[0.075]

          bg-gradient-to-br
          from-white
          via-[#FCFCFD]
          to-[#F4F4F7]

          shadow-[0_8px_22px_rgba(28,27,38,.07)]

          transition-all duration-500

          group-hover:border-[#4A4058]/[0.13]
          group-hover:shadow-[0_13px_30px_rgba(33,29,45,.11)]
        "
      >
        {/* COLOR WASH */}
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
              circle at 25% 20%,
              ${item.accent},
              transparent 66%
            )`,
          }}
        />

        {/* LOWER COLOR DEPTH */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-5 -right-5

            h-12 w-12
            rounded-full

            opacity-[0.08]
            blur-[16px]

            transition-all duration-500

            group-hover:opacity-[0.16]
          "
          style={{
            backgroundColor: item.accent,
          }}
        />

        {/* GLASS INNER PANEL */}
        <div
          className="
            pointer-events-none
            absolute inset-[5px]

            rounded-[13px]

            border border-white/70
            bg-white/30
          "
        />

        {/* ICON GLOW */}
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2

            h-7 w-7

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            opacity-[0.08]
            blur-[10px]

            transition-all duration-500

            group-hover:scale-125
            group-hover:opacity-[0.20]
          "
          style={{
            backgroundColor: item.accent,
          }}
        />

        {/* ACTUAL ICON */}
        <svg
          className="
            relative z-10

            h-[22px] w-[22px]

            drop-shadow-[0_3px_7px_rgba(25,24,35,.08)]

            transition-all
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:scale-[1.08]
          "
          viewBox="0 0 24 24"
          fill="none"
          stroke={item.accent}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[item.abbr]}
        </svg>

        {/* CORNER DETAIL */}
        <div
          className="
            pointer-events-none
            absolute
            right-[7px] top-[7px]

            h-[3px] w-[3px]
            rounded-full

            opacity-45

            transition-all duration-500

            group-hover:scale-125
            group-hover:opacity-80
          "
          style={{
            backgroundColor: item.accent,
          }}
        />

        {/* SOFT REFLECTION */}
        <div
          className="
            pointer-events-none

            absolute
            -left-[80%] top-[-60%]

            h-[220%] w-[30%]

            rotate-[18deg]

            bg-white/70
            blur-[8px]

            opacity-0

            transition-all duration-700

            group-hover:left-[125%]
            group-hover:opacity-60
          "
        />
      </div>
    </div>
  );
}

function TeamCard({ item }) {
  return (
    <div
      className="
        group
        relative

        flex min-w-[280px]
        items-center gap-[15px]

        overflow-hidden
        rounded-[23px]

        border border-[#25232D]/[0.075]
        bg-[#FCFCFD]

        px-[18px] py-[18px]

        shadow-[0_10px_32px_rgba(28,26,38,.055)]

        transition-all
        duration-500
        ease-[cubic-bezier(.22,1,.36,1)]

        hover:-translate-y-[6px]
        hover:border-[#5E506F]/[0.15]
        hover:shadow-[0_26px_65px_rgba(39,33,53,.13)]
      "
    >
      {/* =============================================
          AMBIENT ACCENT
      ============================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[65px] top-1/2

          h-[160px] w-[160px]
          -translate-y-1/2

          rounded-full
          opacity-[0.07]
          blur-[52px]

          transition-all duration-700

          group-hover:scale-125
          group-hover:opacity-[0.15]
        "
        style={{
          backgroundColor: item.accent,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[70px] -top-[85px]

          h-[165px] w-[165px]

          rounded-full
          opacity-[0.025]
          blur-[55px]

          transition-all duration-700

          group-hover:scale-110
          group-hover:opacity-[0.08]
        "
        style={{
          backgroundColor: item.accent,
        }}
      />

      {/* =============================================
          PREMIUM SURFACE
      ============================================= */}

      <div
        className="
          pointer-events-none
          absolute inset-[1px]

          rounded-[22px]

          bg-gradient-to-br
          from-white/90
          via-white/40
          to-transparent
        "
      />

      {/* soft lower depth */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0 left-[15%] right-[15%]

          h-10

          rounded-full

          opacity-[0.025]
          blur-[20px]
        "
        style={{
          backgroundColor: item.accent,
        }}
      />

      {/* =============================================
          MOVING REFLECTION
      ============================================= */}

      <div
        className="
          pointer-events-none

          absolute
          -left-[55%] top-[-80%]

          h-[260%] w-[26%]

          rotate-[17deg]

          bg-white/60
          blur-[18px]

          opacity-0

          transition-all
          duration-[850ms]
          ease-out

          group-hover:left-[135%]
          group-hover:opacity-60
        "
      />

      {/* =============================================
          ICON
      ============================================= */}

      <div className="relative shrink-0">
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2

            h-[62px] w-[62px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            opacity-[0.08]
            blur-[18px]

            transition-all duration-500

            group-hover:scale-125
            group-hover:opacity-[0.17]
          "
          style={{
            backgroundColor: item.accent,
          }}
        />

        <TeamIcon item={item} />
      </div>

      {/* =============================================
          CONTENT
      ============================================= */}

      <div className="relative min-w-0 flex-1">
        <div className="flex items-center justify-between gap-4">
          {/* text */}
          <div className="min-w-0">
            <p
              className="
                truncate

                text-[13px]
                font-bold
                tracking-[-0.02em]

                text-[#202026]

                transition-colors duration-300

                group-hover:text-[#111115]
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
                tracking-[0.01em]

                text-[#7B7B85]

                transition-colors duration-300

                group-hover:text-[#5D5D67]
              "
            >
              {item.desc}
            </p>
          </div>

          {/* =============================================
              MINI ATS SIGNAL
          ============================================= */}

          <div
            className="
              relative

              flex h-[30px] w-[38px]
              shrink-0
              items-end justify-center
              gap-[3px]

              overflow-hidden
              rounded-[10px]

              border border-[#25232D]/[0.06]
              bg-white/65

              px-[8px] pb-[6px] pt-[5px]

              shadow-[0_5px_16px_rgba(28,27,38,.04)]

              transition-all duration-500

              group-hover:-translate-y-[1px]
              group-hover:border-[#4D435D]/[0.12]
              group-hover:shadow-[0_8px_22px_rgba(37,31,48,.075)]
            "
          >
            {/* signal atmosphere */}
            <div
              className="
                pointer-events-none
                absolute inset-0

                opacity-[0.035]

                transition-opacity duration-500

                group-hover:opacity-[0.11]
              "
              style={{
                background: `radial-gradient(
                  circle at 50% 100%,
                  ${item.accent},
                  transparent 72%
                )`,
              }}
            />

            {/* bar 1 */}
            <span
              className="
                relative

                h-[6px] w-[3px]
                rounded-full

                opacity-55

                transition-all duration-500

                group-hover:h-[9px]
                group-hover:opacity-80
              "
              style={{
                backgroundColor: item.accent,
              }}
            />

            {/* bar 2 */}
            <span
              className="
                relative

                h-[12px] w-[3px]
                rounded-full

                opacity-80

                transition-all duration-500

                group-hover:h-[16px]
                group-hover:opacity-100
              "
              style={{
                backgroundColor: item.accent,
              }}
            />

            {/* bar 3 */}
            <span
              className="
                relative

                h-[8px] w-[3px]
                rounded-full

                opacity-60

                transition-all duration-500

                group-hover:h-[12px]
                group-hover:opacity-90
              "
              style={{
                backgroundColor: item.accent,
              }}
            />
          </div>
        </div>

        {/* =============================================
            MICRO BRAND DETAIL
        ============================================= */}

        <div className="mt-[11px] flex items-center gap-2.5">
          {/* dynamic accent rail */}
          <div
            className="
              relative

              h-[3px] w-[30px]

              overflow-hidden
              rounded-full

              bg-[#EDEDF0]
            "
          >
            <div
              className="
                absolute inset-y-0 left-0

                w-[42%]
                rounded-full

                transition-all
                duration-500
                ease-[cubic-bezier(.22,1,.36,1)]

                group-hover:w-full
              "
              style={{
                backgroundColor: item.accent,
              }}
            />
          </div>

          <span
            className="
              text-[7px]
              font-bold uppercase
              tracking-[0.14em]
              text-[#A0A0A8]

              transition-colors duration-300

              group-hover:text-[#85858F]
            "
          >
            Minivel ATS
          </span>
        </div>
      </div>

      {/* =============================================
          BOTTOM ACCENT GLOW
      ============================================= */}

      <div
        className="
          pointer-events-none

          absolute
          bottom-[-1px] left-1/2

          h-[2px] w-[42%]

          -translate-x-1/2

          rounded-full

          opacity-0
          blur-[1px]

          transition-all duration-500

          group-hover:w-[58%]
          group-hover:opacity-40
        "
        style={{
          backgroundColor: item.accent,
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