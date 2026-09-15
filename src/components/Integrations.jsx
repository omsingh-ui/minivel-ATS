import useReveal from "../hooks/useReveal";

import {
  FaLinkedinIn,
  FaWhatsapp,
  FaSlack,
} from "react-icons/fa";

import {
  SiIndeed,
  SiGmail,
  SiZoom,
  SiHubspot,
} from "react-icons/si";

import { MdOutlineMail } from "react-icons/md";
const INTEGRATIONS = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    brand: "#0A66C2",
    position: "left-[8%] top-[8%]",
  },
  {
    name: "Indeed",
    icon: SiIndeed,
    brand: "#2164F3",
    position: "right-[8%] top-[8%]",
  },
 {
  name: "Outlook",
  icon: MdOutlineMail,
  brand: "#0078D4",
  position: "left-[1%] top-[39%]",
},
  {
    name: "Gmail",
    icon: SiGmail,
    brand: "#EA4335",
    position: "right-[1%] top-[39%]",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    brand: "#25D366",
    position: "left-[8%] bottom-[7%]",
  },
  {
    name: "Slack",
    icon: FaSlack,
    brand: "#611F69",
    position: "right-[8%] bottom-[7%]",
  },
  {
    name: "Zoom",
    icon: SiZoom,
    brand: "#2D8CFF",
    position: "left-[31%] bottom-[0%]",
  },
  {
    name: "HubSpot",
    icon: SiHubspot,
    brand: "#FF7A59",
    position: "right-[31%] bottom-[0%]",
  },
];

const CONNECTIONS = [
  { x1: 50, y1: 50, x2: 20, y2: 17, delay: "0s" },
  { x1: 50, y1: 50, x2: 80, y2: 17, delay: ".5s" },
  { x1: 50, y1: 50, x2: 14, y2: 47, delay: "1s" },
  { x1: 50, y1: 50, x2: 86, y2: 47, delay: "1.5s" },
  { x1: 50, y1: 50, x2: 20, y2: 79, delay: "2s" },
  { x1: 50, y1: 50, x2: 80, y2: 79, delay: "2.5s" },
  { x1: 50, y1: 50, x2: 38, y2: 91, delay: "3s" },
  { x1: 50, y1: 50, x2: 62, y2: 91, delay: "3.5s" },
];

