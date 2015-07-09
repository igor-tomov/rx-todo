import React from 'react/addons';
import Router, { Route, RouteHandler } from 'react-router';

import FilterConst from '../constants/TodoFilterConstants';
import filterList from '../configs/todoFilterList';



var TodoFilteredBox = React.createClass({

  propTypes: {
    todoFilter: React.PropTypes.string
  },



  getDefaultProps(){
    return {
      todoFilter: FilterConst.ALL
    }
  },



  render(){
    var { children, todoFilter } = this.props;

    children = React.Children.map( children, child => {
      return React.cloneElement( child, { todoFilter: todoFilter } );
    });

    return <div>{children}</div>;
  }
});

/**
 * Generate wrapper components for TodoFilteredBox with specific filter value
 */
var todoFilterBoxes = filterList.map( filter => {
  var FilteredBox = React.createClass({
    render(){
      return <TodoFilteredBox todoFilter={filter.value} />;
    }
  });

  return <Route path={filter.path} handler={FilteredBox} />
});


/**
 *
 */
var TodoFilteredBoxWrapper = React.createClass({
  render(){
    return <RouteHandler />
  }
});

export default (
  <Router handler={TodoFilteredBoxWrapper}>
    {todoFilterBoxes}
  </Router>
);