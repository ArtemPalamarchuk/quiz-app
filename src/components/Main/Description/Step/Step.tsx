import './Step.scss'

interface StepProps {
  src: string,
  title: string,
  description: string,
}

const Step = ({src, title, description}: StepProps) => {
  return (
    <div className={'quiz-step'}>
      <img className={'quiz-step-img'} src={src} alt="step"/>
      <p className={'quiz-step-title'}>{title}</p>
      <p className={'quiz-step-description'}>{description}</p>
    </div>
  )
};

export default Step
