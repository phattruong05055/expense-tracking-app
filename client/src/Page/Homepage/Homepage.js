import React, { useState } from "react";
import "./Homepage.scss";
import TransactionForm from "../../Component/TransactionForm/TransactionForm";
import { Link } from "react-router-dom";
import { useExpenseContext } from "../../Contexts/ExpenseContext";
import TransactionList from "../../Component/TransactionList/TransactionList";

const Homepage = (props) => {
  const {
    onAddTransaction,
    transactions,
    onDeleteTransaction,
    onEditTransaction,
    editingTracsaction,
    mode,
    onUpdateTransactionData,
  } = useExpenseContext();

  return (
    <div className="homepage">
      <Link to="/">Homepage</Link>
      <div className="row">
        <div className="col-6">
          <TransactionForm
            onAddTransaction={onAddTransaction}
            editingTracsaction={editingTracsaction}
            mode={mode}
            onUpdateTransactionData={onUpdateTransactionData}
          ></TransactionForm>
        </div>
        <div className="col-6">
          <TransactionList
            transactions={transactions}
            onDeleteTransaction={onDeleteTransaction}
            onEditTransaction={onEditTransaction}
          ></TransactionList>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
