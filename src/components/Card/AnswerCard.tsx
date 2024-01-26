import { AnswerCardProps } from "./types";

const cardClasses = [
  'flex',
  'flex-col',
  'justify-center',
  'items-center',
  'border',
  'border-solid',
  'border-sky-400',
  'px-10',
  'py-5',
  'basis-[calc(50%-15px)]'
]

export const AnswerCard = ({
  question,
  isActive,
  onClick
}: Readonly<AnswerCardProps>) => {
  const buttonIsActive = () => {
    return isActive ?
           'bg-green-300/75 text-green-700' :
           'hover:bg-green-300/75 hover:text-green-700';
  }

  const handleClick = () => {
    if (onClick) onClick(question.id);
  }

  return (
    <div
      className={`${cardClasses.join(" ")} ${buttonIsActive()}`}
      onClick={handleClick}>
      {question.content}
    </div>
  )
}
