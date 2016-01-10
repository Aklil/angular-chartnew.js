# angular-chartnew.js
A simple AngularJS 1.x directive for ChartNewjs

install via bower

bower install angular-chartnew.js

Usage

The directive accepts chartType, chartData and chartOptions
    Chart type uses '@' for one way text binding, so the chartType is provided on the canvas element as a text.
    chartData and chartOptions use two way data binding that are passed from a controller then to the view and in turn to the directive.
    chartData and chartOptions should be provided correctly according to chartnewjs specs for each chartype.

Take a look at the demo how the directive is used.