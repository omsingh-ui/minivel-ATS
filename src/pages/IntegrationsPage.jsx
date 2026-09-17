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

export default function IntegrationsPage() {
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
            <div className="absolute -left-20 top-12 h-[440px] w-[440px] rounded-full bg-[#A7D44C]/[0.05] blur-[140px]" />
            <div className="absolute -right-20 top-16 h-[480px] w-[480px] rounded-full bg-[#8B73C4]/[0.06] blur-[150px]" />
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
                  Connected Recruitment Stack
                </span>
              </div>

              <h1 className="mt-7 text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#F5F5F7] sm:text-[56px] lg:text-[68px]">
                Work with the Tools Your{" "}
                <span className="bg-gradient-to-r from-white via-[#D0C7E7] to-[#A58BD7] bg-clip-text text-transparent">
                  Hiring Team Already Uses
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-[680px] text-[15px] leading-[1.8] text-[#85858F] sm:text-[16.5px]">
                Connect Minivel seamlessly with your essential sourcing
                channels, everyday email suites, messaging apps, and enterprise
                systems. Build a unified recruitment environment without manual
                data exports.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-7 py-3.5 text-[12.5px] font-semibold text-[#D8F48D] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/20 hover:shadow-[0_12px_32px_rgba(167,212,76,0.22)]"
                >
                  <span>Connect Your Stack</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#recruitment-channels"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-[12.5px] font-semibold text-[#D4D4DA] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.07] hover:text-white"
                >
                  <span>Explore Supported Integrations</span>
                  <ArrowRightIcon className="h-4 w-4 text-[#85858F] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </div>

              {/* Supported Integration Logos Strip */}
              <div className="mt-14 flex flex-wrap items-center justify-center gap-3 border-t border-white/[0.07] pt-8">
                {[
                  "LinkedIn",
                  "Indeed",
                  "Naukri",
                  "Gmail",
                  "Outlook",
                  "WhatsApp",
                  "Chrome",
                  "Zoho",
                ].map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[12px] font-semibold text-[#B2B2BC]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 1: RECRUITMENT CHANNELS
        ========================================================= */}
        <section
          id="recruitment-channels"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          <div className="pointer-events-none absolute right-10 top-1/4 h-[420px] w-[420px] rounded-full bg-[#7F9FE8]/[0.05] blur-[140px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[780px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7F9FE8]">
                Talent Sourcing
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                Recruitment Channels — Connect Sourcing and Candidate Platforms
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                Expand your talent reach and centralize inbound applicants
                without manual data re-entry. Minivel connects directly with
                premier job boards and talent networks so candidates flow
                straight into your active hiring stages.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* LinkedIn */}
              <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.03] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0077B5]/30 bg-[#0077B5]/15 text-[18px] font-bold text-[#70BBE5]">
                    in
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold text-[#85858F]">
                    Sourcing Network
                  </span>
                </div>

                <h3 className="mt-6 text-[20px] font-bold text-white">
                  LinkedIn
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#85858F]">
                  Import candidate profiles directly from LinkedIn into your
                  Minivel pipeline. Automatically synchronize candidate work
                  history, role titles, and endorsements with one click.
                </p>

                <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                  {[
                    "One-click profile importation",
                    "Direct applicant stream synchronization",
                    "Recruiter outreach synchronization",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckIcon className="h-3.5 w-3.5 text-[#70BBE5]" />
                      <span className="text-[12px] text-[#A5A5AF]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indeed */}
              <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.03] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2164F3]/30 bg-[#2164F3]/15 text-[18px] font-bold text-[#8BB2FF]">
                    id
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold text-[#85858F]">
                    Job Board
                  </span>
                </div>

                <h3 className="mt-6 text-[20px] font-bold text-white">
                  Indeed
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#85858F]">
                  Publish job openings and ingest candidates from Indeed
                  automatically. Capture applicant resumes and questionnaire
                  answers directly into structured Minivel candidate dossiers.
                </p>

                <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                  {[
                    "Automated job posting distribution",
                    "Direct applicant routing into pipeline",
                    "Real-time candidate notification delivery",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckIcon className="h-3.5 w-3.5 text-[#8BB2FF]" />
                      <span className="text-[12px] text-[#A5A5AF]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Naukri */}
              <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.03] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#A7D44C]/30 bg-[#A7D44C]/15 text-[18px] font-bold text-[#D5ECA3]">
                    N
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold text-[#85858F]">
                    Talent Database
                  </span>
                </div>

                <h3 className="mt-6 text-[20px] font-bold text-white">
                  Naukri
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#85858F]">
                  Streamline Indian and regional hiring by synchronizing with
                  Naukri's talent ecosystem. Ingest active applicant streams and
                  populate resumes right into matching requisitions.
                </p>

                <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                  {[
                    "Sourcing integration for open roles",
                    "Instant resume extraction into dossiers",
                    "Custom requisition tag syncing",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckIcon className="h-3.5 w-3.5 text-[#D5ECA3]" />
                      <span className="text-[12px] text-[#A5A5AF]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: COMMUNICATION
        ========================================================= */}
        <section
          id="communication"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          <div className="pointer-events-none absolute left-10 top-1/4 h-[420px] w-[420px] rounded-full bg-[#A7D44C]/[0.05] blur-[140px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[780px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7D44C]">
                Candidate Engagement
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                Communication — Bring Hiring Conversations into Your Workflow
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                Eliminate fragmented inboxes, dropped candidate threads, and
                manual scheduling headaches. Minivel unifies two-way email
                communication and candidate messaging directly inside the
                candidate's profile.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Gmail */}
              <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.03] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EA4335]/30 bg-[#EA4335]/15 text-[18px] font-bold text-[#FF8E85]">
                    M
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold text-[#85858F]">
                    Email Suite
                  </span>
                </div>

                <h3 className="mt-6 text-[20px] font-bold text-white">Gmail</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#85858F]">
                  Connect Google Workspace and Gmail for seamless two-way email
                  synchronization. Send interview confirmations, status
                  updates, and schedule Google Meet links directly from
                  Minivel.
                </p>

                <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                  {[
                    "Two-way email thread synchronization",
                    "Google Calendar interview coordination",
                    "Custom email template variable tags",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckIcon className="h-3.5 w-3.5 text-[#FF8E85]" />
                      <span className="text-[12px] text-[#A5A5AF]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outlook */}
              <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.03] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0078D4]/30 bg-[#0078D4]/15 text-[18px] font-bold text-[#71BCFF]">
                    O
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold text-[#85858F]">
                    Enterprise Mail
                  </span>
                </div>

                <h3 className="mt-6 text-[20px] font-bold text-white">
                  Outlook
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#85858F]">
                  Integrate Microsoft 365 and Outlook to manage recruiter
                  calendars, schedule candidate interview slots, and maintain an
                  auditable record of all candidate correspondence.
                </p>

                <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                  {[
                    "Microsoft 365 calendar scheduling",
                    "Full candidate email history logs",
                    "Automatic interviewer invite dispatch",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckIcon className="h-3.5 w-3.5 text-[#71BCFF]" />
                      <span className="text-[12px] text-[#A5A5AF]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.03] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#25D366]/30 bg-[#25D366]/15 text-[18px] font-bold text-[#7CEFA5]">
                    WA
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold text-[#85858F]">
                    Instant Messaging
                  </span>
                </div>

                <h3 className="mt-6 text-[20px] font-bold text-white">
                  WhatsApp
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#85858F]">
                  Accelerate candidate response times by reaching candidates
                  directly where they communicate. Send interview reminders,
                  stage updates, and follow-ups via WhatsApp Business.
                </p>

                <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                  {[
                    "Automated interview date reminders",
                    "Quick status alerts & confirmations",
                    "Real-time message status tracking",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckIcon className="h-3.5 w-3.5 text-[#7CEFA5]" />
                      <span className="text-[12px] text-[#A5A5AF]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: CONNECTED TOOLS
        ========================================================= */}
        <section
          id="connected-tools"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          <div className="pointer-events-none absolute right-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-[#9279C9]/[0.05] blur-[140px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[780px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9279C9]">
                Productivity & Systems
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                Connected Tools — Work with the Tools Your Teams Already Use
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                Supercharge your day-to-day recruiting workflow without jumping
                between disconnected tabs. Minivel integrates with your browser
                and business infrastructure to streamline profile capture and
                record synchronization.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Chrome Extension */}
              <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F4B400]/30 bg-[#F4B400]/15 text-[18px] font-bold text-[#FFD666]">
                    CR
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold text-[#85858F]">
                    Browser Extension
                  </span>
                </div>

                <h3 className="mt-6 text-[22px] font-bold text-white">
                  Chrome Extension
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.75] text-[#85858F]">
                  Clip and source talent from anywhere on the web in seconds. The
                  Minivel Chrome Extension parses online profiles, identifies
                  existing duplicates in your ATS, and saves new leads directly
                  into targeted requisitions without leaving the page.
                </p>

                <div className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
                  {[
                    "One-click candidate clipper from web pages",
                    "Instant duplicate detection against Minivel records",
                    "Assign candidates directly to active requisition pipelines",
                    "Add recruiter tags, notes, and salary ranges on the fly",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <CheckIcon className="h-3.5 w-3.5 text-[#FFD666]" />
                      <span className="text-[12.5px] text-[#A5A5AF]">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zoho */}
              <div className="group rounded-[22px] border border-white/[0.09] bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E42528]/30 bg-[#E42528]/15 text-[18px] font-bold text-[#FF8588]">
                    Z
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold text-[#85858F]">
                    Business Suite
                  </span>
                </div>

                <h3 className="mt-6 text-[22px] font-bold text-white">Zoho</h3>
                <p className="mt-2 text-[13.5px] leading-[1.75] text-[#85858F]">
                  Synchronize your recruitment pipeline with Zoho's business
                  environment. Ensure smooth handoffs from applicant offer
                  acceptance to employee onboarding, CRM synchronization, and
                  reporting records.
                </p>

                <div className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
                  {[
                    "Candidate data sync to Zoho CRM and employee databases",
                    "Unified organizational record keeping",
                    "Customizable webhooks for event-based data syncing",
                    "Streamlined post-hire onboarding handoffs",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <CheckIcon className="h-3.5 w-3.5 text-[#FF8588]" />
                      <span className="text-[12.5px] text-[#A5A5AF]">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
                Ready to connect your tools?
              </span>
              <h2 className="mt-4 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#F5F5F7] sm:text-[44px] lg:text-[50px]">
                Build a unified recruitment ecosystem with Minivel.
              </h2>
              <p className="mt-5 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[16px]">
                Eliminate manual work and keep your entire recruiting toolchain
                synchronized in real time.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-8 py-3.5 text-[13px] font-bold text-[#D8F48D] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/25 hover:shadow-[0_12px_36px_rgba(167,212,76,0.25)]"
                >
                  <span>Request an Integrations Demo</span>
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
