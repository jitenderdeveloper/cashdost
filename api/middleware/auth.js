const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  try {
    const bearerHeader = req.headers['authorization'];
    if (typeof  bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next()
    } else {
        res.send({
            result: 'Invalid token'
        })
    }
    // const token = req.headers.authorization.split(" ")[1];
    // // console.log(token);
    // const verify = jwt.verify(token, "MY_SECRET_KEY");
    // // console.log(verify);
    // next();
    
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "invalid token",
    });
  }
};

// exports.isAdmin = (req, res, next) =>{
//     if (user.userType === 0) {
//         return next()
//     } else {
//         res.send('ok')
//     }
// }

module.exports = authorization;