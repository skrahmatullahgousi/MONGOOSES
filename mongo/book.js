const mongoose= require("mongoose");
main().then(()=>{
console.log("sucuess")
})
.catch((er)=>{
    console.log(er);
})
async function main() {
mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
//defing schema
let book=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    author:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    description:{
        type:String,
        enum:["validate","unvalidate"]
    }
});

let bookcollecion=mongoose.model("bookcollecion",book);
let data1= new bookcollecion({title:"william shakespear",author:"english",price:"8200000",
    description:"validation"
});
data1.save().then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})

//enum:["default",not default]//you can't gable to other valuse
//[string] you can able to apss stringa in an [array]
//you can declare constriants 
// yoju used find the cath (error.errors.category.properties.message);
//you should define in the schema 0f where you want min:[1."price is to low"]'
//and the other the costriants you define is only applicabke to insert while you are uupdating not applicable so you have write in update command runValidator :true
