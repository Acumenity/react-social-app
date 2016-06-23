var React = require('react');
var LoginUI = require('../components/LoginUI');
var helper = require('../utils/helper.js');

var ReactRouter =require('react-router');
// var lookUp = require('../action/action')
var ReactRedux = require('react-redux');
var persistentStorage = require('../utils/PersistState');
var Redux = require('redux');
var addUser = require('../action/action')
var bindActionCreators = Redux.bindActionCreators;
var connect = ReactRedux.connect;
var actions = require('../action/action')


var Login = React.createClass({
  getInitialState: function() {
      return {user: "", password: "", len:0};
    },
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },


  handerSubmitUser: function(e){
    e.preventDefault();
    console.log(this.props);
        this.props.loginUserprops(this.state.user, true);
          this.props.add(this.state.user, this.state.password);
          if(this.props.loginUsersList.length == this.state.len){
              console.log("i am a;ready user");
          }
          else{
            this.state.len = this.props.loginUsersList.length;
            this.context.router.push({
              pathname:'/home'
            });
          }
          persistentStorage.login(this.state.user, this.state.password);
         //helper.login(this.state.user, this.state.password);
    },
   handlerUpdateUserState : function(e){
     this.setState({user: e.target.value});
   },
   handlerUpdatePasswordState: function(e){
        this.setState({password: e.target.value});
   },
  render: function() {

	return (
      <LoginUI
      onSubmitUser ={this.handerSubmitUser}
      onUpdateUserState={this.handlerUpdateUserState}
      onUpdatePasswordState={this.handlerUpdatePasswordState}
      username={this.state.user}
      password={this.state.password}>
      </LoginUI>
	);
}

});
var mapStateToProps = function(state) {
  return {
    loginUsersList: state
  }
}
var mapDispatchToProps = function (dispatch) {
  return {
    add: function(user,pass){ dispatch(actions.addUser(user,pass)); },
    lookup: function(user){ dispatch(actions.lookUp(user)); },
  };
}
module.exports = connect( mapStateToProps, mapDispatchToProps)(Login);
