var express = require( 'express' );
var router = express.Router();
var passport = require( 'passport' );
var LocalStrategy = require( 'passport-local' ).Strategy;

module.exports.ensureAuthenticated = function ( req, res, next ) {
  if ( req.isAuthenticated() ) {
    return next();
  } else {
    //req.flash('error_msg','You are not logged in');
    res.redirect( '/users/login' );
  }
}