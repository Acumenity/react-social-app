var React = require('react');

var ReplyText = React.createClass({
	render: function() {
    var divStyle = {
      width: 300,
      margin: 'auto'
    };
	return (

      <li>
        <div className="inner-holder">
					<img className="ico-img img-responsive img-rounded" src="https://placeimg.com/200/200/tech"></img>
					<div className="post-detail">
						<h4>Fake Name</h4>
						<time datetime="2017-02-14" className="time">2017-02-14</time>
					</div>
				</div>
				<div className="text-holder">
					<p>{this.props.text}</p>
				</div>
      </li>

	);
}
});

module.exports = ReplyText;
