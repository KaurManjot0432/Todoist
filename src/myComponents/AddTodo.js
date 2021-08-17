import React from 'react';
import axios from 'axios';

const url = "http://localhost:3020/api/post/";

export const AddTodo = ({todos, getTodos}) => {

    const [ title, setTitle ] = React.useState(null);
    const [ content, setContent ] = React.useState(null);
   

    async function createPost(e){
        e.preventDefault();
        if(!title || !content)
            alert("Title or Description is not mentioned!")
        const res = await axios.post("http://localhost:3020/api/post/",{title : title, content : content})
        getTodos({...todos, res});
       
    }


    
    return (
        <div className="container">
            <h4>Create a Todo</h4>
            <form onSubmit={createPost}>
                <div className="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <input type="text" value={content} onChange={(e)=>{setContent(e.target.value)}} class="form-control" id="desc" />
                </div>
                <button type="submit" class="btn btn-sm btn-success">Create</button>
            </form>
        </div>
    )
}
