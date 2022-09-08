var http = require("http");

http.createServer(function(req,res){
    res.write("welcome home");
    res.end();
}).listen(4000);
console.log("server started")