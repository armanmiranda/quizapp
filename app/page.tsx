'use client'

import { PrimaryButton } from '@/src/components/Button';
import { QUESTION_BASE_URL } from '@/src/constants/routes';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push(`${QUESTION_BASE_URL}/1`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Quizapp
      <PrimaryButton onClick={handleStartClick}>Start!</PrimaryButton>
    </main>
  );
}
