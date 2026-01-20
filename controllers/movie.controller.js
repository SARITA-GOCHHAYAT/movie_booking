const movie=require('../models/movie.model');
const createMovie=async (req,res)=>{
try{
const movieData= await movie.create(req,body);
return res.status(201).json({
    sucess:true,
    error:{},
    data:movieData,
    message:"Movie created successfully",
})
}catch(err){
console.log(err);
return res.status(500).json({
    sucess:true,
    error:err,
    data:{},
    message:'Something went wrong while creating movie',
})
}
}

module.exports={
    createMovie,
}