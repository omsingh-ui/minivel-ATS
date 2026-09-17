import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4 text-[#A7D44C]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M20 6 9 17l-5-5"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PlatformPage() {
  useEffect(() => {
    // If no hash in URL, scroll to top
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0E13] text-[#E5E5E8] selection:bg-[#A7D44C]/20 selection:text-white">
      <Navbar />

      <main className="relative pt-[90px] lg:pt-[96px]">
        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-7 sm:pb-28 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-24 xl:px-12">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-28 top-10 h-[450px] w-[450px] rounded-full bg-[#A7D44C]/[0.055] blur-[140px]" />
            <div className="absolute right-[-10%] top-16 h-[500px] w-[500px] rounded-full bg-[#8B73C4]/[0.065] blur-[150px]" />
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[120px]" />
            <div
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
                backgroundSize: "36px 36px",
                maskImage:
                  "linear-gradient(to bottom, black 50%, transparent 95%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 50%, transparent 95%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[880px] text-center">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.035] px-4 py-1.5 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#A7D44C] shadow-[0_0_10px_#A7D44C]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D5ECA3]">
                  Minivel Recruitment Platform
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-7 text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#F5F5F7] sm:text-[56px] lg:text-[68px]">
                A Unified Hiring Engine Built for{" "}
                <span className="bg-gradient-to-r from-white via-[#D0C7E7] to-[#A58BD7] bg-clip-text text-transparent">
                  Modern Talent Teams
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="mx-auto mt-6 max-w-[680px] text-[15px] leading-[1.8] text-[#85858F] sm:text-[16.5px]">
                Minivel brings candidate discovery, intelligent screening,
                structured recruitment workflows, and cross-team collaboration
                together in one centralized, high-performance workspace.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-7 py-3.5 text-[12.5px] font-semibold text-[#D8F48D] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/20 hover:shadow-[0_12px_32px_rgba(167,212,76,0.22)]"
                >
                  <span>Request a Demo</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#features"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-[12.5px] font-semibold text-[#D4D4DA] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.07] hover:text-white"
                >
                  <span>Explore Features</span>
                  <ArrowRightIcon className="h-4 w-4 text-[#85858F] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </div>

              {/* Fast Stats Strip */}
              <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/[0.07] pt-8 sm:grid-cols-4 sm:gap-6">
                {[
                  { value: "45%", label: "Faster Screening Cycle" },
                  { value: "100%", label: "Pipeline Visibility" },
                  { value: "4.9/5", label: "Hiring Team Rating" },
                  { value: "Zero", label: "Spreadsheet Clutter" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-[24px] font-black tracking-tight text-[#F5F5F7] sm:text-[30px]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium tracking-wide text-[#777780]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 1: FEATURES (PRODUCT TOUR)
        ========================================================= */}
        <section
          id="features"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          {/* Subtle glow */}
          <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-[#9BCF4D]/[0.04] blur-[130px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[780px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7D44C]">
                Core Platform Tour
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                Explore the Minivel Recruitment Platform
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                Minivel equips recruitment teams with modular, purpose-built
                tools that streamline every hiring touchpoint. Eliminate
                fragmented spreadsheets, disjointed candidate notes, and
                untracked outreach with an intuitive, unified workspace designed
                for maximum recruiting speed and clarity.
              </p>
            </div>

            {/* Product Tour Browser Chrome Frame */}
            <div className="mt-12 overflow-hidden rounded-[20px] border border-white/[0.12] bg-[#111116]/90 shadow-[0_28px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:rounded-[24px]">
              {/* Browser Header Bar */}
              <div className="flex h-12 items-center justify-between border-b border-white/[0.08] bg-[#16161D]/80 px-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F56]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#27C93F]/80" />
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-black/40 px-4 py-1 text-[11px] font-medium text-[#777780]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C]" />
                  <span>minivel.app/ats/platform-tour</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#666670]">
                  <span className="hidden sm:inline">Active Workspace</span>
                </div>
              </div>

              {/* Product Screenshot Area */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A0A0E]">
                <img
                  src="/assets/ats-features-screenshot.png"
                  alt="Minivel ATS product screenshot"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* 3-4 Feature Callout Cards (Generic Placeholders as requested) */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Feature One",
                  label: "Intelligent Ingestion",
                  desc: "Automatically parses candidate credentials, experiences, and qualifications from multi-channel applications into structured profiles.",
                  badge: "Automated",
                  accent: "#A7D44C",
                },
                {
                  title: "Feature Two",
                  label: "Visual Pipeline Matrix",
                  desc: "Track applicant movement across custom hiring stages with drag-and-drop velocity, automated triggers, and bulk operations.",
                  badge: "Interactive",
                  accent: "#9279C9",
                },
                {
                  title: "Feature Three",
                  label: "Scorecards & Consensus",
                  desc: "Enable interviewers to submit structured evaluations and compare feedback side-by-side to eliminate hiring bias.",
                  badge: "Collaborative",
                  accent: "#7F9FE8",
                },
                {
                  title: "Feature Four",
                  label: "Recruitment Analytics",
                  desc: "Gain instant visibility into time-to-hire, funnel drop-offs, sourcing effectiveness, and interviewer response benchmarks.",
                  badge: "Real-time",
                  accent: "#E2A45C",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.05] hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: `${card.accent}20` }}
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${card.accent}18`,
                        color: card.accent,
                      }}
                    >
                      {card.badge}
                    </span>
                    <span className="text-[10px] font-semibold text-[#666672]">
                      {card.label}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[18px] font-bold tracking-tight text-[#F5F5F7] group-hover:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-[12.5px] leading-[1.7] text-[#777780] transition-colors duration-300 group-hover:text-[#9595A0]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: RECRUITMENT WORKFLOW
        ========================================================= */}
        <section
          id="recruitment-workflow"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute left-0 top-1/4 h-[450px] w-[450px] rounded-full bg-[#8B73C4]/[0.05] blur-[150px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9279C9]">
                  Pipeline Architecture
                </span>
                <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px]">
                  See How Hiring Moves Through Minivel
                </h2>
                <p className="mt-5 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                  Experience a recruitment pipeline designed to eliminate
                  friction and accelerate hiring velocity. From candidate intake
                  to offer execution, Minivel standardizes recruitment stages
                  without micromanagement, keeping candidate pipelines organized
                  and hiring panels aligned.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Multi-source candidate centralization into a unified pool",
                    "Automated stage notifications that prevent candidate stagnation",
                    "Customizable evaluation scorecards per requisition",
                    "Real-time recruiter handoffs to hiring managers and teams",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#A7D44C]/30 bg-[#A7D44C]/10">
                        <CheckIcon className="h-3.5 w-3.5 text-[#BCE65E]" />
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-[#A5A5AF]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to="/workflow"
                    className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#A7D44C] transition-colors hover:text-[#C4ED70]"
                  >
                    <span>View Dedicated Workflow Deep-Dive</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Interactive Workflow Diagram / Stage Cards */}
              <div className="space-y-3.5">
                {[
                  {
                    step: "01",
                    title: "Application & Sourcing",
                    badge: "Intake Active",
                    detail:
                      "Incoming applicants from LinkedIn, job boards, or direct referrals auto-populate structured talent dossiers.",
                    status: "98% parse accuracy",
                  },
                  {
                    step: "02",
                    title: "Screening & Qualification",
                    badge: "Recruiter Review",
                    detail:
                      "Compare applicant resumes against core role criteria with quick tags and automated matching metrics.",
                    status: "2.4x review speed",
                  },
                  {
                    step: "03",
                    title: "Panel Evaluation",
                    badge: "Synchronized",
                    detail:
                      "Coordinate interview loops with team scorecards, inline feedback, and unified candidate rating summaries.",
                    status: "Zero lost feedback",
                  },
                  {
                    step: "04",
                    title: "Offer & Decision",
                    badge: "Final Stage",
                    detail:
                      "Consolidated decision matrix empowers stakeholders to finalize offers with confidence and speed.",
                    status: "Instant sign-off",
                  },
                ].map((stage) => (
                  <div
                    key={stage.step}
                    className="group relative flex items-start gap-4 rounded-[18px] border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.055]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[12px] font-bold text-[#D7D7DB] transition-colors group-hover:border-[#A7D44C]/40 group-hover:text-[#A7D44C]">
                      {stage.step}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-[14.5px] font-bold text-[#F5F5F7]">
                          {stage.title}
                        </h3>
                        <span className="rounded-full border border-[#A7D44C]/25 bg-[#A7D44C]/10 px-2.5 py-0.5 text-[9px] font-bold text-[#C6E96E]">
                          {stage.status}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[12px] leading-[1.65] text-[#777780]">
                        {stage.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: INTEGRATIONS
        ========================================================= */}
        <section
          id="integrations"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[#A7D44C]/[0.045] blur-[140px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[780px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7D44C]">
                Connected Ecosystem
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                Connect Your Recruitment Ecosystem
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                Keep your hiring operations synchronized with the tools your
                team relies on daily. Minivel connects sourcing channels,
                communication suites, and productivity platforms into a
                frictionless hiring workflow that keeps everyone on the same page.
              </p>
            </div>

            {/* Integration Category Showcase */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Recruitment Channels",
                  desc: "Direct ingestion from top talent channels.",
                  tools: ["LinkedIn", "Indeed", "Naukri"],
                  color: "#7F9FE8",
                  link: "/integrations#recruitment-channels",
                },
                {
                  title: "Communication Suites",
                  desc: "Keep candidate messages synchronized in one timeline.",
                  tools: ["Gmail", "Outlook", "WhatsApp"],
                  color: "#A7D44C",
                  link: "/integrations#communication",
                },
                {
                  title: "Connected Extensions",
                  desc: "Capture profiles anywhere and sync with your stack.",
                  tools: ["Chrome Extension", "Zoho Suite"],
                  color: "#9279C9",
                  link: "/integrations#connected-tools",
                },
              ].map((category) => (
                <div
                  key={category.title}
                  className="group relative flex flex-col justify-between rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.05]"
                >
                  <div>
                    <h3 className="text-[18px] font-bold text-[#F5F5F7]">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-[1.7] text-[#777780]">
                      {category.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {category.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-[#D4D4DA]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/[0.06] pt-4">
                    <Link
                      to={category.link}
                      className="inline-flex items-center gap-2 text-[11.5px] font-bold text-[#A7D44C] transition-colors hover:text-[#C5ED73]"
                    >
                      <span>Explore details</span>
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA SECTION
        ========================================================= */}
        <section className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12">
          <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[26px] border border-white/[0.10] bg-gradient-to-b from-[#14141B] to-[#0D0D12] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:p-14 lg:p-20">
            {/* Ambient inner orbs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#A7D44C]/[0.12] blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#9279C9]/[0.14] blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-[700px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7D44C]">
                Get Started Today
              </span>
              <h2 className="mt-4 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#F5F5F7] sm:text-[44px] lg:text-[50px]">
                Ready to transform your recruitment operations?
              </h2>
              <p className="mt-5 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[16px]">
                Join progressive hiring teams that rely on Minivel to source,
                evaluate, and hire exceptional talent with clarity.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-8 py-3.5 text-[13px] font-bold text-[#D8F48D] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/25 hover:shadow-[0_12px_36px_rgba(167,212,76,0.25)]"
                >
                  <span>Schedule a Personalized Demo</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
