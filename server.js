/* Server File */
var express = require('express');

//initilizing the express app
var app = express();

//serving static files
app.use('/path', express.static(__dirname + '/app'));
console.log(__dirname);

//serving index file for app initailizing
app.all('*', function(req, res, next) {
    res.sendFile('app/index.html', { root: __dirname });
});

//seting the server port
app.listen(7916, function(){
	console.log("server is runing on URL : http://localhost:7916");
}); 