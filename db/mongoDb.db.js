const mongoose = require('mongoose');
require('dotenv').config()

const mongoDB = async()=>{
    return await mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("MongoDb connected"))
    .catch((error)=> console.log(error))
}

module.exports = mongoDB;