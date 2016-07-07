var frisby = require('frisby');
var Twit = require('twit')
require('date-utils');

var dt = new Date();
var instance = new Twit({
 consumer_key: process.env.CONSUMER_KEY,
 consumer_secret: process.env.CONSUMER_SECRET,
 access_token_key: process.env.ACCESS_TOKEN_KEY,
 access_token_secret: "aaa"//process.env.ACCESS_TOKEN_SECRET,
});

instance.post('statuses/destroy/:id', { id: '750957884133896193' },
  function(err, data, response) {
   console.log(err);
   console.log(data);
   console.log(response);
  }
);

/*
frisby.create("SAMPLE TEST").get(
    // リクエストするAPIパス
    "https://api.twitter.com/1.1/statuses/user_timeline.json"
).expectStatus(
    400
).expectJSON(
    // 期待するレスポンスボディ
    {"errors":[{"code":215,"message":"Bad Authentication data."}]}
).inspectJSON(
).toss();
*/
