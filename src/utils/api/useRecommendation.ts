import useSWR from 'swr';
import { jsonFetcher } from './swrFetcher';
import { TCurrentAnswersData } from '@/src/shared/types';

export const generateResults = async (userAnswers: TCurrentAnswersData[]) => {
  try {
    const response = await fetch('http://localhost:3001/recommendation/generate', {
      method: 'POST',
      body: JSON.stringify(userAnswers)
    })
    const data = await response.json();

    return {
      question: data
    }
  } catch (e) {
  }
}

export const useQuestions = () => {
  const {
    data,
    error,
    isLoading
  } = useSWR(`http://localhost:3001/questions`, jsonFetcher);

  return {
    questions: data,
    isLoading,
    isError: error,
  }
}
