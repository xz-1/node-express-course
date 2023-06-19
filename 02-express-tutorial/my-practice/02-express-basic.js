/*
const express = require('express')

//similar to 'const server = http.createServer((req, res) => {})'
//app object is similat server object, in this case
const app = express()
*/

//above code or just:
const app = require('express')()


app.get('/', (req, res) => {
    console.log('user hit resource')
    res.status(200).send('Home Page Express')
})


app.get('/about', (req, res) => {
    console.log('user hit resource about')
    res.status(202).send('About')
})


//set as default: meaning that whatever url from user(s)' request
//that does not match any from above 
app.all('*', (req, res) => {
    res.status(404).send('Resource Not Found')
})


app.listen(5000, () => {
    console.log('Server is listening to port 5000')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
    //this is browser default
        //it handles all http verbs
//app.use
//app.listen




