const mongoose = require("mongoose");

const meritSchema = new mongoose.Schema({
     name:{
      type:String,
      required:true
     },
     board:{
      type:String,
      required:true,
     },
     date:{
      type:Date,
      default:Date.now()
     },
     downloadUrl:{
      type:String,
     },
     isNew:{
      type:Boolean,
      default:true
     }
}, {
  timestamps: true
});

module.exports = mongoose.model("Merit", meritSchema);
