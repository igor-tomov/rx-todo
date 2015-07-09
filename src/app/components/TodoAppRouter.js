import React from 'react/addons';
import Router, { Route, HashHistory, RouteHandler, State } from 'react-router';

import FilterConst from '../constants/TodoFilterConstants';
import filterList from '../configs/todoFilterList';

import TodoApp from './TodoAppContainer';


export default ( mountNodeId, todos ) => {

  // define Router root app
  var TodoAppRouter = React.createClass({

    mixins: [State],

    _getCurrentTodoFilter(){
      var filterFromParam = '/' + this.getParams().splat;

      return filterList.reduce(
          ( filter, item ) => item.path === filterFromParam ? item.value : filter,
          FilterConst.ALL
      );
    },



    render(){
      return <TodoApp todos={todos} todoFilter={this._getCurrentTodoFilter()} />;
    }
  });

  // define routes
  var routes = (
    <Route path='*' handler={TodoAppRouter}></Route>
  );

  // Init Router app
  Router.run( routes, HashHistory, Root => {
    React.render( <Root/>, document.getElementById( mountNodeId ) );
  });
}