const User = require('../models/user');

class UserController {
  register(req, res) {
    let objUser = req.body;
    User.create(objUser, (error, doc) => {
      if (error) {
        res.status(500).json({ message: 'Insert Error' });
      } else {
        res.status(201).json(doc);
      }
    });
  }
}
module.exports = UserController;
