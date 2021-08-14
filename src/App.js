import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Header from "./MyComponents/Header"
import { Todos } from "./MyComponents/Todos"
import { TodoItem } from "./MyComponents/TodoItem"
import Footer from "./MyComponents/Footer"
import { AddTodo } from "./MyComponents/AddTodo"
import {About} from "./MyComponents/About"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  //For storing the saved todos and deleted todos also
  let initTodo;
  if (localStorage.getItem("todoslist") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todoslist"));
  }

  // Here todo is  the parameter/argument of the function 
  const onDeleteFunction = (todo) => {
    console.log("I am deleted now!!!", todo)

    //LEARN FOR DELETION
    setTodos(todoslist.filter((e) => {
      return e !== todo
    }))

    console.log("deleted", todoslist)
    localStorage.setItem("todoslist", JSON.stringify(todoslist));

  }

  const addTodoFunction = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todoslist.length === 0) {
      sno = 0;
    }
    else {
      sno = todoslist[todoslist.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    //LEARN FOR INSERTION
    setTodos([...todoslist, newTodo]);
    console.log(newTodo);
  }

  const [todoslist, setTodos] = useState(initTodo);//this means that initial value is initTodo
  //This useEffect function says that if setTodos is called then assign the initTodo as initial value of todos list 
  useEffect(() => {
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }, [todoslist])



  return (
    <>
      <>
        <Router>
          <Header title="My Todos" />
          {/* Here todos is like title in Header and todosList is a variable*/}
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodoFunction} />
                  <Todos todos={todoslist} onDelete={onDeleteFunction} />
                </>)
            }}>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>

    </>
  );
}

export default App;
