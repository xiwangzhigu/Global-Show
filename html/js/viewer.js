window.onload = initAll;

function checked(){
//事件一
//行政区划选择执行按钮
	Provice();//高亮显示行政区
	chgChart();//更改柱状图信息

	
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
		name: "人口数据（城市、城镇、乡村）(10万人）",
		provice: provice,
		fieldnames: ["城市","城镇","乡村"],
		fields: [
			[59,27,45,30,28,82,37,52,67,99.9,75.9,41.9,44.0,22.2,93.0,56.3,58.4,40.1,184.9,26.7,6.9,30.4,55.5,18.7,22.7,1.0,30.0,18.0,4.7,73.0,22.6,-1],
			[4.7,4.2,48.3,22.7,19.8,18.1,16.1,26.8,11.4,54.9,47.8,43.1,25.5,37.9,58.8,46.8,30.6,45.9,44.2,28.8,5.6,22.8,54.5,19.3,27.7,1.2,24.3,11.3,3.5,2.9,11.4,-1],
			[9.3,8.0,114,53.0,36.2,52.7,38.1,53,10.0,101.4,76.8,108.0,49.1,64.3,155.9,160.7,83.4,104.2,93.0,79.0,11.9,49.4,153.6,69.4,76.4,4.6,56.4,41.7,7.5,9.4,34.9,-1]
		]
	}
	var jsChart = {
		name: "高中及以上学历受教育程度（%）",
		provice:provice,
		fieldnames: ["城市","城镇","乡村"],
		fields: [
			[61.8,49.5,49.8,49.0,44.2,44.1,52.6,46.2,52.2,46.4,38.2,44.6,38.6,45.8,47.3,50.0,50.7,50.8,40.0,46.2,47.5,45.6,44.6,40.3,42.9,37.5,56.3,50.4,43.1,45.3,48.1,46.6],
			[41.3,33.8,26.2,32.3,33.6,25.7,29.3,28.4,29.4,26.6,24.8,25.4,26.1,30.0,27.6,29.1,32.8,32.4,25.1,26.8,28.8,26.6,29.8,24.8,25.4,33.6,36.1,36.9,35.5,26.5,35.0,28.6],
			[27.3,12.9,10.1,12.2,11.9,7.6,8.4,6.7,17.2,14.3,12.5,8.5,12.0,9.9,10.6,10.7,13.0,13.2,11.6,7.6,11.5,7.8,7.6,5.6,6.8,5.9,13.1,9.9,7.0,10.6,9.6,10.3]
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
		//更改省份
		Provice();
		//读取省份概况	
			try{
				xmlDoc= new ActiveXObject("Microsoft.XMLDOM");
			}catch(e){
				try{
					xmlDoc= document.implementation.createDocument(",",null);
				}catch(e){
					alert(e.message);
					return;
				}
			}
			xmlDoc.async = false;
			xmlDoc.load("note.xml");
			document.getElementById("sum").value=xmlDoc.getElementsByTagName("sum")[NumProvice.value].childNodes[0].nodeValue;
}

function Provice(){
	//加载省份柱
    // initAll();
	//高亮显示省份行政区划
    var bdary = new BMap.Boundary();
	//for(var i=0;i<provice.length;i++){
		bdary.get(provice[NumProvice.value], function(rs){       //获取行政区域
		map.clearOverlays();        //清除地图覆盖物 
		InfoPoint(); 		
			var count = rs.boundaries.length; //行政区域的点有多少个
			for(var i = 0; i < count; i++){
				var ply = new BMap.Polygon(rs.boundaries[i], {strokeColor:"black", strokeWeight:2, strokeOpacity:0, fillColor:color[NumProvice.value]}); //建立多边形覆盖
				map.addOverlay(ply);  //添加覆盖物
				//map.setViewport(ply.getPath());    //调整视野 
				//弹出窗口	
			}                
		}); 
	//}
	//性别指数切换
	document.getElementById("rate").innerHTML=(rate[NumProvice.value])/10+100;
	//alert(provice[NumProvice.value]);
}




















































































