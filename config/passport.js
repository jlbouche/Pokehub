const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const Trainer = require('../models/trainer');

// configuring Passport!
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
}, function (accessToken, refreshToken, profile, cb) {  // Verify CB
  // A user has logged in via Google OAuth
  console.log(profile);
  Trainer.findOne({ googleId: profile.id }, function (err, trainer) {
    if (err) return cb(err);
    if (trainer) {
      return cb(null, trainer);
    } else {
      // We have a new trainer!
      const newTrainer = new Trainer({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
        avatar: profile.photos[0].value
      });
      newTrainer.save(function (err) {
        if (err) return cb(err);
        return cb(null, newTrainer);
      });
    }
  });
}));

passport.serializeUser(function(trainer, done) {
  done(null, trainer.id);
});

passport.deserializeUser(function(id, done) {
  Trainer.findById(id, function(err, trainer) {
    done(err, trainer);
  })
});



