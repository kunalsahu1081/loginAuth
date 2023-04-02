const express = require('express');
const mongoose = require('mongoose');
require('./userDetails.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const cors = require('cors');

const app = express();
const mongoUrl = "mongodb+srv://kunalsahu1949:root@cluster0.66unxly.mongodb.net/?retryWrites=true&w=majority";
const jwt_secret = "newsecret__1"

mongoose.connect(mongoUrl, {useNewUrlParser : true})
        .then(() => {console.log("connected to database")})
        .catch((e) => {console.log(e)})

app.use(cors());
app.use(express.json());

const user = mongoose.model("userInfo");

app.post("/register", async (req,res) => {
    const {fname, lname, email, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await user.findOne({email});

        if(oldUser) return res.status(400).json( 'user already exists')
        await user.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
        })
        res.status(200).json({status:'ok'});
    }
    catch(err){
        res.status(400).json(err);
    }
})

app.post('/login', async (req,res) => {
    const {email, password} = req.body;
    console.log(email);
    const nuser  = await user.findOne({email});
    if(!nuser) return res.status(200).json('user not found .....');
    if(await bcrypt.compare(password, nuser.password)){
        const token = jwt.sign({email}, jwt_secret);
        if(res.status(201)) return res.send({status:"ok" ,data : token});
        else res.send({error :"error"});
    }
    res.status(400).json("password incorrect");
})

app.post('/user', async (req, res) => {
    const {token} = req.body;
    try {
        const nuser = jwt.verify(token, jwt_secret);
        const email = nuser.email;
        user.findOne({email})
            .then((data) => {res.send({status:"ok", data})})
            .catch((err) => {res.status(400).json(err)});
    }
    catch(err){
        res.status(400).json(err);
    }
})

app.listen(5000, () => {console.log('listening on port')})