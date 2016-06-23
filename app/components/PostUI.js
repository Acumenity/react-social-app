var React = require('react');
var ReplyText = require('../components/ReplyUI');
var ReplyBox = require('../components/ReplyBox');
var PostUI = React.createClass({
	render: function() {
    var rows = [];
    if(this.props.replyList !== undefined){
				this.props.replyList.forEach(function(reply) {
					rows.push(<ReplyText text={reply.text} ></ReplyText>);
			}.bind(this));
    }

	return (

		<div className="container">
			<div className="row">
				<div className="col-xs-12">
				<div className="post clearfix">
						<div className="post-box clearfix">
							<img className="ico-img img-responsive img-rounded" src="https://placeimg.com/200/200/tech"></img>
							<div className="post-detail">
								<h3>{this.props.username}</h3>
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
								<ReplyBox
										onReplyChange={this.props.onReplyChange}
										number={this.props.number}
										reply={this.props.reply}
										onReply={this.props.onReply}>
							</ReplyBox>
						</div>
				</div>
				</div>
			</div>
		</div>

	);
}
});

module.exports = PostUI;
