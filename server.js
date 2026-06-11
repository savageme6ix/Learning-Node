import express from 'express';
const app = express();
import { products,people } from './app.js';

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res)=>{
    const newProduct = products.map(()=>{
        const {id,name} = product;
        return {id,name}
    })
    res.json(newProduct)
})
app.listen(5000, ()=>{
    console.log('Server on 5000')
})