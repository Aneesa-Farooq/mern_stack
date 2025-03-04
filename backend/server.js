const express=require('express')
const dotenv=require('dotenv').config()
const colors=require('colors')
var bodyParser = require('body-parser');
const connectDB=require('./config/db')
const{errorHandler}=require('./middleware/errorMiddleware')
const port=process.env.PORT || 5000
connectDB()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'))
app.use(errorHandler)
app.listen(port,()=>console.log('server started on port ${port}'))
app.use('/api/goals',require('./routes/goRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/brands',require('./routes/brandRoute'))