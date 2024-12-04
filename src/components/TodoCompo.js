import React from 'react'

export default function TodoComponent({ todos, setTodos }) {
    const getStyle = (completed) => {
        return {
            textDecoration: completed ? 'line-through' : 'none',
            opacity: completed ? 0.5 : 1
        };
    };

    const handleDelBtn = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);

        setTodos(newTodos);
    }

    const handleClicked = (id) => {
        //  id에 해당하는 요소의 completed를 변경
        todos.filter((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
        });

        setTodos([...todos]);
    }


    return (
        <div>
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
    )
}
