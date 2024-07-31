const {Schema}=require("mongoose")
const{model}=require("mongoose")

const certiData=new Schema({
    course:{type:String,required:true},
    certId:{type:String,required:true},
    name:{type:String,required:true},
    grade:{type:String,required:true},
    date:{type:String,required:true}


})

const certs=model("certificates",certiData)
module.exports=certs;  