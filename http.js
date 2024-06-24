const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('Welcome to my Homepage')
    }
    if(req.url === '/about'){
        res.end('This is our History')
    }
    res.end(`
        <h1>Oops</h1>
        <p> We cant seem to find the page you are looking for</p>
        <a href ='/'>Back Home</a>
    `)
})

server.listen(5000)