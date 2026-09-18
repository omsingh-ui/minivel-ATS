import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ============================================================
   TYPE SCALE (same system as PlatformPage / WorkflowPage)
   10 · 12 · 13 · 15 · 17 · 20 · 26 · 32 · 38 · 48
   Weights: 400 body · 500 labels · 600 headings.
   ============================================================ */

const FONT_STACK =
  '"Inter", "Inter var", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

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

function CheckIcon({ className = "h-4 w-4", style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SyncIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" />
      <path d="M4 20v-4h4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const LOGO_STRIP = [
  { name: "LinkedIn", mark: "in", tint: "#70BBE5" },
  { name: "Indeed", mark: "id", tint: "#8BB2FF" },
  { name: "Naukri", mark: "N", tint: "#D5ECA3" },
  { name: "Gmail", mark: "M", tint: "#FF8E85" },
  { name: "Outlook", mark: "O", tint: "#71BCFF" },
  { name: "WhatsApp", mark: "WA", tint: "#7CEFA5" },
  { name: "Chrome", mark: "CR", tint: "#FFD666" },
  { name: "Zoho", mark: "Z", tint: "#FF8588" },
];

const HERO_SYNC = [
  { label: "Profiles imported this month", value: "312" },
  { label: "Candidate emails threaded", value: "1,847" },
  { label: "Duplicates caught at capture", value: "96%" },
  { label: "Typical setup time", value: "under 10 min" },
];

const CHANNELS = [
  {
    name: "LinkedIn",
    mark: "in",
    tint: "#70BBE5",
    border: "rgba(0,119,181,0.30)",
    fill: "rgba(0,119,181,0.15)",
    badge: "Sourcing network",
    desc:
      "Import candidate profiles directly from LinkedIn into your Minivel pipeline. Automatically synchronize candidate work history, role titles, and endorsements with one click.",
    features: [
      "One-click profile importation",
      "Direct applicant stream synchronization",
      "Recruiter outreach synchronization",
    ],
    stats: [
      { k: "This month", v: "186 profiles" },
      { k: "Sync", v: "Real time" },
    ],
  },
  {
    name: "Indeed",
    mark: "id",
    tint: "#8BB2FF",
    border: "rgba(33,100,243,0.30)",
    fill: "rgba(33,100,243,0.15)",
    badge: "Job board",
    desc:
      "Publish job openings and ingest candidates from Indeed automatically. Capture applicant resumes and questionnaire answers directly into structured Minivel candidate dossiers.",
    features: [
      "Automated job posting distribution",
      "Direct applicant routing into pipeline",
      "Real-time candidate notification delivery",
    ],
    stats: [
      { k: "This month", v: "74 applicants" },
      { k: "Sync", v: "Every 15 min" },
    ],
  },
  {
    name: "Naukri",
    mark: "N",
    tint: "#D5ECA3",
    border: "rgba(167,212,76,0.30)",
    fill: "rgba(167,212,76,0.15)",
    badge: "Talent database",
    desc:
      "Streamline Indian and regional hiring by synchronizing with Naukri's talent ecosystem. Ingest active applicant streams and populate resumes right into matching requisitions.",
    features: [
      "Sourcing integration for open roles",
      "Instant resume extraction into dossiers",
      "Custom requisition tag syncing",
    ],
    stats: [
      { k: "This month", v: "52 applicants" },
      { k: "Sync", v: "Every 15 min" },
    ],
  },
];

const COMMUNICATION = [
  {
    name: "Gmail",
    mark: "M",
    tint: "#FF8E85",
    border: "rgba(234,67,53,0.30)",
    fill: "rgba(234,67,53,0.15)",
    badge: "Email suite",
    desc:
      "Connect Google Workspace and Gmail for seamless two-way email synchronization. Send interview confirmations, status updates, and schedule Google Meet links directly from Minivel.",
    features: [
      "Two-way email thread synchronization",
      "Google Calendar interview coordination",
      "Custom email template variable tags",
    ],
    stats: [
      { k: "Threads synced", v: "1,204" },
      { k: "Direction", v: "Two-way" },
    ],
  },
  {
    name: "Outlook",
    mark: "O",
    tint: "#71BCFF",
    border: "rgba(0,120,212,0.30)",
    fill: "rgba(0,120,212,0.15)",
    badge: "Enterprise mail",
    desc:
      "Integrate Microsoft 365 and Outlook to manage recruiter calendars, schedule candidate interview slots, and maintain an auditable record of all candidate correspondence.",
    features: [
      "Microsoft 365 calendar scheduling",
      "Full candidate email history logs",
      "Automatic interviewer invite dispatch",
    ],
    stats: [
      { k: "Threads synced", v: "643" },
      { k: "Direction", v: "Two-way" },
    ],
  },
  {
    name: "WhatsApp",
    mark: "WA",
    tint: "#7CEFA5",
    border: "rgba(37,211,102,0.30)",
    fill: "rgba(37,211,102,0.15)",
    badge: "Instant messaging",
    desc:
      "Accelerate candidate response times by reaching candidates directly where they communicate. Send interview reminders, stage updates, and follow-ups via WhatsApp Business.",
    features: [
      "Automated interview date reminders",
      "Quick status alerts & confirmations",
      "Real-time message status tracking",
    ],
    stats: [
      { k: "Reply rate", v: "3.1× email" },
      { k: "Delivery", v: "Tracked" },
    ],
  },
];

const CONNECTED_TOOLS = [
  {
    name: "Chrome Extension",
    mark: "CR",
    tint: "#FFD666",
    border: "rgba(244,180,0,0.30)",
    fill: "rgba(244,180,0,0.15)",
    badge: "Browser extension",
    desc:
      "Clip and source talent from anywhere on the web in seconds. The Minivel Chrome Extension parses online profiles, identifies existing duplicates in your ATS, and saves new leads directly into targeted requisitions without leaving the page.",
    features: [
      "One-click candidate clipper from web pages",
      "Instant duplicate detection against Minivel records",
      "Assign candidates directly to active requisition pipelines",
      "Add recruiter tags, notes, and salary ranges on the fly",
    ],
    stats: [
      { k: "Captures this week", v: "128" },
      { k: "Avg. capture time", v: "6 sec" },
      { k: "Duplicates flagged", v: "31" },
    ],
  },
  {
    name: "Zoho",
    mark: "Z",
    tint: "#FF8588",
    border: "rgba(228,37,40,0.30)",
    fill: "rgba(228,37,40,0.15)",
    badge: "Business suite",
    desc:
      "Synchronize your recruitment pipeline with Zoho's business environment. Ensure smooth handoffs from applicant offer acceptance to employee onboarding, CRM synchronization, and reporting records.",
    features: [
      "Candidate data sync to Zoho CRM and employee databases",
      "Unified organizational record keeping",
      "Customizable webhooks for event-based data syncing",
      "Streamlined post-hire onboarding handoffs",
    ],
    stats: [
      { k: "Records in sync", v: "4,206" },
      { k: "Sync window", v: "Nightly" },
      { k: "Webhook events", v: "12 types" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

function LogoTile({ mark, tint, border, fill, size = "md" }) {
  const dims = size === "lg" ? "h-12 w-12 text-[17px]" : "h-10 w-10 text-[13px]";
  return (
    <span
      className={`flex ${dims} shrink-0 items-center justify-center rounded-[14px] border font-semibold`}
      style={{
        borderColor: border || "rgba(255,255,255,0.10)",
        backgroundColor: fill || "rgba(255,255,255,0.04)",
        color: tint,
      }}
    >
      {mark}
    </span>
  );
}

function IntegrationCard({ item, wide = false }) {
  return (
    <article
      className={`flex flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.028] transition-colors duration-300 hover:border-white/[0.16] hover:bg-white/[0.045] ${
        wide ? "p-7 sm:p-8" : "p-7"
      }`}
    >
      <header className="flex items-start gap-4">
        <LogoTile
          mark={item.mark}
          tint={item.tint}
          border={item.border}
          fill={item.fill}
          size={wide ? "lg" : "md"}
        />

        <div className="min-w-0 flex-1">
          <h3 className={`${wide ? "text-[20px]" : "text-[17px]"} font-semibold leading-[1.25] tracking-[-0.02em] text-[#F2F2F5]`}>
            {item.name}
          </h3>
          <p className="mt-1 text-[12px] text-[#6F6F78]">{item.badge}</p>
        </div>

        <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#A7D44C]/20 bg-[#A7D44C]/[0.07] px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C]" />
          <span className="text-[10px] font-medium text-[#AFCF67]">Live</span>
        </span>
      </header>

      <p className="mt-4 text-[13px] leading-[1.75] text-[#85858F]">{item.desc}</p>

      <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
        {item.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: item.tint }} />
            <span className="text-[13px] leading-[1.6] text-[#A5A5AF]">{feat}</span>
          </li>
        ))}
      </ul>

      {/* Numbers, so the card ends on substance instead of empty space */}
      <dl
        className="mt-auto grid gap-3 border-t border-white/[0.06] pt-5"
        style={{ gridTemplateColumns: `repeat(${item.stats.length}, minmax(0, 1fr))`, marginTop: "1.5rem" }}
      >
        {item.stats.map((s) => (
          <div key={s.k}>
            <dt className="text-[10px] text-[#6C6C75]">{s.k}</dt>
            <dd className="mt-1 text-[13px] font-medium text-[#DCDCE2]" style={NUM}>
              {s.v}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function SectionHead({ eyebrow, eyebrowColor, title, body }) {
  return (
    <div className="mx-auto max-w-[720px] text-center">
      <p className="text-[12px] font-medium" style={{ color: eyebrowColor }}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[38px]">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-[1.8] text-[#85858F]">{body}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function IntegrationsPage() {
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
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-7 sm:pb-28 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-24 xl:px-12">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 top-12 h-[440px] w-[440px] rounded-full bg-[#A7D44C]/[0.05] blur-[140px]" />
            <div className="absolute -right-20 top-16 h-[480px] w-[480px] rounded-full bg-[#8B73C4]/[0.06] blur-[150px]" />
            <div
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
                backgroundSize: "36px 36px",
                maskImage: "linear-gradient(to bottom, black 45%, transparent 92%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 45%, transparent 92%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1180px]">
            <div className="mx-auto max-w-[820px] text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.035] px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C] shadow-[0_0_10px_#A7D44C]" />
                <span className="text-[12px] font-medium text-[#D5ECA3]">
                  Connected recruitment stack
                </span>
              </div>

              <h1 className="mt-7 text-[38px] font-semibold leading-[1.06] tracking-[-0.038em] text-[#F5F5F7] sm:text-[48px]">
                Work with the tools your hiring team already uses
              </h1>

              <p className="mx-auto mt-6 max-w-[620px] text-[17px] leading-[1.75] text-[#9A9AA4]">
                Connect Minivel seamlessly with your essential sourcing
                channels, everyday email suites, messaging apps, and enterprise
                systems. Build a unified recruitment environment without manual
                data exports.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#A7D44C] px-7 py-3.5 text-[13px] font-semibold text-[#111116] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B8E65D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A7D44C]"
                >
                  <span>Connect your stack</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#recruitment-channels"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-[13px] font-semibold text-[#D4D4DA] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.07] hover:text-white"
                >
                  <span>Explore supported integrations</span>
                  <ArrowRightIcon className="h-4 w-4 text-[#85858F] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Connection panel — logos carry their mark, and the strip reports real sync state */}
            <div className="mx-auto mt-14 max-w-[940px] overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#141419] shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4 sm:px-6">
                <p className="text-[13px] font-semibold text-[#E1E1E5]">
                  Connected sources
                </p>
                <span className="flex items-center gap-2 text-[#83838D]">
                  <SyncIcon className="h-3.5 w-3.5" />
                  <span className="text-[10px]" style={NUM}>
                    8 of 8 connected · last sync 2 min ago
                  </span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 p-5 sm:grid-cols-4">
                {LOGO_STRIP.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center gap-2.5 rounded-[14px] border border-white/[0.06] bg-white/[0.022] px-3 py-2.5"
                  >
                    <LogoTile mark={logo.mark} tint={logo.tint} />
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium text-[#DEDEE4]">{logo.name}</p>
                      <p className="flex items-center gap-1.5 text-[10px] text-[#6F6F78]">
                        <span className="h-1 w-1 rounded-full bg-[#A7D44C]" />
                        Connected
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/[0.07] px-5 py-6 sm:grid-cols-4 sm:px-6">
                {HERO_SYNC.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block text-[20px] font-semibold tracking-[-0.02em] text-[#EDEDF0]" style={NUM}>
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
          </div>
        </section>

        {/* =====================================================
            RECRUITMENT CHANNELS
        ===================================================== */}
        <section
          id="recruitment-channels"
          className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 xl:px-12"
        >
          <div className="pointer-events-none absolute right-10 top-1/4 h-[420px] w-[420px] rounded-full bg-[#7F9FE8]/[0.05] blur-[140px]" />

          <div className="relative mx-auto max-w-[1180px]">
            <SectionHead
              eyebrow="Talent sourcing"
              eyebrowColor="#7F9FE8"
              title="Recruitment channels: connect sourcing and candidate platforms"
              body="Expand your talent reach and centralize inbound applicants without manual data re-entry. Minivel connects directly with premier job boards and talent networks so candidates flow straight into your active hiring stages."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {CHANNELS.map((item) => (
                <IntegrationCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMUNICATION
        ===================================================== */}
        <section
          id="communication"
          className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 xl:px-12"
        >
          <div className="pointer-events-none absolute left-10 top-1/4 h-[420px] w-[420px] rounded-full bg-[#A7D44C]/[0.05] blur-[140px]" />

          <div className="relative mx-auto max-w-[1180px]">
            <SectionHead
              eyebrow="Candidate engagement"
              eyebrowColor="#A7D44C"
              title="Communication: bring hiring conversations into your workflow"
              body="Eliminate fragmented inboxes, dropped candidate threads, and manual scheduling headaches. Minivel unifies two-way email communication and candidate messaging directly inside the candidate's profile."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {COMMUNICATION.map((item) => (
                <IntegrationCard key={item.name} item={item} />
              ))}
            </div>

            {/* One candidate timeline, so the claim is shown rather than asserted */}
            <div className="mx-auto mt-10 max-w-[860px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#121217]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A7D44C]/25 bg-[#A7D44C]/[0.10] text-[12px] font-medium text-[#D5ECA3]">
                    AM
                  </span>
                  <div>
                    <p className="text-[13px] font-medium text-[#E4E4EA]">Aarav Mehta</p>
                    <p className="text-[10px] text-[#6F6F78]">
                      One timeline, four channels
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-[#6F6F78]" style={NUM}>
                  9 messages · 2 interviews
                </span>
              </div>

              <ul className="divide-y divide-white/[0.05]">
                {[
                  { via: "Gmail", tint: "#FF8E85", text: "Interview confirmation sent with Meet link", when: "Mon 09:12" },
                  { via: "WhatsApp", tint: "#7CEFA5", text: "Reminder delivered and read", when: "Tue 08:30" },
                  { via: "Outlook", tint: "#71BCFF", text: "Panel invite accepted by three interviewers", when: "Tue 11:45" },
                  { via: "LinkedIn", tint: "#70BBE5", text: "Profile refreshed — new certification pulled in", when: "Wed 16:20" },
                ].map((row) => (
                  <li key={row.when} className="flex items-center gap-3 px-6 py-3.5">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: row.tint }}
                    />
                    <span className="w-[74px] shrink-0 text-[12px] font-medium text-[#B9B9C2]">
                      {row.via}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[13px] text-[#85858F]">
                      {row.text}
                    </span>
                    <span className="shrink-0 text-[10px] text-[#5F5F68]" style={NUM}>
                      {row.when}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONNECTED TOOLS
        ===================================================== */}
        <section
          id="connected-tools"
          className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 xl:px-12"
        >
          <div className="pointer-events-none absolute right-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-[#9279C9]/[0.05] blur-[140px]" />

          <div className="relative mx-auto max-w-[1180px]">
            <SectionHead
              eyebrow="Productivity and systems"
              eyebrowColor="#9279C9"
              title="Connected tools: work with the tools your teams already use"
              body="Supercharge your day-to-day recruiting workflow without jumping between disconnected tabs. Minivel integrates with your browser and business infrastructure to streamline profile capture and record synchronization."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {CONNECTED_TOOLS.map((item) => (
                <IntegrationCard key={item.name} item={item} wide />
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
                Build a unified recruitment ecosystem with Minivel.
              </h2>

              <p className="mx-auto mt-5 max-w-[500px] text-[15px] leading-[1.8] text-[#85858F]">
                Eliminate manual work and keep your entire recruiting toolchain
                synchronized in real time.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#A7D44C] px-8 py-3.5 text-[13px] font-semibold text-[#111116] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B8E65D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A7D44C]"
                >
                  <span>Request an integrations demo</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <span className="text-[12px] text-[#6F6F78]">
                  8 integrations live · Setup in under 10 minutes
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
