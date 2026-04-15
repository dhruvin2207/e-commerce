import Link from "next/link";

const footerColumns = [
  {
    title: "COMPANY",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "HELP",
    links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payment"],
  },
  {
    title: "RESOURCES",
    links: ["Free eBook", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
  },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 text-black/40">
      <path d="M4 7h16v10H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 bg-white text-xs font-semibold text-black">
      {label}
    </span>
  );
}

function PaymentBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex h-7 items-center rounded-md bg-white px-2 text-xs font-medium text-black/80 shadow-sm">
      {name}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#f0f0f0] pt-0">
      <div className="mx-auto w-full max-w-[1240px] px-3 sm:px-6">
        <div className="relative -top-8 rounded-[20px] bg-black px-4 py-7 text-white sm:-top-10 sm:px-9 sm:py-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="max-w-[560px] text-[44px] leading-[0.9] font-extrabold tracking-[-0.03em] sm:text-[48px] lg:text-[52px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h3>
            <div className="w-full max-w-[360px] space-y-3">
              <label className="flex h-12 items-center gap-2 rounded-full bg-white px-4 text-sm text-black/45">
                <MailIcon />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-black outline-none placeholder:text-black/40"
                />
              </label>
              <button
                type="button"
                className="h-12 w-full rounded-full bg-white text-sm font-medium text-black"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="-mt-2 grid grid-cols-1 gap-8 pb-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="text-[46px] leading-none font-extrabold tracking-tight text-black">
              SHOP.CO
            </p>
            <p className="mt-4 max-w-[280px] text-sm leading-6 text-black/50">
              We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon label="t" />
              <SocialIcon label="f" />
              <SocialIcon label="ig" />
              <SocialIcon label="gh" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-7 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm tracking-[0.2em] text-black">{column.title}</h4>
                <ul className="mt-4 space-y-3 text-[15px] text-black/50">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-black">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 py-6 text-sm text-black/45 md:flex-row">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <PaymentBadge name="VISA" />
            <PaymentBadge name="Mastercard" />
            <PaymentBadge name="PayPal" />
            <PaymentBadge name="Apple Pay" />
            <PaymentBadge name="G Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
}
