import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

export default function CTA() {
  const revealRef = useReveal();
  return (
  <section
  ref={revealRef}
  className="
    reveal-section
    relative overflow-hidden
        bg-[#050505]
        pb-10 pt-7
        sm:pb-11 sm:pt-8
        lg:pb-12 lg:pt-9
      "
    >
      {/* Section boundary */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            group relative overflow-hidden
            rounded-[30px]
            border border-white/[0.075]
            bg-[#09090C]
            px-6 py-12
            text-center
            shadow-[0_35px_100px_rgba(0,0,0,0.55)]
            sm:px-10 sm:py-14
            lg:px-16 lg:py-16
          "
        >
          {/* Base depth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-[#8E73C4]/[0.025]" />

          {/* Left atmosphere */}
          <div
            className="
              pointer-events-none absolute
              -left-32 -top-32
              h-[350px] w-[350px]
              rounded-full
              bg-[#5575BE]/[0.10]
              blur-[120px]
              transition-all duration-1000
              group-hover:scale-125
              group-hover:bg-[#5575BE]/[0.14]
            "
          />

          {/* Right atmosphere */}
          <div
            className="
              pointer-events-none absolute
              -bottom-40 -right-28
              h-[390px] w-[390px]
              rounded-full
              bg-[#9172C5]/[0.10]
              blur-[125px]
              transition-all duration-1000
              group-hover:scale-125
              group-hover:bg-[#9172C5]/[0.14]
            "
          />

          {/* Central glow */}
          <div
            className="
              pointer-events-none absolute
              left-1/2 top-[45%]
              h-[250px] w-[520px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-[#8974BC]/[0.055]
              blur-[110px]
            "
          />

          {/* Dot matrix */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,.08) 1px, transparent 0)",
              backgroundSize: "30px 30px",
              maskImage:
                "radial-gradient(circle at center, black 0%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 0%, transparent 72%)",
            }}
          />

          {/* Top reflection */}
          <div
            className="
              pointer-events-none absolute
              left-1/2 top-0
              h-px w-[64%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-white/[0.20]
              to-transparent
            "
          />

          {/* Side edge details */}
          <div className="pointer-events-none absolute left-0 top-[28%] h-[44%] w-px bg-gradient-to-b from-transparent via-[#7694DB]/30 to-transparent" />

          <div className="pointer-events-none absolute right-0 top-[28%] h-[44%] w-px bg-gradient-to-b from-transparent via-[#9D82D4]/30 to-transparent" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
          
          {/* Eyebrow */}
<div className="mb-3">
  <p className="section-label text-[#A08FD0]">
    Built for Recruitment Teams
  </p>
</div>

{/* Heading */}
<h2 className="section-title text-[#F4F4F5]">
  Make hiring simpler,

  <span
    className="
      mt-1 block
      bg-gradient-to-r
      from-white
      via-[#BDB4DC]
      to-[#957ACB]
      bg-clip-text
      text-transparent
    "
  >
    from start to finish.
  </span>
</h2>

{/* Description */}
<p className="section-description mx-auto mt-5 max-w-2xl text-[#74747E]">
  Give your team one place to source candidates, review applications,
  manage hiring and keep every step of the recruitment process organised.
</p>
            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {/* Primary */}
              <a
                href="#contact"
                className="
                  group/button relative
                  inline-flex min-w-[190px]
                  items-center justify-center gap-2
                  overflow-hidden rounded-[12px]
                  bg-[#F3F3F5]
                  px-7 py-3.5
                  text-[12px] font-bold
                  text-[#111116]
                  shadow-[0_12px_35px_rgba(0,0,0,0.30)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)]
                "
              >
                {/* Button sheen */}
                <span
                  className="
                    absolute -left-[80%] top-0
                    h-full w-[45%]
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent via-white/70 to-transparent
                    transition-all duration-700
                    group-hover/button:left-[130%]
                  "
                />

                <span className="relative">Get Started</span>

                <svg
                  className="
                    relative h-4 w-4
                    transition-transform duration-300
                    group-hover/button:translate-x-1
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.3}
                    d="M17 8l4 4m0 0-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Secondary */}
              <Link
  to="/request-demo"
  className="
    group/demo
    inline-flex min-w-[165px]
    items-center justify-center gap-2
    rounded-[12px]
    border border-white/[0.10]
    bg-white/[0.035]
    px-7 py-3.5
    text-[12px] font-semibold
    text-[#D8D8DD]
    backdrop-blur-xl
    transition-all duration-300
    hover:-translate-y-1
    hover:border-white/[0.18]
    hover:bg-white/[0.07]
    hover:text-white
  "
>
  Request a Demo

  <svg
    className="
      h-4 w-4
      text-[#85858F]
      transition-all duration-300
      group-hover/demo:translate-x-1
      group-hover/demo:text-[#B6A5E2]
    "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 18l6-6-6-6"
    />
  </svg>
</Link>
            </div>

            {/* Confidence row */}
            <div
              className="
                mt-7 flex flex-wrap
                items-center justify-center
                gap-x-6 gap-y-2.5
                text-[10px] font-medium
                tracking-[0.01em]
                text-[#696973]
                sm:text-[11px]
              "
            >
              {[
                "Simple onboarding",
                "Fits your recruitment process",
                "Support when you need it",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span
                    className="
                      flex h-4 w-4
                      items-center justify-center
                      rounded-full
                      border border-[#9B86D2]/20
                      bg-[#9B86D2]/[0.07]
                    "
                  >
                    <svg
                      className="h-2.5 w-2.5 text-[#A58FDC]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.4}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>

                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom light */}
          <div
            className="
              pointer-events-none absolute
              bottom-0 left-1/2
              h-px w-[45%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#947BCB]/50
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}