"use client";

import type { inviteData } from "@/data/invite";
import { withBasePath } from "@/lib/paths";

type CalendarData = typeof inviteData.calendar;

export function CalendarButton({ data }: { data: CalendarData }) {
  const addToCalendar = () => {
    const isAndroid = /Android/i.test(window.navigator.userAgent);
    window.location.href = isAndroid ? data.googleUrl : withBasePath(data.icsPath);
  };

  return (
    <button
      className="calendar-add-button mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-[#d8799e] px-5 py-3 font-display text-[15px] uppercase tracking-[0.06em] text-white shadow-[0_10px_22px_rgba(197,86,124,0.2)] ring-1 ring-white/60"
      type="button"
      onClick={addToCalendar}
    >
      <span className="calendar-add-icon" aria-hidden="true" />
      {data.buttonText}
    </button>
  );
}
