const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const User = require('../models/User');

passport.serializeUser((user, done) => {
  console.log("we are in the serializer")
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('we are in the deserializer')
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'username', passwordField:'password' }, (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
        console.log(user)
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { msg: `Username ${username} not found.` });
      }
        if (password != user.password) { return done(err); }
        if (password===user.password) {
          return done(null, user);
        }
        return done(null, false, { msg: 'Invalid email or password.' });

    });
  }));




  