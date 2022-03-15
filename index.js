let express = require('express');
let app = express();
let PORT = 3004;

app.get("/",(req,res)=>{
    res.send("Hola Yarn");
})

app.listen(PORT,()=>{
    console.log("Server on");
})