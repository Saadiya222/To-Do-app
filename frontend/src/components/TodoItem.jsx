import './TodoItem.css'

function TodoItem({ todo, onUpdate, onDelete }) {
  const handleToggle = () => {
    onUpdate(todo.id, { completed: !todo.completed })
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      onDelete(todo.id)
    }
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <h3>{todo.title}</h3>
          {todo.description && <p>{todo.description}</p>}
        </div>
      </div>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoItem
