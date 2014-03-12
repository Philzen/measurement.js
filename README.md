# [![Build Status](https://travis-ci.org/Philzen/measurement.js.png?branch=master)](https://travis-ci.org/Philzen/measurement.js)       [![Code Climate](https://codeclimate.com/github/Philzen/measurement.js.png)](https://codeclimate.com/github/Philzen/measurement.js)    MeasurementJs 


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
To run them, just open test/index.html in a browser.  
Alternatively, the test suite may be run on the console through phantomjs: `phantomjs test/phantomRunner.js test/index.html`

### Project status

For current and future state of affairs, have a peek at the [Roadmap](ROADMAP.md) in the root project folder.

### Inspiring projects

- http://www.codeproject.com/Articles/23087/Measurement-Unit-Conversion-Library (a C# / XML based approach)
- http://momentjs.com/ (Beautiful & small code base, great simplistic API - role model for MeasurementJs)
- http://www.convert-me.com/en/convert/weight/ (all possible conversions one could think of already implemented in JS)
