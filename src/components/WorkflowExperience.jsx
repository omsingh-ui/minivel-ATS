import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    id: 'discover',
    number: '01',
    eyebrow: 'Discover',
    title: 'Bring Talent Into One Intelligent Workspace',
    text:
      'Centralize candidate information, organize talent pools and keep sourcing activity connected instead of scattered across multiple tools.',
    accent: '#5D78A5',
  },
  {
    id: 'evaluate',
    number: '02',
    eyebrow: 'Evaluate',
    title: 'Surface Relevant Candidates Faster',
    text:
      'Use AI-assisted screening to compare skills, experience and role requirements while keeping recruiter judgement at the centre of every decision.',
    accent: '#776F9D',
  },
  {
    id: 'collaborate',
    number: '03',
    eyebrow: 'Collaborate',
    title: 'Keep Hiring Teams Aligned',
    text:
      'Share structured candidate information, centralize feedback and make every hiring conversation easier to follow across the recruitment process.',
    accent: '#7C8790',
  },
  {
    id: 'decide',
    number: '04',
    eyebrow: 'Decide',
    title: 'Move From Pipeline Activity to Clearer Decisions',
    text:
      'Bring recruitment insights, candidate context and workflow visibility together so teams can move forward with greater clarity.',
    accent: '#B0936F',
  },
];

