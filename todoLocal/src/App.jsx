import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './Context'
import { ToDoItem, TodoForm } from './Components'

function App() {
const [todos, setTodos] = useState([])
const addTodo = (todo) => {
  setTodos((prev) => [...prev, {
    ...todo,
    id: Date.now() 
  }])
}

const updateTodo = (id, todo) => {
  setTodos((prev) => {
    prev.map((prevTodo) => ( prevTodo.id === id ? todo: prevTodo))
  })
}
const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}
const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !(prevTodo.completed)}: prevTodo))
}

useEffect(() => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    const new_todos = JSON.parse(storedTodos)
    if(new_todos && new_todos.length > 0)setTodos(new_todos)
  }
}, [])

useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))
}, [todos])
  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className="w-full">
                            <ToDoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
