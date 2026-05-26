"use client";

import { useEffect, useRef, useState } from "react";
import {
  getGoogleCalendarEvents,
  type CalendarEvent,
} from "@/lib/googleCalendar";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const isAllDay = (event: CalendarEvent): boolean => !event.start.includes("T");

const getEventStart = (event: CalendarEvent): Date => {
  if (isAllDay(event)) {
    const [y, m, d] = event.start.split("-").map(Number);
    return new Date(y, m - 1, d);
  }
  return new Date(event.start);
};

const getEventEnd = (event: CalendarEvent): Date => {
  if (isAllDay(event)) {
    const [y, m, d] = event.end.split("-").map(Number);
    return new Date(y, m - 1, d);
  }
  return new Date(event.end);
};

const formatTime = (date: Date): string =>
  date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const isToday = (date: Date): boolean => isSameDay(date, new Date());

const buildCalendarGrid = (year: number, month: number): Date[] => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: Date[] = [];

  for (let i = firstDay - 1; i >= 0; i--) days.push(new Date(year, month, -i));
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d));
  const remaining = 42 - days.length;
  for (let d = 1; d <= remaining; d++) days.push(new Date(year, month + 1, d));

  return days;
};

const getEventsForDay = (events: CalendarEvent[], day: Date): CalendarEvent[] =>
  events
    .filter((e) => {
      const start = getEventStart(e);
      const end = getEventEnd(e);
      const adjustedEnd = isAllDay(e) ? new Date(end.getTime() - 1) : end;
      return isSameDay(start, day) || (day > start && day <= adjustedEnd);
    })
    .sort((a, b) => getEventStart(a).getTime() - getEventStart(b).getTime());

// ─── Expandable Pill ──────────────────────────────────────────────────────────

interface PillProps {
  event: CalendarEvent;
}

const EventPill = ({ event }: PillProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = getEventStart(event);
  const allDay = isAllDay(event);

  const handleMouseEnterContainer = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleMouseLeaveContainer = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
    >
      {/* Base pill */}
      <div
        onClick={handleClick}
        className="bg-ubicalendar-red text-ubi-navy flex w-full cursor-pointer items-center justify-between gap-1 overflow-hidden rounded px-1.5 py-0.5 text-[10px] font-extrabold shadow-sm transition-opacity duration-100 active:opacity-70"
      >
        <span className="truncate">{event.title}</span>
      </div>

      {/* Expanded content */}
      {open && (
        <div className="absolute top-0 left-0 z-30 w-full min-w-[140px] overflow-hidden rounded-lg bg-[#ffc9c1] shadow-[4px_6px_0_rgba(0,0,0,0.2)]">
          <div
            onClick={handleClick}
            className="bg-ubicalendar-red flex cursor-pointer items-center justify-between gap-1 px-2 py-1"
          >
            <span className="text-ubi-navy truncate text-[10px] font-extrabold">
              {event.title}
            </span>
            {!allDay && (
              <span className="text-ubi-navy shrink-0 text-[10px] font-extrabold opacity-90">
                {formatTime(start)}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-0.5 px-2 py-1.5">
            <p className="text-ubi-navy text-[10px] font-extrabold">
              {event.location || "Location/Building"}
            </p>
            <p className="text-ubi-navy text-[10px] font-extrabold">
              {allDay ? "All Day" : formatTime(start)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Day Cell ─────────────────────────────────────────────────────────────────

interface DayCellProps {
  day: Date;
  isCurrentMonth: boolean;
  events: CalendarEvent[];
}

const DayCell = ({ day, isCurrentMonth, events }: DayCellProps) => {
  const today = isToday(day);
  const MAX_VISIBLE = 2;
  const visible = events.slice(0, MAX_VISIBLE);
  const overflow = events.length - MAX_VISIBLE;

  return (
    <div
      className={`relative flex min-h-[72px] flex-col overflow-visible border-r border-b border-black p-1 ${!isCurrentMonth ? "bg-slate-300" : today ? "bg-[#E3C4C3]" : "bg-white"} `}
    >
      <span
        className={`mb-0.5 ml-auto text-[11px] font-semibold ${
          isCurrentMonth ? "text-rose-900" : "text-gray-400"
        }`}
      >
        {day.getDate()}
      </span>

      <div className="flex w-full flex-col items-start gap-0.5 self-start">
        {visible.map((event) => (
          <EventPill key={event.id} event={event} />
        ))}
        {overflow > 0 && (
          <p className="pl-0.5 text-[9px] text-rose-800">+{overflow} more</p>
        )}
      </div>
    </div>
  );
};

// ─── CalendarMobile ───────────────────────────────────────────────────────────

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarMobile = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currMonth, setCurrMonth] = useState<Date>(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  const year = currMonth.getFullYear();
  const month = currMonth.getMonth();
  const monthLabel = currMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const grid = buildCalendarGrid(year, month);

  const goToPrevMonth = () =>
    setCurrMonth((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const goToNextMonth = () =>
    setCurrMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  useEffect(() => {
    const loadEvents = async () => {
      const now = new Date();
      const timeMin = new Date(
        now.getFullYear(),
        now.getMonth() - 3,
        1,
      ).toISOString();
      const timeMax = new Date(
        now.getFullYear(),
        now.getMonth() + 6,
        0,
      ).toISOString();

      try {
        const loadedEvents = await getGoogleCalendarEvents(timeMin, timeMax);
        setEvents(loadedEvents);
      } catch (fetchError) {
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Failed to load Google Calendar events.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  return (
    <div className="w-full px-3 pt-4 pb-6">
      {/* Month header */}
      <div className="flex items-center justify-center gap-3 py-3">
        <button
          onClick={goToPrevMonth}
          className="flex h-8 w-8 items-center justify-center text-[#7f1728]"
          aria-label="Previous month"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        <h2 className="text-xl font-bold text-[#8f1f2f]">{monthLabel}</h2>

        <button
          onClick={goToNextMonth}
          className="flex h-8 w-8 items-center justify-center text-[#7f1728]"
          aria-label="Next month"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Header + grid */}
      <div
        className="relative z-10"
        style={{ boxShadow: "10px 10px 4px 0px rgba(0,0,0,0.25)" }}
      >
        <div className="grid grid-cols-7 rounded-t-lg border-t border-r border-l border-black bg-[#ffd8d8]">
          {DAYS_OF_WEEK.map((d, index) => (
            <div
              key={d}
              className={`text-ubi-lightnavy py-2 text-center text-xs font-semibold ${
                index === 0 ? "rounded-tl-xl" : ""
              } ${index === DAYS_OF_WEEK.length - 1 ? "rounded-tr-xl" : ""}`}
            >
              {d}
            </div>
          ))}
        </div>

        {loading ? (
          <div className="flex h-48 items-center justify-center text-sm text-gray-400">
            Loading calendar events…
          </div>
        ) : error ? (
          <div className="flex h-48 items-center justify-center px-4 text-center text-sm text-red-400">
            {error}
          </div>
        ) : (
          <div className="relative grid grid-cols-7 overflow-visible border-t border-l border-black">
            {grid.map((day, i) => (
              <DayCell
                key={i}
                day={day}
                isCurrentMonth={day.getMonth() === month}
                events={getEventsForDay(events, day)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarMobile;
