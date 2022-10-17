const quizIdLS = 'quiz-id'

export const setQuizIdToLS = (quizId: string) => localStorage.setItem(quizIdLS, quizId);
export const getQuizIdFromLS = () => localStorage.getItem(quizIdLS);
export const removeQuizIdFromLS = () => localStorage.removeItem(quizIdLS);