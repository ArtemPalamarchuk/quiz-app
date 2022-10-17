import {getActiveQuestion, getAnswerLabels, getSelectedQuizQuestions} from "@store/quizSlice";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {setSelectedAnswer} from "@store/quizSlice";
import {AnswersType} from "../../../../types";
import './AnswersList.scss'

interface AnswerListProps {
  answers: AnswersType
}

const AnswerList = ({answers}: AnswerListProps) => {
  const answerLabels = useAppSelector(getAnswerLabels);
  const activeQuestion = useAppSelector(getActiveQuestion);
  const selectedQuizQuestions = useAppSelector(getSelectedQuizQuestions);
  const dispatch = useAppDispatch()

  const questionIndex = selectedQuizQuestions[activeQuestion].id
  const selectedAnswer = selectedQuizQuestions[activeQuestion].selectedAnswer

  const setAnswer = (answerId: number) => {
    dispatch(setSelectedAnswer({questionIndex, answerId}))
  }

  return (
    <ul className={'answers-list'}>
      {answers.map((answer, index) =>
        (
          <li
            className={`answers-list-item ${selectedAnswer! - 1 === index ? 'active-item' : ''}`}
            key={index}
            onClick={() => setAnswer(answer.id)}
          >
            <p className={'answer-label'}>{answerLabels[index]}</p>
            <p>{answer.text}</p>
          </li>
        )
      )}
    </ul>
  )
};

export default AnswerList;
