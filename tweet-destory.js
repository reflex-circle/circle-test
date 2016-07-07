var frisby = require('frisby');
var twitter = require('ntwitter');
require('date-utils');

var dt = new Date();
var instance = new twitter({
 consumer_key: process.env.CONSUMER_KEY,
 consumer_secret: process.env.CONSUMER_SECRET,
 access_token_key: process.env.ACCESS_TOKEN_KEY,
 access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

instance.post('statuses/destroy/750957884133896193.json',
  function(err, data) {
   console.log(err);
   console.log(data);
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
