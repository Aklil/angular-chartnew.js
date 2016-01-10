/**
 * Created by aklil on 1 Jan 2016.
 */

angular.module(
  'angular-chartnewjs'
  , []
  )
  /*generic directive that accepts chartType, chartData and chartOptions
  *Chart type uses '@' for one way text binding, so the chartType is provided on the canvas element as a text.
  *chartData and chartOptions use two data binding that are passed from a controller then to the view and inturn
  * chartData and chartOptions should be provided correctly according to chartnewjs specs for each chartype.
  * to the directive.
  * please take a look at the demo.
  */
  .directive(
    'chartnewjs',
    ['$window', function ($window) {
      return {
        restrict: 'A',
        scope: {
          chartnewjsType: '@'
          , chartnewjsData: '='
          , chartnewjsOptions: '='
        },
        link: function (scope, elem, attrs) {
          function setChart(chartType, chartData, chartOptions) {
            var ctx = elem[0].getContext("2d");
            $window.dashboard = new Chart(ctx)[chartType](chartData, chartOptions);

          }
          scope.$watch('chartnewjsData', function (newValue, oldValue, scope) {
            if (newValue) {
              setChart(scope.chartnewjsType, scope.chartnewjsData, scope.chartnewjsOptions);
            }
          });
        }
      };
    }]
  );

  /*//OR Separately with more customizations
  //The following are demonstrations for bar and line charts, you can add other chart types
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
*/