import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    operations: [{
        id: 1,
        date: "20.04.2012",
        type: "expense",
        sum: 100,
        category: "Car",
        comment:"",
    }],
}

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        
    }
})

export const transactionReducer = transactionsSlice.reducer;