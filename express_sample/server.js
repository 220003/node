const  express = require('express')//expressモジュールの読み込み
const dotenv = require('dotenv')//dotenvモジュールの読み込み

//dotenvの設定読み込み
dotenv.config()
const HOST = process.env.HOST
const POST = process.env.PORT

console.log(HOST)
console.log(PORT)