import React from 'react'

//This is a functional component
export default function Footer() {
    // For styling using variables
    
    return (
        <footer className="bg-dark text-light py-3" >
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}

//There is also a class component in react such as

// import React, {Component} from 'react'

// class Users extends Component{
//     //Only method here is render
//     render(){
//         return <div> Test</div>
//     }
// }

// export default Users