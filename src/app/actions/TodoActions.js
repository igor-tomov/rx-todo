import dispatcher from '../dispatchers/TodoDispatcher';
import TodoConst from '../constants/TodoConststants';

export default {
  create: ( text ) => dispatcher.dispatch({ action: TodoConst.TODO_CREATE, text: text }),
  updateText: ( text ) => dispatcher.dispatch({ action: TodoConst.TODO_UPDATE_TEXT, text: text }),
  toggleComplete: ( id ) => dispatcher.dispatch({ action: TodoConst.TODO_TOGGLE_COMPLETE, id: id }),
  toggleCompleteAll: () => dispatcher.dispatch({ action: TodoConst.TODO_TOGGLE_COMPLETE_ALL })
}