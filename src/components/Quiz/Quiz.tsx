import {useEffect} from 'react';
import Result from "./Result/Result";
import Buttons from "./ActiveQuiz/Buttons/Buttons";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import {Navigation} from "./Navigation/Navigation";
import {getQuizIdFromLS, removeQuizIdFromLS} from "../../utils/localStorage";
import {
  chooseQuestion,
  getActiveQuestion,
  getAllQuizzes,
  getQuizIsDone,
  getSelectedQuizQuestions,
  setSelectedTest
} from "@store/quizSlice";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {useLocation, useNavigate} from "react-router-dom";
import {pages} from "../../App";
import {Modal} from "../global/Modal/Modal";
import './Quiz.scss'

export const Quiz = () => {
  const navigate = useNavigate()

  const allQuizzes = useAppSelector(getAllQuizzes)
  const selectedQuizQuestions = useAppSelector(getSelectedQuizQuestions)
  const activeQuestion = useAppSelector(getActiveQuestion)
  const quizIsDone = useAppSelector(getQuizIsDone)
  const dispatch = useAppDispatch()

  const location = useLocation();
  const currentUrl = location.pathname

  const alertForwardButton = () => {
    const result = confirm('You will lose your progress. Want to leave? ');
    if (result) {
      removeQuizIdFromLS()
      navigate(pages.main)
    } else {
      navigate(currentUrl)
    }
    window.removeEventListener("popstate", alertForwardButton);
  };

  useEffect(() => {
    const quizId = getQuizIdFromLS();
    const selectedQuiz = {...allQuizzes[quizId!]};
    dispatch(chooseQuestion(0));
    quizId ? dispatch(setSelectedTest(selectedQuiz)) : navigate(pages.main)
    window.addEventListener("popstate", alertForwardButton);
  }, []);

  return (
    <div className={'quiz-container'}>
      <div className={'active-tests'}>
        {selectedQuizQuestions.map(item => {
          const {answers, question, id} = item;
          return (id === activeQuestion && <ActiveQuiz key={id} question={question} answers={answers}/>)
        })}
        <Buttons/>
        {quizIsDone &&
          <Modal title="Result" hasCloseImg={false}>
            <Result/>
          </Modal>
        }
      </div>
      <Navigation/>
    </div>
  )
};