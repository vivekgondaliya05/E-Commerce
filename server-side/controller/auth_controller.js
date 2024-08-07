const User = require("../model/user_model");
const bcrypt = require("bcryptjs");

//for registration
const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //check email is alredy exits
    const emailExits = await User.findOne({ email: email });
    if (emailExits) {
      res.status(400).json({ msg: "Email are alredy Exists" });
    } else {
      const userCreate = await User.create(req.body);
      res.status(200).json({
        msg: "registration successful",
        jwtToken: await userCreate.generateToken(),
        userId: userCreate._id.toString(),
      });
    }
  } catch (error) {
    console.log("auth_controller postRegister ", error);
  }
};

//for login
const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailExits = await User.findOne({ email: email });
    if (!emailExits) {
      res.status(400).json({ msg: "Email or Password are wrong" });
    }
    const comparePass = await bcrypt.compare(password, emailExits.password);
    if (comparePass) {
      res
        .status(400)
        .json({ msg: "Login successful", jwt: await emailExits.generateToken() });
    } else {
      res.status(400).json({ msg: "Email or Password are wrong" });
    }
  } catch (error) {
    console.log("auth_contorller postLogin error: ", error);
  }
};

module.exports = { postRegister, postLogin };
