import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import todoReducer from "./features/todo/todoSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const reducer = combineReducers({
    todo: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
});

export default store;
