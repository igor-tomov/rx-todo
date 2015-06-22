import dispatcher from '../dispatchers/TodoDispatcher'

export default {
  testify: ( data ) => dispatcher.dispatch({ action: 'TEST', data: data })
}