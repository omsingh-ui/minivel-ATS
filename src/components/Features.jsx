const FEATURES = [
  {
    id: 'sourcing',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
    label: 'Talent Discovery',
    headline: 'Build a Stronger Talent Pipeline',
    accent: '#4F6F9F',
    soft: '#EEF3F9',
    bullets: [
      'Centralize candidate profiles in one searchable workspace',
      'Organize talent into structured pools and pipelines',
      'Search profiles using skills, roles and experience',
      'Keep candidate information accessible across your recruitment team',
    ],
  },
  {
    id: 'screening',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622"
        />
      </svg>
    ),
    label: 'AI Screening',
    headline: 'Move from Resumes to Relevant Candidates Faster',
    accent: '#6B6FA9',
    soft: '#F0F0F8',
    bullets: [
      'Analyze resumes and identify relevant skills and experience',
      'Compare candidate profiles against role requirements',
      'Surface stronger matches for recruiter review',
      'Keep human judgement at the centre of every hiring decision',
    ],
  },
  {
    id: 'profile-sharing',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314"
        />
      </svg>
    ),
    label: 'Candidate Sharing',
    headline: 'Present Better Shortlists to Hiring Teams',
    accent: '#6C7D8B',
    soft: '#F1F4F5',
    bullets: [
      'Create clear and structured candidate profiles',
      'Share shortlisted candidates with hiring stakeholders',
      'Centralize feedback and candidate evaluation',
      'Keep hiring discussions connected to each profile',
    ],
  },
  {
    id: 'reports',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25"
        />
      </svg>
    ),
    label: 'Recruitment Insights',
    headline: 'Understand What Is Happening Across Your Pipeline',
    accent: '#9A7D58',
    soft: '#F6F1EA',
    bullets: [
      'Track candidates across recruitment stages',
      'Monitor activity and turnaround times',
      'Understand pipeline movement through clear reporting',
      'Use recruitment data to improve future decisions',
    ],
  },
  {
    id: 'support',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: 'Workflow',
    headline: 'Give Recruiters More Time to Focus on People',
    accent: '#8D6E79',
    soft: '#F6F0F2',
    bullets: [
      'Reduce repetitive recruitment administration',
      'Create more consistent hiring workflows',
      'Improve collaboration across recruitment teams',
      'Keep candidate activity organised in one place',
    ],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white pt-5 pb-12 sm:pt-6 sm:pb-14 lg:pt-7 lg:pb-16"
    >
      {/* soft background depth */}
      <div className="absolute left-[-100px] top-[120px] h-[300px] w-[300px] rounded-full bg-[#DCE5F2]/25 blur-[100px]" />
      <div className="absolute right-[-80px] bottom-[80px] h-[280px] w-[280px] rounded-full bg-[#E8DDCB]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-9">
          <span className="mb-3 inline-flex items-center rounded-full border border-[#DCE5F0] bg-[#F7F9FC] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#60728E]">
            Platform Capabilities
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-[#16263F] sm:text-4xl lg:text-[46px]">
            One intelligent workspace for your
            <span className="block bg-gradient-to-r from-[#315B98] via-[#687BAE] to-[#947E9E] bg-clip-text text-transparent">
              recruitment workflow
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#68778C] sm:text-base">
            Bring sourcing, screening, collaboration and recruitment insights
            into one connected environment built around how recruiters work.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <article
              key={feature.id}
              id={feature.id}
              className={`
                group
                relative
                isolate
                min-h-[360px]
                overflow-hidden
                rounded-[24px]
                border
                border-[#E4EAF1]
                bg-white
                p-6
                shadow-[0_8px_26px_rgba(31,50,78,0.04)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:border-[#CBD8E8]
                hover:shadow-[0_26px_70px_rgba(29,49,80,0.13)]
                ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              {/* premium hover wash */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -z-10
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  background: `linear-gradient(145deg, ${feature.soft} 0%, rgba(255,255,255,0.96) 45%, #ffffff 100%)`,
                }}
              />

              {/* top-right glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-36
                  w-36
                  rounded-full
                  opacity-0
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:opacity-25
                  group-hover:scale-125
                "
                style={{ backgroundColor: feature.accent }}
              />

              {/* fine line detail */}
              <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#D7E1EC] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
                  group-hover:scale-[1.06]
                  group-hover:shadow-[0_12px_24px_rgba(30,50,80,0.10)]
                "
                style={{
                  backgroundColor: feature.soft,
                  borderColor: `${feature.accent}22`,
                  color: feature.accent,
                }}
              >
                {feature.icon}
              </div>

              {/* Label */}
              <div
                className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: feature.accent }}
              >
                {feature.label}
              </div>

              {/* Headline */}
              <h3 className="max-w-[320px] text-[20px] font-bold leading-[1.3] tracking-[-0.02em] text-[#1B2B44]">
                {feature.headline}
              </h3>

              {/* Divider */}
              <div className="my-5 h-px w-full bg-[#EEF2F6]" />

              {/* Bullets */}
              <ul className="space-y-3">
                {feature.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-[13px] leading-5 text-[#68778A]"
                  >
                    <div
                      className="mt-[3px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: feature.soft }}
                    >
                      <svg
                        className="h-2.5 w-2.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={feature.accent}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  transition-all
                  duration-500
                  ease-out
                  group-hover:w-full
                "
                style={{
                  background: `linear-gradient(90deg, ${feature.accent}, transparent)`,
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}