import { useState } from "react";
import TodoCard from "./TodoCard";
const TodoSection=({openmodal, todos, setTodo})=>{

    const initialview=localStorage.getItem("view")
    const [view,setview]=useState(initialview)
    function toggleview(){
        if(view==="grid"){
           setview("row")
           localStorage.setItem("view","row")

            
        }
        else{
             setview("grid")
             localStorage.setItem("view","grid")
        }
        
    }
   

    return(
        <div className=" p-8 flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl font-semibold ">ToDo</h1>
            <div className="gap-6 flex">
                <div><button  onClick={openmodal} className="border border-black/10
             bg-[#60B5FF] rounded-md px-4 py-1 mb-4 mt-2">Add Task</button></div>

                    <div className="pt-3 "><button onClick={toggleview}>{view==="grid"?"📜":"📁"}</button></div>
                    </div>

            

             <div className={`flex  flex-wrap gap-3  justify-center ${view==="grid"?"flex-row flex-wrap":"flex-col "} `}>
                 
            {todos.length<=0 && <p>The list is empty, Please enter some task.</p>}
                 {todos.map(todo=>{
                    if(!todo.isCompleted)
                    return <TodoCard  key={todo.id} todo={todo} setTodo={setTodo} view={view} />
                 })}
                 {todos.map(todo=>{
                    if(todo.isCompleted)
                    return <TodoCard key={todo.id}  todo={todo}  setTodo={setTodo} view={view} />
                 })}
                 



                </div>
            

        </div>


    )

}
export default TodoSection;