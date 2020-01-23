import React from 'react';

function Todo({ todo, dispatch }) {
    const toggleCompleted = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo
        });
    };

    return (
        <div
            className={`todo${todo.completed ? " completed" : ""}`}
            onClick={toggleCompleted}
        >
            <p>{todo.item}</p>
        </div>
    )
}

export default Todo;