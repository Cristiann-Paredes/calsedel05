//Creacion de un web server en express
//Invocar la libreria de express
const express = require('express') //COMMONJS
//Uso de la dependencia
const {engine} = require('express-handlebars')
//import {engine} from 'express-handlebars' //ESMODULES
//Crear un instancia
const app = express()

//Creacion de rutas
// app.get('/',(req,res)=>{
//     res.send("Bienvenidos") 
// })

// app.get('/dashboard',(req,res)=>{
//     res.send("Dashboard principal") 
// })

// app.use((req,res)=>{
//     res.send("404 - Not Found") 
// })

//Mandar info en formato JSON
// app.use(express.json())

// app.post('/register',(req,res)=>{
//     const {email,password} = req.body //Desestructuracion
//     res.send(` La contraseña ${password} pertenece a ${email}` )
    // console.log(req.body)
// })


// app.get('/pedido/:tipo',(req,res)=>{
//     res.send(`El pedido es hamburguesa ${req.params.tipo}`)
// })

// app.use(express.json())

// app.get('/search',(req,res)=>{
//     if (req.query.tipo ==="sencilla"){
//         res.send("Hamburguesa sencilla")
//     }
//     else{
//         res.send("Otro tipo de hamburquesa")
//     }
// })

// app.use(express.json())




app.get('/',(req,res)=>{
    res.render("larnding page")
})

app.get('/',(req,res)=>{
    res.render("BIENVENIDO ")
})

app.listen(3000)
