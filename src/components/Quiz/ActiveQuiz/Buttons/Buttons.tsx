import {getSelectedQuizQuestions} from "@store/quizSlice";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {setQuizIsDone, setAllAnswers, nextQuestion, previousQuestion} from "@store/quizSlice";
import {QuestionsType} from "../../../../types";
import {Button} from "../../../global/Button/Button";
import styles from "../../../../styles";
import './Buttons.scss'

const {colors: {buttons}} = styles

export const Buttons = () => {

  const selectedQuizQuestions = useAppSelector(getSelectedQuizQuestions);
  const dispatch = useAppDispatch()

  const checkAllAnswers = (questions: QuestionsType) => {
    const unAnsweredArr = questions.filter(item => item.selectedAnswer === null);
    return unAnsweredArr.length
  };

  return (<div className={'buttons-block'}>
    {!checkAllAnswers(selectedQuizQuestions)
      ? <Button onClick={() => dispatch(setQuizIsDone(true))}>Finish test</Button>
      : <>
        <Button background={buttons.darkgrey} onClick={() => dispatch(previousQuestion())}>Previous</Button>
        <Button background={buttons.darkgrey} onClick={() => dispatch(nextQuestion())}>Next</Button>
        <Button onClick={() => dispatch(setAllAnswers())}>Fast Finish</Button>
      </>
    }
  </div>)

};

export default Buttons;






