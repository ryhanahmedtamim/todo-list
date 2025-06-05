import mongoose from 'mongoose';


  export const connectDB = async () => {
    try {
     await mongoose.connect('mongodb://127.0.0.1:27017/todo-list');
     console.log("DB connected successfully");
    }catch(err) {
      console.log(err);
    }
  }