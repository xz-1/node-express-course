const express = require('express')
const app = express()
//destructuring (being explicit) import
const { products } = require('./data')


app.get('/', (req, res) => {
    res.json(products)
})


app.listen(5000, () => {
    console.log('Server is running on port 5000....')
})