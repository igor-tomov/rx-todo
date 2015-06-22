import Rx from 'rx/dist/rx.lite'

export default ( name = 'Untitled' ) => {
  var dispatcher = new Rx.Subject();

  // just a syntax sugar
  dispatcher.dispatch = dispatcher.onNext;

  // Omit dispatches without action type
  //dispatcher = dispatcher.filter( data => data.action );

  // logging dispatched messages in DEV environment
  //dispatcher = dispatcher.do( data => console.debug( `${name} dispatcher: action "${data.action}" is dispatching` ) );

  return dispatcher;
};