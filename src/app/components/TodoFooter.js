import React from 'react/addons';
import classnames from 'classnames';


var propTypes = React.PropTypes;



export default React.createClass({

  mixins: [React.addons.PureRenderMixin],



  propTypes: {
    todoItems: propTypes.array.isRequired,
    todoFilterList: propTypes.array.isRequired,
    allUncompleted: propTypes.bool.isRequired,
    onClearCompleted: propTypes.func.isRequired,
    todoFilter: propTypes.string
  },



  _onClearCompleted(){
    this.props.onClearCompleted();
  },



  _renderClearCompleted(){
    if ( ! this.props.allUncompleted ){
      return <button className='clear-completed' onClick={this._onClearCompleted}>Clear completed</button>;
    }
  },



  _renderFilter(){
    var { todoFilterList, todoFilter } = this.props;

    return todoFilterList.map( ( item, i ) => {
      var classes = classnames({ selected: item.value === todoFilter }),
          path    = '#' + item.path;

      return (
          <li key={i}>
            <a className={classes} href={path}>{item.title}</a>
          </li>
      );
    });
  },



  render(){
    var { todoItems } = this.props;

    var todoItemsCount = todoItems.length,
        allUncompleted, itemsLeft, itemsLeftPhrase;

    if ( ! todoItemsCount ){
      return null;
    }

    allUncompleted = todoItems.every( item => ! item.completed );

    itemsLeft = allUncompleted ?
                    todoItemsCount :
                    todoItems.reduce( ( count, item ) => item.completed ? count : count + 1, 0 );

    itemsLeftPhrase = todoItemsCount === 1 ? 'item' : 'items';

    return (
        <footer className='footer'>
          <span className='todo-count'>
            <strong>{itemsLeft}</strong> {itemsLeftPhrase} left
          </span>
          <ul className='filters'>{this._renderFilter()}</ul>
          {this._renderClearCompleted()}
        </footer>
    );
  }
});