function ProductPreview({ activeStep }) {
  const step = STEPS[activeStep];

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* background depth */}
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8198BE]/20 blur-[95px]" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45" />

      {/* main preview */}
      <div className="relative animate-workflow-float">
        <div className="overflow-hidden rounded-[28px] border border-white/80 bg-white/95 shadow-[0_34px_90px_rgba(33,50,78,0.20)] backdrop-blur-2xl">
          {/* top bar */}
          <div className="flex items-center justify-between border-b border-slate-200/80 bg-[#F7F9FC] px-5 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#C4CCD7]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#D4DAE2]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#E2E6EB]" />
            </div>

            <span className="text-[10px] font-semibold tracking-wide text-slate-500">
              Minivel ATS · Workflow
            </span>

            <div className="w-10" />
          </div>

          <div className="bg-[#F7F9FC] p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Active workflow
                </p>

                <h3 className="mt-1 text-[18px] font-bold tracking-[-0.02em] text-[#17283F]">
                  {step.eyebrow}
                </h3>
              </div>

              <div
                className="rounded-full px-3 py-1.5 text-[9px] font-bold"
                style={{
                  backgroundColor: `${step.accent}14`,
                  color: step.accent,
                }}
              >
                Step {activeStep + 1} of 4
              </div>
            </div>

            {/* preview body */}
            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_6px_20px_rgba(31,48,73,0.04)]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#24354D]">
                    Candidate Workflow
                  </span>

                  <span className="text-[9px] text-slate-400">
                    Live view
                  </span>
                </div>

                {[
                  ['Aarav Mehta', 'Frontend Developer', '88%'],
                  ['Neha Kapoor', 'Product Designer', '82%'],
                  ['Rohan Shah', 'Cloud Engineer', '76%'],
                ].map(([name, role, score], index) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 border-b border-slate-100 py-2.5 last:border-0"
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[10px] font-bold"
                      style={{
                        backgroundColor: `${step.accent}14`,
                        color: step.accent,
                      }}
                    >
                      {name
                        .split(' ')
                        .map((word) => word[0])
                        .join('')}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[11px] font-bold text-slate-800">
                        {name}
                      </div>

                      <div className="mt-0.5 truncate text-[9px] text-slate-400">
                        {role}
                      </div>
                    </div>

                    <div
                      className="text-[10px] font-bold"
                      style={{ color: step.accent }}
                    >
                      {score}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="relative overflow-hidden rounded-2xl p-4 text-white"
                style={{
                  background: `linear-gradient(145deg, ${step.accent}, #263A55)`,
                }}
              >
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

                <div className="relative">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813"
                      />
                    </svg>
                  </div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                    Workflow insight
                  </p>

                  <h4 className="mt-2 text-[14px] font-bold leading-snug">
                    {step.eyebrow} stage active
                  </h4>

                  <p className="mt-3 text-[10px] leading-5 text-white/65">
                    Recruitment activity stays connected as candidates move
                    through the workflow.
                  </p>

                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-[9px] text-white/55">
                      <span>Workflow progress</span>
                      <span>{(activeStep + 1) * 25}%</span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white/80 transition-all duration-700"
                        style={{
                          width: `${(activeStep + 1) * 25}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating label */}
      <div className="absolute -right-3 bottom-[12%] hidden animate-workflow-side-float items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(31,49,76,0.12)] backdrop-blur-xl xl:flex">
        <div
          className="h-8 w-8 rounded-xl"
          style={{
            backgroundColor: `${step.accent}18`,
          }}
        />

        <div>
          <div className="text-[10px] font-bold text-[#22334A]">
            Connected workflow
          </div>
          <div className="mt-0.5 text-[9px] text-slate-400">
            Updates in real time
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const interval = setInterval(() => {
          setActiveStep((current) => (current + 1) % STEPS.length);
        }, 4200);

        observer.disconnect();

        return () => clearInterval(interval);
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="workflow"
        className="relative overflow-hidden bg-[#EEF2F7] pt-9 pb-11 sm:pt-10 sm:pb-12 lg:pt-11 lg:pb-14"
      >
        {/* background */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#EEF2F7_0%,#F7F8FA_44%,#E8EDF4_100%)]" />

        <div className="absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-[#9EB5D8]/16 blur-[120px]" />

        <div className="absolute -right-32 bottom-[-120px] h-[400px] w-[400px] rounded-full bg-[#C4B49D]/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(45,65,95,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(45,65,95,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* header */}
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <span className="mb-3 inline-flex rounded-full border border-[#D7E0EB] bg-white/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#647A98] backdrop-blur">
              How Minivel ATS Works
            </span>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#17283F] sm:text-4xl lg:text-[46px]">
              One workflow.
              <span className="block bg-gradient-to-r from-[#4E6B96] via-[#76769D] to-[#A1886D] bg-clip-text text-transparent">
                Every hiring stage connected.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#6F7D90] sm:text-[15px]">
              Move from candidate discovery to better hiring decisions without
              losing context between tools, teams or recruitment stages.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
            {/* steps */}
            <div className="relative">
              <div className="absolute left-[19px] top-7 hidden h-[calc(100%-56px)] w-px bg-[#D5DDE8] sm:block" />

              <div className="space-y-3">
                {STEPS.map((step, index) => {
                  const isActive = activeStep === index;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`
                        group relative
                        w-full
                        rounded-[22px]
                        border
                        px-5 py-5
                        text-left
                        transition-all
                        duration-500
                        sm:pl-14
                        ${
                          isActive
                            ? 'border-[#CAD6E5] bg-white shadow-[0_18px_50px_rgba(31,49,76,0.08)]'
                            : 'border-transparent bg-transparent hover:border-[#DDE4EC] hover:bg-white/60'
                        }
                      `}
                    >
                      {/* timeline node */}
                      <div
                        className={`
                          absolute left-[12px] top-[24px]
                          hidden h-[15px] w-[15px]
                          rounded-full border-[4px]
                          transition-all duration-500
                          sm:block
                          ${
                            isActive
                              ? 'scale-110 border-[#EEF2F7] shadow-[0_0_0_4px_rgba(95,121,162,0.10)]'
                              : 'border-[#EEF2F7] bg-[#CBD4E0]'
                          }
                        `}
                        style={
                          isActive
                            ? {
                                backgroundColor: step.accent,
                              }
                            : undefined
                        }
                      />

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div
                            className="text-[9px] font-bold uppercase tracking-[0.18em]"
                            style={{
                              color: isActive ? step.accent : '#9AA6B6',
                            }}
                          >
                            {step.eyebrow}
                          </div>

                          <h3
                            className={`
                              mt-2
                              max-w-[390px]
                              text-[16px]
                              font-bold
                              leading-[1.4]
                              tracking-[-0.015em]
                              transition-colors duration-300
                              ${
                                isActive
                                  ? 'text-[#1C2E47]'
                                  : 'text-[#4E5D71]'
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
                                  ? 'mt-3 grid-rows-[1fr] opacity-100'
                                  : 'grid-rows-[0fr] opacity-0'
                              }
                            `}
                          >
                            <div className="overflow-hidden">
                              <p className="max-w-[430px] text-[12px] leading-[1.75] text-[#738194]">
                                {step.text}
                              </p>
                            </div>
                          </div>
                        </div>

                        <span
                          className={`
                            shrink-0
                            text-[10px]
                            font-bold
                            tracking-[0.18em]
                            transition-colors
                            ${
                              isActive
                                ? 'text-[#8294AD]'
                                : 'text-[#BEC6D0]'
                            }
                          `}
                        >
                          {step.number}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* product preview */}
            <div className="hidden lg:block">
              <ProductPreview activeStep={activeStep} />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes workflowFloat {
          0%, 100% {
            transform: translateY(0px) rotate(-0.2deg);
          }

          50% {
            transform: translateY(-10px) rotate(0.2deg);
          }
        }

        @keyframes workflowSideFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .animate-workflow-float {
          animation: workflowFloat 6.5s ease-in-out infinite;
        }

        .animate-workflow-side-float {
          animation: workflowSideFloat 5.3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-workflow-float,
          .animate-workflow-side-float {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}