function IntegrationLogo({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="
        flex h-[62px] w-[62px]
        shrink-0 items-center justify-center
        rounded-[17px]
        border border-[#20202A]/[0.08]
        bg-white
        shadow-[0_8px_24px_rgba(28,28,40,.06)]
        transition-all duration-300
        group-hover:border-[#20202A]/[0.12]
        group-hover:shadow-[0_12px_30px_rgba(28,28,40,.09)]
      "
    >
      <Icon
        className="h-[29px] w-[29px]"
        style={{ color: item.brand }}
        aria-hidden="true"
      />
    </div>
  );
}

function IntegrationCard({ item }) {
  return (
    <div
      className={`
        group
        absolute
        ${item.position}
        z-20
        hidden
        lg:block
      `}
    >
      <div
        className="
          flex min-w-[170px]
          items-center gap-3
          rounded-[19px]
          border border-[#20202A]/[0.075]
          bg-white/95
          px-3.5 py-3
          shadow-[0_12px_32px_rgba(30,30,42,.055)]
          backdrop-blur-xl

          transition-all duration-300
          ease-out

          hover:-translate-y-[2px]
          hover:border-[#20202A]/[0.11]
          hover:shadow-[0_18px_42px_rgba(30,30,42,.085)]
        "
      >
        <IntegrationLogo item={item} />

        <div>
          <p className="text-[11.5px] font-bold tracking-[-0.01em] text-[#24242B]">
            {item.name}
          </p>

          <div className="mt-1.5 flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: item.brand }}
            />

            <span className="text-[8px] font-medium text-[#85858E]">
              Integration
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileIntegrationCard({ item }) {
  return (
    <div
      className="
        flex items-center gap-3
        rounded-[17px]
        border border-[#20202A]/[0.075]
        bg-white
        p-3
        shadow-[0_8px_24px_rgba(30,30,42,.05)]
      "
    >
      <IntegrationLogo item={item} />

      <div className="min-w-0">
        <p className="truncate text-[11px] font-bold text-[#24242B]">
          {item.name}
        </p>

        <p className="mt-1 text-[8px] text-[#85858E]">
          Integration
        </p>
      </div>
    </div>
  );
}

function ConnectionNetwork() {
  return (
    <svg
      className="
        pointer-events-none
        absolute inset-0
        hidden h-full w-full
        lg:block
      "
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
     <defs>
  <linearGradient
    id="integrationLine"
    x1="0"
    y1="0"
    x2="1"
    y2="1"
  >
    <stop
      offset="0%"
      stopColor="rgba(92,72,135,.16)"
    />

    <stop
      offset="28%"
      stopColor="rgba(112,88,164,.32)"
    />

    <stop
      offset="52%"
      stopColor="rgba(132,103,190,.46)"
    />

    <stop
      offset="76%"
      stopColor="rgba(94,105,174,.31)"
    />

    <stop
      offset="100%"
      stopColor="rgba(69,91,153,.15)"
    />
  </linearGradient>

  <filter
    id="signalGlow"
    x="-200%"
    y="-200%"
    width="500%"
    height="500%"
  >
    <feGaussianBlur
      stdDeviation="0.7"
      result="blur"
    />

    <feMerge>
      <feMergeNode in="blur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>

      {CONNECTIONS.map((line, index) => (
        <g key={index}>
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#integrationLine)"
            strokeWidth="0.14"
            vectorEffect="non-scaling-stroke"
          />

        <circle
  className="integration-signal"
  r="0.62"
  fill="#9276C4"
  filter="url(#signalGlow)"
  style={{
    "--x1": line.x1,
    "--y1": line.y1,
    "--x2": line.x2,
    "--y2": line.y2,
    animationDelay: line.delay,
  }}
/>
        </g>
      ))}
    </svg>
  );
}

function MinivelCore() {
  return (
    <div
      className="
        group/core
        relative z-30
        flex h-[235px] w-[235px]
        items-center justify-center
        overflow-visible
        rounded-[42px]

        border border-white/[0.11]
        bg-[#0E0E13]

        shadow-[0_35px_90px_rgba(37,31,51,.24)]

        transition-all duration-700
        hover:-translate-y-[3px]
        hover:border-white/[0.16]
        hover:shadow-[0_42px_105px_rgba(45,36,65,.30)]
      "
    >
      {/* Large atmospheric aura */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2 -z-10
          h-[330px] w-[330px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#7861A8]/[0.07]
          blur-[70px]

          transition-all duration-1000
          group-hover/core:scale-110
          group-hover/core:bg-[#7861A8]/[0.10]
        "
      />

      {/* Main clipped surface */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
          rounded-[42px]
        "
      >
        {/* Violet atmosphere */}
        <div
          className="
            absolute -right-20 -top-20
            h-[210px] w-[210px]
            rounded-full
            bg-[#9274C7]/[0.18]
            blur-[68px]

            transition-all duration-1000
            group-hover/core:scale-125
            group-hover/core:bg-[#9274C7]/[0.23]
          "
        />

        {/* Blue atmosphere */}
        <div
          className="
            absolute -bottom-24 -left-20
            h-[220px] w-[220px]
            rounded-full
            bg-[#5778C2]/[0.14]
            blur-[72px]

            transition-all duration-1000
            group-hover/core:scale-125
            group-hover/core:bg-[#5778C2]/[0.18]
          "
        />

        {/* Central illumination */}
        <div
          className="
            absolute left-1/2 top-[43%]
            h-[145px] w-[145px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#A58AD8]/[0.07]
            blur-[45px]

            transition-all duration-700
            group-hover/core:scale-125
            group-hover/core:bg-[#A58AD8]/[0.11]
          "
        />

        {/* Soft surface depth */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-white/[0.035]
            via-transparent
            to-[#8068B3]/[0.045]
          "
        />

        {/* Moving soft reflection */}
        <div
          className="
            absolute -left-[80%] top-[-70%]
            h-[240%] w-[38%]
            rotate-[18deg]
            bg-white/[0.055]
            blur-[16px]

            transition-all
            duration-[1100ms]
            ease-out

            group-hover/core:left-[145%]
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">

        {/* Premium ATS symbol */}
        <div
          className="
            relative
            mx-auto
            flex h-[72px] w-[72px]
            items-center justify-center
            rounded-[22px]

            border border-white/[0.11]
            bg-white/[0.055]

            shadow-[0_14px_38px_rgba(0,0,0,.24)]

            backdrop-blur-xl

            transition-all duration-700
            group-hover/core:-translate-y-[2px]
            group-hover/core:bg-white/[0.075]
            group-hover/core:shadow-[0_18px_46px_rgba(0,0,0,.30)]
          "
        >
          {/* Icon atmosphere */}
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              h-12 w-12
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-[#A58BD3]/[0.13]
              blur-[18px]

              transition-all duration-700
              group-hover/core:scale-125
              group-hover/core:bg-[#A58BD3]/[0.19]
            "
          />

          {/* ATS / workflow icon */}
          <svg
            className="
              relative
              h-[31px] w-[31px]
              text-[#B09ADD]
              drop-shadow-[0_3px_10px_rgba(160,135,215,.20)]
            "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect
              x="4.5"
              y="4.5"
              width="15"
              height="15"
              rx="4"
              strokeWidth="1.45"
            />

            <circle
              cx="9"
              cy="9"
              r="1.5"
              strokeWidth="1.4"
            />

            <path
              d="M7 14.5c.45-1.7 1.4-2.5 2.8-2.5 1.35 0 2.3.8 2.7 2.5"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            <path
              d="M14.5 8.5h2.5"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            <path
              d="M14.5 11.5h2.5"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            <path
              d="M14.5 14.5h1.6"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Brand */}
        <p
          className="
            mt-5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-[#858590]
          "
        >
          Minivel
        </p>

        {/* Product */}
        <h3
          className="
            mt-1.5
            text-[25px]
            font-black
            tracking-[-0.045em]
            text-[#F5F5F7]
          "
        >
          ATS
        </h3>

        {/* Description */}
        <p
          className="
            mx-auto mt-2.5
            max-w-[145px]
            text-[9px]
            font-medium
            leading-[1.6]
            text-[#777782]
          "
        >
          Your connected recruitment workspace
        </p>
      </div>

      {/* Very soft inner glow */}
      <div
        className="
          pointer-events-none
          absolute inset-[1px]
          rounded-[41px]
          shadow-[inset_0_1px_0_rgba(255,255,255,.055)]
        "
      />
    </div>
  );
}

export default function Integrations() {
  const revealRef = useReveal();

  return (
    <>
      <section
        ref={revealRef}
        id="integrations"
        className="
          reveal-section
          relative overflow-hidden

          bg-[#FAFAFB]

          pb-16 pt-14
          sm:pb-18 sm:pt-16
          lg:pb-20 lg:pt-12
        "
      >
        {/* top boundary */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 top-0
            h-px

            bg-gradient-to-r
            from-transparent
            via-[#25252D]/[0.07]
            to-transparent
          "
        />

        {/* background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute -left-44 top-[5%]
              h-[390px] w-[390px]
              rounded-full
              bg-[#5878BD]/[0.035]
              blur-[145px]
            "
          />

          <div
            className="
              absolute -right-44 bottom-[-90px]
              h-[410px] w-[410px]
              rounded-full
              bg-[#876CB5]/[0.035]
              blur-[150px]
            "
          />

          <div
            className="
              absolute left-1/2 top-[62%]
              h-[330px] w-[760px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#75609D]/[0.025]
              blur-[130px]
            "
          />

          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(35,35,45,0.075) 1px, transparent 0)",
              backgroundSize: "35px 35px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            }}
          />
        </div>

        <div
          className="
            relative mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* HEADER — NO SMALL SECTION LABEL */}
          <div
            className="
              mx-auto
              mb-10
              text-center
              sm:mb-12
              lg:mb-14
            "
          >
            <h2 className="section-title">
              Connect the tools
              <span
                className="
                  mt-1 block
                  bg-gradient-to-r
                  from-[#25232A]
                  via-[#55496F]
                  to-[#66528F]
                  bg-clip-text
                  text-transparent
                "
              >
                your team already uses.
              </span>
            </h2>

            
             <p className="section-description mt-4">
            
              Bring recruitment tools and everyday communication into a more
              connected workflow, so your team can spend less time moving
              between systems.
            </p>
          </div>

          {/* DESKTOP ECOSYSTEM */}
          <div
            className="
              relative
              mx-auto
              hidden
              h-[590px]
              max-w-[1080px]
              lg:block
            "
          >
            {/* central surface */}
           <div
  className="
    pointer-events-none
    absolute left-1/2 top-1/2
    h-[470px] w-[700px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-[50%]
    bg-[#77629F]/[0.018]
    blur-[1px]
  "
/>
<div
  className="
    pointer-events-none
    absolute left-1/2 top-1/2
    h-[350px] w-[540px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-[50%]
    border border-[#8069A8]/[0.035]
  "
/>
<div
  className="
    pointer-events-none
    absolute left-1/2 top-1/2
    h-[300px] w-[460px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#8068B3]/[0.075]
    blur-[95px]
  "
/>

            <ConnectionNetwork />

            {INTEGRATIONS.map((item) => (
              <IntegrationCard
                key={item.name}
                item={item}
              />
            ))}

            {/* CENTER */}
<div
  className="
    absolute left-1/2 top-[48%]
    -translate-x-1/2
    -translate-y-1/2
  "
>
  <MinivelCore />
</div>
          </div>

          {/* TABLET / MOBILE */}
          <div className="lg:hidden">
            <div className="mx-auto mb-7 flex justify-center">
              <div className="scale-[0.84] sm:scale-[0.92]">
                <MinivelCore />
              </div>
            </div>

            <div
              className="
                grid grid-cols-2
                gap-2.5
                sm:grid-cols-4
                sm:gap-3
              "
            >
              {INTEGRATIONS.map((item) => (
                <MobileIntegrationCard
                  key={item.name}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* SUPPORTING STATEMENT */}
<div
  className="
    mx-auto mt-10
    flex max-w-2xl
    items-center
    justify-center
    gap-4
    text-center
    lg:mt-2
  "
>
  <p
    className="
      text-[10px]
      font-medium
      tracking-[0.02em]
      text-[#73737D]
      sm:text-[11px]
    "
  >
    One recruitment workspace, designed to fit into the way your
    team already works.
  </p>
</div>
</div>

        {/* bottom boundary */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-px

            bg-gradient-to-r
            from-transparent
            via-[#25252D]/[0.065]
            to-transparent
          "
        />
      </section>

      <style>{`
        /*
         * Lightweight signal animation.
         * Only SVG transform is animated — no expensive
         * filter/blur animation.
         */
        @keyframes integrationSignal {
          0% {
            cx: calc(var(--x1) * 1px);
            cy: calc(var(--y1) * 1px);
            opacity: 0;
          }

          12% {
            opacity: .55;
          }

          88% {
            opacity: .25;
          }

          100% {
            cx: calc(var(--x2) * 1px);
            cy: calc(var(--y2) * 1px);
            opacity: 0;
          }
        }

        .integration-signal {
          animation:
            integrationSignal
            4.5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .integration-signal {
            display: none;
          }
        }
      `}</style>
    </>
  );
}