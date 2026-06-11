import express from 'express';
const app = express();
import { products,people } from './app.js';

app.get('/',(req,res)=>{
    res.json(products)
})
app.listen(5000, ()=>{
    console.log('Server on 5000')
})