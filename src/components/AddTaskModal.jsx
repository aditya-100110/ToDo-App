import { useState } from "react"

const AddTaskModal=({closemodal,setTodo})=>{
    const [tittle,setTittle]=useState("");
    const [description,setDescription]=useState("");

    function addtodo(){
        

        const newtodo={
            tittle,
            description,
            isCompleted:false,
            id: Date.now()
        }
         let newtodos;
        setTodo((prev)=>{
           newtodos=[newtodo, ...prev];
           return newtodos;
          

        })
        localStorage.setItem("todolist",JSON.stringify(newtodos));

        closemodal();

       
        

    }
    const [theme,settheme]=useState("green")
    function themechange(){
        if(theme==="green"){
           settheme("black")
        }
        else{
           settheme("green")
        }


        



    }


    return(
        <div  onClick={closemodal}  className="fixed
         top-0 left-0 h-screen w-screen backdrop-blur-sm flex justify-center items-center  ">
            <div onClick={(e)=>{e.stopPropagation()}} className={`relative h-[50vh] w-[400px]  flex flex-col rounded-md p-4 gap-2 ${theme==="green"?"bg-[#36f8ef]":"bg-black"}`}>
                <button onClick={closemodal} className="absolute -top-2 -right-2">❌</button>
                <button className={`absolute border border-solid  h-5 w-5 right-5 -top-5 ${theme==="green"?"bg-black":"bg-[#36f8ef]  border-black"}`} onClick={themechange}></button>

                <input value={tittle} onInput={(e)=>setTittle(e.target.value)} type=" text " placeholder="Enter your ToDo tittle here.. " className="w-full p-2"/>
                <textarea  value={description} onInput={(e)=>setDescription(e.target.value)} name="" id="" className=" w-full h-full max-h-full p-3 rounded-sm" placeholder="Add description...."></textarea>
                <button onClick={tittle?addtodo:closemodal} className="bg-[#63f591] py-2">Click to Add</button>
            </div>

        </div>

    )
ff
}
export default AddTaskModal;