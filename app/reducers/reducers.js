var Redux = require('redux');
//var combineReducers Redux.combineReducers;
var ActionConstants = require('../utils/ActionConstants');

var userReducer = function(state, action) {

    if (state === undefined) {
        state = [];
    }
    if (action.type === ActionConstants.ADD_USER) {
        var flage = false;

        state.map(function(t) {
            if (t.username === action.user.username) {
                flage = true;
            }
            return t;
        });
        if (!flage) {
            state.push(action.user);
        }

    }
    if (action.type === ActionConstants.ADD_POST) {
        var index = helper(state, action.post.user)
        if (index != -1) {
            state[index].post.push({
                "post": action.post.post,
                "likes": 0
            })
        }

    }
    if (action.type === ActionConstants.ADD_REPLY) {
        var index = helper(state, action.post.user)
        if (index != -1) {
            if (state[index].post[action.post.postNumber]['replies'] !== undefined) {
                state[index].post[action.post.postNumber]['replies'].push({
                    time: "asda",
                    "text": action.post.text
                });
                // state[index].post.push({"post":action.post.post,"likes":0})
            } else {
                state[index].post[action.post.postNumber]['replies'] = [];
                state[index].post[action.post.postNumber]['replies'].push({
                    time: "asda",
                    "text": action.post.text
                });
            }
        }
    }
    if (action.type === ActionConstants.LIKE_POST) {
        var index = helper(state, action.userName.user)
        if (index != -1) {
            var likeme = state[index].post[action.userName.postNumber].likes
            likeme = likeme + 1;
            state[index].post[action.userName.postNumber].likes = likeme;
        }
    }

    return state;
}

var helper = function(state, user) {
    var j = -1;
    for (var i = 0; i < state.length; i++) {
        if (state[i].username === user) {
            j = i;
        }
    }
    return j;
}

module.exports = userReducer;
