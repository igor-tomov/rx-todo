import Rx from 'rx/dist/rx.lite';
import {Record, List} from 'immutable';
import todoConst from '../constants/todos';
import dispatcher from '../dispatchers/TodoDispatcher';

// define store data structure
let TodoListMap = Record({
  todoItems: List(),
  todoText: ""
});

let TodoItemMap = Record({
  id: null,
  text: '',
  completed: false
});

export default ( initialStore = {} ) =>
  Rx.Observable.create( observer => {

    // instantiate store data
    var store = TodoListMap( initialStore );

    // observe dispatcher messages
    var subscription = dispatcher.subscribe( payload => {

      switch ( payload.action ){

        case todoConst.TODO_CREATE:
          break;

        default:
          return;
      }

      observer.onNext( store.toJS() );
    });

    // Unsubscribe from dispatcher and clean up store data in case of disposing
    return () => {
      console.log( "dispose: ", this );
      subscription.dispose();
      store = null;
    }
  });
