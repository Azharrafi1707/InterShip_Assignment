import productModel from "../models/Product.js";
//delete controller
export const deleteUserProductController = async (req, res) => {
    try {
      await productModel.deleteMany({CreatedBy:req.params.createdby}).select("-photo");
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