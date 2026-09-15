import { useRef } from "react";
import { Link } from "react-router-dom";

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
    accent: "#6F78D9",
    glow: "rgba(111,120,217,.15)",
  },
  {
    className: "left-[0%] top-[30%]",
    reveal: "hero-card-two",
    float: "hero-float-two",
    title: "AI-assisted screening",
    text: "Recruiter-led decisions",
    accent: "#8A6AC8",
    glow: "rgba(138,106,200,.14)",
  },
  {
    className: "right-[1%] bottom-[7%]",
    reveal: "hero-card-three",
    float: "hero-float-three",
    title: "Pipeline visibility",
    text: "One connected workspace",
    accent: "#B18A61",
    glow: "rgba(177,138,97,.13)",
  },
];

function FloatingCard({ card }) {
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
            overflow-hidden rounded-[17px]
            border border-white/[0.085]
            bg-[#111115]/95
            px-3.5 py-3
            shadow-[0_20px_55px_rgba(17,17,24,.24)]
            backdrop-blur-2xl
            transition-all duration-500 ease-out

            hover:-translate-y-0.5
            hover:border-white/[0.15]
            hover:bg-[#15151A]
            hover:shadow-[0_25px_65px_rgba(17,17,24,.30)]
          "
        >
          <div
            className="
              pointer-events-none absolute -right-8 -top-8
              h-20 w-20 rounded-full
              opacity-0 blur-2xl
              transition-opacity duration-500
              group-hover:opacity-100
            "
            style={{ backgroundColor: card.glow }}
          />

          <div className="pointer-events-none absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div
            className="
              relative flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl border
              transition-transform duration-500
              group-hover:scale-[1.05]
            "
            style={{
              borderColor: `${card.accent}35`,
              backgroundColor: `${card.accent}14`,
              color: card.accent,
            }}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 4v16M4 12h16"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="4.5" strokeWidth="1.4" />
            </svg>
          </div>

          <div className="relative">
            <p className="text-[10px] font-bold text-[#F1F1F4]">
              {card.title}
            </p>

            <p className="mt-1 text-[9px] text-[#777781]">
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
      {/* Soft depth behind product */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[76%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#755BB8]/[0.10] blur-[115px]" />

      <div className="pointer-events-none absolute left-[66%] top-[48%] h-[54%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5274C7]/[0.08] blur-[105px]" />

      {/* Thin orbital detail */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7463A5]/[0.07]" />

      <div
        className="
          hero-pointer-light
          pointer-events-none
          absolute inset-[6%]
          z-10 rounded-[32px]
          opacity-70
        "
      />

      {/* Main ATS window */}
      <div className="absolute inset-x-[8%] top-[12%] z-20">
        <div className="hero-dashboard-reveal">
          <div className="hero-dashboard-float">
            <div
              className="
                relative overflow-hidden
                rounded-[28px]
                border border-white/[0.09]
                bg-[#0D0D10]/[0.98]
                shadow-[0_40px_100px_rgba(28,25,38,.28)]
                backdrop-blur-2xl
                transition-all duration-500

                hover:border-white/[0.12]
                hover:shadow-[0_48px_115px_rgba(28,25,38,.33)]
              "
            >
              <div className="pointer-events-none absolute inset-x-[10%] top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="hero-dashboard-reflection pointer-events-none absolute inset-0 z-20 opacity-70" />

              {/* Window bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] bg-[#101013] px-5 py-3">
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

              <div className="relative z-10 bg-[#09090B] p-5">
                <div className="pointer-events-none absolute -right-20 -top-24 h-60 w-60 rounded-full bg-[#7661BD]/[0.06] blur-[95px]" />

                {/* Dashboard heading */}
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
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A68CE8] opacity-20" />
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
                        dashboard-stat
                        group relative overflow-hidden
                        rounded-[15px]
                        border border-white/[0.055]
                        bg-[#121216]
                        px-3 py-3
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
                  {/* Candidate pipeline */}
                  <div
                    className="
                      rounded-[17px]
                      border border-white/[0.055]
                      bg-[#111115]
                      p-3.5
                      transition-all duration-500
                      hover:border-white/[0.075]
                    "
                  >
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
                          candidate-row
                          group flex items-center gap-2.5
                          border-b border-white/[0.045]
                          py-2 last:border-none
                        "
                        style={{
                          animationDelay: `${0.98 + index * 0.12}s`,
                        }}
                      >
                        <div
                          className="
                            flex h-8 w-8 shrink-0
                            items-center justify-center
                            rounded-[10px]
                            border border-[#846FC0]/15
                            bg-[#191621]
                            text-[9px] font-bold
                            text-[#A995D8]
                            transition-all duration-300

                            group-hover:border-[#846FC0]/25
                            group-hover:bg-[#211C2D]
                          "
                        >
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
                      ai-panel
                      group relative overflow-hidden
                      rounded-[17px]
                      border border-[#A18BDA]/10
                      bg-gradient-to-br
                      from-[#191523]
                      via-[#211A30]
                      to-[#15141D]
                      p-3.5
                      shadow-[0_16px_40px_rgba(0,0,0,0.28)]
                      transition-all duration-500

                      hover:-translate-y-0.5
                      hover:border-[#A18BDA]/20
                    "
                  >
                    <div className="absolute -right-10 -top-3 h-28 w-28 rounded-full bg-[#9A78E1]/10 blur-3xl transition-all duration-500 group-hover:bg-[#9A78E1]/15" />

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

      {/* Floating product signals */}
      {FLOATING_CARDS.map((card) => (
        <FloatingCard key={card.title} card={card} />
      ))}

      <div className="hero-card-four absolute bottom-[18%] left-[3%] z-30 hidden xl:block">
        <div className="hero-float-four">
          <div
            className="
              flex items-center gap-2
              rounded-full
              border border-white/[0.08]
              bg-[#111115]/95
              px-3 py-2
              shadow-[0_16px_42px_rgba(17,17,24,.22)]
              backdrop-blur-2xl
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#A48BE4] shadow-[0_0_8px_rgba(164,139,228,.4)]" />

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

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const centeredX = x - 0.5;
    const centeredY = y - 0.5;

    element.style.setProperty("--x", `${centeredX * 5}px`);
    element.style.setProperty("--y", `${centeredY * 3.5}px`);
    element.style.setProperty("--rx", `${centeredY * -0.75}deg`);
    element.style.setProperty("--ry", `${centeredX * 0.95}deg`);
    element.style.setProperty("--mx", `${x * 100}%`);
    element.style.setProperty("--my", `${y * 100}%`);
  };

  const resetParallax = () => {
    const element = visualRef.current;

    if (!element) return;

    element.style.setProperty("--x", "0px");
    element.style.setProperty("--y", "0px");
    element.style.setProperty("--rx", "0deg");
    element.style.setProperty("--ry", "0deg");
    element.style.setProperty("--mx", "70%");
    element.style.setProperty("--my", "35%");
  };

  return (
    <>
      <section
  id="overview"
  className="
    relative overflow-x-clip
    bg-[#FAFAFB]
  "
>
        {/* Light premium background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 55% 52% at 77% 25%,
                rgba(113, 86, 190, 0.10),
                transparent 68%
              ),
              radial-gradient(
                ellipse 38% 40% at 89% 67%,
                rgba(76, 108, 190, 0.07),
                transparent 72%
              ),
              radial-gradient(
                ellipse 38% 34% at 10% 25%,
                rgba(126, 111, 174, 0.035),
                transparent 72%
              ),
              linear-gradient(
                180deg,
                #FFFFFF 0%,
                #FAFAFC 52%,
                #FFFFFF 100%
              )
            `,
          }}
        />

        {/* Restrained grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.30]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(40,40,55,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(40,40,55,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
            maskImage:
              "linear-gradient(to bottom, black, rgba(0,0,0,.35) 66%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, rgba(0,0,0,.35) 66%, transparent)",
          }}
        />

        {/* Product-side atmosphere */}
        <div className="pointer-events-none absolute right-[-12%] top-[0%] h-[680px] w-[800px] rounded-full bg-[#7557BA]/[0.045] blur-[165px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              grid min-h-[565px]
              items-center
              gap-8
              pb-9 pt-14

              sm:pt-16

              lg:grid-cols-[0.88fr_1.12fr]
              lg:gap-10
              lg:pb-16
              lg:pt-10

              xl:gap-12
            "
          >
            {/* Left */}
            <div className="relative z-20 max-w-[570px]">
              <h1 className="hero-copy hero-delay-2 section-title !mx-0 text-[#15151A]">
                Recruitment,

                <span className="mt-1 block bg-gradient-to-r from-[#25232A] via-[#55496F] to-[#66528F] bg-clip-text text-transparent">
                  intelligently connected.
                </span>
              </h1>

              <p className="hero-copy hero-delay-3 section-description mt-5 max-w-[525px] text-[#65656F]">
                Minivel ATS brings candidate sourcing, screening, pipeline
                management and hiring collaboration into one focused
                recruitment workspace.
              </p>

              {/* CTAs */}
              <div className="hero-copy hero-delay-4 mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#sourcing"
                  className="
                    group/primary
                    relative
                    inline-flex items-center justify-center gap-2.5
                    overflow-hidden
                    rounded-xl
                    bg-[#17171C]
                    px-7 py-3.5
                    text-sm font-bold
                    text-white
                    shadow-[0_12px_30px_rgba(24,22,32,.15)]
                    transition-all duration-300

                    hover:-translate-y-0.5
                    hover:bg-[#24222B]
                    hover:shadow-[0_18px_42px_rgba(24,22,32,.20)]
                  "
                >
                  <span
                    className="
                      pointer-events-none
                      absolute -left-[70%] top-0
                      h-full w-[35%]
                      skew-x-[-20deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/40
                      to-transparent
                      transition-all duration-700
                      group-hover/primary:left-[125%]
                    "
                  />

                  <span className="relative">
                    Explore Minivel ATS
                  </span>

                  <svg
                    className="
                      relative h-4 w-4
                      transition-transform duration-300
                      group-hover/primary:translate-x-1
                    "
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

                <Link
                  to="/request-demo"
                  className="
                    group/demo
                    relative
                    inline-flex items-center justify-center
                    overflow-hidden
                    rounded-xl
                    border border-[#D9D9E1]
                    bg-white/80
                    px-7 py-3.5
                    text-sm font-semibold
                    text-[#282830]
                    shadow-[0_8px_24px_rgba(35,32,45,.045)]
                    backdrop-blur-xl
                    transition-all duration-300

                    hover:-translate-y-0.5
                    hover:border-[#9B84D5]/40
                    hover:bg-white
                    hover:text-[#65518F]
                    hover:shadow-[0_14px_35px_rgba(71,56,105,.09)]
                  "
                >
                  <span className="relative">
                    Book a Demo
                  </span>
                </Link>
              </div>

              {/* Supporting points */}
              <div className="hero-copy hero-delay-5 mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "AI-assisted",
                  "Recruiter-led",
                  "Connected workflow",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[11px] font-medium text-[#686872]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#8067B7]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
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

        {/* Clean section transition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#262631]/[0.09] to-transparent" />
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
          animation:
            copyReveal 700ms cubic-bezier(.22,1,.36,1) forwards;
        }

        .hero-delay-2 {
          animation-delay: .08s;
        }

        .hero-delay-3 {
          animation-delay: .17s;
        }

        .hero-delay-4 {
          animation-delay: .26s;
        }

        .hero-delay-5 {
          animation-delay: .35s;
        }

        @keyframes dashboardReveal {
          from {
            opacity: 0;
            transform: translateY(22px) scale(.975);
            filter: blur(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .hero-dashboard-reveal {
          opacity: 0;
          animation:
            dashboardReveal
            900ms cubic-bezier(.22,1,.36,1) .24s forwards;
        }

        @keyframes dashboardFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        .hero-dashboard-float {
          animation:
            dashboardFloat 9s ease-in-out 1.5s infinite;
        }

        @keyframes itemReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
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
          animation:
            itemReveal
            550ms cubic-bezier(.22,1,.36,1) forwards;
        }

        .ai-panel {
          animation-delay: 1.12s;
        }

        @keyframes cardRight {
          from {
            opacity: 0;
            transform: translate(14px, 10px) scale(.94);
            filter: blur(6px);
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
            transform: translate(-14px, 10px) scale(.94);
            filter: blur(6px);
          }

          to {
            opacity: 1;
            transform: translate(0, 0) scale(1);
            filter: blur(0);
          }
        }

        .hero-card-one {
          opacity: 0;
          animation:
            cardRight
            650ms cubic-bezier(.22,1,.36,1) 1.1s forwards;
        }

        .hero-card-two {
          opacity: 0;
          animation:
            cardLeft
            650ms cubic-bezier(.22,1,.36,1) 1.4s forwards;
        }

        .hero-card-three {
          opacity: 0;
          animation:
            cardRight
            650ms cubic-bezier(.22,1,.36,1) 1.7s forwards;
        }

        .hero-card-four {
          opacity: 0;
          animation:
            cardLeft
            650ms cubic-bezier(.22,1,.36,1) 2s forwards;
        }

        @keyframes floatOne {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-2px, -4px);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(3px, 3px);
          }
        }

        @keyframes floatThree {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-2px, 4px);
          }
        }

        @keyframes floatFour {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(2px, -3px);
          }
        }

        .hero-float-one {
          animation:
            floatOne 8s ease-in-out 2s infinite;
        }

        .hero-float-two {
          animation:
            floatTwo 8.5s ease-in-out 2.2s infinite;
        }

        .hero-float-three {
          animation:
            floatThree 9s ease-in-out 2.4s infinite;
        }

        .hero-float-four {
          animation:
            floatFour 8.2s ease-in-out 2.6s infinite;
        }

        .hero-parallax {
          --x: 0px;
          --y: 0px;
          --rx: 0deg;
          --ry: 0deg;
          --mx: 70%;
          --my: 35%;

          transform:
            translate3d(var(--x), calc(var(--y) + 32px), 0)
            perspective(1400px)
            rotateX(var(--rx))
            rotateY(var(--ry));

          transform-style: preserve-3d;

          transition:
            transform 220ms ease-out;

          will-change: transform;
        }

        .hero-pointer-light {
          background:
            radial-gradient(
              circle 150px at var(--mx) var(--my),
              rgba(177, 155, 221, 0.11),
              rgba(118, 144, 224, 0.045) 34%,
              transparent 72%
            );

          transition:
            background-position 180ms ease-out;
        }

        .hero-dashboard-reflection {
          background:
            radial-gradient(
              circle 190px at var(--mx) var(--my),
              rgba(255,255,255,.055),
              rgba(174,150,224,.025) 32%,
              transparent 72%
            );
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

          .hero-pointer-light,
          .hero-dashboard-reflection {
            background: none !important;
          }
        }
      `}</style>
    </>
  );
}