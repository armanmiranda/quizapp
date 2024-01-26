export interface TQuestionData {
  id: number;
  question: string;
  answers: TAnswerData[];
}

export interface TAnswerData {
  id: number;
  answer: string;
}

export interface TCurrentAnswersData {
  questionId: number;
  answerId: number;
}

export interface TRecommendationData {
  id: number;
  programCode: string;
  programName: string;
}

export interface TScoreRecommendationsData {
  correctCount: number;
  correctPercentage: number;
  recommendations: TRecommendationData[];
}
