const User = require("../models/User")

const createUser = async (req, res) => {
    
    try {
        const { firstname, email, mobile, Math ,English ,Physics, Chemistry} = req.body;
        const user = new User({ firstname, email, mobile ,Math ,English ,Physics, Chemistry});
        
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  

const getUsers =async(req, res) => {
    try {
        const users = await User.find();
        res.send(users);
      } catch (error) {
        res.status(400).send(error);
      }
}



module.exports ={
    createUser , getUsers
}