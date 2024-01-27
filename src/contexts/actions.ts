import { TQuestionData, TScoreRecommendationsData } from "../shared/types";
import { ActionTypes } from "./constants";

export const updateQuestions = (questions: TQuestionData[]) => {
  return {
    type: ActionTypes.UPDATE_QUESTIONS,
    payload: { questions }
  };
}

export const addAnswer = (questionId: number, answerId: number) => {
  return {
    type: ActionTypes.ADD_ANSWER,
    payload: { questionId, answerId }
  };
}

export const updateRecommendations = (scoreRecommendations: TScoreRecommendationsData) => {
  return {
    type: ActionTypes.UPDATE_RECOMMENDATIONS,
    payload: { scoreRecommendations }
  };
}

export const initializeAnswers = () => {
  return { type: ActionTypes.INITIALIZE_ANSWERS };
}

export const updateAnswers = (questionId: number, answerId: number) => {
  return {
    type: ActionTypes.UPDATE_ANSWERS,
    payload: { questionId, answerId }
  };
}
