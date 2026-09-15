import { useState } from "react";
import useReveal from "../hooks/useReveal";

const FAQS = [
  {
    q: "What makes Minivel ATS different from other applicant tracking systems?",
    a:
      "Minivel ATS is designed around recruitment and staffing workflows, helping teams keep candidate information, pipelines, communication and hiring activity connected in one place.",
  },
  {
    q: "How does candidate screening work?",
    a:
      "Candidate information can be reviewed against role requirements, including relevant skills, experience and profile context, helping recruiters identify suitable candidates while keeping human judgement at the centre of the decision.",
  },
  {
    q: "Is my candidate and client data secure?",
    a:
      "Minivel ATS is designed around secure handling of candidate and client information, including protected access, encryption and responsible data management. Specific certifications and compliance commitments should reflect Minivel's currently verified security policies.",
  },
  {
    q: "What does the onboarding process look like?",
    a:
      "Onboarding helps teams configure recruitment workflows, organise existing candidate information, connect relevant tools and understand how to use the platform effectively.",
  },
  {
    q: "How does pricing work?",
    a:
      "Pricing can be structured around the size and requirements of your recruitment team. Final plans, included features, billing terms and enterprise requirements depend on Minivel's current commercial offering.",
  },
  {
    q: "Can I import my existing candidate database?",
    a:
      "Minivel ATS is designed to support the transition of existing candidate information into a more organised recruitment environment. Available migration methods and supported platforms depend on the final product configuration.",
  },
  {
    q: "Does Minivel ATS work with other recruitment tools?",
    a:
      "The platform is designed around connected recruitment workflows, allowing relevant sourcing, communication, productivity and hiring tools to work alongside the ATS. Specific integrations should reflect those currently supported by Minivel.",
  },
];

