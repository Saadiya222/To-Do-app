import { useState, useEffect } from 'react'
import axios from 'axios'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_URL = '/api/todos'

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      setLoading(true)
      const response = await axios.get(API_URL)
      console.log('API Response:', response.data)
      // Handle different response formats
      const todoData = response.data.data || response.data || []
      setTodos(Array.isArray(todoData) ? todoData : [])
      setError(null)
    } catch (err) {
      setError(`Failed to load todos: ${err.message}`)
      console.error('API Error:', err)
      setTodos([])
    } finally {
      setLoading(false)
    }
  }

  const addTodo = async (title, description) => {
    try {
      const response = await axios.post(API_URL, {
        title,
        description
      })
      setTodos([...todos, response.data])
    } catch (err) {
      setError('Failed to add todo')
      console.error(err)
    }
  }

  const updateTodo = async (id, updates) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updates)
      setTodos(todos.map(todo => todo.id === id ? response.data : todo))
    } catch (err) {
      setError('Failed to update todo')
      console.error(err)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      setTodos(todos.filter(todo => todo.id !== id))
    } catch (err) {
      setError('Failed to delete todo')
      console.error(err)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>My Todo App</h1>
        
        {error && <div className="error">{error}</div>}
        
        <TodoForm onAddTodo={addTodo} />
        
        {loading ? (
          <p className="loading">Loading todos...</p>
        ) : (
          <TodoList 
            todos={todos}
            onUpdateTodo={updateTodo}
            onDeleteTodo={deleteTodo}
          />
        )}
      </div>
    </div>
  )
}

export default App
