#     MeasurementJs

[![Build Status](https://travis-ci.org/Philzen/measurement.js.svg?branch=0-1-stable)]
(https://travis-ci.org/Philzen/measurement.js)
[![devDependency Status](https://david-dm.org/philzen/measurement.js/dev-status.svg?theme=shields.io)]
(https://david-dm.org/philzen/measurement.js#info=devDependencies) 
[![Code Climate](https://codeclimate.com/github/Philzen/measurement.js.png)]
(https://codeclimate.com/github/Philzen/measurement.js)

Nice unit of measure conversion, featuring:
- __Simplicity__: an easy to-use, Behaviour driven API 
- __Sophistication__: full test coverage from project day one
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

 - In the Browser:
Simply open test/index.html in the browser environment you want to test

 - CLI-based (using npm)  
`npm test`

 - CLI-based (w/o npm, you will need to ensure  phantomjs is available yourself)  
`phantomjs test/phantomRunner.js test/index.html`

### Roadmap

For current and future state of affairs, have a peek at the [Roadmap](ROADMAP.md) in the root project folder.

### Get it

Currently you only need to download and include [measurement.js](https://raw.githubusercontent.com/Philzen/measurement.js/0-1-stable/measurement.js) in your project.

In case the node package manager is part of your development stack, this may be more comfortable for you:

[![NPM](https://nodei.co/npm/measurementjs.png?downloads=true&stars=true)](https://www.npmjs.org/package/measurementjs)

### Inspiring projects

- http://www.codeproject.com/Articles/23087/Measurement-Unit-Conversion-Library (a C# / XML based approach)
- http://momentjs.com/ (Beautiful & small code base, great simplistic API - role model for MeasurementJs)
- http://www.convert-me.com/en/convert/weight/ (all possible conversions one could think of already implemented in JS)
