import productModel from "../models/Product.js";

//get all products
export const getProductController = async (req, res) => {
  try {
    const {email}=req.body;
    const products = await productModel
      .find({CreatedBy:email})
      .select("-photo")
      .sort({ createdAt: -1 });
    res.status(200).send({ 
      success: true,
      counTotal: products.length,
      message: "AllProducts ",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting products",
      error: error.message,
    });
  }
};
// get photo
export const productPhotoController = async (req, res) => {
    try {
      
      const product = await productModel.findById(req.params.pid).select("photo");
      // console.log(product);
     
      if (product?.photo.data) {
        res.set("Content-type", product.photo.contentType);
        // console.log("tu khich meri photo");
        return res.status(200).send(product.photo.data);
      }
    } catch (error) {
      // console.log("tu khich meri photo-in error");
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr while getting photos",
        error,
      });
    }
  };