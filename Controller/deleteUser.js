import UserModel from "../Models/User.js";
//delete controller
export const deleteUser = async (req, res) => {
    try {
      await UserModel.findOneAndDelete({email:req.params.user});
      res.status(200).send({
        success: true,
        message: "Product Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting product",
        error,
      });
    }
  };