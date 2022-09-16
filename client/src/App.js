import { useState } from 'react';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [doneTodo, setDoneTodo] = useState(0)

  const addTodo = () => {
    if(text.trim().length) {
      setTodos(
        [
          ...todos,
          {
            id:new Date().toISOString(),
            text,
            complete: false,
          } 
        ]
      )
      setText('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    setDoneTodo((prevState => prevState + 1))
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id !== id) {
          return todo
        }
        else {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
      })
    )
  }

  return (
    <div className='py-2 px-2 flex items-start justify-center flex-col'>
      <InputField 
        addTodo={addTodo} 
        text={text} 
        handleInput={setText}   
      />

      <TodoList 
        todo={todos}
        done={doneTodo}
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;
