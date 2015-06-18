import Rx from '../../../node_modules/rx/dist/rx.lite.js'

let eventStream = new Rx.Subject();

export default {
  eventStream: eventStream
}