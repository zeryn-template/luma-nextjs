"use client";

import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import ProductCarousel from "../common/ProductCarousel";

interface Product {
  title: string;
  price: string;
  imageUrl: string;
  url: string;
}

const products: Product[] = [
  {
    title: "Facial care set",
    price: "$19.99",
    imageUrl: "/images/products/product1.webp",
    url: "/products/1",
  },
  {
    title: "Hydrating Day Cream",
    price: "$49.99",
    imageUrl: "/images/products/product2.webp",
    url: "/products/1",
  },
  {
    title: "Vitamin C Brightening Serum",
    price: "$59.99",
    imageUrl: "/images/products/product3.webp",
    url: "/products/1",
  },
  {
    title: "Volumizing Hair Treatment",
    price: "$34.99",
    imageUrl: "/images/products/product4.webp",
    url: "/products/1",
  },
  {
    title: "Repairing Hair Mask",
    price: "$29.99",
    imageUrl: "/images/products/product5.webp",
    url: "/products/1",
  },
  {
    title: "Overnight Renewal Cream",
    price: "$54.99",
    imageUrl: "/images/products/product6.webp",
    url: "/products/1",
  },
];

export default function BestSellers() {
  return (
    <section className="flex w-full px-6 md:px-12">
      <div className="container mx-auto">
        {/* Section Header: Title and Short Description */}
        <div className="flex flex-col items-start md:flex-row md:justify-between">
          {/* Section Title */}
          <h1 className="text-2xl font-bold leading-tight text-neutral sm:text-3xl lg:text-3xl">
            Renew Your Glow with
            <br /> Our Signature Selections
          </h1>
          {/* Description and Call-to-Action */}
          <div className="mt-4 flex flex-col gap-4 text-sm md:mt-0">
            <p className="w-full text-gray-400 md:w-96">
              Meet the products everyone’s obsessed with: plumping creams for
              dewy skin, brightening serums for a lit-from-within glow, and
              soothing masks that feel like a spa day at home.
            </p>
            <Link
              href="/"
              className="flex flex-row items-center gap-4 text-primary"
            >
              <span>See more products</span>
              <MdArrowForward className="w-4" />
            </Link>
          </div>
        </div>
        {/* Product Carousel */}
        <div className="mt-20 w-full">
          <ProductCarousel products={products} />
        </div>
      </div>
    </section>
  );
}
