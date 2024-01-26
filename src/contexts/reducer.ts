import { TCurrentAnswersData } from "../shared/types";
import { TDataContextState } from "./types";

export const dataReducer = (data: TDataContextState, action) => {
  switch (action.type) {
    case 'updateQuestions': {
      const { questions } = action.payload;
      return {
        ...data,
        questions
      }
    }
    case 'addAnswer': {
      const { questionId, answerId } = action.payload;
      return {
        ...data,
        currentAnswers: [
          ...data.currentAnswers,
          {
            questionId,
            answerId
          }
        ]
      }
    }
    case 'updateAnswers': {
      const { questionId, answerId } = action.payload;
      const newCurrentAnswers =
        data.currentAnswers.filter((currentAnswer: TCurrentAnswersData) => {
          currentAnswer.questionId === questionId
        });

      return {
        ...data,
        currentAnswers: [
          ...newCurrentAnswers,
          {
            questionId,
            answerId
          }
        ]
      }
    }
    case 'updateRecommendations': {
      const {
        correctCount,
       correctPercentage,
        recommendations
      } = action.payload.scoreRecommendations;

      return {
        ...data,
        scoreRecommendation: {
          correctCount,
          correctPercentage,
          recommendations
        }
      }
    }
    case 'initializeAnswers': {
      return {
        ...data,
        currentAnswers: []
      }
    }
    default: {
      return data;
    }
  }
}
