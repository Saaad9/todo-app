import './App.css';
import './reset.css';
import React, { useState, useEffect, useRef } from 'react';
import TodoCompo from './components/TodoCompo';
import InputCompo from './components/InputCompo';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // input focus를 줘보기
  const input_focus = useRef(null);

  // 렌더링되었을 때 바로 focus
  useEffect(()=> {
    console.log('input focus ');
    input_focus.current.focus();
  },[])

  //localStorage 저장
  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const handleAllClear = () => {
    if(todos.length == 0) alert('삭제할 할 일이 없습니다.');
    setTodos([]);
    input_focus.current.focus();
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
        <InputCompo value={value} setValue={setValue} handleAddTodo={handleAddTodo} input_focus={input_focus}/>
      </div>
    </div>
  );
}

export default App;
