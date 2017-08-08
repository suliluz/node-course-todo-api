var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let connection = mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
}).then(db => {
  console.log('MongoDB is connected')
}).catch(error => {
  console.log(error)
});

// var Todo = mongoose.model('User', {
//   text: {type: String, required: true, minlength: 1, trim: true},
//   completed: {type: Boolean, default: false},
//   completedAt: {type: Number, default: null}
// });

var User = mongoose.model('Users', {
  email: {type: String, required: true, minlength: 1, trim: true},
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', doc);
// });

// var otherTodo = new Todo({
//   text:
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to process information', doc);
// });

var users = new User({
  email: 'marriomarcuslogin@gmail.com'
});

users.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to process information', doc);
});
