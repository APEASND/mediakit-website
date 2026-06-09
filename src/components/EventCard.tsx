"use client";

import Link from "next/link";
import type { FitnessEvent } from "@/data/events";

export default function EventCard({ event }: { event: FitnessEvent }) {
  return (
    <Link href={`/event/${event.id}`} className="group min-w-[270px] max-w-[320px] shrink-0">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {event.badge && (
          <span className="absolute top-3 left-3 bg-white text-jarvis-dark text-xs font-bold px-3 py-1.5 rounded-full shadow">
            {event.badge}
          </span>
        )}
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center"
          onClick={(e) => e.preventDefault()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="rgba(0,0,0,0.5)"
            />
          </svg>
        </button>
      </div>
      <div>
        <h3 className="font-semibold text-[15px] text-jarvis-dark line-clamp-2">{event.title}</h3>
        {event.dates && (
          <p className="text-sm text-jarvis-gray">{event.dates} &middot; {event.hostType}</p>
        )}
        {!event.dates && event.hostType && (
          <p className="text-sm text-jarvis-gray">{event.hostType}</p>
        )}
        <div className="flex items-center gap-1 mt-0.5">
          <span className="font-semibold text-[15px]">{event.price}</span>
          {event.priceUnit && <span className="text-sm text-jarvis-gray">{event.priceUnit}</span>}
          {!event.priceUnit && <span className="text-sm text-jarvis-gray">total</span>}
          {event.rating && (
            <>
              <span className="text-sm text-jarvis-gray ml-auto">&#9733; {event.rating}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
