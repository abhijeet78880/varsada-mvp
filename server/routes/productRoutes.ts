import express from 'express'
import { validateJWT } from '../lib/modules/authorized';
import { createCategory, getAllCategory, getAllProducts, productById, searchProduct } from '../controller/product/productController';
const router = express.Router();

router.post("/createcategory",validateJWT, createCategory);
router.post("/createproduct",validateJWT, createCategory);
router.get("/getallcategory", getAllCategory);
router.get("/allproducts", getAllProducts);
router.post("/productbyid", productById);
router.get("/searchproduct", searchProduct );

export default router;