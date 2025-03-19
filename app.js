require('dotenv').config()
const express = require('express')
const app = express ();
const mongoose = require("mongoose");

const userModel= require('./models/userModel')

let mongo_URL=process.env.DB_URL
mongoose.connect(mongo_URL)
app.get('/',(req,res)=>{
    res.send('running')
})

// ---create
app.get('/create',async(req,res)=>{
    // momgoose ka overall code asynchronous ha lkn javascript me pahly synchronous wala portion chalta ha isi leay ham isy async,await k zareaya line by line run karvayain gy
    let createdUser =await userModel.create({
        name:"usman",
        username:'usmuouan123',
        email:'abkhkc@gmail.com'
    })
    res.send(createdUser)
})
// read
app.get('/read',async(req,res)=>{
    let users=await userModel.find()
    res.send(users)
})
// update
app.get('/update',async(req,res)=>{
    let updateUser=await userModel.findOneAndUpdate({name:'usman'},{name:"ali"},{new:true})
    res.send(updateUser)
})


// delete
app.get('/delete',async(req,res)=>{
    let users=await userModel.findOneAndDelete({name:'usman'})
    res.send(users)
})


app.listen(8000)