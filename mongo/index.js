const mongoose=require("mongoose");
main()
.then(()=>{
    console.log("sucess");
})
.catch((error)=>{
console.log(error);
});
async function main(){
await mongoose.connect("mongodb://127.0.0.1:27017/test");

}

const userschema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const User=mongoose.model("User",userschema); //here user is class to insert the data we should crate a object
/*let userobj=new User({name:"shaik rahmatullah",email:"skrahmath@gmail",age:23});
//to insert into the db we should save it by useing the save function
userobj.save();

//we want to sed mulitipule objects we simply use arrary and the insertMany function
User.insertMany([{name:"shaik amreen",email:"skr@gmail",age:22},{name:"shaik surrya",email:"skh@gmail",age:19},{name:"yasir",email:"yasir@gmail",age:16}]).then((res)=>{
    console.log(res);});
*/



// now are useing find  it is not async function it is object querey
 /*User.find({age:{$eq:23}}).then((res)=>{
    console.log(res);
 })
 .catch((err)=>{
    console.log(err);
 })*/
    /*User.findOne({age:{$eq:23}}).then((res)=>{
        console.log(res);
     })
     .catch((err)=>{
        console.log(err);
     })*/
    
/*User.findById("66ae39f8a40cbf5b80fa7353").then((res)=>{
   console.log(res);
})
.catch((err)=>{
   console.log(err);
})
   */
//findeoneupdate
//User.findOneAndUpdate({age:23} ,{name:"gousi"},{new :true}).then((res)=>{

//console.log(res)});


//updateMany
/*
User.updateMany({age:23},{name:"sk"}).then((res)=>{
   console.log(res);
});
*/
//delete 
User.deleteOne({name:"gousi"}).then((res)=>{
   console.log(res);
})