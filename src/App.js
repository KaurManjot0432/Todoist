import './App.css';
import Header from './myComponents/header';
import Todos from './myComponents/Todos';
import { useState } from 'react';
import { AddTodo } from './myComponents/AddTodo';

function App() {


  const onDelete = (todo) => {
    console.log("I am deleted",todo);
  }

  const [todos, getTodos] = useState('');

  return (
  <>
  <Header title="MY TODO'S APP" searchBar={false}/>
  <AddTodo todos={todos} getTodos={getTodos} />
  <Todos todos={todos} getTodos={getTodos}/>

  {/* <Todos onDelete={onDelete}//> */}
  
  </>
  );
}

export default App;
