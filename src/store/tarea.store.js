import { Todo } from '../tareas/models/tarea.model';

const misFiltros = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}

// la constante state contiene la informaciòn
// que deseo mostrar de manera global en la aplicación
const state = {
    todos: [
        new Todo('Recoger la Basura'),
        new Todo('Tender la Ropa'),
        new Todo('Cortar el Pasto'),
    ],
    filter: misFiltros.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore...');
}

const loadStore = () => {
    throw new Error('pendiente loadStore');
} 
const getTodos = ( filter = misFiltros.All ) => {
    
    switch(filter) {
        case misFiltros.All:
            return [state.todos];  
            break;  
        case misFiltros.Completed:
            return state.todos.filter( todo => todo.done);
            //return state.todos.filter( todo => todo.done === true);
        case misFiltros.Pending:
            return state.todos.filter( todo => !todo.done);
        default:
            throw new Error(`get todos pendiente ${filter} no es válido`);
            
    }

}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if ( !description ) throw new Error('pendiente addTodo');
    state.todos.push( new Todo(description));
} 

const toogleTodo = ( todoId ) => {
    state.todos = state.todos.map((todo) => {
        if( todo.id === todoId ) {
            todo.done = !todo.done;  
        }
        return todo;
    });
    // throw new Error('pendieten toogleTodo');
}

const deleteTodo = ( todoId ) => { 
    state.todos =  state.todos.filter( todo => todo.id !== todoId );
    // throw new Error('pendieten deleteTodo');
}

const deleteCompleted = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.done);
}

const setFilter = (newFilter = misFiltros.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    addTodo,
    toogleTodo,
    deleteTodo,
    getTodos,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}   