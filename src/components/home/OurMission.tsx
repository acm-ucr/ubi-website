import MissionCard from "./OurMissionCard";
import { missionCards } from "@/data/missionCards";

const OurMission = () => {
  return (
    <div className="relative flex w-full justify-center p-5 lg:w-4/5">
      <div className="bg-ubi-lightpink h-full w-9/10 rounded-4xl shadow-xl shadow-black/20 lg:w-full">
        <div>
          <p className="font-volkhov text-ubi-blue px-6 pt-7 text-center text-[2.4rem] font-bold tracking-wider lg:float-left lg:text-7xl">
            Our Mission
          </p>
          <p className="text-ubi-blue px-6 pt-7 pb-5 text-center text-xl leading-relaxed font-medium lg:pb-0 lg:text-left">
            To create a sustainable and equitable blood supply for all by
            continuously engaging and replenishing a network of young, diverse
            blood donor advocates. We aim to address the issue of the lack of
            nationwide blood donations by mobilizing individuals to become
            consistent donors and long-term advocates within their communities.
          </p>
        </div>
        <div className="-mt-7 flex flex-col items-center justify-around px-6 pb-6 lg:flex-row">
          {missionCards.map((card) => (
            <MissionCard
              key={card.text}
              imageSrc={card.image}
              text={card.text}
              imageSize={card.imageSize}
              imageClassName={card.imageClassName ?? ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
