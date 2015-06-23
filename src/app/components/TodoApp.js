import React from 'react/addons';
import StoreListener from '../utils/mixins/StoreListener'
import config from '../configs';

import TodoHeader from './TodoHeader';

import TodoStoreCreator from '../stores/TodoStore';
import actions from '../actions/TodoActions';


let TodoApp = React.createClass({

  mixins: [ StoreListener( TodoStoreCreator ) ],

  render(){
    return (
        <section>
          <TodoHeader {...this.state} />
        </section>
    );
  }
});

export default TodoApp;