import Title from "@/components/Title";
import PastEvents from "@/components/events/PastEvents";
import Calendar from "@/components/events/Calendar";
const Events = () => {
  return (
    <div>
      <Title text="Upcoming Events" />
      <Calendar />
      <PastEvents />
    </div>
  );
};

export default Events;
