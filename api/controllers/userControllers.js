const UserSchema = require("../modules/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register-post
const registerpostItems = (req, res, next) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;
  var userType = req.body.userType;

  if (password !== confirmPassword) {
    res.json({
      message: "Password is not match!",
    });
  } else {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        return res.json({
          message: "Something wrong!",
        });
      } else {
        const userData = new UserSchema({
          username: username,
          email: email,
          password: hash,
          confirmPassword: hash,
          userType: userType,
        });
        userData
          .save()
          .then((result) => {
            res.status(200).json({
              UserList: result,
            });
          })
          .catch((error) => {
            res.status(500).json({
              error: `${error} user faild.`,
            });
          });
      }
    });
  }
};

//login-post
const loginpostItems = (req, res, next) => {
  var username = req.body.username;
  UserSchema.find({ username:username })
    .exec()
    .then((user) => {
      // console.log(user);
      if (user.length < 1) {
        return res.status(404).json({
          message: "Auth Failed.",
        });
      } else {
        bcrypt.compare(
          req.body.password,
          user[0].password,
          function (err, result) {
            if (err) {
              return res.status(404).json({
                message: "Auth Failed..",
              });
            } else if (result) {
              const maxAge = 3 * 60 * 60;
              var token = jwt.sign(
                {
                  username: user[0].username,
                  userType: user[0].userType,
                  userId: user[0]._id,
                },
                "MY_SECRET_KEY",
                {
                  expiresIn: maxAge,
                }
              );
              res.status(200).json({
                message: "user found...",
                username: username,
                token: token,
              });
            } else {
              res.status(404).json({
                message: "Auth Failed....",
              });
            }
          }
        );
      }
    })
    .catch((error) => {
      res.status(400).json({
        error: "user error",
      });
    });
};

//register-get
const getItems = async (req, res) => {
  try {
    const Register_data = await UserSchema.find().then((result) => {
      res.status(200).json({
        message: "Register Data...",
        Register_Data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

const getIdItems = () => {};

const deleteItems = () => {};

module.exports = {
  getItems,
  registerpostItems,
  loginpostItems,
  getIdItems,
  deleteItems,
};

