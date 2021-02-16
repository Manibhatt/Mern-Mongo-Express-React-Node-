require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async() =>{
    try{
      await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("MongoDb connection success");
    }
    catch(error){
      console.error("MongoDb connection Fail");
      process.exit(1);
    }
}

module.exports = connectDb;