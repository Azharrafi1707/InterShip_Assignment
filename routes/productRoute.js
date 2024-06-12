import express from "express"
import formidable from "express-formidable"
import {createProductController} from "../Controller/CreateProductController.js"
import {getProductController,productPhotoController} from "../Controller/getProductController.js"
import {deleteProductController} from "../Controller/deleteProductController.js"
import {deleteUserProductController} from "../Controller/deleteUserProductController.js"
import { requireSignIn } from "../Controller/requireSignIn.js";
const router = express.Router();
//routes

router.post(
  "/create-product",
  formidable(),
  requireSignIn,
  createProductController
);

router.post("/get-product",requireSignIn, getProductController);

//get photo
router.get("/product-photo/:pid",productPhotoController);
//delete
router.delete("/delete-product/:pid",requireSignIn,deleteProductController);
router.delete("/delete-Userproduct/:createdby",requireSignIn,deleteUserProductController);
export default router

