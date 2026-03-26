import Image from "next/image";

export default function Produkter() {
  return (
    <section
      className="bg-[#f4f6fa] py-20 px-4"
      aria-labelledby="produkter-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#4EA8DE]">
              Produkter
            </p>
            <h2
              id="produkter-heading"
              className="mb-6 text-3xl font-extrabold tracking-tight text-[#1B3A6B] sm:text-4xl"
            >
              Kvalitetsprodukter
            </h2>
            <p className="text-base leading-relaxed text-[#1B3A6B]/80 sm:text-lg">
              Under behandlingen brukes nøye utvalgte fotprodukter av høy
              kvalitet som pleier, beskytter og forbedrer hud og negler. Hos
              Nordic Feet legges det vekt på trygge produkter med gode
              ingredienser og dokumentert effekt, tilpasset ulike behov. Målet
              er å gi en skånsom og helhetlig behandling du kan stole på. Gehwol
              er et anerkjent merke innen fotpleie, kjent for produkter som
              pleier og beskytter føtter på en skånsom måte.
            </p>
          </div>

          {/* Gehwol logo */}
          <div className="flex flex-shrink-0 items-center justify-center rounded-2xl bg-white p-8 shadow-sm md:w-64">
            <Image
              src="/gehwol-log.jpg"
              alt="Gehwol – fotpleieprodukt"
              width={180}
              height={90}
              sizes="(max-width: 768px) 160px, 180px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
