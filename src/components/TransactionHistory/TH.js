import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../store/slices/transaction";

export default function TransactionHistory() {
  let dispatch = useDispatch();
  let transactions = useSelector((store) => {
    return store.transactions.transactions;
  });
  return (
    <div id="TH">
      <div id="THistory">
        <h5 id="TH-heading">Transaction History</h5>
        <ul id="TH-container">
          {transactions.map((transaction, ind) => (
            <li
              key={ind}
              className={
                transaction.amount < 0
                  ? "transactionExpense transaction"
                  : "transactionIncome transaction"
              }
            >
              <div id="transactionData-container">
                <div>{transaction.purpose}</div>
                <div>${Math.abs(transaction.amount)}</div>
              </div>
              <button id="delete-Btn" onClick={()=>
                dispatch(deleteTransaction(transaction.id))
              }>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
