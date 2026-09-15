import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";

const STATS = [
  {
    value: 2400,
    suffix: "+",
    display: "2,400+",
    label: "Recruiters Using Minivel",
    subtext: "Across global recruitment teams",
    accent: "#667CC2",
  },
  {
    value: 1.8,
    suffix: "M+",
    display: "1.8M+",
    label: "Candidates Processed",
    subtext: "Across connected hiring workflows",
    accent: "#7863A5",
  },
  {
    value: 850,
    suffix: "+",
    display: "850+",
    label: "Client Companies",
    subtext: "Supporting growing hiring teams",
    accent: "#637E8B",
  },
  {
    value: 2019,
    suffix: "",
    display: "2019",
    label: "Year Founded",
    subtext: "Building better recruitment experiences",
    accent: "#9A795B",
  },
];

function useCountUp(target, active, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start;
    let frame;

    const animate = (time) => {
      if (!start) start = time;

      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(target * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

function StatItem({ stat, active, index }) {
  const count = useCountUp(stat.value, active);

  let formatted;

  if (stat.suffix === "M+") {
    formatted = `${count.toFixed(1)}M+`;
  } else if (stat.value >= 1000 && stat.value !== 2019) {
    formatted = `${Math.round(count).toLocaleString()}+`;
  } else if (stat.value === 2019) {
    formatted = active ? Math.round(count) : stat.display;
  } else {
    formatted = `${Math.round(count)}${stat.suffix}`;
  }

  return (
    <div
      className="
        stat-item
        group relative
        min-h-[190px]
        px-5 py-7
        sm:px-7
        lg:min-h-[215px]
        lg:px-8 lg:py-8
      "
      style={{
        "--stat-accent": stat.accent,
        "--stat-delay": `${index * 90}ms`,
      }}
    >
      {/* very subtle hover surface */}
      <div
        className="
          pointer-events-none
          absolute inset-2
          rounded-[20px]
          bg-white
          opacity-0
          shadow-[0_16px_45px_rgba(32,29,42,.06)]
          transition-all duration-500
          group-hover:opacity-100
        "
      />

      <div
        className="
          relative z-10
          flex h-full flex-col
          justify-between
          transition-transform duration-500
          group-hover:-translate-y-[2px]
        "
      >
       

        <div>
          <div
            className="
              text-[42px]
              font-black
              leading-none
              tracking-[-0.055em]
              sm:text-[46px]
              lg:text-[50px]
            "
            style={{ color: stat.accent }}
          >
            {active ? formatted : stat.display}
          </div>

          <h3
            className="
              mt-4
              text-[13px]
              font-bold
              tracking-[-0.012em]
              text-[#24242B]
            "
          >
            {stat.label}
          </h3>

          <p
            className="
              mt-2
              max-w-[205px]
              text-[10.5px]
              leading-[1.65]
              text-[#777781]
            "
          >
            {stat.subtext}
          </p>
        </div>
      </div>

      {/* restrained bottom accent */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-1/2
          h-px w-0
          -translate-x-1/2
          opacity-0
          transition-all duration-500
          group-hover:w-[42%]
          group-hover:opacity-50
        "
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${stat.accent},
            transparent
          )`,
        }}
      />
    </div>
  );
}

export default function Stats() {
  const revealRef = useReveal();
  const sectionRef = useRef(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealRef} className="reveal-section">
      <section
        ref={sectionRef}
        id="stats"
        className="
          relative overflow-hidden
          bg-white
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

        {/* restrained background atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              -left-44 top-[-130px]
              h-[420px] w-[420px]
              rounded-full
              bg-[#5572B5]/[0.03]
              blur-[150px]
            "
          />

          <div
            className="
              absolute
              -right-40 top-[-130px]
              h-[420px] w-[420px]
              rounded-full
              bg-[#8268AA]/[0.03]
              blur-[150px]
            "
          />

          <div
            className="
              absolute
              bottom-[-220px] left-[38%]
              h-[420px] w-[420px]
              rounded-full
              bg-[#A88968]/[0.02]
              blur-[150px]
            "
          />

          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(35,35,45,.07) 1px, transparent 0)",
              backgroundSize: "36px 36px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
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
          {/* HEADER — NO SMALL LABEL */}
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
              A clearer view of
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
                what Minivel supports.
              </span>
            </h2>

           <p className="section-description mt-4">
              A snapshot of the scale, reach and recruitment activity
              supported through Minivel.
            </p>
          </div>

          {/* EDITORIAL STAT BOARD */}
          <div
            className="
              relative overflow-hidden
              rounded-[26px]
              border border-[#20202A]/[0.075]
              bg-[#FAFAFB]
              shadow-[0_18px_55px_rgba(30,30,42,.045)]
            "
          >
            {/* top reflection */}
            <div
              className="
                pointer-events-none
                absolute left-[8%] right-[8%] top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#393441]/[0.12]
                to-transparent
              "
            />

            <div
              className="
                relative grid
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    relative

                    ${
                      index !== STATS.length - 1
                        ? "lg:border-r lg:border-[#24242D]/[0.07]"
                        : ""
                    }

                    ${
                      index < 2
                        ? "sm:border-b sm:border-[#24242D]/[0.07] lg:border-b-0"
                        : ""
                    }

                    ${
                      index === 0
                        ? "border-b border-[#24242D]/[0.07] sm:border-b"
                        : ""
                    }

                    ${
                      index === 2
                        ? "border-b border-[#24242D]/[0.07] sm:border-b-0"
                        : ""
                    }
                  `}
                >
                  <StatItem
                    stat={stat}
                    active={active}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

         {/* bottom statement */}
<div
  className="
    mx-auto mt-7
    flex max-w-2xl
    items-center justify-center
    gap-4
    text-center
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
    Supporting recruitment from first contact to final hire.
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

        <style>{`
          .stat-item {
            opacity: 0;
            transform: translateY(12px);

            transition:
              opacity 600ms cubic-bezier(.22,1,.36,1),
              transform 700ms cubic-bezier(.22,1,.36,1);

            transition-delay: var(--stat-delay);
          }

          .reveal-visible .stat-item,
          .is-visible .stat-item {
            opacity: 1;
            transform: translateY(0);
          }

          @media (prefers-reduced-motion: reduce) {
            .stat-item {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}