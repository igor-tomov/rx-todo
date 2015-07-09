import React from 'react/addons';
import initApp from '../app/components/TodoAppRouter';
import config from '../app/configs';
import storage from '../app/services/todoStorageService';

var todos = storage.fetch( config.storageName );

initApp( 'todo-app', todos );