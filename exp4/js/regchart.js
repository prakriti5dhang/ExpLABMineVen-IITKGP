//experimental data
var rawData = [
    [0.0524, 0.0315],
    [0.0614, 0.038],
    [0.0699, 0.0469],
    [0.0763, 0.0532],
    [0.084, 0.063]
  ];
   
  
  //getting the regression object
  //the type of regression depends on the experimental data
  var result = regression('linear', rawData);
  
  //get coefficients from the calculated formula
  var coeff = result.equation;
  
  anychart.onDocumentReady(function () {
  
    var data_1 = rawData;
    var data_2 = setTheoryData(rawData);
  
    chart = anychart.scatter();
  
    chart.title("The calculated formula: " + result.string + "\nThe coefficient of determination (R2): " + result.r2.toPrecision(2));
  
    chart.legend(true);
  
    // creating the first series (marker) and setting the experimental data
    var series1 = chart.marker(data_1);
    series1.name("Experimental data");
  
    // creating the second series (line) and setting the theoretical data
    var series2 = chart.line(data_2);
    series2.name("Theoretically calculated data");
    series2.markers(true);
  
    chart.container("myChartexp4");
    chart.draw();
  });
  
  //input X and calculate Y using the formula found
  //this works with all types of regression
  function formula(coeff, x) {
    var result = null;
    for (var i = 0, j = coeff.length - 1; i < coeff.length; i++, j--) {
      result += coeff[i] * Math.pow(x, j);
    }
    return result;
  }
  
  //setting theoretical data array of [X][Y] using experimental X coordinates
  //this works with all types of regression
  function setTheoryData(rawData) {
    var theoryData = [];
    for (var i = 0; i < drawData.length; i++) {
      theoryData[i] = [rawData[i][0], formula(coeff, rawData[i][0])];
    }
    return theoryData;
  }