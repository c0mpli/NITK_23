const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./User");
const analysisSchema= new Schema({
    id:{   type:Schema.Types.ObjectId,
        ref:'User'},
    sessionNotes:[{type:String}]

})
 const analysis = mongoose.model("analysis", analysisSchema);
 module.exports=analysis;