const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {

let route = req.url
if(route==="/"){
    res.end("This is from Home page....")
}


console.log("app is running on port 5000");
})
app.listen(5000)