import {test_user} from '/main.js'

function login_function(username, password) {

    if(test_user.hasOwnProperty('UserName')){
        if(database.UserName == username){
            if(test_user.Password == password){
                return("200 OK")
            }
            else{
                return("401 Unauthorized")
            }
        }
    }
}