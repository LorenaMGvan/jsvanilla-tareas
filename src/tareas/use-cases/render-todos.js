import { Todo } from '../models/tarea.model' 
import { createTodoHTML } from './create-todo-html';

  let element;

 /**
  * 
  * @param {*} elementId 
  * @param {*} todos 
  */
export const renderTodos = ( elementId, todos = []  ) => {
    // const elementX = document.querySelector( elementId );
    if ( !element ) {
      element = document.querySelector( elementId );
    
    if ( !element ) throw new Error(`Element ${ elementId } not found`);
    }

    element.innerHTML = '';

    todos.forEach(tarea => {
      element.append( createTodoHTML(tarea));
    });
}