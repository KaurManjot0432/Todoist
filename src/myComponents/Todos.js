import react, { useEffect, useState } from 'react';
import axios from 'axios';
import  { TodoItem } from './TodoItem';

export default function Todos({todos, getTodos}) {

    const url = 'localhost:3020/api/post/';

    useEffect(() => {
        getAllTodos();
    }, []);

    const  getAllTodos = async () => {
        try{
          const res = await axios.get("http://localhost:3020/api/post/")
          const posts = res.data.data;
          getTodos(posts);
        }catch(e){
          console.error(e);
        }
      }

    return (
        <div className="container">
            <h3>My Todos List</h3>
            {todos.length === 0 ? "No Todos to display!" :
                todos.map((todo) => {
                    return <TodoItem todo={todo} />
                })
            }

        </div>
    )
}


// export default function Todos(props) {
//     return (
//         <div className="container">
//             <h3>My Todos List</h3>
//             {this.state.todos.length===0?"No Todos to display!" :
//             this.state.todos.map((todo) => {
//                 return   <TodoItem todo = {todo} onDelete = {props.onDelete} /> 
//             })
//             }

//         </div>
//     )
// }

