const INTEGRATIONS = [
  {
    name: 'LinkedIn',
    desc: 'Talent Sourcing',
    icon: (
      <svg viewBox="0 0 48 48" className="h-7 w-7">
        <rect width="48" height="48" rx="10" fill="#0A66C2" />
        <circle cx="15" cy="17" r="3" fill="white" />
        <rect x="12.5" y="22" width="5" height="14" rx="1" fill="white" />
        <path
          d="M22 22h5v2c1.5-1.8 3.5-2.7 5.8-2.7 5 0 6.2 3.2 6.2 7.5V36h-5v-6.4c0-2.2-.5-4-3-4-2.8 0-4 1.9-4 4.6V36h-5V22z"
          fill="white"
        />
      </svg>
    ),
  },

  {
    name: 'Indeed',
    desc: 'Job Posting',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <circle cx="24" cy="24" r="22" fill="#F5F8FF" />
        <path
          d="M18 18.5c2.7-4.8 8.8-7.4 14.6-4.8-4.8-.4-8.5 1-11.2 4.1 4.2-.7 7.7.3 10.5 3-4.3-1.7-8.8-1.3-13.9 1.2z"
          fill="#2557A7"
        />
        <circle cx="25.5" cy="19.5" r="3.2" fill="#2557A7" />
        <path
          d="M23.2 24.5h5v12h-5z"
          fill="#2557A7"
        />
      </svg>
    ),
  },

  {
    name: 'Gmail',
    desc: 'Email Sync',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <path
          d="M7 12.5 24 25.4 41 12.5V37a3 3 0 0 1-3 3h-4V20.5L24 28 14 20.5V40h-4a3 3 0 0 1-3-3z"
          fill="#34A853"
        />
        <path d="M7 12.5 14 17.8V40H10a3 3 0 0 1-3-3z" fill="#4285F4" />
        <path d="M41 12.5 34 17.8V40h4a3 3 0 0 0 3-3z" fill="#FBBC04" />
        <path
          d="M7 12.5c0-2.3 2.6-3.6 4.5-2.2L24 19.7 36.5 10.3c1.9-1.4 4.5-.1 4.5 2.2L24 25.4z"
          fill="#EA4335"
        />
      </svg>
    ),
  },

  {
    name: 'Outlook',
    desc: 'Calendar & Email',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <rect x="17" y="8" width="25" height="32" rx="4" fill="#1473E6" />
        <rect x="21" y="12" width="17" height="11" rx="2" fill="#28A8EA" />
        <path d="M21 24h17v12H21z" fill="#0078D4" />
        <path d="m21 24 8.5 6L38 24" fill="none" stroke="white" strokeWidth="2" />
        <rect x="6" y="14" width="23" height="25" rx="3" fill="#0364B8" />
        <circle cx="17.5" cy="26.5" r="6.5" fill="white" />
        <circle cx="17.5" cy="26.5" r="3.5" fill="#0364B8" />
      </svg>
    ),
  },

  {
    name: 'WhatsApp',
    desc: 'Messaging',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <circle cx="24" cy="23" r="18" fill="#25D366" />
        <path d="m10 40 2.6-9.2 8 7.1z" fill="#25D366" />
        <path
          d="M17.4 14.5c.5-.6 1-.6 1.5-.6h1c.4 0 .8.1 1 .8l1.6 4c.2.5.1.9-.2 1.3l-1.2 1.5c-.3.3-.3.6-.1 1 1.5 2.8 3.8 5 6.7 6.4.4.2.7.2 1-.2l1.7-2c.4-.4.8-.5 1.3-.3l3.8 1.8c.5.3.7.6.6 1.2-.3 2-1.3 3.5-2.9 4.3-1.6.8-3.7.7-6.2-.3-6.2-2.5-10.8-7-13.2-13.1-.8-2-.5-4.2.6-5.8z"
          fill="white"
        />
      </svg>
    ),
  },

  {
    name: 'Slack',
    desc: 'Team Comms',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <rect x="20" y="5" width="8" height="18" rx="4" fill="#36C5F0" />
        <rect x="25" y="20" width="18" height="8" rx="4" fill="#2EB67D" />
        <rect x="20" y="25" width="8" height="18" rx="4" fill="#ECB22E" />
        <rect x="5" y="20" width="18" height="8" rx="4" fill="#E01E5A" />

        <circle cx="13" cy="13" r="4" fill="#36C5F0" />
        <circle cx="35" cy="13" r="4" fill="#2EB67D" />
        <circle cx="35" cy="35" r="4" fill="#ECB22E" />
        <circle cx="13" cy="35" r="4" fill="#E01E5A" />
      </svg>
    ),
  },

  {
    name: 'Zoom',
    desc: 'Interviews',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <rect x="5" y="10" width="38" height="28" rx="9" fill="#2D8CFF" />
        <rect x="11" y="17" width="18" height="14" rx="4" fill="white" />
        <path d="m30 21 8-5v16l-8-5z" fill="white" />
      </svg>
    ),
  },

  {
    name: 'HubSpot',
    desc: 'CRM Sync',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <path
          d="M25 8v9.5M25 17.5l8.5 5M25 17.5l-7 10"
          fill="none"
          stroke="#FF7A59"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="25" cy="7" r="4" fill="#FF7A59" />
        <circle cx="35" cy="24" r="5" fill="#FF7A59" />
        <circle cx="16" cy="31" r="6" fill="#FF7A59" />
        <circle cx="16" cy="31" r="2.5" fill="white" />
      </svg>
    ),
  },

  {
    name: 'Greenhouse',
    desc: 'ATS Bridge',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <rect width="48" height="48" rx="11" fill="#357A38" />
        <path
          d="M15 30V18l9-6 9 6v12"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M20 30V21h8v9" fill="white" />
        <path
          d="M24 12v-4M14 18l-4-2M34 18l4-2"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    name: 'DocuSign',
    desc: 'E-Signatures',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8">
        <rect width="48" height="48" rx="11" fill="#FFCC22" />
        <path d="M24 9v18" stroke="#202124" strokeWidth="4" strokeLinecap="round" />
        <path
          d="m17 21 7 7 7-7"
          fill="none"
          stroke="#202124"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="13" y="34" width="22" height="4" rx="2" fill="#202124" />
      </svg>
    ),
  },
];

