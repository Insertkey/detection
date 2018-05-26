var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
var fs=require('fs');

function getData() {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    //取得现在时间的毫秒数
    now = Date.now();

    //获取前30秒插入数据库的数据
    dbo.collection("detection").find({"date":{$gt:now-1000*30}}).toArray(function (err, result) {
      if (err) throw err;
      //取得一个最新的数据
      data = result.pop();
      db.close();

      fs.writeFile('getData.txt', JSON.stringify(data), function (err) {
        if (err) {
          return console.error(err);
        }
        console.log("数据写入成功！");
      });
    });
  })
}
setInterval(getData,5000);






