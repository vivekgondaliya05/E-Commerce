const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type:Boolean,
    default:false
  }
});

//hasing password
userSchema.pre("save" ,async function(next){
    const user = this;
    const saltRound = await bcrypt.genSalt(10);
    try {
      const hashPassword = await bcrypt.hash(user.password , saltRound)   
      user.password = hashPassword;
      next();
      
    } catch (error) {
      console.log("can't hasing password :",error);
    }    
})

//json web token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin : this.isAdmin
      },
      process.env.JWT_SECRETKEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log("can't generater json web token ", error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
