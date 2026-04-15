"use client";

import { useRef } from "react";
import Slider, { type Settings } from "react-slick";

type Testimonial = {
  name: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Moody A.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, this store consistently surprises me with premium quality and great service.",
  },
  {
    name: "Nora C.",
    review:
      "Excellent quality, quick delivery, and stylish fits. This has become my go-to place for modern essentials and statement pieces.",
  },
];

function StarRow() {
  return <p className="text-lg tracking-[0.2em] text-[#f5b000]">★★★★★</p>;
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "left" ? <path d="M15 6 9 12l6 6" /> : <path d="m9 6 6 6-6 6" />}
    </svg>
  );
}

export default function HappyCustomersSection() {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "120px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "60px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "16px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[1240px] px-3 sm:px-6">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-[42px] leading-none font-extrabold tracking-[-0.03em] sm:text-[52px]">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous testimonials"
              className="rounded-full p-2 text-black/80 hover:bg-black/5"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next testimonials"
              className="rounded-full p-2 text-black/80 hover:bg-black/5"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings} className="happy-customers-slider">
          {testimonials.map((item) => (
            <div key={item.name} className="px-2 sm:px-3">
              <article className="h-full min-h-[240px] rounded-[20px] border border-black/10 bg-white p-6">
                <StarRow />
                <div className="mt-3 flex items-center gap-1.5">
                  <p className="text-[28px] leading-none font-bold tracking-[-0.02em]">
                    {item.name}
                  </p>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#01ab31] text-white">
                    <CheckIcon />
                  </span>
                </div>
                <p className="mt-4 text-lg leading-8 text-black/65">&quot;{item.review}&quot;</p>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
