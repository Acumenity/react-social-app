var React = require('react');
var PostBox = require('../components/PostBox')
var ReactRouter = require('react-router');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var actions = require('../action/action')
var PostUI = require('../components/PostUI');
var Home = React.createClass({
            getInitialState: function() {
								var helpObj =  this.helper();
                return {
                    post: "",
                    reply: helpObj.reply,
										postArray : helpObj.postArray

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
                    "text": "",
                    "index": post.index,
										"time":""
                });
							 this.state.postArray.unshift(
									{
										"username" : this.props.userName,
										"time" : post.post.time,
										"text": post.post.post,
										"post": post.post,
										"reply":[],
										"like":0,
										"index": post.index
									}
								);
								var postArrayCopy = this.state.postArray;
								console.log(this.state.postArray);
                this.setState({
                    post: "",
										postArray: postArrayCopy
                });
            },
						SortArray : function(arr){
							arr.sort(function(a, b){
    						var keyA = new Date(a.time),
        				keyB = new Date(b.time);
    					  if(keyA < keyB) return -1;
    						if(keyA > keyB) return 1;
    						return 0;
								});
								console.log(arr);
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
                this.props.like(this.state.postArray[postNumber].username, this.state.postArray[postNumber].index);
								this.setState({
										postArray: this.helper().postArray
								});
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
                this.props.reply(this.state.postArray[e.target.value].username, this.state.postArray[e.target.value].index, this.state.reply[e.target.value].text,time , this.props.userName);
								this.setState({
										postArray: this.helper().postArray
								});
                var reply = this.state.reply;
                reply[e.target.value].text = "";
                this.setState({
                    reply: reply
                });
            },
            helper: function() {
							var postArray = [];
                var reply = [];
                for (var i = 0; i < this.props.postList.length; i++) {
                    this.props.postList[i].post.forEach(function(post, index) {
											//console.log(post);
											postArray.push(
												{
													"username" : this.props.postList[i].username,
													"time" : post.time,
													"text": post.post,
													"post": post,
													"reply": (post.replies !== undefined) ? post.replies : [],
													"like":post.likes,
													"index": index
												}
											);
                        reply.push({
                            "username": this.props.postList[i].username,
                            "post": post,
                            "text": "",
                            "index": index,
														"time":""

                        });

                    }.bind(this));

                }

								this.SortArray(postArray);
								postArray.reverse();
                return {"reply":reply,"postArray":postArray};
            },
						handlerRemovePost : function(e){

								e.preventDefault();

								var index = e.currentTarget.getAttribute('data-test');
								var username = this.state.postArray[index].username;
								if(this.props.userName === username ){
									this.props.remove(this.state.postArray[index].username,this.state.postArray[index].index);
									this.setState({
											postArray: this.helper().postArray
									});
								}

								console.log(index);

						},
            render: function() {

                var rows = [];
                var index = 0;
                var newComent = <h3 className='text-bg text-center'>
                	You need to login first to post and view comments
                	</h3>;
                if (this.props.isLogin) {
                	newComent = <PostBox textValue = {
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
						} > < /PostBox>;
                    for (var ii = 0; ii < this.state.postArray.length; ii++) {
                        var indexs = 0;
                        var username = this.state.postArray[ii].username;
                      //  this.state.postArray[ii].post.forEach(function(post) {
                                rows.push( < PostUI post = {
                                        this.state.postArray[ii].text
                                    }
                                    username = {
                                        username
                                    }
                                    onReply = {
                                        this.handerReply
                                    }
                                    replyList = {
                                        this.state.postArray[ii].reply
                                    }
                                    reply = {
                                        this.state.reply[ii]
                                    }
                                    onReplyChange = {
                                        this.handerReplyChange
                                    }
                                    number = {
                                        ii
                                    }
                                    likes = {
                                        this.state.postArray[ii].like
                                    }
																		OnSubmitRemovePost = {
																				this.handlerRemovePost
																		}
																		time = {
																				this.state.postArray[ii].time
																		}
                                    onSubmitLike = {
                                        this.handerSubmitlike
                                    } > < /PostUI>);
                                  //  index++;
                              //  }.bind(this));
                        }
                    }
                    return (
                    	<div >
                        	{newComent}
						<div > {
                            rows
                        } < /div>
                        </div>
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
                reply: function(user, postNumber, text, time, replyUser) {
                    dispatch(actions.addReply(user, postNumber, text, time, replyUser));
                },
								remove: function(user, postNumber) {
                    dispatch(actions.removePost(user, postNumber));
                },
            };
        }
        module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);
