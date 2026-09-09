import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 2400,
    suffix: "+",
    display: "2,400+",
    label: "Recruiters Using Minivel",
    subtext: "Across global recruitment teams",
    accent: "#9BB5DA",
    glow: "rgba(128,158,204,.18)",
  },
  {
    value: 1.8,
    suffix: "M+",
    display: "1.8M+",
    label: "Candidates Processed",
    subtext: "Across connected hiring workflows",
    accent: "#B3A5CA",
    glow: "rgba(170,148,198,.17)",
  },
  {
    value: 850,
    suffix: "+",
    display: "850+",
    label: "Client Companies",
    subtext: "Supporting growing hiring teams",
    accent: "#94B4BA",
    glow: "rgba(125,170,180,.16)",
  },
  {
    value: 2019,
    suffix: "",
    display: "2019",
    label: "Year Founded",
    subtext: "Building better recruitment experiences",
    accent: "#D0B68E",
    glow: "rgba(196,164,117,.16)",
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
        group relative flex min-h-[205px] flex-col justify-center
        overflow-hidden px-7 py-8
        transition-all duration-500 ease-out
        hover:bg-white/[0.025]
        lg:min-h-[215px] lg:px-8
      "
    >
      {/* hover glow */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[260px] w-[260px]
          -translate-x-1/2 -translate-y-1/2
          scale-75 rounded-full opacity-0 blur-[70px]
          transition-all duration-700
          group-hover:scale-110 group-hover:opacity-100
        "
        style={{
          backgroundColor: stat.glow,
        }}
      />

      {/* glass sweep */}
      <div
        className="
          pointer-events-none absolute -left-[120%] top-0
          h-full w-[70%] rotate-[12deg]
          bg-gradient-to-r from-transparent via-white/[0.035] to-transparent
          transition-all duration-[900ms]
          group-hover:left-[130%]
        "
      />

      <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1.5">
        <div
          className="
            text-[42px] font-black leading-none tracking-[-0.055em]
            transition-all duration-500
            sm:text-[46px] lg:text-[50px]
          "
          style={{
            color: stat.accent,
          }}
        >
          {active ? formatted : stat.display}
        </div>

        <h3 className="mt-4 text-[14px] font-bold tracking-[-0.01em] text-[#F2F5F9] transition-colors duration-500 group-hover:text-white">
          {stat.label}
        </h3>

        <p className="mt-2 max-w-[205px] text-[11px] leading-[1.7] text-[#7F8EA3] transition-colors duration-500 group-hover:text-[#A7B3C2]">
          {stat.subtext}
        </p>
      </div>
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="
        relative overflow-hidden
        bg-[#101A2A]
        pt-7 pb-9
        sm:pt-8 sm:pb-10
        lg:pt-9 lg:pb-11
      "
    >
      {/* background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#101A2A_0%,#15243A_48%,#111C2D_100%)]" />

      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#5879A8]/10 blur-[130px]" />
      <div className="absolute -right-32 top-[-170px] h-[430px] w-[430px] rounded-full bg-[#8975A3]/10 blur-[140px]" />
      <div className="absolute bottom-[-220px] left-[38%] h-[420px] w-[420px] rounded-full bg-[#B39972]/5 blur-[140px]" />

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto mb-7 max-w-3xl text-center">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/[0.09]
              bg-white/[0.045] px-4 py-1.5
              text-[10px] font-bold uppercase tracking-[0.22em]
              text-[#A2B5CF] backdrop-blur-xl
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#9BB5DA]" />
            By the numbers
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-[44px]">
            Recruitment performance,
            <span className="block bg-gradient-to-r from-[#BDCEE6] via-[#C9C0D8] to-[#D9C5A5] bg-clip-text text-transparent">
              made visible.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#8998AD] sm:text-[15px]">
            A clearer view of the people, activity and outcomes moving through
            your recruitment operation.
          </p>
        </div>

        {/* stats board */}
        <div
          className="
            relative overflow-hidden rounded-[28px]
            border border-white/[0.075]
            bg-white/[0.03]
            shadow-[0_30px_90px_rgba(0,0,0,0.22)]
            backdrop-blur-xl
          "
        >
          <div className="absolute left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  ${
                    index !== STATS.length - 1
                      ? "lg:border-r lg:border-white/[0.065]"
                      : ""
                  }
                  ${
                    index < 2
                      ? "sm:border-b sm:border-white/[0.065] lg:border-b-0"
                      : ""
                  }
                `}
              >
                <StatCard stat={stat} active={active} />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.19em] text-white/25">
          Intelligence across the hiring lifecycle
        </p>
      </div>
    </section>
  );
}