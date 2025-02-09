"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/common/ProductCard";
import { MdFilterList, MdStar } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  category: string;
  brand: string;
  rating?: number;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [priceRange, setPriceRange] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(true);

  // Derived categories and brands
  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [products]
  );
  const brands = useMemo(
    () => ["All", ...new Set(products.map((p) => p.brand))],
    [products]
  );

  // Filtered products based on user input
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesBrand =
        selectedBrand === "All" || product.brand === selectedBrand;
      const matchesPrice =
        parseFloat(product.price.replace("$", "")) <= priceRange;
      const matchesRating = (product.rating || 0) >= minRating;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesRating
      );
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    priceRange,
    minRating,
    products,
  ]);

  return (
    <div>
      {/* Filter Toggle Button */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        color="primary"
        className="px-4 py-2 inline-flex items-center justify-center gap-2 font-medium hover:opacity-85 focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-sm group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content transition-all duration-300 ease-out focus:ring-primary focus:ring-offset-2 active:scale-95 mb-8"
      >
        <MdFilterList className="w-6" />
        <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
      </button>

      {/* Filters Section */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            key="filters"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="border-t-1 mb-8 grid gap-6 rounded-3xl border p-6 text-neutral shadow-md backdrop-blur-lg lg:grid-cols-5"
          >
            {/* Search Input */}
            <div className="space-y-2">
              <label htmlFor="search" className="text-sm font-medium">
                Search
              </label>
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full bg-neutral/5 px-4 py-3 placeholder-gray-400 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label htmlFor="categories" className="text-sm font-medium">
                Category
              </label>
              <select
                id="categories"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-full bg-neutral/5 px-4 py-3 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div className="space-y-2">
              <label htmlFor="brands" className="text-sm font-medium">
                Brand
              </label>
              <select
                id="brands"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full rounded-full bg-neutral/5 px-4 py-3 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {brands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">
                Max Price: ${priceRange}
              </label>
              <input
                id="price"
                type="range"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                min="0"
                max="1000"
                step="10"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                style={{ "--progress": `${(priceRange / 1000) * 100}%` }}
                className="[&::-moz-range-thumb]:border-3 w-full cursor-pointer appearance-none bg-transparent
        focus:outline-none
        disabled:pointer-events-none
        disabled:opacity-50
        [&::-moz-range-progress]:bg-primary
        [&::-moz-range-thumb]:h-2.5
        [&::-moz-range-thumb]:w-2.5
        [&::-moz-range-thumb]:appearance-none
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:border-primary
        [&::-moz-range-thumb]:bg-white
        [&::-moz-range-thumb]:transition-all
        [&::-moz-range-thumb]:duration-150
        [&::-moz-range-thumb]:ease-in-out
        [&::-moz-range-track]:h-2
        [&::-moz-range-track]:w-full
        [&::-moz-range-track]:rounded-full
        [&::-moz-range-track]:bg-tertiary
        [&::-webkit-slider-runnable-track]:h-2
        [&::-webkit-slider-runnable-track]:w-full
        [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-runnable-track]:bg-[linear-gradient(to_right,theme(colors.primary)_var(--progress),theme(colors.tertiary)_var(--progress))]
        [&::-webkit-slider-thumb]:-mt-0.5
        [&::-webkit-slider-thumb]:h-2.5
        [&::-webkit-slider-thumb]:w-2.5
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-tertiary
        [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_#C97918]
        [&::-webkit-slider-thumb]:transition-all
        [&::-webkit-slider-thumb]:duration-150
        [&::-webkit-slider-thumb]:ease-in-out w-full cursor-pointer appearance-none bg-transparent focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              />
            </div>

            {/* Minimum Rating Filter */}
            <div className="space-y-2">
              <label htmlFor="rating" className="text-sm font-medium">
                Minimum Rating
              </label>
              <div id="rating" className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setMinRating(star)}
                    className={`transition-transform hover:scale-110 ${
                      minRating >= star ? "text-yellow-400" : "text-gray-400"
                    }`}
                  >
                    <MdStar className="w-6" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Grid */}
      <div className="grid place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard
                variant
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                url={`/products/1`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results Found */}
      {filteredProducts.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-md">No products found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
