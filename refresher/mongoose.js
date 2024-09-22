
const mongoose=require('mongoose')
const Product= require('./models/products')


const url='mongodb://apravin3210:B3EiLC-vRuFUw8B@cluster1-shard-00-00.4p7ka.mongodb.net:27017,cluster1-shard-00-01.4p7ka.mongodb.net:27017,cluster1-shard-00-02.4p7ka.mongodb.net:27017/products_test?ssl=true&replicaSet=atlas-euhcrs-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster1'
mongoose.connect(url).then(()=>{
    console.log('Database connected successfully')
}).catch(()=>{
    console.log('Could not connect database')
})






const createProduct=async(req, res, next)=>{
    const createdProduct= new Product({
name: req.body.name,
price: req.body.price
})

const result= await createdProduct.save()

res.json(result)
}


const getProducts=async(req, res, next)=>{
    const products= await Product.find().exec()  //The exec method used to return a promise for the find function
    res.json(products)
}
exports.createProduct=createProduct
exports.getProducts=getProducts

