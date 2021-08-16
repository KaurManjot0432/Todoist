import React from 'react';
import axios from 'axios';

const url = "http://localhost:3020/api/post/";

export const AddTodo = () => {

    const [ post, setPost ] = React.useState(null);

    React.useEffect(() => {
        axios.get
    })
    
    return (
        <div className="container">
            <h4>Create a Todo</h4>
            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" value={this.state.title} onChange={this.onChangeUserTitle} class="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <input type="text" value={this.state.content} onChange={this.onChangeUserContent} class="form-control" id="desc" />
                </div>
                <button type="submit" class="btn btn-sm btn-success">Create</button>
            </form>
        </div>
    )
}
