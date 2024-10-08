import React,{useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import EditTodoForm from "./EditTodo"
import {v4 as uuidv4} from "uuid"
import Todo from './Todo'
uuidv4()

const TodoWrapper = () => {
    const [todos,setTodos]=useState([])

    const addTodo=todo=>{
        console.log(todo)
        setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditting:false}])
    }
    const deleteTodo=id=>{
      setTodos(todos.filter(todo=>todo.id !==id))
    }
    const editTodo=(id)=>{
      console.log("edit me")
      setTodos(todos.map((todo)=>todo.id==id?{...todo,isEditting: !todo.isEditting}:todo))
    }
    const editTask =(task,id)=>{
      setTodos(todos.map(todo=>todo.id===id ?{...todo,task:task,isEditting:!todo.isEditting}:todo))
    }
   
    
  return (
    <div className='TodoWrapper'> 
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index)=> todo.isEditting ?  (<EditTodoForm  editTodo={editTask} key={index}  task={todo}/>):(<Todo task={todo} key={index}  deleteTodo={deleteTodo} editTodo={editTodo}/>))}
    </div>
  )
}

export default TodoWrapper
