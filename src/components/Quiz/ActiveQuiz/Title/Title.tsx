import {getQuizTitle} from "@store/quizSlice";
import {useAppSelector} from "@store/hooks";
import './Title.scss'

const Title = () => {
  const quizTitle = useAppSelector(getQuizTitle);

  return (
    <div className={'title'}>{quizTitle}</div>
  )
}

export default Title
