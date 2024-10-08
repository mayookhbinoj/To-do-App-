import React,{useState}from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState("")
    const handleSubmit=e=>{
        e.preventDefault()
        addTodo(value)
        setValue("")
        

    }
  return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}> 
          <h1>Welcome</h1>
            <input type='text' className='todo-input'  placeholder='what is your task is today' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit' className='todo-btn' >Add task</button>
        </form>
      
    </div>
  )
}

export default TodoForm
