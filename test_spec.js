var frisby = require("frisby");

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
