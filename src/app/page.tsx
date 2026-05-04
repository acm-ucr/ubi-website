import OurMission from "@/components/home/OurMission";
import Interest from "@/components/home/StillInterested";
import Intro from "@/components/home/Intro";

const Home = () => {
  return (
    <div className="flex h-min flex-col items-center justify-center gap-20 pb-20">
      <Intro />
      <OurMission />
      <Interest />
    </div>
  );
};

export default Home;
