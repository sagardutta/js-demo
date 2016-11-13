var express = require('express');
var app = express()

app.use(function(req,res, next){
  console.log(req.path);
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/metrics', function (req, res) {
  res.send('Metrics what ??')
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
