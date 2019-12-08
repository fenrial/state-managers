import { createEvent } from 'effector';

export const addTodo = createEvent('addTodo');
export const removeTodo = createEvent('removeTodo');
export const checkTodo = createEvent('checkTodo');
export const inputChange = createEvent('inputChange');
