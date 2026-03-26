import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A6B] py-10 px-4 text-center text-white">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-4">
        <Image
          src="/nordic-feet-logo.png"
          alt="Nordic Feet Fotklinikk"
          width={64}
          height={64}
          className="h-16 w-16 object-contain opacity-90"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4EA8DE]">
          NORDISK KVALITET FOR DINE FØTTER
        </p>
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Nordic Feet Fotklinikk. Alle rettigheter
          forbeholdt.
        </p>
      </div>
    </footer>
  );
}
