"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import CartDropdown from "./CartDropdown";
import Button from "../ui/Button";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const pagesDropdownRef = useRef<HTMLDivElement>(null);
  const cartDropdownRef = useRef<HTMLDivElement>(null);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pagesDropdownRef.current &&
        !pagesDropdownRef.current.contains(event.target as Node)
      ) {
        setPagesDropdownOpen(false);
      }
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target as Node)
      ) {
        setCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`${
        scrollY > 0 ? "bg-primary-content shadow-md" : ""
      } fixed top-0 z-50 flex w-full flex-wrap px-6 md:flex-nowrap md:justify-start md:px-12`}
    >
      <nav className="container relative mx-auto w-full py-4 md:flex md:items-center md:justify-between md:gap-3">
        <div className="flex items-center justify-between gap-x-1">
          {/*  Logo  */}
          <Link
            className="flex flex-none flex-row items-center gap-4 text-xl font-semibold text-neutral focus:opacity-80 focus:outline-none"
            href="/"
            aria-label="Brand"
          >
            <span>LUMA.</span>
            <span className="h-8 w-[3px] bg-primary"></span>
          </Link>
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex size-9 items-center justify-center rounded-lg text-[12px] font-medium text-neutral hover:bg-white focus:bg-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <HiX className="size-6" />
            ) : (
              <HiMenu className="size-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu (always visible on md+) */}
        <div className="hidden w-full md:flex md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-4">
            {/* Desktop Navigation Items */}
            <div className="ml-10 hidden items-center gap-4 md:flex">
              <Link
                href="/products"
                className="flex items-center rounded-lg p-2 text-sm text-neutral hover:text-primary focus:outline-none"
              >
                Products
              </Link>

              {/* Desktop Pages Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPagesDropdownOpen(!isPagesDropdownOpen)}
                  className="rounded-lg p-2 text-sm text-neutral hover:text-primary focus:outline-none flex items-center"
                  aria-expanded={isPagesDropdownOpen}
                >
                  Available Pages
                  <svg
                    className={`ms-1 size-4 shrink-0 transition-transform ${
                      isPagesDropdownOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Desktop Dropdown Content */}
                <div
                  className={`absolute left-0 top-full z-20 mt-2 w-48 rounded-lg bg-white p-4 shadow-lg ${
                    isPagesDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Products
                  </Link>
                  <Link
                    href="/products/1"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Single product
                  </Link>
                  <Link
                    href="/signin"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/checkout"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Checkout
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="flex items-center rounded-lg p-2 text-sm text-neutral hover:text-primary focus:outline-none"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Desktop Cart & Login */}
          <div className="hidden items-center gap-10 md:flex">
            <div className="relative">
              <button
                onClick={() => setCartOpen(!isCartOpen)}
                className="flex items-center justify-center rounded-lg text-neutral hover:text-primary focus:outline-none"
                aria-expanded={isCartOpen}
              >
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                  2
                </span>
              </button>

              <div
                className={`absolute right-0 top-full z-20 mt-2 ${
                  isCartOpen ? "" : "hidden"
                }`}
              >
                <CartDropdown />
              </div>
            </div>
            <Button
              href="/signin"
              size="md"
              color="primary"
              customClasses="login-button"
            >
              <span>Login</span>
              <div className="w-4">
                <IoIosArrowRoundForward />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-h-[100vh] overflow-y-auto bg-white px-4 py-8 shadow-lg">
            <div className="flex flex-col gap-4">
              {/* Mobile Navigation Items */}
              <Link
                href="/products"
                className="flex items-center rounded-lg p-2 text-sm text-neutral hover:text-primary focus:outline-none"
              >
                Products
              </Link>

              {/* Mobile Pages Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPagesDropdownOpen(!isPagesDropdownOpen)}
                  className="rounded-lg p-2 text-sm text-neutral hover:text-primary focus:outline-none flex items-center"
                  aria-expanded={isPagesDropdownOpen}
                >
                  Available Pages
                  <svg
                    className={`ms-1 size-4 shrink-0 transition-transform ${
                      isPagesDropdownOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Mobile Dropdown Content  */}
                <div
                  className={`ml-4 mt-2 space-y-2 ${
                    isPagesDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Products
                  </Link>
                  <Link
                    href="/products/1"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Single product
                  </Link>
                  <Link
                    href="/signin"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/checkout"
                    className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Checkout
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="flex items-center rounded-lg p-2 text-sm text-neutral hover:text-primary focus:outline-none"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Cart & Login */}
            <div className="mt-2 flex flex-col gap-8 border-t pt-8">
              <div className="flex justify-center">
                <button
                  onClick={() => setCartOpen(!isCartOpen)}
                  className="flex items-center justify-center rounded-lg text-neutral hover:text-primary focus:outline-none relative"
                  aria-expanded={isCartOpen}
                >
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                    2
                  </span>
                </button>

                {/* Cart Dropdown */}
                <div
                  className={`absolute left-0 right-0 z-50 mt-4 ${
                    isCartOpen ? "block" : "hidden"
                  }`}
                >
                  <CartDropdown />
                </div>
              </div>

              <Button
                href="/signin"
                size="md"
                color="primary"
                customClasses="w-full justify-center group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
                   text-primary-content
                   transition-all
                   duration-300 ease-out
                   focus:ring-primary focus:ring-offset-2 active:scale-95"
              >
                <span>Login</span>
                <div className="w-4">
                  <IoIosArrowRoundForward />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
