var React = require('react');

var PostBox = React.createClass({
	render: function() {
    var divStyle = {
      width: 300,
      margin: 'auto'
    };
	return (
		<div style={divStyle}>

        <div className="post-container clearfix">
          <div className="heading-holder">
						<img className="ico-img img-responsive img-rounded" src="https://placeimg.com/200/200/tech"></img>
						<h2>New Post</h2>
					</div>
          <div className="post-holder clearfix">
            <textarea onChange={this.props.onTextChange}  value ={this.props.textValue} className="form-control" rows="3" placeholder="Please Write Here..."></textarea>
            <button onClick ={this.props.onSubmitPost} type="submit" className="btn btn-primary">Post</button>
          </div>
        </div>
    </div>
	);
}
});

module.exports = PostBox;
