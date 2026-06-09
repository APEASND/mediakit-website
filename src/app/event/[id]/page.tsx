import { eventDetail } from "@/data/events";

export default async function EventDetailPage() {
  const event = eventDetail;

  return (
    <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-8">
      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mb-8 max-h-[480px]">
        <div className="row-span-2">
          <img
            src={event.images[0]}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={event.images[1]}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <img
            src={event.images[2]}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <img
            src={event.images[3]}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-[32px] font-bold text-jarvis-dark mb-2">
            {event.title}
          </h1>
          <p className="text-jarvis-gray mb-4">{event.description}</p>

          <div className="flex items-center gap-2 text-sm mb-6">
            <span className="font-semibold">&#9733; {event.rating}</span>
            <span className="text-jarvis-gray">&middot;</span>
            <span className="text-jarvis-gray">
              {event.reviews.toLocaleString()} reviews
            </span>
            <span className="text-jarvis-gray">&middot;</span>
            <span className="text-jarvis-gray">{event.location}</span>
            <span className="text-jarvis-gray">&middot;</span>
            <span className="text-jarvis-gray">{event.category}</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:shadow transition">
              <ShareIcon />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:shadow transition">
              <HeartIcon />
            </button>
          </div>

          <hr className="mb-6" />

          {/* Host Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-jarvis-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
              {event.hostName.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">Hosted by {event.hostName}</p>
              <p className="text-sm text-jarvis-gray">{event.hostRole}</p>
            </div>
          </div>

          {/* Venue */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <VenueIcon />
            </div>
            <div>
              <p className="font-semibold">{event.venueName}</p>
              <p className="text-sm text-jarvis-gray">{event.venueAddress}</p>
            </div>
          </div>

          <hr className="mb-6" />

          {/* Cancellation */}
          <div className="flex items-center gap-4 mb-6 p-4 bg-jarvis-bg rounded-xl">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <CalendarIcon />
            </div>
            <div>
              <p className="text-sm">
                <span className="text-jarvis-pink font-semibold">
                  Free cancellation
                </span>{" "}
                &middot; Up to 1 day before start time
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div>
          <div className="sticky top-28 border border-gray-300 rounded-xl p-6 shadow-lg">
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-sm">From</span>
              <span className="text-[22px] font-bold">
                &pound;{event.price}
              </span>
              <span className="text-jarvis-gray text-sm">/ guest</span>
            </div>
            <button className="w-full bg-jarvis-pink hover:bg-jarvis-pink-hover text-white font-semibold py-3 rounded-lg text-lg transition">
              Show dates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="16,6 12,2 8,6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="2" x2="12" y2="15" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function VenueIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
