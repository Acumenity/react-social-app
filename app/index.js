var React= require('react');
var ReactDOM = require('react-dom');
var MyRoute = require('./config/route');
var ReactRedux = require('react-redux');
var Provider = ReactRedux.Provider;
var Redux = require('redux');
var createStore = Redux.createStore;
var Reducer = require('./reducers/reducers');

var throttle = require('lodash/throttle')
var ReactRouter =require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var loadState = require('./utils/PersistState');

var store = createStore(Reducer,loadState.loadstates());
store.subscribe(throttle(function(){
  loadState.saveStates(store.getState());
}), 1000);
ReactDOM.render(

    <Provider store={store}>
          {MyRoute}
          </Provider>,
    document.getElementById("app")
);
