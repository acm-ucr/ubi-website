import OurMission from "@/components/home/OurMission";
import Interest from "@/components/home/StillInterested";

const Home = () => {
  return (
    <div className="flex h-min flex-col items-center justify-center gap-20">
      <OurMission />
      <Interest />
    </div>
  );
};

export default Home;
