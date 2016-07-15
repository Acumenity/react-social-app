var Redux = require('redux');
//var combineReducers Redux.combineReducers;
var Immutable = require('immutable');
var ActionConstants = require('../utils/ActionConstants');
var initialState = new Immutable.Map({
  email: '',
  password: '',
  isLoggingIn: false,
  isLoggedIn: false,
  error: null,
  id : -1,
  post : ""
});
var user =  function (state , action) {
  switch (action.type) {
    case 'SET_STATE':
      return state = initialState;
    case ActionConstants.LOGIN_ATTEMPT:
      return state.merge({
        isLoggingIn: true,
        isLoggedIn: false,
        email: action.email,
        password: action.password // Note you shouldn't store user's password in real apps
      });
    case ActionConstants.LOGGED_FAILED:
      return state.merge({
        error: action.error,
        isLoggingIn: false,
        isLoggedIn: false
      });
    case ActionConstants.LOGGED_SUCCESSFULLY:
      return state = state.merge({
        error: null,
        isLoggingIn: false,
        isLoggedIn: true,
        email: action.response.data[0].name,
        password: action.response.data[0].password, // Note you shouldn't store user's password in real apps
        id : action.response.data[0].id
      });
      break;
      case ActionConstants.GET_ALL_POSTS:
        return state = state.merge({
          error: null,
          post: action.response.data
        });
        break;
    default:

      return state;
  }
}
// var userReducer = function(state = initialState, action) {
//
//     if (state === undefined) {
//         state = [];
//     }
//     if(action.type == "SET_STATE"){
//       return state._v[0];
//
//     }
//     if (action.type === ActionConstants.ADD_USER) {
//         var flage = false;
//
//         state.map(function(t) {
//             if (t.username === action.user.username) {
//                 flage = true;
//             }
//             return t;
//         });
//         if (!flage) {
//             state.push(action.user);
//         }
//
//     }
//     if (action.type === ActionConstants.ADD_POST) {
//         var index = helper(state, action.post.user)
//         if (index != -1) {
//             state[index].post.push({
//                 "post": action.post.post,
//                 "likes": 0,
//                 "time":action.post.time
//             })
//         }
//
//     }
//     if (action.type === ActionConstants.REMOVE_POST) {
//         var index = helper(state, action.post.user)
//         if (index != -1) {
//             state[index].post.splice(action.post.postNumber,1);
//         }
//
//     }
//     if (action.type === ActionConstants.ADD_REPLY) {
//         var index = helper(state, action.post.user)
//         if (index != -1) {
//             if (state[index].post[action.post.postNumber]['replies'] !== undefined) {
//                 state[index].post[action.post.postNumber]['replies'].push({
//                     "time": action.post.time,
//                     "text": action.post.text,
//                     "replyUser":action.post.replyUser
//                 });
//             } else {
//                 state[index].post[action.post.postNumber]['replies'] = [];
//                 state[index].post[action.post.postNumber]['replies'].push({
//                   "time": action.post.time,
//                   "text": action.post.text,
//                   "replyUser":action.post.replyUser
//                 });
//             }
//         }
//     }
//     if (action.type === ActionConstants.LIKE_POST) {
//         var index = helper(state, action.userName.user)
//         if (index != -1) {
//             var likeme = state[index].post[action.userName.postNumber].likes
//             likeme = likeme + 1;
//             state[index].post[action.userName.postNumber].likes = likeme;
//         }
//     }
// console.log(state);
//     return state;
// }
//
// var helper = function(state, user) {
//     var j = -1;
//     for (var i = 0; i < state.length; i++) {
//         if (state[i].username === user) {
//             j = i;
//         }
//     }
//     return j;
// }

module.exports = user;