const DESKTOP_INTEGRATIONS = INTEGRATIONS.slice(0, 8);

function IntegrationCard({ integration }) {
  return (
    <div
      className="
        integration-card group relative w-[180px]
        rounded-[24px] border border-white/90
        bg-white/90 px-4 py-4
        shadow-[0_18px_50px_rgba(41,57,84,0.09)]
        backdrop-blur-2xl
        transition-[transform,box-shadow,border-color]
        duration-500
        hover:-translate-y-2
        hover:scale-[1.035]
        hover:border-[#B9C8DD]
        hover:shadow-[0_30px_75px_rgba(40,57,86,0.17)]
      "
    >
      <div
        className="
          pointer-events-none absolute inset-[1px]
          rounded-[23px]
          bg-gradient-to-br from-white/80 via-transparent to-[#E9EEF7]/50
          opacity-60 transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div
        className="
          pointer-events-none absolute left-6 right-6 top-0 h-px
          bg-gradient-to-r from-transparent via-white to-transparent
        "
      />

      <div className="relative flex items-center gap-3">
        <div
          className="
            flex h-[50px] w-[50px] flex-shrink-0
            items-center justify-center rounded-[16px]
            border border-[#E4EAF2]
            bg-white
            shadow-[0_9px_25px_rgba(40,55,80,0.09)]
            transition-all duration-500
            group-hover:-rotate-2
            group-hover:scale-110
            group-hover:shadow-[0_13px_30px_rgba(40,55,80,0.14)]
          "
        >
          {integration.icon}
        </div>

        <div className="min-w-0">
          <div className="truncate text-[14px] font-extrabold tracking-[-0.015em] text-[#172A47]">
            {integration.name}
          </div>

          <div className="mt-0.5 truncate text-[11px] font-medium text-[#8794A7]">
            {integration.desc}
          </div>
        </div>
      </div>

      <div className="relative mt-3.5 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#718EB7] opacity-20" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#718EB7]" />
        </span>

        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8A97A8]">
          Connected
        </span>
      </div>
    </div>
  );
}

function MinivelCore() {
  return (
    <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
      <div
        className="
          core-card relative flex h-[190px] w-[190px]
          flex-col items-center justify-center
          rounded-full border border-white
          bg-white/90
          shadow-[0_32px_95px_rgba(37,58,91,0.18)]
          backdrop-blur-2xl
        "
      >
        <div className="absolute -inset-[23px] rounded-full border border-[#BCCADD]/20" />

        <div className="absolute -inset-[11px] rounded-full border border-[#C5D2E2]/35" />

        <div
          className="
            absolute inset-[10px] rounded-full
            border border-[#DCE5F0]/80
            bg-gradient-to-br
            from-[#E9F0FA]
            via-white
            to-[#F2EDF5]
          "
        />

        <div className="absolute inset-[29px] rounded-full bg-white/75 blur-xl" />

        <div className="relative flex flex-col items-center">
          <div
            className="
              mb-3 flex h-[52px] w-[52px]
              items-center justify-center
              rounded-[18px]
              bg-gradient-to-br
              from-[#29476F]
              via-[#5C7195]
              to-[#9A7D9F]
              text-white
              shadow-[0_13px_32px_rgba(41,71,111,0.30)]
            "
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12"
              />
            </svg>
          </div>

          <div className="text-[18px] font-extrabold tracking-[-0.025em] text-[#172A47]">
            Minivel ATS
          </div>

          <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7E8DA2]">
            Connected Core
          </div>
        </div>

        <div
          className="
            absolute -right-1 top-[39%]
            flex h-7 w-7 items-center justify-center
            rounded-full border-4 border-[#F6F8FC]
            bg-white
            shadow-[0_5px_15px_rgba(50,70,100,.12)]
          "
        >
          <div className="h-2 w-2 rounded-full bg-[#7894BD] animate-node-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-white
        via-[#F9FAFD]
        to-[#F3F6FA]
        py-7 lg:py-9
      "
    >
      {/* Ambient background */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-[48%]
          h-[520px] w-[900px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-[#A9B9D1]/10 blur-[125px]
        "
      />

      <div
        className="
          pointer-events-none absolute -left-40 top-0
          h-[360px] w-[360px]
          rounded-full bg-[#D7DFEC]/30 blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 bottom-0
          h-[360px] w-[360px]
          rounded-full bg-[#E4D9E9]/25 blur-[110px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#D7DFEB]
              bg-white/80
              px-4 py-2
              text-[10px] font-bold
              uppercase tracking-[0.2em]
              text-[#687B98]
              shadow-[0_8px_25px_rgba(45,65,95,0.05)]
              backdrop-blur-xl
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#718EB7] opacity-30" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#718EB7]" />
            </span>

            Connected Ecosystem
          </span>

          <h2
            className="
              mt-4 text-3xl font-extrabold
              tracking-[-0.04em]
              text-[#172A47]
              sm:text-4xl
              lg:text-[45px]
              lg:leading-[1.08]
            "
          >
            Your Entire Recruitment Stack
            <span
              className="
                block
                bg-gradient-to-r
                from-[#35577E]
                via-[#657CA0]
                to-[#92799C]
                bg-clip-text text-transparent
              "
            >
              Working as One
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#738197] sm:text-base">
            Connect the platforms your team already uses and bring sourcing,
            communication, interviews, CRM and candidate workflows into one
            intelligent Minivel ecosystem.
          </p>
        </div>

        {/* Desktop connected ecosystem */}
        <div className="relative mx-auto mt-3 hidden h-[545px] max-w-[1180px] lg:block">
          {/* Architecture rings */}
          <div
            className="
              absolute left-1/2 top-1/2
              h-[390px] w-[760px]
              -translate-x-1/2 -translate-y-1/2
              rounded-[50%]
              border border-[#BCCADD]/28
            "
          />

          <div
            className="
              absolute left-1/2 top-1/2
              h-[280px] w-[535px]
              -translate-x-1/2 -translate-y-1/2
              rounded-[50%]
              border border-dashed border-[#C5D1E0]/38
            "
          />

          {/* Network */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1180 545"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="connectionLine"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#CBD6E5"
                  stopOpacity="0.08"
                />
                <stop
                  offset="50%"
                  stopColor="#7895BD"
                  stopOpacity="0.72"
                />
                <stop
                  offset="100%"
                  stopColor="#CBD6E5"
                  stopOpacity="0.08"
                />
              </linearGradient>

              <filter id="pulseGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <path id="path1" d="M590 272 C480 180 350 125 185 110" />
              <path id="path2" d="M590 272 C525 165 485 105 405 82" />
              <path id="path3" d="M590 272 C655 165 695 105 775 82" />
              <path id="path4" d="M590 272 C700 180 830 125 995 110" />

              <path id="path5" d="M590 272 C480 360 350 415 185 435" />
              <path id="path6" d="M590 272 C525 380 485 438 405 463" />
              <path id="path7" d="M590 272 C655 380 695 438 775 463" />
              <path id="path8" d="M590 272 C700 360 830 415 995 435" />
            </defs>

            {[
              'M590 272 C480 180 350 125 185 110',
              'M590 272 C525 165 485 105 405 82',
              'M590 272 C655 165 695 105 775 82',
              'M590 272 C700 180 830 125 995 110',
              'M590 272 C480 360 350 415 185 435',
              'M590 272 C525 380 485 438 405 463',
              'M590 272 C655 380 695 438 775 463',
              'M590 272 C700 360 830 415 995 435',
            ].map((d, index) => (
              <path
                key={index}
                d={d}
                stroke="url(#connectionLine)"
                strokeWidth="1.15"
              />
            ))}

            {/* Moving data signals */}
            {Array.from({ length: 8 }).map((_, index) => (
              <circle
                key={index}
                r="3"
                fill="#7895BD"
                filter="url(#pulseGlow)"
                opacity="0.88"
              >
                <animateMotion
                  dur={`${4.8 + index * 0.31}s`}
                  repeatCount="indefinite"
                  begin={`${index * 0.4}s`}
                >
                  <mpath href={`#path${index + 1}`} />
                </animateMotion>
              </circle>
            ))}
          </svg>

          {/* Top row */}
          <div className="absolute left-[1%] top-[13%] z-20 animate-float-one">
            <IntegrationCard integration={DESKTOP_INTEGRATIONS[0]} />
          </div>

          <div className="absolute left-[22%] top-[2%] z-20 animate-float-two">
            <IntegrationCard integration={DESKTOP_INTEGRATIONS[1]} />
          </div>

          <div className="absolute right-[22%] top-[2%] z-20 animate-float-three">
            <IntegrationCard integration={DESKTOP_INTEGRATIONS[2]} />
          </div>

          <div className="absolute right-[1%] top-[13%] z-20 animate-float-four">
            <IntegrationCard integration={DESKTOP_INTEGRATIONS[3]} />
          </div>

          {/* Bottom row */}
          <div className="absolute bottom-[13%] left-[1%] z-20 animate-float-two">
            <IntegrationCard integration={DESKTOP_INTEGRATIONS[4]} />
          </div>

          <div className="absolute bottom-[2%] left-[22%] z-20 animate-float-three">
            <IntegrationCard integration={DESKTOP_INTEGRATIONS[5]} />
          </div>

          <div className="absolute bottom-[2%] right-[22%] z-20 animate-float-one">
            <IntegrationCard integration={DESKTOP_INTEGRATIONS[6]} />
          </div>

          <div className="absolute bottom-[13%] right-[1%] z-20 animate-float-four">
            <IntegrationCard integration={DESKTOP_INTEGRATIONS[7]} />
          </div>

          <MinivelCore />
        </div>

        {/* Tablet / Mobile */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.name}
              className="
                group rounded-[20px]
                border border-[#E2E8F0]
                bg-white/90 p-4
                shadow-[0_10px_30px_rgba(40,55,85,0.06)]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#C4D0DF]
                hover:shadow-[0_18px_40px_rgba(40,55,85,0.12)]
              "
            >
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-[14px]
                  border border-[#E5EAF1]
                  bg-white
                  shadow-sm
                  transition-all duration-300
                  group-hover:scale-105
                "
              >
                {integration.icon}
              </div>

              <div className="mt-3 text-sm font-extrabold text-[#172A47]">
                {integration.name}
              </div>

              <div className="mt-1 text-[11px] text-[#8794A7]">
                {integration.desc}
              </div>

              <div className="mt-3 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7894BD]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#8996A8]">
                  Connected
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-2 text-center lg:mt-0">
          <p className="text-sm text-[#7A879A]">
            And dozens more integrations across sourcing, communication,
            productivity and hiring.
          </p>

          <button
            className="
              group mt-4 inline-flex items-center gap-2
              rounded-xl
              border border-[#CCD7E5]
              bg-white/80
              px-5 py-2.5
              text-sm font-bold text-[#405B80]
              shadow-[0_8px_25px_rgba(40,55,85,0.05)]
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#AEBFD4]
              hover:bg-white
              hover:shadow-[0_14px_35px_rgba(40,55,85,0.11)]
            "
          >
            Explore all integrations

            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </button>
        </div>
      </div>

      <style>{`
        @keyframes floatOne {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(5px, -8px, 0);
          }
        }

        @keyframes floatTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-5px, 7px, 0);
          }
        }

        @keyframes floatThree {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(6px, 6px, 0);
          }
        }

        @keyframes floatFour {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-5px, -7px, 0);
          }
        }

        @keyframes coreBreath {
          0%, 100% {
            box-shadow:
              0 32px 95px rgba(37,58,91,.18),
              0 0 0 0 rgba(94,122,164,0);
          }

          50% {
            box-shadow:
              0 38px 105px rgba(37,58,91,.23),
              0 0 0 16px rgba(94,122,164,.035);
          }
        }

        @keyframes nodePulse {
          0%, 100% {
            opacity: .55;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .animate-float-one {
          animation: floatOne 5.8s ease-in-out infinite;
        }

        .animate-float-two {
          animation: floatTwo 6.7s ease-in-out infinite;
        }

        .animate-float-three {
          animation: floatThree 7.3s ease-in-out infinite;
        }

        .animate-float-four {
          animation: floatFour 6.2s ease-in-out infinite;
        }

        .core-card {
          animation: coreBreath 5s ease-in-out infinite;
        }

        .animate-node-pulse {
          animation: nodePulse 2.3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float-one,
          .animate-float-two,
          .animate-float-three,
          .animate-float-four,
          .core-card,
          .animate-node-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}