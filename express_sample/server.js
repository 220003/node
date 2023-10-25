const  express = require('express')//expressモジュールの読み込み
const dotenv = require('dotenv')//dotenvモジュールの読み込み
const routes=require('./routes')//routerモジュールの読み込み
//dotenvの設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

//サーバー作成
const app = express()

//ミドルウェアの設定
//publicフォルダを静的コンテンツのフォルダに設定
app.use(express.static(__dirname + '/public'))
//URLエンコード
app.use(express.urlencoded({ extended: true }))
//モジュールを読み込み
const layouts=require('express-ejs-layouts')
//EJSをテンプレートエンジンとして設定
app.set('view engine','ejs')
//views/layout/default.ejsをレイアウトとして利用
app.set('layout','layouts/default')
//ミドルウェアとして利用    
app.use(layouts)
//ルーティングを有効
app.use(routes)


//getリクエスト
// app.get('/',(req,res) => {//URLのパス,(リクエスト,レスポンス)
//     console.log(req.body)
//     console.log(req.url)
//     console.log(req.query)

//     //レスポンスの処理
//     res.send('Hello!!!')
// })

// //getリクエスト
// app.get('/profile',(req,res) => {//URLのパス,(リクエスト,レスポンス)
//     res.send('Profile Page')
// })

// //postリクエスト
// app.post('/auth',(req,res) => {//URLのパス,(リクエスト,レスポンス)
//     var loginName = req.body.login_name
//     var password = req.body.password
//     console.log(loginName, password)

//     var message = "ログイン失敗"
//     //envで設定した値でログインチェック
//     if (loginName == process.env.LOGIN_NAME
//         && password == process.env.PASSWORD) {
//             message = "ログイン成功"
//     }
//     res.send(message)
// })

//サーバ停止　ctrl+c
//サーバ待機(Listen)
app.listen(PORT,HOST,() => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})