import { useRef } from "react";
import useReveal from "../hooks/useReveal";

const SECURITY_AREAS = [
  {
    title: "Protected Access",
    text:
      "Keep recruitment information within controlled workflows with access designed around authorised team members.",
    accent: "#647ED0",
    rgb: "100,126,208",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <rect x="6" y="10" width="12" height="10" rx="2" strokeWidth="1.7" />
        <path d="M8.5 10V7.5a3.5 3.5 0 017 0V10" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Responsible Data Handling",
    text:
      "Candidate and client information stays organised within a recruitment environment designed for careful data management.",
    accent: "#8269B3",
    rgb: "130,105,179",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path
          d="M12 3 19 6v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6z"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2 2 4-4"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Workflow Visibility",
    text:
      "Maintain clearer visibility across recruitment activity so teams understand how candidate information moves through the process.",
    accent: "#668793",
    rgb: "102,135,147",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path
          d="M4 12s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Reliable Operations",
    text:
      "Support everyday recruitment workflows with a platform designed around stability, continuity and dependable access.",
    accent: "#A07A58",
    rgb: "160,122,88",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path
          d="M4 14h4l2-6 3 10 2-6h5"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function SecurityCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="
        security-premium-card
        group relative
        min-h-[220px]
        overflow-hidden
        rounded-[23px]
        border border-[#26232E]/[0.08]
        bg-white
        p-6
        shadow-[0_10px_35px_rgba(32,28,43,.045)]
      "
      style={{
        "--accent": item.accent,
        "--accent-rgb": item.rgb,
      }}
    >
      <div className="security-cursor-glow" />

      <div className="pointer-events-none absolute inset-[1px] rounded-[21px] border border-white/80" />

      <div className="security-card-reflection pointer-events-none absolute left-[12%] right-[12%] top-0 h-px" />

      <div className="security-card-sweep" />

      <div className="relative z-10 flex h-full flex-col">
        {/* icon only — no number / no dot */}
        <div className="security-icon-wrap">
          <div
            className="
              security-icon-glow
              absolute inset-0
              rounded-[14px]
              opacity-0 blur-xl
              transition-opacity duration-500
              group-hover:opacity-50
            "
            style={{ backgroundColor: `${item.accent}35` }}
          />

          <div
            className="
              security-icon
              relative flex
              h-12 w-12
              items-center justify-center
              rounded-[14px]
              border
            "
            style={{
              color: item.accent,
              borderColor: `${item.accent}25`,
              backgroundColor: `${item.accent}0C`,
            }}
          >
            {item.icon}
          </div>
        </div>

        <div className="mt-auto pt-9">
          <h3 className="text-[14px] font-bold tracking-[-0.018em] text-[#26262D]">
            {item.title}
          </h3>

          <p
            className="
              mt-2
              max-w-[250px]
              text-[10.5px]
              leading-[1.75]
              text-[#74747E]
              transition-colors duration-500
              group-hover:text-[#60606A]
            "
          >
            {item.text}
          </p>

          
        </div>
      </div>

      <div className="security-card-bottom-line" />
    </div>
  );
}

function CandidateIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="8" r="3.2" strokeWidth="1.6" />
      <path
        d="M6.5 19c.7-3.2 2.5-5 5.5-5s4.8 1.8 5.5 5"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 3 19 6v5c0 4.4-2.7 7.8-7 10-4.3-2.2-7-5.6-7-10V6z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ATSIcon() {
  return (
    <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="5" y="4" width="14" height="16" rx="2.5" strokeWidth="1.6" />
      <path d="M8.5 9h7M8.5 12h7M8.5 15h4" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="9" cy="8" r="2.7" strokeWidth="1.6" />
      <circle cx="16.5" cy="9" r="2.1" strokeWidth="1.5" />
      <path
        d="M4.5 19c.5-3 2-4.7 4.5-4.7s4 1.7 4.5 4.7"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14 15c2.8-.5 4.6.9 5.3 3.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DataNode({
  title,
  description,
  icon,
  core = false,
}) {
  return (
    <div
      className={`
        architecture-node
        relative z-20
        flex-1
        overflow-hidden
        rounded-[18px]
        border
        px-4 py-4

        ${
          core
            ? `
                architecture-core
                border-[#9278C7]/30
                bg-[#1B1721]
                shadow-[0_14px_45px_rgba(121,92,167,.15)]
              `
            : `
                border-white/[0.075]
                bg-[#151519]/95
              `
        }
      `}
    >
      {core && (
        <>
          <div className="architecture-core-glow" />
          <div className="architecture-core-line" />
        </>
      )}

      <div className="relative flex items-center gap-3">
        <div
          className={`
            flex h-10 w-10
            shrink-0
            items-center justify-center
            rounded-[11px]
            border

            ${
              core
                ? `
                    border-[#9A82CF]/30
                    bg-[#9A82CF]/10
                    text-[#B39CDE]
                  `
                : `
                    border-white/[0.075]
                    bg-white/[0.025]
                    text-[#7B7B86]
                  `
            }
          `}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p
            className={`
              truncate
              text-[10.5px]
              font-bold

              ${
                core
                  ? "text-[#F0F0F3]"
                  : "text-[#C4C4CA]"
              }
            `}
          >
            {title}
          </p>

          <p className="mt-1 truncate text-[8px] text-[#62626D]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function PipelineConnector({ delay = "0s" }) {
  return (
    <div
      className="
        architecture-connector
        relative hidden
        h-[2px]
        flex-[0.25]
        overflow-visible
        lg:block
      "
    >
      <div className="absolute inset-0 bg-white/[0.06]" />

      <div
        className="architecture-line-energy"
        style={{ animationDelay: delay }}
      />

      <div
        className="architecture-packet"
        style={{ animationDelay: delay }}
      />

      <div
        className="architecture-packet architecture-packet-small"
        style={{
          animationDelay: `calc(${delay} + 1.25s)`,
        }}
      />
    </div>
  );
}

function MobileConnector() {
  return (
    <div className="relative mx-auto h-7 w-px overflow-hidden bg-white/[0.06] lg:hidden">
      <span className="mobile-data-packet" />
    </div>
  );
}

function SecurityArchitecture() {
  return (
    <div
      className="
        architecture-console
        relative mt-6
        overflow-hidden
        rounded-[28px]
        border border-[#292631]/[0.09]
        bg-[#0E0E12]
        shadow-[0_30px_90px_rgba(30,26,40,.18)]
      "
    >
      {/* subtle atmosphere */}
      <div
        className="
          pointer-events-none
          absolute -left-24 -top-28
          h-[320px] w-[320px]
          rounded-full
          bg-[#607CC0]/[0.09]
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-24 bottom-[-150px]
          h-[340px] w-[340px]
          rounded-full
          bg-[#8B73B5]/[0.08]
          blur-[120px]
        "
      />

      <div className="architecture-grid" />
      <div className="architecture-scanner" />

      <div
        className="
          pointer-events-none
          absolute left-[8%] right-[8%] top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.20]
          to-transparent
        "
      />

      {/* CLEAN HEADER */}
      <div
        className="
          relative z-10
          border-b border-white/[0.055]
          px-6 py-6
          sm:px-8
          lg:px-10 lg:py-7
        "
      >
        <h3
          className="
            max-w-[620px]
            text-[18px]
            font-bold
            tracking-[-0.025em]
            text-[#F0F0F2]
            sm:text-[20px]
          "
        >
          Recruitment data moving through a controlled workflow.
        </h3>

        <p
          className="
            mt-2
            max-w-[590px]
            text-[10.5px]
            leading-[1.75]
            text-[#6F6F79]
          "
        >
          Candidate information moves securely from profile intake to the
          teams responsible for making hiring decisions.
        </p>
      </div>

      {/* LIVE PIPELINE */}
      <div
        className="
          relative z-10
          px-5 py-9
          sm:px-8
          lg:px-10 lg:py-11
        "
      >
        <div
          className="
            flex flex-col
            lg:flex-row
            lg:items-center
            lg:gap-0
          "
        >
          <DataNode
            title="Candidate Data"
            description="Profiles & applications"
            icon={<CandidateIcon />}
          />

          <MobileConnector />
          <PipelineConnector delay="0s" />

          <DataNode
            title="Controlled Access"
            description="Authorised workflows"
            icon={<ShieldIcon />}
          />

          <MobileConnector />
          <PipelineConnector delay=".75s" />

          <DataNode
            title="Minivel ATS"
            description="Central recruitment workspace"
            icon={<ATSIcon />}
            core
          />

          <MobileConnector />
          <PipelineConnector delay="1.5s" />

          <DataNode
            title="Hiring Teams"
            description="Structured visibility"
            icon={<TeamIcon />}
          />
        </div>

       
      </div>
    </div>
  );
}

export default function TrustCompliance() {
  const revealRef = useReveal();

  return (
    <>
      <section
        ref={revealRef}
        id="security"
        className="
          reveal-section
          relative overflow-hidden
          bg-white
          pb-16 pt-14
          sm:pb-18 sm:pt-16
          lg:pb-20 lg:pt-12
        "
      >
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

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute -left-44 top-[-120px]
              h-[400px] w-[400px]
              rounded-full
              bg-[#5876BB]/[0.035]
              blur-[150px]
            "
          />

          <div
            className="
              absolute -right-44 bottom-[-120px]
              h-[410px] w-[410px]
              rounded-full
              bg-[#8B6FB7]/[0.035]
              blur-[150px]
            "
          />

          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(35,35,45,.07) 1px, transparent 0)",
              backgroundSize: "34px 34px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
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
          {/* NO SMALL LABEL */}
          <div
            className="
              mx-auto mb-10
              text-center
              sm:mb-12
              lg:mb-14
            "
          >
            <h2 className="section-title">
              Your recruitment data,
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
                protected at every step.
              </span>
            </h2>

            <p className="section-description mt-4">
              Candidate and client information deserves careful protection.
              Minivel ATS is designed around controlled access, responsible
              data handling and reliable recruitment workflows.
            </p>
          </div>

          <div
            className="
              grid gap-3
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {SECURITY_AREAS.map((item) => (
              <SecurityCard key={item.title} item={item} />
            ))}
          </div>

          <SecurityArchitecture />
        </div>

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
        /* =========================================
           SECURITY CARDS
        ========================================= */

        .security-premium-card {
          --mouse-x: 50%;
          --mouse-y: 50%;

          transition:
            transform 500ms cubic-bezier(.22,1,.36,1),
            box-shadow 500ms cubic-bezier(.22,1,.36,1),
            border-color 500ms ease;
        }

        .security-premium-card:hover {
          transform: translateY(-7px);
          border-color: rgba(var(--accent-rgb), .24);

          box-shadow:
            0 25px 65px rgba(31,27,42,.10),
            0 5px 20px rgba(var(--accent-rgb), .05);
        }

        .security-cursor-glow {
          pointer-events: none;
          position: absolute;
          inset: 0;

          opacity: 0;

          background:
            radial-gradient(
              220px circle at var(--mouse-x) var(--mouse-y),
              rgba(var(--accent-rgb), .14),
              rgba(var(--accent-rgb), .035) 38%,
              transparent 68%
            );

          transition: opacity 350ms ease;
        }

        .security-premium-card:hover .security-cursor-glow {
          opacity: 1;
        }

        .security-card-reflection {
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(var(--accent-rgb), .30),
              transparent
            );

          opacity: .35;
          transition: opacity 500ms ease;
        }

        .security-premium-card:hover .security-card-reflection {
          opacity: .95;
        }

        .security-card-sweep {
          pointer-events: none;
          position: absolute;

          top: -45%;
          left: -85%;

          width: 42%;
          height: 190%;

          transform: rotate(16deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.78),
              transparent
            );

          opacity: 0;
        }

        .security-premium-card:hover .security-card-sweep {
          animation: securityCardSweep 900ms ease-out;
        }

        @keyframes securityCardSweep {
          0% {
            left: -85%;
            opacity: 0;
          }

          20% {
            opacity: .45;
          }

          100% {
            left: 135%;
            opacity: 0;
          }
        }

        .security-icon-wrap {
          position: relative;
          width: fit-content;
        }

        .security-icon {
          transition:
            transform 550ms cubic-bezier(.22,1,.36,1),
            box-shadow 550ms ease;
        }

        .security-premium-card:hover .security-icon {
          transform:
            translateY(-3px)
            rotate(-3deg)
            scale(1.07);

          box-shadow:
            0 10px 25px rgba(var(--accent-rgb), .13);
        }

        .security-card-bottom-line {
          pointer-events: none;

          position: absolute;
          bottom: 0;
          left: 50%;

          width: 0;
          height: 1px;

          transform: translateX(-50%);

          background:
            linear-gradient(
              90deg,
              transparent,
              var(--accent),
              transparent
            );

          opacity: 0;

          transition:
            width 650ms cubic-bezier(.22,1,.36,1),
            opacity 500ms ease;
        }

        .security-premium-card:hover
        .security-card-bottom-line {
          width: 58%;
          opacity: .7;
        }


        /* =========================================
           ARCHITECTURE CONSOLE
        ========================================= */

        .architecture-console {
          isolation: isolate;
        }

        .architecture-grid {
          pointer-events: none;

          position: absolute;
          inset: 0;

          opacity: .10;

          background-image:
            linear-gradient(
              rgba(255,255,255,.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.05) 1px,
              transparent 1px
            );

          background-size: 44px 44px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 12%,
              black 88%,
              transparent
            );

          animation:
            architectureGridMove
            20s linear infinite;
        }

        @keyframes architectureGridMove {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 44px 44px;
          }
        }


        /* subtle scanner */

        .architecture-scanner {
          pointer-events: none;

          position: absolute;
          z-index: 2;

          left: 0;
          right: 0;
          top: -100px;

          height: 85px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(146,121,198,.02),
              rgba(146,121,198,.055),
              transparent
            );

          animation:
            architectureScan
            8s ease-in-out infinite;
        }

        @keyframes architectureScan {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            transform: translateY(650px);
            opacity: 0;
          }
        }


        /* pipeline nodes */

        .architecture-node {
          transition:
            transform 450ms cubic-bezier(.22,1,.36,1),
            border-color 450ms ease,
            background-color 450ms ease,
            box-shadow 450ms ease;
        }

        .architecture-node:hover {
          transform: translateY(-4px);

          border-color:
            rgba(255,255,255,.13);

          background-color:
            rgba(25,25,30,.98);

          box-shadow:
            0 16px 38px rgba(0,0,0,.23);
        }


        /* Minivel ATS core */

        .architecture-core {
          animation:
            architectureCoreBreath
            4.6s ease-in-out infinite;
        }

        @keyframes architectureCoreBreath {
          0%,
          100% {
            box-shadow:
              0 14px 45px
              rgba(121,92,167,.10);
          }

          50% {
            box-shadow:
              0 18px 60px
              rgba(121,92,167,.23);
          }
        }

        .architecture-core-glow {
          pointer-events: none;

          position: absolute;

          width: 125px;
          height: 125px;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);

          border-radius: 999px;

          background:
            rgba(146,120,199,.13);

          filter: blur(38px);

          animation:
            architectureCoreGlow
            4.2s ease-in-out infinite;
        }

        @keyframes architectureCoreGlow {
          0%,
          100% {
            opacity: .30;

            transform:
              translate(-50%, -50%)
              scale(.85);
          }

          50% {
            opacity: .78;

            transform:
              translate(-50%, -50%)
              scale(1.18);
          }
        }

        .architecture-core-line {
          pointer-events: none;

          position: absolute;

          left: 15%;
          right: 15%;
          top: 0;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(169,143,218,.7),
              transparent
            );

          animation:
            coreLinePulse
            3s ease-in-out infinite;
        }

        @keyframes coreLinePulse {
          0%,
          100% {
            opacity: .25;
          }

          50% {
            opacity: .9;
          }
        }


        /* desktop connectors */

        .architecture-connector {
          background:
            rgba(255,255,255,.025);
        }

        .architecture-line-energy {
          position: absolute;
          inset: 0;

          transform-origin: left;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(125,104,178,.18),
              rgba(156,132,211,.72),
              transparent
            );

          animation:
            architectureEnergy
            3.3s ease-in-out infinite;
        }

        @keyframes architectureEnergy {
          0%,
          100% {
            opacity: .12;
            transform: scaleX(.15);
          }

          50% {
            opacity: .85;
            transform: scaleX(1);
          }
        }

        .architecture-packet {
          position: absolute;

          top: 50%;
          left: 0;

          width: 6px;
          height: 6px;

          border-radius: 999px;

          transform:
            translate(-50%, -50%);

          background: #A68BD8;

          box-shadow:
            0 0 8px rgba(166,139,216,.9),
            0 0 18px rgba(166,139,216,.35);

          animation:
            architecturePacket
            3.15s linear infinite;
        }

        .architecture-packet-small {
          width: 3px;
          height: 3px;

          opacity: .55;

          animation-duration: 4.2s;
        }

        @keyframes architecturePacket {
          0% {
            left: 0%;
            opacity: 0;
          }

          12% {
            opacity: 1;
          }

          88% {
            opacity: 1;
          }

          100% {
            left: 100%;
            opacity: 0;
          }
        }


        /* mobile vertical packets */

        .mobile-data-packet {
          position: absolute;

          left: 50%;
          top: 0;

          width: 4px;
          height: 4px;

          transform: translateX(-50%);

          border-radius: 999px;

          background: #9D84D0;

          box-shadow:
            0 0 9px rgba(157,132,208,.7);

          animation:
            mobilePacket
            2.4s linear infinite;
        }

        @keyframes mobilePacket {
          0% {
            top: 0;
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            top: 100%;
            opacity: 0;
          }
        }


        /* clean bottom system line */

        .architecture-system-line {
          transition:
            border-color 400ms ease,
            background-color 400ms ease;
        }

        .architecture-system-line:hover {
          border-color:
            rgba(158,132,209,.12);

          background:
            rgba(255,255,255,.022);
        }

        .architecture-system-energy {
          pointer-events: none;

          position: absolute;
          inset-y: 0;

          width: 120px;
          left: -120px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(144,118,192,.055),
              transparent
            );

          animation:
            systemEnergy
            6s linear infinite;
        }

        @keyframes systemEnergy {
          from {
            left: -120px;
          }

          to {
            left: calc(100% + 120px);
          }
        }

        .architecture-live-dot {
          position: relative;

          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 999px;

          background: #967DC5;

          box-shadow:
            0 0 10px
            rgba(150,125,197,.65);

          animation:
            liveDot
            2.4s ease-in-out infinite;
        }

        @keyframes liveDot {
          0%,
          100% {
            opacity: .55;
            transform: scale(.85);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }


        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .architecture-grid,
          .architecture-scanner,
          .architecture-core,
          .architecture-core-glow,
          .architecture-core-line,
          .architecture-line-energy,
          .architecture-packet,
          .mobile-data-packet,
          .architecture-system-energy,
          .architecture-live-dot {
            animation: none !important;
          }

          .security-premium-card:hover
          .security-card-sweep {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}