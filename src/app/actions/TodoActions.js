import dispatcher from '../dispatchers/TodoDispatcher';
import TodoConst from '../constants/TodoConststants';

export default {
  create: ( text ) => dispatcher.dispatch({ action: TodoConst.TODO_CREATE, text: text })
}