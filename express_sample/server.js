const  express = require('express')//expressモジュールの読み込み
const dotenv = require('dotenv')//dotenvモジュールの読み込み

//dotenvの設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

//サーバー作成
const app = express()

//getリクエスト
app.get('/',(req,res) => {//URLのパス,(リクエスト,レスポンス)
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    //レスポンスの処理
    res.send('Hello!!!')
})

//getリクエスト
app.get('/profile',(req,res) => {//URLのパス,(リクエスト,レスポンス)
    res.send('Profile Page')
})

//サーバ停止　ctrl+c
//サーバ待機(Listen)
app.listen(PORT,HOST,() => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})