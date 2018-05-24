var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
var fs=require('fs');

function getTenData() {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    //取得现在时间的毫秒数
    now = Date.now();

    //获取前两分钟插入数据库的数据
    dbo.collection("detection").find(/*{"date":{$gt:now-1000*60*2}}*/).toArray(function (err, result) {
      if (err) throw err;
      //取得一个最新的数据
      data = result.slice(result.length - 10, result.length);
      db.close();

      fs.writeFile('getTenData.txt', JSON.stringify(data), function (err) {
        if (err) {
          return console.error(err);
        }
        console.log("数据写入成功！");
      });
    });
  })
}
setInterval(getTenData,5000);






