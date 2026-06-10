"use client";

import { useEffect, useState } from "react";
import Title from "@/components/Title";
import PastEvents from "@/components/events/PastEvents";
import Calendar from "@/components/events/Calendar";
import CalendarMobile from "@/components/events/CalendarMobile";
import Image from "next/image";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const Events = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative overflow-visible">
      <Title text="Upcoming Events" />

      {isMobile ? (
        <>
          <Image
            src="/assets/Heart-Pump.svg"
            alt=""
            width={500}
            height={500}
            className="pointer-events-none absolute top-60 left-0 z-0 h-auto w-[120px] -scale-x-100 select-none"
            priority
          />
          <Image
            src="/assets/Heart-Pump.svg"
            alt=""
            width={500}
            height={500}
            className="pointer-events-none absolute top-60 right-0 z-0 h-auto w-[120px] select-none"
            priority
          />
          <CalendarMobile />
        </>
      ) : (
        <>
          <Image
            src="/assets/Heart-Pump.svg"
            alt=""
            width={500}
            height={500}
            className="pointer-events-none absolute top-40 right-0 z-0 select-none"
            priority
          />
          <Calendar />
        </>
      )}

      <PastEvents />
    </div>
  );
};

export default Events;
