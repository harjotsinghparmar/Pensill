const passport  = require('passport')
const LocalStrategy = require('passport-local')

var User = require('../models/User')

passport.serializeUser(function(user, done) {
    console.log(user)
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log(user)
      done(err, user);
    });
  });


passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log(username)
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (user.password != password) {
          console.log("password didn't match")
           return done(null, false); }
        console.log('password matched')
        return done(null, user);
      });
    }
  ));