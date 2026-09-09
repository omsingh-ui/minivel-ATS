const CLIENT_LOGOS = [
  { name: 'Recruitment Agencies', abbr: 'RA', color: 'from-blue-500 to-blue-700' },
  { name: 'Staffing Teams', abbr: 'ST', color: 'from-slate-600 to-blue-700' },
  { name: 'Talent Partners', abbr: 'TP', color: 'from-indigo-500 to-blue-700' },
  { name: 'Executive Search', abbr: 'ES', color: 'from-violet-500 to-indigo-700' },
  { name: 'Hiring Teams', abbr: 'HT', color: 'from-sky-500 to-blue-700' },
  { name: 'Recruitment Ops', abbr: 'RO', color: 'from-blue-400 to-indigo-600' },
  { name: 'Talent Advisory', abbr: 'TA', color: 'from-slate-500 to-indigo-700' },
  { name: 'People Teams', abbr: 'PT', color: 'from-indigo-400 to-slate-700' },
];

const LogoChip = ({ logo }) => (
  <div
    className="
      flex
      flex-shrink-0
      items-center
      gap-3
      rounded-2xl
      border
      border-[#DDE5F0]
      bg-white/85
      px-4
      py-3
      shadow-[0_8px_24px_rgba(30,50,80,0.05)]
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:border-[#C9D6E9]
      hover:shadow-[0_14px_30px_rgba(30,50,80,0.09)]
    "
  >
    <div
      className={`
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-xl
        bg-gradient-to-br
        ${logo.color}
        text-[11px]
        font-bold
        text-white
        shadow-sm
      `}
    >
      {logo.abbr}
    </div>

    <span className="whitespace-nowrap text-[13px] font-semibold text-[#31415D]">
      {logo.name}
    </span>
  </div>
);

export default function SocialProof() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <>
      <section className="relative overflow-hidden bg-[#F8FAFD] py-5 sm:py-6 lg:py-7">
        {/* Soft transition from previous section */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

        {/* Very subtle background depth */}
        <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-[#B9C9E5]/12 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-[#D7C8AA]/8 blur-3xl" />

        <div className="relative">
          {/* Heading */}
          <div className="mx-auto mb-5 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#70819B]">
              Built for modern recruitment teams
            </p>
          </div>

          {/* Moving strip */}
          <div className="relative">
            {/* Side fades */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#F8FAFD] via-[#F8FAFD]/85 to-transparent sm:w-24" />

            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#F8FAFD] via-[#F8FAFD]/85 to-transparent sm:w-24" />

            <div
              className="flex w-max gap-3 animate-social-scroll"
              style={{ willChange: 'transform' }}
            >
              {doubled.map((logo, index) => (
                <LogoChip
                  key={`${logo.abbr}-${index}`}
                  logo={logo}
                />
              ))}
            </div>
          </div>

          {/* Small supporting line */}
          <div className="mx-auto mt-5 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-[12px] leading-6 text-[#77859A]">
              Designed around sourcing, screening, collaboration and connected hiring workflows.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes socialScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-social-scroll {
          animation: socialScroll 28s linear infinite;
        }

        .animate-social-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-social-scroll {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}