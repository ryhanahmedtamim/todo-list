import mongoose from 'mongoose';


module.exports.connect = mongoose.connect('mongodb://127.0.0.1:27017/todo-list')
  .then(() => console.log('Connected!'));