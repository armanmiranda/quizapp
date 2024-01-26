'use client'

import { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '@/src/components/Button';
import { BASE_URL, QUESTION_BASE_URL, SCORE_BASE_URL } from '@/src/constants/routes';
import { useRouter } from 'next/navigation';
import { AnswerCard } from '@/src/components/Card';
import { ContentText } from '@/src/components/Typography';

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

  const backLabel = Number(params.id) <= 1 ? 'Home' : 'Back';

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

  const handleBackClick = () => {
    if (Number(params.id) <= 1)  {
      router.push(BASE_URL);
    } else {
      router.push(`${QUESTION_BASE_URL}/${Number(params.id) - 1}`);
    }
  }

  const handleQuestionClick = (selectedId: number) => {
    setSelected(selectedId);
  }

  return (
    <main className={questionContainerClasses}>
      <div>
        <span className="font-semibold">Question {params.id}</span>
        <ContentText content={'Lorem ipsum dolor sit amet. Ut natus amet et voluptate praesentium et'} />
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
      <div className="flex flex-row-reverse justify-between gap-6">
        <PrimaryButton className='only:place-self-end' onClick={handleSubmit}>Submit</PrimaryButton>
        <SecondaryButton onClick={handleBackClick}>{backLabel}</SecondaryButton>
      </div>
    </main>
  );
}

export default Page;
