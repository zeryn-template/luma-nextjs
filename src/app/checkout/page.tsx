"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Head from "next/head";

interface Product {
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const products: Product[] = [
    {
      name: "Luxury Face Cream",
      price: 129.99,
      quantity: 1,
      image: "/images/products/product9.png",
      description: "Anti-aging formula with 24K gold",
    },
    {
      name: "Anti-Aging Serum",
      price: 89.99,
      quantity: 2,
      image: "/images/products/product10.png",
      description: "Advanced peptide complex",
    },
  ];

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1000);
  }

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shipping = 9.99;
  const total = subtotal + shipping;
  return (
    <>
      <Head>
        <title>LUMA. | Checkout</title>
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
      <div className="mt-20 min-h-screen bg-[url('/images/checkout-bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Checkout Steps */}
            <div className="space-y-6 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-effect rounded-2xl border border-white/20 p-6 shadow-xl sm:p-8"
              >
                {/* Step Indicator */}
                <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <h2 className="text-2xl font-bold text-neutral sm:text-3xl">
                    Checkout
                  </h2>
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex items-center">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                            currentStep > i
                              ? "bg-primary text-primary-content shadow-lg shadow-primary/30"
                              : "bg-base-200"
                          }`}
                        >
                          {i + 1}
                        </div>
                        {i < 2 && (
                          <div
                            className={`h-1 w-8 transition-all duration-300 ${
                              currentStep > i
                                ? "bg-primary shadow-lg shadow-primary/30"
                                : "bg-base-200"
                            }`}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Content */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold">
                      Shipping Information
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <input
                        placeholder="First Name"
                        className="block w-full rounded-full border border-base-200 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <input
                        placeholder="Last Name"
                        className="block w-full rounded-full border border-base-200 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <input
                        placeholder="Email"
                        type="email"
                        className="block w-full rounded-full border border-base-200 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:col-span-2"
                      />
                      <input
                        placeholder="Address"
                        className="block w-full rounded-full border border-base-200 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:col-span-2"
                      />
                      <input
                        placeholder="City"
                        className="block w-full rounded-full border border-base-200 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <input
                        placeholder="Postal Code"
                        className="block w-full rounded-full border border-base-200 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold">Payment Details</h3>
                    <input
                      placeholder="Card Number"
                      className="block w-full rounded-full border border-base-200 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <div className="grid gap-6 sm:grid-cols-2">
                      <input
                        placeholder="Expiry Date (MM/YY)"
                        className="block w-full rounded-full border border-base-200 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <input
                        placeholder="CVV"
                        className="block w-full rounded-full border border-base-200 bg-white/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6 py-8 text-center"
                  >
                    <div className="mb-6 text-7xl">✨</div>
                    <h3 className="text-3xl font-bold text-primary">
                      Order Confirmed!
                    </h3>
                    <p className="text-lg text-neutral-600">
                      Thank you for your purchase. Your luxurious products will
                      be shipped soon.
                    </p>
                  </motion.div>
                )}

                {currentStep < 3 && (
                  <div className="mt-8 flex justify-end">
                    <button
                      disabled={loading}
                      onClick={handleSubmit}
                      color="primary"
                      className="px-6 py-3 group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-content transition-all duration-300 ease-out focus:ring-primary focus:ring-offset-2 active:scale-95"
                    >
                      {loading ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-content border-t-transparent"></div>
                      ) : (
                        <span>
                          {currentStep === 2 ? "Place Order" : "Continue"}
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-1"
            >
              <div className="glass-effect sticky top-4 rounded-2xl border border-white/20 p-6 shadow-xl sm:p-8">
                <h3 className="mb-6 text-xl font-semibold">Order Summary</h3>
                <div className="space-y-6">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="product-card flex items-start space-x-4 border-b border-base-200/50 py-4"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 rounded-xl object-contain shadow-lg"
                      />
                      <div className="flex-1 space-y-1">
                        <h4 className="text-lg font-medium">{product.name}</h4>
                        <p className="text-neutral-600 text-sm">
                          {product.description}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-neutral-600 text-sm">
                            Qty: {product.quantity}
                          </p>
                          <p className="font-semibold">
                            ${(product.price * product.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 pt-4">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-base-200/50 pt-3">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
