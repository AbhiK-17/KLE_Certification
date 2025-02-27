
const express = require('express');
const app = express();

// app.get('/Cat',(req,res)=>{
//     res.send('<h1>Meow</h1');
// })

// app.get('/Lion',(req,res)=>{
//     res.send('<h1>Roar</h1>');
// })

app.get('/Animal/:Anything',(req,res)=>{
    console.log(req.params);
    console.log(req.params.Anything);
    const {Anything} = req.params;
    res.send(`<h1>I am ${Anything}</h1>`);
})

app.get('/Search',(req,res)=>{
    console.log(req.query);
    console.log(req.query.name);
    const {name} = req.query;
    res.send(`<h1> My query is ${name}</h1>`);
})

app.listen(8080,()=>{
    console.log("Server is connected to port 8080");
})

