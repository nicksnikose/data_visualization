var mongoose = require('mongoose');
// const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
   firstname:{
    type:String
   },
   email:{
    type:String
   },
   mobile:{
    type:String
   },
  
   Math:{type:Number},
   English:{type:Number},
   Physics:{type:Number},
   Chemistry:{type:Number}
    
});


const User = mongoose.model('user', userSchema);

module.exports = User