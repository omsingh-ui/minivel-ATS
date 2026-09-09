export default function CTA() {
  return (
    <section className="relative bg-white pt-5 pb-8 sm:pt-6 sm:pb-9 lg:pt-7 lg:pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            group relative overflow-hidden
            rounded-[28px]
            border border-[#DCE2EA]
            bg-[#18263A]
            px-6 py-12
            text-center
            shadow-[0_24px_70px_rgba(30,44,63,0.14)]
            sm:px-10 sm:py-14
            lg:px-16 lg:py-16
          "
        >
          {/* Premium background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#172538] via-[#263A55] to-[#514A62]" />

          <div
            className="
              absolute
              -left-32 -top-32
              h-[340px] w-[340px]
              rounded-full
              bg-[#7794BC]/25
              blur-[110px]
              transition-all duration-1000
              group-hover:scale-125
              group-hover:bg-[#7794BC]/35
            "
          />

          <div
            className="
              absolute
              -bottom-40 -right-24
              h-[380px] w-[380px]
              rounded-full
              bg-[#B29A7D]/20
              blur-[120px]
              transition-all duration-1000
              group-hover:scale-125
              group-hover:bg-[#B29A7D]/28
            "
          />

          <div
            className="
              absolute
              left-1/2 top-1/2
              h-[300px] w-[460px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-[#817C9F]/15
              blur-[120px]
            "
          />

          {/* Fine texture */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.55) 0.7px, transparent 0.7px)',
              backgroundSize: '27px 27px',
            }}
          />

          {/* Soft top light */}
          <div
            className="
              absolute
              left-1/2 top-0
              h-px w-[65%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-white/50
              to-transparent
            "
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">

            {/* Eyebrow */}
            <div
              className="
                mb-5 inline-flex items-center gap-2.5
                rounded-full
                border border-white/15
                bg-white/[0.07]
                px-4 py-2
                text-[10px]
                font-bold uppercase
                tracking-[0.2em]
                text-[#D9E1EC]
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D6C1A3] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D6C1A3]" />
              </span>

              Built for modern recruitment teams
            </div>

            {/* Heading */}
            <h2
              className="
                text-[32px]
                font-extrabold
                leading-[1.05]
                tracking-[-0.045em]
                text-white
                sm:text-[42px]
                lg:text-[52px]
              "
            >
              Turn better hiring into
              <span
                className="
                  mt-1 block
                  bg-gradient-to-r
                  from-[#DDE8F6]
                  via-[#C9C3DB]
                  to-[#E4CBAA]
                  bg-clip-text
                  text-transparent
                "
              >
                your competitive advantage.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto mt-5
                max-w-2xl
                text-[14px]
                leading-7
                text-[#B9C4D2]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Bring sourcing, screening, candidate management and recruitment
              intelligence into one connected workspace built to help your
              team move with greater clarity and speed.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              {/* Primary */}
              <a
                href="#"
                className="
                  group/button
                  relative
                  inline-flex min-w-[190px]
                  items-center justify-center gap-2
                  overflow-hidden
                  rounded-xl
                  bg-white
                  px-7 py-3.5
                  text-[13px]
                  font-bold
                  text-[#243953]
                  shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                "
              >
                <span
                  className="
                    absolute inset-0
                    translate-y-full
                    bg-gradient-to-r
                    from-[#EAF0F7]
                    to-[#F3ECE4]
                    transition-transform duration-300
                    group-hover/button:translate-y-0
                  "
                />

                <span className="relative">
                  Start Your Free Trial
                </span>

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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Secondary */}
              <a
                href="#"
                className="
                  group/demo
                  inline-flex min-w-[165px]
                  items-center justify-center gap-2
                  rounded-xl
                  border border-white/20
                  bg-white/[0.07]
                  px-7 py-3.5
                  text-[13px]
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/35
                  hover:bg-white/[0.12]
                "
              >
                Book a Demo

                <svg
                  className="
                    h-4 w-4
                    text-[#C6D2E1]
                    transition-transform duration-300
                    group-hover/demo:translate-x-1
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
              </a>
            </div>

            {/* Confidence line */}
<div
  className="
    mt-7
    flex flex-wrap
    items-center justify-center
    gap-x-6 gap-y-2.5
    text-[11px]
    font-medium
    tracking-[0.01em]
    text-[#AAB8C8]
    sm:text-[12px]
  "
>
  <span className="flex items-center gap-2">
    <svg
      className="h-3.5 w-3.5 text-[#D2BB98]"
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
    Guided onboarding
  </span>

  <span className="flex items-center gap-2">
    <svg
      className="h-3.5 w-3.5 text-[#D2BB98]"
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
    Built around your workflow
  </span>

  <span className="flex items-center gap-2">
    <svg
      className="h-3.5 w-3.5 text-[#D2BB98]"
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
    Support when you need it
  </span>
</div>
          </div>

          {/* Corner detail */}
          <div className="pointer-events-none absolute bottom-5 right-6 hidden items-center gap-2 lg:flex">
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/25">
              Minivel ATS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}