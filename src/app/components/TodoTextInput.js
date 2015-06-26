import React from 'react/addons';

export default React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired,
    onTextUpdate: React.PropTypes.func.isRequired
  },

  render(){
    var {text, onTextUpdate} = this.props;

    return (
      <input
        id='new-todo'
        type='text'
        name='todo-input'
        value={text}
        className='new-todo'
        placeholder='What needs to be done'
        onKeyDown={onTextUpdate}
        onChange={onTextUpdate}
      />
    );
  }

});