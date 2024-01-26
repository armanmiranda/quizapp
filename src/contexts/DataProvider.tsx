'use client'

import { useEffect, useReducer } from 'react';
import { DataContext, DataDispatchContext, defaultState } from './dataContext';
import { useQuestions } from '../utils/api/useQuestion';
import { dataReducer } from './reducer';
import { updateQuestions } from './actions';

const DataProvider = ({ children }) => {
  const { questions:questionsData, isLoading, isError } = useQuestions();
  const [data, dispatch] = useReducer(dataReducer, defaultState);

  useEffect(() => {
    if (questionsData) {
      const { questions } = questionsData;
      dispatch(updateQuestions(questions))
    }
  }, [questionsData])

  if (isLoading) return <div>Loading....</div>
  if (isError) return <div>Something went wrong</div>

  return (
    <DataContext.Provider value={data}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  )
}

export default DataProvider;
