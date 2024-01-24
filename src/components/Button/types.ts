export interface ButtonProps {
  children: React.ReactNode;
  buttonType?: "button" | "submit" | "reset";
  onClick?: (props: unknown) => void;
}

export type QuestionType = {
  id: number;
  content: string;
}

export interface QuestionButtonProps {
  isActive: boolean;
  question: QuestionType;
  onClick?: (props: number) => void;
}
