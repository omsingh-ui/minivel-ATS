import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";

const FEATURES = [
  {
    id: "sourcing",
    label: "Talent Discovery",
    title: "Build a Stronger Talent Pipeline",
    accent: "#7F9FE8",
    glow: "rgba(92,126,205,0.14)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="10.5" cy="10.5" r="5.5" strokeWidth="1.7" />
        <path
          d="m15 15 4 4"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M8.5 10.5h4M10.5 8.5v4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    bullets: [
      "Centralize candidate profiles in one searchable workspace",
      "Organize talent into structured pools and pipelines",
      "Search profiles using skills, roles and experience",
      "Keep candidate information accessible across your team",
    ],
  },
  {
    id: "screening",
    label: "AI Screening",
    title: "Move from Resumes to Relevant Candidates Faster",
    accent: "#A18CE3",
    glow: "rgba(135,105,210,0.15)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 3.5 14 8l4.5 2-4.5 2-2 4.5-2-4.5-4.5-2L10 8l2-4.5Z"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="m16.5 16.5 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"
          strokeWidth="1.4"
        />
      </svg>
    ),
    bullets: [
      "Analyze resumes and identify relevant skills",
      "Compare profiles against role requirements",
      "Surface stronger matches for recruiter review",
      "Keep human judgement at the centre",
    ],
  },
  {
    id: "profile-sharing",
    label: "Candidate Sharing",
    title: "Present Better Shortlists to Hiring Teams",
    accent: "#8EA8B4",
    glow: "rgba(110,145,160,0.12)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="9" cy="9" r="3" strokeWidth="1.7" />
        <path
          d="M4 18c.8-2.5 2.5-4 5-4s4.2 1.5 5 4"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M15 8h5m-2-2 2 2-2 2"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bullets: [
      "Create clear and structured candidate profiles",
      "Share shortlisted candidates with stakeholders",
      "Centralize feedback and candidate evaluation",
      "Keep hiring discussions connected",
    ],
  },
  {
    id: "reports",
    label: "Recruitment Insights",
    title: "Understand What Is Happening Across Your Pipeline",
    accent: "#B69A79",
    glow: "rgba(170,132,91,0.12)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M5 19V11M12 19V6M19 19V9"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M4 5.5 9 8l4-3 6 2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bullets: [
      "Track candidates across recruitment stages",
      "Monitor activity and turnaround times",
      "Understand pipeline movement clearly",
      "Use recruitment data to improve decisions",
    ],
  },
  {
    id: "support",
    label: "Workflow",
    title: "Give Recruiters More Time to Focus on People",
    accent: "#A88CA0",
    glow: "rgba(158,116,144,0.12)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="7" cy="7" r="2" strokeWidth="1.6" />
        <circle cx="17" cy="7" r="2" strokeWidth="1.6" />
        <circle cx="12" cy="17" r="2" strokeWidth="1.6" />
        <path
          d="M9 7h6M8 9l3 6m5-6-3 6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    bullets: [
      "Reduce repetitive recruitment administration",
      "Create more consistent hiring workflows",
      "Improve collaboration across recruitment teams",
      "Keep candidate activity organised",
    ],
  },
];

