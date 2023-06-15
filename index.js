// import express
const express=require('express')
// import logic file
const logic=require('./service/logic')

// app creation
const app=express()

// to convert all json data to javascript incoming
app.use(express.json())

// request for full doctor data
app.get('/view-all',(req,res)=>{
    res.json(req.body)
    
})
// port set
app.listen(3000,()=>{
    console.log("server started at port 3000");
})