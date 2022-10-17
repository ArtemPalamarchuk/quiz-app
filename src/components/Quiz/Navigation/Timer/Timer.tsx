import {ColorFormat, CountdownCircleTimer} from "react-countdown-circle-timer";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {getQuizIsDone, setQuizIsDone} from "@store/quizSlice";
import './Timer.scss'

type TimePropsType = {
  isPlaying: boolean
  size: number
  strokeWidth: number
  colors: ColorFormat
}

const timerProps: TimePropsType = {
  isPlaying: true,
  size: 80,
  strokeWidth: 6,
  colors: "#16be00",
};

type dimensionType = 'sec' | 'min'

const renderTime = (dimension: dimensionType, time: number) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const minuteSeconds = 60;
const hourSeconds = 3600;
const halfAnHour = minuteSeconds * 30

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) => ((time % hourSeconds) / minuteSeconds) | 0;

export default function Timer() {
  const quizIsDone = useAppSelector(getQuizIsDone)
  const dispatch = useAppDispatch()

  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + halfAnHour; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const onComplete = () => {
    dispatch(setQuizIsDone(true))
  }

  return (
    <div className="timer">
      {!quizIsDone ?
      <>
        <CountdownCircleTimer
          {...timerProps}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={onComplete}
        >
          {({elapsedTime, color}) => (
            <span style={{color}}>
            {renderTime("min", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
          )}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => ({shouldRepeat: remainingTime - totalElapsedTime > 0})}
        >
          {({elapsedTime, color}) => (
            <span style={{color}}>
            {renderTime("sec", getTimeSeconds(elapsedTime))}
          </span>
          )}
        </CountdownCircleTimer>
      </> :
        <>
          <CountdownCircleTimer
            {...timerProps}
            duration={0}
            initialRemainingTime={0}
          >
            {() => <span>{renderTime("min", 0)}</span>}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            duration={0}
            initialRemainingTime={0}
          >
            {() => <span>{renderTime("sec", 0)}</span>}
          </CountdownCircleTimer>
        </>
      }

    </div>
  );
}
