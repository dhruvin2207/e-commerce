const brands = [
  { name: "VERSACE", className: "font-serif text-[34px] tracking-[-0.03em]" },
  { name: "ZARA", className: "font-serif text-[38px] tracking-[-0.04em]" },
  { name: "GUCCI", className: "font-serif text-[36px] tracking-[0.02em]" },
  { name: "PRADA", className: "font-serif text-[46px] tracking-[0.06em]" },
  {
    name: "Calvin Klein",
    className: "text-[40px] font-light tracking-[-0.02em]",
  },
];

export default function BrandStrip() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 py-10 lg:flex-nowrap lg:justify-between lg:gap-8 lg:py-11">
        {brands.map((brand) => (
          <p
            key={brand.name}
            className={`leading-none whitespace-nowrap ${brand.className}`}
          >
            {brand.name}
          </p>
        ))}
      </div>
    </section>
  );
}
