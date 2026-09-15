import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import minivelLogo from "../assets/minivel-logo.png";

const NAV_LINKS = [
  {
    label: "Platform",
    href: "#features",
    items: [
      {
        title: "Features",
        description: "Explore the Minivel recruitment platform",
        href: "#features",
      },
      {
        title: "Recruitment Workflow",
        description: "See how hiring moves through Minivel",
        href: "#workflow",
      },
      {
        title: "Integrations",
        description: "Connect your recruitment ecosystem",
        href: "#integrations",
      },
    ],
  },

  {
    label: "Workflow",
    href: "#workflow",
    items: [
      {
        title: "Hiring Workflow",
        description: "Move candidates from application to decision",
        href: "#workflow",
      },
      {
        title: "Candidate Management",
        description: "Organise profiles throughout the hiring process",
        href: "#workflow",
      },
      {
        title: "Team Collaboration",
        description: "Keep recruiters and hiring teams aligned",
        href: "#workflow",
      },
    ],
  },

  {
    label: "Integrations",
    href: "#integrations",
    items: [
      {
        title: "Recruitment Channels",
        description: "Connect sourcing and candidate platforms",
        href: "#integrations",
      },
      {
        title: "Communication",
        description: "Bring hiring conversations into your workflow",
        href: "#integrations",
      },
      {
        title: "Connected Tools",
        description: "Work with the tools your teams already use",
        href: "#integrations",
      },
    ],
  },

  {
    label: "Security",
    href: "#security",
    items: [
      {
        title: "Protected Access",
        description: "Control how recruitment information is accessed",
        href: "#security",
      },
      {
        title: "Data Handling",
        description: "Support responsible candidate data management",
        href: "#security",
      },
      {
        title: "Workflow Visibility",
        description: "Maintain visibility across recruitment activity",
        href: "#security",
      },
    ],
  },
];

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M7 12h10m-4-4 4 4-4 4"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="
        h-[15px] w-[15px]
        text-[#777780]
        transition-all duration-300
        group-hover/navitem:rotate-180
        group-hover/navitem:text-[#B1D66A]
      "
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="m7 10 5 5 5-5"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="h-[17px] w-[17px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="6.5" strokeWidth="1.7" />

      <path
        d="m16 16 4 4"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DesktopDropdown({ nav }) {
  return (
    <div
      className="
        group/navitem
        relative
        flex h-[52px]
        items-center
      "
    >
      {/* Main navigation button */}
      <a
        href={nav.href}
        className="
          relative
          flex h-[40px]
          items-center gap-[7px]
          rounded-[10px]
          px-3

          text-[12px]
          font-semibold
          tracking-[-0.01em]
          text-[#D5D5D9]

          transition-all
          duration-300

          hover:bg-white/[0.045]
          hover:text-white

          group-hover/navitem:bg-white/[0.045]
          group-hover/navitem:text-white
        "
      >
        <span>{nav.label}</span>

        <ChevronIcon />

        {/* restrained active light */}
        <span
          className="
            pointer-events-none
            absolute inset-x-3 bottom-[2px]
            h-px

            origin-center
            scale-x-0

            bg-gradient-to-r
            from-transparent
            via-[#A7D44C]/70
            to-transparent

            opacity-0

            transition-all
            duration-300

            group-hover/navitem:scale-x-100
            group-hover/navitem:opacity-100
          "
        />
      </a>

      {/* Hover bridge */}
      <div
        className="
          pointer-events-auto
          absolute
          left-1/2 top-full
          h-[18px] w-[310px]
          -translate-x-1/2
        "
      />

      {/* Dropdown */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[calc(100%+10px)]
          z-[70]

          w-[310px]
          -translate-x-1/2
          translate-y-[8px]
          scale-[0.985]

          overflow-hidden
          rounded-[20px]

          border
          border-white/[0.09]

          bg-[#0D0D10]/[0.98]

          p-2

          opacity-0

          shadow-[0_28px_80px_rgba(0,0,0,.55)]
          backdrop-blur-2xl

          transition-all
          duration-300
          ease-out

          group-hover/navitem:pointer-events-auto
          group-hover/navitem:translate-y-0
          group-hover/navitem:scale-100
          group-hover/navitem:opacity-100
        "
      >
        {/* subtle dropdown atmosphere */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16 -top-16
            h-[150px] w-[150px]
            rounded-full
            bg-[#9279C9]/[0.07]
            blur-[65px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-14 bottom-[-70px]
            h-[130px] w-[130px]
            rounded-full
            bg-[#9BCF4D]/[0.045]
            blur-[60px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[15%] right-[15%] top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/[0.18]
            to-transparent
          "
        />

        <div className="relative">
          {nav.items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="
                group/dropitem
                relative

                flex
                items-center
                justify-between
                gap-5

                overflow-hidden

                rounded-[14px]

                px-4 py-[14px]

                transition-all
                duration-300

                hover:bg-white/[0.055]
              "
            >
              {/* item hover wash */}
              <span
                className="
                  pointer-events-none
                  absolute inset-0

                  -translate-x-[105%]

                  bg-gradient-to-r
                  from-[#9BCF4D]/[0.035]
                  via-white/[0.018]
                  to-transparent

                  transition-transform
                  duration-500

                  group-hover/dropitem:translate-x-0
                "
              />

              <div className="relative min-w-0">
                <p
                  className="
                    text-[11.5px]
                    font-bold
                    tracking-[-0.012em]
                    text-[#E9E9EC]

                    transition-colors
                    duration-300

                    group-hover/dropitem:text-white
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    mt-1
                    max-w-[220px]
                    text-[9px]
                    leading-[1.55]
                    text-[#686872]

                    transition-colors
                    duration-300

                    group-hover/dropitem:text-[#85858F]
                  "
                >
                  {item.description}
                </p>
              </div>

              <span
                className="
                  relative
                  flex h-7 w-7
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/[0.06]

                  bg-white/[0.025]

                  text-[#666670]

                  transition-all
                  duration-300

                  group-hover/dropitem:translate-x-[2px]
                  group-hover/dropitem:border-[#A7D44C]/20
                  group-hover/dropitem:bg-[#A7D44C]/[0.055]
                  group-hover/dropitem:text-[#B4D96D]
                "
              >
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500

          ${
            scrolled
              ? `
                  border-b border-white/[0.07]
                  bg-black/[0.94]
                  shadow-[0_18px_55px_rgba(0,0,0,.38)]
                  backdrop-blur-2xl
                `
              : "bg-black"
          }
        `}
      >
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              -left-20 top-[-125px]
              h-[230px] w-[430px]
              rounded-full
              bg-[#9BCF4D]/[0.045]
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              left-1/2 top-[-130px]
              h-[190px] w-[540px]
              -translate-x-1/2
              rounded-full
              bg-white/[0.025]
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              right-[5%] top-[-130px]
              h-[190px] w-[300px]
              rounded-full
              bg-[#8B73C4]/[0.025]
              blur-[100px]
            "
          />
        </div>

        <div
          className="
            relative mx-auto
            max-w-[1500px]
            px-5
            sm:px-7
            lg:px-10
            xl:px-12
          "
        >
          <div
            className="
              flex h-[84px]
              items-center
              justify-between
              lg:h-[90px]
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <a
              href="#overview"
              aria-label="Minivel Services"
              className="
                relative
                flex h-full
                w-[235px]
                shrink-0
                items-center
                overflow-visible

                sm:w-[260px]
                lg:w-[292px]
              "
            >
              <img
                src={minivelLogo}
                alt="Minivel Services"
                className="
                  h-[72px]
                  w-[235px]
                  object-contain
                  object-left

                  sm:h-[78px]
                  sm:w-[255px]

                  lg:h-[84px]
                  lg:w-[285px]
                "
              />
            </a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                hidden
                items-center
                gap-2
                lg:flex
                xl:gap-3
              "
            >
              {NAV_LINKS.map((nav) => (
                <DesktopDropdown
                  key={nav.label}
                  nav={nav}
                />
              ))}
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================= */}

            <div
              className="
                hidden
                items-center
                gap-4
                lg:flex
              "
            >
              {/* Search */}
              <button
                type="button"
                aria-label="Search"
                className="
                  group/search
                  relative
                  flex h-10 w-10
                  items-center
                  justify-center

                  rounded-full

                  text-[#D1D1D6]

                  transition-all
                  duration-300

                  hover:bg-white/[0.045]
                  hover:text-white
                "
              >
                <span
                  className="
                    relative
                    transition-transform
                    duration-300
                    group-hover/search:scale-105
                  "
                >
                  <SearchIcon />
                </span>
              </button>

              <span className="h-5 w-px bg-white/[0.10]" />

              {/* Sign in */}
              <a
                href="#"
                className="
                  flex h-10
                  items-center

                  text-[11px]
                  font-semibold
                  text-[#D7D7DB]

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                Sign in
              </a>

              {/* Book demo */}
              <Link
                to="/request-demo"
                className="
                  group/cta
                  relative

                  inline-flex
                  h-[42px]
                  items-center
                  justify-center
                  gap-2.5

                  overflow-hidden

                  bg-white

                  px-5

                  text-[11px]
                  font-extrabold
                  text-black

                  shadow-[0_8px_28px_rgba(255,255,255,.08)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:shadow-[0_14px_38px_rgba(255,255,255,.16)]
                "
              >
                <span
                  className="
                    absolute inset-0
                    translate-y-full

                    bg-gradient-to-r
                    from-[#F0F6E7]
                    via-white
                    to-[#F5F8ED]

                    transition-transform
                    duration-300

                    group-hover/cta:translate-y-0
                  "
                />

                <span className="relative">
                  Book a demo
                </span>

                <ArrowIcon
                  className="
                    relative
                    h-3.5 w-3.5

                    transition-transform
                    duration-300

                    group-hover/cta:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="
                relative
                flex h-11 w-11
                items-center
                justify-center

                rounded-full

                border
                border-white/[0.07]

                bg-white/[0.025]

                text-white

                transition-colors
                duration-300

                hover:bg-white/[0.055]

                lg:hidden
              "
            >
              {menuOpen ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M5 7h14M5 12h14M5 17h14"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navbar bottom line */}
        <div
          className="
            pointer-events-none
            absolute bottom-0
            left-1/2

            h-px w-[94%]

            -translate-x-1/2

            bg-gradient-to-r
            from-transparent
            via-white/[0.11]
            to-transparent
          "
        />

        <div
          className="
            pointer-events-none
            absolute bottom-0 left-0

            h-px w-[14%]

            bg-gradient-to-r
            from-[#8ECB4C]/40
            to-transparent
          "
        />
      </header>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================= */}

      <div
        className={`
          fixed inset-0 z-40

          bg-black/[0.98]
          backdrop-blur-2xl

          transition-all
          duration-500

          lg:hidden

          ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }
        `}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              -left-28 top-20

              h-[320px] w-[320px]

              rounded-full

              bg-[#9BCF4D]/[0.055]

              blur-[115px]
            "
          />

          <div
            className="
              absolute
              -right-36 bottom-20

              h-[320px] w-[320px]

              rounded-full

              bg-[#8D75C5]/[0.045]

              blur-[120px]
            "
          />
        </div>

        <div
          className="
            relative
            flex min-h-screen
            flex-col

            px-6
            pb-8
            pt-[112px]
          "
        >
          <div className="flex-1">
            <nav>
              {NAV_LINKS.map((nav) => (
                <a
                  key={nav.label}
                  href={nav.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    group/mobile
                    flex
                    items-center
                    justify-between

                    border-b
                    border-white/[0.07]

                    py-5
                  "
                >
                  <span
                    className="
                      text-[26px]
                      font-bold
                      tracking-[-0.04em]
                      text-[#E5E5E8]

                      transition-all
                      duration-300

                      group-hover/mobile:translate-x-1
                      group-hover/mobile:text-white
                    "
                  >
                    {nav.label}
                  </span>

                  <span
                    className="
                      flex h-8 w-8
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/[0.07]

                      bg-white/[0.025]

                      text-[#707079]

                      transition-all
                      duration-300

                      group-hover/mobile:border-[#A7D44C]/20
                      group-hover/mobile:text-[#B4D96D]
                    "
                  >
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile actions */}
          <div className="border-t border-white/[0.07] pt-6">
            <a
              href="#"
              className="
                flex items-center
                justify-between

                py-3

                text-[12px]
                font-semibold

                text-[#B6B6BD]

                transition-colors
                duration-300

                hover:text-white
              "
            >
              Sign in

              <ArrowIcon className="h-3.5 w-3.5" />
            </a>

            <Link
              to="/request-demo"
              onClick={() => setMenuOpen(false)}
              className="
                group/mobile-cta

                relative mt-3

                flex items-center
                justify-between

                overflow-hidden

                bg-white

                px-5 py-4

                text-[12px]
                font-extrabold
                text-black
              "
            >
              <span
                className="
                  absolute inset-0

                  translate-y-full

                  bg-[#F2F7E9]

                  transition-transform
                  duration-300

                  group-hover/mobile-cta:translate-y-0
                "
              />

              <span className="relative">
                Book a demo
              </span>

              <ArrowIcon
                className="
                  relative h-4 w-4

                  transition-transform
                  duration-300

                  group-hover/mobile-cta:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}