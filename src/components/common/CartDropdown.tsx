"use client";

import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../ui/Button";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartDropdown() {
  // Sample cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Moisturizing Cream",
      price: 29.99,
      image: "/images/products/product1.webp",
      quantity: 1,
    },
    {
      id: 2,
      name: "Moisturizing Cream",
      price: 34.99,
      image: "/images/products/product2.webp",
      quantity: 1,
    },
    {
      id: 3,
      name: "Moisturizing Cream",
      price: 34.99,
      image: "/images/products/product3.webp",
      quantity: 1,
    },
    {
      id: 4,
      name: "Moisturizing Cream",
      price: 34.99,
      image: "/images/products/product4.webp",
      quantity: 1,
    },
  ]);

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Function to remove an item from the cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="mt-2 w-80 rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-4 flex justify-between border-b pb-2">
        <h3 className="text-lg font-semibold text-neutral">Shopping Cart</h3>
        <span className="text-sm text-neutral">({cartItems.length} items)</span>
      </div>

      <div className="max-h-56 space-y-4 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-start justify-between">
            <div className="h-10 w-20">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-md object-contain"
              />
            </div>
            <div className="mb-4">
              <div className="flex flex-row gap-2">
                <h4 className="text-sm font-medium text-neutral">
                  {item.name}
                </h4>
                <span className="text-sm text-neutral">(x{item.quantity})</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm font-medium text-neutral">
                  ${item.price}
                </span>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="w-3 cursor-pointer self-center text-error"
              aria-label="Remove item"
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-4">
        <div className="mb-4 flex justify-between">
          <span className="text-base font-medium text-neutral">Total:</span>
          <span className="text-base font-medium text-neutral">
            ${total.toFixed(2)}
          </span>
        </div>
        <Button
          href="/checkout"
          size="md"
          color="primary"
          customClasses="px-6 py-3 group w-full relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90
            text-primary-content transition-all duration-300 ease-out focus:ring-primary focus:ring-offset-2 active:scale-95"
        >
          <span>Proceed to Checkout</span>
        </Button>
      </div>
    </div>
  );
}
