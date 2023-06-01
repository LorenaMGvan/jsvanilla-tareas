import './style.css';
import { App } from './src/tareas/app';
import tareaStore from './src/store/tarea.store'

tareaStore.initStore();

App('#tareasApp');
console.log('Hola mundo')