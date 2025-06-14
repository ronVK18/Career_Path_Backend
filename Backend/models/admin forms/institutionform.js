const mongoose = require("mongoose");

const instituteFormSchema = new mongoose.Schema({

     instituteId:{
      type:String,
     },
     name:{
      type:String,
      required:true,
     },
     imageUrl:{
      type:String,
      default:null
     },
     location:{
      city:{
        type:String,
        required:true,
      },
      state:{
        type:String
      },
      address:{
        type:String,
        required:true
      }
     },

     website:{
      type:String,
     },

     affilication:{
      type:String,
     },

       courses: [
    {
      courseId: { 
        type: String,
         required: true
         },
      fees: { 
        type: Number,
         required: true 
        },
      seats: { 
        type: Number, 
        default: 0
       },
      finance_type: {
         type: String, 
         default: 'self' }
    }
  ],



  

}, {
  timestamps: true
});

module.exports = mongoose.model("InstituteForm", instituteFormSchema);
