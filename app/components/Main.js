var React = require('react');
var ReactRouter = require('react-router');
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


            return {
                loginUser: "",
                IsLogin: false

        }

    },
    componentDidMount: function(){
      console.log(this.props);
      var credntials = persistentStorage.getCredntials();
      if (credntials !== undefined) {
         this.props.login(credntials[0], credntials[1]).then(function(){
           console.log("i am ready now");

          if(this.props.state.get('isLoggedIn')){
            this.state.loginUser = credntials[0];
            this.state.IsLogin = true;
            this.context.router.push({
                    pathname: '/home'
            });
            }
          }.bind(this)) ;
      }
      else{
        this.context.router.push({
                pathname: '/login'
        });
      }

    },
    handleLoginInput: function(loginUser, IsLogin) {
        this.setState({
            loginUser: loginUser,
            IsLogin: IsLogin
        });
    },
    handlerLogout: function(e) {
        e.preventDefault();
        persistentStorage.logOut();
        this.setState({
            loginUser: "",
            IsLogin: false
        })
        this.context.router.push({
            pathname: '/login'
        });

    },
    testLogin : function(){



    },
    render: function() {
      console.log(this.props.postList);
        var childrenWithProps = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, {
                loginUserprops: this.handleLoginInput,
                userName: this.state.loginUser,
                isLogin: this.state.IsLogin
            });
        }.bind(this));
        return ( <
            div >
            <
            Navbar userName = {
                this.state.loginUser
            }
            ontestLogin = {
              this.testLogin
            }
            logout = {
                this.handlerLogout
            } >
            <
            /Navbar> {
                childrenWithProps
            } <
            /div>
        );
    }
});

var mapStateToProps = function(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
      login: function(username, password) {
        return  dispatch(login(username,password));
      },
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Main);

//module.exports = connect( mapDispatch)(Main);
