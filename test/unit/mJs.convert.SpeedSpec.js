"use strict";

define(['measurement'], function (measurement) {

	describe("measurement.Unit.Speed", function () {
		it('is defined', function () {
			expect(measurement.Unit.Speed).toBeDefined();
		});

		var speedUnit = measurement.Unit.Speed;
		it('is an object', function () {
			expect(typeof speedUnit).toBe('object');
		});

		it('which contains string keys that we can use as constants', function () {
			for (var i in speedUnit) {
				expect(typeof speedUnit[i]).toBe('string');
				expect(speedUnit[i].length).toBeGreaterThan(0);
			}
		});

		var convertSpeed = measurement('Speed').convert;
		describe("var convertSpeed = measurement('Speed').convert,\n    speedUnit = measurement.Unit.Speed;", function () {
			it("returns 36         for convertSpeed( 10 ).from( speedUnit.METRE_PER_SECOND ).to( speedUnit.KILOMETRE_PER_HOUR )", function () {
				expect(
						convertSpeed(10).from(speedUnit.METRE_PER_SECOND).to(speedUnit.KILOMETRE_PER_HOUR)
						).toBe(36);
			});

			it("returns 10         for convertSpeed( 36 ).to( speedUnit.METRE_PER_SECOND ).from( speedUnit.KILOMETRE_PER_HOUR )", function () {
				expect(
						convertSpeed(36).to(speedUnit.METRE_PER_SECOND).from(speedUnit.KILOMETRE_PER_HOUR)
						).toBe(10);
			});

			it("returns 80.5297065 for convertSpeed( 36 ).from( speedUnit.METRE_PER_SECOND ).to( speedUnit.MILES_PER_HOUR )", function () {
				expect(
						parseFloat((convertSpeed(36).from(speedUnit.METRE_PER_SECOND).to(speedUnit.MILES_PER_HOUR)).toFixed(8))
						).toBe(80.52970651);
			});

			it("returns 6.21371192 for convertSpeed( 10 ).from( speedUnit.KILOMETRE_PER_HOUR ).to( speedUnit.MILES_PER_HOUR )", function () {
				expect(
						parseFloat((convertSpeed(10).from(speedUnit.KILOMETRE_PER_HOUR).to(speedUnit.MILES_PER_HOUR)).toFixed(8))
						).toBe(6.21371192);
			});

			it("returns 4.63       for convertSpeed( 9 ).from( speedUnit.KNOT ).to( speedUnit.METRE_PER_SECOND )", function () {
				expect(
						convertSpeed(9).from(speedUnit.KNOT).to(speedUnit.METRE_PER_SECOND)
						).toBe(4.63);
			});

			it("returns 9.71922246 for convertSpeed( 18 ).from( speedUnit.KILOMETRE_PER_HOUR ).to( speedUnit.KNOT )", function () {
				expect(
						parseFloat(convertSpeed(18).from(speedUnit.KILOMETRE_PER_HOUR).to(speedUnit.KNOT).toFixed(8))
						).toBe(9.71922246);
			});

			it("returns 25.200311  for convertSpeed( 29 ).from( speedUnit.MILES_PER_HOUR ).to( speedUnit.KNOT )", function () {
				expect(
						parseFloat(convertSpeed(29).from(speedUnit.MILES_PER_HOUR).to(speedUnit.KNOT).toFixed(7))
						).toBe(25.200311);
			});

			it("returns ~29        for convertSpeed( 25.200311 ).from( speedUnit.KNOT ).to( speedUnit.MILES_PER_HOUR )", function () {
				expect(
						parseFloat(convertSpeed(25.200311).from(speedUnit.KNOT).to(speedUnit.MILES_PER_HOUR).toFixed(7))
						).toBe(29);
			});

		});
	});
});
