import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const AVAILABLE_TIMES = [
  "10:00 AM",
  "11:00 AM",
  "12:30 PM",
  "2:00 PM",
  "3:30 PM",
  "5:00 PM",
];

const DAYS = [
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },

  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10, available: true },
  { day: 11, available: true },
  { day: 12, available: true },
  { day: 13 },

  { day: 14, available: true },
  { day: 15, available: true },
  { day: 16, available: true },
  { day: 17, available: true },
  { day: 18, available: true },
  { day: 19, available: true },
  { day: 20 },

  { day: 21, available: true },
  { day: 22, available: true },
  { day: 23, available: true },
  { day: 24, available: true },
  { day: 25, available: true },
  { day: 26, available: true },
  { day: 27 },

  { day: 28, available: true },
  { day: 29, available: true },
  { day: 30, available: true },
];

const DEMO_TOPICS = [
  "Candidate sourcing",
  "Screening and shortlisting",
  "Pipeline management",
  "Team collaboration",
  "Recruitment insights",
  "Workflow setup",
];

export default function RequestDemo() {
  const [selectedDate, setSelectedDate] = useState(10);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const selectedLabel = useMemo(() => {
    if (!selectedDate) return "";
    return `September ${selectedDate}, 2026`;
  }, [selectedDate]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-10 h-[420px] w-[420px] rounded-full bg-[#5678C5]/[0.075] blur-[150px]" />

        <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#8F72C8]/[0.075] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      {/* =====================================================
          TOP NAVIGATION
      ===================================================== */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="
            group inline-flex items-center gap-2
            text-[11px] font-semibold
            text-[#85858F]
            transition-colors duration-300
            hover:text-white
          "
        >
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M19 12H5m6-6-6 6 6 6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          Back to Minivel ATS
        </Link>
      </div>

      {/* =====================================================
          SCHEDULER
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div
          className="
            overflow-hidden
            rounded-[28px]
            border border-white/[0.07]
            bg-[#09090C]
            shadow-[0_35px_100px_rgba(0,0,0,0.58)]
            lg:grid lg:grid-cols-[0.86fr_1.14fr]
          "
        >
          {/* =================================================
              LEFT PANEL
          ================================================= */}
          <aside
            className="
              relative
              border-b border-white/[0.06]
              px-6 py-8
              sm:px-8
              lg:border-b-0
              lg:border-r
              lg:border-white/[0.06]
              lg:px-10
              lg:py-10
            "
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#5779C3]/[0.08] blur-[80px]" />

            <div className="relative">
              {/* Empty photo area */}
              <div
                className="
                  mb-5
                  h-16 w-16
                  overflow-hidden
                  rounded-full
                  border border-white/[0.08]
                  bg-[#121216]
                  shadow-[0_12px_35px_rgba(0,0,0,.35)]
                "
                aria-label="Profile photo"
              />

              {/* Person */}
              <p className="text-[14px] font-semibold text-[#8793AA]">
                Om Singh
              </p>

              {/* Demo title */}
              <h1 className="mt-2 text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#F3F3F5] sm:text-[38px]">
                Minivel ATS Demo
              </h1>

              {/* Duration */}
              <div className="mt-7 flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-[#898994]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="8" strokeWidth="1.7" />

                  <path
                    d="M12 7v5l3 2"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-[13px] font-semibold text-[#A7A7B0]">
                  30 min
                </span>
              </div>

              {/* Meeting */}
              <div className="mt-5 flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#898994]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect
                    x="3"
                    y="6"
                    width="13"
                    height="12"
                    rx="2"
                    strokeWidth="1.7"
                  />

                  <path
                    d="m16 10 5-3v10l-5-3z"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="max-w-sm text-[13px] font-medium leading-6 text-[#A7A7B0]">
                  Web conferencing details will be shared after your booking is
                  confirmed.
                </p>
              </div>

              {/* Description */}
              <div className="mt-8">
                <p className="max-w-md text-[15px] leading-7 text-[#D4D4DA]">
                  See Minivel ATS in action and get a closer look at how it can
                  fit into your recruitment process.
                </p>

                <p className="mt-6 text-[12px] font-semibold text-[#B7B7C0]">
                  During the demo, we can cover
                </p>

                <ul className="mt-4 space-y-3">
                  {DEMO_TOPICS.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[13px] text-[#8E8E98]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9B86D2]" />

                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <p className="max-w-md text-[11px] leading-5 text-[#606069]">
                  We can focus the session on the parts of recruitment that
                  matter most to your team.
                </p>
              </div>
            </div>
          </aside>

          {/* =================================================
              RIGHT PANEL
          ================================================= */}
          <section className="relative px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#8F76C9]/[0.07] blur-[90px]" />

            <div className="relative">
              <h2 className="text-[28px] font-bold tracking-[-0.035em] text-[#F3F3F5] sm:text-[31px]">
                Select a Date & Time
              </h2>

              <p className="mt-2 text-[12px] leading-6 text-[#6F6F79]">
                Choose a time that works for you.
              </p>

              {/* Month navigation */}
              <div className="mt-7 flex max-w-[540px] items-center justify-between">
                <button
                  type="button"
                  aria-label="Previous month"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-white/[0.06]
                    bg-white/[0.02]
                    text-[#777781]
                    transition-all duration-300
                    hover:border-white/[0.12]
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="m15 18-6-6 6-6"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <p className="text-[14px] font-bold text-[#DADADF]">
                  September 2026
                </p>

                <button
                  type="button"
                  aria-label="Next month"
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-white/[0.06]
                    bg-white/[0.02]
                    text-[#777781]
                    transition-all duration-300
                    hover:border-white/[0.12]
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="m9 18 6-6-6-6"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Calendar + time slots */}
              <div
                className={`
                  mt-6 grid gap-8
                  ${
                    selectedDate
                      ? "xl:grid-cols-[minmax(0,1fr)_190px]"
                      : "grid-cols-1"
                  }
                `}
              >
                {/* Calendar */}
                <div className="max-w-[540px]">
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {[
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun",
                    ].map((day) => (
                      <div
                        key={day}
                        className="pb-2 text-[10px] font-semibold text-[#6F6F79]"
                      >
                        {day}
                      </div>
                    ))}

                    {DAYS.map((item) => {
                      const selected = selectedDate === item.day;

                      return (
                        <button
                          type="button"
                          key={item.day}
                          disabled={!item.available}
                          onClick={() => {
                            setSelectedDate(item.day);
                            setSelectedTime("");
                          }}
                          className={`
                            relative mx-auto
                            flex h-11 w-11
                            items-center justify-center
                            rounded-full
                            text-[13px] font-semibold
                            transition-all duration-300

                            ${
                              selected
                                ? `
                                  bg-[#F3F3F5]
                                  text-[#09090C]
                                  shadow-[0_8px_28px_rgba(255,255,255,.12)]
                                `
                                : item.available
                                  ? `
                                    bg-[#15151A]
                                    text-[#B9B9C2]
                                    hover:-translate-y-0.5
                                    hover:bg-[#1B1B21]
                                    hover:text-white
                                  `
                                  : `
                                    cursor-default
                                    text-[#45454E]
                                  `
                            }
                          `}
                        >
                          {item.day}

                          {item.available && !selected && (
                            <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-[#907DD0]" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Timezone */}
                  <div className="mt-9">
                    <p className="text-[11px] font-bold text-[#B8B8C0]">
                      Time zone
                    </p>

                    <div className="mt-2 inline-flex items-center gap-2 text-[12px] text-[#777781]">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="9" strokeWidth="1.6" />

                        <path
                          d="M3 12h18M12 3c2.5 2.7 3.7 5.7 3.7 9S14.5 18.3 12 21M12 3C9.5 5.7 8.3 8.7 8.3 12S9.5 18.3 12 21"
                          strokeWidth="1.4"
                        />
                      </svg>

                      India Standard Time
                    </div>
                  </div>
                </div>

                {/* Time slots */}
                {selectedDate && (
                  <div className="xl:border-l xl:border-white/[0.055] xl:pl-5">
                    <p className="text-[11px] font-semibold leading-5 text-[#B8B8C0]">
                      {selectedLabel}
                    </p>

                    <div className="mt-3 space-y-2">
                      {AVAILABLE_TIMES.map((time) => {
                        const selected = selectedTime === time;

                        return (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              w-full rounded-xl
                              border
                              px-4 py-3
                              text-[12px] font-semibold
                              transition-all duration-300

                              ${
                                selected
                                  ? `
                                    border-[#9B86D2]/50
                                    bg-[#9B86D2]/[0.12]
                                    text-white
                                  `
                                  : `
                                    border-white/[0.07]
                                    bg-[#101014]
                                    text-[#A0A0AA]
                                    hover:border-white/[0.14]
                                    hover:bg-[#15151A]
                                    hover:text-white
                                  `
                              }
                            `}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Booking summary */}
              {selectedDate && selectedTime && (
                <div
                  className="
                    mt-8 flex flex-col gap-4
                    rounded-[18px]
                    border border-white/[0.07]
                    bg-[#0E0E12]
                    px-5 py-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#64646E]">
                      Your demo
                    </p>

                    <p className="mt-1.5 text-[12px] font-semibold text-[#E4E4E8]">
                      {selectedLabel} · {selectedTime}
                    </p>

                    <p className="mt-1 text-[10px] text-[#62626C]">
                      30 minutes · India Standard Time
                    </p>
                  </div>

                  <button
                    type="button"
                    className="
                      group
                      inline-flex items-center justify-center gap-2
                      rounded-xl
                      bg-[#F3F3F5]
                      px-5 py-3
                      text-[11px] font-bold
                      text-[#111116]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-white
                    "
                  >
                    Book a Demo

                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M17 8l4 4m0 0-4 4m4-4H3"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}