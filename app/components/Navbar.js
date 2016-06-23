var React = require('react');
var ReactRouter =require('react-router');
var Link = ReactRouter.Link;
var Navbar = React.createClass({
	render: function() {
		if(this.props.userName!=""){
			var	logins = this.props.userName;
		}
		else
		{
			var logins = "Login";
		}
	return (
    <nav className="navbar navbar-default">
	    <div className="container-fluid">
		      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		        <ul className="nav navbar-nav">
		          <li><a href="#"><Link to="/home/">Home</Link></a></li>
		          <li><a href="/login/"><Link to="login/">{logins}</Link></a></li>
							<li><a onClick={this.props.logout} href="#">logout</a></li>
		        </ul>
		      </div>
	    </div>
    </nav>
	);
}
});

module.exports = Navbar;
