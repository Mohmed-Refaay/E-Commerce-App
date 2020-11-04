const nodemailer = require("nodemailer");
const sendGrid = require("nodemailer-sendgrid-transport");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const transportor = nodemailer.createTransport(
  sendGrid({
    auth: {
      api_key:
        "*****************************",
    },
  })
);

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    isLoggedIn: req.session.isLoggedIn,
    errorMessage: req.flash("error"),
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        req.flash("error", "Invalid Email or Password.");
        return res.redirect("/login");
      }

      bcrypt
        .compare(password, user.password)
        .then((match) => {
          if (!match) {
            req.flash("error", "Invalid Email or Password.");
            return res.redirect("/login");
          }

          req.session.isLoggedIn = true;
          req.session.user = user;
          req.session.save((err) => {
            console.log(err);
            res.redirect("/");
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};

exports.getSignUp = (req, res, next) => {
  res.render("auth/signup", {
    isLoggedIn: req.session.isLoggedIn,
    path: "/signup",
    pageTitle: "Sign Up",
    errorMessage: req.flash("error"),
  });
};

exports.postSignUp = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        req.flash("error", "This Account is Already exist.");
        return res.redirect("/signup");
      }
      bcrypt
        .hash(password, 15)
        .then((hashedPassword) => {
          const user = new User({
            email,
            password: hashedPassword,
            cart: { items: [] },
          });
          return user.save();
        })
        .then((results) => {
          res.redirect("/login");
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
