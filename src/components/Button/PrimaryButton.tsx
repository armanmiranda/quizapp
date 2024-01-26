import { ButtonProps } from "./types"

const commonButtonClasses = [
  'border',
  'border-solid',
  'rounder',
  'px-5',
  'py-2',
];

const buttonClasses = [
  ...commonButtonClasses,
  'border-sky-400',
  'hover:bg-sky-400',
  'hover:text-white',
].join(" ")

const disabledButtonClasses = [
  ...commonButtonClasses,
  'border-sky-200',
  'cursor-not-allowed',
  'text-slate-400'
].join(" ")

export const PrimaryButton = ({
  children,
  onClick,
  buttonType,
  className,
  disabled = false
}: Readonly<ButtonProps>) => {
  const styleClasses =
    disabled ?
    `${disabledButtonClasses} ${className}` :
    `${buttonClasses} ${className}`;

  return (
    <button
      type={buttonType}
      className={styleClasses}
      onClick={onClick}>
      <span className="text-2xl font-medium">
        {children}
      </span>
    </button>
  )
}
