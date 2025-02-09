"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/common/Navbar";
import Button from "@/components/ui/Button";
import Footer from "@/components/common/Footer";
import Head from "next/head";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
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
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Email",
      content: "contact@beautyco.com",
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Location",
      content: "123 Beauty Street, LA 90210",
    },
  ];

  return (
    <>
      <Head>
        <title>LUMA. | Contact</title>
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
                  Get in Touch
                </h2>
                <p className="text-md mb-8 text-primary-content/90">
                  Experience the future of beauty. Contact us for personalized
                  skincare solutions.
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
                  {["name", "email"].map((field) => (
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

                  <div
                    className={`group relative ${
                      focused.message ? "focused" : ""
                    }`}
                  >
                    <label className="mb-1 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="block w-full rounded-xl bg-base-200/50 px-4 py-3 shadow-sm backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

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
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
