import React from 'react/addons';

import TodoHeader from './TodoHeader';
import TodoContent from './TodoContent';



export default React.createClass({

  mixins: [React.addons.PureRenderMixin],



  render(){
    var props = this.props;

    return (
        <section className='todoapp'>
          <TodoHeader
            title={props.title}
            todoText={props.todoText}
            onTextUpdate={props.onInputTextUpdate}
            onTextEnter={props.onInputTextEnter}
          />
          <TodoContent {...props} />
        </section>
    );
  }
});
