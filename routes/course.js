var express = require('express');
 var router = express.Router();
 const courseModel=require("../models/schema");
 /* GET home page. */
 router.get('/', async function(req, res, next) {
   let course=await courseModel.find();
   
   res.render('course/list',{title:"Edureka's Course List",course});  
    
 });
 
 
 router.get("/add", async function (req, res, next) {
   res.render('course/add');
 });
  
 router.post("/add", async function (req, res, next) {
   let course = new courseModel(req.body);
   await course.save();
   res.redirect("/course");
 });
 
 router.get("/delete/:id", async function (req, res, next) {
   let course = await courseModel.findByIdAndDelete(req.params.id);
   res.redirect("/course");
   
 });
 
 router.get("/edit/:id", async function (req, res, next) {
   let course = await courseModel.findById(req.params.id);
   res.render("course/edit", { course });
 });
 
 router.post("/edit/:id", async function (req, res, next) {
   let course = await courseModel.findById(req.params.id);
   course.cname = req.body.name;
   course.cid = req.body.id;
   course.cduration = req.body.duration;
   course.cfee = req.body.fee;
   await course.save();
   res.redirect("/course");
 });
 module.exports = router;
 