// imports

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./model/userSchema');


app.use(express.json());
// we link the router files to make our route easy
app.use(require('./router/auth'));

const port= process.env.PORT;


// middleware
const middleware = (req,res,next)=>{
    console.log("middleware");
    next();
}
app.use(middleware);

app.listen(port,()=>{
    console.log(`listening at port no ${port}`)
});

