export const dataReducer = (data, action) => {
  switch (action.type) {
    case 'updateQuestions': {
      const { questions } = action.payload;
      return {
        ...data,
        questions
      }
    }
    case 'updateAnswers': {
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
    default: {
      return data;
    }
  }
}
