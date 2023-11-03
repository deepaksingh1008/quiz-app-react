import React, { useState } from 'react'
import QuestionList from "../data/question.json";
import QuizResult from './QuizResult'

import Question from './Question';
const QuizScreen = ({retry}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswer, setMarkedAnswer] = useState(new Array(QuestionList.length))
   console.log("QuestionList=>", QuestionList);
const isQuestionEnd = currentQuestionIndex == QuestionList.length;

function calculateResult(){
   let correct = 0;
   QuestionList.forEach((question,i)=>{
       if(question.correctOptionIndex == markedAnswer[i]){
        correct++;
       }
   });
   return {
       total:QuestionList.length,
       correct:correct,
       percentage:Math.trunc((correct/ QuestionList.length)*100)
   }
}

  return (
    <div className='quiz-screen'>
      {
        isQuestionEnd ? (
          <QuizResult
           result={calculateResult()}
           retry={retry}
          />
        ) : (
          <Question
            question={QuestionList[currentQuestionIndex]}
            totalQuestions={QuestionList.length}
            currentQuestion={currentQuestionIndex}
            setAnswer={(index)=>{
              setMarkedAnswer((arr)=>{
                let newArr = [...arr];
                newArr[currentQuestionIndex-1]= index;
                  return newArr;
              });
              setCurrentQuestionIndex(currentQuestionIndex+1);
            }}
          />
        )
      }
    </div>
  )
}

export default QuizScreen