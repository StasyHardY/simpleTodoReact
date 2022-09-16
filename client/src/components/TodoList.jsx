import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todo, toggleComplete, deleteTodo, done }) => {
  return (
    <ul>
      {
         todo.map(todos => 
         <TodoItem 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
            key={todo.id} 
            {...todos} 
         />)
      }
      <div class="py-2">
         <p className='text-black'>Всего задач: {todo.length}</p>
         <p className='text-black'>Выполненных задач: {done}</p>
      </div>
    </ul>
  )
}

export default TodoList