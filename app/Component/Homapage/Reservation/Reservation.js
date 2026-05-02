import { Fraunces, Urbanist } from "next/font/google";

// Initialize Fonts
const fraunces = Fraunces({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Reservation() {
  return (
    // Parallax Background Section
    <section id="reservation"
      className="relative w-full py-24 md:py-32 flex justify-center px-6 md:px-12 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: 'url(/assets/book-table-bg.jpg.webp)' }} // Or .jpg depending on your exact file name
    >
      {/* Dark overlay to make the form readable over the background image */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Main Form Container */}
      <div
        className="relative z-10 w-full max-w-[900px] bg-[#18312E] p-8 md:p-14 lg:p-20 shadow-2xl"
        style={{
          backgroundImage: 'url(/assets/pattern-black.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px'
        }}
      >
        {/* Inner Gold Border (using absolute positioning to sit exactly inside the padding) */}
        <div className="absolute inset-[15px] md:inset-[20px] border border-[#E6B15F]/40 pointer-events-none"></div>

        {/* --- Header Content --- */}
        <div className="relative z-20 flex flex-col items-center text-center w-full mb-12">
          <span className={`${urbanist.className} text-[#E6B15F] text-[12px] md:text-[14px] font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2`}>
            ✦ ONLINE RESERVATION ✦
          </span>

          <h2 className={`${fraunces.className} text-[45px] md:text-[60px] leading-[1.1] text-white mb-6`}>
            Book A Table
          </h2>

          <p className={`${urbanist.className} text-white/80 text-[15px] md:text-[17px]`}>
            Booking request <span className="text-[#E6B15F]">+1-800-852-9001</span> or fill out the order form
          </p>
        </div>

        {/* --- The Form --- */}
        <form className="relative z-20 w-full flex flex-col gap-6">

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className={`${urbanist.className} w-full bg-[#1d3c38]/80 border border-white/10 text-white placeholder-white/60 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors`}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className={`${urbanist.className} w-full bg-[#1d3c38]/80 border border-white/10 text-white placeholder-white/60 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors`}
              required
            />
          </div>

          {/* Row 2: Email & Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email"
              className={`${urbanist.className} w-full bg-[#1d3c38]/80 border border-white/10 text-white placeholder-white/60 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors`}
              required
            />
            {/* Custom Dropdown Wrapper for Guests */}
            <div className="relative">
              <select
                className={`${urbanist.className} w-full bg-[#1d3c38]/80 border border-white/10 text-white/60 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors appearance-none cursor-pointer`}
                defaultValue=""
              >
                <option value="" disabled>Number of Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
              </select>
              {/* Custom Arrow Icon */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Row 3: Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Standard HTML Date Input */}
            <input
              type="date"
              className={`${urbanist.className} w-full bg-[#1d3c38]/80 border border-white/10 text-white/60 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors cursor-pointer [&::-webkit-calendar-picker-indicator]:filter[&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-60`}
              required
            />
            {/* Custom Dropdown Wrapper for Time */}
            <div className="relative">
              <select
                className={`${urbanist.className} w-full bg-[#1d3c38]/80 border border-white/10 text-white/60 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors appearance-none cursor-pointer`}
                defaultValue=""
              >
                <option value="" disabled>Time</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
              {/* Custom Arrow Icon */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Row 4: Message Textarea */}
          <textarea
            placeholder="Message"
            rows="4"
            className={`${urbanist.className} w-full bg-[#1d3c38]/80 border border-white/10 text-white placeholder-white/60 px-6 py-4 outline-none focus:border-[#E6B15F] transition-colors resize-none`}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className={`${urbanist.className} w-full bg-[#E6B15F] text-[#111] font-bold tracking-[0.15em] uppercase text-[14px] py-5 mt-2 hover:bg-white transition-colors duration-300`}
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}