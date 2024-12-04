import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState('');
  
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const getStyle = (completed) => {
    return {
        textDecoration: completed ? 'line-through' : 'none', 
        opacity: completed ? 0.5 : 1  
    };
};

  //localStorage 저장
  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const handleClicked = (id) => {
    //  id에 해당하는 요소의 completed를 변경
    todos.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    setTodos([...todos]);
  }

  const handleDelBtn = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  }

  const handleAllClear = () => {
    setTodos([]);
  }

  const handleValue = (e) => {
    setValue(e.target.value);
  }

  const handleAddTodo = () => {
    // 만약 아무 값도 입력하지 않았다면 return
    if (value.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: value,
      completed: false
    }
    setTodos([...todos, newTodo]);
    setValue('');
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleFocus = () => {
    handleAddTodo();
  }


  return (
    <div>
      <div className='container'>
        <div className='titleBox'>
          <span className='title'>react-todo-app</span>
          <button onClick={() => handleAllClear()} className='clear-btn'>전부 삭제</button>
        </div>

        <div className='todo-list'>

          {/* todo 추가 */}
          {todos.map((todo) => (
            <div className='todo' key={todo.id} style={getStyle(todo.completed)}>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => handleClicked(todo.id)}
              ></input>

              <span>{todo.text}</span>
              <button onClick={() => handleDelBtn(todo.id)} className='del-todo-btn'>삭제</button>
            </div>
          ))}
        </div>

        <input
          className='input'
          type='text'
          value={value}
          placeholder='할일을 입력'
          onChange={handleValue}
          onKeyUp={handleKeyUp}
          onBlur={handleFocus}
        ></input>

      </div>
    </div>
  );
}

export default App;
