import React from 'react/addons';
import config from '../configs';

import TodoHeader from './TodoHeader';


class TodoApp extends React.Component {

  constructor(props){
    super(props);

    this.state = { title: config.title };
  }

  render(){
    return (
        <section>
          <TodoHeader {...this.state} />
        </section>
    );
  }
}

export default TodoApp;