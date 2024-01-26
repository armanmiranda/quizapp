import { TAnswerData } from "@/src/shared/types";

export interface AnswerCardProps {
  isActive: boolean;
  answer: TAnswerData;
  onClick?: (props: number) => void;
}
