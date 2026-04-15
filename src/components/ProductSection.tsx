import Image from "next/image";
import Link from "next/link";
import type { FakeStoreProduct } from "@/lib/fakestore";

type ProductSectionProps = {
  title: string;
  products: FakeStoreProduct[];
  showDivider?: boolean;
};

function formatPrice(value: number) {
  return `$${Math.round(value)}`;
}

function ProductCard({
  product,
  highlightDiscount,
}: {
  product: FakeStoreProduct;
  highlightDiscount: boolean;
}) {
  const cappedTitle =
    product.title.length > 28 ? `${product.title.slice(0, 28)}...` : product.title;
  const rating = Math.round(product.rating.rate);
  const stars = "★".repeat(Math.max(rating, 1));
  const oldPrice = highlightDiscount ? Math.round(product.price * 1.2) : null;
  const discount = oldPrice ? `-${Math.round(((oldPrice - product.price) / oldPrice) * 100)}%` : null;

  return (
    <article>
      <div className="relative mb-2.5 flex h-[170px] items-center justify-center overflow-hidden rounded-[18px] bg-[#f2f0f1] p-4 sm:mb-3 sm:h-[250px] sm:rounded-[20px] sm:p-6">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 45vw, 22vw"
          className="object-contain p-4 sm:p-6"
        />
      </div>

      <h3 className="text-[22px] leading-tight font-semibold sm:text-[20px]">
        {cappedTitle}
      </h3>

      <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
        <span className="text-xs tracking-[0.08em] text-[#f5b000] sm:text-[15px]">
          {stars}
        </span>
        <span className="text-[11px] text-black/60 sm:text-sm">
          {product.rating.rate}/5
        </span>
      </div>

      <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
        <span className="text-[32px] leading-none font-bold sm:text-[32px]">
          {formatPrice(product.price)}
        </span>
        {oldPrice && (
          <span className="text-[32px] text-black/35 line-through sm:text-2xl">
            {formatPrice(oldPrice)}
          </span>
        )}
        {discount && (
          <span className="rounded-full bg-[#ffebeb] px-2 py-0.5 text-[10px] font-medium text-[#ff3333] sm:px-3 sm:py-1 sm:text-xs">
            {discount}
          </span>
        )}
      </div>
    </article>
  );
}

export default function ProductSection({
  title,
  products,
  showDivider = false,
}: ProductSectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-[1240px] px-3 py-10 sm:px-6 sm:py-14 ${showDivider ? "border-t border-black/10" : ""}`}
    >
      <h2 className="text-center text-[42px] font-extrabold tracking-[-0.03em] sm:text-[52px]">
        {title}
      </h2>

      <div className="mt-6 sm:mt-10">
        <div className="no-scrollbar -mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-[78%] flex-none snap-start sm:w-auto sm:flex-initial"
            >
              <ProductCard product={product} highlightDiscount={index % 2 === 1} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="#"
          className="inline-flex h-12 w-full items-center justify-center rounded-full border border-black/15 px-8 text-base hover:bg-black/5 sm:min-w-44 sm:w-auto"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
