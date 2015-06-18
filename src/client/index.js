import React from 'react/addons';
import App from '../app';
import config from '../app/configs';
import storage from '../app/services/todoStorageService';

var todos = storage.fetch( config.storageName );

React.render(
  React.createElement( App, {todos: todos} ),
  document.getElementById( 'todo-app' )
);