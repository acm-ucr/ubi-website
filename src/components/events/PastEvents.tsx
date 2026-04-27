import Paint from "@/public/events/Paint_PE.svg";
import Pumpkin from "@/public/events/Pumpkin_PE.svg";
import Image from "next/image";

const PastEvents = () => {
  return (
    <div className="mb-10 flex w-full flex-col items-center">
      <div className="font-volkhov text-ubi-blue pb-30 text-6xl font-black">
        <p>PAST EVENTS</p>
      </div>
      <div className="flex flex-row">
        <div className="mr-5 flex flex-1 flex-col items-center">
          <Image className="w-4/5" src={Paint} alt="Paint Event Image" />
          <div className="text-ubi-blue bg-ubi-pink w-4/5 overflow-visible rounded-br-4xl rounded-bl-4xl p-8 pt-10 pb-10 text-center text-5xl font-semibold shadow-xl">
            <p>Paint, Petals, and Pints!</p>
          </div>
        </div>
        <div className="ml-5 flex flex-1 flex-col items-center">
          <Image className="w-4/5" src={Pumpkin} alt="Pumpkin Event Image" />
          <div className="text-ubi-blue bg-ubi-pink w-4/5 overflow-visible rounded-br-4xl rounded-bl-4xl p-8 pt-10 pr-15 pb-10 pl-17 text-center text-5xl font-semibold tracking-tight shadow-xl">
            <p>Pumpkin Painting w/ LifeStream</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
