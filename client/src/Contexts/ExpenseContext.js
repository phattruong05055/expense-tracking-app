import React, { createContext, useContext } from "react";

const ExpenseContext = createContext();

export const useExpenseContext = () => {
  const ExpenseCtx = useContext(ExpenseContext);
  return ExpenseCtx;
};

export default ExpenseContext;
