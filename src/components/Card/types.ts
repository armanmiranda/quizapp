export type AnswerType = {
  id: number;
  content: string;
}

export interface AnswerCardProps {
  isActive: boolean;
  question: AnswerType;
  onClick?: (props: number) => void;
}
