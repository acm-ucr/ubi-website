import FutureCard from "@/components/about/FutureProjectsCard";
import { FutureProjects } from "@/data/OurFutureProjects";

const FutureProject = () => {
  return (
    <div className="w-4/5 flex-col pt-8">
      <div className="bg-ubi-red-100 h-[37.8vw] w-full rounded-4xl shadow-xl shadow-black/20">
        <p className="text-ubi-white font-volkhov pt-10 text-center text-[4vw]">
          Future Projects & Collaborations
        </p>
        <div className="flex flex-row justify-center gap-15 pt-15">
          {FutureProjects.map((card) => (
            <FutureCard
              key={card.text}
              imageSrc={card.image}
              text={card.text}
              imageClassName={card.imageClassName ?? ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureProject;
