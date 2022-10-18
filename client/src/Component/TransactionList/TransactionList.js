import React from "react";
import "./TransactionList.scss";

const TransactionList = (props) => {
  const { transactions, onDeleteTransaction, onEditTransaction } = props;
  const transactionlist = transactions.map((item, index) => {
    const { amount, type, date, category, id } = item;
    return (
      <div key={index} className="transactionlist-item">
        <span>{amount}</span>
        <span>{type}</span>
        <span>{date}</span>
        <span>{category}</span>
        <span>
          <button onClick={() => onDeleteTransaction(id)}>
            <i className="fa-sharp fa-solid fa-trash"></i>
          </button>
        </span>
        <span>
          <button onClick={() => onEditTransaction(id)}>
            <i className="fas fa-edit"></i>
          </button>
        </span>
      </div>
    );
  });
  return <table className="transactionlist">{transactionlist}</table>;
};

export default TransactionList;
