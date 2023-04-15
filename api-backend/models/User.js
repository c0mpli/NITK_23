const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    password:{
        type:String,
    },
    email:{
        type:String,
    },
    mobilenum:{
        type:String,
        
    },
    experience:{
        type:Number,
    },
    specialization:{
        type:String,
    },
    admin:{
        type:Boolean,
        default:false,
    },
    goal:{
        type:String,
    },
    subgoal:{
        type:String,
    },
    age:{
        type:Number,
    },
    experience:{
        type:Number,
    },
    specialization:{
        type:String,
    }
});


module.exports=mongoose.model("User",userSchema);