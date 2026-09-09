const LinkedInLogo = () => (
  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0A66C2] text-[17px] font-extrabold text-white">
    in
  </div>
);

const IndeedLogo = () => (
  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white">
    <span className="text-[20px] font-black italic tracking-[-0.08em] text-[#2557A7]">
      i
    </span>
  </div>
);

const GmailLogo = () => (
  <svg viewBox="0 0 48 48" className="h-8 w-8">
    <path fill="#4285F4" d="M6 10v28h7V17.5L24 26l11-8.5V38h7V10l-18 14L6 10z" />
    <path fill="#34A853" d="M6 38h7V17.5L6 12z" />
    <path fill="#FBBC04" d="M35 38h7V12l-7 5.5z" />
    <path fill="#EA4335" d="M6 10l18 14 18-14v8L24 32 6 18z" />
  </svg>
);

const OutlookLogo = () => (
  <div className="relative h-8 w-8">
    <div className="absolute right-0 top-1 h-6 w-6 rounded-[4px] bg-[#0078D4]" />
    <div className="absolute left-0 top-0 flex h-8 w-6 items-center justify-center rounded-[4px] bg-[#106EBE] text-[15px] font-bold text-white shadow-sm">
      O
    </div>
    <div className="absolute right-[2px] top-[9px] h-[2px] w-3 rotate-[28deg] bg-white/80" />
    <div className="absolute right-[2px] top-[16px] h-[2px] w-3 -rotate-[28deg] bg-white/80" />
  </div>
);

const WhatsAppLogo = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
    <svg
      className="h-5 w-5 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a9.6 9.6 0 00-8.2 14.6L2.5 21.5l5-1.3A9.7 9.7 0 1012 2zm0 17.5a7.6 7.6 0 01-3.9-1.1l-.3-.2-3 .8.8-2.9-.2-.3A7.6 7.6 0 1112 19.5zm4.2-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.2 6.2 0 01-1.9-1.2 7 7 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.7 1.2 2.9c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.6.2-1 .2-1.1-.1-.1-.2-.2-.4-.3z" />
    </svg>
  </div>
);

const SlackLogo = () => (
  <svg viewBox="0 0 48 48" className="h-8 w-8">
    <rect x="20" y="4" width="8" height="18" rx="4" fill="#36C5F0" />
    <rect x="26" y="20" width="18" height="8" rx="4" fill="#2EB67D" />
    <rect x="20" y="26" width="8" height="18" rx="4" fill="#ECB22E" />
    <rect x="4" y="20" width="18" height="8" rx="4" fill="#E01E5A" />
    <rect x="10" y="10" width="8" height="8" rx="4" fill="#36C5F0" />
    <rect x="30" y="10" width="8" height="8" rx="4" fill="#2EB67D" />
    <rect x="30" y="30" width="8" height="8" rx="4" fill="#ECB22E" />
    <rect x="10" y="30" width="8" height="8" rx="4" fill="#E01E5A" />
  </svg>
);

const ZoomLogo = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#2D8CFF]">
    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 6.5h9A2.5 2.5 0 0116 9v6a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 012 15V9a2.5 2.5 0 012.5-2.5zm12.8 3.2l3.2-2c.7-.4 1.5.1 1.5.9v6.8c0 .8-.8 1.3-1.5.9l-3.2-2V9.7z" />
    </svg>
  </div>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 48 48" className="h-8 w-8">
    <circle cx="24" cy="25" r="6" fill="#FF7A59" />
    <circle cx="37" cy="13" r="4" fill="#FF7A59" />
    <circle cx="10" cy="18" r="4" fill="#FF7A59" />
    <path
      d="M27.8 20.4L34 15M18.4 22.5l-5-3M24 19V9"
      stroke="#FF7A59"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="24" cy="7" r="3" fill="#FF7A59" />
  </svg>
);

const GreenhouseLogo = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#357A38] text-[10px] font-extrabold text-white">
    GH
  </div>
);

