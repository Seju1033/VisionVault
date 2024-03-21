const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb+srv://VisionVault:visionVault@cluster1.k74x6zm.mongodb.net/Glasses')

const ProductSchema = new mongoose.Schema(
    {

        product_id: Number,
        SKU: String,
        availability: Boolean,
        brand: String,
        product_warranty: String,
        gender: String,
        frame_material : String,
        front_material: String,
        front_color: String,
        temple_material : String,
        rim: String,
        size: String,
        frame_shape : String,
        price  : Number,
        img:
            {
                main: String,
                thumbnail: String,
                additional1: String,
                additional2: String,
                additional3: String,
            },
    }
)

const ProductModel = mongoose.model('products',ProductSchema)

app.get('/getProducts',(req,res)=>{
    ProductModel.find({}).then(function(products){
        res.json(products)
    }).catch(function(err){
        res.status(500).json({ error: 'Internal Server Error' });
    })
})

app.listen(3002,()=>{
    console.log('server is running ')
})