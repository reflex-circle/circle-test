var frisby = require("frisby");
var twitter = require('ntwitter');
console.log(process.env);

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

frisby.create("投稿").post(
    "https://api.twitter.com/1.1/statuses/update.json",
    {
        status: 'test',
        
    }
).expectStatus(
    400
).expectJSON(
    // 期待するレスポンスボディ
    {"errors":[{"code":215,"message":"Bad Authentication data."}]}
).inspectJSON(
).toss();


 
// 各種キーを入力し、インスタンス生成
var instance = new twitter({
 consumer_key: process.env.CONSUMER_KEY,
 consumer_secret: process.env.CONSUMER_SECRET,
 access_token_key: process.env.ACCESS_TOKEN_KEY,
 access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
 
// 自分のタイムラインの内容を取得
instance.get('/statuses/home_timeline.json', {include_entities:true}, function(data) {
 console.log(data);
});
