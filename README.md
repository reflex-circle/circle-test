<img src="https://circleci.com/gh/reflex-circle/circle-test.svg?style=shield&circle-token=fbadcabe515d1f7d0d54175159cfe12ebb5a01ab">

# WebAPIの自動テスト
* CircleCI  - https://circleci.com/signup/  
  LoginID - reflex-circle

# 環境
 * CircleCI     -> SassのCIサービス
 * node.js      -> 5.5.0
 * frisby       -> REST API のテスティングフレームワーク
 * jasmine-node -> テスティングフレームワーク
 * ntwitter     -> TwitterでOAtuhするのを楽にする
 * twi          -> TwitterでOAtuhするのを楽にする

# テストスクリプト
 * tweet-update.js -> ツイートを投稿する
 * tweet-destory.js -> ツイートを削除する
 
# Twitterのアクセストークンを取得
 * http://9-bb.com/twitter-apps/

# 性能テスト、負荷テスト
http://jmeter.apache.org/

# CircleCIの覚書

#### reositoryごとに環境変数を設定したい
BUILDS -> 歯車アイコン -> BUILD SETTINGS -> Environment Variables  
アクセストークンやパスワードなどを隠したい場合に


