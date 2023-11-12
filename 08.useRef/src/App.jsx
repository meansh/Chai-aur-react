import { useState, useEffect, useRef } from 'react'

function App() {
  //const [count, setCount] = useState(0)
  const [myData, setMyData] = useState("")

  const count = useRef(1)

  console.log("Count", count)
  
  useEffect(() => {
    count.current = count.current + 1
  })

  return (
    <>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}>
      </input>
      <p>The number of times render: {count.current}</p>   
    </>
  )
}

export default App
