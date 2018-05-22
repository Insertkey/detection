var MongoClient = require('mongodb').MongoClient
var assert = require('assert');


//查询所有记录
var findDocuments = function(db) {
  var dbo = db.db("test");
  return new Promise((resolve, reject) => {
    dbo.collection('detection').find({}).toArray(function(err, result) {
    if(err) reject(err);
    docs=result.pop();
    console.log(docs);
    resolve(docs);
    db.close();
  });
});
};



const url = 'mongodb://localhost:27017/test';

//把结果保存到documents变量中
documnets = new Promise((resolve, reject) => {
  //连接数据库
  MongoClient.connect(url, function(err, db) {
  if(err) reject(err);
  resolve(findDocuments(db));
});
});

module.exports{documnets}














/*var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  //取得现在时间的毫秒数
  now = Date.now();
  //获取前两分钟插入数据库的数据
  return dbo.collection("detection").find(/*{"date":{$gt:now-1000*60*2}}*//*).toArray(function (err, result) {
    if (err) throw err;
    //取得一个最新的数据
    data=result.pop();
    return data;
  });
});*/






