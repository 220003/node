// expressモジュール読み込み
const express = require('express')
// Routerオブジェクトを生成
const router = express.Router()
//mojuls/item.jsを読み込み
//const item=require('./models/item')
//HomeControllerモジュール読み込み
const HomeController=require('./controllers/HomeController')
//ItemControllerモジュール読み込み
const ItemController=require('./controllers/ItemController')
//LoginControllerモジュール読み込み
const LoginController=require('./controllers/LoginController')
//UserControllerモジュール読み込み
const UserController=require('./controllers/UserController')

// GETリクエストの処理
//  トップページ
router.get('/',HomeController.index //(req, res) => {
    // // リクエストの処理
    // console.log(req.body)
    // console.log(req.url)
    // console.log(req.query)

    // // レスポンスの処理
    // // res.send('Hello!!!!!!')
    // //テンプレート表示(レンダリング)
    // res.render('index')}
    )

router.get('/profile', HomeController.profile//(req, res) => {
//     var user={
//         id:1,
//         name:'YSE',
//         birthplace:'横浜',
//         hoby:['旅行','グルメ','スポーツ']
//     }
//     var data={
//         title:'プロフィール',
//         user:user,
//     }
//     res.render('profile',data)}
    )

// 商品一覧
router.get('/item',ItemController.index// (req, res) => {
    // var data={
    //     title:'商品一覧',
    //     items:item.get(),
    // }
    // //viewa/item/index.ejsにデータを渡して表示
    // res.render('item/index',data)}
    )


// item/xxのルーティング(パスパラメータ)
router.get('/item/:id', ItemController.detail//(req, res) => {
    // const id=req.params.id
    // //IDで商品データを取得
    // var selectItem=item.find(id)
    // var data={
    //     title:'商品詳細',
    //     item:selectItem
    // }
    // res.render('item/detail',data)}
    )

router.get('/login',LoginController.index)

// POSTリクエスト
router.post('/auth',LoginController.auth //(req, res) => {
    // // POSTデータ取得
    // var loginName = req.body.login_name
    // var password = req.body.password
    // console.log(loginName, password)

    // var message = "ログイン失敗"
    // // .env で設定した値で、ログインチェック
    // // TODO：データベースに接続してユーザ取得
    // // TODO：パスワードはハッシュ値でチェック
    // if (loginName == process.env.LOGIN_NAME
    //     && password == process.env.PASSWORD) {
    //         message = "ログイン成功"
    //     //TODO ログインが成功したらユーザの状態を保存
    //     //TODO ログイン後のページの転送
    // } else {
    //     // TODO ログイン画面に戻す
    // }
    // res.send(message)}
    )

    //User
    router.get('/user',UserController.index)
    router.get('/user/logout',UserController.logout)

// モジュール化
module.exports = router