const jwt = require("jsonwebtoken");
require('dotenv').config();
const donerVerifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authheader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};

module.exports = donerVerifyJwt;
