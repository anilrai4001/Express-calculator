const express = require('express')
const port = 4444;
const app = express();
const path = require('path');

app.set('view engine','hbs');
app.use('/file',express.static(path.join(__dirname,'views')));

app.get('/',(req,res)=>{
    res.render('index.hbs');
})

app.get('/data',(req,res)=>{
    let a = Number(req.query.num1);
    let b = Number(req.query.num2);
    let sum = eval(a+b);
    let product = eval(a*b);
    let devide = eval(a/b).toFixed(2);
    res.render('index.hbs',{sum,product,devide});
})

app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'style.css'));
})

app.listen(port,(err)=>{
    if(err)
        return console.log(err);
    console.log('server started successfully');
})