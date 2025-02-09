import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "neutral" | "error";
  isDisabled?: boolean;
  customClasses?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href = "#",
  size = "md",
  color = "primary",
  isDisabled = false,
  customClasses = "",
  type = "button",
  children,
}) => {
  // Define Tailwind classes based on props
  const sizeClasses =
    size === "sm"
      ? "px-3 py-2 text-xs"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-sm";

  const colorClasses =
    color === "primary"
      ? "bg-primary text-primary-content"
      : color === "secondary"
      ? "bg-secondary text-secondary-content"
      : color === "neutral"
      ? "bg-neutral text-neutral-content"
      : "bg-error text-error-content";

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium hover:opacity-85 focus:outline-none disabled:pointer-events-none disabled:opacity-50";

  const finalClasses = `${baseClasses} ${sizeClasses} ${colorClasses} ${customClasses}`;

  return href ? (
    <Link href={href} className={finalClasses} aria-disabled={isDisabled}>
      {children}
    </Link>
  ) : (
    <button type={type} className={finalClasses} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
