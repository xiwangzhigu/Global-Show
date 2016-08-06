window.onload = initAll;


var rate=new Array("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
var color=new Array("#FF6EB4","#FF7f50","#FF4500","#FF7f50","#FF6EB4","#FF4500","#FF7f50","#FF7f50","#FF6EB4","#ff3030","#FF4500","#FF6EB4","#FF6EB4","#FF7f50","#ff3030","#FF4500","#FF6EB4","#FF6EB4","#ff3030","#FF7f50","#FF8C00","#FF7f50","#FF6EB4","#FF8C00","#FF7f50","#FF8C00","#FF7f50","#FF8C00","#FF8C00","#FF8C00","#FF8C00","#FF3030");


function checked(){
//事件一
//行政区划选择执行按钮
	Provice();//高亮显示行政区
	chgChart();//更改柱状图信息
	rate();//性别指数	
	//Jump();//跳跃动画
}

function initAll(){
//执行初始化操作
//柱状图初始化
	var radioButtons = document.getElementsByTagName("input");
	for (var i=0; i<radioButtons.length; i++) {
		if (radioButtons[i].type == "radio") {
			radioButtons[i].onclick = chgChart;
		}
	}
	chgChart();
}

function chgChart() {
	var bChart = {
		name: "人口数据（城市、城镇、乡村）(100万人）",
		provice: provice,
		fieldnames: ["常住人口","户籍人口","城镇化率"],
		fields: [
			[24.1515,6.4841,7.2977,8.1878,4.634,8.591,4.6921,10.5787,4.47,3.1654,4.4283,4.8191,7.2198,4.8269,4.55,7.66,1.14,9.19,6.03,4.94,8.84,2.91,5.42,2.12,2.12],
			[14.2693,4.7223,7.6651,6.439,5.078,10.0685,3.6591,6.5384,4.5984,2.7175,5.2018,5.7211,8.2377,5.5296,3.3,5.7,0.9,7.8,5.6,4.3,6.8,2.5,4.6,2.5,2.5],
			[88.02,73.7,59.9,80.5,59,58.1,67.5,73.2,60,65.4,55.7,52.4,57.2,55.1,57.1,69.8,65.8,67,58.1,61,74.9,56,62.2,47.7,53.8]
		]
	}
	var jsChart = {
		name: "GDP值（百亿元），人均GDP（千元）",
		provice:provice,
		fieldnames: [" 总GDP","人均GDP"],
		fields: [
			[216,80.7,50,80,30,44,43,130,32,29,17.8,17,34.7,21.5,31,71,9.3,40,31,39,83,18,29,10,9.8],
			[89,124,69,98,64,51,93,123,72,92,40,35,48,44,69,93,81,43,52,80,94,62,54,49,46]
		]
	}
	var oldData={
		name: "60岁老人健康状况（%）",
		provice:provice,
		fieldnames: ["身体状况良好","健康且生活自理","生活不能自理"],
		fields: [
			[82.7,85.8,81.9,80.1,80.1,83.5,81.0,82.4,87.3,87.4,87.8,79.2,88.8,85.6,85.2,82.5,80.1,79.2,89.8,84.5,80.9,81.4,81.0,80.7,82.6,73.1,81.3,75.7,80.1,81.2,81.8,83.2],
			[12.8,10.6,14.6,16.2,16.4,13.7,16.4,15.1,9.0,10.2,9.8,17.4,9.3,12.3,12.2,14.3,16.9,17.9,8.5,13.2,16.1,15.5,15.7,15.9,13.5,21.5,15.5,20.8,16.2,15.5,15.0,13.9],
			[4.4,3.6,3.5,3.7,3.5,2.7,2.6,2.5,3.7,2.4,2.4,3.4,2.0,2.2,2.7,3.2,3.0,3.0,1.8,2.3,3.1,3.1,3.3,3.4,3.9,5.4,3.2,3.5,3.7,3.3,3.2,2.9]
		]
	}
	var radioButtons = document.getElementsByTagName("input");
	//var currDirection = getButton("direction");
	var imgSrc = "images/lilRed.gif";
	
	var selection=document.getElementById("NumProvice");
	var num=NumProvice.value;
	
	var string1=getButton("type");
	switch(string1){
	case "browser":
		var thisChart = bChart;
		break;
	case "platform":
		var thisChart = jsChart;
		break;
	case "oldData":
		var thisChart = oldData;
		break;
	}
	var chartBody = "<h4>"+thisChart.name+"</h4><table>";

	chartBody += "<tr class='horiz'><th rowspan='4'>"+thisChart.provice[num];
	chartBody += "</th><td colspan='2'></td></tr>";
	for (var j=0; j<thisChart.fieldnames.length; j++) {
		chartBody += "<tr class='horiz'><td>"+thisChart.fieldnames[j];
		chartBody += "</td><td><img alt='horiz bar' src='"+imgSrc;
		chartBody += "' width='"+thisChart.fields[j][num]*3+"'>&nbsp;&nbsp;";
		chartBody += thisChart.fields[j][num]+"</td></tr>";
	}
	chartBody += "</table>";
	document.getElementById("chartArea").innerHTML = chartBody;

	function getButton(buttonSet) {
		for (var i=0; i<radioButtons.length; i++) {
			if (radioButtons[i].name == buttonSet && radioButtons[i].checked) {
				return radioButtons[i].value;
			}
		}
		return -1;
	}
	SelectPro();
}

function Provice(){
	//加载省份柱
    // initAll();
	//高亮显示省份行政区划
    var bdary = new BMap.Boundary();
	for(var i=0;i<provice.length;i++){
		bdary.get(provice[NumProvice.value], function(rs){       //获取行政区域
		map.clearOverlays();        //清除地图覆盖物       
			var count = rs.boundaries.length; //行政区域的点有多少个
			for(var i = 0; i < count; i++){
				var ply = new BMap.Polygon(rs.boundaries[i], {strokeColor:"red", strokeWeight:2, strokeOpacity:0, fillColor:color[NumProvice.value]}); //建立多边形覆盖
				map.addOverlay(ply);  //添加覆盖物
				//map.setViewport(ply.getPath());    //调整视野         
			}                
		});  
	}
	//性别指数切换
	document.getElementById("rate").innerHTML=rate[NumProvice.value];
}




















































































