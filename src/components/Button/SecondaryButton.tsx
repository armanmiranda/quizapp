import { ButtonProps } from "./types"

const buttonClasses = [
  "border",
  "border-solid",
  "border-slate-300",
  "text-slate-600",
  "rounder",
  "px-5",
  "py-2",
  "hover:bg-slate-300/75",
].join(" ")

export const SecondaryButton = ({
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
