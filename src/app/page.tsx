import Practice from "@/components/Practice";
import OurMission from "@/components/home/OurMission";
import Interest from "@/components/home/StillInterested";

const Home = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <OurMission />
      </div>
      <div>
        <Interest />
      </div>
    </>
  );
};

export default Home;
