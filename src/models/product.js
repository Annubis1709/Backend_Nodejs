const { Schema } = require('mongoose');
const productSchema = Schema({
  name: {
    type: 'string',
  },
  price: {
    type: 'number',
  },
}, {
  collection: 'products',
});
module.exports = model('Product', productSchema);
