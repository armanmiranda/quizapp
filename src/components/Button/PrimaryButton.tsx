'use client'

import { ButtonProps } from "./types"

export const PrimaryButton = ({
  children,
  onClick,
  buttonType
}: Readonly<ButtonProps>) => {
  return (
    <button
      type={buttonType}
      className="border border-solid border-sky-400 rounded px-5 py-2 hover:bg-sky-400 hover:text-white"
      onClick={onClick}>
      <span className="text-2xl">
        {children}
      </span>
    </button>
  )
}
