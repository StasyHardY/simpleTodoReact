import React from 'react'

const InputField = ({addTodo, text, handleInput}) => {
  return (
    <label >
      <input 
         className='bg-green-200 px-2 py-2 rounded-lg placeholder:text-xs ' 
         value={text}
         placeholder="Enter your today task..." 
         onChange={(e) => handleInput(e.target.value)} 

         />
      <button  
         className='ml-4 w-24 h-12  hover:underline text-black ' 
         onClick={addTodo}
      >
         Add todo
      </button>
   </label>
  )
}

export default InputField