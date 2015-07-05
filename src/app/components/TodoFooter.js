import React from 'react/addons';

var propTypes = React.PropTypes;


export default React.createClass({

  propTypes: {
    todoItems: propTypes.array.isRequired,
    allUncompleted: propTypes.bool.isRequired,
    onClearCompleted: propTypes.func.isRequired
  },

  _onClearCompleted(){
    this.props.onClearCompleted();
  },

  _renderClearCompleted(){
    if ( ! this.props.allUncompleted ){
      return <button className='clear-completed' onClick={this._onClearCompleted}>Clear completed</button>;
    }
  },

  render(){
    var { todoItems, allUncompleted } = this.props;
    var todoItemsCount = todoItems.length,
        itemsLeft, itemsLeftPhrase;

    if ( ! todoItemsCount ){
      return null;
    }

    itemsLeft = allUncompleted ?
                    todoItemsCount :
                    todoItems.reduce( ( count, item ) => item.completed ? count : count + 1, 0 );

    itemsLeftPhrase = todoItemsCount === 1 ? 'item' : 'items';

    return (
        <footer className='footer'>
          <span className='todo-count'>
            <strong>{itemsLeft}</strong> {itemsLeftPhrase} left
          </span>
          <ul className='filters'></ul>
          {this._renderClearCompleted()}
        </footer>
    );
  }
});