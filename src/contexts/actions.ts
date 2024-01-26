import { TQuestionData, TScoreRecommendationsData } from "../shared/types";

export const updateQuestions = (questions: TQuestionData) => {
  return { type: 'updateQuestions', payload: { questions } };
}

export const addAnswer = (questionId: number, answerId: number) => {
  return {
    type: 'addAnswer',
    payload: { questionId, answerId }
  };
}

export const updateRecommendations = (scoreRecommendations: TScoreRecommendationsData) => {
  return { type: 'updateRecommendations', payload: { scoreRecommendations }};
}

export const initializeAnswers = () => {
  return { type: 'initializeAnswers' };
}

export const updateAnswers = (questionId: number, answerId: number) => {
  return {
    type: 'updateAnswers',
    payload: { questionId, answerId }
  };
}
