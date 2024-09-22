const MongoClient=require('mongodb').MongoClient
const mongoose = require('mongoose')

const url='mongodb://apravin3210:B3EiLC-vRuFUw8B@cluster1-shard-00-00.4p7ka.mongodb.net:27017,cluster1-shard-00-01.4p7ka.mongodb.net:27017,cluster1-shard-00-02.4p7ka.mongodb.net:27017/products_test?ssl=true&replicaSet=atlas-euhcrs-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster1'
const createProduct=async(req, res, next)=>{
const newProduct={
    name: req.body.name,
    price: req.body.price
}



const client=new MongoClient(url)

try{
    await client.connect()
    const db=client.db()
    const result=await db.collection('products').insertOne(newProduct)
}
catch(error){
    console.error(error)
return res.json({message: 'Could not store data.'})
}
finally{
client.close()
}
res.json(newProduct)
}

const getProducts=async(req, res, next)=>{
    const client=new MongoClient(url)

    let products
    try{
        await client.connect()
        const db=client.db()
        products=await db.collection('products').find().toArray()
        console.log('products', products)
    }
    catch(error){
        console.error(error)
    return res.json({message: 'Could not store data.'})
    }
    finally{
    client.close()
    }
    res.json(products)
}

exports.createProduct =createProduct
exports.getProducts=getProducts