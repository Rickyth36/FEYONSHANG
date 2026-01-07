import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js';

const addproduct = async(req,res) => {
    try {
        const {name, desription, price, category, subCategory, sizes, bestSeller } = req.body;
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item) => item!== undefined)

        let imagesUrl = await Promise.all(
            images.map(async(item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            }) 
        )
        const productData = {
            name,
            desription,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === "true" ? true: false,
            image: imagesUrl,
            date: Date.now()
        }

        console.log(name, desription, price, category, subCategory, sizes, bestSeller );
        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.json({success: true,message: "Product Added"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
} 

const listProducts = async(req,res) => {
    try {
        const products = await productModel.find({});
        res.json({success: true, products})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message})
    }
} 

const removeProduct  = async(req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product removed"});
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message})
    }
} 

const singleProduct  = async(req,res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success: true, product});
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message})        
    }
} 

export {addproduct, listProducts, removeProduct, singleProduct}
