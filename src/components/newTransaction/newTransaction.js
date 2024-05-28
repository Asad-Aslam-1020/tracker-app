import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTransaction } from "../../store/slices/transaction";

export default function NewTransaction() {
  let dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitTransaction = (data) => {
    reset();
    let id = Math.random() * 10000;
    let newData = { ...data, id };
    dispatch(addTransaction(newData));
  };
  return (
    <div id="newTransaction">
      <div id="newTransaction-container">
        <h5 id="newTransaction-heading">Add New Transaction</h5>
        <form
          onSubmit={handleSubmit(submitTransaction)}
          id="newTransaction-input"
        >
          <p id="descriptionContainer">
            <b id="description">Description</b>
            <input
              type="text"
              {...register("purpose", { required: true })}
              id="discrition-input"
              required
              placeholder="Enter Reason"
            />
          </p>
          <p id="transaction-amountContainer">
            <b id="transaction-amount">Transaction Amount</b>
            <input
              type="Number"
              {...register("amount", { required: true })}
              id="amount-input"
              required
              placeholder="Enter Amount"
            />
          </p>
          <button id="addTransaction-btn">Add Transaction</button>
        </form>
      </div>
    </div>
  );
}
