const express = require('express');
const bodyParser = require('body-parser');

const monngoPractice=require('./mongo.js');
const monngoosePractice=require('./mongoose.js');
const { MongoParseError } = require('mongodb');



const app = express();


app.use(bodyParser.json());

// app.post('/products', monngoPractice.createProduct);

app.post('/products', monngoosePractice.createProduct);

// app.get('/products',monngoPractice.getProducts);

app.get('/products',monngoosePractice.getProducts);

app.listen(3000);