const TRUST_BADGES = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622"
        />
      </svg>
    ),
    label: 'GDPR Compliant',
    subtext: 'Built around responsible handling of candidate and client data.',
    accent: '#647FA8',
    soft: '#EEF3F9',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16.5h.008v.008H12V16.5z"
        />
      </svg>
    ),
    label: 'CCPA Compliant',
    subtext: 'Privacy controls designed to support modern data requirements.',
    accent: '#88799D',
    soft: '#F3F0F6',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    label: '99.9% Uptime',
    subtext: 'Reliable platform availability for always-moving recruitment teams.',
    accent: '#668994',
    soft: '#EDF4F5',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
    label: '< 2hr Response',
    subtext: 'Responsive support when your recruitment workflow needs attention.',
    accent: '#B18E64',
    soft: '#F7F2EA',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    label: 'SOC 2 Type II',
    subtext: 'Independent security controls supporting enterprise requirements.',
    accent: '#9A7182',
    soft: '#F6EFF2',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15.75A3.75 3.75 0 1012 8.25a3.75 3.75 0 000 7.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 10.5V6.75a6.75 6.75 0 00-13.5 0v3.75M5.25 10.5h13.5v9.75H5.25V10.5z"
        />
      </svg>
    ),
    label: 'AES-256 Encryption',
    subtext: 'Strong encryption designed to protect sensitive recruitment data.',
    accent: '#68779D',
    soft: '#EFF1F7',
  },
];

const ASSURANCE_STATS = [
  {
    value: '99.97%',
    label: 'Platform uptime',
  },
  {
    value: '< 1.5hrs',
    label: 'Average support response',
  },
  {
    value: 'Zero',
    label: 'Reported data breaches',
  },
  {
    value: '5 min',
    label: 'Average live chat response',
  },
];

export default function TrustCompliance() {
  return (
    <section
      id="security"
      className="
        relative overflow-hidden
        bg-[#F7F7F5]
        pt-8 pb-10
        sm:pt-9 sm:pb-11
        lg:pt-10 lg:pb-12
      "
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[360px] w-[360px] rounded-full bg-[#A8BDD8]/12 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-80px] h-[380px] w-[380px] rounded-full bg-[#C8B7A0]/10 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(54,73,99,0.12) 0.7px, transparent 0.7px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span
            className="
              mb-3 inline-flex
              rounded-full
              border border-[#DDE4ED]
              bg-white/70
              px-3.5 py-1.5
              text-[10px]
              font-bold uppercase
              tracking-[0.22em]
              text-[#667A97]
              shadow-[0_5px_18px_rgba(37,53,75,0.03)]
              backdrop-blur
            "
          >
            Security & Compliance
          </span>

          <h2
            className="
              text-3xl font-extrabold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#17283F]
              sm:text-4xl
              lg:text-[44px]
            "
          >
            Trust is built into
            <span className="block bg-gradient-to-r from-[#526E98] via-[#7B789C] to-[#A48769] bg-clip-text text-transparent">
              every layer.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#718094] sm:text-[15px]">
            Candidate information is sensitive by nature. Minivel is designed
            around secure access, responsible data handling and dependable
            platform operations.
          </p>
        </div>

        {/* Security cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="
                group relative
                min-h-[150px]
                overflow-hidden
                rounded-[22px]
                border border-[#E3E7EC]
                bg-white/80
                p-5
                shadow-[0_8px_30px_rgba(35,52,74,0.035)]
                backdrop-blur-xl
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:border-[#D3DCE7]
                hover:bg-white
                hover:shadow-[0_22px_55px_rgba(35,52,74,0.10)]
                sm:p-6
              "
            >
              {/* Hover illumination */}
              <div
                className="
                  pointer-events-none
                  absolute -right-16 -top-16
                  h-40 w-40
                  scale-75
                  rounded-full
                  opacity-0
                  blur-[55px]
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:opacity-20
                "
                style={{
                  backgroundColor: badge.accent,
                }}
              />

              {/* Glass sweep */}
              <div
                className="
                  pointer-events-none
                  absolute -left-[100%] top-0
                  h-full w-[60%]
                  rotate-[14deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/60
                  to-transparent
                  opacity-0
                  transition-all
                  duration-[900ms]
                  group-hover:left-[140%]
                  group-hover:opacity-50
                "
              />

              <div className="relative z-10 flex items-start gap-4">
                {/* Icon */}
                <div
                  className="
                    flex h-12 w-12
                    shrink-0
                    items-center justify-center
                    rounded-[15px]
                    transition-all
                    duration-500
                    group-hover:-translate-y-0.5
                    group-hover:scale-[1.04]
                  "
                  style={{
                    color: badge.accent,
                    backgroundColor: badge.soft,
                  }}
                >
                  {badge.icon}
                </div>

                <div className="pt-0.5">
                  <h3
                    className="
                      text-[15px]
                      font-bold
                      tracking-[-0.015em]
                      text-[#20324B]
                      transition-colors
                      duration-300
                    "
                  >
                    {badge.label}
                  </h3>

                  <p className="mt-2 text-[12px] leading-[1.7] text-[#788698]">
                    {badge.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance panel */}
        <div
          className="
            relative mt-6
            overflow-hidden
            rounded-[26px]
            border border-[#2A3D59]
            bg-[#16243A]
            shadow-[0_25px_70px_rgba(31,45,67,0.16)]
          "
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#16243A_0%,#1B2C46_52%,#202C42_100%)]" />

          <div className="pointer-events-none absolute -left-20 -top-32 h-[300px] w-[300px] rounded-full bg-[#6D8DBA]/10 blur-[90px]" />

          <div className="pointer-events-none absolute -right-24 bottom-[-150px] h-[320px] w-[320px] rounded-full bg-[#B29A7A]/8 blur-[100px]" />

          <div className="relative">
            {/* Intro */}
            <div className="border-b border-white/[0.07] px-6 py-5 sm:px-8 lg:flex lg:items-center lg:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8EA4C3]">
                  Operational assurance
                </p>

                <h3 className="mt-1.5 text-[18px] font-bold tracking-[-0.02em] text-white">
                  Security that extends beyond compliance.
                </h3>
              </div>

              <p className="mt-2 max-w-md text-[11px] leading-5 text-[#8291A7] lg:mt-0 lg:text-right">
                Reliability, support and protection designed around the
                day-to-day reality of recruitment teams.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {ASSURANCE_STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    group relative
                    px-6 py-6
                    transition-colors
                    duration-500
                    hover:bg-white/[0.025]
                    sm:px-8

                    ${
                      index % 2 === 0
                        ? 'border-r border-white/[0.07]'
                        : ''
                    }

                    ${
                      index < 2
                        ? 'border-b border-white/[0.07] lg:border-b-0'
                        : ''
                    }

                    ${
                      index === 1
                        ? 'lg:border-r lg:border-white/[0.07]'
                        : ''
                    }

                    ${
                      index === 2
                        ? 'lg:border-r lg:border-white/[0.07]'
                        : ''
                    }
                  `}
                >
                  <div
                    className="
                      text-[26px]
                      font-black
                      tracking-[-0.045em]
                      text-[#D2DCE9]
                      transition-all
                      duration-500
                      group-hover:-translate-y-0.5
                      group-hover:text-white
                      sm:text-[29px]
                    "
                  >
                    {stat.value}
                  </div>

                  <div className="mt-1.5 text-[10px] font-medium text-[#8291A7]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-[10px] leading-5 text-[#929CAA]">
          Security controls, certifications and service commitments should be
          reviewed against Minivel's current verified policies before
          publication.
        </p>
      </div>
    </section>
  );
}