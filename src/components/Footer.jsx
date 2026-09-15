import minivelLogo from "../assets/minivel-logo.png";

const FOOTER_LINKS = {
  Platform: [
    { label: "Candidate Sourcing", href: "#sourcing" },
    { label: "Candidate Screening", href: "#screening" },
    { label: "Profile Sharing", href: "#profile-sharing" },
    { label: "Recruitment Insights", href: "#reports" },
  ],

  Explore: [
    { label: "How It Works", href: "#workflow" },
    { label: "Integrations", href: "#integrations" },
    { label: "Security", href: "#security" },
    { label: "FAQs", href: "#faq" },
  ],

  Company: [
    { label: "About Minivel", href: "#" },
    { label: "Careers", href: "#" },
    { label: "News & Insights", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-3.5 w-3.5"
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

function ArrowUp() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        d="M12 19V5m-5 5 5-5 5 5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        id="contact"
        className="
          relative z-20
          overflow-hidden
          bg-[#08080B]
          text-white
        "
      >
        {/* =========================================
            BACKGROUND
        ========================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute -left-52 top-[-160px]
              h-[480px] w-[480px]
              rounded-full
              bg-[#627FC8]/[0.055]
              blur-[160px]
            "
          />

          <div
            className="
              absolute -right-52 bottom-[-180px]
              h-[500px] w-[500px]
              rounded-full
              bg-[#8C70BD]/[0.065]
              blur-[165px]
            "
          />

          <div className="footer-grid absolute inset-0" />
        </div>

        {/* Top precision line */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/[0.15]
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
          {/* =========================================
              CLOSING STATEMENT
          ========================================= */}

          <div
            className="
              border-b border-white/[0.07]
              py-14
              sm:py-16
              lg:py-[72px]
            "
          >
            <div
              className="
                grid gap-8
                lg:grid-cols-[1.45fr_.55fr]
                lg:items-end
                lg:gap-14
              "
            >
              <div>
                {/* No small label */}

                <h2
                  className="
                    max-w-[820px]
                    text-[34px]
                    font-black
                    leading-[1.05]
                    tracking-[-0.045em]
                    text-[#F7F7F8]
                    sm:text-[42px]
                    lg:text-[48px]
                  "
                >
                  Recruitment works better

                  <span
                    className="
                      mt-1 block
                      bg-gradient-to-r
                      from-[#FFFFFF]
                      via-[#D0C7E4]
                      to-[#A48AD5]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    when everything works together.
                  </span>
                </h2>
              </div>

              <div className="lg:pb-1 lg:text-right">
                <p
                  className="
                    max-w-[390px]
                    text-[13px]
                    leading-[1.8]
                    text-[#9696A0]
                    sm:text-[14px]
                    lg:ml-auto
                  "
                >
                  Bring candidates, recruiters and hiring decisions together
                  in one place, with a process your team can easily follow.
                </p>

                <a
                  href="#overview"
                  className="
                    group/top
                    mt-6 inline-flex
                    items-center gap-3
                    text-[11px]
                    font-semibold
                    text-[#92929C]
                    transition-colors duration-300
                    hover:text-white
                  "
                >
                  Back to top

                  <span
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-white/[0.10]
                      bg-white/[0.035]
                      text-[#A0A0AA]
                      transition-all duration-300
                      group-hover/top:-translate-y-1
                      group-hover/top:border-[#A58BD5]/30
                      group-hover/top:bg-[#A58BD5]/[0.08]
                      group-hover/top:text-[#C4B1E7]
                    "
                  >
                    <ArrowUp />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* =========================================
              BRAND + NAVIGATION
          ========================================= */}

          <div
            className="
              grid gap-12
              py-12
              sm:py-14
              lg:grid-cols-[1fr_2fr]
              lg:gap-20
              lg:py-16
            "
          >
            {/* BRAND */}

            <div>
              <a
                href="#overview"
                aria-label="Minivel Services"
                className="inline-flex items-center"
              >
                <img
                  src={minivelLogo}
                  alt="Minivel Services"
                  className="
                    h-[76px] w-[260px]
                    object-contain object-left
                    sm:h-[82px] sm:w-[285px]
                  "
                />
              </a>

              <p
                className="
                  mt-5
                  max-w-[370px]
                  text-[13px]
                  leading-[1.85]
                  text-[#85858F]
                  sm:text-[13.5px]
                "
              >
                A recruitment platform that brings candidate discovery,
                screening, collaboration and hiring decisions into one
                connected workspace.
              </p>
            </div>

            {/* NAVIGATION */}

            <div
              className="
                grid grid-cols-2
                gap-x-8 gap-y-10
                sm:grid-cols-3
                lg:gap-x-14
              "
            >
              {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                <div key={title}>
                  <h3
                    className="
                      text-[12px]
                      font-bold
                      tracking-[-0.01em]
                      text-[#E3E3E7]
                    "
                  >
                    {title}
                  </h3>

                  <ul className="mt-5 space-y-3.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="
                            group/link
                            inline-flex
                            items-center gap-2
                            text-[12.5px]
                            font-medium
                            text-[#85858F]
                            transition-all duration-300
                            hover:translate-x-1
                            hover:text-white
                            sm:text-[13px]
                          "
                        >
                          <span>{link.label}</span>

                          <span
                            className="
                              translate-x-[-3px]
                              text-[#A58BD5]
                              opacity-0
                              transition-all duration-300
                              group-hover/link:translate-x-0
                              group-hover/link:opacity-100
                            "
                          >
                            <ArrowUpRight />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              BOTTOM BAR
          ========================================= */}

          <div
            className="
              flex flex-col
              gap-5
              border-t border-white/[0.07]
              py-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div
              className="
                flex flex-wrap
                items-center
                gap-x-4 gap-y-2
                text-[11px]
                text-[#707079]
              "
            >
              <span>© {year} Minivel</span>

              <span className="hidden h-3 w-px bg-white/[0.10] sm:block" />

              <span>Built for better recruitment.</span>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Privacy", "Terms", "Cookies", "Accessibility"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      footer-legal-link
                      relative
                      text-[11px]
                      font-medium
                      text-[#74747D]
                      transition-colors duration-300
                      hover:text-[#C8C8CE]
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

      <style>{`
        /* =========================================
           SUBTLE FOOTER GRID
        ========================================= */

        .footer-grid {
          opacity: .055;

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

          background-size: 56px 56px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 92%
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 92%
            );
        }


        /* =========================================
           LEGAL LINK UNDERLINE
        ========================================= */

        .footer-legal-link::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -4px;

          width: 0;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              #8C75BC,
              #B09ADE
            );

          transition:
            width 300ms ease;
        }

        .footer-legal-link:hover::after {
          width: 100%;
        }


        /* =========================================
           ACCESSIBILITY
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .group\\/link,
          .group\\/top {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}