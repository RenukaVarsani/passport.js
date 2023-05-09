require('dotenv').config()
require('./passport')
const express = require('express');
const app = express();
const passport = require('passport');
const cookieSession = require('cookie-session');

app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send("<button><a href='/auth/google'>Login With Google</a></button>")
});

app.get('/auth/google' , 
passport.authenticate('google', 
{ scope:    [ 'email', 'profile' ]}));

app.get('/google/callback' , passport.authenticate( 'google', {
    successRedirect : '/success',
    failureRedirect : '/failure'
}));

app.get('/failure' , (req,res)=>{
    res.send("something went wrong")
})

app.get('/success' , (req,res) => {
    res.send("success!!!!!")
})
app.listen( 5000 , ()=>{
    console.log("server is running on 5000 port");
})