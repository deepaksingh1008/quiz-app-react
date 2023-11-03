import React from 'react'

const JoinScreen = ({start}) => {
  return (
    <div className='join-screen'>
      <h2>Join Quiz</h2>
      <p></p>
      <button onClick={start}>Start</button>
    </div>
  )
}

export default JoinScreen