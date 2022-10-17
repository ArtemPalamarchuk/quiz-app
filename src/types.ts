export interface Quiz {
  id: string,
  quizTitle: string,
  questions: QuestionsType
  img?: string
}

export type QuestionType = {
  correctAnswers: Array<number>,
  question: string,
  answers: AnswersType,
  selectedAnswer: null | number,
  id: number,
}

export type AnswerType = {
  text: string,
  id: number,
}

export type AnswersType = Array<AnswerType>
export type QuestionsType = Array<QuestionType>
export type Quizzes = Record<string, Quiz>