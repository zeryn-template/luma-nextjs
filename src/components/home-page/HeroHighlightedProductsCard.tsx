"use client";

import { useState } from "react";
import ProductCard from "../common/ProductCard";

interface Product {
  tab: string;
  title: string;
  price: string;
  image: string;
  url: string;
}

const products: Product[] = [
  {
    tab: "New",
    title: "Facial care set",
    price: "$19.99",
    image: "/images/products/product1.webp",
    url: "/products/1",
  },
  {
    tab: "Cream",
    title: "Moisturizing Cream",
    price: "$24.99",
    image: "/images/products/product2.webp",
    url: "/products/1",
  },
  {
    tab: "Serum",
    title: "Hydrating Serum",
    price: "$29.99",
    image: "/images/products/product3.webp",
    url: "/products/1",
  },
];

export default function HeroHighlightedProductsCard() {
  const [activeTab, setActiveTab] = useState<string>("New");
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  // Switch product on tab click
  const switchProduct = (tab: string) => {
    setActiveTab(tab);
    const selectedProduct = products.find((product) => product.tab === tab);
    if (selectedProduct) {
      setActiveProduct(selectedProduct);
    }
  };

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center md:h-fit md:w-72 md:justify-start">
      {/* Tabs */}
      <div className="mb-4 flex w-full flex-row justify-between gap-2">
        {products.map((product) => (
          <button
            key={product.tab}
            className={`w-full rounded-full px-4 py-2 text-sm font-medium ${
              activeTab === product.tab
                ? "bg-primary text-primary-content"
                : "hover:bg-neutral-focus bg-neutral-content text-neutral"
            }`}
            onClick={() => switchProduct(product.tab)}
          >
            {product.tab}
          </button>
        ))}
      </div>

      {/* Product card */}
      <ProductCard
        title={activeProduct.title}
        price={activeProduct.price}
        imageUrl={activeProduct.image}
        url={activeProduct.url}
      />
    </div>
  );
}
