var React = require('react');

var ReplyBox = React.createClass({
	render: function() {
    var divStyle = {
      width: 300,
      margin: 'auto'
    };
	return (

      <li>
        <img className="ico-img img-responsive img-rounded" src="https://placeimg.com/200/200/tech"></img>
        <div className="post-detail">
          <p>{this.props.text}</p>
        </div>
      </li>
  
	);
}
});

module.exports = ReplyBox;
