var React= require('react');
var ReactDOM = require('react-dom');
var MyRoute = require('./config/route');
var fs = require("fs");
var ReactRedux = require('react-redux');
var Provider = ReactRedux.Provider;
var ReactRedux = require('redux');
var combineReducers = ReactRedux.combineReducers;
var createStore = ReactRedux.createStore;
var Reducer = require('./reducers/reducers');
var applyMiddleware = ReactRedux.applyMiddleware;
var compose = ReactRedux.compose;
var  ReduxStorage =  require('redux-storage');
var createStorageMiddleware = require('redux-simple-storage-middleware');
var throttle = require('lodash/throttle')
var ReactRouter =require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var reducer = ReduxStorage.reducer(combineReducers(Reducer));
var loadState = require('./utils/PersistState');
//store
var store = createStore(Reducer,loadState.loadstates());
store.subscribe(throttle(function(){
  loadState.saveStates(store.getState());
}), 1000);


// var localStorageEngnine = require('redux-storage-engine-localstorage');
// var createEngine = localStorageEngnine.createEngine
// var engine = createEngine('/home/ahtesham/github-battle/data.json');
// var middleware = ReduxStorage.createMiddleware(engine);
// var createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
// var store = createStoreWithMiddleware(reducer);
// var load = storage.createLoader(engine);
// load(store)
//     .then(function(newState){ console.log('Loaded state:', newState)})
//     .catch(function() { console.log('Failed to load previous state')});
// var storage = require('redux-simple-storage');
// var localStorageMiddleware = createStorageMiddleware({
//     key: '/home/ahtesham/github-battle/data.json',
//     type: 'localStorage', // The default type is sessionStorage but can be switched to localStorage
//   });
//
//   var store = createStore(
//     Reducer, // The main reducer which will be stored in the specified storage
//     initialState, // The state to load and prefill the redux store with
//     compose(
//       applyMiddleware(
//         // All middleware
//         localStorageMiddleware
//       )
//     )
//   );
// storage.setConfig({
//     storage_type: 'file',
//     file_path: '/home/ahtesham/github-battle',
//     file_name: 'data.json',
// });
// var store = createStore(
//     Reducer,
//     applyMiddleware(
//         storage.saveState()
//     )
// );
// store = storage.loadState(store);
ReactDOM.render(

    <Provider store={store}>
          {MyRoute}
          </Provider>,
    document.getElementById("app")
);
