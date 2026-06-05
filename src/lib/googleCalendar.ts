export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
}

interface GoogleCalendarEventItem {
  id: string;
  summary?: string;
  location?: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
}

export const getGoogleCalendarEvents = async (
  timeMin: string,
  timeMax: string,
): Promise<CalendarEvent[]> => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
  const calendarEmail = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

  if (!apiKey || !calendarEmail) {
    throw new Error(
      "Google Calendar API key or email not configured. Check environment variables.",
    );
  }

  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      calendarEmail,
    )}/events`,
  );
  url.searchParams.append("key", apiKey);
  url.searchParams.append("timeMin", timeMin);
  url.searchParams.append("timeMax", timeMax);
  url.searchParams.append("orderBy", "startTime");
  url.searchParams.append("singleEvents", "true");

  const res = await fetch(url.toString());

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `Google Calendar API error (${res.status}): ${errorData.error?.message || "Unknown error"}`,
    );
  }

  const data = await res.json();
  const events = ((data.items as GoogleCalendarEventItem[]) || []).map(
    (item) => ({
      id: item.id,
      title: item.summary || "Untitled Event",
      start:
        item.start?.dateTime ?? item.start?.date ?? new Date().toISOString(),
      end: item.end?.dateTime ?? item.end?.date ?? new Date().toISOString(),
      location: item.location,
      description: item.description,
    }),
  );

  return events;
};
