import {configureStore} from '@reduxjs/toolkit';
import quizInitialState from "./quizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizInitialState,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
