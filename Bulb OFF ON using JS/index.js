var http = require("http");
var fs = require("fs")

http.createServer(function(res,res){
    fs.readFile("bulb.html",function(err,data){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write(data);
        res.end();
    });


}).listen(4040);
console.log("SERVER CREATED")