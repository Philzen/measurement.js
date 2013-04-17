
describe("measurement.Unit.Speed", function() {
	expect(measurement.Unit.Speed).toBeDefined();

	var speedUnit = mJsNamespace.measurement.Unit.Speed;
	it('is an object', function() {
		expect(typeof speedUnit).toBe('object');
	});

	it('which constant string keys', function() {
		for (var i in speedUnit) {
			expect(typeof speedUnit[i]).toBe('string');
			expect(speedUnit[i].length).toBeGreaterThan(0);
		}
	});

	describe("", function() {
		it("returns 36 for mJs('Speed').convert(10).from(speedUnit.METRE_PER_SECOND).to(speedUnit.KILOMETRE_PER_HOUR)", function() {
			expect(
				measurement('Speed').convert(10).from(speedUnit.METRE_PER_SECOND).to(speedUnit.KILOMETRE_PER_HOUR)
				).toBe(36);
		});

		it("returns 10 for mJs('Speed').convert(36).to(speedUnit.METRE_PER_SECOND).from(speedUnit.KILOMETRE_PER_HOUR)", function() {
			expect(
				measurement('Speed').convert(36).to(speedUnit.METRE_PER_SECOND).from(speedUnit.KILOMETRE_PER_HOUR)
				).toBe(10);
		});

		it("returns 80.5297065 for mJs('Speed').convert(36).from(speedUnit.METRE_PER_SECOND).to(speedUnit.MILES_PER_HOUR)", function() {
			expect(
				parseFloat((measurement('Speed').convert(36).from(speedUnit.METRE_PER_SECOND).to(speedUnit.MILES_PER_HOUR)).toFixed(8))
				).toBe(80.52970651);
		});

//		it("returns 80.5297065 for mJs('Speed').convert(10).from(speedUnit.KILOMETRE_PER_HOUR).to(speedUnit.MILES_PER_HOUR)", function() {
//			expect(
//				parseFloat((measurement('Speed').convert(10).from(speedUnit.KILOMETRE_PER_HOUR).to(speedUnit.MILES_PER_HOUR)).toFixed(8))
//				).toBe(80.52970651);
//		});

	});
});
