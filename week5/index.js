const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded())
{
    res.sent("Hello,World!")
})

app.listern(port, ()=> console.log('lisen port:${port}'))