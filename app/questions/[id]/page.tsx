'use client'

import { useState, useContext, useEffect } from 'react';
import { PrimaryButton, SecondaryButton } from '@/src/components/Button';
import { BASE_URL, QUESTION_BASE_URL, SCORE_BASE_URL } from '@/src/constants/routes';
import { useRouter } from 'next/navigation';
import { AnswerCard } from '@/src/components/Card';
import { ContentText } from '@/src/components/Typography';
import { DataContext, DataDispatchContext } from '@/src/contexts/dataContext';
import {
  answerListClasses,
  questionContainerClasses,
} from './constants';
import { updateAnswers, updateRecommendations } from '@/src/contexts/actions';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '@/src/utils/api/swrFetcher';

interface QuestionParams {
  params: { id: string };
}


const Page = ({ params }: QuestionParams) => {
  const router = useRouter();
  const { questions, currentAnswers } = useContext(DataContext);
  const dispatch = useContext(DataDispatchContext);
  const {
    data,
    trigger: generateRecommendation,
    isMutating: _
  } = useSWRMutation('http://localhost:3001/recommendations/generate', postFetcher);

  const [selected, setSelected] = useState<number | null>(null);

  const question = questions[Number(params.id) - 1];
  const backLabel = Number(params.id) <= 1 ? 'Home' : 'Back';

  const handleSubmit = () => {
    if (!selected) return;
    dispatch(updateAnswers(question.id, selected))
    if (Number(params.id) === 6) {
      generateRecommendation({answers: [
        ...currentAnswers, { questionId: question.id, answerId: selected }
      ]});
    } else {
      router.push(`${QUESTION_BASE_URL}/${Number(params.id) + 1}`);
    }
  }

  useEffect(() => {
    if (data?.status === 200) {
      dispatch(updateRecommendations(data));
      router.push(SCORE_BASE_URL);
    }
  }, [data])

  const generateResults = async () => {
    try {
    } catch (e) {
      console.log("Something went wrong");
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
        <ContentText content={question.question} />
      </div>
      <div className={answerListClasses}>
        {question.answers.map((item) => {
          return <AnswerCard
                  key={item.id}
                  isActive={item.id === selected}
                  answer={item}
                  onClick={handleQuestionClick} />
        })}
      </div>
      <div className="flex flex-row-reverse justify-between gap-6">
        <PrimaryButton disabled={!selected} onClick={handleSubmit}>Submit</PrimaryButton>
        <SecondaryButton onClick={handleBackClick}>{backLabel}</SecondaryButton>
      </div>
    </main>
  );
}

export default Page;
