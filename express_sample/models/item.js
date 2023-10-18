//fsモジュール読み込み
const fs=require('fs')

//パス設定
exports.filePath="./data/items.json"

//すべてのデータを取得
exports.get=()=>{
    var json=fs.readFileSync(this.filePath)
    var values= JSON.parse(json,'utf8')
    return values
}

//IDを指定してデータ取得するメソッド
exports.find=(id)=>{
    var values =this.get()
    //データを繰り返しvalueのidがidと同じだったら返す
    return values.find((value)=>value.id==id);
}