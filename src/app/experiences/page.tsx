import ScrollRow from "@/components/ScrollRow";
import EventCard from "@/components/EventCard";
import CategoryCard from "@/components/CategoryCard";
import { fitnessCategories, popularExperiences } from "@/data/events";

export default function ExperiencesPage() {
  return (
    <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-8">
      <section className="mb-10">
        <h2 className="text-[22px] font-bold text-jarvis-dark mb-6">
          Fitness Experiences in London
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {fitnessCategories.map((cat) => (
            <CategoryCard key={cat.name} category={cat} />
          ))}
        </div>
      </section>

      <ScrollRow title="Popular experiences in London" showArrow>
        {popularExperiences.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollRow>
    </div>
  );
}
