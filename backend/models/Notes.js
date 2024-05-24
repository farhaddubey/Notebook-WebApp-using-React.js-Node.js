const mongoose=require("mongoose");
const {Schema}=mongoose;

const NotesSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,//THis is to conncet the Notes User & the USER with NOTES of models
    ref:'user'//model declared in User.js
  },//Now here we can store the USER
   
    title: {
      type: String,
      required:  true
    },
   description:{
        type: String,
        required: true
    },
    tag:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now

    }

  });
  module.exports= mongoose.model('notes',NotesSchema);