import { useCallback, useState } from 'react'
import Todos from "./Todos"

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const increment = () => {
    setCount(count + 1)
  }

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`])
  }, [todos]) //todos is the dependency for useCallback to run

  
  // const addTodo = () => {
  //   setTodos((prev) => [...prev, `new Entry`])
  // }
  
  return (
    <>
      <Todos todos = {todos} addTodo = {addTodo}>  
      </Todos>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}> +</button>
      </div>
    </>
  )
}

export default App
