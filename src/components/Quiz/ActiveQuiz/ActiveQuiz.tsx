import Title from "./Title/Title";
import AnswerList from './AnswersList/AnswersList'
import {getActiveQuestion, getSelectedQuizQuestions} from "@store/quizSlice";
import {useAppSelector} from "@store/hooks";
import {AnswersType} from "../../../types";
import './ActiveQuiz.scss'

interface ActiveQuizProps {
  answers: AnswersType,
  question: string,
}

const ActiveQuiz = ({question, answers}: ActiveQuizProps) => {
  const activeQuestion = useAppSelector(getActiveQuestion);
  const selectedQuizQuestions = useAppSelector(getSelectedQuizQuestions);

  return (
    <>
      <Title/>
      <div className={'question-block'}>
        <div className={'question'}>{activeQuestion + 1}. {question}</div>
        <div className={'current-question-number'}>Question {activeQuestion + 1} of {selectedQuizQuestions.length}</div>
      </div>
      <AnswerList answers={answers}/>
    </>
  )
};

export default ActiveQuiz;