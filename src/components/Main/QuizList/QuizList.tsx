import {BaseSyntheticEvent} from "react";
import {useNavigate} from 'react-router-dom';
import {getAllQuizzes} from "@store/quizSlice";
import {setSelectedTest, setQuizIsDone} from '@store/quizSlice'
import {camelToKebab} from "../../../utils/textFormatter";
import {setQuizIdToLS} from "../../../utils/localStorage";
import {quiz} from "../../../assets/images";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import './QuizList.scss'

const QuizList = () => {
  const allQuizzes = useAppSelector(getAllQuizzes);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const startQuiz = (e: BaseSyntheticEvent) => {
    const quizId = e.target.id;

    if (!quizId) return

    dispatch(setSelectedTest(allQuizzes[quizId]))
    dispatch(setQuizIsDone(false))
    setQuizIdToLS(quizId);
    navigate(`/${camelToKebab(quizId)}`)
  }

  return (
    <div className={'quiz-list-container'}>
      <img className={'quiz-img'} src={quiz} alt="quiz"/>
      <h1>Choose your test</h1>
      <div className={'quiz-list'} onClick={startQuiz}>
        {Object.keys(allQuizzes).map(quizKey => {
          const {id, img, quizTitle} = allQuizzes[quizKey]
          return (
            <div className={'quiz'} key={id}>
              <div className={'quiz-overlay'} id={id}/>
              <div className={'quiz-content'}>
                <img src={img} alt={'quiz'}/>
                <p className={'quiz-content-title'}>{quizTitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default QuizList
