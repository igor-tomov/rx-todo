import keyMirror from 'keymirror';

const todos = keyMirror({
  TODO_CREATE: null,
  TODO_COMPLETE: null,
  TODO_DESTROY: null,
  TODO_DESTROY_COMPLETED: null,
  TODO_TOGGLE_COMPLETE: null,
  TODO_TOGGLE_COMPLETE_ALL: null,
  TODO_UPDATE_INPUT_TEXT: null,
  TODO_UPDATE_ITEM: null,
  TODO_CLEAR_COMPLETED: null
});

export default todos;