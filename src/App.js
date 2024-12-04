import './App.css';
import React, { useState } from'react';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      completed: true
    },
    {
      id: 2,
      text: '할일 2',
      completed: false
    }
  ]);
  
  const handleClicked = (id) => {
  //  id에 해당하는 요소의 completed를 변경
   todos.filter((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
   })
   
   setTodos([...todos]);
  }

  const handleDelBtn = (id) => {
    console.log('id : @!@#!@', id);
    const newTodos =  todos.filter((todo) => todo.id === id);

    setTodos(newTodos);
  }


  return (
    <div>
      <div className='container'>
        <div className='titleBox'>
          <span className='title'>react-todo-app</span>
          <button className='clear-btn'>전부 삭제</button>
        </div>
        
        <div className='todo-list'>

          {/* todo 추가 */}
          {todos.map((todo) =>(
            <div className='todo' key={todo.id}>
              <input 
                type='checkbox' 
                checked={todo.completed}
                onChange={() => handleClicked(todo.id) } 
              ></input>

              <span>{todo.text}</span>
              <button onClick={() => handleDelBtn(todo.id)} className='del-todo-btn'>삭제</button>
            </div>
          ))}
        </div>

        <input 
          className='input' 
          type='text' 
          placeholder='할일을 입력'
        ></input>
      
      </div>
    </div>
  );
}

export default App;
