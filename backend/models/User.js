const mongoose=require("mongoose");
const {Schema}=mongoose;//imported Schema from mongoose


const UserSchema = new Schema({
   name: {
      type: String,
      required: true
      },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }

  });
  const User=mongoose.model('user',UserSchema);//Here user is the name
//   User.createIndexes();//This was written to make email unique
//Indexes will be created using the User.createIndexes()
  module.exports= User;