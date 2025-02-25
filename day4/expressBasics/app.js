const express = require('express');
const app = express();

//middleware
// app.use('/home',(req,res)=>{
//     // console.log(req)
//     res.send('<h1>response from server </h1>');
//     console.log(res);
// })

// app.get('/tired',(req,res)=>{
//     res.send('<h1>Getting tired is restricted </h1>')
// })

app.get('/name',(req,res)=>{
    res.send('<h1>Say my name => My name is walter hartwell white </h1>')
})

app.get('/changes',(req,res)=>{
    res.send('<h1>Say my name => My name is Thomas Shelby </h1>')
})

app.listen(8080,()=>{
    console.log('Server is running at port 8080')
})