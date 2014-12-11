#     MeasurementJs
[![Code Climate](https://codeclimate.com/github/Philzen/measurement.js.png)](https://codeclimate.com/github/Philzen/measurement.js)
[![Build Status](https://travis-ci.org/Philzen/measurement.js.svg?branch=0-1-stable)](https://travis-ci.org/Philzen/measurement.js)
[![devDependency Status](https://david-dm.org/philzen/measurement.js/dev-status.svg?theme=shields.io)](https://david-dm.org/philzen/measurement.js#info=devDependencies) 


Nice unit of measure conversion, featuring:
- __Simplicity__: an easy to-use, Behaviour driven API 
- __Sophistication__:  [![Coverage Status](https://coveralls.io/repos/Philzen/measurement.js/badge.png?branch=0-1-stable)](https://coveralls.io/r/Philzen/measurement.js?branch=0-1-stable) full test coverage from project day one
- __Quality__: aiming at high performance whilst maintaining a fair trade-off between accuracy 
- __Adaptability__: Easy to extend for new measurement types (incl. i18n tables)


``` js
measurement('Temperature').convert(20)
    .from(measurement.Unit.Temperature.CELSIUS)
    .to(measurement.Unit.Temperature.FAHRENHEIT);        // returns 68

measurement('Distance').convert(1)
    .from(measurement.Unit.Distance.KILOMETRE)
    .to(measurement.Unit.Distance.METRE);                // returns 1000
    
measurement('Speed').convert(10)
    .from(measurement.Unit.Speed.KILOMETRE_PER_HOUR)
    .to(measurement.Unit.Speed.METRE_PER_SECOND);       // returns 2.7777777777777777
```


### Test-Driven Development

The API definition and all conversion operations are covered by jasmine tests. 
The test suite can be executed straightaway and easily, for example:

- Option 1: Test directly in the browser
Simply open test/index.html in the browser

- Option 2: Headless Testing via Karma test driver  
`npm run-script karma`  
Above is just a shorthand for `node_modules/.bin/karma start`. If you have
`karma-cli` already installed globally, you can also just do `karma start`.
Karma will startup and run all tests on phantomjs

- Option 3: Any Browser you like with Karma
    1. Set `singleRun:false` in `./karma.conf.js`
    2. Start the Karma with `npm run-script karma` or `npm test` or ... (see above)
    3. navigate any browser you'd like to test to http://localhost:9876
    4. observe the output on the test console

### Roadmap

For current and future state of affairs, have a peek at the [Roadmap](ROADMAP.md) in the root project folder.

### Get it

Currently you only need to download and include [measurement.js](https://raw.githubusercontent.com/Philzen/measurement.js/0-1-stable/measurement.js) in your project.

latest release - install via NPM:

In case the node package manager is part of your development stack, this may be more comfortable for you:

[![NPM](https://nodei.co/npm/measurementjs.png?downloads=true&stars=true)](https://www.npmjs.org/package/measurementjs)


### Currently tested platforms

Please feel free to add your own test results.

    PhantomJS 1.9.7 (Linux): Executed 46 of 46 SUCCESS (0.027 secs / 0.022 secs)
    Chrome 18.0.1025 (Linux): Executed 46 of 46 SUCCESS (0.06 secs / 0.035 secs)
    Firefox 28.0.0 (Ubuntu): Executed 46 of 46 SUCCESS (0.037 secs / 0.026 secs)


### Inspiring projects

- http://www.codeproject.com/Articles/23087/Measurement-Unit-Conversion-Library (a C# / XML based approach)
- http://momentjs.com/ (Beautiful & small code base, great simplistic API - role model for MeasurementJs)
- http://www.convert-me.com/en/convert/weight/ (all possible conversions one could think of already implemented in JS)