export default function Features() {
  const sectionRef = useReveal();
  const deckRef = useRef(null);
  const [deckVisible, setDeckVisible] = useState(false);

  useEffect(() => {
    const element = deckRef.current;

    if (!element) return;

    let timer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = window.setTimeout(() => {
            setDeckVisible(true);
          }, 220);

          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="
        reveal-section
        relative overflow-hidden
        bg-[#FAFAFB]
        pb-14 pt-12
        sm:pb-16 sm:pt-14
        lg:pb-20 lg:pt-12
      "
    >
      {/* LIGHT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[8%] h-[360px] w-[360px] rounded-full bg-[#627BC1]/[0.035] blur-[135px]" />

        <div className="absolute -right-40 bottom-[3%] h-[380px] w-[380px] rounded-full bg-[#8667B2]/[0.035] blur-[145px]" />

        <div className="absolute left-1/2 top-[58%] h-[300px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8068B3]/[0.018] blur-[125px]" />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(35,35,45,0.075) 1px, transparent 0)",
            backgroundSize: "34px 34px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
      </div>

      {/* SECTION BOUNDARY */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#25252D]/[0.07] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER — NO SMALL LABEL */}
        <div className="mx-auto mb-11 text-center sm:mb-12 lg:mb-14">
          <h2 className="section-title">
            Everything your recruitment team needs,
            <span className="mt-1 block bg-gradient-to-r from-[#242329] via-[#574B70] to-[#68558E] bg-clip-text text-transparent">
              in one place.
            </span>
          </h2>

          <p className="section-description mt-4">
            Manage sourcing, screening, candidate sharing and recruitment
            insights from one workspace built for your team.
          </p>
        </div>

        {/* DECK → GRID */}
        <div
          ref={deckRef}
          className={`
            feature-deck-stage
            relative
            ${deckVisible ? "deck-visible" : ""}
          `}
        >
          {/* Light-theme deck floor */}
          <div
            className="
              feature-deck-shadow
              pointer-events-none
              absolute
              left-1/2 top-[44%]
              h-[210px] w-[56%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[60px]
              bg-[#393044]/[0.16]
              blur-[80px]
            "
          />

          <div
            className="
              feature-deck-core
              pointer-events-none
              absolute
              left-1/2 top-[43%]
              h-[180px] w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#8169B5]/[0.10]
              blur-[85px]
            "
          />

          <div className="relative grid gap-3.5 md:grid-cols-2 lg:grid-cols-6">
            {FEATURES.map((feature, index) => (
              <article
                key={feature.id}
                id={feature.id}
                className={`
                  feature-deck-card

                  group relative
                  overflow-hidden

                  rounded-[22px]

                  border border-white/[0.075]

                  bg-[#111115]

                  p-5

                  shadow-[0_18px_48px_rgba(31,28,39,0.15)]

                  ${
                    index < 3
                      ? "lg:col-span-2"
                      : ""
                  }

                  ${
                    index === 3
                      ? "lg:col-span-2 lg:col-start-2"
                      : ""
                  }

                  ${
                    index === 4
                      ? "md:col-span-2 lg:col-span-2 lg:col-start-4"
                      : ""
                  }
                `}
                style={{
                  "--feature-index": index,
                  "--feature-accent": feature.accent,
                  "--feature-glow": feature.glow,
                }}
              >
                {/* ACCENT ATMOSPHERE */}
                <div
                  className="
                    pointer-events-none
                    absolute -right-16 -top-16
                    h-44 w-44
                    rounded-full
                    opacity-0
                    blur-[55px]
                    transition-all duration-700
                    group-hover:scale-125
                    group-hover:opacity-100
                  "
                  style={{
                    backgroundColor: feature.glow,
                  }}
                />

                <div
                  className="
                    pointer-events-none
                    absolute -bottom-20 -left-20
                    h-40 w-40
                    rounded-full
                    opacity-0
                    blur-[60px]
                    transition-opacity duration-700
                    group-hover:opacity-40
                  "
                  style={{
                    backgroundColor: feature.glow,
                  }}
                />

                {/* Surface light */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                  style={{
                    background: `radial-gradient(
                      circle at 24% 15%,
                      ${feature.glow},
                      transparent 48%
                    )`,
                  }}
                />

                {/* Top reflection */}
                <div
                  className="
                    pointer-events-none
                    absolute left-[15%] right-[15%] top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.18]
                    to-transparent
                    opacity-60
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Sheen */}
                <div
                  className="
                    feature-card-sheen
                    pointer-events-none
                    absolute inset-0
                    -translate-x-[140%]
                    skew-x-[-18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.035]
                    to-transparent
                  "
                />

                {/* CARD CONTENT */}
                <div className="relative">
                  <div
                    className="
                      relative mb-4
                      flex h-10 w-10
                      items-center justify-center
                      rounded-[12px]
                      border border-white/[0.075]
                      bg-[#19191E]
                      transition-all duration-500
                      group-hover:-translate-y-1
                      group-hover:scale-[1.07]
                      group-hover:border-white/[0.14]
                    "
                    style={{
                      color: feature.accent,
                    }}
                  >
                    <div
                      className="
                        absolute
                        h-8 w-8
                        rounded-full
                        opacity-0
                        blur-xl
                        transition-opacity duration-500
                        group-hover:opacity-25
                      "
                      style={{
                        backgroundColor: feature.accent,
                      }}
                    />

                    <div className="relative">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Card category — retained inside product cards */}
                  <div
                    className="
                      mb-2.5
                      text-[9px]
                      font-bold uppercase
                      tracking-[0.17em]
                      opacity-80
                    "
                    style={{
                      color: feature.accent,
                    }}
                  >
                    {feature.label}
                  </div>

                  <h3
                    className="
                      min-h-[48px]
                      text-[18px]
                      font-bold
                      leading-[1.32]
                      tracking-[-0.025em]
                      text-[#F0F0F2]
                      transition-all duration-300
                      group-hover:-translate-y-[1px]
                      group-hover:text-white
                    "
                  >
                    {feature.title}
                  </h3>

                  <div
                    className="
                      my-4 h-px
                      bg-gradient-to-r
                      from-white/[0.075]
                      via-white/[0.04]
                      to-transparent
                    "
                  />

                  <ul className="space-y-2.5">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="
                          flex items-start gap-2.5
                          text-[11.5px]
                          leading-5
                          text-[#85858F]
                          transition-colors duration-300
                          group-hover:text-[#A0A0A9]
                        "
                      >
                        <span
                          className="
                            mt-[3px]
                            flex h-4 w-4
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border border-white/[0.06]
                            bg-white/[0.025]
                            transition-all duration-300
                            group-hover:border-white/[0.10]
                          "
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-2.5 w-2.5"
                            fill="none"
                            stroke={feature.accent}
                          >
                            <path
                              d="m6 12 4 4 8-8"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div
                  className="
                    pointer-events-none
                    absolute bottom-0 left-1/2
                    h-px w-0
                    -translate-x-1/2
                    opacity-0
                    transition-all duration-700
                    group-hover:w-[58%]
                    group-hover:opacity-80
                  "
                  style={{
                    background: `linear-gradient(
                      90deg,
                      transparent,
                      ${feature.accent},
                      transparent
                    )`,
                  }}
                />
              </article>
            ))}
          </div>
        </div>

        {/* BOTTOM COPY */}
        <div className="mt-10 flex justify-center">
          <p className="text-center text-[10px] font-medium tracking-[0.02em] text-[#74747E] sm:text-[11px]">
            Built to support recruiters from candidate discovery through final
            decisions.
          </p>
        </div>
      </div>

      {/* BOTTOM TRANSITION */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#25252D]/[0.065] to-transparent" />

      <style>{`
        .feature-deck-card {
          opacity: 0;

          transform-origin: 50% 80%;

          transition:
            opacity 620ms cubic-bezier(.22,1,.36,1),
            transform 900ms cubic-bezier(.16,1,.3,1),
            border-color 420ms ease,
            background-color 420ms ease,
            box-shadow 420ms ease;

          will-change: transform, opacity;
        }

        /* Initial premium deck */
        .feature-deck-card:nth-child(1) {
          transform:
            translate3d(225px, 82px, 0)
            rotate(-7deg)
            scale(.90);
        }

        .feature-deck-card:nth-child(2) {
          transform:
            translate3d(0px, 72px, 0)
            rotate(-2deg)
            scale(.92);
        }

        .feature-deck-card:nth-child(3) {
          transform:
            translate3d(-225px, 82px, 0)
            rotate(6deg)
            scale(.90);
        }

        .feature-deck-card:nth-child(4) {
          transform:
            translate3d(118px, -105px, 0)
            rotate(-5deg)
            scale(.91);
        }

        .feature-deck-card:nth-child(5) {
          transform:
            translate3d(-118px, -105px, 0)
            rotate(5deg)
            scale(.91);
        }

        /* Fan into final grid */
        .deck-visible .feature-deck-card {
          opacity: 1;

          transform:
            translate3d(0,0,0)
            rotate(0deg)
            scale(1);
        }

        .deck-visible .feature-deck-card:nth-child(1) {
          transition-delay: 0ms;
        }

        .deck-visible .feature-deck-card:nth-child(2) {
          transition-delay: 90ms;
        }

        .deck-visible .feature-deck-card:nth-child(3) {
          transition-delay: 180ms;
        }

        .deck-visible .feature-deck-card:nth-child(4) {
          transition-delay: 270ms;
        }

        .deck-visible .feature-deck-card:nth-child(5) {
          transition-delay: 360ms;
        }

        /* Deck floor */
        .feature-deck-shadow {
          opacity: .28;

          transform:
            translate(-50%,-50%)
            scale(.72);

          transition:
            opacity 1000ms ease,
            transform 1000ms cubic-bezier(.22,1,.36,1);
        }

        .deck-visible .feature-deck-shadow {
          opacity: .035;

          transform:
            translate(-50%,-50%)
            scale(1.12);
        }

        .feature-deck-core {
          opacity: .65;

          transform:
            translate(-50%,-50%)
            scale(.8);

          transition:
            opacity 1000ms ease,
            transform 1000ms cubic-bezier(.22,1,.36,1);
        }

        .deck-visible .feature-deck-core {
          opacity: .10;

          transform:
            translate(-50%,-50%)
            scale(1.15);
        }

        /* Premium hover */
        .deck-visible .feature-deck-card:hover {
          transform:
            translate3d(0,-7px,0)
            perspective(1000px)
            rotateX(1deg)
            rotateY(-1deg)
            scale(1.012);

          border-color:
            rgba(255,255,255,.14);

          background-color:
            #15151A;

          box-shadow:
            0 30px 76px
            rgba(38,32,50,.24);

          transition-delay: 0ms;
        }

        .deck-visible
        .feature-deck-card:hover
        .feature-card-sheen {
          animation:
            featurePremiumSheen
            850ms ease forwards;
        }

        @keyframes featurePremiumSheen {
          from {
            transform:
              translateX(-140%)
              skewX(-18deg);
          }

          to {
            transform:
              translateX(140%)
              skewX(-18deg);
          }
        }

        /* Tablet */
        @media (max-width: 1023px) {
          .feature-deck-card:nth-child(1) {
            transform:
              translate3d(70px, 40px, 0)
              rotate(-3deg)
              scale(.95);
          }

          .feature-deck-card:nth-child(2) {
            transform:
              translate3d(-70px, 40px, 0)
              rotate(3deg)
              scale(.95);
          }

          .feature-deck-card:nth-child(3) {
            transform:
              translate3d(70px, 20px, 0)
              rotate(-2deg)
              scale(.96);
          }

          .feature-deck-card:nth-child(4) {
            transform:
              translate3d(-70px, 20px, 0)
              rotate(2deg)
              scale(.96);
          }

          .feature-deck-card:nth-child(5) {
            transform:
              translate3d(0, -20px, 0)
              rotate(0deg)
              scale(.96);
          }

          .deck-visible .feature-deck-card {
            transform:
              translate3d(0,0,0)
              rotate(0deg)
              scale(1);
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .feature-deck-card:nth-child(1),
          .feature-deck-card:nth-child(2),
          .feature-deck-card:nth-child(3),
          .feature-deck-card:nth-child(4),
          .feature-deck-card:nth-child(5) {
            transform:
              translate3d(
                0,
                calc(26px + var(--feature-index) * 5px),
                0
              )
              rotate(
                calc(
                  (var(--feature-index) - 2) * .8deg
                )
              )
              scale(.97);
          }

          .deck-visible .feature-deck-card {
            transform:
              translate3d(0,0,0)
              rotate(0deg)
              scale(1);
          }

          .deck-visible .feature-deck-card:hover {
            transform:
              translate3d(0,-4px,0)
              scale(1.005);
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .feature-deck-card,
          .deck-visible .feature-deck-card,
          .deck-visible .feature-deck-card:hover,
          .feature-deck-shadow,
          .feature-deck-core {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }

          .feature-card-sheen {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}