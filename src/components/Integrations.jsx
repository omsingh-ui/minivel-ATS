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
        integration-card group relative w-[174px]
        overflow-hidden rounded-[20px]
        border border-white/[0.075]
        bg-[#0D0D10]/92
        px-3.5 py-3.5
        shadow-[0_18px_55px_rgba(0,0,0,0.36)]
        backdrop-blur-2xl
        transition-all duration-500 ease-out
        hover:-translate-y-[6px]
        hover:scale-[1.025]
        hover:border-white/[0.15]
        hover:bg-[#121216]
        hover:shadow-[0_30px_75px_rgba(0,0,0,0.58)]
      "
    >
      {/* glass reflection */}
      <div
        className="
          pointer-events-none absolute inset-0
          -translate-x-[130%]
          bg-gradient-to-r
          from-transparent via-white/[0.025] to-transparent
          transition-transform duration-1000
          group-hover:translate-x-[130%]
        "
      />

      {/* top reflection */}
      <div className="pointer-events-none absolute left-[18%] right-[18%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />

      {/* hover atmosphere */}
      <div
        className="
          pointer-events-none absolute -left-10 -top-10
          h-24 w-24 rounded-full
          bg-[#8372C4]/10 blur-[35px]
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative flex items-center gap-3">
        {/* Real logo */}
        <div
          className="
            flex h-[47px] w-[47px] shrink-0
            items-center justify-center
            rounded-[14px]
            border border-white/[0.07]
            bg-[#151519]
            shadow-[0_8px_25px_rgba(0,0,0,0.30)]
            transition-all duration-500
            group-hover:-rotate-2
            group-hover:scale-[1.08]
            group-hover:border-white/[0.12]
            group-hover:bg-[#18181D]
          "
        >
          {integration.icon}
        </div>

        <div className="min-w-0">
          <div className="truncate text-[12px] font-bold tracking-[-0.01em] text-[#E7E7EA]">
            {integration.name}
          </div>

          <div className="mt-1 truncate text-[9px] font-medium text-[#666671]">
            {integration.desc}
          </div>
        </div>
      </div>

      {/* Connection state */}
      <div className="relative mt-3 flex items-center">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8C83D9] opacity-20" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#8C83D9] shadow-[0_0_8px_rgba(140,131,217,0.6)]" />
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#5F5F69]">
            Connected
          </span>
        </div>

       </div>

      {/* bottom illumination */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-1/2
          h-px w-0 -translate-x-1/2
          bg-gradient-to-r
          from-transparent via-[#9786D5] to-transparent
          opacity-0
          transition-all duration-700
          group-hover:w-[52%]
          group-hover:opacity-70
        "
      />
    </div>
  );
}

function MinivelCore() {
  return (
    <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
      {/* outer energy field */}
      <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

      <div className="absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#917DD0]/[0.07]" />

      <div
        className="
          core-card relative flex h-[178px] w-[178px]
          flex-col items-center justify-center
          overflow-hidden rounded-full
          border border-white/[0.10]
          bg-[#0C0C10]/95
          shadow-[0_35px_100px_rgba(0,0,0,0.65)]
          backdrop-blur-2xl
        "
      >
        {/* internal atmosphere */}
        <div className="absolute inset-[8px] rounded-full border border-white/[0.045] bg-gradient-to-br from-white/[0.025] via-transparent to-[#856CB8]/[0.045]" />

        <div className="absolute left-1/2 top-[35%] h-24 w-24 -translate-x-1/2 rounded-full bg-[#806CC1]/[0.12] blur-[35px]" />

        <div className="absolute left-[20%] right-[20%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.25] to-transparent" />

        <div className="relative flex flex-col items-center">
          {/* Minivel symbol */}
          <div
            className="
              relative mb-3 flex h-[48px] w-[48px]
              items-center justify-center
              overflow-hidden rounded-[15px]
              border border-white/[0.09]
              bg-gradient-to-br
              from-[#22212A]
              via-[#17171E]
              to-[#111115]
              text-[#B3A1E6]
              shadow-[0_15px_35px_rgba(0,0,0,0.40)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8870C5]/15 to-[#5577C0]/5" />

            <svg
              className="relative h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.65}
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12"
              />
            </svg>
          </div>

          <div className="text-[15px] font-extrabold tracking-[-0.025em] text-[#F0F0F2]">
            Minivel ATS
          </div>

          <div className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#666671]">
            Connected Core
          </div>
        </div>

        {/* live connection node */}
        <div
          className="
            absolute right-[2px] top-[39%]
            flex h-6 w-6 items-center justify-center
            rounded-full
            border-[3px] border-[#0C0C10]
            bg-[#15151A]
            shadow-[0_5px_18px_rgba(0,0,0,.45)]
          "
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[#9B87DA] shadow-[0_0_10px_rgba(155,135,218,.8)] animate-node-pulse" />
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
        bg-[#050505]
        pb-11 pt-7
        sm:pb-12 sm:pt-8
        lg:pb-13 lg:pt-8
      "
    >
      {/* Previous section boundary */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[52%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7462A8]/[0.045] blur-[130px]" />

        <div className="absolute -left-48 top-[15%] h-[380px] w-[380px] rounded-full bg-[#4F6BAE]/[0.035] blur-[145px]" />

        <div className="absolute -right-48 bottom-[5%] h-[390px] w-[390px] rounded-full bg-[#8D67AD]/[0.035] blur-[145px]" />

        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.065) 1px, transparent 0)",
            backgroundSize: "36px 36px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       {/* Header */}
<div className="mx-auto max-w-4xl text-center">
  <div>
    <p className="section-label text-[#9186B3]">
      Works With Your Existing Tools
    </p>
  </div>

  <h2 className="section-title mt-2.5 text-[#F3F3F5]">
    The tools your team already uses,

    <span className="mt-1 block bg-gradient-to-r from-white via-[#B9B1D8] to-[#9279C9] bg-clip-text text-transparent">
      all connected to Minivel ATS.
    </span>
  </h2>

  <p className="section-description mx-auto mt-4 max-w-2xl text-[#74747E]">
    Connect the tools your team relies on for sourcing, communication,
    interviews and candidate management, without changing the way
    your recruiters work.
  </p>
</div>

        {/* Desktop ecosystem */}
        <div className="relative mx-auto mt-2 hidden h-[520px] max-w-[1180px] lg:block">
          {/* architecture rings */}
          <div className="absolute left-1/2 top-1/2 h-[370px] w-[745px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/[0.04]" />

          <div className="absolute left-1/2 top-1/2 h-[270px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-white/[0.045]" />

          <div className="absolute left-1/2 top-1/2 h-[155px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#907CD0]/[0.045]" />

          {/* Network */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1180 520"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="darkConnectionLine"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#FFFFFF"
                  stopOpacity="0.015"
                />

                <stop
                  offset="48%"
                  stopColor="#8D7AC7"
                  stopOpacity="0.40"
                />

                <stop
                  offset="52%"
                  stopColor="#748FCB"
                  stopOpacity="0.45"
                />

                <stop
                  offset="100%"
                  stopColor="#FFFFFF"
                  stopOpacity="0.015"
                />
              </linearGradient>

              <filter id="darkPulseGlow">
                <feGaussianBlur stdDeviation="3.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <path
                id="darkPath1"
                d="M590 260 C480 175 350 120 185 105"
              />
              <path
                id="darkPath2"
                d="M590 260 C525 160 485 100 405 78"
              />
              <path
                id="darkPath3"
                d="M590 260 C655 160 695 100 775 78"
              />
              <path
                id="darkPath4"
                d="M590 260 C700 175 830 120 995 105"
              />

              <path
                id="darkPath5"
                d="M590 260 C480 345 350 400 185 415"
              />
              <path
                id="darkPath6"
                d="M590 260 C525 360 485 420 405 442"
              />
              <path
                id="darkPath7"
                d="M590 260 C655 360 695 420 775 442"
              />
              <path
                id="darkPath8"
                d="M590 260 C700 345 830 400 995 415"
              />
            </defs>

            {[
              "M590 260 C480 175 350 120 185 105",
              "M590 260 C525 160 485 100 405 78",
              "M590 260 C655 160 695 100 775 78",
              "M590 260 C700 175 830 120 995 105",
              "M590 260 C480 345 350 400 185 415",
              "M590 260 C525 360 485 420 405 442",
              "M590 260 C655 360 695 420 775 442",
              "M590 260 C700 345 830 400 995 415",
            ].map((d, index) => (
              <path
                key={index}
                d={d}
                stroke="url(#darkConnectionLine)"
                strokeWidth="1"
              />
            ))}

            {/* travelling signals */}
            {Array.from({ length: 8 }).map((_, index) => (
              <circle
                key={index}
                r="2.6"
                fill={index % 2 === 0 ? "#9A85D8" : "#7895D4"}
                filter="url(#darkPulseGlow)"
                opacity="0.9"
              >
                <animateMotion
                  dur={`${5 + index * 0.28}s`}
                  repeatCount="indefinite"
                  begin={`${index * 0.38}s`}
                >
                  <mpath href={`#darkPath${index + 1}`} />
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
                group relative overflow-hidden
                rounded-[18px]
                border border-white/[0.065]
                bg-[#0D0D10]
                p-3.5
                shadow-[0_12px_35px_rgba(0,0,0,0.28)]
                transition-all duration-400
                hover:-translate-y-1
                hover:border-white/[0.12]
                hover:bg-[#121216]
              "
            >
              <div className="absolute left-[20%] right-[20%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.13] to-transparent" />

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-[13px]
                  border border-white/[0.07]
                  bg-[#16161A]
                  transition-all duration-300
                  group-hover:scale-105
                "
              >
                {integration.icon}
              </div>

              <div className="mt-3 text-[12px] font-bold text-[#E3E3E7]">
                {integration.name}
              </div>

              <div className="mt-1 text-[9px] text-[#666671]">
                {integration.desc}
              </div>

              <div className="mt-3 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9383D2]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#5E5E68]">
                  Connected
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-2 text-center lg:mt-0">
          <p className="text-[12px] text-[#666671]">
           Connect more of the tools your recruitment team uses every day.
          </p>

        </div>
      </div>

      <style>{`
        @keyframes floatOne {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(5px, -7px, 0);
          }
        }

        @keyframes floatTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-5px, 6px, 0);
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
            transform: translate3d(-5px, -6px, 0);
          }
        }

        @keyframes coreBreath {
          0%, 100% {
            box-shadow:
              0 35px 100px rgba(0,0,0,.65),
              0 0 0 0 rgba(145,125,208,0);
          }

          50% {
            box-shadow:
              0 40px 115px rgba(0,0,0,.75),
              0 0 0 14px rgba(145,125,208,.025);
          }
        }

        @keyframes nodePulse {
          0%, 100% {
            opacity: .55;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.55);
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