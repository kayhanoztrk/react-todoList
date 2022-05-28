import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, title: "Go to shopping", completed: false },
  { id: 2, title: "Eat some pizza", completed: true }
];

function App() {
  const [todoList, setTodoList] = useState(INITIAL_STATE);
  const [newTodo, setNewToDo] = useState('');

  const addNewTodo = (title) => {
    setTodoList([...todoList,{id: Date.now(), title: title, completed: false}]);
    setNewToDo('');
  }


  const markCompleted = (id) => {
    setTodoList(
      todoList.map((el) => el.id === id ? {...el, completed:!el.completed} : el)
      );
  }

  const clearCompleted = () => {
    setTodoList(todoList.filter(todo => !todo.completed));
  }

  return (
    <div className="App">
      <h1>TODO List</h1>
      <div className="inserted_form">
        <input type="text" onChange={(e) => setNewToDo(e.target.value)} placeholder="Add to List" />
        <button onClick={() => 
        {
          addNewTodo(newTodo);
        }}>Add Todo</button>
      </div>
      <div className="todo_list">
      {
        todoList.map((todo) => (
          <div 
          key={todo.id}
          onClick={() => {
           markCompleted(todo.id);
          }}
           className={todo.completed ? 'completed' : ''}>
            {todo.title}
          </div> 
        ))
      }
      </div>
      <button 
      onClick={() => clearCompleted()}
      className="clear_all">Clear Completed All</button>
    </div>
  );
}

export default App;
