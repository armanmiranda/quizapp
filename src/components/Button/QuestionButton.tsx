import { QuestionButtonProps } from "./types";

export const QuestionButton = ({question, isActive, onClick }: Readonly<QuestionButtonProps>) => {
  const buttonIsActive = () => {
    return isActive ? 'bg-green-300/75' : 'bg-slate-500/75';
  }

  const handleClick = () => {
    if (onClick) onClick(question.id);
  }

  return (
    <div
    className={`border border-solid border-sky-900 px-10 py-5 ${buttonIsActive()}`}
      onClick={handleClick}>
      {question.content}
    </div>
  )
}
