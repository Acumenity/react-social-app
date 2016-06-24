var React = require('react');

var ReplyBox = React.createClass({
	render: function() {
    var divStyle = {
      width: 300,
      margin: 'auto'
    };
	return (

    <div className="reply-box">
      <textarea onChange={this.props.onReplyChange} data-test={this.props.number} value={this.props.reply.text}  className="form-control" rows="1"></textarea>
      <button value={this.props.number} type="submit" onClick={this.props.onReply} value={this.props.number} className="btn btn-primary pull-right">Reply</button>
    </div>

	);
}
});

module.exports = ReplyBox;
