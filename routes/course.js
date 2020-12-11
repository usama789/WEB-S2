var express = require('express');
 var router = express.Router();
 const courseModel=require("../models/schema");
 /* GET home page. */
 router.get('/', async function(req, res, next) {
   let products=await courseModel.find();//products
   //console.log(products); 
   res.render('course/list',{title:"Edureka's Course List",products});  
    
 });
 
 
 router.get("/add", async function (req, res, next) {
   res.render('course/add');
 });
  
 router.post("/add", async function (req, res, next) {
   let product = new courseModel(req.body);
   await product.save();
   res.redirect("/course");
 });
 
 router.get("/delete/:id", async function (req, res, next) {
   let course = await courseModel.findByIdAndDelete(req.params.id);
   res.redirect("/course");
   
 });
 
 router.get("/edit/:id", async function (req, res, next) {
   let product = await courseModel.findById(req.params.id);
   res.render("course/edit", { product });
 });
 
 router.post("/edit/:id", async function (req, res, next) {
   let product = await courseModel.findById(req.params.id);
   product.cname = req.body.name;
   product.cid = req.body.id;
   product.cduration = req.body.duration;
   product.cfee = req.body.fee;
   await product.save();
   res.redirect("/course");
 });
 module.exports = router;
 