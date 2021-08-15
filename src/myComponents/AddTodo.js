import React from 'react'

export const AddTodo = () => {
    return (
        <div className="container">
            <h4>Create a Todo</h4>
            <form>
                <div className="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <input type="text" class="form-control" id="desc" />
                </div>
                <button type="submit" class="btn btn-sm btn-success">Create</button>
            </form>
        </div>
    )
}
