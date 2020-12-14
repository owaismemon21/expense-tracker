import React,{ createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  transactions: [
    {id: 1, amount: 1000, desc: "Income 1"},
    {id: 2, amount: -150, desc: "Burger"},
    {id: 3, amount: 500, desc: "Income 2"},
    {id: 4, amount: -50, desc: "Cold Drink"}
  ]
};

// global context
export const TransactionContext =  createContext(initialState);

// provider for Transaction Context
export const TransactionProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  function deleteTrasaction(id) {
    dispatch({
      type: 'DELETE',
      payload: id
    });
  }

  function addTrasaction(transaction) {
    dispatch({
      type: 'ADD',
      payload: transaction
    });
  }

  return (
    <TransactionContext.Provider value={{
      transactions: state.transactions,
      deleteTrasaction,
      addTrasaction
    }}>
      {children}
    </TransactionContext.Provider>
  )
};