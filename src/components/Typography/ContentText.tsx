import { TypographyProps } from "./types";

export const ContentText = ({ content, className}: TypographyProps) => {
  return (
    <p className={`text-slate-700/75 ${className}`}>{content}</p>
  )
}
