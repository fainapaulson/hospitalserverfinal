// import mongoose
const mongoose=require('mongoose')
// connection string
mongoose.connect('mongodb://127.0.0.1:27017/hospitalServer',{useNewUrlParser:true})
// model
// singular form ,first letter capital
const Doctor=mongoose.model('Doctor',{
    
doctorName:String,
department:String,
qualification:String,
designation:String,
imageUrl:String,
cosulting_hours:String
})

// patient model
const Patient=mongoose.model('Patient',{
    patientName:String,
    mobile:Number,
    email:String,
    department:String,
     doctor:String,
     date:String
})
// export
module.exports={
    Doctor,Patient
}