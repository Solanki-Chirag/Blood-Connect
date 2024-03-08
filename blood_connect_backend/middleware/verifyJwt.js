const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sensStatus(401);
  const token = authheader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.Hospital_name = decoded.Hospital_name;
    next();
  });
};

module.exports = verifyJwt;
