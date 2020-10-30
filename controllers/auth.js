const e = require("express");
const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    isLoggedIn: req.session.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("5f9882bf1b7ff808dc647355")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err)
        res.redirect("/");
      })
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err)
        res.redirect("/");
    })
}

exports.getSignUp = (req, res, next) => {
  res.render('auth/signup', {
    isLoggedIn: req.session.isLoggedIn,
    path: "/signup",
    pageTitle: "Sign Up"
  })
}

exports.postSignUp = (req, res, next) => {}