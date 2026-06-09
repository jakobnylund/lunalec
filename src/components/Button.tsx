import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 active:translate-y-[1px]";

  const variants = {
    primary: "bg-accent text-[var(--accent-foreground)] hover:bg-white hover:text-[#050505] hover:shadow-[0_0_40px_rgba(255,255,255,0.6),0_0_80px_var(--accent)]",
    secondary: "bg-[#1a1a1a] text-white hover:bg-white hover:text-[#050505] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    ghost: "text-[#888] hover:text-white border border-transparent hover:border-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-base",
  };

  const disabledStyles = disabled
    ? "opacity-60 cursor-not-allowed hover:bg-accent hover:text-[var(--accent-foreground)] hover:shadow-none hover:scale-100"
    : "";
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled || undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
