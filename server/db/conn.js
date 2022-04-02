const mongoose = require('mongoose');
const DB = process.env.DATABASE;
// const uri = "mongodb+srv://dhwani19:Dhwani19@cluster0.anbrt.mongodb.net/bidtobuy?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify:false
}).then(()=>{
    console.log('connection is successful');
}).catch((err)=> console.log('no connection'));
