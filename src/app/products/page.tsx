import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ProductList from "@/components/products-page/ProductList";
import Head from "next/head";

const products = [
  {
    id: "1",
    title: "Hydrating Day Cream",
    price: "$49.99",
    imageUrl: "/images/products/product1.webp",
    category: "Cream",
    brand: "DermaGlow",
    rating: 1,
  },
  {
    id: "2",
    title: "Vitamin C Brightening Serum",
    price: "$59.99",
    imageUrl: "/images/products/product2.webp",
    category: "Serum",
    brand: "PureSkin Labs",
    rating: 5,
  },
  {
    id: "3",
    title: "Volumizing Hair Treatment",
    price: "$34.99",
    imageUrl: "/images/products/product3.webp",
    category: "Hair",
    brand: "HerbalEssence Care",
    rating: 3,
  },
  {
    id: "4",
    title: "Repairing Hair Mask",
    price: "$29.99",
    imageUrl: "/images/products/product4.webp",
    category: "Hair",
    brand: "Naturals Haircare",
    rating: 4,
  },
  {
    id: "5",
    title: "Overnight Renewal Cream",
    price: "$54.99",
    imageUrl: "/images/products/product5.webp",
    category: "Cream",
    brand: "Celestial Skincare",
    rating: 2,
  },
  {
    id: "6",
    title: "Eye Contour Cream",
    price: "$42.99",
    imageUrl: "/images/products/product6.webp",
    category: "Cream",
    brand: "YouthfulDerm",
    rating: 4,
  },
  {
    id: "7",
    title: "Hyaluronic Acid Serum",
    price: "$49.99",
    imageUrl: "/images/products/product7.webp",
    category: "Serum",
    brand: "PureSkin Labs",
    rating: 5,
  },
  {
    id: "8",
    title: "Retinol Night Serum",
    price: "$64.99",
    imageUrl: "/images/products/product1.webp",
    category: "Serum",
    brand: "LuminousSkin Co.",
    rating: 4,
  },
];

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>LUMA. | Product List</title>
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
      <div className="my-20 w-full px-6 md:px-12">
        <div className="container mx-auto">
          <ProductList products={products} />
        </div>
      </div>
      <Footer />
    </>
  );
}
