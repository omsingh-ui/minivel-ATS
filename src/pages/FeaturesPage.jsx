import { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 12h10m-4-4 4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-[#789348]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CandidateIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c.8-3.2 3.1-5 6.5-5s5.7 1.8 6.5 5" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
      <path d="M10 7h3a4 4 0 0 1 4 4v3" />
    </svg>
  );
}

function CollaborationIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3.8 19c.7-3.1 2.5-4.7 5.2-4.7s4.5 1.6 5.2 4.7" />
      <path d="M14.5 15.2c2.7.1 4.5 1.3 5.2 3.8" />
    </svg>
  );
}

function VisibilityIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 12s3.1-5 8.5-5 8.5 5 8.5 5-3.1 5-8.5 5-8.5-5-8.5-5Z" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  );
}

function MiniPipeline() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.12em] text-[#99999D]">
        <span>Candidate flow</span>
        <span>Current view</span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {[
          ["New", "24"],
          ["Screening", "12"],
          ["Interview", "7"],
          ["Decision", "3"],
        ].map(([stage, count], index) => (
          <div
            key={stage}
            className={`min-h-[88px] rounded-[12px] border p-3 ${
              index === 3
                ? "border-[#A7D44C]/20 bg-[#A7D44C]/[0.06]"
                : "border-black/[0.06] bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-semibold text-[#77777C]">
                {stage}
              </span>

              <span className="text-[8px] text-[#A0A0A4]">{count}</span>
            </div>

            <div className="mt-5 space-y-1.5">
              <div
                className={`h-1 rounded-full ${
                  index === 3 ? "bg-[#A7D44C]/40" : "bg-[#E9E9E6]"
                }`}
              />
              <div className="h-1 w-[72%] rounded-full bg-[#EEEEEB]" />
              <div className="h-1 w-[48%] rounded-full bg-[#F1F1EE]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#171719]">
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden bg-white px-5 pb-24 pt-[145px] sm:px-7 sm:pb-28 sm:pt-[160px] lg:px-10 lg:pb-32 lg:pt-[175px] xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid items-end gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
              <div className="max-w-[700px]">
                <h1 className="text-[3rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#171719] sm:text-[3.5rem]">
                  The tools behind a better hiring process.
                </h1>

                <p className="mt-7 max-w-[620px] text-[1.1rem] leading-[1.7] text-[#737378]">
                  Minivel brings the everyday work of recruitment into one
                  connected workspace — from managing candidates to keeping
                  teams aligned on what happens next.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link
                    to="/request-demo"
                    className="group inline-flex h-[48px] items-center justify-center gap-2.5 rounded-[11px] bg-[#171719] px-6 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#29292C]"
                  >
                    See Minivel in action
                    <ArrowIcon />
                  </Link>

                  <a
                    href="#feature-overview"
                    className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#66666B] transition-colors duration-300 hover:text-[#171719]"
                  >
                    Explore the capabilities
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="border-l border-black/[0.08] pl-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#99999D]">
                    Inside Minivel
                  </p>

                  <p className="mt-4 max-w-[350px] text-[19px] font-medium leading-[1.45] tracking-[-0.025em] text-[#303034]">
                    Less time moving information around. More time making
                    hiring decisions.
                  </p>

                  <div className="mt-7 h-px w-14 bg-[#A7D44C]" />

                  <p className="mt-5 max-w-[330px] text-[11px] leading-[1.75] text-[#858589]">
                    Candidate management, workflow, collaboration, and
                    visibility work together instead of living in separate
                    places.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 border-t border-black/[0.07] pt-6 sm:mt-24">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#A0A0A4]">
                  Recruitment, connected
                </p>

                <span className="text-[10px] font-medium text-[#A0A0A4]">
                  01
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            FEATURE OVERVIEW
        ========================================================= */}
        <section
          id="feature-overview"
          className="scroll-mt-24 bg-[#F4F4F1] px-5 py-24 sm:px-7 lg:px-10 lg:py-32 xl:px-12"
        >
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#99999D]">
                  What sits at the centre
                </p>

                <h2 className="mt-5 max-w-[470px] text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.045em] text-[#171719] sm:text-[3rem]">
                  One place for the work that moves hiring forward.
                </h2>
              </div>

              <div className="max-w-[650px] lg:pt-2">
                <p className="text-[15px] leading-[1.8] text-[#737378]">
                  Recruitment becomes difficult when the information people
                  need is spread across applications, messages, spreadsheets,
                  and separate conversations. Minivel is designed around the
                  work itself — giving teams a clearer place to manage
                  candidates, progress, feedback, and decisions.
                </p>

                <MiniPipeline />
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            PRODUCT SCREENSHOT
        ========================================================= */}
        <section className="bg-white px-5 py-24 sm:px-7 lg:px-10 lg:py-32 xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-8 max-w-[680px]">
              <h2 className="text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.045em] text-[#171719] sm:text-[3rem]">
                A clearer view of the hiring work.
              </h2>

              <p className="mt-4 max-w-[610px] text-[15px] leading-[1.7] text-[#737378]">
                The workspace keeps the important parts of recruitment close
                together, so teams can spend less time looking for context and
                more time acting on it.
              </p>
            </div>

            <div className="mx-auto max-w-[720px] overflow-hidden rounded-[22px] border border-black/[0.07] bg-[#F3F3F0] shadow-[0_30px_80px_rgba(0,0,0,.08)]">
              <div className="flex h-12 items-center justify-between border-b border-black/[0.06] px-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#D3D3CF]" />
                  <span className="h-2 w-2 rounded-full bg-[#D3D3CF]" />
                  <span className="h-2 w-2 rounded-full bg-[#D3D3CF]" />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9A9A9D]">
                  Minivel ATS
                </span>
              </div>

              <div className="bg-[#101014] p-2 sm:p-3">
                <img
                  src="/assets/ats-features-screenshot.png"
                  alt="Minivel ATS recruitment platform interface"
                  className="block h-auto w-full rounded-[13px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            CANDIDATE MANAGEMENT
        ========================================================= */}
        <section className="border-t border-black/[0.06] bg-white px-5 py-24 sm:px-7 lg:px-10 lg:py-32 xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#F3F3EF] text-[#66783E]">
                  <CandidateIcon />
                </div>

                <h2 className="mt-7 max-w-[470px] text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#171719] sm:text-[2.8rem]">
                  Give every candidate a clear place in the process.
                </h2>

                <p className="mt-6 max-w-[530px] text-[15px] leading-[1.8] text-[#737378]">
                  Keep candidate information organised around the recruitment
                  process, so the team can understand where someone is, what
                  has happened, and what needs attention next.
                </p>
              </div>

              <div className="relative">
                <div className="rounded-[20px] border border-black/[0.07] bg-[#F6F6F3] p-5 sm:p-7">
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#99999D]">
                        Candidate
                      </p>

                      <p className="mt-1.5 text-[16px] font-semibold tracking-[-0.02em] text-[#252528]">
                        Candidate profile
                      </p>
                    </div>

                    <span className="rounded-full bg-[#E9F0D9] px-3 py-1.5 text-[8px] font-semibold text-[#66783E]">
                      In review
                    </span>
                  </div>

                  <div className="grid gap-3 py-5 sm:grid-cols-2">
                    {[
                      ["Profile", "Candidate information"],
                      ["Experience", "Relevant background"],
                      ["Activity", "Recent recruitment work"],
                      ["Notes", "Team context"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[13px] border border-black/[0.06] bg-white p-4"
                      >
                        <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#A0A0A4]">
                          {label}
                        </p>

                        <p className="mt-2 text-[11px] font-medium text-[#55555A]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-black/[0.06] pt-5">
                    <div className="flex items-center justify-between">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#99999D]">
                        Next step
                      </p>

                      <span className="text-[9px] font-medium text-[#778A50]">
                        Team review
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            WORKFLOW
        ========================================================= */}
        <section className="bg-[#F4F4F1] px-5 py-24 sm:px-7 lg:px-10 lg:py-32 xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white text-[#66783E]">
                  <WorkflowIcon />
                </div>

                <h2 className="mt-7 max-w-[430px] text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#171719] sm:text-[2.8rem]">
                  A candidate shouldn't disappear between stages.
                </h2>

                <p className="mt-6 max-w-[460px] text-[15px] leading-[1.8] text-[#737378]">
                  Give the hiring process a visible structure. Candidates can
                  move through defined stages while the team keeps track of
                  what needs to happen next.
                </p>
              </div>

              <div className="lg:pt-2">
                <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
                  {[
                    {
                      number: "01",
                      title: "Capture",
                      description:
                        "Bring candidates into a shared recruitment workflow.",
                    },
                    {
                      number: "02",
                      title: "Review",
                      description:
                        "Give recruiters a clear place to assess and organise candidate information.",
                    },
                    {
                      number: "03",
                      title: "Collaborate",
                      description:
                        "Keep hiring teams connected around the same candidate context.",
                    },
                    {
                      number: "04",
                      title: "Decide",
                      description:
                        "Move the process forward with clearer visibility into what comes next.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="group flex gap-6 py-7 transition-all duration-300"
                    >
                      <span className="pt-1 text-[10px] font-semibold tracking-[0.08em] text-[#A1A1A5]">
                        {item.number}
                      </span>

                      <div className="flex-1">
                        <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#252528]">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-[500px] text-[13px] leading-[1.7] text-[#7B7B80]">
                          {item.description}
                        </p>
                      </div>

                      <ArrowIcon className="mt-1 hidden text-[#A4A4A8] opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            COLLABORATION
        ========================================================= */}
        <section className="bg-white px-5 py-20 sm:px-7 lg:px-10 lg:py-32 xl:px-12">
                 <div className="mx-auto max-w-[1180px]">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-[20px] border border-black/[0.07] bg-[#171719] p-6 shadow-[0_28px_70px_rgba(0,0,0,.12)] sm:p-8">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#77777F]">
                        Hiring team
                      </p>

                      <p className="mt-1.5 text-[16px] font-semibold text-[#E5E5E8]">
                        Candidate review
                      </p>
                    </div>

                    <div className="flex -space-x-2">
                      {["AS", "RK", "MN"].map((initials) => (
                        <div
                          key={initials}
                          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#171719] bg-[#2A2A30] text-[8px] font-semibold text-[#BFC0C6]"
                        >
                          {initials}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      ["Candidate context", "Reviewed"],
                      ["Interview feedback", "Added"],
                      ["Next action", "Discuss"],
                    ].map(([title, status], index) => (
                      <div
                        key={title}
                        className="flex items-center justify-between rounded-[12px] border border-white/[0.06] bg-white/[0.035] px-4 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              index === 2
                                ? "bg-[#A7D44C]"
                                : "bg-[#62636A]"
                            }`}
                          />

                          <span className="text-[10px] font-medium text-[#BFC0C5]">
                            {title}
                          </span>
                        </div>

                        <span className="text-[9px] text-[#77777F]">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#66666E]">
                      Shared context
                    </p>

                    <p className="mt-2 max-w-[400px] text-[12px] leading-[1.7] text-[#A1A1A8]">
                      Everyone involved can work from the same candidate
                      context instead of piecing together separate updates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#F3F3EF] text-[#66783E]">
                  <CollaborationIcon />
                </div>

                <h2 className="mt-7 max-w-[470px] text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#171719] sm:text-[2.8rem]">
                  Hiring works better when everyone sees the same picture.
                </h2>

                <p className="mt-6 max-w-[500px] text-[15px] leading-[1.8] text-[#737378]">
                  Recruitment is rarely owned by one person. Minivel gives
                  recruiters and hiring teams a shared view of candidate
                  activity and the decisions around it.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Shared candidate context",
                    "Visible recruitment activity",
                    "Clear next steps for the team",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckIcon />

                      <span className="text-[12px] font-medium text-[#55555A]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            VISIBILITY
        ========================================================= */}
      <section className="bg-white px-5 py-20 sm:px-7 lg:px-10 lg:py-24 xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white text-[#66783E]">
                  <VisibilityIcon />
                </div>

                <h2 className="mt-7 max-w-[460px] text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#171719] sm:text-[2.8rem]">
                  Know where the process stands.
                </h2>

                <p className="mt-6 max-w-[500px] text-[15px] leading-[1.8] text-[#737378]">
                  Good recruitment visibility is not about more dashboards.
                  It is about knowing which candidates need attention, where
                  decisions are waiting, and what the team should do next.
                </p>
              </div>

              <div className="rounded-[20px] border border-black/[0.07] bg-white p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9A9A9E]">
                      Workflow visibility
                    </p>

                    <p className="mt-1.5 text-[17px] font-semibold tracking-[-0.02em] text-[#252528]">
                      What needs attention
                    </p>
                  </div>

                  <span className="text-[9px] font-medium text-[#A0A0A4]">
                    Current view
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Candidate review",
                      description: "Waiting for hiring team feedback",
                      label: "Needs attention",
                    },
                    {
                      title: "Interview stage",
                      description: "Feedback has been added",
                      label: "Updated",
                    },
                    {
                      title: "Decision",
                      description: "Next step is ready to discuss",
                      label: "Open",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-4 border-b border-black/[0.06] pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 rounded-full ${
                            index === 0
                              ? "bg-[#A7D44C]"
                              : "bg-[#D2D2CE]"
                          }`}
                        />

                        <div>
                          <p className="text-[11px] font-semibold text-[#3B3B3F]">
                            {item.title}
                          </p>

                          <p className="mt-1 text-[10px] leading-[1.5] text-[#8B8B90]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <span className="ml-5 text-[9px] font-medium text-[#7E7E83] sm:ml-0">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            CAPABILITY SUMMARY
        ========================================================= */}
        <section className="bg-white px-5 py-24 sm:px-7 lg:px-10 lg:py-32 xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-[650px]">
              <h2 className="text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.045em] text-[#171719] sm:text-[3rem]">
                The important parts, working together.
              </h2>

              <p className="mt-6 text-[15px] leading-[1.8] text-[#737378]">
                Minivel is built around the connected parts of recruitment,
                rather than treating each task as a separate system.
              </p>
            </div>

            <div className="mt-14 border-y border-black/[0.08]">
              {[
                {
                  number: "01",
                  title: "Candidate management",
                  description:
                    "Keep candidate information organised throughout the hiring process.",
                },
                {
                  number: "02",
                  title: "Recruitment workflow",
                  description:
                    "Give each candidate a visible path from one stage to the next.",
                },
                {
                  number: "03",
                  title: "Team collaboration",
                  description:
                    "Bring recruiters and hiring teams around the same candidate context.",
                },
                {
                  number: "04",
                  title: "Workflow visibility",
                  description:
                    "Understand what is happening and where attention is needed.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="grid gap-4 border-b border-black/[0.07] py-7 last:border-b-0 sm:grid-cols-[70px_0.75fr_1.25fr] sm:items-center sm:gap-8"
                >
                  <span className="text-[10px] font-semibold tracking-[0.08em] text-[#A0A0A4]">
                    {item.number}
                  </span>

                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#29292C]">
                    {item.title}
                  </h3>

                  <p className="max-w-[500px] text-[12px] leading-[1.7] text-[#808085]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="bg-[#171719] px-5 py-24 sm:px-7 lg:px-10 lg:py-28 xl:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
              <div className="max-w-[700px]">
                <h2 className="text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-[3.2rem]">
                  See how the pieces come together.
                </h2>

                <p className="mt-6 max-w-[580px] text-[15px] leading-[1.8] text-[#A3A3AA]">
                  Explore Minivel with your recruitment workflow in mind and
                  see how the platform can fit into the way your team already
                  works.
                </p>
              </div>

              <Link
                to="/request-demo"
                className="group inline-flex h-[49px] shrink-0 items-center justify-center gap-2.5 rounded-[11px] bg-[#A7D44C] px-6 text-[11px] font-semibold text-[#111116] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B8E65D]"
              >
                Request a Demo
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-16 border-t border-white/[0.09] pt-6">
              <div className="flex flex-col gap-3 text-[9px] uppercase tracking-[0.13em] text-[#67676F] sm:flex-row sm:items-center sm:justify-between">
                <span>Minivel ATS</span>
                <span>Features</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}