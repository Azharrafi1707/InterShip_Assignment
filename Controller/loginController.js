import userModel from "../Models/User.js"
import { comparePassword } from "./Password_help.js";
import JWT from "jsonwebtoken"
//POST LOGIN
export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.hashed_password);
      if (!match) {
        return res.status(400).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //token
      const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      // req.token=token;
      res.status(200).send({
        success: true,
        message: "login successfully",
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };
  