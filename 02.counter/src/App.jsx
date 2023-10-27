import {useState} from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)
 
  const addValue = () => {
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevcounter => prevcounter+1)
      
  }
  
  const removeValue = () => {
      setCounter(counter-1)
  }

  return (
    <>
    <div className='home'>
      <button onClick={addValue}>Add value: {counter}</button>
      <br/>
      <button onClick={removeValue}>remove value: {counter}</button>
      <p>Footer: {counter}</p>
    </div>
    </>
  )
}

export default App