function FAQItem({ faq, isOpen, onClick, index }) {
  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-[18px] border
        transition-all duration-400 ease-out

        ${
          isOpen
            ? `
                border-[#29252F]/[0.11]
                bg-white
                shadow-[0_14px_40px_rgba(31,28,40,.065)]
              `
            : `
                border-[#29252F]/[0.065]
                bg-white/70
                hover:border-[#29252F]/[0.10]
                hover:bg-white
              `
        }
      `}
    >
      {/* subtle active atmosphere */}
      <div
        className={`
          pointer-events-none
          absolute -right-20 -top-20
          h-44 w-44
          rounded-full
          bg-[#8068B0]
          blur-[75px]
          transition-opacity duration-500

          ${
            isOpen
              ? "opacity-[0.055]"
              : "opacity-0"
          }
        `}
      />

      {/* top reflection */}
      <div
        className={`
          pointer-events-none
          absolute left-[18%] right-[18%] top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#4C435B]/[0.14]
          to-transparent
          transition-opacity duration-500

          ${
            isOpen
              ? "opacity-100"
              : "opacity-0"
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
          items-center justify-between
          gap-5
          px-5 py-[18px]
          text-left
          sm:px-6 sm:py-5
        "
      >
        <div className="flex min-w-0 items-center gap-4">
          {/* number */}
          <span
            className={`
              hidden w-6 shrink-0
              text-[8px] font-bold
              tracking-[0.16em]
              transition-colors duration-300
              sm:block

              ${
                isOpen
                  ? "text-[#76629E]"
                  : "text-[#B1B1B7]"
              }
            `}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* question */}
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
                  ? "text-[#24242B]"
                  : "text-[#55555F] group-hover:text-[#292930]"
              }
            `}
          >
            {faq.q}
          </span>
        </div>

        {/* plus */}
        <div
          className={`
            relative flex
            h-9 w-9 shrink-0
            items-center justify-center
            rounded-full border
            transition-all duration-400

            ${
              isOpen
                ? `
                    rotate-45
                    border-[#7865A4]/25
                    bg-[#7865A4]/[0.08]
                    text-[#705C9C]
                  `
                : `
                    border-[#292932]/[0.08]
                    bg-[#F8F8F9]
                    text-[#777781]
                    group-hover:border-[#292932]/[0.13]
                    group-hover:text-[#45454E]
                  `
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
              strokeWidth={1.8}
              d="M12 5v14M5 12h14"
            />
          </svg>
        </div>
      </button>

      {/* answer */}
      <div
        className={`
          relative z-10
          grid
          transition-all duration-500
          ease-[cubic-bezier(.22,1,.36,1)]

          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              px-5 pb-5 pt-0
              sm:pb-6 sm:pl-16 sm:pr-16
            "
          >
            <div className="mb-4 h-px w-full bg-[#25252D]/[0.055]" />

            <p
              className="
                max-w-2xl
                text-[12px]
                leading-[1.85]
                text-[#74747E]
                sm:text-[13px]
              "
            >
              {faq.a}
            </p>
          </div>
        </div>
      </div>

      {/* active accent */}
      <div
        className={`
          pointer-events-none
          absolute bottom-0 left-1/2
          h-px -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#7965A5]
          to-transparent
          transition-all duration-700

          ${
            isOpen
              ? "w-[36%] opacity-45"
              : "w-0 opacity-0"
          }
        `}
      />
    </div>
  );
}

export default function FAQ() {
  const revealRef = useReveal();

  // Important: nothing open when page loads.
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      ref={revealRef}
      id="faq"
      className="
        reveal-section
        relative overflow-hidden
        bg-[#FAFAFB]
        pb-16 pt-14
        sm:pb-18 sm:pt-16
        lg:pb-20 lg:pt-12
      "
    >
      {/* top boundary */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#25252D]/[0.07]
          to-transparent
        "
      />

      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-44 top-[-100px]
            h-[400px] w-[400px]
            rounded-full
            bg-[#526EAE]/[0.03]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-44 bottom-[-130px]
            h-[410px] w-[410px]
            rounded-full
            bg-[#896FB5]/[0.03]
            blur-[150px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(35,35,45,.07) 1px, transparent 0)",
            backgroundSize: "35px 35px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />
      </div>

      <div
        className="
          relative mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid items-start
            gap-10
            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-14
          "
        >
          {/* LEFT */}
          <div
            className="
              text-center
              lg:sticky lg:top-28
              lg:text-left
            "
          >
            {/* NO SMALL SECTION LABEL */}

            <h2 className="section-title lg:mx-0 lg:text-left">
              Have questions
              <span
                className="
                  mt-1 block
                  bg-gradient-to-r
                  from-[#25232A]
                  via-[#55496F]
                  to-[#66528F]
                  bg-clip-text
                  text-transparent
                "
              >
                before getting started?
              </span>
            </h2>

           <p
  className="
    section-description
    mt-4
    lg:mx-0
  "
>
              Find answers about Minivel ATS, from everyday use and
              onboarding to integrations, data security and platform
              capabilities.
            </p>

            {/* CONTACT PANEL */}
            <div
              className="
                relative
                mx-auto mt-7
                max-w-md
                overflow-hidden
                rounded-[20px]
                border border-[#29252F]/[0.075]
                bg-white
                p-5
                text-left
                shadow-[0_12px_36px_rgba(31,28,40,.05)]
                lg:mx-0
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute left-[15%] right-[15%] top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#544B61]/[0.14]
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute -right-16 -top-16
                  h-36 w-36
                  rounded-full
                  bg-[#8871BD]/[0.055]
                  blur-[55px]
                "
              />

              <div className="relative">
                {/* This is card content, not a section eyebrow */}
                <p
                  className="
                    text-[12px]
                    font-bold
                    tracking-[-0.01em]
                    text-[#292930]
                  "
                >
                  Need more information?
                </p>

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-[1.7]
                    text-[#74747E]
                  "
                >
                  Speak with the Minivel team about your recruitment
                  workflow or platform requirements.
                </p>

                <a
                  href="#contact"
                  className="
                    group/link
                    mt-4 inline-flex
                    items-center gap-2
                    text-[11px]
                    font-bold
                    text-[#705B9D]
                    transition-colors
                    hover:text-[#55437E]
                  "
                >
                  Talk to the Minivel team

                  <svg
                    className="
                      h-3.5 w-3.5
                      transition-transform duration-300
                      group-hover/link:translate-x-1
                    "
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

          {/* RIGHT — ACCORDION */}
          <div className="space-y-2.5">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={faq.q}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* bottom boundary */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#25252D]/[0.065]
          to-transparent
        "
      />
    </section>
  );
}