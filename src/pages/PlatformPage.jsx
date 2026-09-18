import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ============================================================
   TYPE SCALE (single source of truth — keep to these values)
   10 · 12 · 13 · 15 · 17 · 20 · 26 · 32 · 38 · 48
   Weights: 400 body · 500 labels · 600 headings. Nothing else.
   Family is set once on the page root below.
   ============================================================ */

const FONT_STACK =
  '"Inter", "Inter var", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

const LIME = "#A7D44C";
const VIOLET = "#9279C9";

/* Tabular figures so numbers in tables and stats don't jitter */
const NUM = { fontVariantNumeric: "tabular-nums" };

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M5 12h14m-5-5 5 5-5 5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const HERO_STATS = [
  { value: "312", label: "Candidates in play" },
  { value: "24h", label: "Median screening time" },
  { value: "2.4×", label: "Faster shortlisting" },
  { value: "94%", label: "Offers accepted" },
];

const PIPELINE = [
  {
    stage: "New",
    count: 14,
    accent: "#6E6E78",
    cards: [
      { name: "Priya Nair", role: "Product Designer", meta: "Applied 2h ago", source: "LinkedIn" },
      { name: "Rahul Verma", role: "Backend Engineer", meta: "Applied 5h ago", source: "Referral" },
      { name: "Sana Kapoor", role: "Data Analyst", meta: "Applied 1d ago", source: "Naukri" },
    ],
  },
  {
    stage: "Screening",
    count: 9,
    accent: VIOLET,
    cards: [
      { name: "Aarav Mehta", role: "Frontend Architect", meta: "Match 94", source: "Resume reviewed" },
      { name: "Neha Iyer", role: "QA Lead", meta: "Match 81", source: "Call scheduled" },
    ],
  },
  {
    stage: "Interview",
    count: 6,
    accent: VIOLET,
    cards: [
      { name: "Dev Sharma", role: "DevOps Engineer", meta: "Round 2 · today 15:00", source: "2 of 3 scores in" },
      { name: "Ira Bose", role: "Product Manager", meta: "Panel · tomorrow", source: "Scorecard sent" },
    ],
  },
  {
    stage: "Decision",
    count: 3,
    accent: LIME,
    cards: [
      { name: "Kabir Shah", role: "Engineering Manager", meta: "Offer drafted", source: "3 of 4 approvals" },
      { name: "Meera Rao", role: "Brand Designer", meta: "Comp approved", source: "Sending today" },
    ],
  },
];

const WORKFLOW_STAGES = [
  {
    step: "01",
    title: "Application and sourcing",
    detail:
      "Applicants from job boards, referrals, and the Chrome extension land as structured profiles, de-duplicated against your existing pool.",
    status: "98% parse accuracy",
  },
  {
    step: "02",
    title: "Screening and qualification",
    detail:
      "Resumes are matched against role criteria, so recruiters read a ranked shortlist instead of an inbox.",
    status: "24h median",
  },
  {
    step: "03",
    title: "Panel evaluation",
    detail:
      "Interview loops run on shared scorecards with inline feedback, and stalled loops get chased automatically.",
    status: "0 lost scorecards",
  },
  {
    step: "04",
    title: "Offer and decision",
    detail:
      "One decision view holds every score, note, and approval, so offers go out the same day the panel agrees.",
    status: "94% accepted",
  },
];

