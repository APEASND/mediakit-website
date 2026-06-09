export default function Footer() {
  return (
    <footer className="bg-jarvis-bg border-t border-gray-200">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-sm mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-jarvis-gray">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">Safety information</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
              <li><a href="#" className="hover:underline">Report a concern</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">Community</h4>
            <ul className="space-y-3 text-sm text-jarvis-gray">
              <li><a href="#" className="hover:underline">JARVIS for Trainers</a></li>
              <li><a href="#" className="hover:underline">Refer a friend</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
              <li><a href="#" className="hover:underline">Become a host</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4">JARVIS</h4>
            <ul className="space-y-3 text-sm text-jarvis-gray">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-jarvis-gray">
          <p>&copy; 2026 JARVIS, Inc. &middot; Privacy &middot; Terms &middot; Sitemap</p>
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-jarvis-dark">English (GB)</a>
            <a href="#" className="hover:text-jarvis-dark">&pound; GBP</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
