const movieController = require('../controllers/movie.controller');
const routes=(app)=>{
    // routes function takes expess app object as parameter
app.post('/movie/api/v1/movies',movieController.createMovie);
}
module.exports=routes;