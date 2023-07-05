const express  =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute  = require('./routes/userRoute');
const User = require('./models/User');


const app = express();
app.use(express.json())

app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase").then(()=> console.log(mongoose . connection . readyState));

// app.post('/users/post',async(req,res)=>{
//     const { firstname, email, mobile} = req.body;
//     const ser = new User({ firstname, email, mobile });
//   const savedUser = await ser.save();
//   res.send(savedUser);

  
// })

app.use('/',userRoute);


app.listen(5000,function(){
    console.log('listening on port');
})