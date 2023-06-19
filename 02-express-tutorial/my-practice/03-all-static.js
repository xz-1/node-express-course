const express = require('express')
const path = require('path')
const app = express()

//this is to take care of css, browser-app.js, image (logo.svg) and all that
//it does the same with the long one on the /my-practice/02-express-basic.js
//but all in one line
//term: setup static and middleware
//app.use() : it is used for setup middleware
//static mean: the files/assets that server does not have to change them
//files is located in the folder (commonly) nameed 'public/static'
//example of static files are: imgages, style(css), and javascript
app.use(express.static('./public'))

//this index.html can be counted as static as well
//there are 2 metohds:
//  adding it to ./public folder (this is used most often)
//          reason it works (without having to set '/' url and res.sendFile() and all that) 
//          is because once 'index.html' is in 'public folder' it will automatically be
//          treated as a root by default server will server 'index.html' as a root
//                  so basically line 'app.use(express.static('./public'))' take care of it all
//          Note:
//              for the simple site this setup is enough                                    
//  SSR: Server Side Rendering
//      this has to template engine
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })


app.all('*', (req, res) => {
    res.statsu(404).send('Resource not found')
})

app.listen(5000, () => {
    console.log('Server is listening to port 5000.....')
})