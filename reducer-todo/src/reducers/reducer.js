export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn about context',
            completed: false,
            id: 3892987590
        },
        {
            item: 'Learn about testing',
            completed: false,
            id: 3892987591
        },
        {
            item: 'Learn about class components',
            completed: false,
            id: 3892987592
        }
    ]
}

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state, todos: [...state.todos,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }]
            };
        case 'TOGGLE_COMPLETED':
            const toggleTodo = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, completed: !todo.completed};
                }
                else {
                    return todo;
                }
            });
            return {
                ...state,
                todos: toggleTodo
            }
        case 'REMOVE_COMPLETED':
            const removeCompleted = state.todos.filter(todo => {
                return !todo.completed;
            })
            return {
                ...state,
                todos: removeCompleted
            }
        default:
            return state;
    }
}