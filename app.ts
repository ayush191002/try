const express = require('express');
const app = express();

app.get('/',(req:any,res:any)=>{
    res.send('landing page')
})

app.listen(9000,()=>{
    console.log('http://localhost:9000')
})