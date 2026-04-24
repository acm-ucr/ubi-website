import MissionCard from "./OurMissionCard";
import { missionCards } from "@/data/missionCards";

const OurMission = () => {
  return (
    <div className="relative flex w-4/5 p-5">
      <div className="bg-ubi-lightpink h-full w-full rounded-4xl shadow-xl shadow-black/20">
        <div>
          <p className="font-volkhov text-ubi-blue float-left px-6 pt-7 text-6xl font-bold tracking-wider">
            Our Mission
          </p>
          <p className="text-ubi-blue px-6 pt-7 text-2xl leading-relaxed font-medium">
            To create a sustainable and equitable blood supply for all by
            continuously engaging and replenishing a network of young, diverse
            blood donor advocates. We aim to address the issue of the lack of
            nationwide blood donations by mobilizing individuals to become
            consistent donors and long-term advocates within their communities.
          </p>
        </div>
        <div className="-mt-7 flex flex-row justify-around px-6 pb-6">
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
