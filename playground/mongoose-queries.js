const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
//const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var UserId = '598b4b3b5f8a10123a82091d';
// var id = '598895c8d396a125e5578e67a';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todos', todo);
// }).catch((e) => console.log(e));

User.findById(UserId).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todos', todo);
}).catch((e) => console.log(e));
