import Title from "@/components/Title";
import PastEvents from "@/components/events/PastEvents";
import Calendar from "@/components/events/Calendar";
import Image from 'next/image';
const Events = () => {
  return (
    <div>
      <Title text="Upcoming Events" />
      <Image 
        src="/assets/Heart-Pump.svg" 
        alt="Heart Pump Graphic"
        width={600} 
        height={600}
        className="absolute top-70 right-0 w-[448px] h-auto z-0 pointer-events-none"
        priority
      />
      <Calendar />
      <PastEvents />
    </div>
  );
};

export default Events;
