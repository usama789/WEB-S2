const { string } = require("joi");
const mongoose = require("mongoose");
//in order to create schema

const courseSchema = 
  mongoose.Schema({
      cname:String,
      cid:Number,
      cduration:Number,
      cfee:Number
}); 
const courseModel = mongoose.model("Product",courseSchema);//model name 
//then, schema name
module.exports = courseModel; 