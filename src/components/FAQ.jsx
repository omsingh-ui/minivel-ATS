import { useState } from 'react';

const FAQS = [
  {
    q: 'What makes Minivel ATS different from other applicant tracking systems?',
    a: "Minivel ATS is built specifically for recruitment agencies and staffing teams — not internal HR departments. This means every feature is designed around your client relationships, candidate pipelines, and placement workflows. Our AI layer doesn't just parse resumes; it reasons about candidate fit, predicts placement success, and automates repetitive recruitment tasks.",
  },
  {
    q: 'How does the AI screening work?',
    a: 'Our AI engine analyzes resumes across skills, experience trajectory, role progression, and contextual information. It generates a fit score with a human-readable explanation so recruiters can understand the reasoning behind a shortlist rather than simply accepting an automated recommendation.',
  },
  {
    q: 'Is my candidate and client data secure?',
    a: 'Minivel ATS is designed around secure handling of candidate and client information, including protected access, encryption, and responsible data management. Specific certifications and compliance commitments should reflect Minivel’s currently verified security policies.',
  },
  {
    q: 'What does the onboarding process look like?',
    a: 'Onboarding is designed to help teams configure their recruitment workflows, organise existing candidate information, connect relevant tools, and understand how to use the platform effectively.',
  },
  {
    q: 'How does pricing work? Are there hidden fees?',
    a: 'Pricing can be structured around the size and requirements of your recruitment team. Final plans, included features, billing terms, and any enterprise requirements should reflect Minivel’s current commercial offering.',
  },
  {
    q: 'Can I import my existing candidate database?',
    a: 'Minivel ATS is designed to support the transition of existing candidate information into a more organised recruitment environment. Available migration methods and supported platforms depend on the final product configuration.',
  },
  {
    q: 'Does Minivel ATS integrate with job boards and LinkedIn?',
    a: 'The platform is designed around connected recruitment workflows, allowing relevant sourcing, communication, productivity, and hiring tools to work alongside the ATS. Specific integrations should reflect those currently supported by Minivel.',
  },
];

function FAQItem({ faq, isOpen, onClick, index }) {
  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-[20px]
        border
        transition-all duration-500 ease-out
        ${
          isOpen
            ? 'border-[#CBD6E4] bg-white shadow-[0_18px_50px_rgba(37,52,73,0.08)]'
            : 'border-[#E4E8ED] bg-white/65 hover:border-[#D4DCE6] hover:bg-white hover:shadow-[0_12px_35px_rgba(37,52,73,0.055)]'
        }
      `}
    >
      {/* Soft active atmosphere */}
      <div
        className={`
          pointer-events-none absolute
          -right-20 -top-20
          h-44 w-44
          rounded-full
          bg-[#9FB2CF]
          blur-[65px]
          transition-all duration-700
          ${
            isOpen
              ? 'scale-100 opacity-[0.10]'
              : 'scale-75 opacity-0 group-hover:opacity-[0.05]'
          }
        `}
      />

      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="
          relative z-10
          flex w-full
          items-center
          justify-between
          gap-5
          px-5 py-[18px]
          text-left
          sm:px-6
        "
      >
        <div className="flex min-w-0 items-center gap-4">
          <span
            className={`
              hidden w-6 shrink-0
              text-[9px] font-bold
              tracking-[0.16em]
              transition-colors duration-300
              sm:block
              ${isOpen ? 'text-[#6C83A5]' : 'text-[#B1BAC5]'}
            `}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <span
            className={`
              text-[14px]
              font-bold
              leading-[1.5]
              tracking-[-0.012em]
              transition-colors duration-300
              sm:text-[15px]
              ${
                isOpen
                  ? 'text-[#20334F]'
                  : 'text-[#33445A] group-hover:text-[#20334F]'
              }
            `}
          >
            {faq.q}
          </span>
        </div>

        {/* Plus / close control */}
        <div
          className={`
            relative flex
            h-9 w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all duration-500
            ${
              isOpen
                ? 'rotate-45 border-[#304B70] bg-[#304B70] text-white shadow-[0_7px_18px_rgba(48,75,112,0.20)]'
                : 'border-[#DCE3EB] bg-[#F6F8FA] text-[#6F7F93] group-hover:border-[#CAD5E2] group-hover:bg-white'
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
          relative z-10
          grid
          transition-all duration-500 ease-out
          ${
            isOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:pl-16 sm:pr-16 sm:pb-6">
            <p className="max-w-2xl text-[12px] leading-[1.85] text-[#6F7D8F] sm:text-[13px]">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="
        relative overflow-hidden
        bg-[#FAFAF8]
        pt-8 pb-9
        sm:pt-9 sm:pb-10
        lg:pt-10 lg:pb-11
      "
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-[-120px] h-[360px] w-[360px] rounded-full bg-[#AFC2DA]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-130px] h-[380px] w-[380px] rounded-full bg-[#C7B8A2]/10 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(58,76,100,0.12) 0.7px, transparent 0.7px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Desktop editorial layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">

          {/* Left content */}
          <div className="text-center lg:sticky lg:top-28 lg:text-left">
            <span
              className="
                mb-3 inline-flex
                rounded-full
                border border-[#DDE4EC]
                bg-white/75
                px-3.5 py-1.5
                text-[10px]
                font-bold uppercase
                tracking-[0.22em]
                text-[#657B99]
                shadow-[0_5px_18px_rgba(37,53,75,0.025)]
                backdrop-blur
              "
            >
              FAQ
            </span>

            <h2
              className="
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#17283F]
                sm:text-4xl
                lg:text-[44px]
              "
            >
              Questions before
              <span className="block bg-gradient-to-r from-[#526E98] via-[#777A9C] to-[#A2886D] bg-clip-text text-transparent">
                you get started?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-[14px] leading-7 text-[#718094] lg:mx-0">
              Clear answers about the platform, AI, security, onboarding and
              how Minivel fits into your recruitment workflow.
            </p>

            {/* Contact card */}
            <div
              className="
                mx-auto mt-6
                max-w-md
                rounded-[20px]
                border border-[#E0E5EB]
                bg-white/70
                p-5
                text-left
                shadow-[0_10px_35px_rgba(38,53,74,0.035)]
                backdrop-blur
                lg:mx-0
              "
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9AA5B2]">
                Still have a question?
              </p>

              <p className="mt-2 text-[13px] leading-6 text-[#667588]">
                Speak with the Minivel team about your recruitment workflow or
                platform requirements.
              </p>

              <a
                href="#"
                className="
                  group mt-4
                  inline-flex items-center gap-2
                  text-[12px] font-bold
                  text-[#45658F]
                  transition-colors
                  hover:text-[#263F62]
                "
              >
                Chat with our team

                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
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