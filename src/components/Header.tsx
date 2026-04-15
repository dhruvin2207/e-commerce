"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = ["Shop", "On Sale", "New Arrivals", "Brands"];

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
      <path d="M3 4h2l2.2 10.4h10.7L20.3 8H7.1" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.3" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full border-b border-black/10 bg-white">
      <div className="relative bg-black px-6 py-2 text-center text-[11px] text-white sm:text-sm">
        <span>
          Sign up and get 20% off to your first order.{" "}
          <Link href="#" className="font-semibold underline underline-offset-2">
            Sign Up Now
          </Link>
        </span>
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-base leading-none text-white/90"
          aria-label="Close promotion banner"
        >
          ×
        </button>
      </div>

      <div className="mx-auto hidden h-[72px] w-full max-w-[1240px] items-center gap-8 px-6 lg:flex">
        <Link href="/" className="text-[34px] font-extrabold tracking-tight">
          SHOP.CO
        </Link>

        <nav className="flex items-center gap-7 text-[14px] text-black/75">
          {navItems.map((item) => (
            <Link key={item} href="#" className="hover:text-black">
              {item}
            </Link>
          ))}
        </nav>

        <div className="relative ml-auto w-full max-w-[560px]">
          <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
          <input
            type="text"
            placeholder="Search for products..."
            className="h-11 w-full rounded-full border border-transparent bg-[#f2f2f2] pl-10 pr-4 text-sm text-black outline-none placeholder:text-black/45 focus:border-black/20"
          />
        </div>

        <div className="flex items-center gap-3 text-black">
          <Link href="/cart" aria-label="Open cart">
            <CartIcon className="h-6 w-6" />
          </Link>
          <button type="button" aria-label="Open account">
            <UserIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="mx-auto flex h-[84px] w-full items-center justify-between px-4 lg:hidden">
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="h-7 w-7" />
          ) : (
            <MenuIcon className="h-7 w-7" />
          )}
        </button>

        <Link href="/" className="text-[46px] font-extrabold leading-none tracking-tight">
          SHOP.CO
        </Link>

        <div className="flex items-center gap-3">
          <button type="button" aria-label="Search">
            <SearchIcon className="h-8 w-8" />
          </button>
          <Link href="/cart" aria-label="Open cart">
            <CartIcon className="h-8 w-8" />
          </Link>
          <button type="button" aria-label="Open account">
            <UserIcon className="h-8 w-8" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-black/10 px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-3 text-base text-black/80">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="rounded-md px-1 py-1.5 hover:bg-black/5 hover:text-black"
                onClick={closeMobileMenu}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="relative mt-4">
            <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/45" />
            <input
              type="text"
              placeholder="Search for products..."
              className="h-11 w-full rounded-full border border-transparent bg-[#f2f2f2] pl-10 pr-4 text-sm text-black outline-none placeholder:text-black/45 focus:border-black/20"
            />
          </div>
        </div>
      )}
    </header>
  );
}
