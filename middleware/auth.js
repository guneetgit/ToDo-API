const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // decode the Keycloak token
    const decoded = jwt.decode(token);

    if (!decoded) {
      return res.status(401).json({ message: 'Not authorized, invalid token' });
    }

    // attach user info to request
    req.user = {
      id: decoded.sub,
      email: decoded.email,
      name: decoded.name
    };

    next();

  } catch (error) {
    res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};

module.exports = protect;