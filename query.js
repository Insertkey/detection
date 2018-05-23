var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  //取得现在时间的毫秒数
  now = Date.now();
  //获取前两分钟插入数据库的数据
  dbo.collection("detection").find(/*{"date":{$gt:now-1000*60*2}}*/).toArray(function (err, result) {
    if (err) throw err;
    //取得一个最新的数据
    data=result.pop();
    return data;
  });
});








