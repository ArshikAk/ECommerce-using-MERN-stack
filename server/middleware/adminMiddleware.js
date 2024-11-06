const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const adminMiddleware = async (req, res, next) => {

  let token;
  if (req.headers.authorization) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await UserModel.findById(decoded.id);
      if(req.user.role == "admin")
      {
        next()
      }
      else{
        res.status(401).json({ message: 'Access Denied Not an Admin' }); 
      }
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

module.exports = adminMiddleware;
