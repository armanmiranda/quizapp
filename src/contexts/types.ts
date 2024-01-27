import { TCurrentAnswersData, TQuestionData, TScoreRecommendationsData } from "../shared/types";
import { ActionTypes } from "./constants";

export interface  TDataContextState {
  questions: TQuestionData[] | never[];
  currentAnswers: TCurrentAnswersData[] | never[];
  scoreRecommendation:  TScoreRecommendationsData;
}

export interface TDataProviderProps {
  children: React.ReactNode;
}

export interface TQuestions {
  questions: TQuestionData[];
}

export interface TScoreRecommendations {
  scoreRecommendations: TScoreRecommendationsData
}


// Action types
export interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export type TUpdateQuestions = {
  type: string;
  payload: TQuestions;
}

export type TAddAnswer = {
  type: string;
  payload: TCurrentAnswersData;
}


export type TUpdateAnswer = {
  type: string;
  payload: TCurrentAnswersData;
}

export type TUpdateRecommendations = {
  type: string;
  payload: TScoreRecommendations;
}

export type TInitializeAnswers = {
  type: string;
  payload: undefined;
}

export type TActions =
  | TUpdateQuestions
  | TUpdateAnswer
  | TAddAnswer
  | TUpdateRecommendations
  | TInitializeAnswers

