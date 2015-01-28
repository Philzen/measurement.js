'use strict';

define(['measurement'], function (measurement) {
	describe("measurement.Unit.Mass", function () {
		it('is defined', function () {
			expect(measurement.Unit.Mass).toBeDefined();
		});

		var massUnit = measurement.Unit.Mass;
		it('is an object', function () {
			expect(typeof massUnit).toBe('object');
		});

		it('which contains string keys that we can use as constants', function () {
			for (var i in massUnit) {
				expect(typeof massUnit[i]).toBe('string');
				expect(massUnit[i].length).toBeGreaterThan(0);
			}
		});

		describe("convert():", function () {

			it('1 Mass.KILOGRAM equals 1000 Mass.GRAM', function () {
				expect(measurement('Mass').convert(1).from(massUnit.KILOGRAM)
						.to(massUnit.GRAM)).toBe(1000);
			});

			it('1 Mass.POUND equals 453.6 Mass.GRAM', function () {
				expect(measurement('Mass').convert(1).from(massUnit.POUND)
						.to(massUnit.GRAM)).toBe(453.6);
			});

			it('1 Mass.OUNCE equals 0.0625 Mass.POUND', function () {
				expect(measurement('Mass').convert(1).from(massUnit.OUNCE)
						.to(massUnit.POUND)).toBe(0.0625);
			});


		});
	});
});
