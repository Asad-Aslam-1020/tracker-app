import { useSelector } from "react-redux";

export default function CurrentBalance() {
  let income = useSelector((store) => {
    return store.transactions.income;
  });

  let expense = useSelector((store) => {
    return store.transactions.expense;
  });
  return (
    <div id="current-balance">
      <h5 id="cb-heading">Current Balance</h5>
      <h3 id="currentBalance">${income - Math.abs(expense)}</h3>
    </div>
  );
}
