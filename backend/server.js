import  express from 'express';
import data from './data.js';

const app=express();

app.get('/api/products',(req,res)=>{
    res.send(data.products)
});

app.get('/',(req,res)=>{
    res.send('server is ready')
});
const port=process.env.PORT || 5050;

app.listen(port,()=>{
    console.log('serve at http://localhost:5050')
})

