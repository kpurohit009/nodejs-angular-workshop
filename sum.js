var http = require("http");
var a = 5;
var b = 3;
var c = a + b;
http.createServer(function(req,res){
    res.end("Sum of two number is"+ c);
}).listen(3000);
console.log("Server is started at http://127.0.0.1:3000");