const User = require('../models/user');
const jsonwebtoken = require('jsonwebtoken');

class UserController {
  register(req, res) {
    let objUser = req.body;
    if (objUser.name && objUser.lastName && objUser.email && objUser.password) {
      User.create(objUser, (error, doc) => {
        if (error) {
          res.status(500).json({ info: 'Insert Error' });
        } else {
          console.log(doc);
          let token = jsonwebtoken.sign(`${doc._id}`, process.env.NODE_PRIVATE_KEY);
          res.status(201).json({ token: token });
        }
      });
    } else {
      res.status(400).json({ info: 'Incomplete Data' });
    }
  }
}
module.exports = UserController;
