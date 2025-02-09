import React from "react";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

interface ProductCardProps {
  title: string;
  price: string;
  imageUrl: string;
  url: string;
  variant?: boolean; // Determines the styling variant of the card
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  url,
  variant = false,
}) => {
  return (
    <div
      className={`relative flex h-[350px] flex-col justify-between rounded-3xl p-4 ${
        variant ? "w-72 bg-secondary" : "w-full bg-white shadow-md"
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-md font-bold">{title}</span>
          <span className="text-sm">{price}</span>
        </div>
        <Link
          href={url}
          className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary bg-gradient-to-r from-primary to-primary/90 font-normal
          text-primary-content transition-all duration-300 ease-out focus:ring-primary focus:ring-offset-2 active:scale-95"
        >
          <div className="w-4 -rotate-45">
            <MdArrowForward />
          </div>
        </Link>
      </div>

      <div
        className={`mt-4 flex h-56 w-full items-center justify-center overflow-hidden rounded-3xl font-normal ${
          variant ? "bg-[#F9F9F9]" : "bg-secondary"
        }`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default ProductCard;
