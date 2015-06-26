import dispatcher from '../dispatchers/TodoDispatcher';
import TodoConst from '../constants/TodoConststants';

export default {
  create: ( text ) => dispatcher.dispatch({ action: TodoConst.TODO_CREATE, text: text }),
  toggleCompleteAll: () => dispatcher.dispatch({ action: TodoConst.TODO_TOGGLE_COMPLETE_ALL })
}