var frisby = require("frisby");

frisby.create("SAMPLE TEST").get(
    // リクエストするAPIパス
    "https://api.twitter.com/1.1/statuses/user_timeline.json"
).expectStatus(
    4001
).expectJSON(
    // 期待するレスポンスボディ
    {"errors":[{"code":215,"message":"Bad Authentication data."}]}
).inspectJSON(
).toss();