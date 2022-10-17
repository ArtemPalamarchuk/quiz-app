import {QuestionsType, QuestionType} from "../../../../types";

export const createTxtLayout = (questions: QuestionsType) => {
  const textForHtml = questions.map((questionObj: QuestionType, index: number) => {
    const correctAnswerIndex = questionObj.correctAnswers[0];
    const correctAnswer = questionObj.answers[correctAnswerIndex - 1].text;
    return `\nQuestion ${index + 1}: ${questionObj.question} \nAnswer   ${index + 1}: ${correctAnswer} \n`
  });

  return textForHtml.join(' ');
};