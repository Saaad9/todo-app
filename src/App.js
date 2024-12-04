import './App.css';
import React, { useState, useEffect } from 'react';
import TodoCompo from './components/TodoCompo';
import InputCompo from './components/InputCompo';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  //localStorage 저장
  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const handleAllClear = () => {
    setTodos([]);
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

  return (
    <div>
      <div className='container'>
        <div className='titleBox'>
          <span className='title'>react-todo-app</span>
          <button onClick={() => handleAllClear()} className='clear-btn'>전부 삭제</button>
        </div>

        <div className='todo-list'>
          {/* props를 이용해서 컴포넌트 분리 */}
          <TodoCompo todos={todos} setTodos={setTodos}/>
        </div>
        <InputCompo value={value} setValue={setValue} handleAddTodo={handleAddTodo}/>
      </div>
    </div>
  );
}

export default App;
