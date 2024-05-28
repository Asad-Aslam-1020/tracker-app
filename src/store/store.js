import { configureStore } from "@reduxjs/toolkit";
import transaction from "./slices/transaction";

export const store = configureStore({
  reducer: {
    transactions: transaction,
  },
});
