import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    operations: [{
        id: 1,
        value: 100,
        category:"Car",
    }],
}

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        
    }
})

export const transactionReducer = transactionsSlice.reducer;