import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');
  const handleClick = async () => {
     const response = await fetch('https://api.adviceslip.com/advice');
     const data = await response.json();
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
        console.log(data);
  }

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  };
  fetchData();
}, []);


  return (
    <div className="app">
        <div className='card_container'>
          <h1>advice #{adviceId}</h1>
          <span>"{advice}"</span>
          <span></span>
          <button onClick={handleClick}> </button>
        </div>
    </div>
  )
}

export default App