import React from 'react'

import Todo from './features/todo/Todo'
import { useDispatch, useSelector } from 'react-redux'
import TodoForm from './features/form/TodoForm';
import { clearAllTodos } from './features/todo/todoSlice';


export default function App() {
  const dispatch = useDispatch();
  const allTodos = useSelector(state => state.todo.todos);

  return (
    <div>
      <button onClick={() => dispatch(clearAllTodos())}>Clear All</button>
      <TodoForm />

      <div>
        {allTodos && allTodos.map((todo, index) => (
          <Todo key={index} id={todo.id} title={todo.title} description={todo.description} />
        ))}
      </div>
    </div>
  )
}
