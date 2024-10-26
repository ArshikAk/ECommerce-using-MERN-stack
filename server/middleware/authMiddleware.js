const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const authMiddleware = async (req, res, next) => {

  let token;
  if (req.headers.authorization) {
    try {

      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.secret);

      req.user = await UserModel.findById(decoded.user.id);

      next()
    } 
    catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = authMiddleware;
