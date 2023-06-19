/*
const express = require('express')

//similar to 'const server = http.createServer((req, res) => {})'
//app object is similat server object, in this case
const app = express()
*/

//above code or just:
const app = require('express')()




app.listen(5000, () => {
    console.log('Server is listening to port 5000')
})

