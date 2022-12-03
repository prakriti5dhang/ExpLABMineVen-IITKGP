/* Lab:exp_4_Calibration of orifice plates
	 File name: graphplot_exp4.js
   Author:Prakriti Dhang
*/

var dataPointc =[];



function showplot(){
    

        for (var tabrowindex = 0; tabrowindex < otable.rows.length; tabrowindex++) {
          var rwe1 = otable.rows[tabrowindex].cells;
          
      
          dataPointc.push({ x: parseFloat(rwe1[3].innerHTML) ,y: parseFloat(rwe1[4].innerHTML)  });
          
      }
   //alert(parseFloat(rwe1[0].innerHTML));
      
  // { x: parseFloat(rwe1[0].innerHTML)}
  
  new Chart("myChartexp4", {
    type: "scatter",
    data: {
      datasets: [{
     
        pointRadius: 3,
        pointBackgroundColor: "black",
        data: dataPointc
      }]
    },
    
    options: {
        legend: {display: false},
        scales: {
         //xAxes: [{ticks: {min: 0.00, max:0.1}}],
         xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Eq(3)'
          },
          ticks: {min: 0.00, max:0.1}
        }],
         //yAxes:[{ticks:{min:0.00, max:0.1}}],
         yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Q'
          },
          ticks:{min:0.00, max:0.1}
        }],
        },
        title: {
          display: true,
          text: 'α Coefficent of Discharge '
        }
    }
    
  });
  
document.getElementById('myChartexp4').style.display="block";
document.getElementById('myPlot4').style.display="none";
  
}

//xvalues=[1,2,3,4,5];
/*function showbestfit(){
  for (var tabrowindex = 0; tabrowindex < otable.rows.length; tabrowindex++) {
    var rwe1 = otable.rows[tabrowindex].cells;
    

    dataPointc.push({ x: parseFloat(rwe1[3].innerHTML), y: parseFloat(rwe1[4].innerHTML)  });
    //alert(parseFloat(rwe1[1].innerHTML));
    //alert(parseFloat(rwe1[2].innerHTML));
}

new Chart("myChartexp4", {

data: {
  //labels: [ 0.0168, 0.0268, 0.0368, 0.0478, 0.0568, 0.0688, 0.0788],
  datasets: [{
  pointBackgroundColor: "black",
  type: "scatter",
  fill:false,
  lineTension:0,
  backgroundColor: "rgba(0,0,0,1.0)",
  borderColor: "rgba(0,0,0,0.3)",
  showLine:true,
  data: [{
    x: 0.0315,
    y: 0.0524}, {
      x:0.063,
      y: 0.084}],
},
{
  type: "scatter",
  fill:false,
  lineTension:0,
  backgroundColor: "rgba(0,0,0,1.0)",
  borderColor: "rgba(0,0,0,0.3)",
  //showLine:true,
  data: [{
    x: 0.0315,
    y: 0.0524}, 
    {
      x: 0.038,
      y: 0.0614},
      {
        x: 0.0469,
        y: 0.0699},
        {
          x: 0.0532,
          y: 0.0763},
    {
      x:0.063,
      y: 0.084}],

}],
labels: [0.0,0.0115, 0.0215, 0.0315,0.038,0.0469,0.0532,0.063, 0.073,0.083,0.093,0.10]
},

options: {
  legend: {display: false},
  scales: {
  // xAxes: [{ticks: {min: 0.00, max:0.1}}],
   xAxes: [{
    scaleLabel: {
      display: true,
      labelString: 'Eq(3)'
    },
    ticks: {min: 0.00, max:0.1}
  }],
   //yAxes:[{ticks:{min:0.00, max:0.1}}],
   yAxes: [{
    scaleLabel: {
      display: true,
      labelString: 'Q'
    },
    ticks:{min:0.00, max:0.1}
  }],
  },

  title: {
    display: true,
    text: 'Best Fit'
  }
}

});
}


 /*function showbestfit(){
   alert("bestfit garph");

        Highcharts.chart('myChartexp4',{ 
          chart: {
            type: 'line'
        },
            title: {
               text: 'Scatter plot with regression line'   
            },
             xAxis :{
               min: 0.00,
               max: 0.1
            },
            yAxis : {
               min: 0.00,
               max: 0.1
            },
             series : [
               {
                  //type: 'line',
                  name: 'Regression Line',
                  data: [[0, 1.15], [5, 4.64]],
                  accessibility: {
                    description: 'This is the most used desktop screen reader'
                  },
                  marker: {
                     enabled: false
                  },
                  states: {
                     hover: {
                        lineWidth: 0
                     }
                  },
                  enableMouseTracking: false
               }, 
               {
                  type: 'scatter',
                  name: 'Observations',
                  data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
                  marker: {
                     radius: 4
                  }
               }
            ]    
            /*var json = {};   
            json.title = title;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            $('#myChartexp4').highcharts(json);  
         });
        }*/