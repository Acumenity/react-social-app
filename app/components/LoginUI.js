var React = require('react');

var LoginUI = React.createClass({
	render: function() {
    var divStyle = {
    width: 300
    };
	return (
    <div className="container" style={divStyle}>
      <form className="form-signin">
        <h2 className="form-signin-heading">Please Login</h2>
        <div className="login-box">
					<label for="inputEmail" className="sr-only">Email address</label>
					<input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange = {this.props.onUpdateUserState} value={this.props.username} required="" autofocus=""/>
					<label for="inputPassword" className="sr-only">Password</label>
					<input type="password" id="inputPassword" className="form-control" onChange = {this.props.onUpdatePasswordState} value={this.props.password}  placeholder="Password" required=""/>
					<button onClick={this.props.onSubmitUser} className="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
				</div>
      </form>
    </div>
	);
}
});

module.exports = LoginUI;
