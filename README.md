#     MeasurementJs

[![Build Status](https://travis-ci.org/Philzen/measurement.js.svg?branch=master)](https://travis-ci.org/Philzen/measurement.js)
[![NPM devDependencies Status](https://david-dm.org/philzen/measurement.js/dev-status.svg?theme=shields.io)](https://david-dm.org/philzen/measurement.js#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/Philzen/measurement.js.png)](https://codeclimate.com/github/Philzen/measurement.js)

Nice unit of measure conversion, featuring:
- __Simplicity__: an easy to-use, Behaviour driven API 
- __Sophistication__:  [![Coverage Status](https://coveralls.io/repos/Philzen/measurement.js/badge.png?branch=master)](https://coveralls.io/r/Philzen/measurement.js?branch=master) full test coverage from project day one
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
    .to(measurement.Unit.Speed.METRES_PER_SECOND);       // returns 36
```


### Test-Driven Development

The API definition and all conversion operations are covered by jasmine tests. 
The test suite can be executed straightaway and easily, for example:

- Test directly in the browser
Simply open test/index.html in the browser

 - With Karma test driver (CLI-based using npm)
`npm run-script karma`
That command just a shorthand for `node_modules/.bin/karma start`. If you have
`karma-cli` already installed globally, you can also just do `karma start`
    1. now open any browser you like and open http://localhost:9876
    2. observe the output on the test console

 - CLI-based (w/o npm & karma, you will need to ensure phantomjs is available yourself)  **currently broken**
`phantomjs test/phantomRunner.js test/index.html`

### Roadmap

For current and future state of affairs, have a peek at the [Roadmap](ROADMAP.md) in the root project folder.

### Get it

master:  Clone from [Github](https://github.com/Philzen/measurement.js/), then run `npm install` in the project root

latest release - install via NPM:

  ![NPM](https://nodei.co/npm/measurementjs.png?downloads=true&stars=true)


### Currently tested platforms

Please feel free to add your own test results.

    PhantomJS 1.9.7 (Linux): Executed 46 of 46 SUCCESS (0.027 secs / 0.022 secs)
    Chrome 18.0.1025 (Linux): Executed 46 of 46 SUCCESS (0.06 secs / 0.035 secs)
    Firefox 28.0.0 (Ubuntu): Executed 46 of 46 SUCCESS (0.037 secs / 0.026 secs)


### Inspiring projects

- http://www.codeproject.com/Articles/23087/Measurement-Unit-Conversion-Library (a C# / XML based approach)
- http://momentjs.com/ (Beautiful & small code base, great simplistic API - role model for MeasurementJs)
- http://www.convert-me.com/en/convert/weight/ (all possible conversions one could think of already implemented in JS)
