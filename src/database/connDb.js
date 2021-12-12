const mongoose = require('mongoose');
const { db } = require('./urlDb');

class ConnDb {
  constructor() {
    this.connection();
  }

  async connection() {
    this.connect = await mongoose.connect(db);
    /*mongoose.connect(db).then(() => {
      console.log('Successfully connected to database');
    }); */
  }
}

module.exports = ConnDb;
