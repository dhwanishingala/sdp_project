// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const express = require('express');
const app = express();


// dotenv.config({ path: './config.env'});
// require('./db/conn');
// const User = require('./model/userSchema')

// we link our router files to make our route easy
app.use(require('./router/auth'))

app.use(express.json());

// const Port = process.env.PORT;

//middleware
const middleware = (req,res,next) => {
    console.log('hello from middleware');
    next();
}
middleware(); 
app.get('/',(req,res) =>{
    res.send('hello world from server');
}
)

app.get('/about',(req,res) =>{
    res.send('hello world from server ka about');
}
)
app.get('/feedback',(req,res) =>{
    res.send('hello world from server ka feedback');
}
)
app.get('/login',(req,res) =>{
    res.send('hello world from server ka login');
}
)
app.get('/signup',(req,res) =>{
    res.send('hello world from server ka signup');
}
)
app.get('/upload',(req,res) =>{
    res.send('hello world from server ka upload');
}
)
app.get('/history',(req,res) =>{
    res.send('hello world from server ka history');
}
)

// app.listen(PORT,()=>{
//     console.log('hello from port ${PORT}');
// })

app.listen(3000,()=>{
    console.log('hello from port 3000');
})