var contentType = require('content-type');
var express = require('express');
var multer = require('multer');
var fs = require('fs');
var app = express();

var storage = multer.diskStorage({
  destination: __dirname + '/photos/',
  filename: function (req, file, cb) {
	console.log(file);
    cb(null, file.originalname)
  }
});

var upload = multer({ storage: storage, dest: __dirname + '/photos/'});

app.post('/', upload.array('attachments', 10), function(req, res, next) {
	console.log('content-len', req.headers['content-length']);
	console.log('encoding',  contentType.parse(req).parameters.charset);
	console.log('req.files', req.files);
	res.send(200, 'yoyo!');
});

app.listen(3000);


