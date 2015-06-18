import Rx from 'rx/dist/rx.lite';
import {Record, List} from 'immutable';
import todoConst from '../constants/todos.js'

let createTodoStore = dispatcher =>
  Rx.Observable.create( observer => {

    // define store data
    var store = Record({
      todoItems: List(),
      todoText: "",
      doneItems: 0,
      checkAll: false
    });

    // observe dispatcher messages
    dispatcher.subscribe( payload => {

      switch ( payload.action ){

        case todoConst.TODO_CREATE:
          break;

        default:
          return;
      }

      observer.onNext( store ); // todo: convert store data to plain object
    });

    // clean up store data in case of disposing
    return () => store = null
  });

export default createTodoStore;