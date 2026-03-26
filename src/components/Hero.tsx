export default function Hero() {
  return (
    <section
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 text-center"
      style={{
        background:
          "linear-gradient(160deg, #0d2147 0%, #1B3A6B 45%, #2d5f9e 75%, #4EA8DE 100%)",
      }}
      aria-label="Hero"
    >
      {/* Subtle decorative SVG mountains */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,200 L0,100 L200,40 L400,120 L600,20 L800,100 L1000,30 L1200,110 L1440,50 L1440,200 Z"
        />
      </svg>

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4EA8DE]">
          Stavanger
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-widest text-white sm:text-5xl md:text-6xl">
          NORDISK KVALITET
          <br />
          <span className="text-[#4EA8DE]">FOR DINE FØTTER</span>
        </h1>
        <p className="mb-10 text-lg font-light text-white/80 sm:text-xl">
          Autorisert fotterapeut – profesjonell og skånsom behandling tilpasset
          dine behov.
        </p>
        <a
          href="tel:97422814"
          className="inline-block rounded-full bg-[#4EA8DE] px-8 py-3 text-base font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#3b93c9] focus:outline-none focus:ring-4 focus:ring-[#4EA8DE]/50"
        >
          Book time
        </a>
      </div>
    </section>
  );
}
