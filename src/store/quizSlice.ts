import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "./store";
import {tests} from '../mocks/tests'
import {Quiz, Quizzes} from "../types";

export interface QuizState {
  allQuizzes: Quizzes,
  selectedQuiz: Quiz,
  activeQuestion: number,
  answerLabels: Array<string>,
  quizIsDone: boolean,
}

const quizInitialState: QuizState = {
  allQuizzes: tests,
  selectedQuiz: {
    id: "",
    quizTitle: "",
    questions: [],
  },
  activeQuestion: 0,
  answerLabels: ['A', 'B', 'C', 'D'],
  quizIsDone: false,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: quizInitialState,
  reducers: {
    setSelectedTest: (state, action: PayloadAction<Quiz>) => {
      state.selectedQuiz = action.payload
    },
    setQuizIsDone: (state, action: PayloadAction<boolean>) => {
      state.quizIsDone = action.payload
    },
    setAllAnswers: (state) => {
      state.selectedQuiz.questions = [
        ...state.selectedQuiz.questions.map(question => Object.assign({...question}, {selectedAnswer: 1}))
      ]
    },
    nextQuestion: (state) => {
      if (state.activeQuestion !== state.selectedQuiz.questions.length - 1) {
        state.activeQuestion = state.activeQuestion + 1
      }
    },
    previousQuestion: (state) => {
      if (!(state.activeQuestion === 0)) {
        state.activeQuestion = state.activeQuestion - 1
      }
    },
    chooseQuestion: (state, action: PayloadAction<number>) => {
      state.activeQuestion = action.payload
    },
    setSelectedAnswer: (state, action: PayloadAction<{ questionIndex: number, answerId: number }>) => {
      const {questionIndex, answerId} = action.payload;
      state.selectedQuiz.questions[questionIndex].selectedAnswer = answerId
    },
  },
});

export const {
  setSelectedTest,
  setQuizIsDone,
  setAllAnswers,
  nextQuestion,
  previousQuestion,
  chooseQuestion,
  setSelectedAnswer,
} = quizSlice.actions;

export const getQuizId = (state: RootState) => state.quiz.selectedQuiz.id;
export const getQuizTitle = (state: RootState) => state.quiz.selectedQuiz.quizTitle;
export const getAllQuizzes = (state: RootState) => state.quiz.allQuizzes;
export const getQuizIsDone = (state: RootState) => state.quiz.quizIsDone;
export const getSelectedQuiz = (state: RootState) => state.quiz.selectedQuiz;
export const getAnswerLabels = (state: RootState) => state.quiz.answerLabels;
export const getActiveQuestion = (state: RootState) => state.quiz.activeQuestion;
export const getSelectedQuizQuestions = (state: RootState) => state.quiz.selectedQuiz.questions;

export default quizSlice.reducer;
