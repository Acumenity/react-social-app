var nextTodoId = 0;
var ADD_USER = "addUser"
var ADD_POST = "addPost"
var LIKE_POST = "likePost"
var REPLY_POST = "addReply"
var ActionConstants = require('../utils/ActionConstants');
var addUser = function(username, password) {

    return {
        type: ActionConstants.ADD_USER,
        id: nextTodoId++,
        user: {
            "username": username,
            "password": password,
            "post": []
        }
    };
}
var addPost = function(text, user) {
    return {
        type: ActionConstants.ADD_POST,
        post: {
            "user": user,
            "post": text
        }
    };
}
var likePost = function(user, postNumber) {
    return {
        type: ActionConstants.LIKE_POST,
        userName: {
            "user": user,
            "postNumber": postNumber
        }

    };
}
var addReply = function(user, postNumber, text) {
    return {
        type: ActionConstants.ADD_REPLY,
        post: {
            "user": user,
            "postNumber": postNumber,
            "text": text
        }
    };
}


module.exports = {
    addUser,
    addPost,
    likePost,
    addReply
};