const INTEGRATIONS = [
  {
    title: "Sourcing channels",
    desc: "Applications and sourced profiles arrive as complete candidate records.",
    link: "/integrations#recruitment-channels",
    tools: [
      { name: "LinkedIn", detail: "186 profiles this month" },
      { name: "Indeed", detail: "74 applications" },
      { name: "Naukri", detail: "52 applications" },
    ],
  },
  {
    title: "Email and messaging",
    desc: "Every candidate conversation lands on one timeline, whoever sent it.",
    link: "/integrations#communication",
    tools: [
      { name: "Gmail", detail: "Two-way sync" },
      { name: "Outlook", detail: "Two-way sync" },
      { name: "WhatsApp", detail: "Replies logged" },
    ],
  },
  {
    title: "Your existing stack",
    desc: "Capture profiles from any page and keep records in step with the tools you already run.",
    link: "/integrations#connected-tools",
    tools: [
      { name: "Chrome extension", detail: "1-click capture" },
      { name: "Zoho", detail: "Nightly sync" },
      { name: "Google Calendar", detail: "Interview holds" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function CandidateChip({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.04] text-[10px] font-medium text-[#B9B9C2]">
      {initials}
    </span>
  );
}

function PipelineColumn({ column }) {
  const isDecision = column.stage === "Decision";
  return (
    <div
      className="rounded-[15px] border p-3.5"
      style={{
        borderColor: isDecision ? "rgba(167,212,76,0.20)" : "rgba(255,255,255,0.07)",
        backgroundColor: isDecision ? "rgba(167,212,76,0.035)" : "#101014",
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-[12px] font-medium"
          style={{ color: isDecision ? "#B7DA68" : "#9B9BA4" }}
        >
          {column.stage}
        </span>
        <span className="text-[10px] text-[#5F5F68]" style={NUM}>
          {column.count}
        </span>
      </div>

      <div className="mt-3.5 space-y-2">
        {column.cards.map((card) => (
          <div
            key={card.name}
            className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5"
          >
            <div className="flex items-center gap-2">
              <CandidateChip name={card.name} />
              <div className="min-w-0">
                <p className="truncate text-[12px] font-medium text-[#DEDEE4]">{card.name}</p>
                <p className="truncate text-[10px] text-[#6F6F78]">{card.role}</p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-white/[0.05] pt-2">
              <span className="truncate text-[10px] text-[#83838D]" style={NUM}>
                {card.meta}
              </span>
              <span className="shrink-0 text-[10px] text-[#5F5F68]">{card.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function PlatformPage() {
  const [openStage, setOpenStage] = useState(1);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0E0E13] text-[#E5E5E8] selection:bg-[#A7D44C]/20 selection:text-white"
      style={{ fontFamily: FONT_STACK }}
    >
      <Navbar />

      <main className="relative pt-[90px] lg:pt-[96px]">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden px-5 pb-24 pt-16 sm:px-7 sm:pb-28 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-24 xl:px-12">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[8%] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#A7D44C]/[0.045] blur-[130px]" />
            <div className="absolute right-[8%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#9279C9]/[0.035] blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-[1180px]">
            <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">

              {/* Hero copy */}
              <div className="max-w-[560px]">
                <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#F5F5F7] sm:text-[48px]">
                  Everything your team needs to move a candidate forward.
                </h1>

                <p className="mt-6 max-w-[500px] text-[17px] leading-[1.7] text-[#9A9AA4]">
                  Minivel gives your team one place to manage candidates,
                  conversations, feedback, and hiring decisions.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link
                    to="/request-demo"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#A7D44C] px-6 py-3.5 text-[13px] font-semibold text-[#111116] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B8E65D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A7D44C]"
                  >
                    Request a demo
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#features"
                    className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#A9A9B2] transition-colors duration-300 hover:text-white"
                  >
                    See how it works
                    <ArrowRightIcon className="h-4 w-4 text-[#6F6F78] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </a>
                </div>

                {/* Stats — replaces the empty space under the buttons */}
                <dl className="mt-12 grid max-w-[480px] grid-cols-2 gap-x-6 gap-y-7 border-t border-white/[0.07] pt-8 sm:grid-cols-4">
                  {HERO_STATS.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span
                          className="block text-[20px] font-semibold tracking-[-0.02em] text-[#EDEDF0]"
                          style={NUM}
                        >
                          {stat.value}
                        </span>
                        <span className="mt-1 block text-[12px] leading-[1.45] text-[#6F6F78]">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Hero product visual — a populated board, not placeholder bars */}
              <div className="relative">
                <div className="overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#141419] shadow-[0_30px_90px_rgba(0,0,0,0.42)]">

                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4 sm:px-6">
                    <div>
                      <p className="text-[13px] font-semibold text-[#E1E1E5]">
                        Product engineering — Q3 hiring
                      </p>
                      <p className="mt-1 text-[10px] text-[#696971]" style={NUM}>
                        32 candidates · 5 open roles · updated 4 min ago
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C]" />
                      <span className="text-[10px] text-[#9A9AA4]">7 teammates in here</span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {PIPELINE.map((column) => (
                        <PipelineColumn key={column.stage} column={column} />
                      ))}
                    </div>

                    {/* Footer strip with real activity instead of a blank row */}
                    <div className="mt-4 flex flex-col gap-3 border-t border-white/[0.07] pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A7D44C]/15 text-[#BCE65E]">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <p className="text-[12px] text-[#B8B8C0]">
                          Ananya moved Kabir Shah to Decision
                          <span className="text-[#65656E]"> · 11 min ago</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-[#83838D]">
                        <ClockIcon className="h-3.5 w-3.5" />
                        <span className="text-[10px]" style={NUM}>
                          2 scorecards due today
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating card, now carrying a number worth floating */}
                <div className="absolute -bottom-5 -left-5 hidden w-[218px] rounded-[14px] border border-white/[0.08] bg-[#17171D] px-4 py-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.38)] sm:block">
                  <p className="text-[10px] text-[#686872]">Time in stage, this quarter</p>
                  <p className="mt-2 text-[20px] font-semibold text-[#D8D8DE]" style={NUM}>
                    6.2 days
                  </p>
                  <p className="mt-1 text-[10px] text-[#7E9A4C]">Down from 11.4 in Q2</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ===================================================== */}
        <section
          id="features"
          className="border-t border-white/[0.06] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-12"
        >
          <div className="mx-auto max-w-[1180px]">

            <div className="max-w-[660px]">
              <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#F3F3F5] sm:text-[38px]">
                Everything your team needs to keep hiring moving.
              </h2>
              <p className="mt-5 max-w-[580px] text-[17px] leading-[1.75] text-[#92929C]">
                Candidate records, conversations, feedback, and decisions stay
                in one place, so nobody has to reconstruct the story from a
                spreadsheet and three inboxes.
              </p>
            </div>

            <div className="mt-14 sm:mt-16">
              <div className="overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#141419] shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
                <img
                  src="/assets/ats-features-screenshot.png"
                  alt="The Minivel candidate pipeline, with one candidate record open"
                  className="block h-auto w-full"
                />
              </div>
            </div>

            {/* Capability modules — each mockup now shows real records */}
            <div className="mt-16 grid gap-5 lg:grid-cols-2 sm:mt-20">

              {/* Candidate record */}
              <article className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#141419] p-6 sm:p-7 lg:p-8">
                <h3 className="max-w-[390px] text-[20px] font-semibold leading-[1.25] tracking-[-0.025em] text-[#E9E9EC]">
                  Give every candidate a clear place in the process.
                </h3>
                <p className="mt-3 max-w-[470px] text-[13px] leading-[1.75] text-[#81818B]">
                  Résumé, notes, scores, and every message sit on one record, so
                  context survives the handoff between recruiter and panel.
                </p>

                <div className="mt-7 rounded-[16px] border border-white/[0.07] bg-[#0F0F13] p-4">
                  <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A7D44C]/25 bg-[#A7D44C]/[0.10] text-[12px] font-medium text-[#D5ECA3]">
                      AM
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-medium text-[#E4E4EA]">Aarav Mehta</p>
                      <p className="text-[10px] text-[#6F6F78]">
                        Senior Frontend Architect · Bengaluru
                      </p>
                    </div>
                    <span className="rounded-full border border-[#A7D44C]/15 bg-[#A7D44C]/[0.06] px-2.5 py-1 text-[10px] text-[#AFCF67]">
                      Interview
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4">
                    {[
                      { k: "Match", v: "94", c: LIME },
                      { k: "Experience", v: "7 yrs", c: "#E4E4EA" },
                      { k: "Notice", v: "15 days", c: "#B49CDD" },
                    ].map((m) => (
                      <div key={m.k} className="rounded-lg bg-white/[0.025] p-3">
                        <p className="text-[10px] text-[#6C6C75]">{m.k}</p>
                        <p className="mt-1.5 text-[15px] font-semibold" style={{ color: m.c, ...NUM }}>
                          {m.v}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React", "TypeScript", "Design systems", "AWS"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] text-[#C8C8D0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              {/* Workflow */}
              <article className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#141419] p-6 sm:p-7 lg:p-8">
                <h3 className="max-w-[390px] text-[20px] font-semibold leading-[1.25] tracking-[-0.025em] text-[#E9E9EC]">
                  A candidate should not disappear between stages.
                </h3>
                <p className="mt-3 max-w-[470px] text-[13px] leading-[1.75] text-[#81818B]">
                  Everyone sees where a candidate stands, how long they have
                  been there, and who owes the next move.
                </p>

                <div className="mt-7 rounded-[16px] border border-white/[0.07] bg-[#0F0F13] p-5">
                  <div className="flex items-center justify-between">
                    {[
                      { label: "Applied", date: "4 Mar", done: true },
                      { label: "Screened", date: "6 Mar", done: true },
                      { label: "Interview", date: "11 Mar", current: true },
                      { label: "Decision", date: "Due 14 Mar", done: false },
                    ].map((node, i, arr) => (
                      <div key={node.label} className="flex flex-1 items-center last:flex-none">
                        <div className="flex flex-col items-center gap-2">
                          <span
                            className="h-3 w-3 rounded-full border"
                            style={{
                              backgroundColor: node.done
                                ? LIME
                                : node.current
                                ? "rgba(167,212,76,0.12)"
                                : "transparent",
                              borderColor: node.done
                                ? LIME
                                : node.current
                                ? "rgba(167,212,76,0.55)"
                                : "rgba(255,255,255,0.14)",
                            }}
                          />
                          <span
                            className="text-[10px]"
                            style={{ color: node.done || node.current ? "#9A9AA4" : "#62626A" }}
                          >
                            {node.label}
                          </span>
                          <span className="text-[10px] text-[#5B5B64]" style={NUM}>
                            {node.date}
                          </span>
                        </div>
                        {i < arr.length - 1 && <div className="mx-2 h-px flex-1 bg-white/[0.08]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <span className="text-[10px] text-[#66666F]">
                      Dev Sharma · DevOps Engineer
                    </span>
                    <span className="text-[10px] text-[#AFCB68]" style={NUM}>
                      3 days in Interview
                    </span>
                  </div>
                </div>
              </article>

              {/* Collaboration */}
              <article className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#141419] p-6 sm:p-7 lg:p-8">
                <h3 className="max-w-[390px] text-[20px] font-semibold leading-[1.25] tracking-[-0.025em] text-[#E9E9EC]">
                  Hiring works better when everyone sees the same picture.
                </h3>
                <p className="mt-3 max-w-[470px] text-[13px] leading-[1.75] text-[#81818B]">
                  Panel scores and notes collect on the record as they come in,
                  and pending reviewers get chased without anyone asking.
                </p>

                <div className="mt-7 rounded-[16px] border border-white/[0.07] bg-[#0F0F13] p-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                    <p className="text-[12px] text-[#B8B8C0]">Panel feedback</p>
                    <span className="text-[10px] text-[#686871]" style={NUM}>
                      2 of 3 submitted
                    </span>
                  </div>

                  <div className="mt-3.5 space-y-2.5">
                    {[
                      {
                        name: "Ananya Rao",
                        role: "Hiring manager",
                        score: "4.5",
                        note: "Clear reasoning on state machines. Would hire.",
                      },
                      {
                        name: "Vikram Joshi",
                        role: "Engineering lead",
                        score: "4.0",
                        note: "Strong on architecture, lighter on testing depth.",
                      },
                    ].map((r) => (
                      <div key={r.name} className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-3">
                        <div className="flex items-center gap-2.5">
                          <CandidateChip name={r.name} />
                          <div className="min-w-0 flex-1">
                            <p className="text-[12px] font-medium text-[#DEDEE4]">{r.name}</p>
                            <p className="text-[10px] text-[#6F6F78]">{r.role}</p>
                          </div>
                          <span className="text-[13px] font-semibold text-[#BCE65E]" style={NUM}>
                            {r.score}
                          </span>
                        </div>
                        <p className="mt-2 text-[10px] leading-[1.6] text-[#83838D]">{r.note}</p>
                      </div>
                    ))}

                    <div className="flex items-center justify-between rounded-lg border border-dashed border-white/[0.09] px-3 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <CandidateChip name="Rohit Menon" />
                        <p className="text-[12px] text-[#83838D]">Rohit Menon hasn’t scored yet</p>
                      </div>
                      <span className="text-[10px] text-[#AFCB68]">Reminder sent</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Decisions */}
              <article className="overflow-hidden rounded-[22px] border border-[#A7D44C]/10 bg-[#141419] p-6 sm:p-7 lg:p-8">
                <h3 className="max-w-[390px] text-[20px] font-semibold leading-[1.25] tracking-[-0.025em] text-[#E9E9EC]">
                  Keep the important context around every decision.
                </h3>
                <p className="mt-3 max-w-[470px] text-[13px] leading-[1.75] text-[#81818B]">
                  Scores, notes, and approvals sit next to the offer, so the
                  call is made once and the reasoning is still there in June.
                </p>

                <div className="mt-7 rounded-[16px] border border-[#A7D44C]/10 bg-[#0F0F13] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-medium text-[#E4E4EA]">Kabir Shah</p>
                      <p className="mt-1 text-[10px] text-[#6F6F78]">
                        Engineering Manager · Level 5
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A7D44C]/20 bg-[#A7D44C]/[0.07] text-[#B9E35B]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white/[0.025] p-3">
                      <p className="text-[10px] text-[#6C6C75]">Panel average</p>
                      <p className="mt-1.5 text-[15px] font-semibold text-[#E4E4EA]" style={NUM}>
                        4.3 / 5
                      </p>
                    </div>
                    <div className="rounded-lg bg-white/[0.025] p-3">
                      <p className="text-[10px] text-[#6C6C75]">Approvals</p>
                      <p className="mt-1.5 text-[15px] font-semibold text-[#AFCB68]" style={NUM}>
                        3 of 4
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/[0.06] pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#66666F]">
                        Waiting on Finance sign-off
                      </span>
                      <span className="text-[10px] text-[#AFCB68]" style={NUM}>
                        75%
                      </span>
                    </div>
                    <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full w-[75%] rounded-full bg-[#A7D44C]/70" />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            RECRUITMENT WORKFLOW
        ===================================================== */}
        <section
          id="recruitment-workflow"
          className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 xl:px-12"
        >
          <div className="pointer-events-none absolute left-0 top-1/4 h-[450px] w-[450px] rounded-full bg-[#8B73C4]/[0.05] blur-[150px]" />

          <div className="relative mx-auto max-w-[1180px]">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

              <div className="max-w-[560px]">
                <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[38px]">
                  See how hiring moves through Minivel.
                </h2>

                <p className="mt-5 text-[15px] leading-[1.8] text-[#85858F]">
                  Four stages, from intake to signed offer. Each one has a clear
                  owner, a clear exit, and a clock — which is why candidates
                  stop going quiet in the middle of the pipeline.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Candidates from every source land in one pool, de-duplicated",
                    "Stage alerts fire before a candidate goes cold, not after",
                    "Scorecards you can shape per role, not one template for all",
                    "Recruiter-to-hiring-manager handoffs carry the full record",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#A7D44C]/30 bg-[#A7D44C]/10 text-[#BCE65E]">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="text-[13px] leading-[1.7] text-[#A5A5AF]">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/workflow"
                  className="group mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#A7D44C] transition-colors hover:text-[#C4ED70]"
                >
                  <span>See the workflow in detail</span>
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Stages — click to expand, so the detail is motion that answers an action */}
              <div className="space-y-3">
                {WORKFLOW_STAGES.map((stage, idx) => {
                  const isOpen = openStage === idx;
                  return (
                    <button
                      key={stage.step}
                      type="button"
                      onClick={() => setOpenStage(idx)}
                      aria-expanded={isOpen}
                      className={`w-full rounded-[18px] border p-5 text-left transition-colors duration-200 ${
                        isOpen
                          ? "border-white/[0.16] bg-white/[0.055]"
                          : "border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-[12px] font-semibold transition-colors"
                          style={{
                            ...NUM,
                            borderColor: isOpen ? "rgba(167,212,76,0.40)" : "rgba(255,255,255,0.08)",
                            backgroundColor: "rgba(255,255,255,0.03)",
                            color: isOpen ? LIME : "#D7D7DB",
                          }}
                        >
                          {stage.step}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-[15px] font-semibold text-[#F5F5F7]">
                              {stage.title}
                            </h3>
                            <span
                              className="rounded-full border border-[#A7D44C]/25 bg-[#A7D44C]/10 px-2.5 py-0.5 text-[10px] font-medium text-[#C6E96E]"
                              style={NUM}
                            >
                              {stage.status}
                            </span>
                          </div>

                          <p
                            className={`text-[12px] leading-[1.7] text-[#777780] transition-all duration-200 ${
                              isOpen ? "mt-2 opacity-100" : "mt-1.5 opacity-70"
                            }`}
                          >
                            {stage.detail}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTEGRATIONS
        ===================================================== */}
        <section
          id="integrations"
          className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 xl:px-12"
        >
          <div className="pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[#A7D44C]/[0.045] blur-[140px]" />

          <div className="relative mx-auto max-w-[1180px]">
            <div className="max-w-[640px]">
              <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[38px]">
                Connect the tools your team already runs.
              </h2>
              <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-[#85858F]">
                Sourcing channels, inboxes, and calendars stay in step with the
                pipeline, so nobody copies a candidate between two systems.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {INTEGRATIONS.map((category) => (
                <div
                  key={category.title}
                  className="flex flex-col justify-between rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/[0.16]"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#F5F5F7]">{category.title}</h3>
                    <p className="mt-2 text-[13px] leading-[1.7] text-[#777780]">{category.desc}</p>

                    <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
                      {category.tools.map((tool) => (
                        <li key={tool.name} className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2.5">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A7D44C]/70" />
                            <span className="text-[13px] text-[#D4D4DA]">{tool.name}</span>
                          </span>
                          <span className="shrink-0 text-[10px] text-[#6F6F78]" style={NUM}>
                            {tool.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-white/[0.06] pt-4">
                    <Link
                      to={category.link}
                      className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#A7D44C] transition-colors hover:text-[#C5ED73]"
                    >
                      <span>See what syncs</span>
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CLOSING CTA
        ===================================================== */}
        <section className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 xl:px-12">
          <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[26px] border border-white/[0.10] bg-gradient-to-b from-[#14141B] to-[#0D0D12] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.6)] sm:p-14 lg:p-20">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#A7D44C]/[0.12] blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#9279C9]/[0.14] blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-[640px]">
              <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#F5F5F7] sm:text-[38px] lg:text-[48px]">
                Ready to give your hiring one clear home?
              </h2>

              <p className="mx-auto mt-5 max-w-[480px] text-[15px] leading-[1.8] text-[#85858F]">
                Bring a live role to the call and we’ll set the pipeline up with
                you in about thirty minutes.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#A7D44C] px-8 py-3.5 text-[13px] font-semibold text-[#111116] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B8E65D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A7D44C]"
                >
                  <span>Request a demo</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <span className="text-[12px] text-[#6F6F78]">
                  No card needed · Set up in a day
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
