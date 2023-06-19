const express = require('express')
const app = express()
//destructuring (being explicit) import
const { products } = require('./data')


//this is Home Page
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})


app.get('/api/products', (req, res) => {

})



app.listen(5000, () => {
    console.log('Server is running on port 5000....')
})