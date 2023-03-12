import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editComplete: (state, action) => {
            const task = state.find(task => task.id == action.payload);
            if (task) {            
                state[state.indexOf(task)].completed = !task.completed;
            }
        },
        editImportant: (state, action) => {
            const task = state.find(task => task.id == action.payload);
            if (task) {            
                state[state.indexOf(task)].important = !task.important;
            }
        },
        deleteTask: (state, action) => {
            const task = state.find(task => task.id == action.payload);
            if (task) {
                state.splice(state.indexOf(task), 1)
            }
        }
    }
});

export const { addTask, editComplete, editImportant, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;