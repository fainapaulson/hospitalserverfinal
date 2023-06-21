const { get } = require('mongoose')

const db=require('./db')

viewall=()=>{
return db.Doctor.find()
}

view=(doctorName)=>{
        return db.Doctor.findOne ({doctorName}) 
        // findOne({doctorName}).then
}

register = ( patientName,mobile,email,department, doctor,date)=>{
    // collection key:arg value
    return db.Patient.find().then(user=>{
        if(user){
        //     return 
        // creating an object for new user


    
        newPatient=new db.Patient({
            patientName:patientName,
            mobile:mobile,
            email:email,
            department:department,
            doctor:doctor,
            date:date
        })
    
        // save new object to reflect the change in db
        newPatient.save()
        return {
            message:"registered succefully",
            status:true,
            statusCode:200
        }}
        else{
            return {
                message:" not registered ",
                status:true,
                statusCode:400
            }    
        }
     }
      )  
    // }
    // )
    }
    
    add=(doctorName,department,qualification,designation,imageUrl,cosulting_hours)=>{
    //  return  newuser=new db.Doctor({
    //     doctorName:doctorName,
    //     department:department,
    //     qualification:qualification,
    //     designation:designation,
    //     imageUrl:imageUrl,
    //     cosulting_hours: cosulting_hours
    // }

    // )
    // newuser.save()
    return db.Doctor.find().then(user=>{
        if(user){
        newDoctor=new db.Doctor({
            doctorName:doctorName,
        department:department,
        qualification:qualification,
        designation:designation,
        imageUrl:imageUrl,
        cosulting_hours: cosulting_hours
        })
    
        // save new object to reflect the change in db
        newDoctor.save()
        return {
            message:"registered succefully",
            status:true,
            statusCode:200
        }}
        else{
            return {
                message:" not registered ",
                status:true,
                statusCode:400
            }    
        }
     }
      )  
    // }
    // )
    }


    viewPatients=()=>{
        return db.Patient.find()

    }

module.exports={
viewall
,view,register,add,viewPatients
}