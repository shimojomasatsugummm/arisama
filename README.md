# current-status

Slackに現在のステータスを投稿する

## 使い方

起動後、以下の3つを取得して入力する

### Webhook URL
`https://yoursubdomain.slack.com/services`から`Webhook URL`を取得して入力する

### Slackトークン
Slackチーム毎に発行されるトークンを`https://api.slack.com/web`で取得して入力する

### ユーザーID
ユーザー毎に発行されているIDを`https://api.slack.com/methods/users.info/test`で取得して入力する

## GET STARTED

```sh
npm install && npm start
```
