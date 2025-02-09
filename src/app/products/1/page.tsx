"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Button from "@/components/ui/Button";
import { FaCartPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

const productVariants = {
  1: {
    image: "/images/products/product9.png",
    title: "Radiance Glow Serum",
    description:
      "Elevate your skincare routine with the Radiance Glow Serum, a powerful blend of Vitamin C and hyaluronic acid. This lightweight formula hydrates deeply, brightens dull skin, and reduces dark spots, leaving you with a luminous and youthful glow.",
    price: 13.99,
  },
  2: {
    image: "/images/products/product8.png",
    title: "HydraBoost Moisturizer",
    description:
      "Experience 24-hour hydration with our HydraBoost Moisturizer. Infused with aloe vera and ceramides, this fast-absorbing cream replenishes moisture, strengthens the skin barrier, and leaves your skin feeling soft, plump, and refreshed all day long.",
    price: 14.99,
  },
  3: {
    image: "/images/products/product10.png",
    title: "Rejuvenating Night Cream",
    description:
      "Wake up to revitalized skin with our Rejuvenating Night Cream. Enriched with retinol and botanical extracts, this rich yet non-greasy formula works overnight to smooth fine lines, boost collagen production, and restore skin’s natural elasticity.",
    price: 15.99,
  },
};

export default function SingleProductPage() {
  const [activeVariant, setActiveVariant] = useState(productVariants[1]);
  const [qty, setQty] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fadeTrigger, setFadeTrigger] = useState(false);

  function triggerFade() {
    setFadeTrigger(true);
    setTimeout(() => setFadeTrigger(false), 500);
  }

  useEffect(() => {
    triggerFade();
  }, [activeVariant]);

  return (
    <>
      <Head>
        <title>LUMA. | Product</title>
        <meta
          name="description"
          content="LUMA. is a sleek, modern, and fully responsive e-commerce template for beauty and cosmetic brands. Built with React and Tailwind CSS, it offers a seamless shopping experience with a beautiful, intuitive layout and essential e-commerce features."
        />
        <meta
          name="keywords"
          content="beauty products, cosmetics, e-commerce template, React template, Tailwind CSS, responsive design, online store, skincare, makeup, beauty website"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Meta Tags */}
        <meta
          property="og:title"
          content="LUMA. - Modern E-Commerce Template"
        />
        <meta
          property="og:description"
          content="Discover LUMA., a fully responsive e-commerce website template built with React and Tailwind CSS. Designed for beauty and cosmetic brands, it features a modern layout, seamless navigation, and a customizable shopping experience."
        />
        <meta property="og:image" content="/images/metadata-img.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LUMA. - Modern E-Commerce Template"
        />
        <meta
          name="twitter:description"
          content="A beautifully designed e-commerce template for beauty brands, built with React and Tailwind CSS. Responsive, customizable, and feature-packed."
        />
        <meta name="twitter:image" content="/images/metadata-img.png" />
      </Head>
      <Navbar />
      <section className="relative min-h-screen w-full">
        {/* Background divs */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-secondary"></div>
          <div className="w-1/2 bg-tertiary"></div>
        </div>

        {/* Content container */}
        <div className="relative min-h-screen px-4 py-8 md:px-12">
          <div className="container mx-auto flex h-full min-h-screen items-center justify-center">
            <div className="mt-10 grid min-w-full max-w-7xl grid-cols-1 gap-12 md:mt-0 md:grid-cols-3 md:gap-12">
              {/* PRODUCT IMAGE, PRICE AND QTY */}
              <div className="order-1 md:order-2 md:col-span-1">
                <div className="flex flex-col items-center justify-center gap-4">
                  <AnimatePresence mode="wait">
                    <div className="relative w-72 md:w-96 h-96 flex items-center justify-center">
                      <motion.img
                        key={activeVariant.image}
                        src={activeVariant.image}
                        alt=""
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute w-full h-full object-contain"
                      />
                    </div>
                  </AnimatePresence>

                  <div className="flex flex-row items-center justify-center gap-8">
                    <button
                      onClick={() => setQty((prev) => Math.max(0, prev - 1))}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-primary font-bold text-primary"
                    >
                      -
                    </button>
                    <span className="text-xl font-bold">{qty}</span>
                    <button
                      onClick={() => setQty((prev) => prev + 1)}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-primary font-bold text-primary"
                    >
                      +
                    </button>
                  </div>
                  <span className="mt-4 text-3xl font-extrabold">
                    ${activeVariant.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* PRODUCT VARIANTS, CHECKOUT BUTTON, ADD TO CART BUTTON */}
              <div className="order-2 flex flex-col items-center gap-6 md:order-3 md:col-span-1 md:items-end md:justify-between">
                <div className="grid grid-cols-3 place-items-center gap-4">
                  {Object.keys(productVariants).map((key) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    const variant = productVariants[key];
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveVariant(variant)}
                        className={`h-20 w-20 cursor-pointer overflow-hidden rounded-3xl border-[2px] md:h-28 md:w-28 ${
                          activeVariant === variant
                            ? "border-primary"
                            : "border-secondary"
                        } bg-white hover:border-primary`}
                      >
                        <img
                          src={variant.image}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white font-bold text-neutral"
                  >
                    <FaCartPlus className="w-4" />
                  </button>
                  <Button
                    href="/checkout"
                    size="md"
                    color="primary"
                    customClasses="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-content transition-all duration-300 ease-out focus:ring-primary focus:ring-offset-2 active:scale-95"
                  >
                    <span>Proceed to Checkout</span>
                  </Button>
                </div>
              </div>

              {/* PRODUCT DESCRIPTION */}
              <div className="order-3 flex flex-col gap-6 text-center md:order-1 md:col-span-1 md:text-left">
                <h1 className="text-3xl font-bold md:text-4xl">
                  {activeVariant.title}
                </h1>
                <p>250ml</p>
                <p className="text-sm md:text-base">
                  {activeVariant.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
