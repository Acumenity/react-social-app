var axios = require('axios');

function checkLogin(username, password) {
    var data = {
        "customer": {
            "email": username,
            "password": password
        }
    }
    return axios.post('http://localhost/trunk/api/v1/login', data)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(response) {
            console.log(response);
        });
}
var helper = {
    login: function(username, password) {
        return checkLogin(username, password);
    }
}

module.exports = helper;
