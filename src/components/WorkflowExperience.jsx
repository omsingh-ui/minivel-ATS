import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    id: "discover",
    number: "01",
    eyebrow: "Discover",
    title: "Bring Talent Into One Intelligent Workspace",
    text:
      "Centralize candidate information, organize talent pools and keep sourcing activity connected instead of scattered across multiple tools.",
    accent: "#7897E8",
  },
  {
    id: "evaluate",
    number: "02",
    eyebrow: "Evaluate",
    title: "Surface Relevant Candidates Faster",
    text:
      "Use AI-assisted screening to compare skills, experience and role requirements while keeping recruiter judgement at the centre of every decision.",
    accent: "#9A83DD",
  },
  {
    id: "collaborate",
    number: "03",
    eyebrow: "Collaborate",
    title: "Keep Hiring Teams Aligned",
    text:
      "Share structured candidate information, centralize feedback and make every hiring conversation easier to follow across the recruitment process.",
    accent: "#879CA8",
  },
  {
    id: "decide",
    number: "04",
    eyebrow: "Decide",
    title: "Move From Pipeline Activity to Clearer Decisions",
    text:
      "Bring recruitment insights, candidate context and workflow visibility together so teams can move forward with greater clarity.",
    accent: "#B69773",
  },
];

const CANDIDATES = [
  ["Aarav Mehta", "Frontend Developer", "88%"],
  ["Neha Kapoor", "Product Designer", "82%"],
  ["Rohan Shah", "Cloud Engineer", "76%"],
];

