var loadstates = function  (){
  try {
      var serilizeState = localStorage.getItem('state');
      if(serilizeState === null){
        return undefined;
      }
      return JSON.parse(serilizeState);

  }catch(err){
    return undefined
  }


}
var saveStates = function(state){
  try{
      var serilizeState = JSON.stringify(state);
      localStorage.setItem('state',serilizeState);
  }catch(err){

  }

}

var login = function(username,password){
      var loginState = [];
      loginState[0] = username;
      loginState[1] = password;
  try{
      var serilizeState = JSON.stringify(loginState);
      localStorage.setItem('loginState',serilizeState);
  }catch(err){

  }
}
var getCredntials = function(){
  try {
      var serilizeState = localStorage.getItem('loginState');
      if(serilizeState === null){
        return undefined;
      }
      return JSON.parse(serilizeState);

  }catch(err){
    return undefined
  }
}
var logOut = function(){
    try{
      localStorage.removeItem('loginState');
      return true;
    }catch(err){

    }

}

module.exports = {saveStates,loadstates,login, logOut, getCredntials}
