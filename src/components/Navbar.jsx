import { useEffect, useState } from "react";
import minivelLogo from "../assets/minivel-logo.png";

const NAV_LINKS = [
  { label: "Platform", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Integrations", href: "#integrations" },
  { label: "Security", href: "#security" },
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
        {/* =====================================================
            BACKGROUND ATMOSPHERE
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Brand glow */}
          <div
            className="
              absolute -left-20 top-[-125px]
              h-[230px] w-[430px]
              rounded-full
              bg-[#9BCF4D]/[0.055]
              blur-[100px]
            "
          />

          {/* Center white atmosphere */}
          <div
            className="
              absolute left-1/2 top-[-130px]
              h-[190px] w-[540px]
              -translate-x-1/2
              rounded-full
              bg-white/[0.025]
              blur-[100px]
            "
          />

          {/* Very restrained violet */}
          <div
            className="
              absolute right-[5%] top-[-130px]
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
                group/logo
                relative
                flex h-full
                w-[220px]
                shrink-0
                items-center
                overflow-visible

                sm:w-[245px]
                lg:w-[275px]
              "
            >
              {/* Logo glow */}
              <span
                className="
                  pointer-events-none
                  absolute
                  left-0 top-1/2
                  h-[55px] w-[210px]
                  -translate-y-1/2
                  rounded-full
                  bg-[#9BCF4D]/0
                  blur-[32px]

                  transition-all
                  duration-700

                  group-hover/logo:scale-110
                  group-hover/logo:bg-[#9BCF4D]/[0.10]
                "
              />

              <img
                src={minivelLogo}
                alt="Minivel Services"
                className="
                  relative
                  h-[67px] w-[220px]
                  object-contain
                  object-left

                  transition-all
                  duration-500
                  ease-out

                  group-hover/logo:scale-[1.035]
                  group-hover/logo:brightness-110

                  sm:h-[72px]
                  sm:w-[240px]

                  lg:h-[78px]
                  lg:w-[268px]
                "
              />

              {/* Logo energy line */}
              <span
                className="
                  absolute
                  bottom-[5px] left-0
                  h-px w-0

                  bg-gradient-to-r
                  from-[#73C550]
                  via-[#B5DD4C]
                  to-transparent

                  opacity-0
                  shadow-[0_0_12px_rgba(169,216,76,.55)]

                  transition-all
                  duration-700

                  group-hover/logo:w-[72%]
                  group-hover/logo:opacity-100
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
                gap-8
                lg:flex
                xl:gap-10
              "
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    group/nav
                    relative
                    flex h-[52px]
                    items-center
                    justify-center

                    text-[12px]
                    font-semibold
                    tracking-[-0.01em]
                    text-[#D5D5D9]

                    transition-all
                    duration-300

                    hover:text-white
                  "
                >
                  {/* Subtle light underneath */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      bottom-[4px] left-1/2

                      h-7 w-12
                      -translate-x-1/2
                      translate-y-2

                      rounded-full
                      bg-white/0
                      blur-[17px]

                      transition-all
                      duration-500

                      group-hover/nav:translate-y-0
                      group-hover/nav:bg-white/[0.08]
                    "
                  />

                  {/* Text */}
                  <span
                    className="
                      relative
                      transition-transform
                      duration-300

                      group-hover/nav:-translate-y-[2px]
                    "
                  >
                    {link.label}
                  </span>

                  {/* Minivel signal dot */}
                  <span
                    className="
                      absolute
                      bottom-[6px] left-0

                      h-1 w-1
                      scale-0
                      rounded-full

                      bg-[#A7D44C]

                      opacity-0

                      shadow-[0_0_8px_rgba(167,212,76,.75)]

                      transition-all
                      duration-300

                      group-hover/nav:scale-100
                      group-hover/nav:opacity-100
                    "
                  />

                  {/* Expanding line */}
                  <span
                    className="
                      absolute
                      bottom-[7px] left-[8px]

                      h-px w-0

                      bg-gradient-to-r
                      from-[#A7D44C]
                      via-[#D4ECA5]
                      to-transparent

                      opacity-0

                      transition-all
                      duration-500

                      group-hover/nav:w-[calc(100%-8px)]
                      group-hover/nav:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================= */}

            <div
              className="
                hidden
                items-center
                gap-5
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

                  text-[#D1D1D6]

                  transition-all
                  duration-300

                  hover:text-white
                "
              >
                {/* Search hover circle */}
                <span
                  className="
                    absolute inset-0
                    scale-50
                    rounded-full

                    border border-white/0
                    bg-white/0

                    opacity-0

                    transition-all
                    duration-400

                    group-hover/search:scale-100
                    group-hover/search:border-white/[0.10]
                    group-hover/search:bg-white/[0.045]
                    group-hover/search:opacity-100
                  "
                />

                <span
                  className="
                    relative
                    transition-transform
                    duration-300
                    group-hover/search:scale-110
                  "
                >
                  <SearchIcon />
                </span>
              </button>

              {/* Separator */}
              <span className="h-5 w-px bg-white/[0.10]" />

              {/* Sign In */}
              <a
                href="#"
                className="
                  group/signin
                  relative
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
                <span>Sign in</span>

                <span
                  className="
                    absolute
                    bottom-[3px] left-0

                    h-px w-0

                    bg-gradient-to-r
                    from-white
                    to-white/20

                    transition-all
                    duration-400

                    group-hover/signin:w-full
                  "
                />
              </a>

              {/* =================================================
                  PRIMARY CTA
              ================================================= */}

              <a
                href="#"
                className="
                  group/cta
                  relative
                  ml-1

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
                  duration-400

                  hover:-translate-y-[2px]
                  hover:shadow-[0_14px_38px_rgba(255,255,255,.16)]
                "
              >
                {/* Green layer */}
                <span
                  className="
                    absolute inset-0
                    translate-y-full

                    bg-gradient-to-r
                    from-[#F0F6E7]
                    via-white
                    to-[#F5F8ED]

                    transition-transform
                    duration-400

                    group-hover/cta:translate-y-0
                  "
                />

                {/* Shine */}
                <span
                  className="
                    absolute
                    -left-[70%] top-0

                    h-full w-[35%]

                    skew-x-[-20deg]

                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent

                    opacity-70

                    transition-all
                    duration-700

                    group-hover/cta:left-[125%]
                  "
                />

                <span className="relative">
                  Book a demo
                </span>

                <ArrowIcon
                  className="
                    relative h-3.5 w-3.5

                    transition-transform
                    duration-300

                    group-hover/cta:translate-x-1
                  "
                />

                {/* Green bottom signal */}
                <span
                  className="
                    absolute
                    bottom-0 left-0

                    h-[2px] w-0

                    bg-gradient-to-r
                    from-[#78C950]
                    to-[#B7DB4E]

                    transition-all
                    duration-500

                    group-hover/cta:w-full
                  "
                />
              </a>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Toggle navigation"
              className="
                group/menu
                relative
                flex h-11 w-11
                items-center
                justify-center

                text-white

                lg:hidden
              "
            >
              <span
                className="
                  absolute inset-0
                  scale-75
                  rounded-full

                  border border-white/[0.08]
                  bg-white/[0.025]

                  opacity-0

                  transition-all
                  duration-300

                  group-hover/menu:scale-100
                  group-hover/menu:opacity-100
                "
              />

              {menuOpen ? (
                <svg
                  className="relative h-5 w-5"
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
                  className="relative h-5 w-5"
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

        {/* =====================================================
            NAVBAR BOTTOM LINE
        ===================================================== */}

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

        {/* Tiny green edge */}
        <div
          className="
            pointer-events-none
            absolute bottom-0 left-0

            h-px w-[14%]

            bg-gradient-to-r
            from-[#8ECB4C]/50
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
        {/* Mobile background */}
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
            pt-[118px]
          "
        >
          <div className="flex-1">
            <p
              className="
                mb-5

                text-[8px]
                font-bold uppercase
                tracking-[0.25em]

                text-[#66666F]
              "
            >
              Explore Minivel
            </p>

            <nav>
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    group/mobile

                    relative

                    flex items-center
                    justify-between

                    overflow-hidden

                    border-b
                    border-white/[0.07]

                    py-5
                  "
                >
                  {/* Hover wash */}
                  <span
                    className="
                      pointer-events-none
                      absolute inset-0

                      -translate-x-full

                      bg-gradient-to-r
                      from-[#9BCF4D]/[0.045]
                      to-transparent

                      transition-transform
                      duration-500

                      group-hover/mobile:translate-x-0
                    "
                  />

                  <div
                    className="
                      relative
                      flex items-center
                      gap-4
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        font-bold
                        tracking-[0.18em]

                        text-[#55555E]

                        transition-colors
                        duration-300

                        group-hover/mobile:text-[#A7D44C]
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-[28px]
                        font-bold

                        tracking-[-0.04em]

                        text-[#E5E5E8]

                        transition-all
                        duration-300

                        group-hover/mobile:translate-x-2
                        group-hover/mobile:text-white
                      "
                    >
                      {link.label}
                    </span>
                  </div>

                  <span
                    className="
                      relative
                      text-[#686871]

                      transition-all
                      duration-300

                      group-hover/mobile:translate-x-1
                      group-hover/mobile:text-[#A7D44C]
                    "
                  >
                    <ArrowIcon />
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
                group/mobile-signin
                relative
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

              <ArrowIcon
                className="
                  h-3.5 w-3.5
                  transition-transform
                  duration-300
                  group-hover/mobile-signin:translate-x-1
                "
              />
            </a>

            <a
              href="#"
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
                  duration-400

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
            </a>
          </div>
        </div>
      </div>
    </>
  );
}