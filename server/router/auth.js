const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');


router.get('/',(req,res) =>{
    res.send('hello world from server router js');
}
)

//Async-Await
router.post('/signup', async (req, res) => {

    const { name, email , phone, work , password ,confirmPassword} = req.body;

    if(!name || !email || !phone || !work || !password || !confirmPassword){
        return res.status(422).json({error: "please filled the field propely"});
    }

    try{

        const userExist = await User.findOne({email: email});

        if(userExist){
            return res.status(422).json({message: "Email already Exist" });
        } else if(password != confirmPassword){
            return res.status(422).json({message: "password are not matching" });
        } else {
            const user = new User({ name, email, phone, password, confirmPassword });
            // yaha pe
            await user.save();
            res.status(201).json({ message: "user registered successfuly" });
        }

    }
    catch(err){
        console.log(err);
    }

});

// app.get('/signup', async (req,res) =>{
//     console.log(req.body);
//     // res.json({ message: req.body })
//     try{
//         const (email, password ) = req.body;

//         if(!email || !password){
//             return res.status(400).json({error:"Please fill the data"})
//         }

//         const userLogin = await User.findOne({ email: email });

//         //console.log(userLogin);
//         if(userLogin){
//             const isMatch = await bcrypt.compare(password, userLogin.password);

//             const token 
//             if(!isMatch){
//                 res.status(400).json({ error: "Invalid Credientials "});
//             } else {

//             }
//             }else{
//                 res.status(400).json({ error: "Invalid Credientials "});
//         }

    // }catch(err){
    //     console.log(err);
    // }
// }
// )



//login route
router.post('/login', async (req,res) => {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please fill the data"})
        }
        
        const userLogin = await User.findOne({ email: email });

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            
            const token = await userLogin.generateAuthToke();
            if(!isMatch){
                res.status(400).json({ error: "Invalid Credientials "});
            } else {
            
            }
        }else{
            res.status(400).json({ error: "Invalid Credientials "});
        }
    }catch(err){
        console.log(err);
    }

    console.log(req.body);
});


module.exports = router;