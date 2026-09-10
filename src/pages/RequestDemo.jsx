import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend-only success state.
    // Senior developer can connect the real submission later.
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#5876BB]/[0.08] blur-[150px]" />

        <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#8B6FB7]/[0.08] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      {/* Top bar */}
      <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="
            group inline-flex items-center gap-2
            text-[11px] font-semibold
            text-[#85858F]
            transition-colors duration-300
            hover:text-white
          "
        >
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M19 12H5m6-6-6 6 6 6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          Back to Minivel ATS
        </Link>

        <span className="text-[9px] font-medium text-[#666670]">
          Demo requests
        </span>
      </div>

      {/* Page content */}
      <div
  className="
    relative z-10 mx-auto
    grid
    max-w-7xl
    items-start
    gap-12
    px-4 pb-16 pt-8
    sm:px-6 sm:pb-20 sm:pt-10
    lg:grid-cols-[0.9fr_1.1fr]
    lg:gap-16
    lg:px-8 lg:pb-20 lg:pt-10
  "
>
        {/* Left */}
        <div className="max-w-xl">
          <p className="section-label text-[#9B8CC2]">
            Request a Demo
          </p>

          <h1 className="section-title mt-3 text-[#F5F5F7]">
            See how Minivel ATS

            <span
              className="
                mt-1 block
                bg-gradient-to-r
                from-white
                via-[#C1B5EC]
                to-[#9874D6]
                bg-clip-text
                text-transparent
              "
            >
              works for your team.
            </span>
          </h1>

          <p className="section-description mt-5 max-w-lg text-[#8A8A95]">
            Share a few details about your recruitment process and we’ll show
            you the parts of Minivel ATS that are most relevant to your team.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Walk through the platform with your recruitment process in mind",
              "See how sourcing, screening and candidate management work together",
              "Discuss the way your team currently manages hiring",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-[#A0A0AA]"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#9B86D2]/20 bg-[#9B86D2]/[0.07]">
                  <svg
                    className="h-3 w-3 text-[#A58FDC]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 border-t border-white/[0.06] pt-6">
            <p className="max-w-md text-[11px] leading-6 text-[#666670]">
              No generic walkthrough. The conversation can focus on the way
              your team actually recruits.
            </p>
          </div>
        </div>

        {/* Form card */}
        <div className="relative">
          <div
            className="
              relative overflow-hidden
              rounded-[28px]
              border border-white/[0.07]
              bg-[#0A0A0D]
              p-6
              shadow-[0_35px_100px_rgba(0,0,0,0.55)]
              sm:p-8
            "
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#8B73C8]/[0.08] blur-[70px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#5876BB]/[0.045] blur-[80px]" />

            <div className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.16] to-transparent" />

            <div className="relative">
              {!submitted ? (
                <>
                  {/* Form header */}
                  <div className="mb-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8D7BC2]">
                      Your Details
                    </p>

                    <h2 className="mt-2.5 text-[24px] font-bold tracking-[-0.03em] text-[#F3F3F5]">
                      Tell us about your recruitment needs
                    </h2>

                    <p className="mt-2 text-[13px] leading-6 text-[#74747E]">
                      We’ll use this information to make the demo relevant to
                      your team.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="mb-2 block text-[11px] font-semibold text-[#9A9AA3]"
                        >
                          Full Name
                        </label>

                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your name"
                          className="
                            w-full rounded-xl
                            border border-white/[0.07]
                            bg-[#111115]
                            px-4 py-3
                            text-sm text-white
                            outline-none
                            placeholder:text-[#505058]
                            transition-all duration-300
                            focus:border-[#967FD0]/50
                            focus:bg-[#141419]
                            focus:ring-2
                            focus:ring-[#967FD0]/10
                          "
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-[11px] font-semibold text-[#9A9AA3]"
                        >
                          Work Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="name@company.com"
                          className="
                            w-full rounded-xl
                            border border-white/[0.07]
                            bg-[#111115]
                            px-4 py-3
                            text-sm text-white
                            outline-none
                            placeholder:text-[#505058]
                            transition-all duration-300
                            focus:border-[#967FD0]/50
                            focus:bg-[#141419]
                            focus:ring-2
                            focus:ring-[#967FD0]/10
                          "
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-[11px] font-semibold text-[#9A9AA3]"
                        >
                          Company
                        </label>

                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          autoComplete="organization"
                          placeholder="Company name"
                          className="
                            w-full rounded-xl
                            border border-white/[0.07]
                            bg-[#111115]
                            px-4 py-3
                            text-sm text-white
                            outline-none
                            placeholder:text-[#505058]
                            transition-all duration-300
                            focus:border-[#967FD0]/50
                            focus:bg-[#141419]
                            focus:ring-2
                            focus:ring-[#967FD0]/10
                          "
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-[11px] font-semibold text-[#9A9AA3]"
                        >
                          Phone
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91"
                          className="
                            w-full rounded-xl
                            border border-white/[0.07]
                            bg-[#111115]
                            px-4 py-3
                            text-sm text-white
                            outline-none
                            placeholder:text-[#505058]
                            transition-all duration-300
                            focus:border-[#967FD0]/50
                            focus:bg-[#141419]
                            focus:ring-2
                            focus:ring-[#967FD0]/10
                          "
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="teamSize"
                        className="mb-2 block text-[11px] font-semibold text-[#9A9AA3]"
                      >
                        Recruitment Team Size
                      </label>

                      <select
                        id="teamSize"
                        name="teamSize"
                        required
                        defaultValue=""
                        className="
                          w-full rounded-xl
                          border border-white/[0.07]
                          bg-[#111115]
                          px-4 py-3
                          text-sm text-[#D8D8DD]
                          outline-none
                          transition-all duration-300
                          focus:border-[#967FD0]/50
                          focus:bg-[#141419]
                          focus:ring-2
                          focus:ring-[#967FD0]/10
                        "
                      >
                        <option value="" disabled>
                          Select team size
                        </option>

                        <option value="1-10">1–10</option>
                        <option value="11-25">11–25</option>
                        <option value="26-50">26–50</option>
                        <option value="51-100">51–100</option>
                        <option value="100+">100+</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="focusArea"
                        className="mb-2 block text-[11px] font-semibold text-[#9A9AA3]"
                      >
                        What would you like to improve?
                      </label>

                      <select
                        id="focusArea"
                        name="focusArea"
                        required
                        defaultValue=""
                        className="
                          w-full rounded-xl
                          border border-white/[0.07]
                          bg-[#111115]
                          px-4 py-3
                          text-sm text-[#D8D8DD]
                          outline-none
                          transition-all duration-300
                          focus:border-[#967FD0]/50
                          focus:bg-[#141419]
                          focus:ring-2
                          focus:ring-[#967FD0]/10
                        "
                      >
                        <option value="" disabled>
                          Select a focus area
                        </option>

                        <option value="sourcing">
                          Candidate sourcing
                        </option>

                        <option value="screening">
                          Candidate screening
                        </option>

                        <option value="pipeline">
                          Pipeline management
                        </option>

                        <option value="collaboration">
                          Recruitment collaboration
                        </option>

                        <option value="reporting">
                          Reporting and insights
                        </option>

                        <option value="workflow">
                          Overall recruitment workflow
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="details"
                        className="mb-2 block text-[11px] font-semibold text-[#9A9AA3]"
                      >
                        Anything else we should know?
                      </label>

                      <textarea
                        id="details"
                        name="details"
                        rows="4"
                        placeholder="Tell us about your current recruitment process..."
                        className="
                          w-full resize-none rounded-xl
                          border border-white/[0.07]
                          bg-[#111115]
                          px-4 py-3
                          text-sm text-white
                          outline-none
                          placeholder:text-[#505058]
                          transition-all duration-300
                          focus:border-[#967FD0]/50
                          focus:bg-[#141419]
                          focus:ring-2
                          focus:ring-[#967FD0]/10
                        "
                      />
                    </div>

                    <button
                      type="submit"
                      className="
                        group mt-2
                        inline-flex w-full
                        items-center justify-center gap-2
                        rounded-xl
                        bg-[#F3F3F5]
                        px-6 py-3.5
                        text-sm font-bold
                        text-[#111116]
                        shadow-[0_12px_35px_rgba(0,0,0,0.30)]
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:bg-white
                        hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#967FD0]/40
                      "
                    >
                      Request a Demo

                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M17 8l4 4m0 0-4 4m4-4H3"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <p className="text-center text-[10px] leading-5 text-[#55555E]">
                      We’ll only use these details to respond to your demo request.
                    </p>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#9B86D2]/20 bg-[#9B86D2]/[0.08]">
                    <svg
                      className="h-6 w-6 text-[#B3A1E6]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9186B3]">
                    Request Received
                  </p>

                  <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-[-0.04em] text-[#F3F3F5]">
                    Thanks for getting in touch.
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#74747E]">
                    The Minivel team can follow up with you to understand your
                    recruitment needs and arrange the right demo.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                    <Link
                      to="/"
                      className="
                        rounded-xl
                        bg-white
                        px-5 py-3
                        text-[11px] font-bold
                        text-black
                        transition-all duration-300
                        hover:-translate-y-0.5
                      "
                    >
                      Back to Minivel ATS
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="
                        px-3 py-3
                        text-[11px] font-semibold
                        text-[#A08BD9]
                        transition-colors
                        hover:text-[#C1B2E8]
                      "
                    >
                      Send another request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}