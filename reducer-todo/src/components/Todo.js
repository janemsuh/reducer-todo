import React from 'react';

function Todo({ todo, dispatch }) {
    const toggleCompleted = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo
        });
    };

    return (
        <p onClick={toggleCompleted}>{todo.item}</p>
    )
}

export default Todo;