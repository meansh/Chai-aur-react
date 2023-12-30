import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [date, setDate] = useState(new Date())

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    
}, [])

  return (
   
      <p className='clock'>
        {date.toLocaleTimeString()}
      </p>
  )
}

export default App
