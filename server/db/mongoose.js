var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
}).then(db => {
  console.log('MongoDB is connected')
}).catch(error => {
  console.log(error)
});

module.exports = {mongoose};

process.env.NODE_ENV === ''
