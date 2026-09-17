import { useEffect, useState } from "react";
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

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Application",
    subtitle: "Inbound & Sourcing Intake",
    description:
      "Resumes and profiles are automatically captured from job boards, sourcing extensions, and direct applicant portals, de-duplicated, and formatted into clean profiles.",
    duration: "Instant ingestion",
    metrics: "100% captured",
    color: "#7F9FE8",
    bullets: [
      "Auto-sync from LinkedIn, Indeed, Naukri",
      "Instant resume parsing and indexing",
      "Deduplication against existing talent pool",
    ],
  },
  {
    step: "02",
    title: "Screening",
    subtitle: "Qualification & Scoring",
    description:
      "Recruiters rapidly evaluate core capabilities, role relevance, and compensation expectations using structured initial screening checklists.",
    duration: "Avg. 24h turnaround",
    metrics: "2.4x review speed",
    color: "#A7D44C",
    bullets: [
      "Custom screening checklists per requisition",
      "One-click status transitions and quick notes",
      "Automated candidate acknowledgment emails",
    ],
  },
  {
    step: "03",
    title: "Interview",
    subtitle: "Collaborative Panel Loops",
    description:
      "Coordinate multi-stage interviews effortlessly. Interviewers receive structured scorecards, question banks, and sync feedback before debriefs.",
    duration: "Seamless calendar sync",
    metrics: "Zero feedback delays",
    color: "#9279C9",
    bullets: [
      "Automated calendar invites via Gmail/Outlook",
      "Role-specific competency scorecards",
      "Blind evaluations to reduce hiring bias",
    ],
  },
  {
    step: "04",
    title: "Decision",
    subtitle: "Consensus & Offer Rollout",
    description:
      "Hiring managers, recruiters, and leadership convene around a single consensus dashboard to finalize compensation, approve terms, and extend offers.",
    duration: "Accelerated closure",
    metrics: "94% offer acceptance",
    color: "#E59E52",
    bullets: [
      "Consolidated interview scoring matrix",
      "Audit trail of all approvals & notes",
      "Offer template generation and handoff",
    ],
  },
];

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
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
            <div className="absolute -left-24 top-10 h-[460px] w-[460px] rounded-full bg-[#8B73C4]/[0.06] blur-[145px]" />
            <div className="absolute -right-20 top-20 h-[480px] w-[480px] rounded-full bg-[#A7D44C]/[0.05] blur-[140px]" />
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
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.035] px-4 py-1.5 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#A7D44C] shadow-[0_0_10px_#A7D44C]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D5ECA3]">
                  Hiring Pipeline & Velocity
                </span>
              </div>

              <h1 className="mt-7 text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#F5F5F7] sm:text-[56px] lg:text-[68px]">
                Move Candidates Forward with{" "}
                <span className="bg-gradient-to-r from-white via-[#D0C7E7] to-[#A58BD7] bg-clip-text text-transparent">
                  Speed, Structure & Clarity
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-[680px] text-[15px] leading-[1.8] text-[#85858F] sm:text-[16.5px]">
                Empower your recruiting teams and hiring managers with automated
                stage tracking, standardized candidate dossiers, and
                transparent team consensus from first touch to final offer.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-7 py-3.5 text-[12.5px] font-semibold text-[#D8F48D] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/20 hover:shadow-[0_12px_32px_rgba(167,212,76,0.22)]"
                >
                  <span>Book a Pipeline Walkthrough</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#hiring-workflow"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-[12.5px] font-semibold text-[#D4D4DA] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.07] hover:text-white"
                >
                  <span>Explore 4-Stage Process</span>
                  <ArrowRightIcon className="h-4 w-4 text-[#85858F] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 1: HIRING WORKFLOW (STEP-BY-STEP VISUAL)
        ========================================================= */}
        <section
          id="hiring-workflow"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          <div className="pointer-events-none absolute right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-[#9BCF4D]/[0.04] blur-[130px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[780px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7D44C]">
                The End-to-End Pipeline
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                Hiring Workflow — Move Candidates from Application to Decision
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                Minivel transforms hiring pipelines into clear, actionable
                stages that guide recruiters and hiring managers at every step.
                Track candidate momentum, eliminate pipeline bottlenecks, and
                accelerate time-to-hire with automated stage alerts and real-time
                handoffs.
              </p>
            </div>

            {/* STEP-BY-STEP VISUAL (HORIZONTAL ON DESKTOP, VERTICAL ON MOBILE) */}
            <div className="mt-14">
              {/* Horizontal Progress Track (Desktop) */}
              <div className="hidden lg:grid lg:grid-cols-4 gap-4 relative">
                {/* Connecting Track Line */}
                <div className="absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#7F9FE8]/40 via-[#A7D44C]/40 to-[#E59E52]/40 -z-0" />

                {WORKFLOW_STEPS.map((item, idx) => {
                  const isSelected = activeStep === idx;
                  return (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`relative z-10 flex flex-col items-center text-center p-4 rounded-[20px] transition-all duration-300 ${
                        isSelected
                          ? "bg-white/[0.06] border border-white/[0.18] shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                          : "hover:bg-white/[0.025] border border-transparent"
                      }`}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-[14px] font-black transition-all duration-300 ${
                          isSelected
                            ? "border-white/30 bg-white/[0.1] text-white shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-110"
                            : "border-white/[0.08] bg-[#121217] text-[#85858F]"
                        }`}
                        style={{
                          borderColor: isSelected ? item.color : undefined,
                        }}
                      >
                        {item.step}
                      </div>

                      <h3 className="mt-4 text-[17px] font-bold text-[#F5F5F7]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] font-medium text-[#777780]">
                        {item.subtitle}
                      </p>

                      <span
                        className="mt-3 inline-block rounded-full px-2.5 py-0.5 text-[9.5px] font-semibold"
                        style={{
                          backgroundColor: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        {item.metrics}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Showcase Card */}
              <div className="mt-8 rounded-[24px] border border-white/[0.12] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-2xl sm:p-10 lg:p-12">
                <div className="grid items-center gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3">
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${WORKFLOW_STEPS[activeStep].color}20`,
                          color: WORKFLOW_STEPS[activeStep].color,
                        }}
                      >
                        Stage {WORKFLOW_STEPS[activeStep].step}
                      </span>
                      <span className="text-[12px] text-[#777780]">
                        {WORKFLOW_STEPS[activeStep].duration}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[26px] font-bold text-[#F5F5F7] sm:text-[32px]">
                      {WORKFLOW_STEPS[activeStep].title} —{" "}
                      <span className="text-[#A5A5AF]">
                        {WORKFLOW_STEPS[activeStep].subtitle}
                      </span>
                    </h3>

                    <p className="mt-4 text-[14.5px] leading-[1.8] text-[#85858F]">
                      {WORKFLOW_STEPS[activeStep].description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {WORKFLOW_STEPS[activeStep].bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-3">
                          <CheckIcon
                            className="h-4 w-4 shrink-0"
                            style={{ color: WORKFLOW_STEPS[activeStep].color }}
                          />
                          <span className="text-[13.5px] text-[#C4C4CC]">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stage Metrics Card */}
                  <div className="lg:col-span-5 rounded-[20px] border border-white/[0.08] bg-[#111116] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#777780]">
                          Stage Efficiency
                        </p>
                        <p className="mt-1 text-[18px] font-bold text-white">
                          Performance Metric
                        </p>
                      </div>
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-[14px] font-bold"
                        style={{
                          backgroundColor: `${WORKFLOW_STEPS[activeStep].color}18`,
                          color: WORKFLOW_STEPS[activeStep].color,
                        }}
                      >
                        ✓
                      </span>
                    </div>

                    <div className="mt-5 space-y-4">
                      <div>
                        <div className="flex justify-between text-[12px]">
                          <span className="text-[#85858F]">
                            Pipeline Velocity
                          </span>
                          <span className="font-bold text-white">Optimal</span>
                        </div>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${(activeStep + 1) * 25}%`,
                              backgroundColor:
                                WORKFLOW_STEPS[activeStep].color,
                            }}
                          />
                        </div>
                      </div>

                      <div className="rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-3.5">
                        <p className="text-[11px] font-semibold text-[#85858F]">
                          Active Stage Objective
                        </p>
                        <p className="mt-1 text-[13px] text-[#D8D8DF]">
                          {activeStep === 0 &&
                            "Normalize candidate profiles from all inbound channels into one talent ledger."}
                          {activeStep === 1 &&
                            "Identify best-match talent and progress top performers within 24 hours."}
                          {activeStep === 2 &&
                            "Align interview panel members with synchronized question scorecards."}
                          {activeStep === 3 &&
                            "Synthesize panel feedback and extend structured, competitive offers."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Step Selector (Visible on small screens) */}
              <div className="mt-5 grid grid-cols-2 gap-2 lg:hidden">
                {WORKFLOW_STEPS.map((item, idx) => (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`rounded-xl border p-3 text-left transition-all ${
                      activeStep === idx
                        ? "border-[#A7D44C]/50 bg-white/[0.08] text-white"
                        : "border-white/[0.08] bg-white/[0.02] text-[#85858F]"
                    }`}
                  >
                    <span className="text-[11px] font-bold">
                      {item.step}. {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: CANDIDATE MANAGEMENT
        ========================================================= */}
        <section
          id="candidate-management"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          <div className="pointer-events-none absolute left-0 top-1/4 h-[440px] w-[440px] rounded-full bg-[#8B73C4]/[0.05] blur-[150px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7D44C]">
                  Centralized Profiles
                </span>
                <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px]">
                  Candidate Management — Organise Profiles Throughout the Hiring
                  Process
                </h2>
                <p className="mt-5 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                  Never lose track of top talent again. Minivel organizes
                  candidate profiles into rich, centralized talent dossiers
                  complete with resume history, communication logs, evaluation
                  scores, and searchable skill tags.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Unified candidate dossier with contact details and full history",
                    "Tagging engine for skills, seniority, and salary expectations",
                    "Direct search across all active and archived candidate resumes",
                    "Candidate notes, mentions, and private recruiter comments",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#A7D44C]/30 bg-[#A7D44C]/10">
                        <CheckIcon className="h-3.5 w-3.5 text-[#BCE65E]" />
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-[#A5A5AF]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dossier Mockup Panel */}
              <div className="rounded-[22px] border border-white/[0.10] bg-[#121217]/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-[#A7D44C]/15 text-[15px] font-extrabold text-[#D5ECA3]">
                      AM
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-white">
                        Aarav Mehta
                      </h3>
                      <p className="text-[12px] text-[#777780]">
                        Senior Frontend Architect · Applied 3d ago
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-[#A7D44C]/30 bg-[#A7D44C]/10 px-3 py-1 text-[10px] font-bold text-[#D8F48D]">
                    Stage: Interview
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-[14px] border border-white/[0.06] bg-white/[0.025] p-3">
                    <p className="text-[10px] uppercase text-[#777780]">
                      Match Score
                    </p>
                    <p className="mt-1 text-[18px] font-black text-[#A7D44C]">
                      94/100
                    </p>
                  </div>
                  <div className="rounded-[14px] border border-white/[0.06] bg-white/[0.025] p-3">
                    <p className="text-[10px] uppercase text-[#777780]">
                      Experience
                    </p>
                    <p className="mt-1 text-[18px] font-black text-white">
                      7 Years
                    </p>
                  </div>
                  <div className="rounded-[14px] border border-white/[0.06] bg-white/[0.025] p-3 col-span-2 sm:col-span-1">
                    <p className="text-[10px] uppercase text-[#777780]">
                      Notice Period
                    </p>
                    <p className="mt-1 text-[18px] font-black text-[#9279C9]">
                      15 Days
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[11px] font-semibold text-[#85858F]">
                    Tagged Skills
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js", "GraphQL", "AWS"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[#C8C8D0]"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-6 rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#A7D44C]">
                    Latest Recruiter Note
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#92929C]">
                    "Exceptional architecture interview. Demonstrated clear
                    knowledge of state machines and design tokens. Recommended
                    for offer stage."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: TEAM COLLABORATION
        ========================================================= */}
        <section
          id="team-collaboration"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          <div className="pointer-events-none absolute right-0 top-1/4 h-[450px] w-[450px] rounded-full bg-[#9279C9]/[0.055] blur-[150px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[780px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9279C9]">
                Shared Alignment
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                Team Collaboration — Keep Recruiters and Hiring Teams Aligned
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                Great hires happen when recruiters and hiring panels share the
                same picture. Minivel unites your entire team with structured
                feedback scorecards, inline candidate notes, automated
                reminders, and real-time decision consensus.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Structured Scorecards",
                  desc: "Replace vague feedback with role-specific competency ratings (1 to 5 stars) and mandatory written justifications.",
                  badge: "Standardized",
                  accent: "#A7D44C",
                },
                {
                  title: "Private In-Line Notes",
                  desc: "Share sensitive hiring manager remarks, salary discussions, and background checks visible only to designated roles.",
                  badge: "Confidential",
                  accent: "#7F9FE8",
                },
                {
                  title: "Automated Nudges",
                  desc: "Keep interviews moving forward with automated reminders sent to interviewers when feedback is pending after loops.",
                  badge: "Time-saving",
                  accent: "#9279C9",
                },
              ].map((collab) => (
                <div
                  key={collab.title}
                  className="group rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${collab.accent}18`,
                        color: collab.accent,
                      }}
                    >
                      {collab.badge}
                    </span>
                    <span className="text-[12px] text-[#777780]">●</span>
                  </div>

                  <h3 className="mt-5 text-[18px] font-bold text-[#F5F5F7]">
                    {collab.title}
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.7] text-[#777780]">
                    {collab.desc}
                  </p>
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
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#A7D44C]/[0.12] blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#9279C9]/[0.14] blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-[700px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7D44C]">
                Ready to optimize your pipeline?
              </span>
              <h2 className="mt-4 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#F5F5F7] sm:text-[44px] lg:text-[50px]">
                Build a hiring workflow your team actually loves using.
              </h2>
              <p className="mt-5 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[16px]">
                Take control of candidate velocity and keep every stakeholder
                aligned with Minivel.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-8 py-3.5 text-[13px] font-bold text-[#D8F48D] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/25 hover:shadow-[0_12px_36px_rgba(167,212,76,0.25)]"
                >
                  <span>Book a Personalized Demo</span>
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
