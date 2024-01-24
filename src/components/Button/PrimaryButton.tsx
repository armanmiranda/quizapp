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
      className="border border-solid border-sky-700 rounded-full px-5 bg-slate-500/75"
      onClick={onClick}>
      {children}
    </button>
  )
}
