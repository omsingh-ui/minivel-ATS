import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";

const STEPS = [
  {
    id: "upload",
    number: "01",
    short: "Resume received",
    title: "Candidate Resume Enters the ATS",
    text:
      "Upload a resume or add a candidate profile to bring applicant information into one recruitment workspace.",
    accent: "#6479C8",
  },
  {
    id: "parse",
    number: "02",
    short: "Resume parsed",
    title: "Candidate Information Is Structured",
    text:
      "The ATS reads the resume and organizes important information such as skills, experience, education and contact details.",
    accent: "#7865B5",
  },
  {
    id: "screen",
    number: "03",
    short: "Screen & match",
    title: "Profiles Are Reviewed Against the Role",
    text:
      "Candidate information can be compared with job requirements to help recruiters identify relevant profiles faster.",
    accent: "#8A68B7",
  },
  {
    id: "pipeline",
    number: "04",
    short: "Pipeline",
    title: "Candidates Move Through Hiring Stages",
    text:
      "Recruiters can organize candidates across screening, shortlisting, interviews and other stages from one clear pipeline.",
    accent: "#5E7FAE",
  },
  {
    id: "interview",
    number: "05",
    short: "Interview",
    title: "Interviews and Feedback Stay Connected",
    text:
      "Keep interview activity, recruiter feedback and hiring-team collaboration attached to the candidate profile.",
    accent: "#788995",
  },
  {
    id: "decision",
    number: "06",
    short: "Decision",
    title: "The Hiring Team Reaches a Clear Decision",
    text:
      "Bring candidate context, evaluations and recruitment activity together before moving toward the final hiring decision.",
    accent: "#A17F5D",
  },
];

const PARSED_FIELDS = [
  ["Name", "Aarav Mehta"],
  ["Current role", "Frontend Developer"],
  ["Experience", "2 years"],
  ["Education", "B.E. Computer Engineering"],
];

const SKILLS = ["React", "JavaScript", "Tailwind CSS", "Git"];

const PIPELINE = [
  { label: "New", value: 42 },
  { label: "Screening", value: 18 },
  { label: "Shortlisted", value: 9 },
  { label: "Interview", value: 4 },
];

function StatusDot({ accent }) {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-15"
        style={{ backgroundColor: accent }}
      />
      <span
        className="relative h-2 w-2 rounded-full"
        style={{ backgroundColor: accent }}
      />
    </span>
  );
}

