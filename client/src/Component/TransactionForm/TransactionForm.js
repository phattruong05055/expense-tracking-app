import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  amount: "",
  category: "",
  date: "",
  type: "",
  id: "",
};

const TransactionForm = (props) => {
  const {
    onAddTransaction,
    editingTracsaction,
    mode,
    onUpdateTransactionData,
  } = props;

  const [data, setdata] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      ...data,
      id: uuidv4(),
    };

    if (mode === "add") {
      onAddTransaction(newTransaction);
    } else {
      onUpdateTransactionData(data);
    }

    setdata(initialState);
  };

  useEffect(() => {
    const formInitialValue = editingTracsaction
      ? editingTracsaction
      : initialState;

    setdata(formInitialValue);
  }, [editingTracsaction]);

  return (
    <div>
      <form className="form-container" onSubmit={handlesubmit}>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            onChange={handleChange}
            name="amount"
            value={data.amount}
          />
          <label htmlFor="floatingInput">Amount</label>
        </div>
        <select
          className="form-select form-select-lg mb-3 form-floating"
          aria-label=".form-select-lg example"
          name="type"
          onChange={handleChange}
          value={data.type}
        >
          <option value={1}>INCOME</option>
          <option value={2}>EXPENSE</option>
        </select>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingTextarea"
            onChange={handleChange}
            placeholder="Category"
            name="category"
            value={data.category}
          />

          <label htmlFor="floatingTextarea">Category</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="floatingInput"
            onChange={handleChange}
            name="date"
            value={data.date}
          />
          <label htmlFor="floatingInput">date</label>
        </div>
        <button type="submit" className="form-floating">
          {mode === "add" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
