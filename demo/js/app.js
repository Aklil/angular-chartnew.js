angular.module('demo'
  , ['angular-chartnewjs']
  )
  .controller(
    'DemoController'
    , [
      '$scope'
      , function ($scope) {
        var data = [5000,10000,70000,15000,6000.680,700,15000,60000,90100,5010,14500,1000];
        //var data = [5000,10000,70000,15000,6000.680,700,15000];

        var lineChartData = {
          labels : ["","","MAR","","","JUN","","","SEP","","","DEC"],
          datasets : [{
            label : 'Transactions This Year' ,
            strokeColor : '#ffcc00',
            pointColor : '#ffcc00',
            pointStrokeColor : '#E15E2A',
            pointStrokeWidth : 3,
            pointHighlightFill : '#ffcc00',
            pointHighlightStroke : 'rgba(220,220,220,1)',
            data :  data
          }]
        };

        $scope.chart_data_line_chart = lineChartData;
        $scope.chart_3options_line_chart = getLineChartOptions(lineChartData);

        function getLineChartOptions (chartData) {

          var steps = 5;

          var stepWidth = Math.max.apply(Math, chartData)/steps;

          stepWidth = roundUp(stepWidth).toFixed(2);

          return {
            responsive: true,
            pointDot: false,
            bezierCurve: false,
            datasetFill: false,
            scaleOverride: (stepWidth === 0) ? false : true,
            scaleSteps: steps,
            scaleStartValue: 0,
            scaleFontColor: '#ffcc00',
            scaleFontSize: 7,
            scaleStepWidth: stepWidth,
            scaleLabel: "<%=formatNumber(value, 1)%>",
            inGraphDataVAlign: "middle",
            xAxisFontSize: 10
          };
        };

      }
    ]);

//These functions are only helpers to manipulate the grid and layoout of chart newjs for the demo
var formatNumber = function (num, dec) {
  dec = Math.pow(10,dec);
  var ab = [ "k", "m", "b", "t" ];
  for (var i=ab.length-1; i>=0; i--) {
    var size = Math.pow(10,(i+1)*3);
    if(size <= num) {
      num = Math.round(num*dec/size)/dec;
      if((num == 1000) && (i < ab.length - 1)) {
        num = 1;
        i++;
      }
      num += ab[i];
      break;
    }
  }
  return num;
};

function roundUp(num){
  if(num === 0){
    return 10000;
  }
  var factor = Math.pow(10, Math.floor(Math.log(num) / Math.LN10));
  var rounded = factor * Math.ceil(num/factor);

  return rounded + (rounded*0.1);
}