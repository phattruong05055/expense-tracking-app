import { useState } from "react";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import ExpenseContext from "./Contexts/ExpenseContext";
import Homepage from "./Page/Homepage/Homepage";
import LoginPage from "./Page/LoginPage/LoginPage";
import Header from "./Component/Header/Header";

import "./App.css";
function App() {
  const [transactions, setTransactions] = useState([]);
  const [editingTracsaction, setEditingTransaction] = useState(null);
  const [mode, setMode] = useState("add");

  const onAddTransaction = (transaction) => {
    const newtransactions = [...transactions, transaction];
    setTransactions(newtransactions);
  };
  const onDeleteTransaction = (id) => {
    const newTransaction = transactions.filter((item) => item.id !== id);
    setTransactions(newTransaction);
  };

  const onEditTransaction = (id) => {
    // find() => object ma muon edit
    const transaction = transactions.find((item) => item.id === id);

    // Set state editingTracsaction
    setEditingTransaction(transaction);
    setMode("edit");
  };

  const onUpdateTransactionData = (newData) => {
    const updatedIdx = transactions.findIndex((tx) => tx.id === newData.id);
    let updatedTransactions = [...transactions];
    updatedTransactions[updatedIdx] = newData;
    setTransactions(updatedTransactions);
    setMode("add");
  };

  return (
    <div className="App">
      <Browser>
        <ExpenseContext.Provider
          value={{
            onAddTransaction,
            transactions,
            onEditTransaction,
            setTransactions,
            onDeleteTransaction,
            editingTracsaction,
            onUpdateTransactionData,
            mode,
          }}
        >
          <Header></Header>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/LoginPage" element={<LoginPage />}></Route>
          </Routes>
        </ExpenseContext.Provider>
      </Browser>
    </div>
  );
}

export default App;
