import React, { useReducer } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { initialState, reducer } from '../reducers/reducer';

const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    return (
        <div>
            <TodoForm dispatch={dispatch} />
            {state.todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}

export default TodoList;