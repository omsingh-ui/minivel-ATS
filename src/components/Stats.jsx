import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 2400,
    suffix: "+",
    display: "2,400+",
    label: "Recruiters Using Minivel",
    subtext: "Across global recruitment teams",
    accent: "#8EA8EA",
    glow: "rgba(100,130,220,.16)",
  },
  {
    value: 1.8,
    suffix: "M+",
    display: "1.8M+",
    label: "Candidates Processed",
    subtext: "Across connected hiring workflows",
    accent: "#A58DDE",
    glow: "rgba(145,110,210,.15)",
  },
  {
    value: 850,
    suffix: "+",
    display: "850+",
    label: "Client Companies",
    subtext: "Supporting growing hiring teams",
    accent: "#8EA9B6",
    glow: "rgba(110,145,160,.13)",
  },
  {
    value: 2019,
    suffix: "",
    display: "2019",
    label: "Year Founded",
    subtext: "Building better recruitment experiences",
    accent: "#B69A79",
    glow: "rgba(170,132,91,.12)",
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

function StatCard({ stat, active }) {
  const count = useCountUp(stat.value, active);

  let formatted;

  if (stat.suffix === "M+") {
    formatted = `${count.toFixed(1)}M+`;
  } else if (stat.value >= 1000 && stat.value !== 2019) {
    formatted = `${Math.round(count).toLocaleString()}+`;
  } else if (stat.value === 2019) {
    formatted = active ? Math.round(count) : 0;
  } else {
    formatted = `${Math.round(count)}${stat.suffix}`;
  }

  return (
    <div
      className="
        group relative flex min-h-[195px] flex-col justify-center
        overflow-hidden px-7 py-7
        transition-all duration-500 ease-out
        hover:bg-white/[0.018]
        lg:min-h-[205px] lg:px-8
      "
    >
      {/* Hover atmosphere */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[250px] w-[250px]
          -translate-x-1/2 -translate-y-1/2
          scale-75 rounded-full
          opacity-0 blur-[70px]
          transition-all duration-700
          group-hover:scale-110
          group-hover:opacity-100
        "
        style={{ backgroundColor: stat.glow }}
      />

      {/* Light sweep */}
      <div
        className="
          pointer-events-none absolute -left-[130%] top-0
          h-full w-[55%] rotate-[12deg]
          bg-gradient-to-r
          from-transparent via-white/[0.025] to-transparent
          transition-all duration-[950ms]
          group-hover:left-[135%]
        "
      />

      {/* Top highlight */}
      <div className="pointer-events-none absolute left-[18%] right-[18%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.09] to-transparent" />

      <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
        <div
          className="
            text-[40px] font-black leading-none
            tracking-[-0.055em]
            transition-all duration-500
            sm:text-[45px]
            lg:text-[49px]
          "
          style={{ color: stat.accent }}
        >
          {active ? formatted : stat.display}
        </div>

        <h3 className="mt-4 text-[13px] font-bold tracking-[-0.01em] text-[#EDEDF0] transition-colors duration-500 group-hover:text-white">
          {stat.label}
        </h3>

        <p className="mt-2 max-w-[205px] text-[10.5px] leading-[1.7] text-[#666671] transition-colors duration-500 group-hover:text-[#85858F]">
          {stat.subtext}
        </p>
      </div>

      {/* Bottom accent */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-1/2
          h-px w-0 -translate-x-1/2
          opacity-0 transition-all duration-700
          group-hover:w-[48%]
          group-hover:opacity-70
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
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="
        relative overflow-hidden
        bg-[#050505]
        pb-11 pt-7
        sm:pb-12 sm:pt-8
        lg:pb-13 lg:pt-9
      "
    >
      {/* Previous section boundary */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-[-120px] h-[420px] w-[420px] rounded-full bg-[#5572B5]/[0.045] blur-[145px]" />

        <div className="absolute -right-40 top-[-120px] h-[420px] w-[420px] rounded-full bg-[#8E70B9]/[0.04] blur-[145px]" />

        <div className="absolute bottom-[-220px] left-[38%] h-[420px] w-[420px] rounded-full bg-[#B49773]/[0.025] blur-[145px]" />

        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div
            className="
              inline-flex items-center gap-2.5
              rounded-full
              border border-white/[0.07]
              bg-white/[0.025]
              px-3.5 py-1.5
              backdrop-blur-xl
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9A84D8] opacity-20" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#9A84D8]" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#777781]">
              By the Numbers
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-[1.07] tracking-[-0.045em] text-[#F3F3F5] sm:text-4xl lg:text-[45px]">
            Recruitment performance,

            <span className="mt-1 block bg-gradient-to-r from-white via-[#B8B0D8] to-[#9279C9] bg-clip-text text-transparent">
              made visible.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#74747E]">
            A clearer view of the people, activity and outcomes moving through
            your recruitment operation.
          </p>
        </div>

        {/* Stats board */}
        <div
          className="
            relative overflow-hidden
            rounded-[26px]
            border border-white/[0.065]
            bg-[#0A0A0D]
            shadow-[0_30px_90px_rgba(0,0,0,0.46)]
            backdrop-blur-xl
          "
        >
          {/* Board atmosphere */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#846DB9]/[0.025] blur-[100px]" />

          {/* Top reflection */}
          <div className="absolute left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  ${
                    index !== STATS.length - 1
                      ? "lg:border-r lg:border-white/[0.055]"
                      : ""
                  }

                  ${
                    index < 2
                      ? "sm:border-b sm:border-white/[0.055] lg:border-b-0"
                      : ""
                  }
                `}
              >
                <StatCard stat={stat} active={active} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/[0.10]" />

          <p className="text-[8.5px] font-semibold uppercase tracking-[0.19em] text-white/25">
            Intelligence across the hiring lifecycle
          </p>

          <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/[0.10]" />
        </div>
      </div>
    </section>
  );
}