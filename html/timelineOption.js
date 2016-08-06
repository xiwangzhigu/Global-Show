var dataMap = {};
function dataFormatter(obj) {
    var pList = ['浙江','上海','江苏'];
    var temp;
    var max = 0;
    for (var year = 2002; year <= 2011; year++) {
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            obj[year][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[year+'max'] = Math.floor(max/100) * 100;
    }
    return obj;
}

function dataMix(list) {
    var mixData = {};
    for (var i = 0, l = list.length; i < l; i++) {
        for (var key in list[i]) {
            if (list[i][key] instanceof Array) {
                mixData[key] = mixData[key] || [];
                for (var j = 0, k = list[i][key].length; j < k; j++) {
                    mixData[key][j] = mixData[key][j] 
                                      || {name : list[i][key][j].name, value : []};
                    mixData[key][j].value.push(list[i][key][j].value);
                }
            }
        }
    }
    return mixData;
}

dataMap.dataGDP = dataFormatter({
    //max : 60000,
    2011:[37568.49,21602.12,59161.75],
    2010:[34665.33,20181.72,54058.22],
    2009:[32318.85,19195.69,49110.27],
    2008:[27722.31,17165.98,41425.48],
    2007:[22990.35,15046.45,34457.3],
    2006:[21462.69,14069.87,30981.98],
    2005:[18753.73,12494.01,26018.48],
    2004:[15718.47,10572.24,21742.05],
    2003:[13417.68,9247,66,18598.69],
    2002:[11648.7,8072.83,15003.60]
});



dataMap.dataEstate = dataFormatter({
    //max : 3600,
    2011:[0,0,0],
    2010:[26406.80,19506.70,30057.20],
    2009:[23470.30,17288.45,25914.70],
    2008:[20612.20,15650.24,23334.50],
    2007:[17833.40,13707.32,20080.60],
    2006:[14504.70,11464.15,16718.70],
    2005:[11162.80,8745.22,13014.90],
    2004:[10473.50,8730.00,12183.50],
    2003:[8746.00,7665.60,10581.30],
    2002:[7364.10,6116.13,8863.10]
});

dataMap.dataFinancial = dataFormatter({
    //max : 3200,
    2011:[6216.25,2819.59,7241.45],
    2010:[5226.27,2381.36,6206.10],
    2009:[4137.25,2170.31,5552.69],
    2008:[3030.04,1980.68,4301.85],
    2007:[2253.57,1464.18,3338.58],
    2006:[1999.30,1366.87,3064.45],
    2005:[1820.84,1307.53,2515.86],
    2004:[1572.79,1275.59,1901.01],
    2003:[1454.55,1246.86,1526.90],
    2002:[1295.24,1175.46,1269.78]
});

dataMap.dataGDP_Estate = dataMix([dataMap.dataEstate, dataMap.dataGDP]);
