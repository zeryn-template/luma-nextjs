"use client";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AboutUs from "@/components/home-page/AboutUs";
import BestSellers from "@/components/home-page/BestSellers";
import Hero from "@/components/home-page/Hero";
import ShopByCategories from "@/components/home-page/ShopByCategories";
import Testimonials from "@/components/home-page/Testimonials";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <div className="my-20 space-y-20 md:space-y-36">
        {/* Best Sellers Section */}
        <BestSellers />

        {/* About Us Section */}
        <AboutUs />

        {/* Shop By Categories Section */}
        <ShopByCategories />

        {/* Testimonials Section */}
        <Testimonials />
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
