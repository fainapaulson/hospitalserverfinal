// import express
const express=require('express')
// import logic file
const logic=require('./service/logic')

// app creation
const app=express()

// integrate frondend with server
const cors=require('cors')
app.use(cors({origin:'http://localhost:4200'}))

// to convert all json data to javascript incoming
app.use(express.json())

// request for full doctor data
app.get('/viewall',(req,res)=>{
  logic.viewall() .then(result=>{
        res.json(result)
    })
    // res.json(req.viewall)      
    
})

// one doctor

app.get('/view-all/:doctorName',(req,res)=>{
    logic.view(req.params.doctorName) .then(result=>{
          res.json(result)
      })
      // res.json(req.viewall)      
      
  })


  // register
app.post('/view-all/:doctorName/booking',(req,res)=>{
    logic.register(req.body.patientName,req.body.mobile,req.body.email,req.body.department,req.body.doctor,req.body.date).then(result=>{
        res.status(result.statusCode).json(result)
    })
    })
    
    // store
    app.post('/view-all',(req,res)=>{
       logic.add(req.body.doctorName,req.body.
            department,req.body.
            qualification,req.body.
            designation,req.body.
            imageUrl,req.body.
            cosulting_hours).then(result=>{
                res.status(result.statusCode).json(result)
        })
        })


    // request for full patient data
    app.get('/viewall/:doctorName/booking/show',(req,res)=>{
        logic.viewPatients() .then(result=>{
              res.json(result)
          })
        })
 
// port set
app.listen(3000,()=>{
    console.log("server started at port 3000");
})