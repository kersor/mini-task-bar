import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../types/Types";

interface ITaskAndDeleteChangeTask {
    arrTasks: ITask[],
    deleteChangeTasks: number[]
}

const initialState:ITaskAndDeleteChangeTask = {
    arrTasks: [],
    deleteChangeTasks: []
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action) => {
            const actPay = action.payload
            if(actPay.length !== undefined) actPay.map((item: ITask) => state.arrTasks.push(item))
            else state.arrTasks.push(action.payload)
        },
        deleteAllTask: (state) => {
            state.arrTasks.splice(0)
        },
        addDeleteChangeTask: (state, action) => {
            state.deleteChangeTasks.push(action.payload)
        },
        deleteChangeTask: (state) => {
            state.arrTasks = state.arrTasks.filter(item => !state.deleteChangeTasks.includes(item.id))
            state.deleteChangeTasks = []
        }
    }
})

export const { createTask, deleteAllTask, addDeleteChangeTask, deleteChangeTask } = taskSlice.actions

export default taskSlice.reducer