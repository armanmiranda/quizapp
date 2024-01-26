'use client'

import { ButtonProps } from "./types"

const buttonClasses = [
  "border",
  "border-solid",
  "border-sky-400",
  "rounder",
  "px-5",
  "py-2",
  "hover:bg-sky-400",
  "hover:text-white",
].join(" ")

export const PrimaryButton = ({
  children,
  onClick,
  buttonType,
  className
}: Readonly<ButtonProps>) => {
  return (
    <button
      type={buttonType}
      className={`${buttonClasses} ${className}`}
      onClick={onClick}>
      <span className="text-2xl font-medium">
        {children}
      </span>
    </button>
  )
}
