const User = require("../Models/UserModels");
const { createWebToken } = require("../Utils/SecretJWTToken");
const bcrypt = require("bcrypt");

module.exports.Signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.json({ message: "Email and Password fields are required" });
    }

    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: "Incorrect Email" });
    }
    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    const token = createWebToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    const userData = {
      id: user._id,
      name: `${user.firstName}  ${user.lastName}`,
      email: user.email,
    };

    res
      .status(200)
      .json({
        meaage: "User successfully Logged-in",
        success: true,
        token,
        userData,
      });
    next();
  } catch (error) {
    res.status(500).json({ error });
    console.error(error);
  }
};
