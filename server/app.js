const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env'});

const PORT = process.env.PORT;
require('./db/conn');
const User = require('./model/userSchema')

// we link our router files to make our route easy
// app.use(require('./router/auth'))

// app.use(express.json());

//middleware
const middleware = (req,res,next) => {
    console.log('hello from middleware');
    // next();
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
    res.send('hello world from server ka register page');
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

app.listen(PORT, () => {
    //console.log('hello from port PORT');
    console.log("Server is running on port no " + PORT);
})

// app.listen(3000,()=>{
//     console.log('hello from port 3000');
// })