function ProductPreview({ activeStep }) {
  const step = STEPS[activeStep];

  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      {/* Ambient depth */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px] transition-colors duration-700"
        style={{ backgroundColor: step.accent }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

      {/* Product window */}
      <div className="relative animate-workflow-float">
        <div
          className="
            relative overflow-hidden
            rounded-[26px]
            border border-white/[0.08]
            bg-[#0A0A0D]/95
            shadow-[0_38px_100px_rgba(0,0,0,0.60)]
            backdrop-blur-2xl
          "
        >
          {/* top reflection */}
          <div className="pointer-events-none absolute left-[14%] right-[14%] top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />

          {/* Browser bar */}
          <div className="flex items-center justify-between border-b border-white/[0.055] bg-[#0D0D10] px-5 py-3">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-white/[0.20]" />
              <div className="h-2 w-2 rounded-full bg-white/[0.12]" />
              <div className="h-2 w-2 rounded-full bg-white/[0.07]" />
            </div>

            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: step.accent,
                  boxShadow: `0 0 10px ${step.accent}`,
                }}
              />

              <span className="text-[9px] font-semibold tracking-[0.08em] text-[#666671]">
                Minivel ATS · Workflow
              </span>
            </div>

            <div className="w-10" />
          </div>

          <div className="bg-[#08080B] p-5 sm:p-6">
            {/* dashboard header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#555560]">
                  Active workflow
                </p>

                <h3 className="mt-1.5 text-[18px] font-bold tracking-[-0.025em] text-[#F0F0F2]">
                  {step.eyebrow}
                </h3>
              </div>

              <div
                className="
                  rounded-full border
                  px-3 py-1.5
                  text-[9px] font-bold
                  transition-all duration-500
                "
                style={{
                  backgroundColor: `${step.accent}10`,
                  borderColor: `${step.accent}28`,
                  color: step.accent,
                }}
              >
                Step {activeStep + 1} of 4
              </div>
            </div>

            {/* Dashboard */}
            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              {/* Candidates */}
              <div className="relative overflow-hidden rounded-[18px] border border-white/[0.065] bg-[#0D0D10] p-4">
                <div className="absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#DADADF]">
                    Candidate Workflow
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-20"
                        style={{ backgroundColor: step.accent }}
                      />
                      <span
                        className="relative h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: step.accent }}
                      />
                    </span>

                    <span className="text-[8px] text-[#5E5E68]">
                      Live
                    </span>
                  </div>
                </div>

                {CANDIDATES.map(([name, role, score], index) => (
                  <div
                    key={name}
                    className="
                      group/candidate
                      flex items-center gap-3
                      border-b border-white/[0.045]
                      py-2.5
                      transition-all duration-300
                      last:border-0
                    "
                    style={{
                      animation: `candidateReveal 500ms ${
                        index * 90
                      }ms cubic-bezier(.22,1,.36,1) both`,
                    }}
                  >
                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-[11px]
                        border
                        text-[9px] font-bold
                      "
                      style={{
                        backgroundColor: `${step.accent}0D`,
                        borderColor: `${step.accent}1E`,
                        color: step.accent,
                      }}
                    >
                      {name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[10px] font-bold text-[#CCCCD2]">
                        {name}
                      </div>

                      <div className="mt-0.5 truncate text-[8px] text-[#5C5C66]">
                        {role}
                      </div>
                    </div>

                    <div
                      className="text-[9px] font-bold"
                      style={{ color: step.accent }}
                    >
                      {score}
                    </div>
                  </div>
                ))}
              </div>

              {/* Intelligence panel */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[18px]
                  border border-white/[0.07]
                  bg-[#101014]
                  p-4
                "
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-[0.14] blur-[35px]"
                  style={{ backgroundColor: step.accent }}
                />

                <div
                  className="pointer-events-none absolute bottom-[-50px] left-[-40px] h-24 w-24 rounded-full opacity-[0.08] blur-[35px]"
                  style={{ backgroundColor: step.accent }}
                />

                <div className="relative">
                  <div
                    className="
                      mb-4 flex h-9 w-9
                      items-center justify-center
                      rounded-[11px]
                      border
                    "
                    style={{
                      backgroundColor: `${step.accent}0E`,
                      borderColor: `${step.accent}20`,
                      color: step.accent,
                    }}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.7}
                        d="M12 3.5 14 8l4.5 2-4.5 2-2 4.5-2-4.5-4.5-2L10 8l2-4.5Z"
                      />
                    </svg>
                  </div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#5D5D67]">
                    Workflow intelligence
                  </p>

                  <h4 className="mt-2 text-[13px] font-bold leading-snug text-[#E7E7EB]">
                    {step.eyebrow} stage active
                  </h4>

                  <p className="mt-3 text-[9px] leading-[1.7] text-[#6D6D77]">
                    Recruitment activity stays connected as candidates move
                    through the workflow.
                  </p>

                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-[8px] text-[#60606A]">
                      <span>Workflow progress</span>

                      <span style={{ color: step.accent }}>
                        {(activeStep + 1) * 25}%
                      </span>
                    </div>

                    <div className="h-1 overflow-hidden rounded-full bg-white/[0.055]">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${(activeStep + 1) * 25}%`,
                          background: `linear-gradient(90deg, ${step.accent}80, ${step.accent})`,
                          boxShadow: `0 0 12px ${step.accent}55`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom pipeline */}
            <div className="mt-3 flex items-center gap-2 rounded-[14px] border border-white/[0.05] bg-[#0C0C0F] px-3 py-2.5">
              {STEPS.map((item, index) => (
                <div
                  key={item.id}
                  className="flex min-w-0 flex-1 items-center gap-2"
                >
                  <div
                    className={`
                      flex h-5 w-5 shrink-0
                      items-center justify-center
                      rounded-full border
                      text-[7px] font-bold
                      transition-all duration-500
                    `}
                    style={{
                      borderColor:
                        index <= activeStep
                          ? `${item.accent}40`
                          : "rgba(255,255,255,0.05)",
                      backgroundColor:
                        index <= activeStep
                          ? `${item.accent}12`
                          : "rgba(255,255,255,0.02)",
                      color:
                        index <= activeStep
                          ? item.accent
                          : "#484851",
                    }}
                  >
                    {index + 1}
                  </div>

                  {index < STEPS.length - 1 && (
                    <div className="relative h-px flex-1 overflow-hidden bg-white/[0.05]">
                      <div
                        className="absolute inset-y-0 left-0 transition-all duration-700"
                        style={{
                          width:
                            index < activeStep ? "100%" : "0%",
                          backgroundColor: item.accent,
                          opacity: 0.45,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating intelligence notification */}
      <div
        key={activeStep}
        className="
          absolute -right-3 bottom-[11%]
          hidden xl:flex
          animate-workflow-notification
          items-center gap-3
          rounded-[15px]
          border border-white/[0.08]
          bg-[#101014]/95
          px-3.5 py-3
          shadow-[0_20px_55px_rgba(0,0,0,0.55)]
          backdrop-blur-2xl
        "
      >
        <div
          className="
            relative flex h-8 w-8
            items-center justify-center
            rounded-[10px]
            border
          "
          style={{
            backgroundColor: `${step.accent}0D`,
            borderColor: `${step.accent}22`,
            color: step.accent,
          }}
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M5 12l4 4L19 6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span
            className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: step.accent,
              boxShadow: `0 0 8px ${step.accent}`,
            }}
          />
        </div>

        <div>
          <div className="text-[9px] font-bold text-[#D5D5DA]">
            Workflow updated
          </div>

          <div className="mt-0.5 text-[8px] text-[#60606A]">
            {step.eyebrow} stage is now active
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkflowExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let intervalId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !intervalId) {
          intervalId = window.setInterval(() => {
            setActiveStep(
              (current) => (current + 1) % STEPS.length
            );
          }, 4200);
        }

        if (!entry.isIntersecting && intervalId) {
          window.clearInterval(intervalId);
          intervalId = undefined;
        }
      },
      {
        threshold: 0.3,
      }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="workflow"
        className="
          relative overflow-hidden
          bg-[#050505]
          pb-12 pt-7
          sm:pb-13 sm:pt-8
          lg:pb-14 lg:pt-9
        "
      >
        {/* Section boundary */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

        {/* Atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-[5%] h-[380px] w-[380px] rounded-full bg-[#5878BD]/[0.045] blur-[140px]" />

          <div className="absolute -right-40 bottom-[-80px] h-[400px] w-[400px] rounded-full bg-[#896EB3]/[0.04] blur-[145px]" />

          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <div
              className="
                inline-flex items-center gap-2.5
                rounded-full
                border border-white/[0.07]
                bg-white/[0.025]
                px-3.5 py-1.5
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9880D6] opacity-20" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#9880D6]" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#777781]">
                How Minivel ATS Works
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.07] tracking-[-0.045em] text-[#F3F3F5] sm:text-4xl lg:text-[46px]">
              One workflow.

              <span className="mt-1 block bg-gradient-to-r from-white via-[#BAB2D9] to-[#9279C9] bg-clip-text text-transparent">
                Every hiring stage connected.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#777781] sm:text-[14.5px]">
              Move from candidate discovery to better hiring decisions without
              losing context between tools, teams or recruitment stages.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14">
            {/* Steps */}
            <div className="relative">
              <div className="absolute left-[19px] top-7 hidden h-[calc(100%-56px)] w-px bg-white/[0.055] sm:block" />

              <div className="space-y-2.5">
                {STEPS.map((step, index) => {
                  const isActive = activeStep === index;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`
                        group relative w-full
                        overflow-hidden
                        rounded-[20px]
                        border
                        px-5 py-4
                        text-left
                        transition-all duration-500
                        sm:pl-14
                        ${
                          isActive
                            ? "border-white/[0.10] bg-[#0D0D10] shadow-[0_18px_50px_rgba(0,0,0,0.34)]"
                            : "border-transparent bg-transparent hover:border-white/[0.055] hover:bg-white/[0.018]"
                        }
                      `}
                    >
                      {/* active glow */}
                      {isActive && (
                        <div
                          className="pointer-events-none absolute -right-12 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full opacity-[0.10] blur-[40px]"
                          style={{ backgroundColor: step.accent }}
                        />
                      )}

                      {/* active top reflection */}
                      {isActive && (
                        <div className="absolute left-[20%] right-[20%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.13] to-transparent" />
                      )}

                      {/* Timeline node */}
                      <div
                        className={`
                          absolute left-[12px] top-[21px]
                          hidden h-[15px] w-[15px]
                          rounded-full border-[4px]
                          transition-all duration-500
                          sm:block
                          ${
                            isActive
                              ? "scale-110 border-[#050505]"
                              : "border-[#050505] bg-[#29292F]"
                          }
                        `}
                        style={
                          isActive
                            ? {
                                backgroundColor: step.accent,
                                boxShadow: `0 0 0 4px ${step.accent}15, 0 0 18px ${step.accent}35`,
                              }
                            : undefined
                        }
                      />

                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          <div
                            className="text-[8.5px] font-bold uppercase tracking-[0.19em] transition-colors duration-300"
                            style={{
                              color: isActive
                                ? step.accent
                                : "#555560",
                            }}
                          >
                            {step.eyebrow}
                          </div>

                          <h3
                            className={`
                              mt-2 max-w-[390px]
                              text-[15px] font-bold
                              leading-[1.4]
                              tracking-[-0.015em]
                              transition-colors duration-300
                              ${
                                isActive
                                  ? "text-[#EDEDF0]"
                                  : "text-[#777781] group-hover:text-[#A0A0A9]"
                              }
                            `}
                          >
                            {step.title}
                          </h3>

                          <div
                            className={`
                              grid transition-all duration-500
                              ${
                                isActive
                                  ? "mt-3 grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }
                            `}
                          >
                            <div className="overflow-hidden">
                              <p className="max-w-[430px] text-[11px] leading-[1.75] text-[#696973]">
                                {step.text}
                              </p>
                            </div>
                          </div>
                        </div>

                        <span
                          className={`
                            shrink-0
                            text-[9px] font-bold
                            tracking-[0.18em]
                            transition-colors duration-300
                            ${
                              isActive
                                ? "text-[#696974]"
                                : "text-[#38383F]"
                            }
                          `}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Active accent */}
                      <div
                        className={`
                          absolute bottom-0 left-1/2
                          h-px -translate-x-1/2
                          transition-all duration-700
                          ${
                            isActive
                              ? "w-[42%] opacity-60"
                              : "w-0 opacity-0"
                          }
                        `}
                        style={{
                          background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product preview */}
            <div className="hidden lg:block">
              <ProductPreview activeStep={activeStep} />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes workflowFloat {
          0%, 100% {
            transform: translateY(0px) rotate(-0.15deg);
          }

          50% {
            transform: translateY(-8px) rotate(0.15deg);
          }
        }

        @keyframes workflowNotification {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.96);
          }

          18% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          82% {
            opacity: 1;
            transform: translateY(-4px) scale(1);
          }

          100% {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
        }

        @keyframes candidateReveal {
          from {
            opacity: 0;
            transform: translateX(-6px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-workflow-float {
          animation: workflowFloat 6.5s ease-in-out infinite;
        }

        .animate-workflow-notification {
          animation: workflowNotification 4.1s
            cubic-bezier(.22,1,.36,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-workflow-float,
          .animate-workflow-notification {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}