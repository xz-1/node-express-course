const express = require('express')
const app = express()
//destructuring (being explicit) import
const { products } = require('./data')


//this is Home Page
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})


app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProduct)
    //res.json(products)
})


// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1)
//     res.json(singleProduct)
// })

//route in this case (Node.JS) think of it as the Place Holder
//in this case is ':productID' in the URL and 'req.params' in the Code to access the data and setup somekind of logic
app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))

    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    }
    //check the result in terminal for debuging purpose
    //console.log(singleProduct)

    //send back res object to broswer
    return res.json(singleProduct)
})

//one more example of Route params
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    const { productID, reviewID } = req.params
    console.log(`product id: ${productID} review id: ${reviewID}`)
    res.send('Hello World')
})


app.listen(5000, () => {
    console.log('Server is running on port 5000....')
})