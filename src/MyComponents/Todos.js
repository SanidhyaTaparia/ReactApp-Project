import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
    <div className="container">
        {/* Here text-center className has come from Bootsrap css */}
        <h3 className="my-3"> Todos List : </h3>
        {/* map function takes an array as argument(here props.todos) and returns an array that is converted */}
        {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
            return(
                <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                <hr/>
                </>
            )
        })
        }
    </div>
    )
}
