import Rx from 'rx/dist/rx.lite';
import {Record, List} from 'immutable';
import todoConst from '../constants/todos'


// define store data structure
var TodoListMap = Record({
  todoItems: List(),
  todoText: ""
});

var TodoItemMap = Record({
  id: null,
  text: '',
  completed: false
});

export default ( dispatcher, initialStore = {} ) =>
  Rx.Observable.create( observer => {

    // instantiate store data
    var store = TodoListMap( initialStore );

    // observe dispatcher messages
    dispatcher.subscribe( payload => {

      switch ( payload.action ){

        case todoConst.TODO_CREATE:
          break;

        case 'TEST':
          console.log( "Store is received action", payload );
          break;

        default:
          return;
      }

      observer.onNext( store ); // todo: convert store data to plain object
    });

    // clean up store data in case of disposing
    return () => store = null
  });