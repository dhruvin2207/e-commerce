import Image from "next/image";
import Link from "next/link";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0l2.8 9.2L24 12l-9.2 2.8L12 24l-2.8-9.2L0 12l9.2-2.8L12 0z" />
    </svg>
  );
}

const stats = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f2f0f1]">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 lg:grid-cols-2">
        <div className="px-3 pb-8 pt-10 sm:px-6 lg:px-6 lg:pb-12 lg:pt-16">
          <h1 className="hidden max-w-[590px] text-[64px] leading-[0.94] font-extrabold tracking-[-0.03em] lg:block">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>

          <h1 className="max-w-[330px] text-[44px] leading-[0.95] font-extrabold tracking-[-0.03em] lg:hidden">
            <span className="relative inline-block after:absolute after:bottom-[0.10em] after:left-0 after:h-[0.12em] after:w-full after:bg-[#4ea5ff] after:content-['']">
              FIND CLOTHES
            </span>
            <br />
            <span className="relative inline-block after:absolute after:bottom-[0.10em] after:left-0 after:h-[0.12em] after:w-full after:bg-[#4ea5ff] after:content-['']">
              THAT MATCHES
            </span>
            <br />
            <span className="relative inline-block after:absolute after:bottom-[0.10em] after:left-0 after:h-[0.12em] after:w-full after:bg-[#4ea5ff] after:content-['']">
              YOUR STYLE
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-sm leading-6 text-black/55 lg:text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link
            href="#"
            className="mt-6 flex h-12 w-full max-w-[355px] items-center justify-center rounded-full bg-black text-base text-white transition hover:bg-black/90"
          >
            Shop Now
          </Link>

          <div className="mt-7 hidden max-w-[560px] grid-cols-3 gap-7 lg:grid">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={index !== 2 ? "border-r border-black/12 pr-7" : ""}
              >
                <p className="text-[40px] leading-none font-bold tracking-[-0.02em]">
                  {stat.value}
                </p>
                <p className="mt-2 text-base text-black/55">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-y-4 lg:hidden">
            <div className="border-r border-black/12">
              <p className="text-[40px] leading-none font-bold tracking-[-0.02em]">
                200+
              </p>
              <p className="text-sm text-black/55">International Brands</p>
            </div>
            <div className="pl-5">
              <p className="text-[40px] leading-none font-bold tracking-[-0.02em]">
                2,000+
              </p>
              <p className="text-sm text-black/55">High-Quality Products</p>
            </div>
            <div className="col-span-2 text-center">
              <p className="text-[40px] leading-none font-bold tracking-[-0.02em]">
                30,000+
              </p>
              <p className="text-sm text-black/55">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[470px] lg:min-h-[620px]">
          <Sparkle className="absolute right-[11%] top-[14%] z-10 hidden h-16 w-16 lg:block" />
          <Sparkle className="absolute left-[6%] top-[51%] z-10 hidden h-8 w-8 lg:block" />
          <Sparkle className="absolute right-[8%] top-[20%] z-10 h-12 w-12 lg:hidden" />
          <Sparkle className="absolute left-[7%] top-[38%] z-10 h-8 w-8 lg:hidden" />

          <div className="absolute inset-0 hidden lg:block">
            <Image
              src="/hero.png"
              alt="Fashion models in hero banner"
              priority
              width={1000}
              height={1000}
              className="object-cover object-right"
            />
          </div>

          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/hero.png"
              alt="Fashion models in hero banner"
              width={1000}
              height={1000}
              priority
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
