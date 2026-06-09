"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Classes", href: "/", icon: ClassesIcon },
  { label: "Experiences", href: "/experiences", icon: ExperiencesIcon, isNew: true },
  { label: "Studios", href: "/#studios", icon: StudiosIcon, isNew: true },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <JarvisLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.replace("/#", "/"));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative flex flex-col items-center px-6 py-2 text-base transition-colors ${
                    isActive
                      ? "text-jarvis-dark border-b-2 border-jarvis-dark"
                      : "text-jarvis-gray hover:text-jarvis-dark"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon />
                    <span className="font-medium">{item.label}</span>
                    {item.isNew && (
                      <span className="absolute -top-1 right-2 bg-jarvis-pink text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                        NEW
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden lg:block text-sm font-medium text-jarvis-dark hover:bg-gray-100 rounded-full px-4 py-2 transition"
            >
              Become a host
            </Link>
            <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
              <GlobeIcon />
            </button>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full pl-3 pr-1.5 py-1.5 hover:shadow-md transition">
              <MenuIcon />
              <div className="w-8 h-8 bg-jarvis-gray rounded-full flex items-center justify-center">
                <UserIcon />
              </div>
            </button>
          </div>
        </div>

        <SearchBar />
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <div className="flex justify-center pb-4 -mt-1">
      <div className="flex items-center w-full max-w-[850px] bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition">
        <button className="flex-1 flex flex-col items-start px-6 py-3 rounded-l-full hover:bg-gray-100 transition">
          <span className="text-xs font-bold text-jarvis-dark">Where</span>
          <span className="text-sm text-jarvis-gray">Search events</span>
        </button>
        <div className="w-px h-8 bg-gray-300" />
        <button className="flex-1 flex flex-col items-start px-6 py-3 hover:bg-gray-100 transition">
          <span className="text-xs font-bold text-jarvis-dark">When</span>
          <span className="text-sm text-jarvis-gray">Add dates</span>
        </button>
        <div className="w-px h-8 bg-gray-300" />
        <button className="flex-1 flex flex-col items-start px-6 py-3 hover:bg-gray-100 transition">
          <span className="text-xs font-bold text-jarvis-dark">Who</span>
          <span className="text-sm text-jarvis-gray">Add guests</span>
        </button>
        <div className="w-px h-8 bg-gray-300" />
        <button className="flex-1 flex flex-col items-start px-6 py-3 hover:bg-gray-100 transition">
          <span className="text-xs font-bold text-jarvis-dark">How Much</span>
          <span className="text-sm text-jarvis-gray">What&apos;s the cost</span>
        </button>
        <button className="flex items-center justify-center w-12 h-12 bg-jarvis-pink hover:bg-jarvis-pink-hover rounded-full mr-2 transition">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

function JarvisLogo() {
  return (
    <svg width="120" height="34" viewBox="0 0 120 34" fill="none">
      <circle cx="17" cy="17" r="14" fill="#FF385C" />
      <path
        d="M10 17.5C10 14 12.5 11 17 11C21.5 11 24 14 24 17.5C24 21 21.5 24 17 24"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="17" cy="17" r="3" fill="white" />
      <text x="38" y="24" fontFamily="inherit" fontWeight="700" fontSize="22" fill="#FF385C">
        jarvis
      </text>
    </svg>
  );
}

function ClassesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12h4l3-9 4 18 3-9h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExperiencesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v9l6 3" strokeLinecap="round" />
    </svg>
  );
}

function StudiosIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <circle cx="12" cy="16" r="2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="M15.5 15.5L21 21" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}
