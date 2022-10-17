import {chooseQuestion, getActiveQuestion, getSelectedQuizQuestions} from "@store/quizSlice";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import './Navlist.scss'

export const NavList = () => {
  const activeQuestionIdx = useAppSelector(getActiveQuestion)
  const selectedQuizQuestions = useAppSelector(getSelectedQuizQuestions)
  const dispatch = useAppDispatch()

  return (
    <ul className='nav-list'>
      {selectedQuizQuestions.map((item, idx) => {
        return (
          <li
            key={idx}
            className={`nav-list-item ${activeQuestionIdx === idx ? 'nav-list-active' : ''}`}
            onClick={() => dispatch(chooseQuestion(idx))}
          >
            <span>{idx + 1}</span>
            <span className={`question-status ${Number.isInteger(item.selectedAnswer) ? 'lime' : 'red'}`}/>
          </li>
        )
      })}
        </ul>
        )
      };

      export default NavList