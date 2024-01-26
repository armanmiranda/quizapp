'use client'

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { PrimaryButton } from '@/src/components/Button';
import { Header, SubHeader } from '@/src/components/Typography';
import { QUESTION_BASE_URL } from '@/src/constants/routes';
import { DataDispatchContext } from '@/src/contexts/dataContext';
import { initializeAnswers } from '@/src/contexts/actions';

const Home = () => {
  const router = useRouter();
  const dispatch = useContext(DataDispatchContext);

  const handleStartClick = () => {
    router.push(`${QUESTION_BASE_URL}/1`);
  }

  useEffect(() => {
    dispatch(initializeAnswers());
  }, [])

  return (
    <main className="flex flex-col items-center justify-center">
      <Header content='Quizapp' />
      <SubHeader className="my-10" content='A Simple Quiz Application' />
      <PrimaryButton onClick={handleStartClick}>Start!</PrimaryButton>
    </main>
  );
}

export default Home;
