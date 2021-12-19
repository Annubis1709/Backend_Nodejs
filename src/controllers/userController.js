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

  login(req, res) {
    let { email, password } = req.body;
    User.find({ email, password }, (error, doc) => {
      if (error) {
        /* --- Generar token ----*/
        res.status(500).send();
      } else {
        if (doc.length > 0) {
          let token = jsonwebtoken.sign(`${doc[0]._id}`, process.env.NODE_PRIVATE_KEY);
          res.status(200).json({ token: token });
        } else {
          res.status(401).json({ info: 'Invalid credentials' });
        }
      }
    });
  }
  update(req, res) {

    let auth = req.headers.authorization;
    let token = auth.split(' ')[1];
    let decoded = jsonwebtoken.verify(token, process.env.NODE_PRIVATE_KEY);
    res.status(200).json({ info: 'Update Success' });

    /*
    let { id } = req.params;
    let objUser = req.body;
    User.findByIdAndUpdate(id, objUser, (error, doc) => {
      if (error) {
        res.status(500).json({ info: 'Update Error' });
      } else {
        res.status(200).json({ info: 'Update Success' });
      }
    });

     */
  }
}
module.exports = UserController;
