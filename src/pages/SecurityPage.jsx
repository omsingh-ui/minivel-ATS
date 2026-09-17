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

export default function SecurityPage() {
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
            <div className="absolute -left-20 top-10 h-[440px] w-[440px] rounded-full bg-[#8B73C4]/[0.06] blur-[145px]" />
            <div className="absolute -right-20 top-14 h-[480px] w-[480px] rounded-full bg-[#A7D44C]/[0.05] blur-[140px]" />
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
                  Trust & Data Governance
                </span>
              </div>

              <h1 className="mt-7 text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#F5F5F7] sm:text-[56px] lg:text-[68px]">
                Built with Responsible Data{" "}
                <span className="bg-gradient-to-r from-white via-[#D0C7E7] to-[#A58BD7] bg-clip-text text-transparent">
                  Handling in Mind
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-[680px] text-[15px] leading-[1.8] text-[#85858F] sm:text-[16.5px]">
                Your candidate records and internal recruitment discussions
                deserve dependable safeguards. Minivel protects talent data with
                granular access controls, conscientious data management, and
                continuous workflow transparency.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-7 py-3.5 text-[12.5px] font-semibold text-[#D8F48D] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/20 hover:shadow-[0_12px_32px_rgba(167,212,76,0.22)]"
                >
                  <span>Talk with our Security Team</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#protected-access"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-[12.5px] font-semibold text-[#D4D4DA] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.07] hover:text-white"
                >
                  <span>Review Safeguards</span>
                  <ArrowRightIcon className="h-4 w-4 text-[#85858F] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </div>

              {/* Three Pillars Summary */}
              <div className="mt-14 grid grid-cols-1 gap-4 border-t border-white/[0.07] pt-8 sm:grid-cols-3 sm:gap-6">
                {[
                  {
                    title: "Granular Control",
                    desc: "Role-specific permissions across all hiring tiers.",
                  },
                  {
                    title: "Data Stewardship",
                    desc: "Conscientious storage, encryption, and lifecycle controls.",
                  },
                  {
                    title: "Audit Visibility",
                    desc: "Timestamped transparency for every pipeline action.",
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-[16px] border border-white/[0.06] bg-white/[0.02] p-5 text-center"
                  >
                    <p className="text-[15px] font-bold text-[#F5F5F7]">
                      {pillar.title}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-[#777780]">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 1: PROTECTED ACCESS
        ========================================================= */}
        <section
          id="protected-access"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          <div className="pointer-events-none absolute right-10 top-1/4 h-[420px] w-[420px] rounded-full bg-[#A7D44C]/[0.045] blur-[140px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7D44C]">
                  Access Governance
                </span>
                <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px]">
                  Protected Access — Control How Recruitment Information is
                  Accessed
                </h2>
                <p className="mt-5 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                  Ensure only authorized personnel can view sensitive candidate
                  records, private compensation benchmarks, and internal
                  interview scorecards. Minivel gives organizations granular
                  governance over permissions and access policies across all
                  recruiting stages.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Granular role tiers for Admins, Recruiters, Hiring Managers, and Interviewers",
                    "Confidential candidate flags for executive and sensitive hires",
                    "Multi-factor authentication (MFA) and secure session management",
                    "Restricted visibility for candidate compensation and background notes",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#A7D44C]/30 bg-[#A7D44C]/10">
                        <CheckIcon className="h-3.5 w-3.5 text-[#BCE65E]" />
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-[#A5A5AF]">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roles & Permissions Matrix Panel */}
              <div className="rounded-[22px] border border-white/[0.10] bg-[#121217]/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div>
                    <h3 className="text-[16px] font-bold text-white">
                      Access Permissions Matrix
                    </h3>
                    <p className="text-[11px] text-[#777780]">
                      Configurable permission enforcement by role
                    </p>
                  </div>
                  <span className="rounded-full border border-[#A7D44C]/30 bg-[#A7D44C]/10 px-2.5 py-0.5 text-[9.5px] font-bold text-[#D8F48D]">
                    Active Policy
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    {
                      role: "Administrator",
                      scope: "Full system config, audit logs & user management",
                      level: "Full Access",
                      accent: "#A7D44C",
                    },
                    {
                      role: "Lead Recruiter",
                      scope: "Pipeline control, candidate edits, email outreach",
                      level: "Pipeline Admin",
                      accent: "#7F9FE8",
                    },
                    {
                      role: "Hiring Manager",
                      scope: "Assigned requisitions, candidate reviews & scorecards",
                      level: "Requisition Level",
                      accent: "#9279C9",
                    },
                    {
                      role: "Panel Interviewer",
                      scope: "Assigned candidate evaluations and blind scorecards only",
                      level: "Restricted",
                      accent: "#E2A45C",
                    },
                  ].map((item) => (
                    <div
                      key={item.role}
                      className="rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-3.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-bold text-white">
                          {item.role}
                        </span>
                        <span
                          className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
                          style={{
                            backgroundColor: `${item.accent}15`,
                            color: item.accent,
                          }}
                        >
                          {item.level}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#777780]">
                        {item.scope}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: DATA HANDLING
        ========================================================= */}
        <section
          id="data-handling"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          <div className="pointer-events-none absolute left-10 top-1/4 h-[420px] w-[420px] rounded-full bg-[#8B73C4]/[0.05] blur-[150px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="mx-auto max-w-[780px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9279C9]">
                Responsible Stewardship
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                Data Handling — Support Responsible Candidate Data Management
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                We treat applicant privacy and information protection as
                foundational architectural requirements. Minivel supports
                responsible candidate data practices, from secure transmission
                and storage to automated retention schedules and candidate
                removal requests.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Encrypted Data Transmission",
                  desc: "All candidate dossiers, attachments, and internal messages are encrypted using modern cryptographic protocols both in transit and at rest.",
                  badge: "Encrypted",
                  accent: "#7F9FE8",
                },
                {
                  title: "Retention & Archival Controls",
                  desc: "Configure automated retention windows per region or role to prevent unnecessary long-term retention of unneeded candidate records.",
                  badge: "Configurable",
                  accent: "#A7D44C",
                },
                {
                  title: "Erasure & Redaction Workflows",
                  desc: "Easily accommodate candidate requests for information removal with swift one-click data redaction and profile anonymization tools.",
                  badge: "Responsive",
                  accent: "#9279C9",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.05]"
                >
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${card.accent}18`,
                      color: card.accent,
                    }}
                  >
                    {card.badge}
                  </span>

                  <h3 className="mt-5 text-[18px] font-bold text-[#F5F5F7]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.7] text-[#777780]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: WORKFLOW VISIBILITY
        ========================================================= */}
        <section
          id="workflow-visibility"
          className="relative border-t border-white/[0.07] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12"
        >
          <div className="pointer-events-none absolute right-10 top-1/4 h-[420px] w-[420px] rounded-full bg-[#A7D44C]/[0.045] blur-[140px]" />

          <div className="relative mx-auto max-w-[1240px]">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Audit Log Mockup */}
              <div className="rounded-[22px] border border-white/[0.10] bg-[#121217]/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div>
                    <h3 className="text-[16px] font-bold text-white">
                      Live Audit Trail
                    </h3>
                    <p className="text-[11px] text-[#777780]">
                      Immutable activity stream across candidate data
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[9.5px] font-semibold text-[#A5A5AF]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C]" />
                    Logging Active
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    {
                      user: "Sarah Chen (Recruiter)",
                      action: "Moved Aarav Mehta to Interview stage",
                      time: "10 mins ago",
                    },
                    {
                      user: "David Miller (Hiring Mgr)",
                      action: "Submitted evaluation scorecard (Score: 94/100)",
                      time: "32 mins ago",
                    },
                    {
                      user: "System Security",
                      action: "Completed automated retention verification",
                      time: "2 hours ago",
                    },
                    {
                      user: "Sarah Chen (Recruiter)",
                      action: "Exported interview shortlist summary",
                      time: "5 hours ago",
                    },
                  ].map((log, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between gap-3 rounded-[12px] border border-white/[0.05] bg-white/[0.018] p-3 text-[12px]"
                    >
                      <div>
                        <p className="font-semibold text-[#DCDCE2]">
                          {log.user}
                        </p>
                        <p className="text-[11px] text-[#777780]">
                          {log.action}
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] text-[#666670]">
                        {log.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7D44C]">
                  Accountability & Oversight
                </span>
                <h2 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#F5F5F7] sm:text-[42px]">
                  Workflow Visibility — Maintain Visibility Across Recruitment
                  Activity
                </h2>
                <p className="mt-5 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[15.5px]">
                  Maintain clear oversight into every action taken across your
                  hiring pipeline. Minivel records timestamped audit logs for
                  candidate views, stage changes, evaluation submissions, and
                  data exports to provide organizational accountability.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Detailed action logs documenting profile accesses and updates",
                    "Candidate export monitoring with user identification",
                    "Change history on scorecards, notes, and requisition parameters",
                    "Comprehensive operational visibility for talent leaders",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#A7D44C]/30 bg-[#A7D44C]/10">
                        <CheckIcon className="h-3.5 w-3.5 text-[#BCE65E]" />
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-[#A5A5AF]">
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
                Built for Trust
              </span>
              <h2 className="mt-4 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#F5F5F7] sm:text-[44px] lg:text-[50px]">
                Protect your recruitment workflows with confidence.
              </h2>
              <p className="mt-5 text-[14.5px] leading-[1.8] text-[#85858F] sm:text-[16px]">
                Connect with our team to learn more about how Minivel helps
                organizations maintain responsible, secure hiring practices.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Link
                  to="/request-demo"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-8 py-3.5 text-[13px] font-bold text-[#D8F48D] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/25 hover:shadow-[0_12px_36px_rgba(167,212,76,0.25)]"
                >
                  <span>Request a Security & Compliance Demo</span>
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
