import { useEffect } from 'react'
import { useState } from 'react'


function App() {
  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(2)

  useEffect(() => {
    alert("I am clicked")
    console.log("Hello, i am clicked")
  }, [num])

  return (
    <>
      <button onClick={() => {
        setNum(num + 1)
      }}>
        click me {num} 
      </button>
      <br/>
      <br/>
      <button onClick={() => {
        setNums(nums + 1)
      }}>
        click me {nums} 
      </button>
    </>
  )
}

export default App
