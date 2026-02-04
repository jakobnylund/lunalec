import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300";

  const variants = {
    primary: "bg-accent text-[#050505] hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.6),0_0_80px_var(--accent)] hover:scale-[1.02]",
    secondary: "bg-[#1a1a1a] text-white hover:bg-white hover:text-[#050505] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02]",
    ghost: "text-[#888] hover:text-white border border-transparent hover:border-white",
  };

  const sizes = {
    sm: "px-6 py-3 text-base",
    md: "px-10 py-5 text-lg",
    lg: "px-14 py-6 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
