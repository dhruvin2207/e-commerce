export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/lib/fakestore";

type CartItem = {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
};

const fallbackCartItems: CartItem[] = [
  {
    id: 101,
    name: "Classic White T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
    image: "/next.svg",
  },
  {
    id: 102,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
    image: "/next.svg",
  },
  {
    id: 103,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
    image: "/next.svg",
  },
];

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 7h16" />
      <path d="M9 7V5h6v2" />
      <path d="M8 7l1 12h6l1-12" />
      <path d="M10 11v5M14 11v5" />
    </svg>
  );
}

function MinusIcon() {
  return <span className="text-xl leading-none">−</span>;
}

function PlusIcon() {
  return <span className="text-xl leading-none">+</span>;
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="m3 12 9-9h9v9l-9 9L3 12z" />
      <circle cx="17" cy="7" r="1.4" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default async function CartPage() {
  const products = await getAllProducts();
  const cartItems: CartItem[] =
    products.length >= 3
      ? products.slice(0, 3).map((product, index) => ({
          id: product.id,
          name: product.title,
          size: ["Large", "Medium", "Large"][index],
          color: ["White", "Red", "Blue"][index],
          price: Math.round(product.price),
          quantity: 1,
          image: product.image || "/next.svg",
        }))
      : fallbackCartItems;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.2);
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-[#f2f0f1] font-sans">
      <Header />

      <main className="mx-auto w-full 2xl:max-w-7xl px-3 py-5 sm:px-6 sm:py-8">
        <nav className="mb-3 flex items-center gap-2 text-sm text-black/45">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-black/70">Cart</span>
        </nav>

        <h1 className="text-[44px] leading-none font-extrabold tracking-[-0.03em] sm:text-[52px]">
          YOUR CART
        </h1>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.5fr_0.9fr] lg:gap-5">
          <section className="rounded-[20px] border border-black/10 bg-white p-3 sm:p-4">
            {cartItems.map((item, index) => (
              <article
                key={item.id}
                className={`grid grid-cols-[92px_1fr] gap-3 py-3 sm:grid-cols-[124px_1fr] sm:gap-4 ${index !== 0 ? "border-t border-black/10" : ""}`}
              >
                <div className="relative h-[92px] rounded-xl bg-[#f2f0f1] sm:h-[124px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 92px, 124px"
                    className="object-contain p-2 sm:p-3"
                  />
                </div>

                <div className="flex min-w-0 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="line-clamp-1 text-lg leading-tight font-bold sm:text-[26px]">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-xs text-black/55 sm:text-sm">
                        Size: <span className="text-black/75">{item.size}</span>
                      </p>
                      <p className="text-xs text-black/55 sm:text-sm">
                        Color: <span className="text-black/75">{item.color}</span>
                      </p>
                    </div>
                    <button type="button" aria-label={`Remove ${item.name}`} className="text-[#ff3333]">
                      <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3">
                    <p className="text-[34px] leading-none font-bold sm:text-[38px]">${item.price}</p>
                    <div className="flex h-10 items-center gap-5 rounded-full bg-[#f0f0f0] px-4 sm:h-11">
                      <button type="button" aria-label="Decrease quantity" className="text-black/75">
                        <MinusIcon />
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button type="button" aria-label="Increase quantity" className="text-black/75">
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="rounded-[20px] border border-black/10 bg-white p-4 sm:p-5">
            <h2 className="text-[30px] leading-none font-bold">Order Summary</h2>
            <div className="mt-5 space-y-3 border-b border-black/10 pb-4">
              <div className="flex items-center justify-between text-black/60">
                <span>Subtotal</span>
                <span className="text-2xl font-semibold text-black">${subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-black/60">
                <span>Discount (-20%)</span>
                <span className="text-2xl font-semibold text-[#ff3333]">-${discount}</span>
              </div>
              <div className="flex items-center justify-between text-black/60">
                <span>Delivery Fee</span>
                <span className="text-2xl font-semibold text-black">${deliveryFee}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg text-black/70">Total</span>
              <span className="text-[38px] leading-none font-bold">${total}</span>
            </div>

            <div className="mt-4 flex gap-2">
              <label className="flex h-12 flex-1 items-center gap-2 rounded-full bg-[#f0f0f0] px-4 text-black/45">
                <TagIcon className="h-4 w-4" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-transparent text-sm text-black outline-none placeholder:text-black/45"
                />
              </label>
              <button
                type="button"
                className="h-12 rounded-full bg-black px-6 text-sm font-medium text-white"
              >
                Apply
              </button>
            </div>

            <button
              type="button"
              className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-sm font-medium text-white"
            >
              Go to Checkout
              <ArrowRightIcon />
            </button>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
