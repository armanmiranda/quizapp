'use client'

import { PrimaryButton } from '@/src/components/Button';
import { Header, SubHeader } from '@/src/components/Typography';
import { QUESTION_BASE_URL } from '@/src/constants/routes';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push(`${QUESTION_BASE_URL}/1`);
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Header content='Quizapp' />
      <SubHeader className="my-10" content='A Simple Quiz Application' />
      <PrimaryButton onClick={handleStartClick}>Start!</PrimaryButton>
    </main>
  );
}
