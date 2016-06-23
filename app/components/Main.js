var React = require('react');
var ReactRouter =require('react-router');
var ReactRedux = require('react-redux');
var addUser = require('../action/action')
var Redux = require('redux');
var bindActionCreators = Redux.bindActionCreators;
var persistentStorage = require('../utils/PersistState');

var connect = ReactRedux.connect;
var Navbar = require('../components/Navbar')

var Main = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		 var credntials = persistentStorage.getCredntials();
		 if(credntials !==undefined){
			 return {loginUser : credntials[0],IsLogin:true};
		 }
		 else{
			return {loginUser : "", IsLogin:false};
		 }

		},
		handleLoginInput: function(loginUser, IsLogin) {
    this.setState({
      loginUser: loginUser,
      IsLogin: IsLogin
    });
  },
	handlerLogout: function(e){
		e.preventDefault();
		persistentStorage.logOut();
		this.setState({loginUser : "",IsLogin:false})
		this.context.router.push({
			pathname:'/login'
		});

	},
	render: function() {
		var childrenWithProps = React.Children.map(this.props.children, function(child) {
             return React.cloneElement(child, { loginUserprops: this.handleLoginInput, userName:this.state.loginUser , isLogin: this.state.IsLogin });
         }.bind(this));
	return (
		<div >
			<Navbar userName={this.state.loginUser} logout={this.handlerLogout}>
			</Navbar>
  	{childrenWithProps}
		</div>
	);
}
});


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addUser, dispatch),
  };
}

module.exports = connect( mapDispatchToProps)(Main);

//module.exports = connect( mapDispatch)(Main);
