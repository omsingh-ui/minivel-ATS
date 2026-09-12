import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const BOOKING_EMAIL = "om.singh@minivel.com";

const AVAILABLE_TIMES = [
  "10:00 AM",
  "11:00 AM",
  "12:30 PM",
  "2:00 PM",
  "3:30 PM",
  "5:00 PM",
];

const DEMO_TOPICS = [
  "Candidate sourcing",
  "Screening and shortlisting",
  "Pipeline management",
  "Team collaboration",
  "Recruitment insights",
  "Workflow setup",
];

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function startOfDay(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatReadableDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatMonth(date) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function getMonthDays(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Convert JS Sunday-first indexing to Monday-first.
  const leadingEmpty = (firstDay.getDay() + 6) % 7;

  const items = [];

  for (let index = 0; index < leadingEmpty; index += 1) {
    items.push({
      type: "empty",
      key: `empty-${index}`,
    });
  }

  for (let day = 1; day <= totalDays; day += 1) {
    const date = new Date(year, month, day);

    items.push({
      type: "date",
      key: formatDateKey(date),
      date,
      day,
    });
  }

  return items;
}

export default function RequestDemo() {
  const today = useMemo(() => startOfDay(new Date()), []);

  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const [step, setStep] = useState("schedule");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const calendarDays = useMemo(
    () => getMonthDays(visibleMonth),
    [visibleMonth]
  );

  const selectedDateLabel = useMemo(() => {
    if (!selectedDate) return "";

    return formatReadableDate(selectedDate);
  }, [selectedDate]);

  const currentMonth = useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
    [today]
  );

  const canGoPrevious =
    visibleMonth.getFullYear() > currentMonth.getFullYear() ||
    (visibleMonth.getFullYear() === currentMonth.getFullYear() &&
      visibleMonth.getMonth() > currentMonth.getMonth());

  const isDateAvailable = (date) => {
    const normalized = startOfDay(date);

    const isPast = normalized < today;
    const isSunday = normalized.getDay() === 0;

    return !isPast && !isSunday;
  };

  const goPreviousMonth = () => {
    if (!canGoPrevious) return;

    setVisibleMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() - 1, 1)
    );

    setSelectedDate(null);
    setSelectedTime("");
  };

  const goNextMonth = () => {
    setVisibleMonth(
      (current) =>
        new Date(current.getFullYear(), current.getMonth() + 1, 1)
    );

    setSelectedDate(null);
    setSelectedTime("");
  };

  const chooseDate = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const openDetails = () => {
    if (!selectedDate || !selectedTime) return;

    setStep("details");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedDate || !selectedTime) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const payload = new FormData();

      payload.append("Name", formData.name);
      payload.append("Work Email", formData.email);
      payload.append("Company", formData.company);
      payload.append("Phone", formData.phone || "Not provided");

      payload.append("Demo Date", selectedDateLabel);
      payload.append("Demo Time", selectedTime);
      payload.append("Duration", "30 minutes");
      payload.append("Timezone", "India Standard Time");

      payload.append(
        "Notes",
        formData.notes || "No additional notes provided"
      );

      payload.append(
        "_subject",
        `New Minivel ATS Demo Booking - ${selectedDateLabel}`
      );

      payload.append("_template", "table");
      payload.append("_captcha", "false");

      const response = await fetch(
        `https://formsubmit.co/ajax/${BOOKING_EMAIL}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: payload,
        }
      );

      if (!response.ok) {
        throw new Error("Booking request could not be sent.");
      }

      setStep("confirmed");

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(error);

      setSubmitError(
        "We couldn't submit your booking right now. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0">
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
          BOOKING EXPERIENCE
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div
          className="
            overflow-hidden
            rounded-[28px]
            border border-white/[0.07]
            bg-[#09090C]
            shadow-[0_35px_100px_rgba(0,0,0,0.58)]
            lg:grid
            lg:grid-cols-[0.86fr_1.14fr]
          "
        >
          {/* =================================================
              LEFT SIDE
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
              {/* Empty profile image area */}
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

              <p className="text-[14px] font-semibold text-[#8793AA]">
                Om Singh
              </p>

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

              {/* Conferencing */}
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
                  Meeting details will be shared after the booking is confirmed.
                </p>
              </div>

              {/* Premium copy */}
              <div className="mt-8">
                <p className="max-w-md text-[15px] leading-7 text-[#D4D4DA]">
                  A focused walkthrough of Minivel ATS, built around the way
                  your recruitment team works today.
                </p>

                <p className="mt-5 max-w-md text-[13px] leading-6 text-[#7D7D87]">
                  We’ll look at the areas most relevant to your team, answer
                  your questions and show how the platform fits into your
                  existing hiring process.
                </p>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-[#73737D]">
                  What we can cover
                </p>

                <ul className="mt-4 space-y-3">
                  {DEMO_TOPICS.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[13px] text-[#92929C]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9B86D2]" />

                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <p className="max-w-md text-[11px] leading-5 text-[#62626C]">
                  No fixed presentation. The session can focus on the questions
                  and workflows that matter to your team.
                </p>
              </div>
            </div>
          </aside>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <section className="relative min-h-[650px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#8F76C9]/[0.07] blur-[90px]" />

            {/* =================================================
                STEP 1 — DATE AND TIME
            ================================================= */}

            {step === "schedule" && (
              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8170AE]">
                      Schedule your demo
                    </p>

                    <h2 className="mt-2 text-[28px] font-bold tracking-[-0.035em] text-[#F3F3F5] sm:text-[31px]">
                      Select a date & time
                    </h2>

                    <p className="mt-2 text-[12px] leading-6 text-[#6F6F79]">
                      Choose a time that works for you.
                    </p>
                  </div>

                  <div className="hidden items-center gap-2 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9B86D2]" />

                    <span className="text-[9px] font-semibold text-[#64646E]">
                      India Standard Time
                    </span>
                  </div>
                </div>

                {/* Month navigation */}
                <div className="mt-8 flex max-w-[540px] items-center justify-between">
                  <button
                    type="button"
                    onClick={goPreviousMonth}
                    disabled={!canGoPrevious}
                    aria-label="Previous month"
                    className={`
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border
                      transition-all duration-300

                      ${
                        canGoPrevious
                          ? `
                            border-white/[0.07]
                            bg-white/[0.025]
                            text-[#85858F]
                            hover:border-white/[0.13]
                            hover:bg-white/[0.05]
                            hover:text-white
                          `
                          : `
                            cursor-default
                            border-white/[0.03]
                            text-[#35353D]
                          `
                      }
                    `}
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
                    {formatMonth(visibleMonth)}
                  </p>

                  <button
                    type="button"
                    onClick={goNextMonth}
                    aria-label="Next month"
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-white/[0.07]
                      bg-white/[0.025]
                      text-[#85858F]
                      transition-all duration-300
                      hover:border-white/[0.13]
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
                  <div className="max-w-[540px]">
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {WEEK_DAYS.map((day) => (
                        <div
                          key={day}
                          className="pb-2 text-[10px] font-semibold text-[#65656F]"
                        >
                          {day}
                        </div>
                      ))}

                      {calendarDays.map((item) => {
                        if (item.type === "empty") {
                          return <div key={item.key} className="h-11" />;
                        }

                        const available = isDateAvailable(item.date);

                        const selected =
                          selectedDate &&
                          formatDateKey(selectedDate) ===
                            formatDateKey(item.date);

                        return (
                          <button
                            type="button"
                            key={item.key}
                            disabled={!available}
                            onClick={() => chooseDate(item.date)}
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
                                  : available
                                    ? `
                                      bg-[#15151A]
                                      text-[#B9B9C2]
                                      hover:-translate-y-0.5
                                      hover:bg-[#1B1B21]
                                      hover:text-white
                                    `
                                    : `
                                      cursor-default
                                      text-[#3D3D46]
                                    `
                              }
                            `}
                          >
                            {item.day}

                            {available && !selected && (
                              <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-[#907DD0]" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Timezone */}
                    <div className="mt-9">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#666670]">
                        Time zone
                      </p>

                      <div className="mt-2 inline-flex items-center gap-2 text-[12px] text-[#85858F]">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            strokeWidth="1.6"
                          />

                          <path
                            d="M3 12h18M12 3c2.5 2.7 3.7 5.7 3.7 9S14.5 18.3 12 21M12 3C9.5 5.7 8.3 8.7 8.3 12S9.5 18.3 12 21"
                            strokeWidth="1.4"
                          />
                        </svg>

                        India Standard Time
                      </div>
                    </div>
                  </div>

                  {/* Times */}
                  {selectedDate && (
                    <div className="xl:border-l xl:border-white/[0.055] xl:pl-5">
                      <p className="text-[11px] font-semibold leading-5 text-[#C1C1C8]">
                        {selectedDateLabel}
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
                                w-full
                                rounded-xl
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
                                      shadow-[0_8px_30px_rgba(80,60,140,.10)]
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

                {/* Summary */}
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
                        {selectedDateLabel} · {selectedTime}
                      </p>

                      <p className="mt-1 text-[10px] text-[#62626C]">
                        30 minutes · India Standard Time
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={openDetails}
                      className="
                        group
                        inline-flex items-center
                        justify-center gap-2
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
            )}

            {/* =================================================
                STEP 2 — DETAILS
            ================================================= */}

            {step === "details" && (
              <div className="relative mx-auto max-w-[590px]">
                <button
                  type="button"
                  onClick={() => setStep("schedule")}
                  className="
                    group mb-7
                    inline-flex items-center gap-2
                    text-[11px] font-semibold
                    text-[#73737D]
                    transition-colors
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

                  Change date or time
                </button>

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8170AE]">
                  Almost there
                </p>

                <h2 className="mt-2 text-[29px] font-bold tracking-[-0.035em] text-[#F3F3F5]">
                  Your details
                </h2>

                <p className="mt-2 text-[12px] leading-6 text-[#74747E]">
                  Tell us who we’ll be meeting with.
                </p>

                {/* Booking summary */}
                <div className="mt-6 rounded-[18px] border border-white/[0.07] bg-[#0D0D11] p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-[#9B86D2]/20 bg-[#9B86D2]/[0.07]">
                      <svg
                        className="h-4 w-4 text-[#A58FDC]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          strokeWidth="1.6"
                        />

                        <path
                          d="M12 7v5l3 2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[12px] font-semibold text-[#E4E4E8]">
                        {selectedDateLabel}
                      </p>

                      <p className="mt-1 text-[11px] text-[#81818B]">
                        {selectedTime} · 30 minutes
                      </p>

                      <p className="mt-1 text-[10px] text-[#60606A]">
                        India Standard Time
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[11px] font-semibold text-[#A5A5AE]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="name"
                      placeholder="Your name"
                      className="
                        w-full rounded-xl
                        border border-white/[0.07]
                        bg-[#111115]
                        px-4 py-3.5
                        text-[13px] text-white
                        outline-none
                        placeholder:text-[#505058]
                        transition-all duration-300
                        focus:border-[#967FD0]/50
                        focus:bg-[#141419]
                        focus:ring-2
                        focus:ring-[#967FD0]/10
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[11px] font-semibold text-[#A5A5AE]"
                    >
                      Work email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                      placeholder="name@company.com"
                      className="
                        w-full rounded-xl
                        border border-white/[0.07]
                        bg-[#111115]
                        px-4 py-3.5
                        text-[13px] text-white
                        outline-none
                        placeholder:text-[#505058]
                        transition-all duration-300
                        focus:border-[#967FD0]/50
                        focus:bg-[#141419]
                        focus:ring-2
                        focus:ring-[#967FD0]/10
                      "
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-[11px] font-semibold text-[#A5A5AE]"
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        autoComplete="organization"
                        placeholder="Company name"
                        className="
                          w-full rounded-xl
                          border border-white/[0.07]
                          bg-[#111115]
                          px-4 py-3.5
                          text-[13px] text-white
                          outline-none
                          placeholder:text-[#505058]
                          transition-all duration-300
                          focus:border-[#967FD0]/50
                          focus:bg-[#141419]
                          focus:ring-2
                          focus:ring-[#967FD0]/10
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[11px] font-semibold text-[#A5A5AE]"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        autoComplete="tel"
                        placeholder="+91"
                        className="
                          w-full rounded-xl
                          border border-white/[0.07]
                          bg-[#111115]
                          px-4 py-3.5
                          text-[13px] text-white
                          outline-none
                          placeholder:text-[#505058]
                          transition-all duration-300
                          focus:border-[#967FD0]/50
                          focus:bg-[#141419]
                          focus:ring-2
                          focus:ring-[#967FD0]/10
                        "
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="mb-2 block text-[11px] font-semibold text-[#A5A5AE]"
                    >
                      Anything you'd like us to cover?
                    </label>

                    <textarea
                      id="notes"
                      name="notes"
                      rows="4"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Tell us what you'd like to discuss during the demo..."
                      className="
                        w-full resize-none rounded-xl
                        border border-white/[0.07]
                        bg-[#111115]
                        px-4 py-3.5
                        text-[13px] text-white
                        outline-none
                        placeholder:text-[#505058]
                        transition-all duration-300
                        focus:border-[#967FD0]/50
                        focus:bg-[#141419]
                        focus:ring-2
                        focus:ring-[#967FD0]/10
                      "
                    />
                  </div>

                  {submitError && (
                    <div className="rounded-xl border border-red-400/15 bg-red-400/[0.05] px-4 py-3 text-[11px] text-red-200">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="
                      group
                      mt-2 inline-flex w-full
                      items-center justify-center gap-2
                      rounded-xl
                      bg-[#F3F3F5]
                      px-6 py-3.5
                      text-[12px] font-bold
                      text-[#111116]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-white
                      disabled:cursor-wait
                      disabled:opacity-60
                    "
                  >
                    {submitting ? "Booking..." : "Confirm Booking"}

                    {!submitting && (
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
                    )}
                  </button>

                  <p className="text-center text-[10px] leading-5 text-[#55555E]">
                    Your details will only be used to arrange this demo.
                  </p>
                </form>
              </div>
            )}

            {/* =================================================
                STEP 3 — CONFIRMATION
            ================================================= */}

            {step === "confirmed" && (
              <div className="relative flex min-h-[570px] flex-col items-center justify-center text-center">
                <div
                  className="
                    flex h-16 w-16
                    items-center justify-center
                    rounded-full
                    border border-[#9B86D2]/25
                    bg-[#9B86D2]/[0.09]
                    shadow-[0_0_50px_rgba(145,125,206,.08)]
                  "
                >
                  <svg
                    className="h-7 w-7 text-[#B7A5E8]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8F7CBF]">
                  Booking received
                </p>

                <h2 className="mt-3 text-[31px] font-bold tracking-[-0.04em] text-[#F3F3F5]">
                  Your demo is scheduled.
                </h2>

                <p className="mt-4 max-w-md text-[13px] leading-7 text-[#777781]">
                  Thanks, {formData.name}. We’ve received your booking and the
                  meeting details can be shared with you shortly.
                </p>

                <div className="mt-7 w-full max-w-[390px] rounded-[18px] border border-white/[0.07] bg-[#0D0D11] p-5 text-left">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#64646E]">
                    Minivel ATS Demo
                  </p>

                  <p className="mt-3 text-[13px] font-semibold text-[#E4E4E8]">
                    {selectedDateLabel}
                  </p>

                  <p className="mt-1 text-[12px] text-[#8A8A94]">
                    {selectedTime} · 30 minutes
                  </p>

                  <p className="mt-1 text-[10px] text-[#60606A]">
                    India Standard Time
                  </p>
                </div>

                <Link
                  to="/"
                  className="
                    mt-7 inline-flex
                    items-center justify-center
                    rounded-xl
                    bg-white
                    px-5 py-3
                    text-[11px] font-bold
                    text-black
                    transition-all duration-300
                    hover:-translate-y-0.5
                  "
                >
                  Back to Minivel ATS
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}