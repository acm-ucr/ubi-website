"use client";

import { useEffect, useMemo, useState } from "react";
import { getGoogleCalendarEvents, type CalendarEvent } from "@/lib/googleCalendar";

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

// Build the grid: 6 rows × 7 cols, padded with prev/next month days
const buildCalendarGrid = (year: number, month: number): Date[] => {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: Date[] = [];

  // Pad from previous month
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push(new Date(year, month, -i));
  }
  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d));
  }
  // Pad to fill 6 rows (42 cells)
  const remaining = 42 - days.length;
  for (let d = 1; d <= remaining; d++) {
    days.push(new Date(year, month + 1, d));
  }

  return days;
};

// Get events that fall on a specific day
const getEventsForDay = (events: CalendarEvent[], day: Date): CalendarEvent[] =>
  events
    .filter((e) => {
      const start = getEventStart(e);
      const end = getEventEnd(e);
      // Google all-day event ends are exclusive — subtract 1ms
      const adjustedEnd = isAllDay(e) ? new Date(end.getTime() - 1) : end;
      return isSameDay(start, day) || (day > start && day <= adjustedEnd);
    })
    .sort((a, b) => getEventStart(a).getTime() - getEventStart(b).getTime());

// ─── Day Cell ─────────────────────────────────────────────────────────────────

interface DayCellProps {
  day: Date;
  isCurrentMonth: boolean;
  events: CalendarEvent[];
  onClick: (day: Date, events: CalendarEvent[]) => void;
}

const DayCell = ({ day, isCurrentMonth, events, onClick }: DayCellProps) => {
  const today = isToday(day);
  const MAX_VISIBLE = 2;
  const visible = events.slice(0, MAX_VISIBLE);
  const overflow = events.length - MAX_VISIBLE;

  return (
    <div
      className={`
        relative flex min-h-[160px] cursor-pointer flex-col border-b border-r border-black p-6
        transition-colors duration-150
        ${!isCurrentMonth ? "bg-slate-300" : "bg-white hover:bg-rose-50"}
        ${today && isCurrentMonth ? "bg-rose-100/80" : ""}
      `}
      onClick={() => onClick(day, events)}
    >
      {/* Day number */}
      <span
        className={`
          mb-1 ml-auto flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold
          ${today ? "bg-rose-500 text-white shadow-sm" : isCurrentMonth ? "border border-rose-200 text-rose-900" : "text-gray-400"}
        `}
      >
        {day.getDate()}
      </span>

      {/* Events */}
      <div className="flex flex-col gap-1">
        {visible.map((event) => {
          const start = getEventStart(event);
          const allDay = isAllDay(event);
          return (
            <div
              key={event.id}
              className="flex items-center justify-between gap-2 overflow-hidden rounded-xl bg-rose-600 px-3 py-2 text-[11px] font-semibold text-white shadow-sm"
            >
              <span className="truncate">{event.title}</span>
              {!allDay && (
                <span className="shrink-0 text-[10px] opacity-90">{formatTime(start)}</span>
              )}
            </div>
          );
        })}
        {overflow > 0 && (
          <p className="pl-1 text-xs text-rose-800">+{overflow} more</p>
        )}
      </div>
    </div>
  );
};

// ─── Event Detail Modal ───────────────────────────────────────────────────────

interface ModalProps {
  day: Date;
  events: CalendarEvent[];
  onClose: () => void;
}

const EventModal = ({ day, events, onClose }: ModalProps) => {
  const label = day.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-900">{label}</p>
            <p className="text-sm text-gray-400">
              {events.length === 0
                ? "No events"
                : `${events.length} event${events.length > 1 ? "s" : ""}`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {events.length === 0 ? (
          <p className="py-6 text-center text-gray-400">Nothing scheduled.</p>
        ) : (
          <div className="flex max-h-80 flex-col gap-3 overflow-y-auto">
            {events.map((event) => {
              const start = getEventStart(event);
              const end = getEventEnd(event);
              const allDay = isAllDay(event);
              return (
                <div
                  key={event.id}
                  className="rounded-xl border border-rose-100 bg-rose-50 p-3"
                >
                  <p className="font-semibold text-gray-900">{event.title}</p>
                  <p className="text-sm text-gray-500">
                    {allDay ? "All Day" : `${formatTime(start)} – ${formatTime(end)}`}
                  </p>
                  {event.location && (
                    <p className="mt-1 text-sm text-gray-500">📍 {event.location}</p>
                  )}
                  {event.description && (
                    <p className="mt-1 text-sm text-gray-400">{event.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Calendar ─────────────────────────────────────────────────────────────────

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currMonth, setCurrMonth] = useState<Date>(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  const [modal, setModal] = useState<{ day: Date; events: CalendarEvent[] } | null>(null);

  const year = currMonth.getFullYear();
  const month = currMonth.getMonth();
  const monthLabel = currMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const grid = buildCalendarGrid(year, month);

  const goToPrevMonth = () => setCurrMonth((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const goToNextMonth = () => setCurrMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  const goToToday = () => {
    const now = new Date();
    setCurrMonth(new Date(now.getFullYear(), now.getMonth(), 1));
  };

  useEffect(() => {
    console.log("Calendar ID:", process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL);
    console.log("Using public calendar feed, API key no longer required.");

    const loadEvents = async () => {

      const now = new Date();
      const timeMin = new Date(now.getFullYear(), now.getMonth() - 3, 1).toISOString();
      const timeMax = new Date(now.getFullYear(), now.getMonth() + 6, 0).toISOString();

      try {
        const loadedEvents = await getGoogleCalendarEvents(timeMin, timeMax);
        setEvents(loadedEvents);
      } catch (fetchError) {
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Failed to load Google Calendar events."
        );
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  return (
    <div className="w-full overflow-hidden p-24">

      {/* Month header */}
      <div className="flex items-center justify-center gap-4 px-8 py-6">
        <button
          onClick={goToPrevMonth}
          className="rounded-full border border-black bg-[#ffd7d6] px-5 py-3 text-base font-semibold text-[#7f1728] transition hover:bg-[#ffebeb]"
          aria-label="Previous month"
        >
          ‹
        </button>

        <h2 className="text-3xl font-bold uppercase tracking-[0.12em] text-[#8f1f2f]">
          {monthLabel}
        </h2>

        <button
          onClick={goToNextMonth}
          className="rounded-full border border-black bg-[#ffd7d6] px-5 py-3 text-base font-semibold text-[#7f1728] transition hover:bg-[#ffebeb]"
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 border-x border-b border-black bg-[#ffd8d8]">
        {DAYS_OF_WEEK.map((d, index) => (
          <div
            key={d}
            className={`border-r border-black px-0 py-5 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#17204b] ${
              index === 0 ? "rounded-tl-[30px]" : ""
            } ${index === DAYS_OF_WEEK.length - 1 ? "rounded-tr-[30px]" : ""}`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Grid body */}
      {loading ? (
        <div className="flex h-96 items-center justify-center text-gray-400">
          Loading calendar events…
        </div>
      ) : error ? (
        <div className="flex h-96 items-center justify-center px-8 text-center text-red-400">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-7 border-l border-t border-black">
          {grid.map((day, i) => {
            const isCurrentMonth = day.getMonth() === month;
            const dayEvents = getEventsForDay(events, day);
            return (
              <DayCell
                key={i}
                day={day}
                isCurrentMonth={isCurrentMonth}
                events={dayEvents}
                onClick={(d, e) => setModal({ day: d, events: e })}
              />
            );
          })}
        </div>
      )}

      {modal && (
        <EventModal
          day={modal.day}
          events={modal.events}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
};

export default Calendar;