import React, { ReactNode } from 'react'

interface ButtonProps {
    children? : ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "submit" | "reset" | "button";
}
const Button:React.FC<ButtonProps> = ({children, className , onClick , type}) => {
  return (
    <button className={`bg-cta hover:bg-ctaHover text-white flex justify-center items-center rounded-lg ${className}`} onClick={onClick} type={type}>{children}</button>
  )
}

export default Button