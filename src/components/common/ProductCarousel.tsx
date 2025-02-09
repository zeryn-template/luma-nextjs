"use client";

import { useState, useEffect, useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import ProductCard from "./ProductCard";

interface Product {
  title: string;
  price: string;
  imageUrl: string;
  url: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [totalViews, setTotalViews] = useState(Math.ceil(products.length / 3));
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Update the number of visible cards based on screen width
  const updateCardsPerView = () => {
    let newCardsPerView = 3;

    if (window.innerWidth < 768) {
      newCardsPerView = 1;
    } else if (window.innerWidth < 1024) {
      newCardsPerView = 2;
    }

    setCardsPerView(newCardsPerView);
    setTotalViews(Math.ceil(products.length / newCardsPerView));

    if (currentIndex >= totalViews) {
      setCurrentIndex(totalViews - 1);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, [currentIndex, totalViews]);

  // Scroll to the next set of products
  const next = () => {
    if (currentIndex < totalViews - 1 && containerRef.current) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      const cardWidth =
        containerRef.current.querySelector(".product-card-wrapper")
          ?.clientWidth || 0;
      const gap = 24; // 6 * 4 (gap-6 = 1.5rem = 24px)
      containerRef.current.scrollTo({
        left: (cardWidth + gap) * ((currentIndex + 1) * cardsPerView),
        behavior: "smooth",
      });
    }
  };

  // Scroll to the previous set of products
  const prev = () => {
    if (currentIndex > 0 && containerRef.current) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      const cardWidth =
        containerRef.current.querySelector(".product-card-wrapper")
          ?.clientWidth || 0;
      const gap = 24; // 6 * 4 (gap-6 = 1.5rem = 24px)
      containerRef.current.scrollTo({
        left: (cardWidth + gap) * ((currentIndex - 1) * cardsPerView),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scrollable Product Container */}
      <div className="scrollbar-hide overflow-x-auto" ref={containerRef}>
        <div className="flex gap-6">
          {products.map((product, index) => (
            <div key={index} className="product-card-wrapper flex-none">
              <ProductCard {...product} variant={true} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        {/* Progress Indicators */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: totalViews }, (_, i) => (
            <div
              key={i}
              className={`h-1 w-8 rounded-full transition-colors duration-200 ${
                i === currentIndex ? "bg-primary" : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <MdArrowBack className="w-4" />
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white disabled:opacity-50"
            disabled={currentIndex === totalViews - 1}
          >
            <MdArrowForward className="w-4" />
          </button>
        </div>
      </div>

      {/* Hides scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
