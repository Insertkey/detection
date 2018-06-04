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
  //错误处理
  socket.on('error',function(){
    console.log("出现了一个错误，文档未成功插入");
  });

  socket.on('data',function (data) {
    var MongoClient=require('mongodb').MongoClient;
    const url="mongodb://localhost:27017/";
    console.log(data);
    //验证接收到的数据是否是一个对象字符串
    var reg=/^{/
    if(reg.test(data)){
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        //获取当前时间的毫秒数
        var date=Date.now();
        //处理字符串
        var string=data.slice(0,data.length-1)+','+'"date":'+date+'}';
        //将字符串转换为一个JSON对象
        var myobj = JSON.parse(string);
        dbo.collection("detection").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("文档插入成功");
        });
        db.close();
      });
    }
  });
}).listen(PORT);

console.log('Server listening on ' + HOST +':'+ PORT);