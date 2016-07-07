//var frisby = require('frisby');
var Twit = require('twit');
require('date-utils');

var dt = new Date();
var t = new Twit({
 consumer_key: process.env.CONSUMER_KEY,
 consumer_secret: process.env.CONSUMER_SECRET,
 access_token: process.env.ACCESS_TOKEN_KEY,
 access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
});
/*
instance.post('statuses/destroy/:id', { id: '750957884133896193' },
  function(err, data, response) {
   console.log(err);
   console.log(data);
   console.log(response);
  }
);
*/
