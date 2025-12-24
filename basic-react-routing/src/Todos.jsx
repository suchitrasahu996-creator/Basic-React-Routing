import { useEffect,useState } from "react";



function Todos() {
    const[todos,setTodos]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then (res=>res.json())
        .then(data => setTodos (data.slice(0,10)));


    },[]);
  return (
    <div>

      <h2> Todos </h2>

      <div className="container">
        {todos.map(todo=>(
            <div key={todo.id} className="card">
                <h2>{todo.title}</h2>
                <p>
                    status:{" "}
                    <strong>
                        {todo.completed ? "Completed" : "Not Completed"}
                    </strong>
                </p>
                </div>

        ))}
      </div>
    </div>
  );
}

export default Todos;
