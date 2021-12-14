const User = require('../models/user');

class UserController {
  register(req, res) {
    let objUser = req.body;
    if (objUser.name && objUser.lastName && objUser.email && objUser.password) {
      User.create(objUser, (error, doc) => {
        if (error) {
          res.status(500).json({ info: 'Insert Error' });
        } else {
          res.status(201).json({ info: 'User created successfully' });
        }
      });
    } else {
      res.status(400).json({ info: 'Incomplete Data' });
    }
  }
}
module.exports = UserController;
