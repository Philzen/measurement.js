
describe("measurement.Unit.Speed", function() {
	expect(measurement.Unit.Speed).toBeDefined();

	var speedUnit = mJsNamespace.measurement.Unit.Speed;
	it('is an object', function() {
		expect(typeof speedUnit).toBe('object');
	});

	it('with constant string keys', function() {
		for (var i in speedUnit) {
			expect(typeof speedUnit[i]).toBe('string');
			expect(speedUnit[i].length).toBeGreaterThan(0);
		}
	});

	var convertSpeed = measurement('Speed').convert;
	describe("var convertSpeed = measurementJs('Speed').convert;", function() {
		it("returns 36 for convertSpeed(10).from(speedUnit.METRE_PER_SECOND).to(speedUnit.KILOMETRE_PER_HOUR)", function() {
			expect(
				convertSpeed(10).from(speedUnit.METRE_PER_SECOND).to(speedUnit.KILOMETRE_PER_HOUR)
				).toBe(36);
		});

		it("returns 10 for convertSpeed(36).to(speedUnit.METRE_PER_SECOND).from(speedUnit.KILOMETRE_PER_HOUR)", function() {
			expect(
				convertSpeed(36).to(speedUnit.METRE_PER_SECOND).from(speedUnit.KILOMETRE_PER_HOUR)
				).toBe(10);
		});

		it("returns 80.5297065 for ...(36).from(speedUnit.METRE_PER_SECOND).to(speedUnit.MILES_PER_HOUR)", function() {
			expect(
				parseFloat((convertSpeed(36).from(speedUnit.METRE_PER_SECOND).to(speedUnit.MILES_PER_HOUR)).toFixed(8))
				).toBe(80.52970651);
		});

		it("returns 6.21371192 for mJs('Speed').convert(10).from(speedUnit.KILOMETRE_PER_HOUR).to(speedUnit.MILES_PER_HOUR)", function() {
			expect(
				parseFloat((convertSpeed(10).from(speedUnit.KILOMETRE_PER_HOUR).to(speedUnit.MILES_PER_HOUR)).toFixed(8))
				).toBe(6.21371192);
		});

	});
});
