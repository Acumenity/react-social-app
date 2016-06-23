var nextTodoId = 0;
var ADD_USER ="addUser"
var ADD_POST ="addPost"
var LIKE_POST = "likePost"
var REPLY_POST = "addReply"
var  addUser = function(username, password) {

   return {
      type: ADD_USER,
      id: nextTodoId++,
      user: {"username":username,"password":password,"post":[]}
   };
 }
 var addPost = function(text,user){
   return {
      type: ADD_POST,
      post: {"user":user,"post":text}
   };
 }
 var likePost = function(user,postNumber){
   return {
      type: LIKE_POST,
      userName: {"user":user,"postNumber":postNumber}

   };
 }
 var addReply = function(user,postNumber,text){
   return {
      type: REPLY_POST,
      post: {"user":user,"postNumber":postNumber,"text":text}
   };
 }


module.exports =  {addUser,addPost,likePost,addReply};
