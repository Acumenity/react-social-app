var React= require('react');
var ReactDOM = require('react-dom');
var MyRoute = require('./config/route');
var ReactRedux = require('react-redux');
var Provider = ReactRedux.Provider;
var Redux = require('redux');
var createStore = Redux.createStore;
var Reducer = require('./reducers/reducers');
var helper = require('./utils/helper')
var throttle = require('lodash/throttle')
var ReactRouter =require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var loadState = require('./utils/PersistState');

var applyMiddleware = Redux.applyMiddleware;
var Readthunk = require('redux-thunk').default;
var think = Readthunk.thunk
 var store = createStore(Reducer, applyMiddleware(Readthunk));
// helper.loadState().then(function(data){
store.dispatch({
  type: 'SET_STATE',
  state: "",
});

// store.dispatch(
//   login('ahtesham','1234')
//
// )
// .then(function(){console.log("fdssdfsdfsdsdfsdsdfsdfsdf");});

store.subscribe(throttle(function(){
  //loadState.saveStates(store.getState());
  //helper.saveState(store.getState());
}), 1000);
ReactDOM.render(

    <Provider store={store}>
          {MyRoute}
          </Provider>,
    document.getElementById("app")
);
