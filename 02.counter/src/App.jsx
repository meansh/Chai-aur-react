import {useState} from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)
 

  const addValue = () => {
    if(counter >= 20)
      setCounter = 20
    
    else  
      counter = counter + 1
      setCounter(counter)
    
  }
  
  const removeValue = () => {
   
    if(counter <= 0)
      setCounter = 0   
    else
      setCounter(counter - 1)
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
