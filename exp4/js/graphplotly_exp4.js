var xArray=[];
var yArray=[];
//var xValues=[];
//var yValues=[];

function showbestfit(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
      var rwe1 = otable.rows[tabrowindex].cells;
       
      //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
      xArray.push(parseFloat(rwe1[3].innerHTML));
      yArray.push(parseFloat(rwe1[4].innerHTML));
  }
  
  var xValues = [0.0524,0.0840];
  var yValues = [0.0315,0.063];
 // alert(xValues);
 // alert(yValues);

var data = [
    {x:xArray, y:yArray, mode:"markers"},
    {x:xValues, y:yValues, mode:"line"}
  ];
  
  var layout = {
    xaxis: {range: [0.00, 0.1], title: "Eq(1)"},
    yaxis: {range: [0.00, 0.1], title: "Q"},  
    title: "Best Fit"
  };
  
  Plotly.newPlot("myPlot4", data, layout);
  document.getElementById('myPlot4').style.display="block";
  document.getElementById('myChartexp4').style.display="none";
}