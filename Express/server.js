var express=require('express')
var app=express()

var cors=require('cors')
app.use(cors({origin:"http://localhost:3000"}))

var bodyparser=require("body-parser")
app.use(bodyparser.json())

const {mongoose}=require('./newdb.js')

var controll=require("./controller")
var controllreg=require("./controllerregister")
var addproduct2=require("./addproductcontroll")
var wishlist=require("./wishlistcontroll")
var cartlist=require("./cartlistcontroll")
// var productlist=require("./productlistcontroll")
// var controlllogin=require("./controllerlogin")

app.listen(7000,console.log("port listen"))
app.use('/',controll)
app.use('/regnew',controllreg)
app.use('/addproduct1',addproduct2)
app.use('/wishlist',wishlist)
app.use('/cartlist',cartlist)
// app.use('/productlist',productlist)
// app.use('/lognew',controlllogin)



