import { createContext } from 'react';
import { TDataContextState } from './types';

export const defaultState: TDataContextState = {
  questions: [],
  currentAnswers: [],
  scoreRecommendation: {
    correctCount: 0,
    correctPercentage: 0,
    recommendations: []
  },
}

export const DataContext = createContext<TDataContextState>(defaultState);
export const DataDispatchContext =
  createContext<React.Dispatch<any>>(() => null);
