const mongoose = require('mongoose');
const bcrypt = rewuire('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

//we are hashing the password 
userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password, 12);
        this.confirmpassword = bcrypt.hash(this.confirmpassword, 12);
    }
    next();
});

//we are generating tokens 
userSchema.method.generateAuthToken = async function () {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return  token;
    } catch(err){
        console.log(err);
    }
}

//collection creation
const User = mongoose.model('USER', userSchema);

module.exports = User; 