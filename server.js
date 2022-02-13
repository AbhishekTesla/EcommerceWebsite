const express = require('express')
const bcrypt = require('bcrypt')
const path =require('path')


//declare Static path
let staticPath=path.join(__dirname,"public");


//initalizing express.js
const app=express();

//middlewares
app.use(express.static(staticPath));


//routes
//home route

app.get('/',(req,res)=>{
    res.sendFile(path.join(staticPath,"index.html"));

})

// 404 route
// app.get('/404',(req,res)=>{
//     res.sendFile(path.join(staticPath,"404.html"));
// })

// app.use((req,res)=>{
//  res.redirect('/404');
// })

//Signup route
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(staticPath,"signup.html"))
})


app.listen(3000,()=>{
    console.log("Litening on port 3000..........");
})