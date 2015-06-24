import React from 'react/addons';

export default React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  onKeyDown(){},

  onChange(){},

  render(){
    return (
      <input
        id='new-todo'
        type='text'
        name='todo-input'
        value={this.props.text}
        className='new-todo'
        placeholder='What needs to be done'
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
      />
    );
  }

});