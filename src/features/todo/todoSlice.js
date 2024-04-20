import { createSlice } from "@reduxjs/toolkit"
import { persistor } from "../../main"


const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
            })
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        clearAllTodos(state) {
            state.todos = []
            // persistor.pause();
            // persistor.flush().then(() => persistor.purge());
        }
    }
})

export const { addTodo, deleteTodo, clearAllTodos } = todoSlice.actions;
export default todoSlice.reducer;
