const express = require('express');
const bodyParser = require('body-parser');

const monngoPractice=require('./mongo.js')



const app = express();


app.use(bodyParser.json());

app.post('/products', monngoPractice.createProduct);

app.get('/products');

app.listen(3000);