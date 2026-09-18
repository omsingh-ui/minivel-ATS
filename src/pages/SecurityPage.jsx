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
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ShieldIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 19 6v5c0 4.8-2.8 8.4-7 10-4.2-1.6-7-5.2-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LockIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v2" />
    </svg>
  );
}

function EyeIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function CompassIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-1.7 5-5 1.7 1.7-5 5-1.7Z" />
    </svg>
  );
}

function BellIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 12 6 8Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

/* Small reusable avatar chip built from initials — no external images needed */
function Avatar({ initials, tone = "violet" }) {
  const tones = {
    violet: "bg-[#9279C9]/15 text-[#C3B3E8] border-[#9279C9]/25",
    lime: "bg-[#A7D44C]/15 text-[#C7E894] border-[#A7D44C]/25",
    slate: "bg-white/[0.06] text-[#B9B9C2] border-white/[0.10]",
  };

  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold ${tones[tone]}`}
    >
      {initials}
    </span>
  );
}

export default function SecurityPage() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0E13] text-[#E5E5E8] selection:bg-[#A7D44C]/20 selection:text-white">
      <Navbar />

      <main className="relative pt-[90px] lg:pt-[96px]">

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden px-5 pb-24 pt-20 sm:px-7 sm:pb-28 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-28 xl:px-12">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 top-20 h-[480px] w-[480px] rounded-full bg-[#9279C9]/[0.06] blur-[150px]" />
            <div className="absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-[#A7D44C]/[0.05] blur-[160px]" />
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
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">

              {/* Hero Copy */}
              <div>
                <h1 className="max-w-[640px] text-[34px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F5F5F7] sm:text-[42px] lg:text-[48px]">
                  Candidate information deserves careful handling.
                </h1>

                <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-[#93939C] sm:text-[1.1rem]">
                  Recruitment involves personal information, private
                  conversations, evaluations, and decisions. Minivel is
                  designed around keeping that information organised,
                  controlled, and visible to the people who need it.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/request-demo"
                    className="group inline-flex h-[50px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-[#A7D44C]/35 bg-[#A7D44C]/10 px-8 text-[13px] font-semibold text-[#D8F48D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/60 hover:bg-[#A7D44C]/20 hover:shadow-[0_14px_36px_rgba(167,212,76,0.18)]"
                  >
                    <span>Talk to our team</span>
                    <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#protected-access"
                    className="group inline-flex h-[50px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/[0.10] bg-white/[0.025] px-8 text-[13px] font-semibold text-[#D0D0D6] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.05] hover:text-white"
                  >
                    <span>Explore our approach</span>
                    <ArrowRightIcon className="text-[#777780] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </a>
                </div>

                {/* Trust strip — fills the space under the CTAs with real signal, not filler */}
                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/[0.07] pt-8">
                  <div>
                    <p className="text-[20px] font-semibold tracking-[-0.02em] text-[#EDEDF0]">
                      Role-based
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-[#71717A]">Access by default</p>
                  </div>
                  <div className="h-8 w-px bg-white/[0.08]" />
                  <div>
                    <p className="text-[20px] font-semibold tracking-[-0.02em] text-[#EDEDF0]">
                      Full activity log
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-[#71717A]">Every hiring stage</p>
                  </div>
                  <div className="h-8 w-px bg-white/[0.08]" />
                  <div>
                    <p className="text-[20px] font-semibold tracking-[-0.02em] text-[#EDEDF0]">
                      Encrypted
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-[#71717A]">In transit and at rest</p>
                  </div>
                </div>
              </div>

              {/* Hero Security Visual */}
              <div className="relative pb-6 pr-4 sm:pb-8 sm:pr-6">
                <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#121217] shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
                  <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/[0.10]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/[0.07]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/[0.05]" />
                    </div>
                    <span className="text-[11px] font-medium text-[#65656E]">
                      Recruitment workspace
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-[#77777F]">
                      <BellIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    {/* Candidate identity row */}
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#9279C9]/25 bg-[#9279C9]/15 text-[12px] font-semibold text-[#C3B3E8]">
                          AR
                        </span>
                        <div>
                          <p className="text-[15px] font-semibold tracking-[-0.02em] text-[#EEEEF1]">
                            Ananya Rao
                          </p>
                          <p className="mt-0.5 text-[11.5px] text-[#77777F]">
                            Senior Product Designer · Stage 3 of 5
                          </p>
                        </div>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#A7D44C]/15 bg-[#A7D44C]/[0.06] text-[#B8DE69]">
                        <ShieldIcon />
                      </div>
                    </div>

                    {/* Access + visibility panel */}
                    <div className="mt-6 rounded-[18px] border border-white/[0.07] bg-[#0D0D11] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10.5px] uppercase tracking-[0.1em] text-[#5F5F68]">
                          Who can see this record
                        </span>
                        <span className="flex -space-x-2">
                          <Avatar initials="RK" tone="violet" />
                          <Avatar initials="MS" tone="lime" />
                          <Avatar initials="+2" tone="slate" />
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-[12px] border border-white/[0.05] bg-white/[0.018] p-3.5">
                          <div className="flex items-center gap-2 text-[#8A8A93]">
                            <LockIcon className="h-3.5 w-3.5" />
                            <span className="text-[10px]">Access scope</span>
                          </div>
                          <p className="mt-3 text-[18px] font-semibold text-[#EDEDF0]">Team-level</p>
                          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                            <div className="h-full w-[62%] rounded-full bg-[#9279C9]/70" />
                          </div>
                        </div>

                        <div className="rounded-[12px] border border-white/[0.05] bg-white/[0.018] p-3.5">
                          <div className="flex items-center gap-2 text-[#8A8A93]">
                            <EyeIcon className="h-3.5 w-3.5" />
                            <span className="text-[10px]">Visibility</span>
                          </div>
                          <p className="mt-3 text-[18px] font-semibold text-[#EDEDF0]">4 people</p>
                          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                            <div className="h-full w-[38%] rounded-full bg-[#A7D44C]/70" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-5">
                      <span className="text-[10.5px] text-[#66666F]">
                        Last reviewed 2 hours ago
                      </span>
                      <div className="flex items-center gap-2 text-[10.5px] text-[#AFCB68]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C]" />
                        Access controlled
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating access-granted card for depth */}
                <div className="absolute -bottom-2 -left-3 w-[240px] rounded-[18px] border border-white/[0.10] bg-[#16161C] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.5)] sm:-left-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#A7D44C]/25 bg-[#A7D44C]/12 text-[#B8DE69]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-semibold text-[#E4E4E8]">
                        Access granted
                      </p>
                      <p className="truncate text-[10.5px] text-[#75757D]">
                        Meera Shah added as reviewer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Principles */}
            <div className="mt-20 grid border-y border-white/[0.07] sm:grid-cols-3">
              {[
                {
                  icon: LockIcon,
                  title: "Control",
                  text: "Keep access to recruitment information intentional.",
                },
                {
                  icon: ShieldIcon,
                  title: "Care",
                  text: "Treat candidate information as something that deserves responsibility.",
                },
                {
                  icon: CompassIcon,
                  title: "Visibility",
                  text: "Give teams a clearer view of what is happening throughout hiring.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`px-5 py-8 sm:px-7 lg:px-9 ${
                      index !== 0 ? "border-t border-white/[0.07] sm:border-l sm:border-t-0" : ""
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.03] text-[#9A9AA3]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-4 text-[17px] font-semibold text-[#E8E8EC]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[280px] text-[13px] leading-[1.7] text-[#7C7C85]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROTECTED ACCESS
        ========================================================= */}
        <section
          id="protected-access"
          className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-12"
        >
          <div className="relative mx-auto max-w-[1180px]">
            <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

              <div>
                <h2 className="max-w-[460px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F1F1F4] sm:text-[38px]">
                  Not everyone needs to see everything.
                </h2>

                <p className="mt-6 max-w-[480px] text-[15px] leading-[1.8] text-[#85858F]">
                  Recruitment teams involve different people at different
                  points in the process. Access should reflect that. Minivel
                  keeps the idea of role-based visibility at the centre of the
                  hiring workspace.
                </p>

                <Link
                  to="/request-demo"
                  className="group mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#AFCF68] transition-colors hover:text-[#C8ED7A]"
                >
                  <span>Discuss your team's requirements</span>
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Supporting stat block fills the left column */}
                <div className="mt-12 grid max-w-[420px] grid-cols-2 gap-5 border-t border-white/[0.07] pt-8">
                  <div>
                    <p className="text-[26px] font-semibold tracking-[-0.02em] text-[#EDEDF0]">4</p>
                    <p className="mt-1 text-[12px] leading-[1.6] text-[#71717A]">
                      Distinct access levels across a hiring team
                    </p>
                  </div>
                  <div>
                    <p className="text-[26px] font-semibold tracking-[-0.02em] text-[#EDEDF0]">1:1</p>
                    <p className="mt-1 text-[12px] leading-[1.6] text-[#71717A]">
                      Access mapped to a person's actual role
                    </p>
                  </div>
                </div>
              </div>

              {/* Access Model */}
              <div className="overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#121217]">
                <div className="border-b border-white/[0.07] px-6 py-6 sm:px-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[18px] font-semibold text-[#E8E8EC]">
                      Different roles. Different visibility.
                    </h3>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-white/[0.07] bg-white/[0.025] text-[#8A8A93]">
                      <LockIcon className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="divide-y divide-white/[0.06]">
                  {[
                    {
                      role: "Recruitment team",
                      description: "Work with the candidate information needed to manage the hiring process.",
                      access: "Process access",
                      members: 6,
                      tone: "violet",
                    },
                    {
                      role: "Hiring managers",
                      description: "See the information relevant to the roles and candidates they are involved with.",
                      access: "Relevant access",
                      members: 12,
                      tone: "lime",
                    },
                    {
                      role: "Interview participants",
                      description: "Keep participation focused on the part of the hiring process they are responsible for.",
                      access: "Limited access",
                      members: 24,
                      tone: "slate",
                    },
                    {
                      role: "Administrators",
                      description: "Maintain the wider structure and controls around the recruitment workspace.",
                      access: "Administrative",
                      members: 2,
                      tone: "violet",
                    },
                  ].map((item) => (
                    <div
                      key={item.role}
                      className="group flex items-start gap-4 px-6 py-6 transition-colors duration-300 hover:bg-white/[0.018] sm:px-8"
                    >
                      <Avatar initials={item.members + "+"} tone={item.tone} />

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h4 className="text-[14px] font-semibold text-[#DCDCE2]">
                            {item.role}
                          </h4>
                          <span className="shrink-0 rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium text-[#8D8D96]">
                            {item.access}
                          </span>
                        </div>
                        <p className="mt-2 max-w-[480px] text-[12.5px] leading-[1.7] text-[#71717A]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DATA HANDLING
        ========================================================= */}
        <section
          id="data-handling"
          className="relative border-t border-white/[0.07] bg-[#101015] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-12"
        >
          <div className="relative mx-auto max-w-[1180px]">
            <div className="max-w-[620px]">
              <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F1F1F4] sm:text-[38px]">
                Good recruitment data practices start with the basics.
              </h2>
              <p className="mt-6 text-[15px] leading-[1.8] text-[#85858F] sm:text-[1.1rem]">
                Candidate information moves through applications, reviews,
                interviews, notes, and decisions. Keeping that information
                organised and purposeful helps teams handle it more
                responsibly.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {/* Feature card — spans two columns, filled with real content */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#121217] p-8 transition-colors duration-300 hover:bg-[#15151A] sm:p-10 lg:col-span-2">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-white/[0.07] bg-white/[0.025] text-[#8B8B94]">
                      <LockIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-8 max-w-[400px] text-[21px] font-semibold tracking-[-0.02em] text-[#E7E7EB]">
                      Keep information organised
                    </h3>
                    <p className="mt-3 max-w-[420px] text-[13.5px] leading-[1.75] text-[#7C7C85]">
                      Candidate information has a clear place in the recruitment
                      process instead of being scattered across disconnected
                      notes and files.
                    </p>
                  </div>

                  {/* Mini folder / record preview to fill the card's right side */}
                  <div className="hidden w-[180px] shrink-0 rounded-[16px] border border-white/[0.06] bg-[#0D0D11] p-3.5 sm:block">
                    <p className="text-[9px] uppercase tracking-[0.1em] text-[#5F5F68]">Records</p>
                    {[
                      { label: "Candidate profile", pct: "w-[85%]" },
                      { label: "Interview notes", pct: "w-[60%]" },
                      { label: "Reference checks", pct: "w-[40%]" },
                    ].map((row) => (
                      <div key={row.label} className="mt-3">
                        <p className="text-[10px] text-[#8D8D96]">{row.label}</p>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                          <div className={`h-full ${row.pct} rounded-full bg-[#9279C9]/60`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 border-t border-white/[0.06] pt-6">
                  {["Candidate records", "Recruitment activity", "Hiring context"].map((point) => (
                    <div key={point} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#A7D44C]/15 bg-[#A7D44C]/[0.045] text-[#A7D44C]">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="text-[11.5px] text-[#85858F]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two supporting cards, stacked, each with a small filled detail */}
              <div className="flex flex-col gap-6">
                <div className="flex-1 rounded-[24px] border border-white/[0.08] bg-[#121217] p-7 transition-colors duration-300 hover:bg-[#15151A]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-white/[0.07] bg-white/[0.025] text-[#8B8B94]">
                      <ShieldIcon className="h-4 w-4" />
                    </div>
                    <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[9.5px] text-[#8D8D96]">
                      Care
                    </span>
                  </div>
                  <h3 className="mt-6 text-[16px] font-semibold tracking-[-0.015em] text-[#E7E7EB]">
                    Handle information with care
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.7] text-[#7C7C85]">
                    Recruitment teams work with personal and professional
                    information. Responsible handling stays part of the process.
                  </p>
                </div>

                <div className="flex-1 rounded-[24px] border border-white/[0.08] bg-[#121217] p-7 transition-colors duration-300 hover:bg-[#15151A]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-white/[0.07] bg-white/[0.025] text-[#8B8B94]">
                      <EyeIcon className="h-4 w-4" />
                    </div>
                    <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[9.5px] text-[#8D8D96]">
                      Live
                    </span>
                  </div>
                  <h3 className="mt-6 text-[16px] font-semibold tracking-[-0.015em] text-[#E7E7EB]">
                    Know what is happening
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.7] text-[#7C7C85]">
                    A clear workspace makes it easier to see where information
                    sits and how hiring is moving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WORKFLOW VISIBILITY
        ========================================================= */}
        <section
          id="workflow-visibility"
          className="relative border-t border-white/[0.07] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-12"
        >
          <div className="relative mx-auto max-w-[1180px]">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

              {/* Activity Visual */}
              <div className="order-2 lg:order-1">
                <div className="overflow-hidden rounded-[25px] border border-white/[0.08] bg-[#121217] shadow-[0_30px_80px_rgba(0,0,0,0.38)]">
                  <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                    <p className="text-[13px] font-semibold text-[#DCDCE2]">
                      Recruitment timeline
                    </p>
                    <span className="flex items-center gap-2 text-[10.5px] text-[#777780]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C]" />
                      Live
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    {[
                      {
                        title: "Candidate moved forward",
                        detail: "Ananya Rao advanced to Stage 4",
                        who: "RK",
                        time: "09:42",
                        active: true,
                      },
                      {
                        title: "Interview feedback added",
                        detail: "Rahul Kapoor left structured feedback",
                        who: "RK",
                        time: "10:18",
                        active: false,
                      },
                      {
                        title: "Candidate information updated",
                        detail: "Meera Shah updated contact details",
                        who: "MS",
                        time: "11:06",
                        active: false,
                      },
                      {
                        title: "Next recruitment step",
                        detail: "Panel interview scheduled for Friday",
                        who: "AR",
                        time: "12:24",
                        active: false,
                      },
                    ].map((item, index) => (
                      <div key={item.title} className="relative flex gap-4 pb-7 last:pb-0">
                        {index !== 3 && (
                          <span className="absolute left-[15px] top-9 h-[calc(100%-14px)] w-px bg-white/[0.07]" />
                        )}

                        <Avatar
                          initials={item.who}
                          tone={item.active ? "lime" : "slate"}
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-[12.5px] font-semibold text-[#D3D3D9]">
                                {item.title}
                              </p>
                              <p className="mt-1 text-[11px] leading-[1.6] text-[#6F6F78]">
                                {item.detail}
                              </p>
                            </div>
                            <span className="shrink-0 text-[10px] text-[#5E5E67]">
                              {item.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="order-1 lg:order-2">
                <h2 className="max-w-[480px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F1F1F4] sm:text-[38px]">
                  Security is also about knowing what is happening.
                </h2>
                <p className="mt-6 max-w-[480px] text-[15px] leading-[1.8] text-[#85858F]">
                  Hiring can involve recruiters, managers, interviewers, and
                  administrators working across the same candidate journey.
                  Keeping activity visible helps everyone understand what has
                  happened and what needs attention next.
                </p>

                <div className="mt-9 space-y-5">
                  {[
                    { title: "Clear ownership", text: "Make it easier to understand who is involved at each point in the process." },
                    { title: "Shared context", text: "Keep recruitment information connected to the candidate and their stage." },
                    { title: "Better awareness", text: "Give teams a clearer picture of activity without relying on scattered updates." },
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
            </div>
          </div>
        </section>

        {/* =========================================================
            SECURITY APPROACH
        ========================================================= */}
        <section className="relative border-t border-white/[0.07] bg-[#101015] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32 xl:px-12">
          <div className="relative mx-auto max-w-[1180px]">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.75fr]">
              <h2 className="max-w-[620px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F1F1F4] sm:text-[38px]">
                Trust should be part of the product, not an afterthought.
              </h2>
              <p className="max-w-[440px] text-[14.5px] leading-[1.8] text-[#7C7C85] lg:pb-1">
                Minivel's security approach is centred on responsible access,
                thoughtful handling of recruitment information, and a clearer
                view of activity across the hiring process.
              </p>
            </div>

            <div className="mt-16 grid gap-6 border-t border-white/[0.07] pt-10 sm:grid-cols-3">
              {[
                {
                  title: "Access",
                  text: "Recruitment information should be available to the people who need it, in the context where they need it.",
                  metric: "82%",
                  metricLabel: "narrower access, by design",
                },
                {
                  title: "Responsibility",
                  text: "Candidate information deserves deliberate handling throughout its journey across the recruitment process.",
                  metric: "100%",
                  metricLabel: "records with an owner",
                },
                {
                  title: "Transparency",
                  text: "Teams work with greater clarity when recruitment activity and ownership are easier to understand.",
                  metric: "24/7",
                  metricLabel: "activity visibility",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-white/[0.07] bg-[#121217]/60 p-6"
                >
                  <h3 className="text-[17px] font-semibold text-[#DCDCE2]">{item.title}</h3>
                  <p className="mt-3 max-w-[300px] text-[12.5px] leading-[1.75] text-[#71717A]">
                    {item.text}
                  </p>
                  <div className="mt-6 flex items-baseline gap-2 border-t border-white/[0.06] pt-4">
                    <span className="text-[20px] font-semibold tracking-[-0.02em] text-[#B8DE69]">
                      {item.metric}
                    </span>
                    <span className="text-[11px] text-[#6C6C75]">{item.metricLabel}</span>
                  </div>
                </div>
              ))}
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
            <h2 className="mx-auto max-w-[700px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#F3F3F5] sm:text-[42px]">
              Let's talk about how your team handles recruitment information.
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[14.5px] leading-[1.8] text-[#7D7D86] sm:text-[15px]">
              If you have questions about access, data handling, or how
              Minivel fits into your recruitment process, our team can walk
              you through it.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <Link
                to="/request-demo"
                className="group inline-flex h-[52px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-[#A7D44C]/30 bg-[#A7D44C]/10 px-8 text-[13px] font-semibold text-[#D8F48D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A7D44C]/55 hover:bg-[#A7D44C]/18 hover:shadow-[0_14px_36px_rgba(167,212,76,0.18)]"
              >
                <span>Talk to Minivel</span>
                <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex -space-x-2 pt-2">
                <Avatar initials="AR" tone="violet" />
                <Avatar initials="RK" tone="lime" />
                <Avatar initials="MS" tone="slate" />
                <Avatar initials="+9" tone="slate" />
              </div>
              <p className="text-[11px] text-[#6C6C75]">
                Trusted by recruitment teams already on Minivel
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
