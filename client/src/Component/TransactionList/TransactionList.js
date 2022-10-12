import React from "react";
import "./TransactionList.scss";

const TransactionList = (props) => {
  const { transactions, onDeleteTransaction, onEditTransaction } = props;
  const transactionlist = transactions.map((item, index) => {
    const { amount, type, date, category, id } = item;
    return (
      <thead key={index} className="transactionlist-item">
        <tr>
          <th>{amount}</th>
          <th>{type}</th>
          <th>{date}</th>
          <th>{category}</th>
          <th>
            <button onClick={() => onDeleteTransaction(id)}>
              <i className="fa-sharp fa-solid fa-trash"></i>
            </button>
          </th>
          <th>
            <button onClick={() => onEditTransaction(id)}>
              <i className="fas fa-edit"></i>
            </button>
          </th>
        </tr>
      </thead>
    );
  });
  return <table className="transactionlist">{transactionlist}</table>;
};

export default TransactionList;
