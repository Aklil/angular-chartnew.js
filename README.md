# angular-chartnew.js
A simple AngularJS 1.x directive for ChartNewjs

## Installation
 - via bower 
`bower install angular-chartnew.js`
 - include angularjs, chartnewjs and angular-chartnew.js in dist folder in your application

##Usage

The directive accepts `chartnewjs-type`, `chartnewjs-data` and `chartnewjs-options`
   - `chartnewjs-type` uses `@` for one way text binding, so the `chartnewjs-type` is provided on the canvas element as a text.
   - `chartnewjs-data` and `chartnewjs-options` use two way data binding that are passed from a controller then to the view and in turn to the directive.
   - `chartnewjs-data` and `chartnewjs-options` should be provided correctly according to chartnewjs specs for each chartype.

Take a look at the demo how the directive is used.

##Credits
Chartnewjs is a fork of Chartjs : https://github.com/FVANCOP/ChartNew.js/
