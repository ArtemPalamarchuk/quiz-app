import downloadTxt from "download-as-file"
import {camelToKebab} from "../../../utils/textFormatter";
import {createHtmlLayout} from "./layouts/htmlResultLayout";
import {createTxtLayout} from "./layouts/txtResultLayout";
import {getSelectedQuizQuestions, getQuizId} from "@store/quizSlice";
import {useAppSelector} from "@store/hooks";
import {useNavigate} from "react-router-dom";
import {pages} from "../../../App";
import {removeQuizIdFromLS} from "../../../utils/localStorage";
import {Button} from "../../global/Button/Button";
import styles from "../../../styles";
import './Result.scss'

const {colors: {buttons}} = styles


const Result = () => {
  const quizId = useAppSelector(getQuizId)
  const selectedQuizQuestions = useAppSelector(getSelectedQuizQuestions)
  const navigate = useNavigate()

  const downloadResultInTxt = () => downloadTxt({
    data: createTxtLayout(selectedQuizQuestions),
    filename: `${camelToKebab(quizId)}-result.txt`
  });

  const downloadResultInHtml = () => downloadTxt({
    data: createHtmlLayout(selectedQuizQuestions),
    filename: `${camelToKebab(quizId)}-result.html`
  });

  const chooseAnotherQuiz = () => {
    removeQuizIdFromLS()
    navigate(pages.main)
  }

  const answers = selectedQuizQuestions.map(item => item.correctAnswers.find((element: number) =>
    element === item.selectedAnswer
  ));

  const questionsCount = answers.length;
  const correctAnswersCount = answers.filter(item => item);
  const percent = (correctAnswersCount.length * 100) / questionsCount;

  return (
    <div className='result-modal'>
      <p className={'result-modal_percent'}>{Math.round(percent)}%</p>
      <p className={'result-modal_correct-answers'}>
        Correct answers: {correctAnswersCount.length} / {questionsCount}
      </p>
      <div className="result-modal-buttons">
        <Button onClick={downloadResultInTxt}>Download in txt</Button>
        <Button onClick={downloadResultInHtml}>Download in html</Button>
        <Button background={buttons.darkgrey} onClick={chooseAnotherQuiz}>Choose another quiz</Button>
      </div>
    </div>
  )
};

export default Result
