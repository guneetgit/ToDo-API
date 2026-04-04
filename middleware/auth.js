const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    // check if token exists in request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user to request
    req.user = await User.findById(decoded.userId).select('-password');

    next(); // move to the next function

  } catch (error) {
    res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};

module.exports = protect;