import Step from "./Step/Step";
import {step1, step2, step3} from "@assets/images";
import './Description.scss'

const stepState = [
  {
    src: step1,
    title: "Start Test",
    description: "Test your knowledge on our page with a test.",
  },
  {
    src: step2,
    title: "Test",
    description: "The test contains questions and has time limit. This is an informal test, but a great way to get a sense of your knowledge of this section.",
  },
  {
    src: step3,
    title: "Count the points",
    description: "You will receive n% of each correct answer. At the end of the test, the total score will be calculated from 100%."
  },
]

const Description = () => {
  return (
    <div className={'description'}>
      <h1 className={'description-title'}>
        Welcome to our online Test series. Here you can test your Skill and see how much you know about.
      </h1>
      <div className={'description-steps'}>
        {stepState.map(({src, title, description}, idx) =>
          <Step key={idx} src={src} title={title} description={description}/>
        )}
      </div>
    </div>
  )
};

export default Description