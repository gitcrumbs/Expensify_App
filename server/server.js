const express = require('express');
const app = express();
const path = require('path');
const publicpath = path.join(__dirname,'..','public')
const port = process.env.PORT || 3000;
app.use(express.static(publicpath));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(publicpath,'index.html'))
})
app.listen(port,()=>{
    console.log("server is up and Runnning!")
})
