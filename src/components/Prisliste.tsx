const treatments = [
  { name: "Fotbehandling", price: "980 kr" },
  { name: "Neglebehandling", price: "620 kr" },
  { name: "Tornbehandling", price: "620 kr" },
  { name: "Vortebehandling", price: "620 kr" },
  { name: "Neglekorrigering", price: "620 kr" },
  { name: "Avlastning", price: "fra 320 kr" },
];

export default function Prisliste() {
  return (
    <section
      id="priser"
      className="bg-white py-20 px-4"
      aria-labelledby="priser-heading"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#4EA8DE]">
            Prisliste
          </p>
          <h2
            id="priser-heading"
            className="mb-10 text-3xl font-extrabold tracking-tight text-[#1B3A6B] sm:text-4xl"
          >
            Behandlinger og priser
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#1B3A6B]/10 shadow-sm">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-[#1B3A6B] text-white">
                <th className="px-6 py-4 text-left font-semibold tracking-wide">
                  Behandling
                </th>
                <th className="px-6 py-4 text-right font-semibold tracking-wide">
                  Pris
                </th>
              </tr>
            </thead>
            <tbody>
              {treatments.map((item, i) => (
                <tr
                  key={item.name}
                  className={
                    i % 2 === 0 ? "bg-white" : "bg-[#f4f6fa]"
                  }
                >
                  <td className="px-6 py-4 text-[#1B3A6B] font-medium">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-right text-[#1B3A6B] font-semibold">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm italic text-[#1B3A6B]/60">
          Timer som ikke avbestilles 24 timer før, må betales i sin helhet.
        </p>
      </div>
    </section>
  );
}
