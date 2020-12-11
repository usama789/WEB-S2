const mongoose = require('mongoose');

const URI = "mongodb://rafay:rafay123@cluster0-shard-00-00.fnkmg.mongodb.net:27017,cluster0-shard-00-01.fnkmg.mongodb.net:27017,cluster0-shard-00-02.fnkmg.mongodb.net:27017/Course?ssl=true&replicaSet=atlas-61nvzi-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected..');
}

module.exports = connectDB;