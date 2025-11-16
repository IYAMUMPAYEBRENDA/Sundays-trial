import React from 'react';

function TodoList() {
  const todos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy app', completed: false }
  ];

  return (
    <ul>
      {todos.map(todo => (
        <li 
          key={todo.id}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

