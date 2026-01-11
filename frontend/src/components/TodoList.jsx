import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ todos, onUpdateTodo, onDeleteTodo }) {
  if (!todos || todos.length === 0) {
    return <p className="empty-message">No todos yet. Add one to get started!</p>
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdateTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
