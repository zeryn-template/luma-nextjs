"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/common/Navbar";
import Button from "@/components/ui/Button";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import Head from "next/head";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [floatingElements, setFloatingElements] = useState<any[]>([]);

  useEffect(() => {
    const elements = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setFloatingElements(elements);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleFocus = (field: keyof typeof focused) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: keyof typeof focused) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  const contactInfo = [
    {
      icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
      title: "Fast & Secure",
      content:
        "Experience seamless and secure login with our advanced authentication system.",
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Reliable",
      content:
        "Your data is safe with us. We use industry-standard encryption to protect your information.",
    },
  ];

  return (
    <>
      <Head>
        <title>LUMA. | Login</title>
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
      <div className="relative mt-20 min-h-screen overflow-hidden">
        {/* Floating Background Elements - Render only on Client */}
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              background: `linear-gradient(45deg, #FEFAF0, transparent)`,
              width: "200px",
              height: "200px",
              left: el.left,
              top: el.top,
              opacity: 1,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="container relative z-10 mx-auto px-4 py-16">
          <motion.div
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-base-100/40 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid gap-0 md:grid-cols-2">
              {/* Contact Info Section */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-8">
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-primary-content/10"></div>
                <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-20 translate-y-20 rounded-full bg-primary-content/10"></div>
                <h2 className="mb-6 text-3xl font-bold text-primary-content">
                  Welcome Back
                </h2>
                <p className="text-md mb-8 text-primary-content/90">
                  Login to access your account and continue your journey with
                  us.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      className="group flex items-center space-x-4"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                    >
                      <div className="flex min-h-12 min-w-12 items-center justify-center rounded-xl bg-primary-content/10 text-white group-hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={info.icon}
                          />
                        </svg>
                      </div>
                      <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                        <h3 className="text-md font-semibold text-primary-content">
                          {info.title}
                        </h3>
                        <p className="text-primary-content/70">
                          {info.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="relative p-8">
                <form className="relative space-y-6" onSubmit={handleSubmit}>
                  {["email", "password"].map((field) => (
                    <div
                      key={field}
                      className={`group relative ${
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        focused[field] ? "focused" : ""
                      }`}
                    >
                      <label className="mb-1 block text-sm font-medium">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({ ...formData, [field]: e.target.value })
                        }
                        onFocus={() =>
                          handleFocus(field as keyof typeof focused)
                        }
                        onBlur={() => handleBlur(field as keyof typeof focused)}
                        className="block w-full rounded-full bg-base-200/50 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:bg-base-200/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  ))}

                  <Button
                    type="submit"
                    size="md"
                    color="primary"
                    customClasses="px-6 py-3 group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                       text-primary-content
                       transition-all
                       duration-300 ease-out
                       focus:ring-primary focus:ring-offset-2 active:scale-95"
                  >
                    Login
                  </Button>
                </form>
                <div className="relative mt-10 flex items-center justify-center gap-2 text-sm">
                  <span>Already have an account ?</span>
                  <Link
                    className="cursor-pointer text-primary hover:font-bold"
                    href="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
