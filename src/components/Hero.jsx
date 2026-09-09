import { useRef } from "react";

const STATS = [
  { value: "12", label: "Open Roles", meta: "Active pipeline" },
  { value: "284", label: "Candidates", meta: "In workspace" },
  { value: "38", label: "Interviews", meta: "Scheduled" },
];

const CANDIDATES = [
  {
    name: "Aarav Mehta",
    role: "Frontend Developer",
    initials: "AM",
    status: "Technical Review",
    score: 88,
  },
  {
    name: "Neha Kapoor",
    role: "Product Designer",
    initials: "NK",
    status: "Interview",
    score: 82,
  },
  {
    name: "Rohan Shah",
    role: "Cloud Engineer",
    initials: "RS",
    status: "Screening",
    score: 76,
  },
];

const FLOATING_CARDS = [
  {
    className: "right-[1%] top-[5%]",
    reveal: "hero-card-one",
    float: "hero-float-one",
    title: "Strong candidate match",
    text: "Profile relevance · 88%",
    tone: "blue",
    icon: (
      <path
        d="M12 3.5 14 8l4.5 2-4.5 2-2 4.5-2-4.5-4.5-2L10 8z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    className: "left-[0%] top-[30%]",
    reveal: "hero-card-two",
    float: "hero-float-two",
    title: "AI-assisted screening",
    text: "Recruiter-led decisions",
    tone: "violet",
    icon: (
      <path
        d="M7 12.5 10.2 16 17 8.5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    className: "right-[1%] bottom-[7%]",
    reveal: "hero-card-three",
    float: "hero-float-three",
    title: "Pipeline visibility",
    text: "One connected workspace",
    tone: "gold",
    icon: (
      <>
        <path d="M5 18V12" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M12 18V7" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M19 18V10" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
  },
];

const tones = {
  blue: {
    icon: "border-[#7697D0]/20 bg-[#17243A] text-[#91ADE0]",
    glow: "bg-[#668FE0]/10",
  },
  violet: {
    icon: "border-[#9A83C7]/20 bg-[#211D2E] text-[#B19BDD]",
    glow: "bg-[#A183D7]/10",
  },
  gold: {
    icon: "border-[#C19A70]/20 bg-[#28221E] text-[#D0AB80]",
    glow: "bg-[#C79A6B]/10",
  },
};

function FloatingCard({ card }) {
  const tone = tones[card.tone];

  return (
    <div
      className={`
        ${card.reveal}
        absolute ${card.className}
        z-30 hidden xl:block
      `}
    >
      <div className={card.float}>
        <div
          className="
            group relative flex min-w-[184px] items-center gap-3
            overflow-hidden rounded-[18px]
            border border-white/[0.09]
            bg-[#101014]/90
            px-3.5 py-3
            shadow-[0_22px_60px_rgba(0,0,0,0.58)]
            backdrop-blur-2xl
            transition-all duration-500
            hover:-translate-y-1
            hover:border-white/[0.15]
            hover:bg-[#15151B]
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.72)]
          "
        >
          <div
            className={`
              pointer-events-none absolute -right-8 -top-8
              h-20 w-20 rounded-full blur-2xl
              opacity-0 transition-opacity duration-500
              group-hover:opacity-100
              ${tone.glow}
            `}
          />

          <div className="pointer-events-none absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div
            className={`
              relative flex h-9 w-9 shrink-0
              items-center justify-center rounded-xl border
              ${tone.icon}
            `}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {card.icon}
            </svg>
          </div>

          <div className="relative">
            <p className="text-[10px] font-bold text-[#F0F0F3]">
              {card.title}
            </p>

            <p className="mt-1 text-[9px] text-[#777782]">
              {card.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto h-[510px] w-full max-w-[650px]">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[76%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#755BB8]/10 blur-[110px]" />

      <div className="pointer-events-none absolute left-[65%] top-[48%] h-[54%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5274C7]/10 blur-[100px]" />

      {/* Main dashboard safe zone */}
      <div className="absolute inset-x-[8%] top-[12%] z-20">
        <div className="hero-dashboard-reveal">
          <div className="hero-dashboard-float">
            <div
              className="
                relative overflow-hidden
                rounded-[28px]
                border border-white/[0.085]
                bg-[#0D0D10]/95
                shadow-[0_55px_150px_rgba(0,0,0,0.72)]
                backdrop-blur-2xl
              "
            >
              <div className="pointer-events-none absolute inset-x-[12%] top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              {/* Browser bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#101013] px-5 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#39393E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2E2E33]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#242429]" />
                </div>

                <div className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-[9px] font-semibold tracking-wide text-[#777781]">
                  Minivel ATS · Talent Workspace
                </div>

                <div className="w-9" />
              </div>

              <div className="relative bg-[#09090B] p-5">
                {/* Internal glow */}
                <div className="pointer-events-none absolute -right-20 -top-24 h-60 w-60 rounded-full bg-[#7661BD]/[0.07] blur-[90px]" />

                <div className="relative mb-4 flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.22em] text-[#5E5E69]">
                      Recruitment Overview
                    </p>

                    <h3 className="text-[16px] font-bold tracking-tight text-[#F4F4F6]">
                      Talent Intelligence
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-[#9077D1]/15 bg-[#8E71D0]/[0.07] px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A68CE8] opacity-30" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-[#A68CE8]" />
                    </span>

                    <span className="text-[8px] font-semibold text-[#A58EDB]">
                      Live workspace
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="relative mb-3 grid grid-cols-3 gap-2.5">
                  {STATS.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="
                        dashboard-stat group relative overflow-hidden
                        rounded-[15px] border border-white/[0.055]
                        bg-[#121216] px-3 py-3
                        transition-all duration-500
                        hover:-translate-y-0.5
                        hover:border-[#9B84D5]/15
                        hover:bg-[#16161C]
                      "
                      style={{
                        animationDelay: `${0.65 + index * 0.11}s`,
                      }}
                    >
                      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#8066C4]/0 blur-2xl transition-all duration-500 group-hover:bg-[#8066C4]/10" />

                      <div className="relative text-lg font-bold tracking-tight text-[#F4F4F6]">
                        {stat.value}
                      </div>

                      <div className="relative mt-0.5 text-[9px] font-semibold text-[#A2A2AB]">
                        {stat.label}
                      </div>

                      <div className="relative mt-1 text-[8px] text-[#5F5F69]">
                        {stat.meta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lower dashboard */}
                <div className="relative grid gap-2.5 sm:grid-cols-[1.55fr_.82fr]">
                  <div className="rounded-[17px] border border-white/[0.055] bg-[#111115] p-3.5">
                    <div className="mb-2.5 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-[#ECECF0]">
                          Candidate Pipeline
                        </p>

                        <p className="mt-0.5 text-[8px] text-[#60606A]">
                          Recent candidate activity
                        </p>
                      </div>

                      <span className="rounded-full border border-white/[0.05] bg-white/[0.025] px-2 py-1 text-[8px] text-[#777781]">
                        View all
                      </span>
                    </div>

                    {CANDIDATES.map((candidate, index) => (
                      <div
                        key={candidate.name}
                        className="
                          candidate-row group flex items-center gap-2.5
                          border-b border-white/[0.045]
                          py-2 last:border-none
                        "
                        style={{
                          animationDelay: `${0.98 + index * 0.12}s`,
                        }}
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-[#846FC0]/15 bg-[#191621] text-[9px] font-bold text-[#A995D8] transition-all duration-300 group-hover:bg-[#211C2D]">
                          {candidate.initials}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[9px] font-bold text-[#DCDCE1]">
                            {candidate.name}
                          </p>

                          <p className="mt-0.5 truncate text-[8px] text-[#62626C]">
                            {candidate.role}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-[7px] font-medium text-[#777781]">
                            {candidate.status}
                          </p>

                          <p className="mt-1 text-[8px] font-bold text-[#A68DDE]">
                            {candidate.score}% match
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI insight */}
                  <div
                    className="
                      ai-panel group relative overflow-hidden
                      rounded-[17px]
                      border border-[#A18BDA]/10
                      bg-gradient-to-br
                      from-[#191523]
                      via-[#211A30]
                      to-[#15141D]
                      p-3.5
                      shadow-[0_16px_40px_rgba(0,0,0,0.28)]
                    "
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#9A78E1]/10 blur-3xl transition-all duration-500 group-hover:bg-[#9A78E1]/15" />

                    <div className="absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-[#C2ACF1]/25 to-transparent" />

                    <div className="relative">
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.04]">
                        <svg
                          className="h-4 w-4 text-[#B69DEB]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M12 3.5 14 8l4.5 2-4.5 2-2 4.5-2-4.5-4.5-2L10 8z"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>

                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#8F79C0]">
                        AI Insight
                      </p>

                      <h4 className="mt-2 text-[11px] font-bold leading-snug text-[#F1F1F4]">
                        Relevant profile identified
                      </h4>

                      <p className="mt-2 text-[8px] leading-relaxed text-[#777781]">
                        Skills and experience align closely with the current
                        role requirements.
                      </p>

                      <div className="mt-4">
                        <div className="text-[27px] font-bold tracking-tight text-white">
                          88%
                        </div>

                        <div className="text-[8px] text-[#7C6C9F]">
                          Match indication
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards stay inside this visual container */}
      {FLOATING_CARDS.map((card) => (
        <FloatingCard key={card.title} card={card} />
      ))}

      {/* Small live notification */}
      <div className="hero-card-four absolute bottom-[18%] left-[3%] z-30 hidden xl:block">
        <div className="hero-float-four">
          <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#101014]/90 px-3 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A48BE4] opacity-30" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#A48BE4]" />
            </span>

            <span className="text-[8px] font-semibold text-[#84848E]">
              Candidate activity updated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const visualRef = useRef(null);

  const handleMouseMove = (event) => {
    const element = visualRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty("--x", `${x * 7}px`);
    element.style.setProperty("--y", `${y * 5}px`);
    element.style.setProperty("--rx", `${y * -1.1}deg`);
    element.style.setProperty("--ry", `${x * 1.4}deg`);
  };

  const resetParallax = () => {
    const element = visualRef.current;

    if (!element) return;

    element.style.setProperty("--x", "0px");
    element.style.setProperty("--y", "0px");
    element.style.setProperty("--rx", "0deg");
    element.style.setProperty("--ry", "0deg");
  };

  return (
    <>
      <section
        id="overview"
        className="relative overflow-hidden bg-[#050505]"
      >
        {/* Black enterprise background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 55% 52% at 77% 25%,
                rgba(116, 83, 184, 0.17),
                transparent 68%
              ),
              radial-gradient(
                ellipse 38% 40% at 89% 67%,
                rgba(71, 94, 174, 0.10),
                transparent 72%
              ),
              radial-gradient(
                ellipse 36% 32% at 12% 28%,
                rgba(255,255,255,0.025),
                transparent 72%
              ),
              linear-gradient(
                180deg,
                #050505 0%,
                #070707 50%,
                #050505 100%
              )
            `,
          }}
        />

        {/* Right product glow */}
        <div className="pointer-events-none absolute right-[-12%] top-[0%] h-[680px] w-[800px] rounded-full bg-[#7557BA]/[0.065] blur-[160px]" />

        {/* Very subtle texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
            maskImage:
              "linear-gradient(to bottom, black, rgba(0,0,0,.4) 65%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, rgba(0,0,0,.4) 65%, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              grid min-h-[620px] items-center
              gap-8 pb-8 pt-14
              sm:pt-16
              lg:grid-cols-[0.88fr_1.12fr]
              lg:gap-10 lg:pb-10 lg:pt-16
              xl:gap-12
            "
          >
            {/* LEFT */}
            <div className="relative z-20 max-w-[570px]">
              <div className="hero-copy hero-delay-1 mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 backdrop-blur-xl">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#18131F] text-[#B498ED]">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 3.5 14 8l4.5 2-4.5 2-2 4.5-2-4.5-4.5-2L10 8z"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <span className="text-[12px] font-semibold tracking-wide text-[#A0A0AA]">
                  Minivel Talent Intelligence
                </span>
              </div>

              <h1 className="hero-copy hero-delay-2 text-[42px] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#F5F5F7] sm:text-[52px] lg:text-[55px] xl:text-[62px]">
                Recruitment,
                <span className="mt-1 block bg-gradient-to-r from-white via-[#C1B5EC] to-[#9874D6] bg-clip-text text-transparent">
                  intelligently connected.
                </span>
              </h1>

              <p className="hero-copy hero-delay-3 mt-5 max-w-[525px] text-[15px] leading-7 text-[#9999A3] sm:text-[16px] sm:leading-8">
                Minivel ATS connects candidate discovery, intelligent screening,
                pipeline management and hiring collaboration in one focused
                recruitment workspace.
              </p>

              <div className="hero-copy hero-delay-4 mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#sourcing"
                  className="
                    group inline-flex items-center justify-center gap-2.5
                    rounded-xl bg-[#F3F3F5]
                    px-7 py-3.5 text-sm font-bold text-[#080808]
                    shadow-[0_12px_35px_rgba(255,255,255,0.07)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:shadow-[0_18px_45px_rgba(255,255,255,0.12)]
                  "
                >
                  Explore Minivel ATS

                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-xl border border-white/[0.10]
                    bg-white/[0.035]
                    px-7 py-3.5 text-sm font-semibold text-[#D1D1D7]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-white/[0.18]
                    hover:bg-white/[0.07]
                    hover:text-white
                  "
                >
                  Book a Demo
                </a>
              </div>

              <div className="hero-copy hero-delay-5 mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "AI-assisted",
                  "Recruiter-led",
                  "Connected workflow",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[11px] font-medium text-[#73737D]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#A184DD]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div
              ref={visualRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetParallax}
              className="hero-parallax relative hidden lg:block"
            >
              <DashboardMockup />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </section>

      <style>{`
        @keyframes copyReveal {
          from {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .hero-copy {
          opacity: 0;
          animation: copyReveal 700ms cubic-bezier(.22,1,.36,1) forwards;
        }

        .hero-delay-1 { animation-delay: .05s; }
        .hero-delay-2 { animation-delay: .14s; }
        .hero-delay-3 { animation-delay: .23s; }
        .hero-delay-4 { animation-delay: .32s; }
        .hero-delay-5 { animation-delay: .41s; }

        @keyframes dashboardReveal {
          from {
            opacity: 0;
            transform: translateY(25px) scale(.97);
            filter: blur(9px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .hero-dashboard-reveal {
          opacity: 0;
          animation: dashboardReveal
            900ms cubic-bezier(.22,1,.36,1) .28s forwards;
        }

        @keyframes dashboardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .hero-dashboard-float {
          animation: dashboardFloat 7s ease-in-out 1.4s infinite;
        }

        @keyframes itemReveal {
          from {
            opacity: 0;
            transform: translateY(9px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dashboard-stat,
        .candidate-row,
        .ai-panel {
          opacity: 0;
          animation: itemReveal
            550ms cubic-bezier(.22,1,.36,1) forwards;
        }

        .ai-panel {
          animation-delay: 1.12s;
        }

        @keyframes cardRight {
          from {
            opacity: 0;
            transform: translate(18px, 12px) scale(.92);
            filter: blur(7px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes cardLeft {
          from {
            opacity: 0;
            transform: translate(-18px, 12px) scale(.92);
            filter: blur(7px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0) scale(1);
            filter: blur(0);
          }
        }

        .hero-card-one {
          opacity: 0;
          animation: cardRight
            650ms cubic-bezier(.22,1,.36,1) 1.15s forwards;
        }

        .hero-card-two {
          opacity: 0;
          animation: cardLeft
            650ms cubic-bezier(.22,1,.36,1) 1.48s forwards;
        }

        .hero-card-three {
          opacity: 0;
          animation: cardRight
            650ms cubic-bezier(.22,1,.36,1) 1.81s forwards;
        }

        .hero-card-four {
          opacity: 0;
          animation: cardLeft
            650ms cubic-bezier(.22,1,.36,1) 2.14s forwards;
        }

        @keyframes floatOne {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-3px, -7px); }
        }

        @keyframes floatTwo {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(4px, 6px); }
        }

        @keyframes floatThree {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-4px, 7px); }
        }

        @keyframes floatFour {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(3px, -5px); }
        }

        .hero-float-one {
          animation: floatOne 5.8s ease-in-out 2s infinite;
        }

        .hero-float-two {
          animation: floatTwo 6.4s ease-in-out 2.2s infinite;
        }

        .hero-float-three {
          animation: floatThree 6.8s ease-in-out 2.4s infinite;
        }

        .hero-float-four {
          animation: floatFour 5.5s ease-in-out 2.6s infinite;
        }

        .hero-parallax {
          --x: 0px;
          --y: 0px;
          --rx: 0deg;
          --ry: 0deg;

          transform:
            translate3d(var(--x), var(--y), 0)
            perspective(1300px)
            rotateX(var(--rx))
            rotateY(var(--ry));

          transform-style: preserve-3d;
          transition: transform 180ms ease-out;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-copy,
          .hero-dashboard-reveal,
          .hero-dashboard-float,
          .dashboard-stat,
          .candidate-row,
          .ai-panel,
          .hero-card-one,
          .hero-card-two,
          .hero-card-three,
          .hero-card-four,
          .hero-float-one,
          .hero-float-two,
          .hero-float-three,
          .hero-float-four {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .hero-parallax {
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}