const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // creates model class in mongoose

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        new User({ googleId: profile.id }).save().then((newUser) => {
          console.log('new user created:' + newUser)
        }
      );  //creates new instance of a user in mongoose and saves it to the database.
    }
  )
);
