var nextTodoId = 0;
var ADD_USER = "addUser"
var ADD_POST = "addPost"
var LIKE_POST = "likePost"
var REPLY_POST = "addReply"
var axios = require('axios');
//var fetch = require('node-fetch');
var axios = require('axios');
var helper = require('../utils/helper')
var ActionConstants = require('../utils/ActionConstants');
var addUser = function(username, password) {

    return {
        type: ActionConstants.ADD_USER,
        id: nextTodoId++,
        user: {
            "username": username,
            "password": password,
            "post": [],
            "_id" : nextTodoId++
        }
    };
}
var addPost = function(text, user,time) {
    return {
        type: ActionConstants.ADD_POST,
        post: {
            "user": user,
            "post": text,
            "time":time
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
var addReply = function(user, postNumber, text, time,replyUser) {
    return {
        type: ActionConstants.ADD_REPLY,
        post: {
            "user": user,
            "postNumber": postNumber,
            "text": text,
            "time":time,
            "replyUser":replyUser
        }
    };
}

var removePost = function(user, postNumber) {
    return {
        type: ActionConstants.REMOVE_POST,
        post: {
            "user": user,
            "postNumber": postNumber
        }
    };
}

 loginError = function (error) {
  return { error, type: ActionConstants.LOGGED_FAILED };
}
 getAllPostsSuccess = function(){
   return  function(dispatch){
     dispatch({ response, type: ActionConstants.GET_ALL_POST });
     console.log("GET_ALL_POST");
   //  router.transitionTo('/dashboard');
   };
 }
 loginSuccess = function (response) {
   return {
     response, type: ActionConstants.LOGGED_SUCCESSFULLY

  // return  function(dispatch){
  //   dispatch({ response, type: ActionConstants.LOGGED_SUCCESSFULLY });
  //   console.log("login");

  };
}

 loginRequest = function (email, password) {
  var user = {email: email, password: password};
  return { user, type: ActionConstants.LOGIN_ATTEMPT };
}

getAllPosts = function (username, password) {
 return function(dispatch){
   helper.getAllPosts()
   .then(function(response){
     if (response.status >= 200 && response.status < 300) {
       dispatch(getAllPostsSuccess(response));
     } else {
       const error = new Error(response.statusText);
       error.response = response;
       dispatch(loginError(error));
       throw error;
     }
   })
   .catch(function(error) { console.log('request failed', error); });
 }
}

 login = function (username, password) {
  return function(dispatch){
    return dispatch(
     fetchUser(username, dispatch)
   )

    // helper.login(username, password)
    // .then(function(response){
    //   if (response.status >= 200 && response.status < 300) {
    //   return  Promise.all([
    //         dispatch(loginSuccess(response))
    //     ]);
    //
    //   } else {
    //     const error = new Error(response.statusText);
    //     error.response = response;
    //     dispatch(loginError(error));
    //     throw error;
    //   }
    //
    // })
    // .catch(function(error) { console.log('request failed', error); });
  }
}

fetchUser = function(username,password){
  return function (dispatch) {
   return helper.login(username,password).then(function(response){
             if (response.status >= 200 && response.status < 300) {
                dispatch(loginSuccess(response));
             }
             else {
                 const error = new Error(response.statusText);
                 error.response = response;
                 dispatch(loginError(error));
                 throw error;
               }
   }).catch(function(){

   });
 }
 }
module.exports = {
    addUser,
    addPost,
    likePost,
    addReply,
    removePost,
    login,
    loginSuccess,
    loginRequest,
    loginError



};
