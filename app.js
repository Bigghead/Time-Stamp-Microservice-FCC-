var express = require('express'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/:timeStamp', function(req, res){
  var returnedObj = {
    natural : null,
    unix : null
  };
  var time = (req.params.timeStamp).replace(/&/g," ");//.replace(/,/g, "");
  if(moment(time, 'MMMM Do, YYYY').isValid()){
    returnedObj.natural = time;
    returnedObj.unix = moment(time).format('X');
  } else if(moment(time, 'X').isValid()){
    returnedObj.unix = time;
    returnedObj.natural = moment(time).format('MMMM Do, YYYY');
  }
  console.log(time);
  console.log(moment(time, 'MMMM Do, YYYY').isValid());


  res.send(returnedObj);
});

app.listen(3000, function(){
  console.log('Listening on 3000');
});
