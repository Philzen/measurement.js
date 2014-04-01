'use strict';

define([ 'measurement' ], function( measurement ) {

    describe("MeasurementJs API: ", function() {

        it("first call (i.e. `measurementJs('Speed')` can be kept as reference", function() {
            expect(typeof measurement('Speed')).toBe('object');
        });

        it("has a convert() function", function() {
            expect(typeof measurement().convert).toBe('function');
        });

        describe("measurement().convert(someValue)", function() {
            var testUnitType = 'Distance',
                testValue = 42,
                testValue2 = 666,
                convertFunction = measurement(testUnitType).convert(testValue),
                convertFunction2 = measurement(testUnitType)
                .convert(testValue2),
                someUnit = 'km',
                someOtherUnit = 'm';

            it("returns an Object, which", function() {
                expect(typeof convertFunction).toBe('object');
            });

            it("has a from() and a to() function", function() {
                expect(convertFunction.from).toBeDefined();
                expect(convertFunction.to).toBeDefined();
            });

            describe("from()", function() {
                it("returns the same object on first chained call", function() {
                    expect(convertFunction.from()).toBe(convertFunction);
                });
            });

            describe("from(someUnit)", function() {
                var fromSomeUnitReturn = convertFunction.from(someUnit);
                it("returns the same object on first chained call", function() {
                    expect(fromSomeUnitReturn).toBe(convertFunction);
                });

                it("returns a numeric value when to(someOtherUnit) is called on the returned object", function() {
                    // TODO find out why we need to do this again in this scope - BDD doesn't seem scrope safe here
                    var fromSomeUnitReturn = convertFunction.from(someUnit);

                    var returnedOnSecondChainedCall = fromSomeUnitReturn.to(someOtherUnit);
                    expect(typeof returnedOnSecondChainedCall).toBe('number');
                });

                it("returns *the same* value when to(someUnit) - the same unit - is called on the returned object", function() {
                    expect(measurement(testUnitType).convert(testValue)
                        .from(someUnit).to(someUnit)).toBe(testValue);
                });

            });


            describe("to()", function() {
                it("returns the same object on first chained call", function() {
                    expect(convertFunction2.to()).toBe(convertFunction2);
                });
            });


            describe("to(someUnit)", function() {
                var toSomeUnitReturn = convertFunction2.to(someUnit);
                it("returns the same object on first chained call", function() {
                    expect(toSomeUnitReturn).toBe(convertFunction2);
                });

                it("returns a value when from(someOtherUnit) is called on the returned object", function() {
                    expect(convertFunction2.to(someUnit).from(someOtherUnit))
                        .toBeDefined();
                });
            });
        });
    });
});
