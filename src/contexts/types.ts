import { TCurrentAnswersData, TQuestionData, TScoreRecommendationsData } from "../shared/types";

export interface  TDataContextState {
  questions: TQuestionData[] | never[];
  currentAnswers: TCurrentAnswersData[] | never[];
  scoreRecommendation:  TScoreRecommendationsData;
}
