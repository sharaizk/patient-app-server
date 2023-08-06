const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token =
      req.headers["x-access-token"] || req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "no token given", data: null });
    }

    const authorizedData = jwt.verify(token, process.env.JWT_KEY);

    req.user = authorizedData;
    return next();
  } catch (err) {
    return res.status(500).json({ error: "invalid request", data: null });
  }
};

module.exports = verifyToken;
