const TodoCard = ({todo,setTodo,view}) =>{
    
    
   
    
    
    function toggleCompleted(){
        setTodo((prev)=>{
            const newTodos=prev.map((item)=>{
                if(item.id === todo.id){
                    item.isCompleted=!item.isCompleted;
                    return item;
                }
                return item;
            })
            return newTodos;
            
            
        })

        }
        
        const {tittle,description,isCompleted} = todo;

        if(view==="grid"){
            return(
                <div className=" h-[300px] w-[300px] bg-[#C3FF93] rounded-lg p-3 ">
            <div className="  flex justify-between items-center"><h3 className="">{tittle}</h3>
            
                <button onClick={toggleCompleted}> {isCompleted? "✅":<div className="h-4 w-4 border border-black"> </div>}</button>
           
            </div>
            
            <p className="text-sm">{description}</p>

            </div>


            )
        }
        else{
            return(
                <div className="  w-[300px]  bg-[#15F5BA] rounded-lg p-3 ">
            <div className="flex justify-between items-center"><h3 className="">{tittle}</h3>
            
                <button onClick={toggleCompleted}> {isCompleted? "✅":<div className="h-4 w-4 border border-black"> </div>}</button>
           
            </div>
            
            
            </div>
                
            )
        }
        


    
}
export default TodoCard;
