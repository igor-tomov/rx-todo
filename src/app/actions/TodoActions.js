import dispatcher from '../dispatchers/TodoDispatcher';
import TodoConst from '../constants/TodoConststants';

export default {
  create: text => dispatcher.dispatch({ action: TodoConst.TODO_CREATE, text: text }),
  updateText: text => dispatcher.dispatch({ action: TodoConst.TODO_UPDATE_INPUT_TEXT, text: text }),
  toggleComplete: id => dispatcher.dispatch({ action: TodoConst.TODO_TOGGLE_COMPLETE, id: id }),
  toggleCompleteAll: () => dispatcher.dispatch({ action: TodoConst.TODO_TOGGLE_COMPLETE_ALL }),
  updateItem: ( id, text ) => dispatcher.dispatch({ action: TodoConst.TODO_UPDATE_ITEM, id: id, text: text }),
  destroy: id => dispatcher.dispatch({ action: TodoConst.TODO_DESTROY, id: id }),
  clearCompleted: () => dispatcher.dispatch({ action: TodoConst.TODO_CLEAR_COMPLETED })
}