function ResumeDocument({ accent }) {
  return (
    <div className="relative mx-auto w-full max-w-[315px]">
      <div className="absolute inset-x-[12%] bottom-[-18px] h-12 rounded-full bg-black/50 blur-[28px]" />

      <div className="relative overflow-hidden rounded-[18px] border border-white/[0.075] bg-[#111115] p-5 shadow-[0_24px_60px_rgba(0,0,0,.28)]">
        <div className="absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />

        <div className="flex items-start gap-3.5">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border"
            style={{
              backgroundColor: `${accent}10`,
              borderColor: `${accent}28`,
              color: accent,
            }}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 3h7l4 4v14H7z"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M14 3v5h5M10 12h5M10 15h5" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-bold text-[#E9E9ED]">
              Aarav_Mehta_Resume.pdf
            </p>

            <p className="mt-1 text-[8px] text-[#666671]">
              248 KB · Candidate application
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <div className="h-1.5 w-[68%] rounded-full bg-white/[0.08]" />
          <div className="h-1.5 w-[88%] rounded-full bg-white/[0.055]" />
          <div className="h-1.5 w-[76%] rounded-full bg-white/[0.055]" />
          <div className="h-1.5 w-[58%] rounded-full bg-white/[0.055]" />
        </div>

        <div className="mt-5 flex items-center gap-2">
          <StatusDot accent={accent} />

          <span className="text-[8px] font-semibold" style={{ color: accent }}>
            Resume received
          </span>
        </div>
      </div>
    </div>
  );
}

function UploadView({ accent }) {
  return (
    <div
      key="upload"
      className="workflow-view flex min-h-[305px] items-center justify-center"
    >
      <div className="w-full">
        <ResumeDocument accent={accent} />

        <div className="mx-auto mt-6 flex max-w-[315px] items-center justify-between rounded-[12px] border border-white/[0.05] bg-[#0C0C0F] px-3.5 py-2.5">
          <span className="text-[8px] text-[#64646E]">
            Candidate source
          </span>

          <span className="text-[8px] font-semibold text-[#A2A2AA]">
            Careers application
          </span>
        </div>
      </div>
    </div>
  );
}

function ParseView({ accent }) {
  return (
    <div key="parse" className="workflow-view min-h-[305px]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#5E5E68]">
            Resume parsing
          </p>

          <h4 className="mt-1.5 text-[14px] font-bold text-[#EAEAEF]">
            Candidate profile created
          </h4>
        </div>

        <div
          className="rounded-full border px-2.5 py-1 text-[8px] font-bold"
          style={{
            color: accent,
            borderColor: `${accent}25`,
            backgroundColor: `${accent}0D`,
          }}
        >
          Parsed
        </div>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {PARSED_FIELDS.map(([label, value], index) => (
          <div
            key={label}
            className="workflow-field rounded-[13px] border border-white/[0.055] bg-[#111115] p-3"
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >
            <p className="text-[7.5px] font-semibold uppercase tracking-[0.12em] text-[#555560]">
              {label}
            </p>

            <p className="mt-1.5 text-[9px] font-semibold text-[#D6D6DB]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-[14px] border border-white/[0.055] bg-[#111115] p-3">
        <p className="text-[8px] font-semibold text-[#686873]">
          Skills identified
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {SKILLS.map((skill, index) => (
            <span
              key={skill}
              className="workflow-field rounded-full border px-2.5 py-1 text-[8px] font-semibold"
              style={{
                animationDelay: `${320 + index * 60}ms`,
                color: accent,
                borderColor: `${accent}20`,
                backgroundColor: `${accent}0B`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScreenView({ accent }) {
  const criteria = [
    ["Frontend skills", 92],
    ["Relevant experience", 84],
    ["Role alignment", 88],
  ];

  return (
    <div key="screen" className="workflow-view min-h-[305px]">
      <div className="grid gap-3 sm:grid-cols-[1fr_.72fr]">
        <div className="rounded-[16px] border border-white/[0.06] bg-[#111115] p-4">
          <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#595964]">
            Role comparison
          </p>

          <h4 className="mt-2 text-[13px] font-bold text-[#E7E7EB]">
            Frontend Developer
          </h4>

          <div className="mt-4 space-y-4">
            {criteria.map(([label, score], index) => (
              <div
                key={label}
                className="workflow-field"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[8px] text-[#70707A]">
                    {label}
                  </span>

                  <span
                    className="text-[8px] font-bold"
                    style={{ color: accent }}
                  >
                    {score}%
                  </span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-white/[0.055]">
                  <div
                    className="workflow-progress h-full rounded-full"
                    style={{
                      "--progress": `${score}%`,
                      backgroundColor: accent,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-[16px] border p-4"
          style={{
            borderColor: `${accent}20`,
            background: `linear-gradient(145deg, ${accent}12, #111115 65%)`,
          }}
        >
          <div
            className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-10 blur-[35px]"
            style={{ backgroundColor: accent }}
          />

          <div className="relative">
            <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#656570]">
              Match indication
            </p>

            <div
              className="mt-4 text-[40px] font-bold tracking-[-0.05em]"
              style={{ color: accent }}
            >
              88%
            </div>

            <p className="mt-1 text-[9px] font-semibold text-[#D1D1D7]">
              Relevant profile
            </p>

            <p className="mt-3 text-[8px] leading-[1.65] text-[#666671]">
              Candidate information aligns closely with the current role
              requirements.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <StatusDot accent={accent} />

              <span className="text-[8px] text-[#7A7A84]">
                Ready for recruiter review
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineView({ accent }) {
  return (
    <div key="pipeline" className="workflow-view min-h-[305px]">
      <div className="mb-4">
        <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#595964]">
          Recruitment pipeline
        </p>

        <h4 className="mt-1.5 text-[14px] font-bold text-[#E8E8EC]">
          Frontend Developer
        </h4>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {PIPELINE.map((stage, index) => (
          <div
            key={stage.label}
            className="workflow-field relative overflow-hidden rounded-[14px] border border-white/[0.055] bg-[#111115] p-3"
            style={{
              animationDelay: `${index * 90}ms`,
            }}
          >
            {stage.label === "Interview" && (
              <div
                className="absolute inset-x-[22%] top-0 h-px"
                style={{ backgroundColor: accent }}
              />
            )}

            <p className="text-[8px] font-semibold text-[#6B6B75]">
              {stage.label}
            </p>

            <p className="mt-2 text-[21px] font-bold text-[#E5E5E9]">
              {stage.value}
            </p>

            <p className="mt-1 text-[7.5px] text-[#50505A]">
              candidates
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[15px] border border-white/[0.055] bg-[#0F0F13] p-3.5">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-[11px] border text-[9px] font-bold"
            style={{
              color: accent,
              borderColor: `${accent}22`,
              backgroundColor: `${accent}0D`,
            }}
          >
            AM
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-bold text-[#D9D9DE]">
              Aarav Mehta
            </p>

            <p className="mt-0.5 text-[8px] text-[#60606A]">
              Moved from Shortlisted
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[8px] text-[#5D5D67]">
              →
            </span>

            <span
              className="rounded-full border px-2.5 py-1 text-[8px] font-semibold"
              style={{
                color: accent,
                borderColor: `${accent}20`,
                backgroundColor: `${accent}0D`,
              }}
            >
              Interview
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InterviewView({ accent }) {
  return (
    <div key="interview" className="workflow-view min-h-[305px]">
      <div className="grid gap-3 sm:grid-cols-[.82fr_1.18fr]">
        <div className="rounded-[16px] border border-white/[0.06] bg-[#111115] p-4">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-[11px] border"
            style={{
              color: accent,
              borderColor: `${accent}22`,
              backgroundColor: `${accent}0D`,
            }}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect
                x="4"
                y="5"
                width="16"
                height="15"
                rx="2"
                strokeWidth="1.6"
              />
              <path d="M8 3v4M16 3v4M4 10h16" strokeWidth="1.6" />
            </svg>
          </div>

          <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.15em] text-[#5C5C67]">
            Interview
          </p>

          <h4 className="mt-1.5 text-[12px] font-bold text-[#E4E4E8]">
            Technical discussion
          </h4>

          <p className="mt-3 text-[9px] leading-[1.65] text-[#686872]">
            18 Sep · 11:30 AM
          </p>

          <div className="mt-4 flex items-center gap-2">
            <StatusDot accent={accent} />

            <span className="text-[8px] font-semibold" style={{ color: accent }}>
              Scheduled
            </span>
          </div>
        </div>

        <div className="rounded-[16px] border border-white/[0.06] bg-[#111115] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#5C5C67]">
                Team feedback
              </p>

              <p className="mt-1.5 text-[11px] font-bold text-[#DFDFE4]">
                Candidate evaluation
              </p>
            </div>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <span
                  key={item}
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor:
                      item <= 4 ? accent : "rgba(255,255,255,.08)",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2.5">
            {[
              "Strong frontend fundamentals",
              "Relevant project experience",
              "Clear communication",
            ].map((item, index) => (
              <div
                key={item}
                className="workflow-field flex items-center gap-2.5 rounded-[11px] border border-white/[0.045] bg-white/[0.018] px-3 py-2.5"
                style={{
                  animationDelay: `${index * 90}ms`,
                }}
              >
                <svg
                  className="h-3 w-3 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                >
                  <path
                    d="m6 12 4 4 8-8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-[8.5px] text-[#81818B]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionView({ accent }) {
  return (
    <div
      key="decision"
      className="workflow-view flex min-h-[305px] items-center justify-center"
    >
      <div className="w-full max-w-[390px]">
        <div
          className="relative overflow-hidden rounded-[20px] border p-5 text-center"
          style={{
            borderColor: `${accent}24`,
            background: `linear-gradient(145deg, ${accent}12, #111115 60%)`,
          }}
        >
          <div
            className="absolute left-1/2 top-[-80px] h-40 w-40 -translate-x-1/2 rounded-full opacity-[0.12] blur-[45px]"
            style={{ backgroundColor: accent }}
          />

          <div
            className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border"
            style={{
              color: accent,
              borderColor: `${accent}30`,
              backgroundColor: `${accent}12`,
            }}
          >
            <svg
              className="h-5 w-5"
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
          </div>

          <p className="relative mt-4 text-[8px] font-bold uppercase tracking-[0.18em] text-[#666670]">
            Hiring decision
          </p>

          <h4 className="relative mt-2 text-[16px] font-bold text-[#EEEEF1]">
            Candidate selected
          </h4>

          <p className="relative mt-2 text-[9px] leading-[1.65] text-[#6E6E78]">
            Aarav Mehta · Frontend Developer
          </p>

          <div className="relative mt-5 grid grid-cols-3 gap-2">
            {[
              ["Match", "88%"],
              ["Interview", "4/5"],
              ["Status", "Selected"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[11px] border border-white/[0.05] bg-white/[0.02] px-2 py-2.5"
              >
                <p className="text-[7px] text-[#565660]">
                  {label}
                </p>

                <p
                  className="mt-1 text-[8.5px] font-bold"
                  style={{
                    color:
                      label === "Status" ? accent : "#CFCFD5",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StageContent({ activeStep }) {
  const step = STEPS[activeStep];

  switch (step.id) {
    case "upload":
      return <UploadView accent={step.accent} />;

    case "parse":
      return <ParseView accent={step.accent} />;

    case "screen":
      return <ScreenView accent={step.accent} />;

    case "pipeline":
      return <PipelineView accent={step.accent} />;

    case "interview":
      return <InterviewView accent={step.accent} />;

    case "decision":
      return <DecisionView accent={step.accent} />;

    default:
      return null;
  }
}

function ProductPreview({ activeStep }) {
  const step = STEPS[activeStep];
  const progress = ((activeStep + 1) / STEPS.length) * 100;

  return (
    <div className="relative mx-auto w-full max-w-[610px]">
      {/* Product atmosphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-[105px] transition-colors duration-700"
        style={{ backgroundColor: step.accent }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#272330]/[0.06]" />

      <div className="relative animate-workflow-float">
        <div className="relative overflow-hidden rounded-[27px] border border-white/[0.09] bg-[#0A0A0D] shadow-[0_38px_90px_rgba(31,27,41,.24)]">
          {/* Top reflection */}
          <div className="pointer-events-none absolute left-[14%] right-[14%] top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/[0.22] to-transparent" />

          {/* Browser bar */}
          <div className="flex items-center justify-between border-b border-white/[0.055] bg-[#0E0E11] px-5 py-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/[0.18]" />
              <span className="h-2 w-2 rounded-full bg-white/[0.11]" />
              <span className="h-2 w-2 rounded-full bg-white/[0.065]" />
            </div>

            <div className="flex items-center gap-2">
              <StatusDot accent={step.accent} />

              <span className="text-[9px] font-semibold tracking-[0.06em] text-[#686873]">
                Minivel ATS · Candidate Workflow
              </span>
            </div>

            <div className="w-10" />
          </div>

          <div className="relative bg-[#09090C] p-5 sm:p-6">
            {/* Product header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#555560]">
                  Candidate · Aarav Mehta
                </p>

                <h3 className="mt-1.5 text-[17px] font-bold tracking-[-0.025em] text-[#EEEEF1]">
                  {step.short}
                </h3>
              </div>

              <div
                className="rounded-full border px-3 py-1.5 text-[8px] font-bold"
                style={{
                  color: step.accent,
                  borderColor: `${step.accent}25`,
                  backgroundColor: `${step.accent}0D`,
                }}
              >
                {step.number} / 06
              </div>
            </div>

            {/* Changing ATS screen */}
            <StageContent activeStep={activeStep} />

            {/* Persistent workflow navigation */}
            <div className="mt-5 border-t border-white/[0.05] pt-4">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="text-[7.5px] font-semibold uppercase tracking-[0.15em] text-[#50505A]">
                  Candidate journey
                </span>

                <span
                  className="text-[8px] font-bold"
                  style={{ color: step.accent }}
                >
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="relative">
                <div className="absolute left-[12px] right-[12px] top-[10px] h-px bg-white/[0.055]" />

                <div
                  className="absolute left-[12px] top-[10px] h-px transition-all duration-700"
                  style={{
                    width: `calc(${progress}% - 12px)`,
                    maxWidth: "calc(100% - 24px)",
                    backgroundColor: step.accent,
                    opacity: 0.55,
                  }}
                />

                <div className="relative flex justify-between">
                  {STEPS.map((item, index) => {
                    const complete = index <= activeStep;

                    return (
                      <div
                        key={item.id}
                        className="flex flex-col items-center"
                      >
                        <div
                          className="flex h-5 w-5 items-center justify-center rounded-full border text-[7px] font-bold transition-all duration-500"
                          style={{
                            color: complete
                              ? item.accent
                              : "#45454F",
                            borderColor: complete
                              ? `${item.accent}38`
                              : "rgba(255,255,255,.06)",
                            backgroundColor: complete
                              ? `${item.accent}12`
                              : "#0E0E12",
                          }}
                        >
                          {index + 1}
                        </div>

                        <span
                          className={`mt-1.5 hidden text-[6.5px] font-semibold sm:block ${
                            index === activeStep
                              ? "text-[#8B8B95]"
                              : "text-[#464650]"
                          }`}
                        >
                          {item.short.split(" ")[0]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkflowExperience() {
  const revealRef = useReveal();
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const startRotation = () => {
      if (intervalRef.current) return;

      intervalRef.current = window.setInterval(() => {
        setActiveStep(
          (current) => (current + 1) % STEPS.length
        );
      }, 4400);
    };

    const stopRotation = () => {
      if (!intervalRef.current) return;

      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startRotation();
        } else {
          stopRotation();
        }
      },
      {
        threshold: 0.25,
      }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
      stopRotation();
    };
  }, []);

  const selectStep = (index) => {
    setActiveStep(index);

    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        setActiveStep(
          (current) => (current + 1) % STEPS.length
        );
      }, 4400);
    }
  };

  return (
    <>
      <div
        ref={revealRef}
        className="reveal-section"
      >
        <section
          ref={sectionRef}
          id="workflow"
          className="
            relative overflow-hidden
            bg-white
            pb-16 pt-14
            sm:pb-18 sm:pt-16
            lg:pb-20 lg:pt-12
          "
        >
          {/* Section boundary */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#25252D]/[0.07] to-transparent" />

          {/* Light atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-44 top-[4%] h-[390px] w-[390px] rounded-full bg-[#5D79C2]/[0.035] blur-[145px]" />

            <div className="absolute -right-44 bottom-[-100px] h-[410px] w-[410px] rounded-full bg-[#8668B6]/[0.035] blur-[150px]" />

            <div className="absolute left-1/2 top-[58%] h-[300px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8068B3]/[0.018] blur-[125px]" />

            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(35,35,45,0.075) 1px, transparent 0)",
                backgroundSize: "35px 35px",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header — no eyebrow */}
            <div className="mx-auto mb-11 text-center lg:mb-14">
              <h2 className="section-title">
                From resume to decision,
                <span className="mt-1 block bg-gradient-to-r from-[#25232A] via-[#55496F] to-[#66528F] bg-clip-text text-transparent">
                  one connected hiring flow.
                </span>
              </h2>

              <p className="section-description mt-4">
                See how Minivel ATS turns candidate information into a
                structured recruitment workflow your team can follow from
                application to final decision.
              </p>
            </div>

            <div className="grid items-center gap-11 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
              {/* LEFT — REAL ATS STAGES */}
              <div className="relative">
                <div className="absolute left-[18px] top-6 hidden h-[calc(100%-48px)] w-px bg-[#22222B]/[0.08] sm:block" />

                <div className="space-y-1.5">
                  {STEPS.map((step, index) => {
                    const isActive = activeStep === index;
                    const isComplete = index < activeStep;

                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => selectStep(index)}
                        className={`
                          group relative w-full
                          overflow-hidden
                          rounded-[17px]
                          border
                          px-4 py-3.5
                          text-left
                          transition-all duration-500
                          sm:pl-13

                          ${
                            isActive
                              ? `
                                  border-[#24242D]/[0.09]
                                  bg-white
                                  shadow-[0_14px_38px_rgba(31,28,40,.07)]
                                `
                              : `
                                  border-transparent
                                  bg-transparent
                                  hover:border-[#24242D]/[0.06]
                                  hover:bg-[#FAFAFB]
                                `
                          }
                        `}
                      >
                        {/* Timeline node */}
                        <div
                          className="
                            absolute left-[12px] top-[18px]
                            hidden h-[13px] w-[13px]
                            items-center justify-center
                            rounded-full
                            border
                            bg-white
                            transition-all duration-500
                            sm:flex
                          "
                          style={{
                            borderColor:
                              isActive || isComplete
                                ? `${step.accent}55`
                                : "rgba(35,35,45,.12)",
                            boxShadow: isActive
                              ? `0 0 0 4px ${step.accent}10`
                              : "none",
                          }}
                        >
                          <span
                            className="h-[5px] w-[5px] rounded-full transition-all duration-500"
                            style={{
                              backgroundColor:
                                isActive || isComplete
                                  ? step.accent
                                  : "#D3D3D8",
                            }}
                          />
                        </div>

                        {isActive && (
                          <div
                            className="pointer-events-none absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full opacity-[0.045] blur-[35px]"
                            style={{
                              backgroundColor: step.accent,
                            }}
                          />
                        )}

                        <div className="relative flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className="text-[8px] font-bold uppercase tracking-[0.15em]"
                                style={{
                                  color: isActive
                                    ? step.accent
                                    : "#8A8A94",
                                }}
                              >
                                {step.short}
                              </span>

                              {isComplete && (
                                <svg
                                  className="h-3 w-3"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={step.accent}
                                >
                                  <path
                                    d="m6 12 4 4 8-8"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>

                            <h3
                              className={`
                                mt-1.5 max-w-[390px]
                                text-[14px] font-bold
                                leading-[1.4]
                                tracking-[-0.015em]
                                transition-colors duration-300

                                ${
                                  isActive
                                    ? "text-[#202027]"
                                    : "text-[#686872] group-hover:text-[#3E3E47]"
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
                                    ? "mt-2.5 grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }
                              `}
                            >
                              <div className="overflow-hidden">
                                <p className="max-w-[430px] text-[10.5px] leading-[1.7] text-[#777781]">
                                  {step.text}
                                </p>
                              </div>
                            </div>
                          </div>

                          <span
                            className={`
                              shrink-0 text-[8px]
                              font-bold tracking-[0.15em]

                              ${
                                isActive
                                  ? "text-[#777781]"
                                  : "text-[#BBBBBF]"
                              }
                            `}
                          >
                            {step.number}
                          </span>
                        </div>

                        {isActive && (
                          <div
                            className="absolute bottom-0 left-1/2 h-px w-[36%] -translate-x-1/2 opacity-55"
                            style={{
                              background: `linear-gradient(
                                90deg,
                                transparent,
                                ${step.accent},
                                transparent
                              )`,
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT — ATS PRODUCT */}
              <div className="hidden lg:block">
                <ProductPreview activeStep={activeStep} />
              </div>

              {/* Mobile product preview */}
              <div className="lg:hidden">
                <ProductPreview activeStep={activeStep} />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#25252D]/[0.065] to-transparent" />
        </section>
      </div>

      <style>{`
        @keyframes workflowFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes workflowViewReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
            filter: blur(3px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes workflowFieldReveal {
          from {
            opacity: 0;
            transform: translateY(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes workflowProgress {
          from {
            width: 0;
          }

          to {
            width: var(--progress);
          }
        }

        .animate-workflow-float {
          animation:
            workflowFloat
            8s ease-in-out infinite;
        }

        .workflow-view {
          animation:
            workflowViewReveal
            520ms cubic-bezier(.22,1,.36,1)
            both;
        }

        .workflow-field {
          opacity: 0;

          animation:
            workflowFieldReveal
            480ms cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .workflow-progress {
          width: 0;

          animation:
            workflowProgress
            850ms cubic-bezier(.22,1,.36,1)
            180ms forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-workflow-float,
          .workflow-view,
          .workflow-field,
          .workflow-progress {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .workflow-progress {
            width: var(--progress) !important;
          }
        }
      `}</style>
    </>
  );
}