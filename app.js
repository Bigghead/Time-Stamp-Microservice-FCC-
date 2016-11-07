var express = require('express'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/:timeStamp', function(req, res){
  var returnedObj = {
    natural : null
  };
  var time = (req.params.timeStamp).replace(/&/g," ");
  console.log(time);


  res.send(returnedObj);
});

app.listen(3000, function(){
  console.log('Listening on 3000');
});
