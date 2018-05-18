var net = require('net');
var mongoose=require('mongoose');

var HOST = '111.230.91.243';
var PORT = 6969;

data=net.createServer(function(socket) {
  //连接成功时显示连接设备的地址和端口号
  console.log('connected: ' +
    socket.remoteAddress + ':' + socket.remotePort);

  // 断开连接时显示断开连接的设备和端口号
  socket.on('close', function() {
    console.log('closed: '+socket.remoteAddress + ' ' + socket.remotePort);
  });

  socket.on('data',function () {
    var MongoClient=require('mongodb').MongoClient;
    var url="mongodb://localhost:27017/";

    console.log(data.toString());
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("test");
      var myobj = data;
      dbo.collection("detction").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
      });
    });
  });
}).listen(PORT);

console.log('Server listening on ' + HOST +':'+ PORT);
