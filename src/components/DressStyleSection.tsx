import Image from "next/image";
import Link from "next/link";

type StyleCard = {
  title: string;
  href: string;
  image: string;
  imagePosition: string;
  desktopSpan: string;
};

const styleCards: StyleCard[] = [
  {
    title: "Casual",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "object-[center_30%]",
    desktopSpan: "lg:col-span-2",
  },
  {
    title: "Formal",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "object-[center_25%]",
    desktopSpan: "lg:col-span-3",
  },
  {
    title: "Party",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "object-[center_38%]",
    desktopSpan: "lg:col-span-3",
  },
  {
    title: "Gym",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "object-[center_25%]",
    desktopSpan: "lg:col-span-2",
  },
];

export default function DressStyleSection() {
  return (
    <section className="px-3 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-[1240px] rounded-[28px] bg-[#f0f0f0] px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-16">
        <h2 className="text-center text-[42px] leading-[0.95] font-extrabold tracking-[-0.03em] sm:text-[52px]">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-5">
          {styleCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`relative block h-[190px] overflow-hidden rounded-[22px] bg-white sm:h-[210px] lg:h-[290px] ${card.desktopSpan}`}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className={`object-cover ${card.imagePosition}`}
              />
              <div className="absolute inset-0 bg-white/20" />
              <p className="absolute left-6 top-5 text-[38px] leading-none font-bold tracking-[-0.03em] text-black">
                {card.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
