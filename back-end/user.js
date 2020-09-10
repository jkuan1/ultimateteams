/*
This is the user setting page. I want to return a json object here with
the user's data
*/

//CURRENTLY THIS FILE DOES NOTHING

//The constant variables we'll need
const express = require('express')
const app = express()

//Line to export the functions in here
module.exports = test2;

/*
Stuff it will have in it:
User Name
Password
ScreenName
Birthday
Email
PhoneNumber
*/

var text = {"firstName":"John", "lastName":"Doe"}
var obj = JSON.parse(text);

function test2() {
    return obj;
}