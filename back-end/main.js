/* 
This is the Main Page
Currently, it only takes you to the sample.js when a get request is
made for that 
*/

const express = require('express')
const app = express()
const port = 5000;
const test_login = '/testlogin'

//The following line will get the function from testlogin.js
const test = require('./testlogin.js');

//This block here will open the main page and display: 'This is the Main Page'
app.get('/', (req, res) => {
    res.send('This is the Main Page');

})

app.get('/example', (req, res) => {
    //const firstName = req.query.firstName;
    res.json({
        UserName: 'Ryan Lin',
        Password: 'Password',
        Birthday: 'January 14, 1999',
        Email: 'lin.ryan99@hotmail.com',
        PhoneNumber: '604-446-6883'});
})

//This block opens up url/testlogin and displays 'Test login succesful!'
app.get(test_login, (req, res) =>{
    res.send(test());
})


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})
