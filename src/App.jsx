
import Navbar from "./components/Navbar";
import CarouselSection from "./components/Carousel";
import TodoSection from "./components/todo_section";
import AddTaskModal from "./components/AddTaskModal";
import { useState } from "react";
const todoInitial=[
  {
    id:1,
    tittle:"Tittle 1",
    description:"This is the discription of the todo",
    isCompleted:true

  },
  {
    id:2,
    tittle:"Tittle 2",
    description:"This is the discription of the todo",
    isCompleted:false

  }
]
function App() {
  const todoInitial=JSON.parse(localStorage.getItem("todolist")) || [];
  const [IsOpen,setIsOpen]=useState(false);
  const [todos,setTodo]=useState(todoInitial);
   function openmodal(){
    setIsOpen(true);
   }
   function closemodal(){
    setIsOpen(false);
   }


  
  return (
    <div >


      
      <Navbar/>
      
      <CarouselSection/>
      {IsOpen && <AddTaskModal closemodal={closemodal} setTodo={setTodo}/>}
      


      <TodoSection openmodal={openmodal} todos={todos} setTodo={setTodo}/>
      {/* <AddTaskModal/> */}
    </div>
  )
}

export default App
