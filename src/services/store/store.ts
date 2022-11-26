import { configureStore } from '@reduxjs/toolkit'
import { thronesApi } from '../api/thronesApiSlice'
import counterReducer from './counterSlice/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [thronesApi.reducerPath]: thronesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thronesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
