var React = require('react');
var ReactRouter =require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;


var Main = require('../components/Main');
var Home = require('../components/Home');
var Login = require('../components/Login')

var MyRoute = (
		 <Router history = {hashHistory}>
			 <Route path="/" component={Main}>
			 <IndexRoute component={Home}/>
				 <Route path="/home" component={Home}/>
				 <Route path="/login" component={Login}/>
			 </Route>
		 </Router>
	 )


module.exports = MyRoute;
