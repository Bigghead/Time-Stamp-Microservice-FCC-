var express = require('express'),
    bodyParser = require('body-parser'),
    moment = require('moment'),
    app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/:timeStamp', function(req, res){

  var momentFormats= [
    'MMMM Do, YYYY',
    'X'
  ];
  var returnedObj = {
    natural : null,
    unix : null
  };
  var time = req.params.timeStamp;

  //if param is unix
  if(moment(time, momentFormats[1], true).isValid()){
    // time = parseInt(time);

    function convertUnix(number){
      var date = new Date(number * 1000);
      var month = date.getMonth(); // returns a number
      var actualMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var day = date.getDate();
      var year = date.getFullYear();

      // console.log(date + actualMonth[month] + ' ' + day + ', ' + year);

      return actualMonth[month] + ' ' + day + ', ' + year;
    }

    returnedObj.unix = parseInt(time);
    returnedObj.natural = convertUnix(parseInt(time));
  } else {
      var time = time.replace(/&/g, ' ');
      console.log(time);
      console.log(typeof time);
      console.log(moment(time, momentFormats[0], true).isValid());
      if(moment(time, momentFormats[0]).isValid()){
      returnedObj.unix = moment(time).format('X');;
      returnedObj.natural = time;
    } else{
      returnedObj.unix = null;
      returnedObj.natural = null;
   }
  }

  res.send(returnedObj);
});

app.listen(5000, function(){
  console.log('Listening on 5000');
});
