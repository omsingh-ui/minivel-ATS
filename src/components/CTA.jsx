import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

export default function CTA() {
  const revealRef = useReveal();

  return (
    <>
      <section
        ref={revealRef}
        className="
          reveal-section
          relative overflow-hidden
          bg-white
          px-4 py-16
          sm:px-6 sm:py-20
          lg:px-8 lg:py-12
        "
      >
        {/* Section separator */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div
            className="
              cta-panel
              group relative isolate
              overflow-hidden
              rounded-[30px]
              border border-white/[0.09]
              bg-[#0C0C10]
              px-6 py-14
              shadow-[0_30px_90px_rgba(25,20,35,0.18)]
              sm:px-10 sm:py-16
              lg:px-16 lg:py-[76px]
            "
          >
            {/* =========================
                BACKGROUND
            ========================= */}

            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.025] via-transparent to-[#8C72BF]/[0.035]" />

            <div
              className="
                cta-orb cta-orb-left
                pointer-events-none absolute -z-10
                -left-36 -top-44
                h-[430px] w-[430px]
                rounded-full
                bg-[#5E7DCA]/[0.13]
                blur-[135px]
              "
            />

            <div
              className="
                cta-orb cta-orb-right
                pointer-events-none absolute -z-10
                -bottom-48 -right-36
                h-[450px] w-[450px]
                rounded-full
                bg-[#9173C6]/[0.14]
                blur-[140px]
              "
            />

            {/* Soft center illumination */}
            <div
              className="
                pointer-events-none absolute -z-10
                left-1/2 top-1/2
                h-[250px] w-[600px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-[#8E75BE]/[0.055]
                blur-[110px]
              "
            />

            {/* Subtle grid */}
            <div className="cta-grid pointer-events-none absolute inset-0 -z-10" />

            {/* Moving light */}
            <div className="cta-beam pointer-events-none absolute -z-10" />

            {/* Top reflection */}
            <div
              className="
                pointer-events-none absolute
                left-1/2 top-0
                h-px w-[58%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-white/[0.28]
                to-transparent
              "
            />

            {/* Edge accents */}
            <div className="pointer-events-none absolute left-0 top-[25%] h-1/2 w-px bg-gradient-to-b from-transparent via-[#7997DD]/35 to-transparent" />

            <div className="pointer-events-none absolute right-0 top-[25%] h-1/2 w-px bg-gradient-to-b from-transparent via-[#A086D2]/35 to-transparent" />

            {/* =========================
                CONTENT
            ========================= */}

            <div className="relative z-20 mx-auto max-w-[820px] text-center">
              {/* No eyebrow / small label */}

              <h2
                className="
                  text-[34px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.045em]
                  sm:text-[42px]
                  lg:text-[48px]
                "
                style={{ color: "#F7F7F8" }}
              >
                Make hiring simpler,
                <span
                  className="
                    mt-1.5 block
                    bg-gradient-to-r
                    from-[#FFFFFF]
                    via-[#D0C7E7]
                    to-[#A58BD7]
                    bg-clip-text
                    text-transparent
                  "
                >
                  from start to finish.
                </span>
              </h2>

              <p
                className="
                  mx-auto mt-5
                  max-w-[650px]
                  text-[13px]
                  font-normal
                  leading-[1.8]
                  sm:text-[14px]
                "
                style={{ color: "#9696A1" }}
              >
                Bring candidate sourcing, applications and hiring workflows
                together in one organised recruitment workspace built for
                modern teams.
              </p>

              {/* =========================
                  BUTTONS
              ========================= */}

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/request-demo"
                  className="
                    cta-primary
                    group/primary
                    relative
                    inline-flex
                    min-w-[190px]
                    items-center justify-center
                    gap-2
                    overflow-hidden
                    rounded-[12px]
                    bg-[#F7F7F8]
                    px-7 py-3.5
                    text-[12px]
                    font-bold
                    text-[#17171B]
                    shadow-[0_12px_32px_rgba(0,0,0,.28)]
                  "
                >
                  <span className="cta-primary-sheen" />

                  <span className="relative z-10">
                    Request a Demo
                  </span>

                  <svg
                    className="
                      relative z-10
                      h-4 w-4
                      transition-transform duration-300
                      group-hover/primary:translate-x-1
                    "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M5 12h14M14 7l5 5-5 5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <a
                  href="#features"
                  className="
                    group/features
                    inline-flex
                    min-w-[175px]
                    items-center justify-center
                    gap-2
                    rounded-[12px]
                    border border-white/[0.12]
                    bg-white/[0.04]
                    px-7 py-3.5
                    text-[12px]
                    font-semibold
                    text-[#D2D2D8]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-[2px]
                    hover:border-white/[0.20]
                    hover:bg-white/[0.075]
                    hover:text-white
                  "
                >
                  Explore Features

                  <svg
                    className="
                      h-4 w-4
                      text-[#888894]
                      transition-all duration-300
                      group-hover/features:translate-x-1
                      group-hover/features:text-[#B7A2E1]
                    "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="m9 18 6-6-6-6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* =========================
                  SUPPORTING POINTS
              ========================= */}

              <div
                className="
                  mt-8 flex flex-wrap
                  items-center justify-center
                  gap-x-7 gap-y-3
                "
              >
                {[
                  "Simple onboarding",
                  "Flexible workflows",
                  "Recruitment support",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      group/point
                      flex items-center gap-2
                      text-[10px]
                      font-medium
                      sm:text-[10.5px]
                    "
                    style={{ color: "#85858F" }}
                  >
                    <span
                      className="
                        flex h-[17px] w-[17px]
                        items-center justify-center
                        rounded-full
                        border border-[#A18AD4]/20
                        bg-[#A18AD4]/[0.075]
                        transition-all duration-300
                        group-hover/point:border-[#A18AD4]/35
                        group-hover/point:bg-[#A18AD4]/[0.13]
                      "
                    >
                      <svg
                        className="h-2.5 w-2.5 text-[#AD97DC]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom light */}
            <div
              className="
                cta-bottom-line
                pointer-events-none
                absolute bottom-0 left-1/2
                h-px
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#9C82D0]
                to-transparent
              "
            />
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================
           CTA PANEL
        ========================================= */

        .cta-panel {
          transition:
            border-color 600ms ease,
            box-shadow 600ms ease;
        }

        .cta-panel:hover {
          border-color: rgba(255,255,255,.13);

          box-shadow:
            0 38px 110px rgba(25,20,35,.22),
            0 10px 35px rgba(121,94,172,.07);
        }


        /* =========================================
           BACKGROUND GRID
        ========================================= */

        .cta-grid {
          opacity: .10;

          background-image:
            linear-gradient(
              rgba(255,255,255,.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.045) 1px,
              transparent 1px
            );

          background-size: 48px 48px;

          mask-image:
            radial-gradient(
              ellipse at center,
              black 0%,
              transparent 72%
            );

          -webkit-mask-image:
            radial-gradient(
              ellipse at center,
              black 0%,
              transparent 72%
            );

          animation: ctaGridMove 22s linear infinite;
        }

        @keyframes ctaGridMove {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 48px 48px;
          }
        }


        /* =========================================
           AMBIENT ORBS
        ========================================= */

        .cta-orb {
          transition:
            transform 1200ms cubic-bezier(.22,1,.36,1),
            opacity 1200ms ease;
        }

        .cta-panel:hover .cta-orb-left {
          transform:
            translate(20px, 15px)
            scale(1.12);
        }

        .cta-panel:hover .cta-orb-right {
          transform:
            translate(-20px, -15px)
            scale(1.12);
        }


        /* =========================================
           MOVING LIGHT
        ========================================= */

        .cta-beam {
          top: -45%;
          left: -35%;

          width: 25%;
          height: 190%;

          transform: rotate(17deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.018),
              rgba(157,132,207,.05),
              transparent
            );

          animation: ctaBeam 9s ease-in-out infinite;
        }

        @keyframes ctaBeam {
          0% {
            left: -35%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            left: 125%;
            opacity: 0;
          }
        }


        /* =========================================
           PRIMARY BUTTON
        ========================================= */

        .cta-primary {
          transition:
            transform 350ms cubic-bezier(.22,1,.36,1),
            background-color 350ms ease,
            box-shadow 350ms ease;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          background: #ffffff;

          box-shadow:
            0 18px 44px rgba(0,0,0,.32),
            0 0 30px rgba(157,132,207,.08);
        }

        .cta-primary-sheen {
          position: absolute;

          top: 0;
          left: -75%;

          width: 42%;
          height: 100%;

          transform: skewX(-20deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.95),
              transparent
            );

          transition:
            left 750ms cubic-bezier(.22,1,.36,1);
        }

        .cta-primary:hover .cta-primary-sheen {
          left: 130%;
        }


        /* =========================================
           BOTTOM ACCENT
        ========================================= */

        .cta-bottom-line {
          width: 34%;
          opacity: .45;

          transition:
            width 750ms cubic-bezier(.22,1,.36,1),
            opacity 750ms ease;
        }

        .cta-panel:hover .cta-bottom-line {
          width: 56%;
          opacity: .8;
        }


        /* =========================================
           ACCESSIBILITY
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .cta-grid,
          .cta-beam {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}