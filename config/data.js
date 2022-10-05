const categories = [
  {
    id: "income",
    value: "Income",
    subCategory: [
      { id: "business", value: "Business" },
      { id: "investment", value: "Investment" },
      { id: "lottery", value: "Lottery" },
      { id: "gift", value: "Gift" },
      { id: "salary", value: "Salary" },
      { id: "rental_income", value: "Rental_income" },
      { id: "deposits", value: "Deposits" },
    ],
  },
  {
    id: "expense",
    value: "Expense",
    subCategory: [
      { id: "bill", value: "Bill" },
      { id: "car", value: "Car" },
      { id: "clothes", value: "Clothes" },
      { id: "travel", value: "Travel" },
      { id: "shopping", value: "Shopping" },
    ],
  },
];
module.exports = {
  categories,
};
