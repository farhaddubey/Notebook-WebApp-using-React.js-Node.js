const mongoose = require('mongoose');
const mongoURI= "mongodb+srv://tdil_consultancy_services:tdilcs@cluster0.bklz6z2.mongodb.net/test";
const connecttoMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully.");//We could also use async await, while async always returns a promise, await stops run of function until the current function is resolved
    })
}
module.exports=connecttoMongo;