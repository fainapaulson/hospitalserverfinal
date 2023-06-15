// import mongoose
const mongoose=require('mongoose')
// connection string
mongoose.connect('mongodb://localhost:27017/hospitalServer',{useNewUrlParser:true})
// model
// singular form ,first letter capital
const Doctor=mongoose.model('Doctor',{
    
doctorName:String,
department:String,
qualification:String,
designation:String,
cosulting_hours:String
})
// export
module.exports={
    Doctor
}