import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = todoText.trim();
    if (trimmedText !== '') {
      addTodo({
        id: Date.now(),
        text: trimmedText,
        completed: false
      });
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a task"
      />
    </form>
  );
}


function TodoItem({ todo, toggleComplete, deleteTodo }) {
  const { id, text, completed } = todo;

  return (
    <div className={completed ? 'completed' : ''}>
      <span onClick={() => toggleComplete(id)}>{text}</span>
      <button className="delete" onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
}

function App() {
const [todos, setTodos] = useState([]);

const addTodo = (todo) => {
  setTodos([...todos, todo]);
};

const toggleComplete = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

return (
  <div>
    <h1>Todo List</h1>
    <TodoForm addTodo={addTodo} />
    <div id="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  </div>
);
}




export default App;

