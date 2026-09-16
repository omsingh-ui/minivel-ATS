import { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 12h10m-4-4 4 4-4 4" />
    </svg>
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
          {/* Soft background detail */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[#A7D44C]/[0.08] blur-[120px]" />

            <div className="absolute -left-40 bottom-[-120px] h-[380px] w-[380px] rounded-full bg-[#9B86D2]/[0.06] blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-[1180px]">
            <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#F7F7F5] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#66783E]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C]" />
                  Minivel ATS
                </div>

                <h1 className="mt-7 max-w-[850px] text-[50px] font-bold leading-[0.97] tracking-[-0.055em] text-[#171719] sm:text-[68px] lg:text-[82px]">
                  Everything hiring teams need.
                  <span className="text-[#708B3D]">
                    {" "}
                    Nothing they don't.
                  </span>
                </h1>

                <p className="mt-8 max-w-[650px] text-[15px] leading-[1.8] text-[#737378] sm:text-[16px]">
                  Minivel ATS brings the essential parts of recruitment into
                  one connected system — helping teams discover talent,
                  understand candidates, collaborate on decisions, and keep
                  hiring moving.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/request-demo"
                    className="group inline-flex h-[48px] items-center justify-center gap-2.5 rounded-[12px] bg-[#171719] px-6 text-[11px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#252528] hover:shadow-[0_16px_40px_rgba(0,0,0,.12)]"
                  >
                    Book a demo
                    <ArrowIcon />
                  </Link>

                  <a
                    href="#feature-overview"
                    className="inline-flex h-[48px] items-center justify-center rounded-[12px] border border-black/[0.09] bg-white px-6 text-[11px] font-semibold text-[#55555A] transition-all duration-300 hover:border-black/[0.16] hover:bg-[#F7F7F5] hover:text-[#171719]"
                  >
                    Explore features
                  </a>
                </div>
              </div>

              {/* Right product signal */}
              <div className="relative hidden lg:block">
                <div className="relative ml-auto max-w-[390px] overflow-hidden rounded-[26px] border border-black/[0.07] bg-[#F5F5F2] p-5 shadow-[0_30px_80px_rgba(0,0,0,.08)]">
                  {/* Browser-style top */}
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#D7D7D3]" />
                      <span className="h-2 w-2 rounded-full bg-[#D7D7D3]" />
                      <span className="h-2 w-2 rounded-full bg-[#D7D7D3]" />
                    </div>

                    <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#9A9A9D]">
                      Minivel ATS
                    </span>
                  </div>

                  {/* Product content */}
                  <div className="pt-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#99999D]">
                          Recruitment
                        </p>

                        <p className="mt-1 text-[17px] font-bold tracking-[-0.03em] text-[#202023]">
                          Hiring overview
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-white shadow-[0_8px_20px_rgba(0,0,0,.05)]">
                        <span className="h-2 w-2 rounded-full bg-[#A7D44C]" />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-[15px] border border-black/[0.06] bg-white p-4">
                        <p className="text-[8px] uppercase tracking-[0.12em] text-[#A0A0A3]">
                          Candidates
                        </p>

                        <p className="mt-3 text-[22px] font-bold tracking-[-0.04em] text-[#202023]">
                          248
                        </p>

                        <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#EEEEEB]">
                          <div className="h-full w-[72%] rounded-full bg-[#A7D44C]" />
                        </div>
                      </div>

                      <div className="rounded-[15px] border border-black/[0.06] bg-white p-4">
                        <p className="text-[8px] uppercase tracking-[0.12em] text-[#A0A0A3]">
                          Active roles
                        </p>

                        <p className="mt-3 text-[22px] font-bold tracking-[-0.04em] text-[#202023]">
                          32
                        </p>

                        <div className="mt-3 flex items-end gap-1">
                          {[3, 5, 4, 7, 6, 9, 8].map((height, index) => (
                            <span
                              key={index}
                              className="w-[5px] rounded-full bg-[#9B86D2]"
                              style={{ height: `${height * 2}px` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 rounded-[15px] border border-black/[0.06] bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#99999D]">
                          Hiring activity
                        </span>

                        <span className="text-[8px] font-semibold text-[#778A50]">
                          Live
                        </span>
                      </div>

                      <div className="mt-5 space-y-3">
                        {[
                          ["AI Screening", "Active"],
                          ["Candidate Review", "12 pending"],
                          ["Team Feedback", "Updated"],
                        ].map(([title, status]) => (
                          <div
                            key={title}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C]" />
                              <span className="text-[10px] font-semibold text-[#55555A]">
                                {title}
                              </span>
                            </div>

                            <span className="text-[9px] text-[#9A9A9E]">
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small floating label */}
                <div className="absolute -bottom-5 -left-5 rounded-[14px] border border-black/[0.07] bg-white px-4 py-3 shadow-[0_16px_35px_rgba(0,0,0,.08)]">
                  <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#9A9A9E]">
                    Built around your workflow
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A7D44C]" />
                    <span className="text-[10px] font-semibold text-[#303034]">
                      One connected system
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom statement */}
            <div className="mt-20 border-t border-black/[0.07] pt-7 sm:mt-24">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[580px] text-[12px] leading-[1.7] text-[#858589]">
                  Five core capabilities. One recruitment environment. Built
                  to keep people, information, and decisions connected.
                </p>

                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#A0A0A4]">
                  01 — 05
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Temporary next section */}
        <section
          id="feature-overview"
          className="bg-[#F4F4F1] px-5 py-24 sm:px-7 lg:px-10 lg:py-32 xl:px-12"
        >
          <div className="mx-auto max-w-[1180px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#85858A]">
              Feature overview
            </p>

            <h2 className="mt-5 max-w-[720px] text-[40px] font-bold leading-[1.02] tracking-[-0.045em] text-[#171719] sm:text-[52px]">
              Five capabilities. One connected hiring experience.
            </h2>

            <p className="mt-6 max-w-[620px] text-[14px] leading-[1.8] text-[#737378]">
              This is where we'll build the detailed feature experience,
              section by section.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}