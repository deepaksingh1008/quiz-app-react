import React from 'react'

const QuizResult = ({result,retry}) => {
  console.log(result);
  return (
    <div className='result-screen'>
        <h2>Result: {result.percentage}%</h2>
        <p>Selected {result.correct} correct option out of {result.total} </p>
        <button onClick={retry}>Retry</button>
    </div>
  )
}

export default QuizResult