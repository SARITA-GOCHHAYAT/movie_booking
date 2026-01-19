 const express = require('express');
const app= express(); // express aplication object
const env=require('dotenv');
env.config(); // to read .env file
const mongoose=require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/home',(req,res)=>{
    console.log("Get request received at /")
return res.json({
    success:true,
    message:"Welcome to Home Page",
})
})

PORT=process.env.PORT||3000;
app.listen(PORT,async()=>{
console.log(`server is running at post ${PORT}`);

try{
await mongoose.connect(process.env.DB_URL);
}catch(err){
console.log("Not able to connect to database",err);
}

})

