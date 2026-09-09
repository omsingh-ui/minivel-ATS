const TRUST_BADGES = [
  {
    label: "GDPR Compliant",
    subtext: "Responsible handling of candidate and client information.",
    accent: "#5376A7",
    soft: "#EDF3FA",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
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
    accent: "#7B70A4",
    soft: "#F2EFF8",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="8" strokeWidth="1.7" />
        <path d="M12 8v5" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },

  {
    label: "99.9% Uptime",
    subtext: "Dependable availability for always-moving recruitment teams.",
    accent: "#638992",
    soft: "#EDF5F5",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
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
    subtext: "Responsive support when your recruitment workflow needs attention.",
    accent: "#AA875D",
    soft: "#F7F2EA",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path
          d="M5 6h14v10H9l-4 3z"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M8 10h8M8 13h5" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },

  {
    label: "SOC 2 Type II",
    subtext: "Independent security controls supporting enterprise requirements.",
    accent: "#956E80",
    soft: "#F6EFF2",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <rect x="6" y="10" width="12" height="10" rx="2" strokeWidth="1.7" />
        <path d="M8.5 10V7.5a3.5 3.5 0 017 0V10" strokeWidth="1.7" />
        <circle cx="12" cy="15" r="1.4" strokeWidth="1.5" />
      </svg>
    ),
  },

  {
    label: "AES-256 Encryption",
    subtext: "Strong encryption designed to protect sensitive recruitment data.",
    accent: "#66779D",
    soft: "#EEF1F7",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path
          d="M12 3 5 6v5c0 4.2 2.5 7.6 7 10 4.5-2.4 7-5.8 7-10V6z"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M9.5 12h5M12 9.5v5" strokeWidth="1.6" strokeLinecap="round" />
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

function SecurityCard({ badge }) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-[21px]
        border border-[#E1E7EE]
        bg-white/88
        p-5
        shadow-[0_8px_28px_rgba(31,49,74,0.04)]
        backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:-translate-y-1.5
        hover:border-[#CBD6E3]
        hover:bg-white
        hover:shadow-[0_22px_55px_rgba(31,49,74,0.11)]
      "
    >
      {/* hover surface */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
        style={{
          background: `linear-gradient(
            145deg,
            ${badge.soft},
            rgba(255,255,255,.98) 62%
          )`,
        }}
      />

      {/* glow */}
      <div
        className="
          pointer-events-none absolute -right-14 -top-14
          h-36 w-36 rounded-full
          opacity-0 blur-[45px]
          transition-all duration-700
          group-hover:scale-125
          group-hover:opacity-20
        "
        style={{ backgroundColor: badge.accent }}
      />

      {/* light sweep */}
      <div
        className="
          pointer-events-none absolute -left-[90%] top-0
          h-full w-[45%] rotate-[12deg]
          bg-gradient-to-r from-transparent via-white/50 to-transparent
          opacity-0 transition-all duration-[850ms]
          group-hover:left-[140%]
          group-hover:opacity-60
        "
      />

      <div className="relative flex items-start gap-4">
        <div
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-[14px] border
            shadow-[0_6px_16px_rgba(30,50,80,0.05)]
            transition-all duration-500
            group-hover:-translate-y-0.5
            group-hover:scale-110
            group-hover:-rotate-2
          "
          style={{
            color: badge.accent,
            backgroundColor: badge.soft,
            borderColor: `${badge.accent}22`,
          }}
        >
          {badge.icon}
        </div>

        <div className="pt-0.5">
          <h3 className="text-[14px] font-bold tracking-[-0.015em] text-[#20324B]">
            {badge.label}
          </h3>

          <p className="mt-1.5 text-[11px] leading-[1.7] text-[#778599]">
            {badge.subtext}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TrustCompliance() {
  return (
    <section
      id="security"
      className="
        relative overflow-hidden
        bg-[#F7F8FA]
        pt-7 pb-9
        sm:pt-8 sm:pb-10
        lg:pt-9 lg:pb-11
      "
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[360px] w-[360px] rounded-full bg-[#AEC0D9]/16 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-80px] h-[380px] w-[380px] rounded-full bg-[#D3C2AC]/10 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(54,73,99,.11) .7px, transparent .7px)",
          backgroundSize: "29px 29px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto mb-7 max-w-3xl text-center">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#DCE4ED]
              bg-white/75
              px-3.5 py-1.5
              text-[10px] font-bold
              uppercase tracking-[0.22em]
              text-[#667A97]
              shadow-[0_6px_20px_rgba(37,53,75,0.03)]
              backdrop-blur-xl
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 3 19 6v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6z"
                strokeWidth="1.7"
              />
              <path
                d="m9 12 2 2 4-4"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            Security & Compliance
          </span>

          <h2
            className="
              mt-3
              text-3xl font-extrabold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#17283F]
              sm:text-4xl
              lg:text-[44px]
            "
          >
            Trust is built into
            <span className="block bg-gradient-to-r from-[#526E98] via-[#7B789C] to-[#A48769] bg-clip-text text-transparent">
              every layer.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#718094]">
            Candidate information is sensitive by nature. Minivel is designed
            around secure access, responsible data handling and dependable
            platform operations.
          </p>
        </div>

        {/* Security cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_BADGES.map((badge) => (
            <SecurityCard key={badge.label} badge={badge} />
          ))}
        </div>

        {/* Assurance control panel */}
        <div
          className="
            group relative mt-6 overflow-hidden
            rounded-[26px]
            border border-[#2A3C57]
            bg-[#16243A]
            shadow-[0_28px_75px_rgba(31,45,67,0.17)]
          "
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#15243A_0%,#1B2D47_52%,#273149_100%)]" />

          {/* panel glows */}
          <div className="absolute -left-24 -top-36 h-[320px] w-[320px] rounded-full bg-[#6F8FB9]/13 blur-[100px]" />

          <div className="absolute -right-28 bottom-[-160px] h-[340px] w-[340px] rounded-full bg-[#B49B79]/10 blur-[110px]" />

          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* top reflection */}
          <div className="absolute left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative">
            {/* panel heading */}
            <div className="border-b border-white/[0.07] px-6 py-5 sm:px-8 lg:flex lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8EA4C3] opacity-30" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-[#8EA4C3]" />
                  </span>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8EA4C3]">
                    Operational assurance
                  </p>
                </div>

                <h3 className="mt-2 text-[18px] font-bold tracking-[-0.02em] text-white">
                  Security that extends beyond compliance.
                </h3>
              </div>

              <p className="mt-2 max-w-md text-[11px] leading-5 text-[#8796AA] lg:mt-0 lg:text-right">
                Reliability, support and protection designed around the
                day-to-day reality of recruitment teams.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {ASSURANCE_STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    group/stat relative overflow-hidden
                    px-6 py-6 sm:px-8
                    transition-all duration-500
                    hover:bg-white/[0.025]

                    ${
                      index % 2 === 0
                        ? "border-r border-white/[0.07]"
                        : ""
                    }

                    ${
                      index < 2
                        ? "border-b border-white/[0.07] lg:border-b-0"
                        : ""
                    }

                    ${
                      index === 1 || index === 2
                        ? "lg:border-r lg:border-white/[0.07]"
                        : ""
                    }
                  `}
                >
                  {/* hover glow */}
                  <div
                    className="
                      absolute left-1/2 top-1/2
                      h-32 w-32
                      -translate-x-1/2 -translate-y-1/2
                      rounded-full bg-[#8EA4C3]/10
                      opacity-0 blur-3xl
                      transition-opacity duration-500
                      group-hover/stat:opacity-100
                    "
                  />

                  <div className="relative">
                    <div
                      className="
                        text-[27px] font-black
                        tracking-[-0.045em]
                        text-[#D5DFEB]
                        transition-all duration-500
                        group-hover/stat:-translate-y-0.5
                        group-hover/stat:text-white
                        sm:text-[30px]
                      "
                    >
                      {stat.value}
                    </div>

                    <div className="mt-1.5 text-[10px] font-medium text-[#8291A7]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* production note */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-[9px] leading-5 text-[#9AA4B1]">
          Security certifications, service levels and operational metrics should
          reflect Minivel's currently verified policies before publication.
        </p>
      </div>
    </section>
  );
}