
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import QuizScreen from './components/QuizScreen';
import JoinScreen from './components/JoinScreen';
function App() {
  const [isQuizStarted,setIsQuizStarted] = useState(false);

  return (
    <>
       <NavBar/>    
       <div  className='quiz-container'>
        {
          isQuizStarted ? (
            <QuizScreen retry={()=>setIsQuizStarted(false)}/>
          ) : (<JoinScreen start={()=>setIsQuizStarted(true)}/>)
        }
       </div>

    </>
  );
}

export default App;
