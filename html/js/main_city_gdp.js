    require.config({
            paths:{ 
                'echarts' : 'http://echarts.baidu.com/build/echarts',
                'echarts/chart/bar' : 'http://echarts.baidu.com/build/echarts'
            }
    });  
    require(
        [
            'echarts',
            'echarts/chart/bar'
        ],
        function (ec) {
            var myChart = ec.init(document.getElementById('main'));
var option = {
    title : {
        text: '长三角地区两次人口普查人口对比',
        subtext: '列出主要城市（单位：百万）'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['第五次人口普查','第六次人口普查']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',//上海、苏州、无锡、杭州、南京、宁波、绍兴、常州、嘉兴、台州、镇江、湖州、舟山、南通、扬州、泰州
            data : ['上海','苏州','无锡','杭州','南京','宁波','绍兴','常州','嘉兴','台州','镇江','湖州','舟山','南通','扬州']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'第五次人口普查',
            type:'bar',
            data:[1673, 989, 603, 450, 757, 242, 63, 434, 176, 297, 295, 114,141,689,422],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'第六次人口普查',
            type:'bar',
            data:[2300, 1046, 637, 870, 800, 760, 491, 459, 450, 596, 311, 289,112,728,445],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
	
};myChart.setOption(option);
} 
);                   