const DocuSignLogo = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#FFD700] text-[10px] font-black text-[#1B1B1B]">
    DS
  </div>
);

const INTEGRATIONS = [
  {
    name: 'LinkedIn',
    logo: <LinkedInLogo />,
    desc: 'Talent Sourcing',
    position: 'left-[4%] top-[10%]',
    delay: '0s',
  },
  {
    name: 'Indeed',
    logo: <IndeedLogo />,
    desc: 'Job Posting',
    position: 'left-[25%] top-[3%]',
    delay: '.4s',
  },
  {
    name: 'Gmail',
    logo: <GmailLogo />,
    desc: 'Email Sync',
    position: 'right-[25%] top-[3%]',
    delay: '.8s',
  },
  {
    name: 'Outlook',
    logo: <OutlookLogo />,
    desc: 'Calendar & Email',
    position: 'right-[4%] top-[10%]',
    delay: '1.2s',
  },
  {
    name: 'WhatsApp',
    logo: <WhatsAppLogo />,
    desc: 'Messaging',
    position: 'left-[2%] bottom-[13%]',
    delay: '.7s',
  },
  {
    name: 'Slack',
    logo: <SlackLogo />,
    desc: 'Team Collaboration',
    position: 'left-[24%] bottom-[4%]',
    delay: '1.4s',
  },
  {
    name: 'Zoom',
    logo: <ZoomLogo />,
    desc: 'Interviews',
    position: 'right-[24%] bottom-[4%]',
    delay: '.2s',
  },
  {
    name: 'HubSpot',
    logo: <HubSpotLogo />,
    desc: 'CRM Sync',
    position: 'right-[2%] bottom-[13%]',
    delay: '1s',
  },
];

const MOBILE_INTEGRATIONS = [
  ...INTEGRATIONS,
  {
    name: 'Greenhouse',
    logo: <GreenhouseLogo />,
    desc: 'ATS Bridge',
  },
  {
    name: 'DocuSign',
    logo: <DocuSignLogo />,
    desc: 'E-Signatures',
  },
];

