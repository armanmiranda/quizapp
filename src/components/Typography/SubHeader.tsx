import { TypographyProps } from "./types";

export const SubHeader = ({ content, className }: TypographyProps) => {
  return (
    <p className={`text-xl ${className}`}>
      {content}
    </p>
  )
}
