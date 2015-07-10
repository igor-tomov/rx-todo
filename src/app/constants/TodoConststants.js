import keyMirror from 'keymirror';

const todos = keyMirror({
  TODO_INIT: null,
  TODO_CREATE: null,
  TODO_COMPLETE: null,
  TODO_DESTROY: null,
  TODO_DESTROY_COMPLETED: null,
  TODO_TOGGLE_COMPLETE: null,
  TODO_TOGGLE_COMPLETE_ALL: null,
  TODO_UPDATE_INPUT_TEXT: null,
  TODO_UPDATE_ITEM: null,
  TODO_CLEAR_COMPLETED: null,
  TODO_SAVE_TO_STORAGE: null
});

export default todos;