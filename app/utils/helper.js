var axios = require('axios');

function checkLogin(username, password) {
    return axios.get('http://localhost:3000/prople?name='+username);

}
function getAllPosts() {
    return axios.get('http://localhost:3000/prople');

}
function loadState(){
    return axios.get('http://localhost:3000/prople')
}
function saveState(data){
    return axios.post('http://localhost:3000/prople', data)
}
var helper = {
   getAllPosts : function(){
     return getAllPosts()
      .then(function(response) {
                 return response;
             })
             .catch(function(response) {
             });;
   },
    login: function(username, password) {
        return checkLogin(username, password)
         .then(function(response) {
                    console.log(response);
                    return response;
                })
                .catch(function(response) {
                    console.log(response);
                });;
    },
    loadState : function(){

           return loadState().then(function(data){
            //  console.log(data.data);
              return data.data;
           }).catch(function(err){
              console.log(err);

           })
    },
    saveState: function(data){
          return saveState(data).then(function(){
              console.log("done");
          }).catch(function(){

          })

    }
}

module.exports = helper;
