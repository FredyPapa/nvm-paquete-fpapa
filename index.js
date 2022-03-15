/*
let express = require('express');
let app = express();
let PORT = 3004;

app.get("/",(req,res)=>{
    res.send("Hola Yarn");
})

app.listen(PORT,()=>{
    console.log("Server on");
})
*/

class Operaciones{
    suma(num1,num2){
        return num1+num2;
    }
    resta(num1,num2){
        return num1-num2;
    }
    multiplicacion(num1,num2){
        return num1*num2;
    }
    division(num1,num2){
        return num1/num2;
    }
}