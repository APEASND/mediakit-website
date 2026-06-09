import Link from "next/link";
import type { Category } from "@/data/events";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href="/experiences" className="group shrink-0 w-[160px]">
      <div className="aspect-square rounded-xl overflow-hidden mb-2">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-[15px] text-jarvis-dark">{category.name}</h3>
      <p className="text-sm text-jarvis-gray">{category.count} available</p>
    </Link>
  );
}
