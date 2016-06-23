var React = require('react');
var ReplyBox = require('../components/ReplyUI');
var PostUI = React.createClass({
	render: function() {
    var divStyle = {
      width: 300,
      margin: 'auto'
    };
    var buttonStyle = {
      margin: 10
    };
    var LikebuttonStyle = {
      margin: 19
    };

    var rows = [];
    if(this.props.replyList !== undefined){
				this.props.replyList.forEach(function(reply) {
					rows.push(<ReplyBox text={reply.text} ></ReplyBox>);
			}.bind(this));
    }


	return (

		<div className="post">

        <div className="post-box clearfix">
          <img className="ico-img img-responsive img-rounded" src="https://placeimg.com/200/200/tech"></img>
          <div className="post-detail">
            <h3>{this.props.username} :</h3>
            <p>{this.props.post}</p>
          </div>
        </div>

        <div className="post-block clearfix">
          <ul className="list list-inline">
            <li>
              <button onClick={this.props.onSubmitLike} data-test={this.props.number} type="submit" className="btn-like">
                <span className="count">{this.props.likes}</span>
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </button>
            </li>
          </ul>

            <ul className="comments-list list-unstyled">
            {rows}
            </ul>

          <div className="reply-box">
            <textarea onChange={this.props.onReplyChange} data-test={this.props.number} value={this.props.reply.text}  className="form-control" rows="1"></textarea>
            <button value={this.props.number} type="submit" onClick={this.props.onReply} value={this.props.number} className="btn btn-primary pull-right">Reply</button>
          </div>
        </div>
    </div>

	);
}
});

module.exports = PostUI;
