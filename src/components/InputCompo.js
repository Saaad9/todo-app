import React from 'react'

export default function Input({ value, setValue, handleAddTodo }) {
    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    const handleFocus = () => {
        handleAddTodo();
    }
    const handleValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <input
            className='input'
            type='text'
            value={value}
            placeholder='할일을 입력'
            onChange={handleValue}
            onKeyUp={handleKeyUp}
            onBlur={handleFocus}
        ></input>
    )
}
