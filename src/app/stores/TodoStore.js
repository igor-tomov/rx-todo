import Rx from 'rx/dist/rx.lite';
import {Record, List} from 'immutable';
import logger from 'logger';
import todoConst from '../constants/TodoConststants';
import dispatcher from '../dispatchers/TodoDispatcher';

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


var getUniqueId = () => (+new Date() + Math.floor(Math.random() * 999999)).toString(36);


var createTodoStore = ( initialStore = {} ) =>
  Rx.Observable.create( observer => {

    // instantiate store data
    var store = new TodoListMap( initialStore );


    // ---------------- store operations ----------------
    var operations = {
      toggleCompleteAll: () => {
        var todoItems    = store.get( 'todoItems' ),
            allCompleted = todoItems.every( item => item.completed );

        todoItems = todoItems.map( item => item.set( 'completed', ! allCompleted ) );

        store = store.set( 'todoItems', todoItems );
      },



      updateItem: ( id, text ) => {
        var todoItems = store.get( 'todoItems' ).map( item =>
            item.id === id ? item.set( 'text', text ) : item
        );

        store = store.set( 'todoItems', todoItems );
      },



      destroy: id => {
        var todoItems = store.get( 'todoItems' );

        todoItems = todoItems.filter( item => item.id !== id );
        store     = store.set( 'todoItems', todoItems );
      }
    };


    // ---------------- observe dispatcher messages ----------------
    var subscription = dispatcher.subscribe( payload => {
      var todoItems, newItem, id;

      switch ( payload.action ){

        case todoConst.TODO_CREATE:
          todoItems = store.get( 'todoItems' );
          newItem   = TodoItemMap({ id: getUniqueId(), text: payload.text });

          store = store.set( 'todoItems', todoItems.push( newItem ) )
                       .set( 'todoText', '' );
          break;


        case todoConst.TODO_UPDATE_INPUT_TEXT:
          store = store.set( 'todoText', payload.text );
          break;


        case todoConst.TODO_TOGGLE_COMPLETE:
          id        = payload.id;
          todoItems = store.get( 'todoItems' );

          todoItems = todoItems.map( item =>
              item.id === id ? item.set( 'completed', ! item.get( 'completed' ) ) : item
          );

          store = store.set( 'todoItems', todoItems );

          break;


        case todoConst.TODO_TOGGLE_COMPLETE_ALL:
          operations.toggleCompleteAll();
          break;


        case todoConst.TODO_UPDATE_ITEM:
          operations.updateItem( payload.id, payload.text );
          break;


        case todoConst.TODO_DESTROY:
          operations.destroy( payload.id );
          break;


        default:
          return;
      }

      observer.onNext( store.toJS() );
    });

    // Unsubscribe from dispatcher and clean up store data in case of disposing
    return () => {
      subscription.dispose();
      store = null;
    }
  });

export { TodoListMap, TodoItemMap, createTodoStore };
