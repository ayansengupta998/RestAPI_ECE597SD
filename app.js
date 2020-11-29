const express = require('express'); //imports express

const app = express();  //instantiates express

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config');
app.use(bodyParser.json());



//import routes

const postRouter =require('./routes/posts');

app.use('/posts',postRouter);



//ROUTES
app.get('/',(req,res)=>{
    res.send('we are on home');
});



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, ()=>{
    console.log('connected to DB');
});

//LISTENING 
app.listen(3000);