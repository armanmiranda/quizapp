'use client'

import { useState } from 'react';
import { PrimaryButton, QuestionButton } from '@/src/components/Button';
import { QUESTION_BASE_URL, SCORE_BASE_URL } from '@/src/constants/routes';
import { useRouter } from 'next/navigation';

interface QuestionParams {
  params: { id: string };
}

const Page = ({ params }: QuestionParams) => {
  const router = useRouter();
  const mockData = [
    { id: 1, content: "Answer 1" },
    { id: 2, content: "Answer 2" },
    { id: 3, content: "Answer 3" },
    { id: 4, content: "Answer 4" }
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
    <main className="flex flex-col items-center justify-between p-24">
      Hello world {params.id}
      {mockData.map((item) => {
        return <QuestionButton
                 key={item.id}
                 isActive={item.id === selected}
                 question={item}
                 onClick={handleQuestionClick} />
      })}
      <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
    </main>
  );
}

export default Page;
