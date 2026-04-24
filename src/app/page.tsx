import Practice from "@/components/Practice";
import Interest from "@/components/home/StillInterested";

const Home = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <Practice text1="Change Me!" text2="Click" text3="Props" />
      </div>

      <div>
        <Interest />
      </div>
    </>
  );
};

export default Home;
