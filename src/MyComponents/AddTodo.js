import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");//Use state hook is used, initially we are saying that keep the title as blank and then later execute setTitle
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            // here addTodo will be coming from props(addTodo={addTodoFunction}) and the logic of function will be written in app.js
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            {/* onSubmit={function} indicates that by clicking on submit, that function is executed */}
            <form onSubmit={submit}>
                <div className="mb-3">
                    {/* Here we should use htmlFor and className instead of for= and class */}
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    {/* value={title} means that the initial value is title */}
                    {/* if we do not use onChange ={setTitle} function, then we will not be able to type anything */}
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
