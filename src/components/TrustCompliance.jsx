import useReveal from "../hooks/useReveal";
const TRUST_BADGES = [
  {
    label: "GDPR Compliant",
    subtext: "Responsible handling of candidate and client information.",
    accent: "#7F9FE8",
    glow: "rgba(92,126,205,0.15)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 3 19 6v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6z"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2 2 4-4"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "CCPA Compliant",
    subtext: "Privacy controls designed around modern data requirements.",
    accent: "#A18CE3",
    glow: "rgba(135,105,210,0.15)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="8" strokeWidth="1.7" />
        <path d="M12 8v5" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "99.9% Uptime",
    subtext: "Dependable availability for always-moving recruitment teams.",
    accent: "#8EA8B4",
    glow: "rgba(110,145,160,0.13)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M4 14h4l2-6 3 10 2-6h5"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "< 2hr Response",
    subtext:
      "Responsive support when your recruitment workflow needs attention.",
    accent: "#B69A79",
    glow: "rgba(170,132,91,0.12)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M5 6h14v10H9l-4 3z"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8 10h8M8 13h5"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "SOC 2 Type II",
    subtext:
      "Independent security controls supporting enterprise requirements.",
    accent: "#A88CA0",
    glow: "rgba(158,116,144,0.12)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <rect x="6" y="10" width="12" height="10" rx="2" strokeWidth="1.7" />
        <path d="M8.5 10V7.5a3.5 3.5 0 017 0V10" strokeWidth="1.7" />
        <circle cx="12" cy="15" r="1.4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "AES-256 Encryption",
    subtext: "Strong encryption designed to protect sensitive recruitment data.",
    accent: "#8893C8",
    glow: "rgba(118,126,190,0.13)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 3 5 6v5c0 4.2 2.5 7.6 7 10 4.5-2.4 7-5.8 7-10V6z"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12h5M12 9.5v5"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const ASSURANCE_STATS = [
  { value: "99.97%", label: "Platform uptime" },
  { value: "< 1.5hrs", label: "Average support response" },
  { value: "Zero", label: "Reported data breaches" },
  { value: "5 min", label: "Average live chat response" },
];

function SecurityCard({ badge, index }) {
  return (
    <div
      className="
        security-card
        group relative overflow-hidden
        rounded-[20px]
        border border-white/[0.06]
        bg-[#0B0B0E]
        p-5
        shadow-[0_12px_38px_rgba(0,0,0,0.28)]
        transition-all duration-500 ease-out
        hover:-translate-y-1.5
        hover:border-white/[0.12]
        hover:bg-[#0F0F13]
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.52)]
      "
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {/* ambient glow */}
      <div
        className="
          pointer-events-none absolute -right-14 -top-14
          h-36 w-36 rounded-full
          opacity-0 blur-[50px]
          transition-all duration-700
          group-hover:scale-125
          group-hover:opacity-100
        "
        style={{ backgroundColor: badge.glow }}
      />

      {/* scan line */}
      <div
        className="
          security-scan
          pointer-events-none absolute left-0 right-0
          top-[-20%] h-[18%]
          bg-gradient-to-b
          from-transparent
          via-white/[0.025]
          to-transparent
          opacity-0
          group-hover:opacity-100
        "
      />

      {/* top reflection */}
      <div className="pointer-events-none absolute left-[16%] right-[16%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent" />

      <div className="relative flex items-start gap-4">
        {/* icon */}
        <div
          className="
            relative flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-[13px]
            border border-white/[0.07]
            bg-[#151519]
            transition-all duration-500
            group-hover:-translate-y-0.5
            group-hover:scale-[1.08]
            group-hover:border-white/[0.12]
          "
          style={{ color: badge.accent }}
        >
          <div
            className="absolute h-8 w-8 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25"
            style={{ backgroundColor: badge.accent }}
          />

          <div className="relative">{badge.icon}</div>
        </div>

        <div className="pt-0.5">
          <div className="mb-1 flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: badge.accent,
                boxShadow: `0 0 8px ${badge.accent}`,
              }}
            />

            <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#555560]">
              Control active
            </span>
          </div>

          <h3 className="text-[13px] font-bold tracking-[-0.015em] text-[#EDEDF0] transition-colors duration-300 group-hover:text-white">
            {badge.label}
          </h3>

          <p className="mt-1.5 text-[10.5px] leading-[1.7] text-[#686872] transition-colors duration-300 group-hover:text-[#85858F]">
            {badge.subtext}
          </p>
        </div>
      </div>

      {/* bottom accent */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-1/2
          h-px w-0 -translate-x-1/2
          opacity-0 transition-all duration-700
          group-hover:w-[50%]
          group-hover:opacity-70
        "
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${badge.accent},
            transparent
          )`,
        }}
      />
    </div>
  );
}
export default function TrustCompliance() {
  const revealRef = useReveal();

  return (
   <section
  ref={revealRef}
  id="security"
  className="
    reveal-section
    relative overflow-hidden
    bg-[#050505]
        pb-11 pt-7
        sm:pb-12 sm:pt-8
        lg:pb-13 lg:pt-9
      "
    >
      {/* section boundary */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-[-120px] h-[400px] w-[400px] rounded-full bg-[#5876BB]/[0.035] blur-[145px]" />

        <div className="absolute -right-44 bottom-[-120px] h-[410px] w-[410px] rounded-full bg-[#8B6FB7]/[0.035] blur-[145px]" />

        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.055) 1px, transparent 0)",
            backgroundSize: "31px 31px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
         <div>
  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9186B3] sm:text-[11px]">
    Security & Data Protection
  </p>
</div>

          <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.07] tracking-[-0.045em] text-[#F3F3F5] sm:text-4xl lg:text-[44px]">
            Your recruitment data,

            <span className="mt-1 block bg-gradient-to-r from-white via-[#BAB2D9] to-[#9279C9] bg-clip-text text-transparent">
              protected at every step.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#74747E]">
           Candidate and client information deserves careful protection. Minivel ATS
is designed with secure access, responsible data handling and reliable
platform operations in mind.
          </p>
        </div>

        {/* security nodes */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_BADGES.map((badge, index) => (
            <SecurityCard
              key={badge.label}
              badge={badge}
              index={index}
            />
          ))}
        </div>

        {/* assurance console */}
        <div
          className="
            group relative mt-6 overflow-hidden
            rounded-[25px]
            border border-white/[0.07]
            bg-[#09090C]
            shadow-[0_30px_85px_rgba(0,0,0,0.50)]
          "
        >
          {/* panel atmosphere */}
          <div className="absolute -left-24 -top-32 h-[300px] w-[300px] rounded-full bg-[#607CC0]/[0.055] blur-[105px]" />

          <div className="absolute -right-28 bottom-[-150px] h-[330px] w-[330px] rounded-full bg-[#8B73B5]/[0.045] blur-[115px]" />

          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="absolute left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.16] to-transparent" />

          <div className="relative">
            {/* Panel header */}
<div className="border-b border-white/[0.06] px-6 py-5 sm:px-8 lg:flex lg:items-center lg:justify-between">
  <div>
    <div className="flex items-center gap-2">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9A84D8] opacity-20" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-[#9A84D8]" />
      </span>

      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7D6BA8]">
        Operational Assurance
      </p>
    </div>

    <h3 className="mt-2 text-[18px] font-bold leading-[1.35] tracking-[-0.02em] text-[#EFEFF2]">
      Security built for everyday recruitment.
    </h3>
  </div>

  <p className="mt-3 max-w-md text-[12px] leading-6 text-[#74747E] lg:mt-0 lg:text-right">
    Reliable protection and responsive support for the teams
    using Minivel ATS every day.
  </p>
</div>
            {/* metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {ASSURANCE_STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    group/stat relative overflow-hidden
                    px-6 py-6 sm:px-8
                    transition-all duration-500
                    hover:bg-white/[0.018]

                    ${
                      index % 2 === 0
                        ? "border-r border-white/[0.055]"
                        : ""
                    }

                    ${
                      index < 2
                        ? "border-b border-white/[0.055] lg:border-b-0"
                        : ""
                    }

                    ${
                      index === 1 || index === 2
                        ? "lg:border-r lg:border-white/[0.055]"
                        : ""
                    }
                  `}
                >
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#927BD0]/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover/stat:opacity-100" />

                  <div className="relative">
                    <div
                      className="
                        text-[26px] font-black
                        tracking-[-0.045em]
                        text-[#D7D7DD]
                        transition-all duration-500
                        group-hover/stat:-translate-y-0.5
                        group-hover/stat:text-white
                        sm:text-[29px]
                      "
                    >
                      {stat.value}
                    </div>

                    <div className="mt-1.5 text-[9.5px] font-medium text-[#666671]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* verification note */}
       
      </div>

      <style>{`
        @keyframes securityReveal {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes securityScan {
          from {
            transform: translateY(-120%);
          }

          to {
            transform: translateY(700%);
          }
        }

        .security-card {
          animation:
            securityReveal 650ms cubic-bezier(.22,1,.36,1) both;
        }

        .security-card:hover .security-scan {
          animation:
            securityScan 1.45s ease-in-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .security-card,
          .security-card:hover .security-scan {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}