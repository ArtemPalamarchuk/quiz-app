import {QuestionsType} from "../../../../types";

export const createHtmlLayout = (selectedQuizQuestions: QuestionsType) => `<!DOCTYPE html>
<html lang="">
  <head>
    <title>Quiz Result</title>
  </head>
  <body>
    <div id="content" style="margin: 0 auto;"></div>
  </body>
  
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const content = document.getElementById("content");
      const quiz = \`${JSON.stringify(selectedQuizQuestions)}\`;
      
      const createQuestionBlock = (questionObj, quesNumber) => {
        const div = document.createElement("div");
        const question = document.createElement("p");
        question.className = 'question'
        const questionNumber = document.createElement("p");
        questionNumber.className = 'questionNumber'
        
        question.innerText = questionObj.question;
        questionNumber.innerText = 'Question: ' + quesNumber;
       
        questionObj.answers.forEach((answer, i) => {
          const answerP = document.createElement("p");
          answerP.className = 'answer'
          answerP.innerText = questionObj.answers[i].text;
          const span = document.createElement("span");
          
          const isCorrectAnswer = i + 1 === questionObj.correctAnswers[0]
          const isSelectedAnswer = i + 1 === questionObj.selectedAnswer
 
          if(isCorrectAnswer && isSelectedAnswer){
            answerP.style.backgroundColor = "#d4edda";
            answerP.appendChild(span);
            span.innerText = 'Your Answer';
          }else if(!isCorrectAnswer && isSelectedAnswer){
            answerP.style.backgroundColor = '#f8d7da';
            answerP.appendChild(span);
            span.innerText = 'Your Answer';
          }else if(isCorrectAnswer && !isSelectedAnswer){
            answerP.style.backgroundColor = '#dddddd';
            answerP.appendChild(span);
            span.innerText = 'Correct Answer';
          }
  
          div.appendChild(answerP);
       });
       
        div.prepend(question);
        div.prepend(questionNumber);
        content.appendChild(div);
      };
      
      const allQuestions = JSON.parse(quiz);
      allQuestions.forEach((el, i) => createQuestionBlock(allQuestions[i], i + 1))
    });
  
  </script>
  <style>
    * {
      font-family: Arial, serif;
    }
    .questionNumber{
      font-size: 20px;
      font-weight: bold;
      border-bottom: 1px solid black;
      margin-top: 20px;
      padding-bottom: 10px;
    }
    .question {
      font-weight: bold;
    } 
    .answer {
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin: 2px;
      padding: 10px;
      font-size: 16px;
      position: relative;
    }
    span {
      right: 20px;
      height: 28px;
      display: flex;
      color: white;
      top: 5px;
      background-color: darkgray;
      padding: 0 10px;
      font-size: 18px;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
    }
  </style>
</html>`;