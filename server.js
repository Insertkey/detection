const net = require('net');
var mongoose=require('mongoose');

const HOST = '111.230.91.243';
const PORT = 6969;

const server=net.createServer(function(socket) {
  //连接成功时显示连接设备的地址和端口号
  console.log('connected: ' +
    socket.remoteAddress + ':' + socket.remotePort);

  // 断开连接时显示断开连接的设备和端口号
  socket.on('close', function() {
    console.log('closed: '+socket.remoteAddress + ' ' + socket.remotePort);
  });

  socket.setEncoding('utf8');

  socket.on('data',function (data) {
    var MongoClient=require('mongodb').MongoClient;
    const url="mongodb://localhost:27017/";
    console.log(data);
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("test");
      //获取当前时间并转换为字符串
      var date=new Date();
      var nowDate=date.toUTCString();
      //处理字符串
      var string=data.slice(0,data.length-1)+','+'"date":'+'"'+nowDate+'"'+'}';
      //将字符串转换为一个JSON对象
      var myobj = JSON.parse(string);
      dbo.collection("detection").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
      });
    });
  });
}).listen(PORT);

console.log('Server listening on ' + HOST +':'+ PORT);
