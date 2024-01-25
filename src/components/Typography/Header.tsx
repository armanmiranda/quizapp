import { TypographyProps } from "./types"

export const Header = ({ content, className }: TypographyProps) => {
  return (
    <p className={`text-8xl ${className}`}>
      {content}
    </p>
  )
}
