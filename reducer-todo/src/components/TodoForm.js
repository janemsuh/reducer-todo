import React, { useState } from 'react';

function TodoForm({ dispatch }) {
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_TASK',
            payload: task
        })
        setTask('');
    }

    const handleCompleted = (event) => {
        event.preventDefault();
        dispatch({
            type: 'REMOVE_COMPLETED'
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='task'
                    placeholder='Add task'
                    value={task}
                    onChange={handleChange}
                />
                <button type='submit'>Add to List</button>
                <button onClick={handleCompleted}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;