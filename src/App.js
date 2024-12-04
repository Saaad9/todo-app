import './App.css';

function App() {

  let todos = [
    {
      id : 1,
      text : '할 일 1',
      complete : false
    },
    {
      id : 2,
      text : '할 일 2',
      complete : false
    },
    {
      id : 3,
      text : '할 일 2',
      complete : false
    }
  ]

  return (
    <div>
      <div className='container'>
        <div className='titleBox'>
          <span className='title'>react-todo-app</span>
          <button className='add-todo-btn'>추가</button>
        </div>
        
        <div className='todo-list'>

          {/* todo 추가 */}
          {todos.map((todo) =>(
            <div className='todo' key={todo.id}>
              <input type='checkbox' defaultChecked={todo.complete}></input>
              <span>{todo.text}</span>
              <button className='del-todo-btn'>삭제</button>
            </div>
          ))}
        </div>

        <input className='input' type='text' placeholder='할일을 입력'></input>
      </div>
    </div>
  );
}

export default App;
