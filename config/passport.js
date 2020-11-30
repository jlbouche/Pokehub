const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const Researcher = require('../models/researcher');

// configuring Passport!
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
}, function (accessToken, refreshToken, profile, cb) {  // Verify CB
  // A user has logged in via Google OAuth
  console.log(profile);
  Researcher.findOne({ googleId: profile.id }, function (err, researcher) {
    if (err) return cb(err);
    if (researcher) {
      return cb(null, researcher);
    } else {
      // We have a new researcher!
      const newResearcher = new Researcher({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
        avatar: profile.photos[0].value
      });
      newResearcher.save(function (err) {
        if (err) return cb(err);
        return cb(null, newResearcher);
      });
    }
  });
}));

passport.serializeUser(function(researcher, done) {
  done(null, researcher.id);
});

passport.deserializeUser(function(id, done) {
  Researcher.findById(id, function(err, researcher) {
    done(err, researcher);
  })
});



