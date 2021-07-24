import React from "react";
import { Link } from "react-router-dom";

interface ThemeButtonProps {
  to?: `/${string}` | string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ThemeButton = ({
  to,
  className,
  children,
  onClick,
}: ThemeButtonProps) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`themeButton ${className}`} onClick={onClick}>
          {children}
        </Link>
      ) : (
        <button className={`themeButton ${className}`} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default ThemeButton;
