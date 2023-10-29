import { configureStore } from "@reduxjs/toolkit";
import { transactionReducer } from "./transactionsSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        transactions: transactionReducer,
    }
})