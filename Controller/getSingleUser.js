import UserModel from "../Models/User.js";
export const getSingleUser = async (req, res) => {
    try {
      const user = await UserModel
        .findById(req.params.id);
      res.status(200).send({ 
        success: true,
        user
      })
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting products",
        error: error.message,
      });
    }
  };