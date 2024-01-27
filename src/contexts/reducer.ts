import { TCurrentAnswersData } from "../shared/types";
import { ActionTypes } from "./constants";
import { TActions, TDataContextState } from "./types";

export const dataReducer = (
  data: TDataContextState,
  action: TActions
): TDataContextState => {
  switch (action.type) {
    case ActionTypes.INITIALIZE_ANSWERS: {
      return {
        ...data,
        currentAnswers: []
      }
    }
    case ActionTypes.UPDATE_QUESTIONS: {
      if (action.payload && 'questions' in action.payload) {
        const { questions }  = action.payload;
        return {
          ...data,
          questions
        }
      }
    }
    case ActionTypes.ADD_ANSWER: {
      if (action.payload && 'questionId' in action.payload && 'answerId' in action.payload) {
        const { questionId, answerId }: TCurrentAnswersData = action.payload;
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
    }
    case ActionTypes.UPDATE_ANSWERS: {
      if (action.payload && 'questionId' in action.payload && 'answerId' in action.payload) {
        const { questionId, answerId }: TCurrentAnswersData = action.payload;
        const newCurrentAnswers =
          data.currentAnswers.filter((currentAnswer: TCurrentAnswersData) => {
            return currentAnswer.questionId !== questionId
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
    }
    case ActionTypes.UPDATE_RECOMMENDATIONS: {
      if (action.payload && 'scoreRecommendations' in action.payload) {
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
    }
    default: {
      return data;
    }
  }
}
