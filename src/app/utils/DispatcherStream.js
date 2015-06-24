import Rx from 'rx/dist/rx.lite';
import logger from 'logger';

export default ( name = 'Untitled' ) => {
  var dispatcher = new Rx.Subject();

  dispatcher.dispatch = payload => {

    // Omit dispatches without action type
    if ( ! payload.action ){
      logger.warn( `${name} dispatcher: payload isn't contain action type, payload: `, payload );
      return;
    }

    if ( ENV === 'development' ) {
      // logging dispatched messages
      logger.debug(`${name} dispatcher: action "${payload.action}" is dispatched`, payload);
    }

    dispatcher.onNext( payload );
  };

  return dispatcher;
};