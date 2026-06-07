"use client";
import Paint from "@/public/events/Paint_PE.svg";
import Pumpkin from "@/public/events/Pumpkin_PE.svg";
import EventCard from "./pastEventsCard";

const PastEvents = () => {
  return (
    <div className="mb-35 flex w-full flex-col items-center">
      <div className="font-volkhov text-ubi-blue pb-30 text-6xl font-black">
        <p>PAST EVENTS</p>
      </div>
      <div className="flex flex-row">
        <EventCard
          image={Paint}
          title="Paint, Petals, and Pints!"
          description={
            <>
              <p className="py-10">
                Make a bouquet for valentines day while learning about the blood
                donation process and our upcoming blood drives.
              </p>
              <p>
                Also, enjoy pizza and ice cream while getting to know some of
                our general members.
              </p>
            </>
          }
        />
        <EventCard
          image={Pumpkin}
          title="Pumpkin Painting w/ LifeStream"
          description={
            <>
              <p className="py-10">
                Paint pumpkins as fun decor for Halloween as we introduce what
                UBI is and our new board members!
              </p>
              <p>
                Learn more about phlebotomy processes and what volunteer
                opportunities we have to offer.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default PastEvents;
