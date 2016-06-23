var React = require('react');
var PostBox = require('../components/PostBox')
var ReactRouter = require('react-router');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var actions = require('../action/action')
var PostUI = require('../components/PostUI');
var Home = React.createClass({
            getInitialState: function() {

                return {
                    post: "",
                    reply: this.helper()
                };
            },
            handlerSubmitPost: function(e) {
                e.preventDefault();
								var time = new Date().toString();;
								console.log(time);
                this.props.addpost(this.state.post, this.props.userName,time);
                this.setState(this.props.postList);
                var post = this.findPost(this.props.userName, this.state.post)
                this.state.reply.push({
                    "username": this.props.userName,
                    "post": post.post,
                    "text": "",
                    "index": post.index,
										"time":""
                })
                this.setState({
                    post: ""
                });
            },
            findPost: function(username, text) {
                for (var i = 0; i < this.props.postList.length; i++) {
                    if (username == this.props.postList[i].username) {
                        for (var j = 0; j < this.props.postList[i].post.length; j++) {
                            if (text == this.props.postList[i].post[j].post) {
                                return ({
                                    "post": this.props.postList[i].post[j],
                                    "index": j
                                });
                            }
                        }
                    }
                }
            },
            handerTextAreatInput: function(e) {
                this.setState({
                    post: e.target.value
                });
            },

            handerSubmitlike: function(e) {
                e.preventDefault();
                var postNumber = e.currentTarget.getAttribute('data-test');
                this.props.like(this.state.reply[postNumber].username, this.state.reply[postNumber].index);
                this.setState(this.props.postList);
            },

            handerReplyChange: function(e) {
                var index = e.currentTarget.getAttribute('data-test');
                var reply = this.state.reply;
                reply[index].text = e.target.value;
                this.setState({
                    reply: reply
                });

            },

            handerReply: function(e) {
                e.preventDefault();

							 var time = new Date().toString();;
                this.props.reply(this.state.reply[e.target.value].username, this.state.reply[e.target.value].index, this.state.reply[e.target.value].text,time );
                this.setState(this.props.postList);
                var reply = this.state.reply;
                reply[e.target.value].text = "";
                this.setState({
                    reply: reply
                });
            },
            helper: function() {
                var reply = [];
                for (var i = 0; i < this.props.postList.length; i++) {
                    this.props.postList[i].post.forEach(function(post, index) {
                        reply.push({
                            "username": this.props.postList[i].username,
                            "post": post,
                            "text": "",
                            "index": index,
														"time":""

                        });

                    }.bind(this));

                }
                return reply;
            },
            render: function() {

                var rows = [];
                var index = 0;

                if (this.props.isLogin) {
                    for (var ii = 0; ii < this.props.postList.length; ii++) {
                        var indexs = 0;
                        var username = this.props.postList[ii].username;
                        this.props.postList[ii].post.forEach(function(post) {
                                rows.push( < PostUI post = {
                                        post.post
                                    }
                                    username = {
                                        username
                                    }
                                    onReply = {
                                        this.handerReply
                                    }
                                    replyList = {
                                        post.replies
                                    }
                                    reply = {
                                        this.state.reply[index]
                                    }
                                    onReplyChange = {
                                        this.handerReplyChange
                                    }
                                    number = {
                                        index
                                    }
                                    likes = {
                                        post.likes
                                    }
																		time = {
																				post.time
																		}
                                    onSubmitLike = {
                                        this.handerSubmitlike
                                    } > < /PostUI>);
                                    index++;
                                }.bind(this));
                        }
                    }
                    return ( <
                        div >
                        <
                        PostBox textValue = {
                            this.state.post
                        }
                        onTextChange = {
                            this.handerTextAreatInput
                        }
                        onSubmitPost = {
                            this.handlerSubmitPost
                        }
												username = {
													this.props.username
												} > < /PostBox> <
                        div > {
                            rows
                        } < /div> <
                        /div>
                    );
                }
            });
        var mapStateToProps = function(state) {
            return {
                postList: state
            }
        }
        var mapDispatchToProps = function(dispatch) {
            return {
                addpost: function(post, user,time ) {
                    dispatch(actions.addPost(post, user,time));
                },
                like: function(user, postNumber) {
                    dispatch(actions.likePost(user, postNumber));
                },
                reply: function(user, postNumber, text, time) {
                    dispatch(actions.addReply(user, postNumber, text, time));
                },
            };
        }
        module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);
