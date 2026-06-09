import ScrollRow from "@/components/ScrollRow";
import EventCard from "@/components/EventCard";
import { popularEvents, featuredStudios } from "@/data/events";

export default function Home() {
  return (
    <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-8">
      <ScrollRow title="Popular fitness events in London" showArrow>
        {popularEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollRow>

      <ScrollRow
        title="Great deals on studios"
        subtitle="Plus, get JARVIS credit when you book at a featured studio."
      >
        {featuredStudios.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollRow>
    </div>
  );
}
