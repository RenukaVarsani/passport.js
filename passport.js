const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({

    clientID: process.env.Google_Client_ID,
    clientSecret: process.env.Google_Client_Secret,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
},

function(_request, _accessToken, _refreshToken, profile, done) {
      return done(err, profile);
    })
  )

  passport.serializeUser(function(user, done){
    done(null , user)
})

passport.deserializeUser(function(user, done){
    done(null , user)
})

