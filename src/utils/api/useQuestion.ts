import useSWR from 'swr';
import { jsonFetcher } from './swrFetcher';
import { API_HOST } from '@/src/constants/routes';

export const useQuestion = (id: number) => {
  const {
    data,
    error,
    isLoading
  } = useSWR(`${API_HOST}/questions/${id}`, jsonFetcher);

  return {
    question: data,
    isLoading,
    isError: error,
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
