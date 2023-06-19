const http = require('http')
const { readFileSync } = require('fs')


//get all files:
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


//it is invoked every time when the users hit the server
const server = http.createServer((req, res) => {
    console.log(req.url)

    //check if it is Home Page
    if (req.url === '/') {
        //tell browser how to handle response, so it understand html (in this case)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        //always call res.end()
        res.end()
    }
    else if (req.url === '/about') {
        //tell browser how to handle response, so it understand html (in this case)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Pages</h1>')
        //always call res.end()
        res.end()
    }
    else if (req.url === '/styles.css') {
        //tell browser how to handle response, so it understand html (in this case)
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        //always call res.end()
        res.end()
    }
    else if (req.url === '/logo.svg') {
        //tell browser how to handle response, so it understand html (in this case)
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        //always call res.end()
        res.end()
    }
    else if (req.url === '/browser-app.js') {
        //tell browser how to handle response, so it understand html (in this case)
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        //always call res.end()
        res.end()
    }

    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Pages Not Found</h1>')
        res.end()
    }
})

//return the server object with listen()
//in this case server is listening in port 5000
server.listen(5000)