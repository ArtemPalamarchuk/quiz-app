import {getSelectedQuizQuestions} from "@store/quizSlice";
import {useAppSelector} from "@store/hooks";
import './Progress.scss'

export const Progress = () => {
  const selectedQuizQuestions = useAppSelector(getSelectedQuizQuestions)

  const quizPercentDone = () => {
    const answersCount = selectedQuizQuestions.length;
    const completedTestsCount = selectedQuizQuestions.filter(item => item.selectedAnswer !== null);
    const percentage = (completedTestsCount.length * 100) / answersCount;

    return (!Number.isInteger(percentage)) ? percentage.toFixed(1) : percentage;
  };

  return (
    <div className={'progress-block'}>
      <div className={'progress-status'}>
        <p>Progress:</p>
        <p>{quizPercentDone()}%</p>
      </div>
      <div className={'progress'}>
        <div className={'current'} style={{'width': quizPercentDone() + '%'}}></div>
      </div>
    </div>
  )
};

export default Progress
