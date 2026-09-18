import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M5 12h14m-5-5 5 5-5 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4", style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="m5 12 4 4L19 6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LayersIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

function LockIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function BellIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 12 6 8Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

const LIME = "#A7D44C";
const VIOLET = "#9279C9";

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Application",
    subtitle: "Inbound & sourcing intake",
    description:
      "Resumes and profiles are captured automatically from job boards, sourcing extensions, and direct applicant portals, de-duplicated, and formatted into clean profiles.",
    duration: "Instant ingestion",
    metrics: "100% captured",
    color: VIOLET,
    bullets: [
      "Auto-sync from LinkedIn, Indeed, Naukri",
      "Instant resume parsing and indexing",
      "Deduplication against the existing talent pool",
    ],
    objective: "Normalise candidate profiles from every inbound channel into one talent ledger.",
  },
  {
    step: "02",
    title: "Screening",
    subtitle: "Qualification & scoring",
    description:
      "Recruiters evaluate core capabilities, role relevance, and compensation expectations against structured initial screening checklists.",
    duration: "Avg. 24h turnaround",
    metrics: "2.4x review speed",
    color: LIME,
    bullets: [
      "Custom screening checklists per requisition",
      "One-click status transitions and quick notes",
      "Automated candidate acknowledgment emails",
    ],
    objective: "Identify best-match talent and progress top performers within 24 hours.",
  },
  {
    step: "03",
    title: "Interview",
    subtitle: "Collaborative panel loops",
    description:
      "Coordinate multi-stage interviews without the back-and-forth. Interviewers receive structured scorecards and question banks, and sync feedback before debriefs.",
    duration: "Seamless calendar sync",
    metrics: "Zero feedback delays",
    color: VIOLET,
    bullets: [
      "Automated calendar invites via Gmail or Outlook",
      "Role-specific competency scorecards",
      "Blind evaluations to reduce hiring bias",
    ],
    objective: "Align every interview panel member with the same synchronised scorecard.",
  },
  {
    step: "04",
    title: "Decision",
    subtitle: "Consensus & offer rollout",
    description:
      "Hiring managers, recruiters, and leadership convene around a single consensus dashboard to finalise compensation, approve terms, and extend offers.",
    duration: "Accelerated closure",
    metrics: "94% offer acceptance",
    color: LIME,
    bullets: [
      "Consolidated interview scoring matrix",
      "Audit trail of all approvals and notes",
      "Offer template generation and handoff",
    ],
    objective: "Synthesise panel feedback and extend structured, competitive offers.",
  },
];

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState(0);
  const active = WORKFLOW_STEPS[activeStep];

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
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-7 sm:pb-28 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-24 xl:px-12">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 top-10 h-[460px] w-[460px] rounded-full bg-[#9279C9]/[0.06] blur-[145px]" />
            <div className="absolute -right-20 top-20 h-[480px] w-[480px] rounded-full bg-[#A7D44C]/[0.05] blur-[140px]" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                maskImage: "linear-gradient(to bottom, black 10%, transparent 75%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 75%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-[720px] text-center">
              <h1 className="text-[34px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                Move candidates forward with speed, structure and clarity.
              </h1>

              <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-[1.75] text-[#93939C] sm:text-[1.1rem]">
                Minivel gives recruiters and hiring managers automated stage
                tracking, standardised candidate dossiers, and transparent
                team consensus from first touch to final offer.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/request-demo"
                  className="group inline-flex h-[50px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-8 text-[13px] font-semibold text-[#D8F48D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/20 hover:shadow-[0_14px_36px_rgba(167,212,76,0.18)]"
                >
                  <span>Book a pipeline walkthrough</span>
                  <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#hiring-workflow"
                  className="group inline-flex h-[50px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/[0.10] bg-white/[0.025] px-8 text-[13px] font-semibold text-[#D0D0D6] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.05] hover:text-white"
                >
                  <span>Explore the 4-stage process</span>
                  <ArrowRightIcon className="text-[#777780] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Trust strip — grounds the hero in real numbers instead of empty space */}
            <div className="mx-auto mt-16 grid max-w-[820px] grid-cols-2 gap-x-6 gap-y-8 border-t border-white/[0.07] pt-10 sm:grid-cols-4">
              {[
                { value: "4", label: "Pipeline stages" },
                { value: "24h", label: "Avg. screening turnaround" },
                { value: "2.4x", label: "Faster candidate review" },
                { value: "94%", label: "Offer acceptance rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-[24px] font-semibold tracking-[-0.02em] text-[#EDEDF0]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11.5px] leading-[1.5] text-[#71717A]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 1 — HIRING WORKFLOW
        ========================================================= */}
        <section
          id="hiring-workflow"
          className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-12"
        >
          <div className="relative mx-auto max-w-[1180px]">
            <div className="max-w-[620px]">
              <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F1F1F4] sm:text-[38px]">
                Move candidates from application to decision.
              </h2>
              <p className="mt-6 text-[15px] leading-[1.8] text-[#85858F] sm:text-[1.1rem]">
                Minivel turns a hiring pipeline into clear, actionable stages
                that guide recruiters and hiring managers at every step —
                with automated stage alerts and real-time handoffs between
                teams.
              </p>
            </div>

            {/* Step Track (Desktop) */}
            <div className="relative mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-4">
              <div className="pointer-events-none absolute left-[12%] right-[12%] top-[27px] -z-0 h-px bg-white/[0.08]" />

              {WORKFLOW_STEPS.map((item, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`relative z-10 flex flex-col items-center rounded-[18px] p-5 text-center transition-all duration-300 ${
                      isSelected
                        ? "border border-white/[0.14] bg-white/[0.05] shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
                        : "border border-transparent hover:bg-white/[0.02]"
                    }`}
                  >
                    <div
                      className="flex h-[54px] w-[54px] items-center justify-center rounded-full border text-[13px] font-semibold transition-all duration-300"
                      style={{
                        borderColor: isSelected ? item.color : "rgba(255,255,255,0.10)",
                        backgroundColor: isSelected ? `${item.color}14` : "#121217",
                        color: isSelected ? item.color : "#85858F",
                      }}
                    >
                      {item.step}
                    </div>

                    <h3 className="mt-4 text-[16px] font-semibold text-[#F0F0F3]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11.5px] text-[#77777F]">
                      {item.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Step Showcase */}
            <div className="mt-8 overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#121217]">
              <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.3fr_1fr] lg:gap-10 lg:p-11">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-[10.5px] font-semibold"
                      style={{ backgroundColor: `${active.color}18`, color: active.color }}
                    >
                      Stage {active.step}
                    </span>
                    <span className="text-[12px] text-[#77777F]">{active.duration}</span>
                  </div>

                  <h3 className="mt-5 text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#F5F5F7] sm:text-[26px]">
                    {active.title}
                    <span className="text-[#8D8D96]"> — {active.subtitle}</span>
                  </h3>

                  <p className="mt-4 max-w-[460px] text-[13.5px] leading-[1.8] text-[#85858F]">
                    {active.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
                    {active.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3">
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${active.color}18`, color: active.color }}
                        >
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span className="text-[13px] text-[#C4C4CC]">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage metrics panel */}
                <div className="rounded-[18px] border border-white/[0.07] bg-[#0D0D11] p-6">
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                    <div>
                      <p className="text-[10.5px] text-[#6C6C75]">Stage efficiency</p>
                      <p className="mt-1 text-[17px] font-semibold text-white">
                        {active.metrics}
                      </p>
                    </div>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-[12px]"
                      style={{ backgroundColor: `${active.color}18`, color: active.color }}
                    >
                      <LayersIcon className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-between text-[12px]">
                      <span className="text-[#85858F]">Pipeline progress</span>
                      <span className="font-semibold text-white">
                        Stage {active.step} of 04
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${(activeStep + 1) * 25}%`, backgroundColor: active.color }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="text-[10.5px] font-semibold text-[#85858F]">
                      Active stage objective
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-[1.65] text-[#D8D8DF]">
                      {active.objective}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile step selector */}
            <div className="mt-4 grid grid-cols-2 gap-2 lg:hidden">
              {WORKFLOW_STEPS.map((item, idx) => (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`rounded-[14px] border p-3.5 text-left transition-all ${
                    activeStep === idx
                      ? "border-white/[0.16] bg-white/[0.06] text-white"
                      : "border-white/[0.07] bg-white/[0.015] text-[#85858F]"
                  }`}
                >
                  <span className="text-[12px] font-semibold">
                    {item.step} · {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2 — CANDIDATE MANAGEMENT
        ========================================================= */}
        <section
          id="candidate-management"
          className="relative border-t border-white/[0.07] bg-[#101015] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-12"
        >
          <div className="relative mx-auto max-w-[1180px]">
            <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
              <div>
                <h2 className="max-w-[460px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F1F1F4] sm:text-[38px]">
                  Never lose track of top talent again.
                </h2>

                <p className="mt-6 max-w-[480px] text-[15px] leading-[1.8] text-[#85858F]">
                  Minivel organises candidate profiles into rich, centralised
                  dossiers — complete with resume history, communication
                  logs, evaluation scores, and searchable skill tags.
                </p>

                <div className="mt-9 space-y-5">
                  {[
                    {
                      title: "Unified dossier",
                      text: "Contact details and full candidate history in one place.",
                    },
                    {
                      title: "Tagging engine",
                      text: "Skills, seniority and salary expectations, searchable across the pool.",
                    },
                    {
                      title: "Recruiter notes",
                      text: "Private comments and mentions attached directly to a candidate.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 border-b border-white/[0.06] pb-5 last:border-b-0 last:pb-0">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#A7D44C]/15 bg-[#A7D44C]/[0.045] text-[#A7D44C]">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <div>
                        <h3 className="text-[14px] font-semibold text-[#DCDCE2]">{item.title}</h3>
                        <p className="mt-1.5 text-[12.5px] leading-[1.7] text-[#71717A]">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dossier Mockup */}
              <div className="overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#121217] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 sm:px-7">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A7D44C]/25 bg-[#A7D44C]/12 text-[13px] font-semibold text-[#D5ECA3]">
                      AM
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-white">Aarav Mehta</h3>
                      <p className="text-[11.5px] text-[#77777F]">
                        Senior Frontend Architect · Applied 3d ago
                      </p>
                    </div>
                  </div>

                  <span className="hidden shrink-0 rounded-full border border-[#A7D44C]/25 bg-[#A7D44C]/10 px-3 py-1 text-[10px] font-semibold text-[#D8F48D] sm:inline-block">
                    Interview stage
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <p className="text-[10px] text-[#6C6C75]">Match score</p>
                      <p className="mt-1.5 text-[18px] font-semibold text-[#A7D44C]">94/100</p>
                    </div>
                    <div className="rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <p className="text-[10px] text-[#6C6C75]">Experience</p>
                      <p className="mt-1.5 text-[18px] font-semibold text-white">7 yrs</p>
                    </div>
                    <div className="rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-3.5">
                      <p className="text-[10px] text-[#6C6C75]">Notice</p>
                      <p className="mt-1.5 text-[18px] font-semibold text-[#B49CDD]">15 days</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-[11px] font-semibold text-[#85858F]">Tagged skills</p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {["React", "TypeScript", "Node.js", "GraphQL", "AWS"].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] text-[#C8C8D0]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-[16px] border border-white/[0.06] bg-[#0D0D11] p-4">
                    <p className="text-[10.5px] font-semibold text-[#A7D44C]">
                      Latest recruiter note
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-[1.7] text-[#92929C]">
                      Exceptional architecture interview — demonstrated clear
                      knowledge of state machines and design tokens.
                      Recommended for offer stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3 — TEAM COLLABORATION
        ========================================================= */}
        <section
          id="team-collaboration"
          className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-12"
        >
          <div className="relative mx-auto max-w-[1180px]">
            <div className="max-w-[620px]">
              <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F1F1F4] sm:text-[38px]">
                Great hires happen when everyone sees the same picture.
              </h2>
              <p className="mt-6 text-[15px] leading-[1.8] text-[#85858F] sm:text-[1.1rem]">
                Minivel unites recruiters and hiring panels with structured
                feedback scorecards, inline candidate notes, and real-time
                decision consensus.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: LayersIcon,
                  title: "Structured scorecards",
                  desc: "Role-specific competency ratings from one to five, with a mandatory written justification for each.",
                  badge: "Standardised",
                  accent: VIOLET,
                },
                {
                  icon: LockIcon,
                  title: "Private in-line notes",
                  desc: "Sensitive hiring-manager remarks, salary discussions, and background checks, visible only to the roles you choose.",
                  badge: "Confidential",
                  accent: LIME,
                },
                {
                  icon: BellIcon,
                  title: "Automated nudges",
                  desc: "Reminders sent to interviewers the moment feedback is pending, so a loop never quietly stalls.",
                  badge: "Time-saving",
                  accent: VIOLET,
                },
              ].map((collab) => {
                const Icon = collab.icon;
                return (
                  <div
                    key={collab.title}
                    className="rounded-[22px] border border-white/[0.08] bg-[#121217] p-7 transition-colors duration-300 hover:bg-[#15151A]"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-[12px]"
                        style={{ backgroundColor: `${collab.accent}16`, color: collab.accent }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[9.5px] font-medium text-[#8D8D96]">
                        {collab.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-[17px] font-semibold text-[#F0F0F3]">
                      {collab.title}
                    </h3>
                    <p className="mt-2.5 text-[12.5px] leading-[1.75] text-[#7C7C85]">
                      {collab.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================= */}
        <section className="relative overflow-hidden border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A7D44C]/[0.035] blur-[150px]" />
          </div>

          <div className="relative mx-auto max-w-[780px] text-center">
            <h2 className="mx-auto max-w-[680px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F3F3F5] sm:text-[42px]">
              Build a hiring workflow your team actually loves using.
            </h2>
            <p className="mx-auto mt-6 max-w-[520px] text-[14.5px] leading-[1.8] text-[#7D7D86] sm:text-[15px]">
              Take control of candidate velocity and keep every stakeholder
              aligned, from first application to signed offer.
            </p>

            <div className="mt-9">
              <Link
                to="/request-demo"
                className="group inline-flex h-[52px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-[#A7D44C]/30 bg-[#A7D44C]/10 px-8 text-[13px] font-semibold text-[#D8F48D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/55 hover:bg-[#A7D44C]/18 hover:shadow-[0_14px_36px_rgba(167,212,76,0.18)]"
              >
                <span>Book a personalised demo</span>
                <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
