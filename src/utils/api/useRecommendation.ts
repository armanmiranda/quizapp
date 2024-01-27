import useSWR from 'swr';
import { jsonFetcher } from './swrFetcher';
import { TCurrentAnswersData } from '@/src/shared/types';
import { API_HOST } from '@/src/constants/routes';

export const generateResults = async (userAnswers: TCurrentAnswersData[]) => {
  try {
    const response = await fetch(`${API_HOST}/recommendation/generate`, {
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
  } = useSWR(`${API_HOST}/questions`, jsonFetcher);

  return {
    questions: data,
    isLoading,
    isError: error,
  }
}
