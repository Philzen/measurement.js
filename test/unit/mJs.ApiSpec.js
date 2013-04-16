

'use strict';

describe("MeasurementJs API: ", function() {

	it("has a convert() function", function() {
		expect(typeof measurement().convert).toBe('function');
	});

	describe("measurement().convert(someValue)", function() {
		var convertFunction = measurement().convert(1),
			convertFunction2 = measurement().convert(2),
			someUnit = 'km/h',
			someOtherUnit = 'm';

		it("returns an Object", function() {
			expect(typeof convertFunction).toBe('object');
		});

		it("which has a from() and a to() function", function() {
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

			it("returns a value when from(someOtherUnit) is called on the returned object", function() {
				expect(fromSomeUnitReturn.to(someOtherUnit)).toBeDefined();
			});
		});
		
		
		describe("to()", function() {
			it("returns the same object on first chained call", function() {
				expect(convertFunction.to()).toBe(convertFunction);
			});
		});
		
		
		describe("to(someUnit)", function() {
			var toSomeUnitReturn = convertFunction2.to(someUnit);
			it("returns the same object on first chained call", function() {
				expect(toSomeUnitReturn).toBe(convertFunction2);
			});

			it("returns a value when to(someOtherUnit) is called on the returned object", function() {
				expect(convertFunction2.to(someUnit).from(someOtherUnit)).toBeDefined();
			});
		});
	});
});