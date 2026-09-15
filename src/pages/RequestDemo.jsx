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
  <main
    className="
      relative min-h-screen
      overflow-hidden
      bg-[#07070A]
      text-white
    "
  >
    {/* =====================================================
        PREMIUM PAGE BACKGROUND
    ===================================================== */}

    <div className="pointer-events-none fixed inset-0">
      {/* Top-left cool ambient light */}
      <div
        className="
          absolute
          -left-[180px] top-[-150px]

          h-[600px] w-[600px]
          rounded-full

          bg-[#5575BA]/[0.10]
          blur-[190px]
        "
      />

      {/* Top-right violet atmosphere */}
      <div
        className="
          absolute
          right-[-190px] top-[4%]

          h-[560px] w-[560px]
          rounded-full

          bg-[#8066AD]/[0.085]
          blur-[190px]
        "
      />

      {/* Central illumination behind booking experience */}
      <div
        className="
          absolute
          left-1/2 top-[44%]

          h-[520px] w-[900px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-[50%]

          bg-[#735D9B]/[0.055]
          blur-[180px]
        "
      />

      {/* Lower blue depth */}
      <div
        className="
          absolute
          -bottom-[240px] left-[8%]

          h-[540px] w-[540px]
          rounded-full

          bg-[#4E6DAE]/[0.055]
          blur-[190px]
        "
      />

      {/* Lower-right violet depth */}
      <div
        className="
          absolute
          -bottom-[250px] right-[-100px]

          h-[580px] w-[580px]
          rounded-full

          bg-[#876DB3]/[0.065]
          blur-[200px]
        "
      />

      {/* Extremely subtle texture */}
      <div
        className="
          absolute inset-0
          opacity-[0.055]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.11) 1px, transparent 0)",
          backgroundSize: "38px 38px",
          maskImage:
            "linear-gradient(to bottom, black, black 72%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, black 72%, transparent)",
        }}
      />

      {/* Soft central vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_35%,transparent_0%,transparent_35%,rgba(0,0,0,.22)_100%)]
        "
      />
    </div>

    {/* =====================================================
        TOP NAVIGATION
    ===================================================== */}

    <div
      className="
        relative z-20
        mx-auto max-w-7xl

        px-4 pt-6
        sm:px-6
        lg:px-8 lg:pt-7
      "
    >
      <Link
        to="/"
        className="
          group
          inline-flex
          items-center gap-2.5

          rounded-[10px]

          border border-white/[0.045]
          bg-white/[0.015]

          px-3 py-2

          text-[10.5px]
          font-semibold
          text-[#85858F]

          transition-all duration-300

          hover:border-white/[0.09]
          hover:bg-white/[0.03]
          hover:text-[#E7E7EA]
        "
      >
        <svg
          className="
            h-3.5 w-3.5

            transition-transform duration-300
            group-hover:-translate-x-0.5
          "
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

    <div
      className="
        relative z-10
        mx-auto max-w-7xl

        px-4
        pb-16 pt-6

        sm:px-6
        sm:pb-18

        lg:px-8
        lg:pb-20
        lg:pt-7
      "
    >
      {/* Background depth directly behind main booking panel */}
      <div
        className="
          pointer-events-none

          absolute
          left-1/2 top-[48%]

          h-[72%] w-[84%]

          -translate-x-1/2
          -translate-y-1/2

          rounded-[80px]

          bg-[#725D9B]/[0.07]
          blur-[130px]
        "
      />

      {/* MAIN BOOKING PANEL */}
      <div
        className="
          relative
          overflow-hidden

          rounded-[30px]

          border border-white/[0.08]
          bg-[#09090D]/95

          shadow-[0_45px_130px_rgba(0,0,0,.64)]

          lg:grid
          lg:grid-cols-[0.86fr_1.14fr]
        "
      >
        {/* subtle glass reflection */}
        <div
          className="
            pointer-events-none

            absolute
            left-[14%] right-[14%] top-0
            z-20

            h-px

            bg-gradient-to-r
            from-transparent
            via-white/[0.13]
            to-transparent
          "
        />

        {/* restrained internal violet light */}
        <div
          className="
            pointer-events-none

            absolute
            right-[5%] top-[-190px]

            h-[380px] w-[380px]
            rounded-full

            bg-[#876DB5]/[0.045]
            blur-[135px]
          "
        />

        {/* restrained internal blue light */}
        <div
          className="
            pointer-events-none

            absolute
            -left-[180px] bottom-[-180px]

            h-[360px] w-[360px]
            rounded-full

            bg-[#5575B6]/[0.035]
            blur-[130px]
          "
        />
        {/* =================================================
    LEFT SIDE
================================================= */}

<aside
  className="
    relative
    overflow-hidden
    border-b border-white/[0.055]

    px-6 py-8
    sm:px-8 sm:py-9

    lg:border-b-0
    lg:border-r
    lg:border-white/[0.055]
    lg:px-10
    lg:py-10
  "
>
  {/* restrained panel atmosphere */}
  <div
    className="
      pointer-events-none
      absolute -left-24 -top-24
      h-[300px] w-[300px]
      rounded-full
      bg-[#667FC5]/[0.075]
      blur-[105px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute -bottom-32 right-[-110px]
      h-[300px] w-[300px]
      rounded-full
      bg-[#886DB4]/[0.055]
      blur-[115px]
    "
  />

  <div className="relative z-10">
    {/* COMPANY */}
    <p
      className="
        text-[10.5px]
        font-bold uppercase
        tracking-[0.17em]
        text-[#9480C4]
      "
    >
      Minivel Services
    </p>

    {/* TITLE */}
    <h1
      className="
        mt-3
        max-w-[430px]

        text-[34px]
        font-bold
        leading-[1.05]
        tracking-[-0.045em]
        text-[#F4F4F6]

        sm:text-[40px]
        lg:text-[42px]
      "
    >
      Minivel ATS Demo
    </h1>

    {/* SHORT INTRO */}
    <p
      className="
        mt-4
        max-w-[440px]
        text-[14px]
        leading-[1.75]
        text-[#9A9AA4]
      "
    >
      See how Minivel ATS can support your recruitment workflow in a
      focused 30-minute product walkthrough.
    </p>

    {/* MEETING METADATA */}
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {/* DURATION */}
      <div
        className="
          inline-flex items-center gap-2.5
          rounded-full

          border border-white/[0.07]
          bg-white/[0.025]

          px-3.5 py-2
        "
      >
        <svg
          className="h-4 w-4 text-[#9A8BC1]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            strokeWidth="1.7"
          />

          <path
            d="M12 7v5l3 2"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="text-[12px] font-semibold text-[#B2B2BA]">
          30 min
        </span>
      </div>

      {/* PRODUCT DEMO */}
      <div
        className="
          inline-flex items-center gap-2
          rounded-full

          border border-[#8F78C2]/[0.13]
          bg-[#8F78C2]/[0.045]

          px-3.5 py-2
        "
      >
        <span
          className="
            h-1.5 w-1.5
            rounded-full
            bg-[#A18BD3]
          "
        />

        <span
          className="
            text-[11px]
            font-semibold
            text-[#9D90BA]
          "
        >
          Product walkthrough
        </span>
      </div>
    </div>

    {/* MEETING INFORMATION */}
    <div
      className="
        mt-4
        flex max-w-[440px]
        items-start gap-3

        rounded-[15px]

        border border-white/[0.055]
        bg-white/[0.018]

        px-4 py-3.5
      "
    >
      <div
        className="
          mt-0.5
          flex h-8 w-8
          shrink-0
          items-center justify-center

          rounded-[9px]

          border border-[#7D6AA8]/[0.13]
          bg-[#7D6AA8]/[0.055]
        "
      >
        <svg
          className="h-4 w-4 text-[#9B88C5]"
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
      </div>

      <div>
        <p
          className="
            text-[11px]
            font-semibold
            text-[#C1C1C8]
          "
        >
          Online meeting
        </p>

        <p
          className="
            mt-1
            max-w-sm
            text-[11px]
            leading-[1.65]
            text-[#72727D]
          "
        >
          Meeting details will be shared after your booking is confirmed.
        </p>
      </div>
    </div>

    {/* DEMO DESCRIPTION */}
    <div className="mt-7">
      <p
        className="
          max-w-[440px]
          text-[14px]
          leading-[1.8]
          text-[#D0D0D6]
        "
      >
        A focused walkthrough built around the way your recruitment team
        works today.
      </p>

      <p
        className="
          mt-3
          max-w-[440px]
          text-[12px]
          leading-[1.75]
          text-[#797983]
        "
      >
        We’ll explore the areas most relevant to your team, answer your
        questions and show how Minivel ATS can fit into your existing
        hiring process.
      </p>
    </div>

    {/* TOPICS */}
    <div className="mt-7">
      <p
        className="
          text-[9.5px]
          font-bold uppercase
          tracking-[0.18em]
          text-[#74747F]
        "
      >
        What we can cover
      </p>

      <ul className="mt-4 space-y-3">
        {DEMO_TOPICS.map((item) => (
          <li
            key={item}
            className="
              flex items-center gap-3
              text-[12px]
              font-medium
              text-[#95959F]
            "
          >
            <span
              className="
                flex h-[17px] w-[17px]
                shrink-0
                items-center justify-center

                rounded-full

                border border-[#9B86D2]/20
                bg-[#9B86D2]/[0.07]
              "
            >
              <svg
                className="h-2.5 w-2.5 text-[#A892DD]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="m7 12 3 3 7-7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* FINAL NOTE — NO DIVIDER */}
    <div
      className="
        mt-7
        max-w-[440px]
        rounded-[13px]

        border border-white/[0.045]
        bg-white/[0.012]

        px-4 py-3
      "
    >
      <p
        className="
          text-[10.5px]
          leading-[1.65]
          text-[#656570]
        "
      >
        No fixed presentation. The session can focus on the questions and
        workflows that matter most to your team.
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
    {/* HEADER */}
    <div className="flex items-start justify-between gap-6">
      <div>
        <div
          className="
            inline-flex items-center gap-2
            rounded-full
            border border-[#927BC5]/[0.16]
            bg-[#927BC5]/[0.055]
            px-3 py-1.5
          "
        >
          <span
            className="
              h-1.5 w-1.5
              rounded-full
              bg-[#A18AD6]
              shadow-[0_0_12px_rgba(161,138,214,.35)]
            "
          />

          <span
            className="
              text-[8.5px]
              font-bold uppercase
              tracking-[0.16em]
              text-[#9A86C8]
            "
          >
            Schedule your demo
          </span>
        </div>

        <h2
          className="
            mt-4
            text-[29px]
            font-bold
            leading-[1.1]
            tracking-[-0.04em]
            text-[#F4F4F6]
            sm:text-[32px]
          "
        >
          Select a date & time
        </h2>

        <p
          className="
            mt-2
            text-[12px]
            leading-6
            text-[#74747E]
          "
        >
          Choose a convenient time for your Minivel ATS walkthrough.
        </p>
      </div>

      {/* DESKTOP TIMEZONE INDICATOR */}
      <div
        className="
          hidden items-center gap-2
          rounded-full
          border border-white/[0.05]
          bg-white/[0.018]
          px-3 py-1.5
          sm:flex
        "
      >
        <span
          className="
            h-1.5 w-1.5
            rounded-full
            bg-[#8D79BF]
          "
        />

        <span
          className="
            text-[8.5px]
            font-semibold
            text-[#73737D]
          "
        >
          India Standard Time
        </span>
      </div>
    </div>

    {/* =================================================
        BOOKING CONSOLE
    ================================================= */}

    <div
      className="
        relative mt-7
        overflow-hidden
        rounded-[24px]

        border border-white/[0.065]
        bg-[#0D0D11]/80

        shadow-[0_24px_65px_rgba(0,0,0,.16)]
      "
    >
      {/* restrained internal atmosphere */}
      <div
        className="
          pointer-events-none
          absolute -right-28 -top-32
          h-[300px] w-[300px]
          rounded-full
          bg-[#8068B3]/[0.07]
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-36 -left-28
          h-[280px] w-[280px]
          rounded-full
          bg-[#5675B6]/[0.05]
          blur-[110px]
        "
      />

      <div className="relative p-4 sm:p-5 lg:p-6">
        {/* MONTH NAVIGATION */}
        <div
          className="
            flex max-w-[540px]
            items-center justify-between
          "
        >
          <button
            type="button"
            onClick={goPreviousMonth}
            disabled={!canGoPrevious}
            aria-label="Previous month"
            className={`
              flex h-9 w-9
              items-center justify-center
              rounded-[10px]
              border
              transition-all duration-300

              ${
                canGoPrevious
                  ? `
                      border-white/[0.07]
                      bg-white/[0.025]
                      text-[#898993]

                      hover:-translate-y-0.5
                      hover:border-[#927BC5]/[0.22]
                      hover:bg-[#927BC5]/[0.055]
                      hover:text-[#D5CAE9]
                    `
                  : `
                      cursor-default
                      border-white/[0.025]
                      bg-transparent
                      text-[#36363E]
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

          <div className="text-center">
            <p
              className="
                text-[13px]
                font-bold
                tracking-[-0.015em]
                text-[#E2E2E6]
              "
            >
              {formatMonth(visibleMonth)}
            </p>

            <p
              className="
                mt-0.5
                text-[8px]
                font-medium
                tracking-[0.04em]
                text-[#5F5F69]
              "
            >
              Select an available date
            </p>
          </div>

          <button
            type="button"
            onClick={goNextMonth}
            aria-label="Next month"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-[10px]

              border border-white/[0.07]
              bg-white/[0.025]
              text-[#898993]

              transition-all duration-300

              hover:-translate-y-0.5
              hover:border-[#927BC5]/[0.22]
              hover:bg-[#927BC5]/[0.055]
              hover:text-[#D5CAE9]
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

        {/* CALENDAR + TIMES */}
        <div
          className={`
            mt-6 grid gap-6

            ${
              selectedDate
                ? "xl:grid-cols-[minmax(0,1fr)_190px]"
                : "grid-cols-1"
            }
          `}
        >
          {/* CALENDAR */}
          <div className="max-w-[540px]">
            {/* WEEK DAYS */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {WEEK_DAYS.map((day) => (
                <div
                  key={day}
                  className="
                    pb-2
                    text-[9px]
                    font-bold uppercase
                    tracking-[0.08em]
                    text-[#5F5F69]
                  "
                >
                  {day}
                </div>
              ))}

              {/* DAYS */}
              {calendarDays.map((item) => {
                if (item.type === "empty") {
                  return (
                    <div
                      key={item.key}
                      className="h-11"
                    />
                  );
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

                      rounded-[12px]

                      border
                      text-[12px]
                      font-semibold

                      transition-all
                      duration-300

                      ${
                        selected
                          ? `
                              border-[#A48DD8]/[0.40]
                              bg-[#F1EFF5]
                              text-[#111116]

                              shadow-[0_10px_28px_rgba(112,86,160,.18)]
                            `
                          : available
                            ? `
                                border-white/[0.045]
                                bg-[#131318]
                                text-[#B5B5BE]

                                hover:-translate-y-0.5
                                hover:border-[#927BC5]/[0.22]
                                hover:bg-[#18171E]
                                hover:text-white
                              `
                            : `
                                cursor-default
                                border-transparent
                                bg-transparent
                                text-[#3B3B44]
                              `
                      }
                    `}
                  >
                    {item.day}

                    {available && !selected && (
                      <span
                        className="
                          absolute bottom-1.5
                          h-[3px] w-[3px]
                          rounded-full
                          bg-[#907DD0]
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* TIMEZONE */}
            <div
              className="
                mt-7
                inline-flex
                items-center gap-2.5

                rounded-[10px]

                border border-white/[0.045]
                bg-white/[0.015]

                px-3 py-2
              "
            >
              <svg
                className="h-3.5 w-3.5 text-[#7F70A5]"
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

              <div>
                <p
                  className="
                    text-[7px]
                    font-bold uppercase
                    tracking-[0.12em]
                    text-[#565660]
                  "
                >
                  Time zone
                </p>

                <p
                  className="
                    mt-0.5
                    text-[9.5px]
                    font-medium
                    text-[#81818B]
                  "
                >
                  India Standard Time
                </p>
              </div>
            </div>
          </div>

          {/* AVAILABLE TIMES */}
          {selectedDate && (
            <div
              className="
                rounded-[16px]

                border border-white/[0.045]
                bg-black/[0.10]

                p-3.5

                xl:border-0
                xl:border-l
                xl:border-white/[0.055]
                xl:bg-transparent
                xl:p-0
                xl:pl-5
              "
            >
              <p
                className="
                  text-[8px]
                  font-bold uppercase
                  tracking-[0.12em]
                  text-[#676771]
                "
              >
                Available times
              </p>

              <p
                className="
                  mt-1.5
                  text-[10.5px]
                  font-semibold
                  leading-5
                  text-[#C5C5CC]
                "
              >
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
                        relative
                        w-full
                        overflow-hidden

                        rounded-[11px]
                        border

                        px-4 py-3

                        text-[11px]
                        font-semibold

                        transition-all
                        duration-300

                        ${
                          selected
                            ? `
                                border-[#A18AD6]/[0.42]
                                bg-[#927BC5]/[0.13]
                                text-[#F2EDF9]

                                shadow-[0_8px_25px_rgba(85,62,135,.12)]
                              `
                            : `
                                border-white/[0.055]
                                bg-[#111116]
                                text-[#9D9DA7]

                                hover:-translate-y-0.5
                                hover:border-[#927BC5]/[0.20]
                                hover:bg-[#17161C]
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
      </div>
    </div>

    {/* =================================================
        SELECTED BOOKING
    ================================================= */}

    {selectedDate && selectedTime && (
      <div
        className="
          relative mt-5
          overflow-hidden

          rounded-[18px]

          border border-[#8D78BC]/[0.12]
          bg-[#0E0E12]

          px-5 py-4

          sm:flex
          sm:items-center
          sm:justify-between
          sm:gap-5

          shadow-[0_16px_45px_rgba(0,0,0,.12)]
        "
      >
        <div
          className="
            pointer-events-none
            absolute -right-12 -top-16
            h-36 w-36
            rounded-full
            bg-[#8068B3]/[0.08]
            blur-[55px]
          "
        />

        <div className="relative">
          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5 w-1.5
                rounded-full
                bg-[#A18AD6]
              "
            />

            <p
              className="
                text-[8px]
                font-bold uppercase
                tracking-[0.15em]
                text-[#756887]
              "
            >
              Your demo
            </p>
          </div>

          <p
            className="
              mt-2
              text-[12px]
              font-semibold
              text-[#E6E6EA]
            "
          >
            {selectedDateLabel} · {selectedTime}
          </p>

          <p
            className="
              mt-1
              text-[9.5px]
              text-[#686872]
            "
          >
            30 minutes · India Standard Time
          </p>
        </div>

        <button
          type="button"
          onClick={openDetails}
          className="
            group
            relative mt-4

            inline-flex
            items-center justify-center
            gap-2

            rounded-[11px]

            bg-[#F1F0F3]

            px-5 py-3

            text-[10.5px]
            font-bold
            text-[#111116]

            shadow-[0_10px_28px_rgba(255,255,255,.06)]

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-white

            sm:mt-0
          "
        >
          Continue

          <svg
            className="
              h-3.5 w-3.5
              transition-transform duration-300
              group-hover:translate-x-0.5
            "
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
  <div className="relative mx-auto max-w-[620px]">
    {/* BACK */}
    <button
      type="button"
      onClick={() => setStep("schedule")}
      className="
        group
        mb-6
        inline-flex items-center gap-2

        rounded-[9px]
        border border-white/[0.045]
        bg-white/[0.015]

        px-3 py-2

        text-[10px]
        font-semibold
        text-[#777781]

        transition-all duration-300

        hover:border-white/[0.09]
        hover:bg-white/[0.03]
        hover:text-[#D6D6DC]
      "
    >
      <svg
        className="
          h-3.5 w-3.5
          transition-transform duration-300
          group-hover:-translate-x-0.5
        "
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

    {/* HEADER */}
    <div>
      <div
        className="
          inline-flex items-center gap-2
          rounded-full

          border border-[#927BC5]/[0.16]
          bg-[#927BC5]/[0.055]

          px-3 py-1.5
        "
      >
        <span
          className="
            h-1.5 w-1.5
            rounded-full
            bg-[#A18AD6]
          "
        />

        <span
          className="
            text-[8.5px]
            font-bold uppercase
            tracking-[0.16em]
            text-[#9A86C8]
          "
        >
          Your information
        </span>
      </div>

      <h2
        className="
          mt-4
          text-[29px]
          font-bold
          leading-[1.1]
          tracking-[-0.04em]
          text-[#F4F4F6]
          sm:text-[32px]
        "
      >
        Tell us about yourself.
      </h2>

      <p
        className="
          mt-2
          max-w-[470px]
          text-[12px]
          leading-6
          text-[#74747E]
        "
      >
        Share a few details so the Minivel team can prepare for your
        product walkthrough.
      </p>
    </div>

    {/* BOOKING SUMMARY */}
    <div
      className="
        relative mt-6
        overflow-hidden

        rounded-[17px]

        border border-[#927BC5]/[0.11]
        bg-[#0D0D11]

        p-4
      "
    >
      <div
        className="
          pointer-events-none
          absolute -right-12 -top-16
          h-36 w-36
          rounded-full
          bg-[#846DB9]/[0.075]
          blur-[55px]
        "
      />

      <div className="relative flex items-center gap-3.5">
        <div
          className="
            flex h-10 w-10
            shrink-0
            items-center justify-center

            rounded-[11px]

            border border-[#9B86D2]/20
            bg-[#9B86D2]/[0.07]
          "
        >
          <svg
            className="h-[17px] w-[17px] text-[#A58FDC]"
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

        <div className="min-w-0">
          <p
            className="
              text-[8px]
              font-bold uppercase
              tracking-[0.14em]
              text-[#6E617F]
            "
          >
            Selected demo
          </p>

          <p
            className="
              mt-1.5
              text-[12px]
              font-semibold
              text-[#E4E4E8]
            "
          >
            {selectedDateLabel}
          </p>

          <p
            className="
              mt-1
              text-[10px]
              text-[#7B7B85]
            "
          >
            {selectedTime} · 30 minutes · India Standard Time
          </p>
        </div>
      </div>
    </div>

    {/* FORM CONSOLE */}
    <form
      onSubmit={handleSubmit}
      className="
        relative mt-5
        overflow-hidden

        rounded-[22px]

        border border-white/[0.06]
        bg-[#0D0D11]/70

        p-4
        sm:p-5
      "
    >
      {/* atmosphere */}
      <div
        className="
          pointer-events-none
          absolute -bottom-28 -right-24
          h-[260px] w-[260px]
          rounded-full
          bg-[#8068B3]/[0.055]
          blur-[100px]
        "
      />

      <div className="relative space-y-4">
        {/* NAME */}
        <div>
          <label
            htmlFor="name"
            className="
              mb-2 block
              text-[10px]
              font-semibold
              text-[#A0A0A9]
            "
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
              w-full
              rounded-[11px]

              border border-white/[0.065]
              bg-[#111115]

              px-4 py-3.5

              text-[12px]
              text-[#EEEEF1]

              outline-none

              placeholder:text-[#4D4D56]

              transition-all duration-300

              hover:border-white/[0.10]

              focus:border-[#967FD0]/45
              focus:bg-[#141419]
              focus:ring-2
              focus:ring-[#967FD0]/[0.08]
            "
          />
        </div>

        {/* EMAIL */}
        <div>
          <label
            htmlFor="email"
            className="
              mb-2 block
              text-[10px]
              font-semibold
              text-[#A0A0A9]
            "
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
              w-full
              rounded-[11px]

              border border-white/[0.065]
              bg-[#111115]

              px-4 py-3.5

              text-[12px]
              text-[#EEEEF1]

              outline-none

              placeholder:text-[#4D4D56]

              transition-all duration-300

              hover:border-white/[0.10]

              focus:border-[#967FD0]/45
              focus:bg-[#141419]
              focus:ring-2
              focus:ring-[#967FD0]/[0.08]
            "
          />
        </div>

        {/* COMPANY + PHONE */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="
                mb-2 block
                text-[10px]
                font-semibold
                text-[#A0A0A9]
              "
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
                w-full
                rounded-[11px]

                border border-white/[0.065]
                bg-[#111115]

                px-4 py-3.5

                text-[12px]
                text-[#EEEEF1]

                outline-none

                placeholder:text-[#4D4D56]

                transition-all duration-300

                hover:border-white/[0.10]

                focus:border-[#967FD0]/45
                focus:bg-[#141419]
                focus:ring-2
                focus:ring-[#967FD0]/[0.08]
              "
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="
                mb-2 block
                text-[10px]
                font-semibold
                text-[#A0A0A9]
              "
            >
              Phone
              <span className="ml-1 font-normal text-[#55555E]">
                Optional
              </span>
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
                w-full
                rounded-[11px]

                border border-white/[0.065]
                bg-[#111115]

                px-4 py-3.5

                text-[12px]
                text-[#EEEEF1]

                outline-none

                placeholder:text-[#4D4D56]

                transition-all duration-300

                hover:border-white/[0.10]

                focus:border-[#967FD0]/45
                focus:bg-[#141419]
                focus:ring-2
                focus:ring-[#967FD0]/[0.08]
              "
            />
          </div>
        </div>

        {/* NOTES */}
        <div>
          <label
            htmlFor="notes"
            className="
              mb-2 block
              text-[10px]
              font-semibold
              text-[#A0A0A9]
            "
          >
            Anything you'd like us to cover?
            <span className="ml-1 font-normal text-[#55555E]">
              Optional
            </span>
          </label>

          <textarea
            id="notes"
            name="notes"
            rows="4"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Tell us what you'd like to discuss during the demo..."
            className="
              w-full resize-none
              rounded-[11px]

              border border-white/[0.065]
              bg-[#111115]

              px-4 py-3.5

              text-[12px]
              leading-6
              text-[#EEEEF1]

              outline-none

              placeholder:text-[#4D4D56]

              transition-all duration-300

              hover:border-white/[0.10]

              focus:border-[#967FD0]/45
              focus:bg-[#141419]
              focus:ring-2
              focus:ring-[#967FD0]/[0.08]
            "
          />
        </div>

        {/* ERROR */}
        {submitError && (
          <div
            className="
              rounded-[11px]
              border border-red-400/15
              bg-red-400/[0.05]

              px-4 py-3

              text-[10.5px]
              leading-5
              text-red-200
            "
          >
            {submitError}
          </div>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={submitting}
          className="
            group
            mt-1

            inline-flex w-full
            items-center justify-center
            gap-2

            rounded-[11px]

            bg-[#F1F0F3]

            px-6 py-3.5

            text-[11px]
            font-bold
            text-[#111116]

            shadow-[0_10px_30px_rgba(255,255,255,.05)]

            transition-all duration-300

            hover:-translate-y-0.5
            hover:bg-white

            disabled:cursor-wait
            disabled:translate-y-0
            disabled:opacity-60
          "
        >
          {submitting ? "Booking..." : "Confirm Booking"}

          {!submitting && (
            <svg
              className="
                h-3.5 w-3.5
                transition-transform duration-300
                group-hover:translate-x-0.5
              "
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

        {/* PRIVACY */}
        <div className="flex items-center justify-center gap-2 pt-0.5">
          <svg
            className="h-3 w-3 text-[#595963]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect
              x="5"
              y="10"
              width="14"
              height="10"
              rx="2"
              strokeWidth="1.6"
            />

            <path
              d="M8 10V7a4 4 0 0 1 8 0v3"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>

          <p
            className="
              text-center
              text-[9px]
              leading-5
              text-[#595963]
            "
          >
            Your details will only be used to arrange this demo.
          </p>
        </div>
      </div>
    </form>
  </div>
)}

           {/* =================================================
    STEP 3 — CONFIRMATION
================================================= */}

{step === "confirmed" && (
  <div
    className="
      relative flex
      min-h-[570px]
      flex-col
      items-center justify-center
      text-center
    "
  >
    {/* restrained success atmosphere */}
    <div
      className="
        pointer-events-none
        absolute left-1/2 top-[42%]
        h-[320px] w-[320px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#8169B5]/[0.07]
        blur-[120px]
      "
    />

    <div className="relative z-10 flex w-full flex-col items-center">
      {/* SUCCESS ICON */}
      <div
        className="
          relative
          flex h-[72px] w-[72px]
          items-center justify-center
          rounded-[22px]

          border border-[#A18AD6]/20
          bg-[#9B86D2]/[0.075]

          shadow-[0_18px_50px_rgba(83,63,125,.12)]
        "
      >
        <div
          className="
            pointer-events-none
            absolute inset-[7px]
            rounded-[16px]
            border border-white/[0.035]
          "
        />

        <svg
          className="relative h-7 w-7 text-[#B7A5E8]"
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

      {/* STATUS BADGE */}
      <div
        className="
          mt-6
          inline-flex items-center gap-2
          rounded-full

          border border-[#927BC5]/[0.14]
          bg-[#927BC5]/[0.05]

          px-3 py-1.5
        "
      >
        <span
          className="
            h-1.5 w-1.5
            rounded-full
            bg-[#A18AD6]
          "
        />

        <span
          className="
            text-[8.5px]
            font-bold uppercase
            tracking-[0.16em]
            text-[#9A86C8]
          "
        >
          Booking received
        </span>
      </div>

      {/* HEADING */}
      <h2
        className="
          mt-4
          text-[30px]
          font-bold
          leading-[1.1]
          tracking-[-0.04em]
          text-[#F4F4F6]

          sm:text-[34px]
        "
      >
        Your demo is scheduled.
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-3
          max-w-[430px]

          text-[12px]
          leading-[1.8]
          text-[#797983]
        "
      >
        Thanks, {formData.name}. Your Minivel ATS demo request has been
        received. Meeting details will be shared with you shortly.
      </p>

      {/* BOOKING CARD */}
      <div
        className="
          relative mt-7
          w-full max-w-[410px]
          overflow-hidden

          rounded-[20px]

          border border-[#927BC5]/[0.11]
          bg-[#0D0D11]

          p-5
          text-left

          shadow-[0_20px_55px_rgba(0,0,0,.15)]
        "
      >
        {/* card atmosphere */}
        <div
          className="
            pointer-events-none
            absolute -right-14 -top-16
            h-40 w-40
            rounded-full
            bg-[#8169B5]/[0.085]
            blur-[60px]
          "
        />

        <div className="relative">
          {/* CARD HEADER */}
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-10 w-10
                shrink-0
                items-center justify-center

                rounded-[11px]

                border border-[#9B86D2]/20
                bg-[#9B86D2]/[0.07]
              "
            >
              <svg
                className="h-[17px] w-[17px] text-[#A58FDC]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="15"
                  rx="2"
                  strokeWidth="1.6"
                />

                <path
                  d="M8 3v4M16 3v4M4 10h16"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <p
                className="
                  text-[8px]
                  font-bold uppercase
                  tracking-[0.15em]
                  text-[#6E617F]
                "
              >
                Confirmed session
              </p>

              <p
                className="
                  mt-1
                  text-[12px]
                  font-semibold
                  text-[#E6E6EA]
                "
              >
                Minivel ATS Demo
              </p>
            </div>
          </div>

          {/* DETAILS */}
          <div
            className="
              mt-5 grid gap-3
              sm:grid-cols-2
            "
          >
            {/* DATE */}
            <div
              className="
                rounded-[12px]
                border border-white/[0.045]
                bg-white/[0.018]
                px-3.5 py-3
              "
            >
              <p
                className="
                  text-[7.5px]
                  font-bold uppercase
                  tracking-[0.12em]
                  text-[#595963]
                "
              >
                Date
              </p>

              <p
                className="
                  mt-1.5
                  text-[10.5px]
                  font-semibold
                  text-[#CFCFD5]
                "
              >
                {selectedDateLabel}
              </p>
            </div>

            {/* TIME */}
            <div
              className="
                rounded-[12px]
                border border-white/[0.045]
                bg-white/[0.018]
                px-3.5 py-3
              "
            >
              <p
                className="
                  text-[7.5px]
                  font-bold uppercase
                  tracking-[0.12em]
                  text-[#595963]
                "
              >
                Time
              </p>

              <p
                className="
                  mt-1.5
                  text-[10.5px]
                  font-semibold
                  text-[#CFCFD5]
                "
              >
                {selectedTime}
              </p>
            </div>
          </div>

          {/* META */}
          <div
            className="
              mt-4
              flex flex-wrap
              items-center gap-x-4 gap-y-2
            "
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-3 w-3 text-[#706383]"
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

              <span className="text-[9px] text-[#70707A]">
                30 minutes
              </span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="h-3 w-3 text-[#706383]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  strokeWidth="1.5"
                />

                <path
                  d="M3 12h18M12 3c2.5 2.7 3.7 5.7 3.7 9S14.5 18.3 12 21"
                  strokeWidth="1.4"
                />
              </svg>

              <span className="text-[9px] text-[#70707A]">
                India Standard Time
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* NEXT STEP MESSAGE */}
      <div
        className="
          mt-5
          flex max-w-[410px]
          items-start gap-2.5
          text-left
        "
      >
        <svg
          className="
            mt-0.5 h-3.5 w-3.5
            shrink-0
            text-[#796A94]
          "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M4 6h16v12H4z"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          <path
            d="m4 7 8 6 8-6"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        <p
          className="
            text-[9.5px]
            leading-[1.65]
            text-[#62626C]
          "
        >
          Keep an eye on your inbox for meeting information and any
          follow-up details from the Minivel team.
        </p>
      </div>

      {/* RETURN CTA */}
      <Link
        to="/"
        className="
          group
          mt-7
          inline-flex
          items-center justify-center
          gap-2

          rounded-[11px]

          bg-[#F1F0F3]

          px-5 py-3

          text-[10.5px]
          font-bold
          text-[#111116]

          shadow-[0_10px_28px_rgba(255,255,255,.05)]

          transition-all duration-300

          hover:-translate-y-0.5
          hover:bg-white
        "
      >
        Back to Minivel ATS

        <svg
          className="
            h-3.5 w-3.5
            transition-transform duration-300
            group-hover:translate-x-0.5
          "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M17 8l4 4m0 0-4 4m4-4H3"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  </div>
)}
          </section>
        </div>
      </div>
    </main>
  );
}