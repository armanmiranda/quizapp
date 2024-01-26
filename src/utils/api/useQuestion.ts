import useSWR from 'swr';
import { jsonFetcher } from './swrFetcher';

export const useQuestion = (id: number) => {
  const {
    data,
    error,
    isLoading
  } = useSWR(`http://localhost:3001/questions/${id}`, jsonFetcher);

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
  } = useSWR(`http://localhost:3001/questions`, jsonFetcher);

  return {
    questions: data,
    isLoading,
    isError: error,
  }
}
