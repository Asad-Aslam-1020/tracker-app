import { useSelector } from "react-redux";
export default function IEbox() {
    let income = useSelector((store) => {
    return store.transactions.income;
  });

  let expense = useSelector((store) => {
    return store.transactions.expense;
  });
  return (
    <div id="IE-box">
      <div id="IE-container">
        <div id="incomeBox">
          <h5 id="income">Income</h5>
          <h3 id="incomeAmount">${income}</h3>
        </div>
        <div id="line"></div>
        <div id="expenseBox">
          <h5 id="expense">Expense</h5>
          <h3 id="expenseAmount">${Math.abs(expense)}</h3>
        </div>
      </div>
    </div>
  );
}
