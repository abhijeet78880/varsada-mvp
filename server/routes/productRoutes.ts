import express from 'express'
import { validateJWT } from '../lib/modules/authorized';
import { createCategory, getAllCategory, getAllProducts, productById, searchProduct } from '../controller/productController';
const router = express.Router();

router.post("/createcategory",validateJWT, createCategory);
router.get("/getallcategory", getAllCategory);
router.get("/allproducts", getAllProducts);
router.post("/productbyid", productById);
router.get("/searchproduct", searchProduct );

export default router;