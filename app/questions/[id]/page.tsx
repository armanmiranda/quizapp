'use client'

import { useState } from 'react';
import { PrimaryButton } from '@/src/components/Button';
import { QUESTION_BASE_URL, SCORE_BASE_URL } from '@/src/constants/routes';
import { useRouter } from 'next/navigation';
import { AnswerCard } from '@/src/components/Card';

interface QuestionParams {
  params: { id: string };
}

const questionContainerClasses = [
  'max-sm:w-screen',
  'max-sm:h-screen',
  'border',
  'border-black',
  'border-solid',
  'p-10',
  'w-9/12'
].join(" ");

const answerListClasses = [
  'flex',
  'gap-6',
  'my-5',
  'max-sm:flex-col',
  'md:flex-row',
  'md:flex-wrap',
  'justify-center'
].join(" ");

const Page = ({ params }: QuestionParams) => {
  const router = useRouter();
  const mockData = [
    { id: 1, content: 'Lorem ipsum dolor sit amet. Ut natus amet et voluptate praesentium et' },
    { id: 2, content: "Answer 2" },
    { id: 3, content: "Answer 3" },
    { id: 4, content: "Lorem ipsum dolor sit amet. Ut natus amet et voluptate praesentium et" }
  ]

  const [selected, setSelected] = useState<number | null>(null);

  const handleSubmit = () => {
    // TODO: remove later temporary only to make the application work
    if (Number(params.id) === 6) {
      router.push(SCORE_BASE_URL);
    } else {
      // TODO: Linking and where to go next should be handled by server
      router.push(`${QUESTION_BASE_URL}/${Number(params.id) + 1}`);
    }

  }

  const handleQuestionClick = (selectedId: number) => {
    setSelected(selectedId);
  }

  return (
    <main className={questionContainerClasses}>
      <div>
        <span className="font-semibold">Question {params.id}</span>
        <p className="text-slate-700/75">
          Lorem ipsum dolor sit amet. Ut natus amet et voluptate praesentium et
        </p>
      </div>
      <div className={answerListClasses}>
        {mockData.map((item) => {
          return <AnswerCard
                  key={item.id}
                  isActive={item.id === selected}
                  question={item}
                  onClick={handleQuestionClick} />
        })}
      </div>
      <div className="flex flex-col items-center">
        <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
      </div>
    </main>
  );
}

export default Page;
