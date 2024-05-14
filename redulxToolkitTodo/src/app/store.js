import {configureStore} from '@reduxjs/toolkit'
// import todoReducer fr
import todoReducer  from '../features/todo/todoSlice'
export const store = configureStore({
    reducer: todoReducer
})