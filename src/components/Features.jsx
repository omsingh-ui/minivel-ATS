const FEATURES = [
  {
    id: "sourcing",
    label: "Talent Discovery",
    title: "Build a Stronger Talent Pipeline",
    accent: "#7F9FE8",
    glow: "rgba(92,126,205,0.14)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <circle cx="10.5" cy="10.5" r="5.5" strokeWidth="1.7" />
        <path d="m15 15 4 4" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8.5 10.5h4M10.5 8.5v4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    bullets: [
      "Centralize candidate profiles in one searchable workspace",
      "Organize talent into structured pools and pipelines",
      "Search profiles using skills, roles and experience",
      "Keep candidate information accessible across your team",
    ],
  },
  {
    id: "screening",
    label: "AI Screening",
    title: "Move from Resumes to Relevant Candidates Faster",
    accent: "#A18CE3",
    glow: "rgba(135,105,210,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path
          d="M12 3.5 14 8l4.5 2-4.5 2-2 4.5-2-4.5-4.5-2L10 8l2-4.5Z"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="m16.5 16.5 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"
          strokeWidth="1.4"
        />
      </svg>
    ),
    bullets: [
      "Analyze resumes and identify relevant skills",
      "Compare profiles against role requirements",
      "Surface stronger matches for recruiter review",
      "Keep human judgement at the centre",
    ],
  },
  {
    id: "profile-sharing",
    label: "Candidate Sharing",
    title: "Present Better Shortlists to Hiring Teams",
    accent: "#8EA8B4",
    glow: "rgba(110,145,160,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <circle cx="9" cy="9" r="3" strokeWidth="1.7" />
        <path
          d="M4 18c.8-2.5 2.5-4 5-4s4.2 1.5 5 4"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M15 8h5m-2-2 2 2-2 2"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bullets: [
      "Create clear and structured candidate profiles",
      "Share shortlisted candidates with stakeholders",
      "Centralize feedback and candidate evaluation",
      "Keep hiring discussions connected",
    ],
  },
  {
    id: "reports",
    label: "Recruitment Insights",
    title: "Understand What Is Happening Across Your Pipeline",
    accent: "#B69A79",
    glow: "rgba(170,132,91,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path
          d="M5 19V11M12 19V6M19 19V9"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M4 5.5 9 8l4-3 6 2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bullets: [
      "Track candidates across recruitment stages",
      "Monitor activity and turnaround times",
      "Understand pipeline movement clearly",
      "Use recruitment data to improve decisions",
    ],
  },
  {
    id: "support",
    label: "Workflow",
    title: "Give Recruiters More Time to Focus on People",
    accent: "#A88CA0",
    glow: "rgba(158,116,144,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <circle cx="7" cy="7" r="2" strokeWidth="1.6" />
        <circle cx="17" cy="7" r="2" strokeWidth="1.6" />
        <circle cx="12" cy="17" r="2" strokeWidth="1.6" />
        <path
          d="M9 7h6M8 9l3 6m5-6-3 6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    bullets: [
      "Reduce repetitive recruitment administration",
      "Create more consistent hiring workflows",
      "Improve collaboration across recruitment teams",
      "Keep candidate activity organised",
    ],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="
        relative overflow-hidden
        bg-[#050505]
        pb-11 pt-5
        sm:pb-12 sm:pt-6
        lg:pb-14 lg:pt-7
      "
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[10%] h-[360px] w-[360px] rounded-full bg-[#506FAE]/[0.045] blur-[130px]" />

        <div className="absolute -right-40 bottom-[5%] h-[380px] w-[380px] rounded-full bg-[#8D69B5]/[0.045] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
            backgroundSize: "34px 34px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
      </div>

      {/* Previous section transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div
            className="
              inline-flex items-center gap-2.5
              rounded-full
              border border-white/[0.07]
              bg-white/[0.025]
              px-3.5 py-1.5
              backdrop-blur-xl
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9C84DD] opacity-20" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#9C84DD]" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#777781]">
              Platform Capabilities
            </span>
          </div>

          <h2
            className="
              mt-4
              text-3xl font-extrabold
              tracking-[-0.045em]
              text-[#F2F2F4]
              sm:text-4xl
              lg:text-[45px]
              lg:leading-[1.05]
            "
          >
            One intelligent workspace for your

            <span
              className="
                mt-1 block
                bg-gradient-to-r
                from-[#FFFFFF]
                via-[#B8B0D8]
                to-[#9379C9]
                bg-clip-text
                text-transparent
              "
            >
              recruitment workflow
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#777781]">
            Bring sourcing, screening, collaboration and recruitment insights
            into one connected environment built around how recruiters work.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-6">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.id}
              id={feature.id}
              className={`
                feature-card
                group relative overflow-hidden
                rounded-[22px]
                border border-white/[0.065]
                bg-[#0D0D10]
                p-5
                shadow-[0_14px_40px_rgba(0,0,0,0.22)]
                transition-all duration-500 ease-out
                hover:-translate-y-[5px]
                hover:border-white/[0.13]
                hover:bg-[#111115]
                hover:shadow-[0_28px_70px_rgba(0,0,0,0.52)]
                ${index < 3 ? "lg:col-span-2" : ""}
                ${index === 3 ? "lg:col-span-2 lg:col-start-2" : ""}
                ${
                  index === 4
                    ? "md:col-span-2 lg:col-span-2 lg:col-start-4"
                    : ""
                }
              `}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              {/* Accent atmosphere */}
              <div
                className="
                  pointer-events-none absolute -right-16 -top-16
                  h-44 w-44 rounded-full
                  opacity-0 blur-[55px]
                  transition-all duration-700
                  group-hover:scale-125
                  group-hover:opacity-100
                "
                style={{ backgroundColor: feature.glow }}
              />

              {/* Large ambient accent */}
              <div
                className="
                  pointer-events-none absolute
                  -bottom-20 -left-20
                  h-40 w-40 rounded-full
                  opacity-0 blur-[60px]
                  transition-opacity duration-700
                  group-hover:opacity-40
                "
                style={{ backgroundColor: feature.glow }}
              />

              {/* Top reflection */}
              <div
                className="
                  pointer-events-none absolute
                  left-[15%] right-[15%] top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent via-white/[0.16] to-transparent
                "
              />

              {/* Moving glass reflection */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  -translate-x-[130%]
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.018]
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-[130%]
                "
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="
                    mb-4 flex h-10 w-10
                    items-center justify-center
                    rounded-[12px]
                    border border-white/[0.07]
                    bg-[#151519]
                    transition-all duration-500
                    group-hover:-translate-y-1
                    group-hover:scale-[1.08]
                    group-hover:border-white/[0.12]
                  "
                  style={{ color: feature.accent }}
                >
                  <div
                    className="absolute h-8 w-8 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundColor: feature.accent }}
                  />

                  <div className="relative">{feature.icon}</div>
                </div>

                {/* Label */}
                <div
                  className="
                    mb-2.5
                    text-[9px] font-bold
                    uppercase tracking-[0.19em]
                    opacity-80
                  "
                  style={{ color: feature.accent }}
                >
                  {feature.label}
                </div>

                {/* Title */}
                <h3
                  className="
                    min-h-[48px]
                    text-[18px] font-bold
                    leading-[1.32]
                    tracking-[-0.025em]
                    text-[#ECECEF]
                    transition-colors duration-300
                    group-hover:text-white
                  "
                >
                  {feature.title}
                </h3>

                {/* Divider */}
                <div className="my-4 h-px bg-gradient-to-r from-white/[0.07] via-white/[0.04] to-transparent" />

                {/* Features */}
                <ul className="space-y-2.5">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="
                        flex items-start gap-2.5
                        text-[11.5px]
                        leading-5
                        text-[#777781]
                        transition-colors duration-300
                        group-hover:text-[#92929C]
                      "
                    >
                      <span
                        className="
                          mt-[3px] flex h-4 w-4
                          shrink-0 items-center justify-center
                          rounded-full
                          border border-white/[0.055]
                          bg-white/[0.025]
                        "
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-2.5 w-2.5"
                          fill="none"
                          stroke={feature.accent}
                        >
                          <path
                            d="m6 12 4 4 8-8"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom luminous line */}
              <div
                className="
                  pointer-events-none absolute
                  bottom-0 left-1/2
                  h-px w-0
                  -translate-x-1/2
                  opacity-0
                  transition-all duration-700
                  group-hover:w-[58%]
                  group-hover:opacity-70
                "
                style={{
                  background: `linear-gradient(
                    90deg,
                    transparent,
                    ${feature.accent},
                    transparent
                  )`,
                }}
              />
            </article>
          ))}
        </div>

        {/* Small platform statement */}
        <div className="mt-7 flex justify-center">
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-white/[0.055]
              bg-[#0A0A0D]/70
              px-4 py-2
              backdrop-blur-xl
            "
          >
            <svg
              className="h-3 w-3 text-[#9982D5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M5 12l4 4L19 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-[10px] font-medium text-[#686872]">
              Designed to keep recruiters in control from discovery to decision
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes featureReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card {
          animation: featureReveal
            650ms cubic-bezier(.22,1,.36,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}