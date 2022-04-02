require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Router js is called`);
});

router.post('/signup', async (req, res) => {

    const { name, email, uname, password, phone } = req.body;

    if (!name || !email || !uname || !password || !phone) {
        return res.status(400).json({ error: "Fill all Require Feild Properly " });
    }

    if(password.length < 8) {
        return res.status(400).json({ error: "password should be minimum 8 characters" });
}

    try {

        const userExist = await User.findOne({ email: email });



        if (userExist) {
            return res.status(400).json({ error: "Email already exist" });
        } else if (password != cpassword) {
            return res.status(400).json({ error: "password is not matching" })

        } else {

            const user = new User({ name, email,uname, phone, password });

            // Hashing is Used


            await user.save();

            res.status(201).json({ message: " User register successfuly" });


        }



    } catch (err) {

        console.log(err);
    }




});


//signin

router.post('/signin', async (req, res) => {

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "invalid credentials" });
        }

          if(password.length < 8) {
            return res.status(400).json({ error: "invalid credentials" });
}
        console.log(password.length);
        const userLogin = await User.findOne({ email: email });


        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);





            if (!isMatch) {
                res.status(400).json({ error: "invalid credential" });
            } else {
                token = await userLogin.generateAuthToken();
                console.log(token);
                
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                res.json({ message: "user sign in successfully" })
            }
        } else {
            res.status(400).json({ error: "Invalid Credential" })
        }




    } catch (err) {
        console.log(err);
    }

});