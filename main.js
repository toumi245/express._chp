//import express 
const express = require('express');
//imprt our middleware
const logger =require('./middleware/logger')
//import data
const students=require("./data")
//init express
const app = express();
app.use(express.static(__dirname+"/public"))
app.get('/students',(req,res)=>{
    res.json(students)
})
app.get("/students/:id",(req,res)=>{
    res.json(students.filter((student)=>{
        students.id===parseInt(req.params.id)
    }))
})
app.use(logger)
// declare port 
const PORT = 8001;
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port ${PORT}`);
});

console.log("hiii")