var data=require('./query.js');

console.log(data());





















/*var temp = echarts.init(document.getElementById('temp'));
var humi = echarts.init(document.getElementById('humi'));
var data=[27,26,26,27,26,26,27,28,29,28,27];
var date=[1,2,3,4,5,6,7,8,9,10];


var option_temp = {
  title:{
    text:'温度(单位：℃)'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date
  },
  yAxis: {
    boundaryGap: [0, '50%'],
    type: 'value'
  },
  series: [
    {
      name:'成交',
      type:'line',
      smooth:true,
      symbol: 'none',
      stack: 'a',
      data: data
    }
  ]
};

var option_humi = {
  title:{
    text:'湿度(相对湿度%)'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date
  },
  yAxis: {
    boundaryGap: [0, '50%'],
    type: 'value'
  },
  series: [
    {
      name:'成交',
      type:'line',
      smooth:true,
      symbol: 'none',
      stack: 'a',
      data: data
    }
  ]
};



temp.setOption(option_temp);
humi.setOption(option_humi);*/