function IntegrationCard({ integration, floating = false }) {
  return (
    <div
      className={`
        group
        ${floating ? `absolute ${integration.position}` : 'relative'}
        z-20
      `}
      style={
        floating
          ? {
              animation: `integrationFloat 5s ease-in-out ${integration.delay} infinite`,
            }
          : undefined
      }
    >
      <div
        className="
          flex min-w-[160px] items-center gap-3
          rounded-[18px]
          border border-white/90
          bg-white/90
          px-4 py-3
          shadow-[0_12px_35px_rgba(30,48,77,0.08)]
          backdrop-blur-xl
          transition-all duration-500
          hover:-translate-y-1
          hover:border-[#C8D5E6]
          hover:bg-white
          hover:shadow-[0_22px_55px_rgba(30,48,77,0.15)]
        "
      >
        <div
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-[13px]
            border border-[#E2E8F0]
            bg-white
            p-1.5
            shadow-[0_5px_14px_rgba(31,49,76,0.08)]
            transition-all duration-500
            group-hover:scale-110
            group-hover:shadow-[0_8px_20px_rgba(31,49,76,0.13)]
          "
        >
          {integration.logo}
        </div>

        <div>
          <div className="text-[12px] font-bold text-[#1C2D47]">
            {integration.name}
          </div>

          <div className="mt-0.5 text-[9px] font-medium text-[#8995A6]">
            {integration.desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <>
      <section
        id="integrations"
        className="relative overflow-hidden bg-[#F6F8FC] pt-8 pb-11 sm:pt-9 sm:pb-12 lg:pt-10 lg:pb-14"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F8FAFD_0%,#F1F5FA_55%,#F7F9FC_100%)]" />

        {/* Atmospheric light */}
        <div className="absolute left-1/2 top-[45%] h-[440px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9CAE6]/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[260px] w-[260px] rounded-full bg-[#D8C8AA]/10 blur-[90px]" />
        <div className="absolute -right-24 top-10 h-[280px] w-[280px] rounded-full bg-[#C9C4DC]/12 blur-[90px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(54,78,111,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(54,78,111,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-[#D9E3F0] bg-white/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#60728E] backdrop-blur">
              Connected Ecosystem
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-[#16263F] sm:text-4xl lg:text-[44px]">
              Your recruitment tools,
              <span className="block bg-gradient-to-r from-[#315B98] via-[#687BAE] to-[#927E9D] bg-clip-text text-transparent">
                working as one.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#68778C] sm:text-base">
              Bring the tools your recruiters already use into one connected
              hiring environment — reducing fragmented workflows and keeping
              recruitment activity in sync.
            </p>
          </div>

          {/* Desktop ecosystem */}
          <div className="relative mx-auto mt-7 hidden h-[430px] max-w-[1080px] lg:block">
            {/* Orbits */}
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#BFCDE0]/50" />

            <div className="absolute left-1/2 top-1/2 h-[245px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#CAD6E6]/60" />

            <div className="absolute left-1/2 top-1/2 h-[395px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-[#B7C6DA]/35" />

            {/* Connection lines */}
            <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#AFC0D7]/50 to-transparent" />

            <div className="absolute bottom-[14%] left-1/2 top-[14%] w-px bg-gradient-to-b from-transparent via-[#AFC0D7]/40 to-transparent" />

            <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[20deg] bg-gradient-to-r from-transparent via-[#B8C6D8]/25 to-transparent" />

            <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] bg-gradient-to-r from-transparent via-[#B8C6D8]/25 to-transparent" />

            {/* Central glow */}
            <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7694C2]/16 blur-[55px]" />

            {/* Minivel core */}
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
              <div
                className="
                  relative flex h-[180px] w-[180px]
                  flex-col items-center justify-center
                  rounded-full
                  border border-white/80
                  bg-white/90
                  shadow-[0_28px_70px_rgba(37,58,91,0.17)]
                  backdrop-blur-2xl
                "
              >
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#EAF1FA] via-white to-[#F4F0F4]" />

                <div className="relative flex flex-col items-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#29476F] to-[#5F76A1] text-white shadow-[0_10px_25px_rgba(41,71,111,0.24)]">
                    <svg
                      className="h-5 w-5"
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

                  <div className="text-[17px] font-extrabold tracking-[-0.02em] text-[#172A47]">
                    Minivel ATS
                  </div>

                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#7E8DA2]">
                    Connected Core
                  </div>
                </div>

                <div className="absolute -right-1 top-[38%] flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#F6F8FC] bg-white shadow-md">
                  <div className="h-2 w-2 animate-node-pulse rounded-full bg-[#7894BD]" />
                </div>
              </div>
            </div>

            {/* Floating integrations */}
            {INTEGRATIONS.map((integration) => (
              <IntegrationCard
                key={integration.name}
                integration={integration}
                floating
              />
            ))}
          </div>

          {/* Mobile / tablet */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
            {MOBILE_INTEGRATIONS.map((integration) => (
              <IntegrationCard
                key={integration.name}
                integration={integration}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5 lg:mt-1">
            <p className="text-[12px] font-medium text-[#7B899C]">
              Need another tool connected?
            </p>

            <button
              type="button"
              className="
                group inline-flex items-center gap-2
                rounded-full
                border border-[#CED9E8]
                bg-white/80
                px-4 py-2
                text-[11px] font-bold text-[#405E88]
                shadow-[0_6px_18px_rgba(30,50,80,0.04)]
                backdrop-blur
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#B9C9DE]
                hover:bg-white
                hover:shadow-[0_10px_25px_rgba(30,50,80,0.09)]
              "
            >
              Request an integration

              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
      </section>

      <style>{`
        @keyframes integrationFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes nodePulse {
          0%, 100% {
            opacity: 0.55;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.35);
          }
        }

        .animate-node-pulse {
          animation: nodePulse 2.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-node-pulse {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}