const express = require("express");
const UserModal = require("../models/user.modal");

const userRoutes = express.Router();
// for this api is (http://localhost:8080/user/register)
userRoutes.post("/register", async (req, res) => {
    let data = req.body;
    const userdata = await UserModal.find({ email: data.email });
    try {
        if (userdata.length > 0) {
          res.send({"error":"already","isregister":false})
        } else {
            const user = new UserModal(data);
            await user.save();
            res.send({ "status": "successfull", "isregister": true });
        }
    } catch (err) {
        res.send({"Error":err})
  }
});
userRoutes.post("/login", async (req, res) => {
    let {email,password} = req.body;
    try {
        const userdata = await UserModal.find({ email,password });
        if (userdata.length === 0) {
          res.send({"error":"not register","islogin":false})
        } else {
          
            res.send({ "status": "successfull", "islogin": true ,"user":userdata});
        }
    } catch (err) {
        res.send({"Error":err})
  }
});



module.exports = userRoutes;
