import { useState } from "react";

const FAQS = [
  {
    q: "What makes Minivel ATS different from other applicant tracking systems?",
    a: "Minivel ATS is built specifically for recruitment agencies and staffing teams — not internal HR departments. This means every feature is designed around your client relationships, candidate pipelines, and placement workflows. Our AI layer doesn't just parse resumes; it reasons about candidate fit, predicts placement success, and automates repetitive recruitment tasks.",
  },
  {
    q: "How does the AI screening work?",
    a: "Our AI engine analyzes resumes across skills, experience trajectory, role progression, and contextual information. It generates a fit score with a human-readable explanation so recruiters can understand the reasoning behind a shortlist rather than simply accepting an automated recommendation.",
  },
  {
    q: "Is my candidate and client data secure?",
    a: "Minivel ATS is designed around secure handling of candidate and client information, including protected access, encryption, and responsible data management. Specific certifications and compliance commitments should reflect Minivel’s currently verified security policies.",
  },
  {
    q: "What does the onboarding process look like?",
    a: "Onboarding is designed to help teams configure their recruitment workflows, organise existing candidate information, connect relevant tools, and understand how to use the platform effectively.",
  },
  {
    q: "How does pricing work? Are there hidden fees?",
    a: "Pricing can be structured around the size and requirements of your recruitment team. Final plans, included features, billing terms, and any enterprise requirements should reflect Minivel’s current commercial offering.",
  },
  {
    q: "Can I import my existing candidate database?",
    a: "Minivel ATS is designed to support the transition of existing candidate information into a more organised recruitment environment. Available migration methods and supported platforms depend on the final product configuration.",
  },
  {
    q: "Does Minivel ATS integrate with job boards and LinkedIn?",
    a: "The platform is designed around connected recruitment workflows, allowing relevant sourcing, communication, productivity, and hiring tools to work alongside the ATS. Specific integrations should reflect those currently supported by Minivel.",
  },
];

function FAQItem({ faq, isOpen, onClick, index }) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-[20px] border
        transition-all duration-500 ease-out
        ${
          isOpen
            ? "border-white/[0.11] bg-[#0D0D10] shadow-[0_22px_60px_rgba(0,0,0,0.42)]"
            : "border-white/[0.055] bg-[#09090B] hover:border-white/[0.10] hover:bg-[#0C0C0F]"
        }
      `}
    >
      {/* Active atmosphere */}
      <div
        className={`
          pointer-events-none absolute -right-20 -top-20
          h-44 w-44 rounded-full bg-[#8973C5]
          blur-[70px] transition-all duration-700
          ${
            isOpen
              ? "scale-100 opacity-[0.10]"
              : "scale-75 opacity-0 group-hover:opacity-[0.04]"
          }
        `}
      />

      {/* Top reflection */}
      <div
        className={`
          pointer-events-none absolute left-[16%] right-[16%] top-0
          h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent
          transition-opacity duration-500
          ${isOpen ? "opacity-100" : "opacity-30"}
        `}
      />

      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="
          relative z-10 flex w-full
          items-center justify-between gap-5
          px-5 py-[18px] text-left sm:px-6
        "
      >
        <div className="flex min-w-0 items-center gap-4">
          <span
            className={`
              hidden w-6 shrink-0
              text-[8px] font-bold tracking-[0.18em]
              transition-colors duration-300 sm:block
              ${isOpen ? "text-[#9984D6]" : "text-[#42424A]"}
            `}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className={`
              text-[14px] font-bold leading-[1.5]
              tracking-[-0.012em]
              transition-colors duration-300 sm:text-[15px]
              ${
                isOpen
                  ? "text-[#F0F0F2]"
                  : "text-[#A3A3AC] group-hover:text-[#D7D7DC]"
              }
            `}
          >
            {faq.q}
          </span>
        </div>

        {/* Plus control */}
        <div
          className={`
            relative flex h-9 w-9 shrink-0
            items-center justify-center rounded-full border
            transition-all duration-500
            ${
              isOpen
                ? "rotate-45 border-[#917DCE]/40 bg-[#917DCE]/15 text-[#B4A3E6] shadow-[0_0_25px_rgba(145,125,206,.12)]"
                : "border-white/[0.07] bg-white/[0.025] text-[#666670] group-hover:border-white/[0.12] group-hover:bg-white/[0.045] group-hover:text-[#AAAAB3]"
            }
          `}
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
              strokeWidth={2}
              d="M12 5v14M5 12h14"
            />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`
          relative z-10 grid
          transition-all duration-500 ease-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1 sm:pb-6 sm:pl-16 sm:pr-16">
            

            <p className="max-w-2xl text-[12px] leading-[1.85] text-[#74747E] sm:text-[13px]">
              {faq.a}
            </p>
          </div>
        </div>
      </div>

      {/* Active bottom glow */}
      <div
        className={`
          pointer-events-none absolute bottom-0 left-1/2
          h-px -translate-x-1/2
          bg-gradient-to-r from-transparent via-[#9882D4] to-transparent
          transition-all duration-700
          ${
            isOpen
              ? "w-[42%] opacity-60"
              : "w-0 opacity-0"
          }
        `}
      />
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="
        relative overflow-hidden bg-[#050505]
        pb-11 pt-7
        sm:pb-12 sm:pt-8
        lg:pb-13 lg:pt-9
      "
    >
      {/* Section boundary */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-[-110px] h-[400px] w-[400px] rounded-full bg-[#526EAE]/[0.035] blur-[145px]" />

        <div className="absolute -right-44 bottom-[-130px] h-[410px] w-[410px] rounded-full bg-[#896FB5]/[0.035] blur-[145px]" />

        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.055) 1px, transparent 0)",
            backgroundSize: "34px 34px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
{/* Left */}
<div className="text-center lg:sticky lg:top-28 lg:text-left">
  <div>
    <p className="section-label text-[#9186B3]">
      Frequently Asked Questions
    </p>
  </div>

  <h2 className="section-title mt-2.5 text-[#F3F3F5]">
    Have questions

    <span className="mt-1 block bg-gradient-to-r from-white via-[#BBB2DA] to-[#9279C9] bg-clip-text text-transparent">
      before getting started?
    </span>
  </h2>

  <p className="section-description mx-auto mt-4 max-w-md text-[#74747E] lg:mx-0">
    Find answers about Minivel ATS, from everyday use and onboarding
    to integrations, data security and platform features.
  </p>

            {/* Contact card */}
            <div
              className="
                group relative mx-auto mt-6 max-w-md
                overflow-hidden rounded-[20px]
                border border-white/[0.06]
                bg-[#0A0A0D]
                p-5 text-left
                shadow-[0_18px_50px_rgba(0,0,0,.28)]
                transition-all duration-500
                hover:border-white/[0.10]
                hover:bg-[#0D0D10]
                lg:mx-0
              "
            >
              <div className="absolute left-[15%] right-[15%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#8871BD]/[0.07] blur-[50px] transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#575761]">
                  Still have a question?
                </p>

                <p className="mt-2 text-[12px] leading-6 text-[#74747E]">
                  Speak with the Minivel team about your recruitment workflow
                  or platform requirements.
                </p>

                <a
                  href="#contact"
                  className="
                    group/link mt-4 inline-flex
                    items-center gap-2
                    text-[11px] font-bold
                    text-[#A08BD9]
                    transition-colors
                    hover:text-[#C1B2E8]
                  "
                >
                  Talk to the Minivel team

                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <FAQItem
                key={faq.q}
                faq={faq}
                index={idx}
                isOpen={openIndex === idx}
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}