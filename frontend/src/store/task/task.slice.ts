import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../types/Types";

const initialState:ITask[] = []

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action) => {
            const actPay = action.payload
            if(actPay.length !== undefined) actPay.map((item: ITask) => state.push(item))
            else state.push(action.payload)
        }
    }
})

export const { createTask } = taskSlice.actions

export default taskSlice.reducer