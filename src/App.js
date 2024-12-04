import './App.css';

function App() {
  return (
    <div>
      <div className='container'>
        <div className='titleBox'>
          <span className='title'>react-todo-app</span>
          <button className='add-todo-btn'>추가</button>
        </div>
        
        <div className='todo-list'>
          <div className='todo'>
            <input type='checkbox' defaultChecked={false}></input>
            <span>할 일 1</span>
            <button className='del-todo-btn'>삭제</button>
          </div>
        </div>

        <input className='input' type='text' placeholder='할일을 입력'></input>
      </div>
    </div>
  );
}

export default App;
