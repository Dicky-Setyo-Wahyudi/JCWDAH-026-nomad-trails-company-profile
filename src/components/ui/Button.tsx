import type { ReactNode } from "react";

interface ButtonProps {children: ReactNode; onClick?: () => void; type?: "button" | "submit"}

const Button = ({children, onClick, type = "button"}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="bg-[#0F4C75] hover:bg-[#0B3654] text-white px-6 py-3 rounded-lg transition duration-300">
      {children}
    </button>
  );
};

export default Button;