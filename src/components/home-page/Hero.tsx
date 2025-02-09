"use client";

import Button from "../ui/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroHighlightedProductsCard from "./HeroHighlightedProductsCard";

export default function Hero() {
  return (
    <section className="relative w-full md:px-12">
      {/* Background divs */}
      <div className="absolute inset-0 hidden md:flex">
        <div className="w-1/2 bg-secondary"></div>
        <div className="w-1/2 bg-tertiary"></div>
      </div>

      <div className="relative flex w-full flex-col-reverse md:container md:mx-auto md:flex-row">
        {/* Left Section */}
        <div className="flex w-full flex-col justify-center bg-secondary px-6 py-12 text-left sm:py-16 md:w-1/2 md:bg-none md:px-0">
          <div className="mt-10 max-w-xl md:mt-20">
            <h1 className="text-3xl font-bold leading-tight text-neutral sm:text-4xl lg:text-4xl">
              Radiant Glow Collection: Reveal Your Skin’s Natural Shine and Timeless Beauty
            </h1>
            <p className="sm:text-md mt-8 text-sm text-gray-400">
              Experience our range of skincare treasures designed to brighten your skin. Whether it’s a
              cream, mask, or serum, every product is light, easy to use, and made with nature’s very
              best ingredients.
            </p>

            <div className="mt-8">
              <Button
                href="/products"
                size="md"
                color="primary"
                customClasses="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                text-primary-content transition-all duration-300 ease-out focus:ring-primary focus:ring-offset-2 active:scale-95"
              >
                <span>Shop Now</span>
                <div className="w-4">
                  <IoIosArrowRoundForward />
                </div>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:justify-between md:gap-4">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="space-y-2 text-center">
                    <p className="text-lg font-bold text-neutral md:text-xl">Over 50,000</p>
                    <p className="text-xs text-tertiary-content">Satisfied Customers</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-full items-center bg-tertiary pt-12 sm:pt-16 md:w-1/2 md:bg-none">
          <div className="relative h-full w-full">
            <div className="flex w-full justify-center md:absolute md:bottom-0 md:left-[-20px] md:justify-start">
              <img
                src="/images/hero-img.png"
                alt="Product"
                className="h-[600px] object-cover md:h-[500px]"
              />
            </div>
            <div className="hero-card-wrapper absolute -bottom-16 left-0 right-0 px-8 md:-bottom-12 md:left-auto md:right-8 md:px-0">
              <HeroHighlightedProductsCard />
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-card-wrapper {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </section>
  );
}
