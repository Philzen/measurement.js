
describe("measurement.Unit.Duration", function() {
	expect(measurement.Unit.Duration).toBeDefined();

	var durationUnit = measurement.Unit.Duration;
	it('is an object', function() {
		expect(typeof durationUnit).toBe('object');
	});

	it('which contains string keys that we can use as constants', function() {
		for (var i in durationUnit) {
			expect(typeof durationUnit[i]).toBe('string');
			expect(durationUnit[i].length).toBeGreaterThan(0);
		}
	});

	var convertDuration = measurement('Duration').convert;
	describe("measurement('Duration').convert...", function() {
		it("returns 1 for convert( 60 ).from( Duration.MINUTE ).to( Duration.HOUR )", function() {
			expect(
				convertDuration(60).from(durationUnit.MINUTE).to(durationUnit.HOUR)
				).toBe(1);
		});
		
		it("returns 1 for convert( 60 ).from( Duration.SECOND ).to( Duration.MINUTE )", function() {
			expect(
				convertDuration(60).from(durationUnit.MINUTE).to(durationUnit.HOUR)
				).toBe(1);
		});

		it("returns 7200 for convert( 2 ).from( Duration.HOUR ).to( Duration.SECOND )", function() {
			expect(
				convertDuration(2).from(durationUnit.HOUR).to(durationUnit.SECOND)
				).toBe(7200);
		});
		
	});
});
