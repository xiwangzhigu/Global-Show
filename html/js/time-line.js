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
            var myChart = ec.init(document.getElementById('main2'));
var option = {
    timeline:{
        data:[
            '2002-01-01','2003-01-01','2004-01-01','2005-01-01','2006-01-01',
            '2007-01-01','2008-01-01','2009-01-01','2010-01-01','2011-01-01'
        ],
        label : {
            formatter : function(s) {
                return s.slice(0, 4);
            }
        },
        autoPlay : true,
        playInterval : 1000
    },
    options:[
        {
            title : {
                'text':'2002长江三角洲宏观经济指标',
                'subtext':'数据来自国家统计局'
            },
            tooltip : {'trigger':'axis'},
            legend : {
                x:'right',
                'data':['GDP','房地产投资总和','城乡居民存款余额'],
                'selected':{
                    'GDP':true,
                    '房地产投资总和':false,
                    '城乡居民存款余额':true,
                    
                }
            },
            toolbox : {
                'show':true, 
                orient : 'vertical',
                x: 'right', 
                y: 'center',
                'feature':{
                    'mark':{'show':true},
                    'dataView':{'show':true,'readOnly':false},
                    'magicType':{'show':true,'type':['line','bar','stack','tiled']},
                    'restore':{'show':true},
                    'saveAsImage':{'show':true}
                }
            },
            calculable : true,
            grid : {'y':80,'y2':100},
            xAxis : [{
                'type':'category',
                'axisLabel':{'interval':0},
                'data':[
                   '浙江','\n上海','江苏'
                ]
            }],
            yAxis : [
                {
                    'type':'value',
                    'name':'GDP（亿元）',
                    'max':53500
                },
                {
                    'type':'value',
                    'name':'其他（亿元）'
                }
            ],
            series : [
                {
                    'name':'GDP',
                    'type':'bar',
                    'markLine':{
                        symbol : ['arrow','none'],
                        symbolSize : [4, 2],
                        itemStyle : {
                            normal: {
                                lineStyle: {color:'orange'},
                                barBorderColor:'orange',
                                label:{
                                    position:'left',
                                    formatter:function(a,b,c){return Math.round(c)},
                                    textStyle:{color:'orange'}
                                }
                            }
                        },
                        'data':[{'type':'average','name':'平均值'}]
                    },
                    'data': dataMap.dataGDP['2002']
                },
                {
                    'name':'房地产投资总和','yAxisIndex':1,'type':'bar',
                    'data': dataMap.dataFinancial['2002']
                },
                {
                    'name':'城乡居民存款余额','yAxisIndex':1,'type':'bar',
                    'data': dataMap.dataEstate['2002']
                }
                
            ]
        },
        {
            title : {'text':'2003长江三角洲宏观经济指标'},
            series : [
                {'data': dataMap.dataGDP['2003']},
                {'data': dataMap.dataFinancial['2003']},
                {'data': dataMap.dataEstate['2003']}
               
            ]
        },
        {
            title : {'text':'2004长江三角洲宏观经济指标'},
            series : [
                {'data': dataMap.dataGDP['2004']},
                {'data': dataMap.dataFinancial['2004']},
                {'data': dataMap.dataEstate['2004']}
                
            ]
        },
        {
            title : {'text':'2005长江三角洲宏观经济指标'},
            series : [
                {'data': dataMap.dataGDP['2005']},
                {'data': dataMap.dataFinancial['2005']},
                {'data': dataMap.dataEstate['2005']}
               
            ]
        },
        {
            title : {'text':'2006长江三角洲宏观经济指标'},
            series : [
                {'data': dataMap.dataGDP['2006']},
                {'data': dataMap.dataFinancial['2006']},
                {'data': dataMap.dataEstate['2006']}
                
            ]
        },
        {
            title : {'text':'2007长江三角洲宏观经济指标'},
            series : [
                {'data': dataMap.dataGDP['2007']},
                {'data': dataMap.dataFinancial['2007']},
                {'data': dataMap.dataEstate['2007']}
                
            ]
        },
        {
            title : {'text':'2008长江三角洲宏观经济指标'},
            series : [
                {'data': dataMap.dataGDP['2008']},
                {'data': dataMap.dataFinancial['2008']},
                {'data': dataMap.dataEstate['2008']}
               
            ]
        },
        {
            title : {'text':'2009长江三角洲宏观经济指标'},
            series : [
                {'data': dataMap.dataGDP['2009']},
                {'data': dataMap.dataFinancial['2009']},
                {'data': dataMap.dataEstate['2009']}
                
            ]
        },
        {
            title : {'text':'2010长江三角洲宏观经济指标'},
            series : [
                {'data': dataMap.dataGDP['2010']},
                {'data': dataMap.dataFinancial['2010']},
                {'data': dataMap.dataEstate['2010']}
                
            ]
        },
        {
            title : {'text':'2011长江三角洲宏观经济指标'},
            series : [
                {'data': dataMap.dataGDP['2011']},
                {'data': dataMap.dataFinancial['2011']},
                {'data': dataMap.dataEstate['2011']}
                
            ]
        }
    ]
};myChart.setOption(option);
} 
);                   