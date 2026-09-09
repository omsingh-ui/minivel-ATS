const DashboardMockup = () => {
  const stats = [
    {
      label: "Open Roles",
      value: "12",
      meta: "Active pipeline",
    },
    {
      label: "Candidates",
      value: "284",
      meta: "In workspace",
    },
    {
      label: "Interviews",
      value: "38",
      meta: "Scheduled",
    },
  ];

  const candidates = [
    {
      name: "Aarav Mehta",
      role: "Frontend Developer",
      status: "Technical Review",
      initials: "AM",
      score: 88,
    },
    {
      name: "Neha Kapoor",
      role: "Product Designer",
      status: "Interview",
      initials: "NK",
      score: 82,
    },
    {
      name: "Rohan Shah",
      role: "Cloud Engineer",
      status: "Screening",
      initials: "RS",
      score: 76,
    },
  ];

  return (
    <div className="relative w-full max-w-[610px] mx-auto">
      {/* Ambient depth */}
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#718BC3]/22 blur-[90px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7790BB]/12" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40" />

      {/* Main floating dashboard */}
      <div className="relative animate-dashboard-float">
        <div className="relative rotate-[0.5deg] overflow-hidden rounded-[28px] border border-white/80 bg-white/95 backdrop-blur-2xl shadow-[0_36px_90px_rgba(25,44,78,0.24),0_10px_30px_rgba(48,72,112,0.10)]">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-slate-200/80 bg-[#F7F9FC] px-5 py-3">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#BEC8D7]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#D0D7E1]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#E0E4EA]" />
            </div>

            <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-semibold tracking-wide text-slate-500 shadow-sm">
              Minivel ATS · Talent Workspace
            </div>

            <div className="w-10" />
          </div>

          {/* Dashboard */}
          <div className="bg-[#F7F9FC] p-5">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Recruitment Overview
                </p>

                <h3 className="text-[17px] font-bold tracking-tight text-[#152640]">
                  Talent Intelligence
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#D9E4F6] bg-[#EDF4FF] px-3 py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#5D7DB4]" />

                <span className="text-[9px] font-semibold text-[#48699D]">
                  Live workspace
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="mb-4 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-[0_5px_18px_rgba(27,48,83,0.04)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="mb-1 text-xl font-bold tracking-tight text-[#152640]">
                    {stat.value}
                  </div>

                  <div className="text-[10px] font-bold text-slate-600">
                    {stat.label}
                  </div>

                  <div className="mt-1 text-[9px] text-slate-400">
                    {stat.meta}
                  </div>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="grid gap-3 sm:grid-cols-[1.55fr_0.8fr]">
              {/* Candidate pipeline */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_5px_18px_rgba(27,48,83,0.04)]">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#1B2D49]">
                      Candidate Pipeline
                    </div>

                    <div className="mt-0.5 text-[9px] text-slate-400">
                      Recent candidate activity
                    </div>
                  </div>

                  <span className="rounded-full bg-[#EEF3FB] px-2.5 py-1 text-[9px] font-semibold text-[#506F9E]">
                    View all
                  </span>
                </div>

                {candidates.map((candidate) => (
                  <div
                    key={candidate.name}
                    className="flex items-center gap-3 border-b border-slate-100 py-2.5 last:border-0"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D9E4F6] bg-gradient-to-br from-[#DFE9FA] to-[#F2F5FA] text-[10px] font-bold text-[#3A5987]">
                      {candidate.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[11px] font-bold text-slate-800">
                        {candidate.name}
                      </div>

                      <div className="mt-0.5 truncate text-[9px] text-slate-400">
                        {candidate.role}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[9px] font-semibold text-slate-500">
                        {candidate.status}
                      </div>

                      <div className="mt-1 text-[10px] font-bold text-[#5677AA]">
                        {candidate.score}% match
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI insight */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#20385E] via-[#29466F] to-[#36577F] p-4 text-white shadow-[0_12px_30px_rgba(32,56,94,0.18)]">
                <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-[#AFC7F4]/15 blur-2xl" />

                <div className="absolute -bottom-14 -left-10 h-24 w-24 rounded-full bg-[#E8D4B0]/10 blur-2xl" />

                <div className="relative">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                    <svg
                      className="h-4 w-4 text-[#D9E6FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12"
                      />
                    </svg>
                  </div>

                  <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#BFD1ED]">
                    AI Insight
                  </div>

                  <h4 className="mb-3 text-sm font-bold leading-snug">
                    Relevant profile identified
                  </h4>

                  <p className="mb-5 text-[10px] leading-relaxed text-white/60">
                    Skills and experience align closely with the current role
                    requirements.
                  </p>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-bold tracking-tight">
                        88%
                      </div>

                      <div className="mt-1 text-[9px] text-[#C6D6ED]">
                        Match indication
                      </div>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <svg
                        className="h-4 w-4"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating left card */}
      <div className="absolute -left-4 top-[26%] hidden animate-float-card-one items-center gap-3 rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-[0_16px_40px_rgba(22,42,76,0.14)] backdrop-blur-xl xl:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF3FB]">
          <svg
            className="h-4 w-4 text-[#496A9D]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M9 12.75L11.25 15 15 9.75"
            />
          </svg>
        </div>

        <div>
          <div className="text-[11px] font-bold text-[#1D304E]">
            AI-Assisted Screening
          </div>

          <div className="mt-0.5 text-[9px] text-slate-400">
            Recruiter-led decisions
          </div>
        </div>
      </div>

      {/* Floating right card */}
      <div className="absolute right-2 bottom-[8%] hidden animate-float-card-two items-center gap-3 rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-[0_16px_40px_rgba(22,42,76,0.14)] backdrop-blur-xl xl:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F0E8]">
          <svg
            className="h-4 w-4 text-[#92754B]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M3 13.125h4.5V21H3v-7.875zm6.75-4.5h4.5V21h-4.5V8.625zm6.75-4.5H21V21h-4.5V4.125z"
            />
          </svg>
        </div>

        <div>
          <div className="text-[11px] font-bold text-[#1D304E]">
            Pipeline Visibility
          </div>

          <div className="mt-0.5 text-[9px] text-slate-400">
            One connected workspace
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const points = [
    "AI-assisted",
    "Recruiter-led",
    "Connected hiring workflow",
  ];

  return (
    <>
      <section
        id="overview"
        className="relative overflow-hidden bg-[#E9EEF6]"
      >
        {/* Premium background */}
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#E0E7F2_0%,#EDF1F7_43%,#E6EBF3_100%)]" />

        <div className="absolute -left-32 -top-44 h-[500px] w-[500px] rounded-full bg-[#9EB6DF]/28 blur-[125px]" />

        <div className="absolute right-[-180px] top-[-170px] h-[600px] w-[600px] rounded-full bg-[#B8C8E5]/34 blur-[140px]" />

        <div className="absolute bottom-[-220px] left-[35%] h-[430px] w-[430px] rounded-full bg-[#D8C8A9]/10 blur-[120px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(41,67,107,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(41,67,107,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Decorative arcs */}
        <div className="absolute -right-52 top-[-170px] h-[700px] w-[700px] rounded-full border border-white/40" />

        <div className="absolute -right-28 top-[-90px] h-[560px] w-[560px] rounded-full border border-[#7189B5]/12" />

        {/* Hero content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid min-h-[600px] items-center gap-10 pt-12 pb-7 sm:pt-14 sm:pb-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:pt-16 lg:pb-8 xl:gap-14">
            {/* Left */}
            <div className="relative z-10 max-w-[570px]">
              {/* Eyebrow */}
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-white/60 px-3.5 py-2 shadow-[0_8px_28px_rgba(28,50,84,0.07)] backdrop-blur-xl">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#29466F]">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813"
                    />
                  </svg>
                </div>

                <span className="text-[12px] font-semibold tracking-wide text-[#435571] sm:text-[13px]">
                  Minivel Talent Intelligence
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[40px] font-extrabold leading-[1.01] tracking-[-0.045em] text-[#142640] sm:text-[49px] lg:text-[51px] xl:text-[59px]">
                Recruitment,
                <span className="mt-1 block bg-gradient-to-r from-[#315B98] via-[#6679AD] to-[#947E9E] bg-clip-text text-transparent">
                  intelligently connected.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-[530px] text-[15px] leading-7 text-[#596A82] sm:text-[16px] sm:leading-8">
                Minivel ATS connects candidate discovery, intelligent
                screening, pipeline management and hiring collaboration in
                one focused recruitment workspace.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#features"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#1D385F] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(29,56,95,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#294970]"
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/90 bg-white/65 px-7 py-3.5 text-sm font-semibold text-[#2C4365] shadow-[0_8px_25px_rgba(30,50,80,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  <svg
                    className="h-4 w-4 text-[#5976A3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>

                  Book a Demo
                </a>
              </div>

              {/* Supporting points */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
                {points.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[12px] font-medium text-[#6B7890]"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#7E97C0]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative hidden lg:block lg:translate-x-1 lg:translate-y-7 xl:translate-x-3 xl:translate-y-8">
              <div className="origin-center scale-[0.91] xl:scale-[0.94]">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white/45 to-transparent" />
      </section>

      <style>{`
        @keyframes dashboardFloat {
          0%, 100% {
            transform: translateY(0px) rotate(-0.3deg);
          }

          50% {
            transform: translateY(-11px) rotate(0.3deg);
          }
        }

        @keyframes floatCardOne {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(3px, -8px, 0);
          }
        }

        @keyframes floatCardTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-2px, 8px, 0);
          }
        }

        .animate-dashboard-float {
          animation: dashboardFloat 6.5s ease-in-out infinite;
          will-change: transform;
        }

        .animate-float-card-one {
          animation: floatCardOne 5.2s ease-in-out infinite;
          will-change: transform;
        }

        .animate-float-card-two {
          animation: floatCardTwo 5.8s ease-in-out infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-dashboard-float,
          .animate-float-card-one,
          .animate-float-card-two {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}