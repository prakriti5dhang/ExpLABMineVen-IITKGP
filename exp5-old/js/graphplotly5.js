/* Lab:exp_5_Theory of Fan Rating Test
	 File name: graphplotly5.js
   Author:Prakriti Dhang
*/



var dataPointai =[];

var xArray = [];
var yArray = [];
var xValues = [];
var yValues = [];


 function showplot(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
        var rwe1 = otable.rows[tabrowindex].cells;
         
        //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
        xArray.push(parseFloat(rwe1[6].innerHTML));
        yArray.push(parseFloat(rwe1[1].innerHTML));
        //alert(rwe1[2].innerHTML);
        //alert(rwe1[1].innerHTML);
    }
   
    var data = [
        {x:xArray, y:yArray, mode:"markers"}
        
      ];
      
      var layout = {
        xaxis: {range: [0, 1],dtick: 0.1, title: "Quantity "},
        yaxis: {range: [1, 40],dtick: 4, title: "Static Pressure"},  
        title: "Quantity Vs Static Pressure"
      };
      
      Plotly.newPlot("myPlot", data, layout);

 }




function showbestfitg(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
      var rwe1 = otable.rows[tabrowindex].cells;
       
      //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
      xArray.push(parseFloat(rwe1[6].innerHTML));
      yArray.push(parseFloat(rwe1[1].innerHTML));
  }
  var xSum = xArray.reduce(function(a, b){return a + b;}, 0);
  var ySum = yArray.reduce(function(a, b){return a + b;}, 0);
  var slope = ySum / xSum;
  
  // Generate values
  var xValues = [];
  var yValues = [];
  for (var x = 0; x <= 2; x += 1) {
    xValues.push(x);
    yValues.push(x * slope);
  }

var data = [
    {x:xArray, y:yArray, mode:"markers"},
    {x:xValues, y:yValues, mode:"line"}
  ];
  
  var layout = {
    
    xaxis: {range: [0, 1], dtick: 0.2, title: "Quantity"},
    yaxis: {range: [1, 40],  dtick: 4,  title: "Static Pressure"},  
    title: "Best Fit- Quantity Vs Static Pressure"
  };
  
  Plotly.newPlot("myPlot", data, layout);
}