/**
 * Created by aklil on 1 Jan 2016.
 */

angular.module(
  'angular-chartnewjs'
  , []
  )
  .directive(
    'chartnewjsBar',
    ['$window', function ($window) {
      return {
        restrict: 'A',
        scope: {
          chartnewjsData: '=',
          chartnewjsOptions: '='
        },
        compile: function (tElem, attrs) {
          //add a common(optional) behaviour to dom elements before returning a link function
          tElem.attr('height', tElem[0].parentNode.style.height);
          tElem.attr('width', tElem[0].parentNode.style.width);
          return function (scope, elem, attrs) {
            //the anonymous link function: it acts on the instance directive
            function setChart(chartData, chartOptions) {
              var ctx = elem[0].getContext("2d");
              $window.dashboardBar = new Chart(ctx).Bar(chartData, chartOptions);
            }

            scope.$watch('chartnewjsData', function (newValue, oldValue, scope) {
              if (newValue) {
                setChart(scope.chartnewjsData, scope.chartnewjsOptions);
              }
            });
          };
        }
      };
    }]
  )
  .directive(
    'chartnewjsLine',
    ['$window', function ($window) {
      return {
        restrict: 'A',
        scope: {
          chartnewjsType: '='
        , chartnewjsData: '='
        , chartnewjsOptions: '='
        },
        compile: function (tElem, attrs) {
          tElem.attr('height', tElem[0].parentNode.style.height);
          tElem.attr('width', tElem[0].parentNode.style.width);
          return function (scope, elem, attrs) {
            function setChart(chartType, chartData, chartOptions) {
              var ctx = elem[0].getContext("2d");
              $window.dashboardLine = new Chart(ctx).Line(chartData, chartOptions);
            }

            scope.$watch('chartnewjsData', function (newValue, oldValue, scope) {
              if (newValue) {
                setChart(scope.chartnewjsType, scope.chartnewjsData, scope.chartnewjsOptions);
              }
            });
          };
        }
      };
    }]
  );