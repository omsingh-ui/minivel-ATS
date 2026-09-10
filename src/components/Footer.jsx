const FOOTER_LINKS = {
  Platform: [
    { label: "Talent Discovery", href: "#sourcing" },
    { label: "Intelligent Screening", href: "#screening" },
    { label: "Candidate Collaboration", href: "#profile-sharing" },
    { label: "Recruitment Intelligence", href: "#reports" },
  ],

  Explore: [
    { label: "How Minivel Works", href: "#workflow" },
    { label: "Connected Integrations", href: "#integrations" },
    { label: "Security & Trust", href: "#security" },
    { label: "Questions & Answers", href: "#faq" },
  ],

  Company: [
    { label: "About Minivel", href: "#" },
    { label: "Careers at Minivel", href: "#" },
    { label: "Insights & Ideas", href: "#" },
    { label: "Connect With Us", href: "#" },
  ],
};

const COLUMN_ACCENTS = {
  Platform: "#9FCF4A",
  Explore: "#A38AE1",
  Company: "#C1A47C",
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ActionCard({ eyebrow, title, description, href = "#" }) {
  return (
    <a
      href={href}
      className="
        group/action
        relative flex min-h-[118px]
        items-center justify-between
        overflow-hidden
        px-6 py-6
        transition-all duration-500
        hover:bg-white/[0.035]
        lg:px-7
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute -bottom-20 -left-10
          h-40 w-52 rounded-full
          bg-[#9B83D5]/0
          blur-[55px]
          transition-all duration-700
          group-hover/action:translate-x-8
          group-hover/action:bg-[#9B83D5]/[0.10]
        "
      />

      {/* Top animated line */}
      <div
        className="
          pointer-events-none
          absolute left-0 top-0
          h-px w-0
          bg-gradient-to-r
          from-[#9FCF4A]
          via-[#A48ADF]
          to-transparent
          opacity-0
          transition-all duration-700
          group-hover/action:w-[75%]
          group-hover/action:opacity-100
        "
      />

      {/* Light sweep */}
      <div
        className="
          pointer-events-none
          absolute -left-[80%] top-0
          h-full w-[35%]
          skew-x-[-20deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.035]
          to-transparent
          transition-all duration-[900ms]
          group-hover/action:left-[125%]
        "
      />

      <div className="relative z-10 pr-5">
        <p
          className="
            text-[8px] font-bold uppercase
            tracking-[0.22em]
            text-[#65656E]
            transition-colors duration-300
            group-hover/action:text-[#8D8D97]
          "
        >
          {eyebrow}
        </p>

        <h4
          className="
            mt-2 text-[13px] font-bold
            tracking-[-0.02em]
            text-[#B8B8C0]
            transition-all duration-400
            group-hover/action:translate-x-1
            group-hover/action:text-white
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-1.5 text-[9.5px]
            leading-5 text-[#55555E]
            transition-colors duration-300
            group-hover/action:text-[#777780]
          "
        >
          {description}
        </p>
      </div>

      <span
        className="
          relative z-10
          flex h-9 w-9 shrink-0
          items-center justify-center
          rounded-full
          border border-white/[0.08]
          bg-white/[0.025]
          text-[#666670]
          transition-all duration-500

          group-hover/action:-translate-y-1
          group-hover/action:translate-x-1
          group-hover/action:rotate-[8deg]
          group-hover/action:border-white/[0.18]
          group-hover/action:bg-white/[0.08]
          group-hover/action:text-white
          group-hover/action:shadow-[0_0_25px_rgba(255,255,255,.08)]
        "
      >
        <ArrowIcon />
      </span>
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative z-20
        overflow-hidden
        bg-[#030303]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-52 top-[-80px]
            h-[500px] w-[500px]
            rounded-full
            bg-[#7D9B4D]/[0.035]
            blur-[160px]
          "
        />

        <div
          className="
            absolute -right-52 bottom-[-200px]
            h-[520px] w-[520px]
            rounded-full
            bg-[#8069B5]/[0.045]
            blur-[170px]
          "
        />

        <div
          className="
            absolute left-[42%] top-[20%]
            h-[300px] w-[300px]
            rounded-full
            bg-white/[0.012]
            blur-[120px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 88%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 88%)",
          }}
        />
      </div>

      {/* Top precision line */}
      <div
        className="
          absolute inset-x-0 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.12]
          to-transparent
        "
      />

      <div
        className="
          relative mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            LARGE CLOSING STATEMENT
        ===================================================== */}

        <div
          className="
            border-b border-white/[0.065]
            py-12
            sm:py-14
            lg:py-16
          "
        >
          <div
            className="
              grid gap-9
              lg:grid-cols-[1.45fr_.55fr]
              lg:items-end
            "
          >
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="
                      absolute inline-flex
                      h-full w-full
                      animate-ping
                      rounded-full
                      bg-[#A7D44C]
                      opacity-20
                    "
                  />

                  <span
                    className="
                      relative inline-flex
                      h-1.5 w-1.5
                      rounded-full
                      bg-[#A7D44C]
                      shadow-[0_0_10px_rgba(167,212,76,.5)]
                    "
                  />
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold uppercase
                    tracking-[0.25em]
                    text-[#72727C]
                  "
                >
                  Minivel Recruitment Intelligence
                </span>
              </div>

              <h2
                className="
                  max-w-[820px]
                  text-[32px]
                  font-black
                  leading-[1.04]
                  tracking-[-0.05em]
                  text-[#F5F5F6]

                  sm:text-[40px]
                  lg:text-[48px]
                "
              >
                Better hiring starts with

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white
                    via-[#C7C2D7]
                    to-[#9B84CF]
                    bg-clip-text
                    text-transparent
                  "
                >
                  better recruitment intelligence.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1 lg:text-right">
              <p
                className="
                  max-w-[370px]
                  text-[12px]
                  leading-[1.9]
                  text-[#6E6E78]
                  lg:ml-auto
                "
              >
                Connect talent, teams and hiring decisions in one intelligent
                workspace designed to keep recruitment moving forward.
              </p>

              <a
                href="#overview"
                className="
                  group/top
                  mt-5 inline-flex
                  items-center gap-3
                  text-[9px]
                  font-bold uppercase
                  tracking-[0.19em]
                  text-[#777781]
                  transition-colors duration-300
                  hover:text-white
                "
              >
                Back to top

                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    border border-white/[0.08]
                    bg-white/[0.025]
                    transition-all duration-500

                    group-hover/top:-translate-y-1
                    group-hover/top:border-[#A7D44C]/30
                    group-hover/top:bg-[#A7D44C]/[0.07]
                    group-hover/top:text-[#B7DE55]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="M12 18V6m-4 4 4-4 4 4"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BRAND + NAVIGATION
        ===================================================== */}

        <div
          className="
            grid gap-12
            py-11
            sm:py-12
            lg:grid-cols-[1fr_2fr]
            lg:gap-16
          "
        >
          {/* BRAND */}
          <div>
            <a
              href="#overview"
              className="
                group/brand
                inline-flex items-baseline gap-2
              "
            >
              <span
                className="
                  text-[29px]
                  font-black
                  tracking-[-0.055em]
                  text-white
                  transition-all duration-300
                  group-hover/brand:tracking-[-0.045em]
                "
              >
                Minivel
              </span>

              <span
                className="
                  text-[9px]
                  font-extrabold uppercase
                  tracking-[0.2em]
                  text-[#A5D14B]
                  transition-all duration-300
                  group-hover/brand:text-[#B8DE5C]
                "
              >
                ATS
              </span>
            </a>

            <p
              className="
                mt-4 max-w-[340px]
                text-[11px]
                leading-[1.9]
                text-[#61616B]
              "
            >
              An intelligent recruitment workspace connecting talent
              discovery, screening, collaboration and hiring insight.
            </p>

            <div
              className="
                group/status
                mt-6 inline-flex
                items-center gap-2.5
                rounded-full
                border border-white/[0.07]
                bg-white/[0.02]
                px-3.5 py-2
                transition-all duration-400

                hover:border-[#A7D44C]/20
                hover:bg-[#A7D44C]/[0.035]
              "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="
                    absolute inline-flex
                    h-full w-full
                    animate-ping
                    rounded-full
                    bg-[#A7D44C]
                    opacity-20
                  "
                />

                <span
                  className="
                    relative h-1.5 w-1.5
                    rounded-full
                    bg-[#A7D44C]
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  font-medium
                  text-[#777781]
                  transition-colors
                  group-hover/status:text-[#A2A2AB]
                "
              >
                Built for modern recruitment teams
              </span>
            </div>
          </div>

          {/* ===================================================
              PLATFORM / EXPLORE / COMPANY
          =================================================== */}

          <div
            className="
              grid grid-cols-1
              gap-4
              sm:grid-cols-3
            "
          >
            {Object.entries(FOOTER_LINKS).map(([title, links]) => {
              const accent = COLUMN_ACCENTS[title];

              return (
                <div
                  key={title}
                  className="
                    group/column
                    relative overflow-hidden
                    rounded-[18px]
                    border border-white/[0.055]
                    bg-white/[0.015]
                    px-5 py-5

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-white/[0.11]
                    hover:bg-white/[0.03]
                    hover:shadow-[0_18px_50px_rgba(0,0,0,.22)]
                  "
                >
                  {/* column glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute -right-12 -top-12
                      h-28 w-28
                      rounded-full
                      opacity-0
                      blur-[45px]
                      transition-all duration-700
                      group-hover/column:scale-125
                      group-hover/column:opacity-[0.12]
                    "
                    style={{
                      backgroundColor: accent,
                    }}
                  />

                  {/* top highlight */}
                  <div
                    className="
                      absolute left-5 top-0
                      h-px w-10
                      transition-all duration-500
                      group-hover/column:w-[65%]
                    "
                    style={{
                      background: `linear-gradient(90deg, ${accent}, transparent)`,
                    }}
                  />

                  {/* HEADING */}
                  <div className="relative flex items-center gap-2.5">
                    <span
                      className="
                        h-1.5 w-1.5
                        rounded-full
                        transition-transform duration-500
                        group-hover/column:scale-125
                      "
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 0 12px ${accent}`,
                      }}
                    />

                    <h3
                      className="
                        text-[10px]
                        font-extrabold uppercase
                        tracking-[0.22em]
                        text-[#B6B6BE]
                        transition-colors duration-300
                        group-hover/column:text-white
                      "
                    >
                      {title}
                    </h3>
                  </div>

                  <div
                    className="
                      relative mt-4
                      h-px w-full
                      bg-white/[0.05]
                    "
                  />

                  {/* LINKS */}
                  <ul className="relative mt-4 space-y-3.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="
                            group/link
                            flex items-center
                            justify-between
                            gap-3

                            text-[10.5px]
                            font-medium
                            text-[#696972]

                            transition-all
                            duration-300

                            hover:translate-x-1
                            hover:text-white
                          "
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="
                                h-1 w-1
                                scale-0 rounded-full
                                opacity-0
                                transition-all duration-300
                                group-hover/link:scale-100
                                group-hover/link:opacity-100
                              "
                              style={{
                                backgroundColor: accent,
                                boxShadow: `0 0 8px ${accent}`,
                              }}
                            />

                            <span>{link.label}</span>
                          </div>

                          <span
                            className="
                              -translate-x-1
                              text-[10px]
                              opacity-0
                              transition-all duration-300

                              group-hover/link:translate-x-0
                              group-hover/link:opacity-100
                            "
                            style={{ color: accent }}
                          >
                            ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            ACTION STRIP
        ===================================================== */}

        <div
          className="
            relative overflow-hidden
            rounded-[20px]
            border border-white/[0.06]
            bg-[#070708]/80
          "
        >
          <div className="grid sm:grid-cols-3">
            <ActionCard
              eyebrow="Start a conversation"
              title="Talk with the Minivel team"
              description="Discuss your recruitment workflow."
            />

            <div
              className="
                border-t border-white/[0.06]
                sm:border-l sm:border-t-0
              "
            >
              <ActionCard
                eyebrow="Explore the platform"
                title="Experience Minivel ATS"
                description="See connected hiring in action."
              />
            </div>

            <div
              className="
                group/lifecycle
                relative flex min-h-[118px]
                items-center
                overflow-hidden
                border-t border-white/[0.06]
                px-6 py-6
                transition-all duration-500

                hover:bg-white/[0.025]

                sm:border-l sm:border-t-0
                lg:px-7
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute -bottom-16 -right-12
                  h-36 w-44
                  rounded-full
                  bg-[#A7D44C]/0
                  blur-[50px]
                  transition-all duration-700
                  group-hover/lifecycle:bg-[#A7D44C]/[0.07]
                "
              />

              <div className="relative">
                <p
                  className="
                    text-[8px]
                    font-bold uppercase
                    tracking-[0.22em]
                    text-[#65656E]
                  "
                >
                  Intelligence layer
                </p>

                <div
                  className="
                    mt-2.5 flex
                    items-center gap-2.5
                    text-[11px]
                    font-semibold
                    text-[#85858F]
                    transition-colors duration-300
                    group-hover/lifecycle:text-white
                  "
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className="
                        absolute inline-flex
                        h-full w-full
                        animate-ping
                        rounded-full
                        bg-[#A7D44C]
                        opacity-20
                      "
                    />

                    <span
                      className="
                        relative h-1.5 w-1.5
                        rounded-full
                        bg-[#A7D44C]
                      "
                    />
                  </span>

                  Connected from discovery to decision
                </div>

                <p
                  className="
                    mt-1.5
                    text-[9.5px]
                    leading-5
                    text-[#55555E]
                  "
                >
                  Intelligence across the hiring lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div
          className="
            flex flex-col gap-4
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] text-[#4D4D55]">
              © {year} Minivel
            </span>

            <span className="hidden h-3 w-px bg-white/[0.07] sm:block" />

            <span className="text-[9px] text-[#4D4D55]">
              Recruitment intelligence, connected.
            </span>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {["Privacy", "Terms", "Cookies", "Accessibility"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    relative
                    text-[9px]
                    text-[#55555D]

                    transition-colors
                    duration-300

                    after:absolute
                    after:-bottom-1
                    after:left-0
                    after:h-px
                    after:w-0
                    after:bg-[#A7D44C]
                    after:transition-all
                    after:duration-300

                    hover:text-[#B7B7BF]
                    hover:after:w-full
                  "
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}