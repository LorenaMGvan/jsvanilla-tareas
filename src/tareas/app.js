import elHtml from './app.html?raw';
import todoStore from '../store/tarea.store';
import { renderTodos } from './use-cases';

const elementIds = {
    TodoList: '.todo-list',
}

export const App = (elementId) => {

    const showTareas = () => {
        const todos = todoStore.getTodos('all')[0];
        console.log('b->', todoStore.getTodos('all')[0]);
        // const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( elementIds.TodoList , todos);
    }
    
    // se ejecuta cuando la funcion APP se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = elHtml;
        document.querySelector(elementId).append( app );
        showTareas();
    })();

}