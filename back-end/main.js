/* 
This is the Main Page
Currently, it only takes you to the sample.js when a get request is
made for that 
*/

const express = require('express')
const app = express()
const port = 5000;
const login = '/login'
const test_user = {
    UserName: 'Ryan Lin',
    Password: 'Password',
    Birthday: 'January 14, 1999',
    Email: 'lin.ryan99@hotmail.com',
    PhoneNumber: '604-446-6883'};

//The following line will get the function from testlogin.js
const test = require('./login.js');

//This block here will open the main page and display: 'This is the Main Page'
app.get('/', (req, res) => {
    res.send('This is the Main Page');

})

app.get('/user', (req, res) => {
    //const firstName = req.query.firstName;
    res.json(test_user)

//This block opens up url/testlogin and displays 'Test login succesful!'
app.get(login, (req, res) =>{
    res.send(test());
})


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})
